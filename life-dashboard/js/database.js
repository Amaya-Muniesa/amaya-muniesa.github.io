class LifeDatabase {

    constructor() {
        this.dbName = "LifeDashboardDB";
        this.dbVersion = 1;
        this.db = null;
    }

    async init() {

        return new Promise((resolve, reject) => {

            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => reject(request.error);

            request.onsuccess = () => {
                this.db = request.result;
                console.log("IndexedDB inicializada");
                resolve();
            };

            request.onupgradeneeded = (event) => {

                const db = event.target.result;

                // ============================
                // Pasos de Google Fit
                // ============================

                if (!db.objectStoreNames.contains("steps")) {

                    const store = db.createObjectStore("steps", {
                        keyPath: "date"
                    });

                    store.createIndex("date", "date", {
                        unique: true
                    });

                }

                // ============================
                // Ciclos WomanLog
                // ============================

                if (!db.objectStoreNames.contains("cycles")) {

                    const store = db.createObjectStore("cycles", {
                        keyPath: "date"
                    });

                    store.createIndex("date", "date", {
                        unique: true
                    });

                }

                // ============================
                // Configuración
                // ============================

                if (!db.objectStoreNames.contains("settings")) {

                    db.createObjectStore("settings", {
                        keyPath: "key"
                    });

                }

                // ============================
                // Metadatos
                // ============================

                if (!db.objectStoreNames.contains("metadata")) {

                    db.createObjectStore("metadata", {
                        keyPath: "key"
                    });

                }

            };

        });

    }

    // ==========================================================
    // Método genérico para guardar datos
    // ==========================================================

    async save(storeName, data) {

        return new Promise((resolve, reject) => {

            const transaction = this.db.transaction(storeName, "readwrite");
            const store = transaction.objectStore(storeName);

            if (Array.isArray(data)) {

                data.forEach(item => store.put(item));

            } else {

                store.put(data);

            }

            transaction.oncomplete = () => resolve();

            transaction.onerror = () => reject(transaction.error);

        });

    }

    // ==========================================================
    // Obtener todos los registros
    // ==========================================================

    async getAll(storeName) {

        return new Promise((resolve, reject) => {

            const transaction = this.db.transaction(storeName, "readonly");

            const store = transaction.objectStore(storeName);

            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);

            request.onerror = () => reject(request.error);

        });

    }

    // ==========================================================
    // Obtener un registro
    // ==========================================================

    async get(storeName, key) {

        return new Promise((resolve, reject) => {

            const transaction = this.db.transaction(storeName, "readonly");

            const store = transaction.objectStore(storeName);

            const request = store.get(key);

            request.onsuccess = () => resolve(request.result);

            request.onerror = () => reject(request.error);

        });

    }

    // ==========================================================
    // Eliminar un registro
    // ==========================================================

    async delete(storeName, key) {

        return new Promise((resolve, reject) => {

            const transaction = this.db.transaction(storeName, "readwrite");

            const store = transaction.objectStore(storeName);

            store.delete(key);

            transaction.oncomplete = () => resolve();

            transaction.onerror = () => reject(transaction.error);

        });

    }

    // ==========================================================
    // Vaciar un almacén
    // ==========================================================

    async clear(storeName) {

        return new Promise((resolve, reject) => {

            const transaction = this.db.transaction(storeName, "readwrite");

            transaction.objectStore(storeName).clear();

            transaction.oncomplete = () => resolve();

            transaction.onerror = () => reject(transaction.error);

        });

    }

    // ==========================================================
    // Borrar toda la base de datos
    // ==========================================================

    async deleteDatabase() {

        if (this.db) {

            this.db.close();

        }

        return new Promise((resolve, reject) => {

            const request = indexedDB.deleteDatabase(this.dbName);

            request.onsuccess = () => resolve();

            request.onerror = () => reject(request.error);

        });

    }

    // ==========================================================
    // Funciones específicas
    // ==========================================================

    async saveSteps(steps) {

        return this.save("steps", steps);

    }

    async getSteps() {

        return this.getAll("steps");

    }

    async saveCycles(cycles) {

        return this.save("cycles", cycles);

    }

    async getCycles() {

        return this.getAll("cycles");

    }

    async saveSetting(key, value) {

        return this.save("settings", {
            key,
            value
        });

    }

    async getSettings() {

        return this.getAll("settings");

    }

}

const DB = new LifeDatabase();

// ==========================================================
// Inicializar la base de datos automáticamente
// ==========================================================

window.addEventListener("DOMContentLoaded", async () => {

    try {

        await DB.init();

        console.log("Base de datos preparada");

    } catch (error) {

        console.error(error);

    }

});