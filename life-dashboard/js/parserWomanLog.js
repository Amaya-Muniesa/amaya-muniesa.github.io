class WomanLogParser {

    constructor() {

        this.fileInput = document.getElementById("womanLogInput");
        this.button = document.getElementById("importWomanLogButton");
        this.status = document.getElementById("womanImportStatus");

        this.button.addEventListener("click", () => this.import());

    }

    async import() {

        if (!this.fileInput.files.length) {

            alert("Selecciona primero el CSV de WomanLog.");
            return;

        }

        const file = this.fileInput.files[0];

        this.status.textContent = "Leyendo archivo...";

        const text = await file.text();

        const data = this.parseCSV(text);
        console.table(data);
        await DB.clear("cycles");
        await DB.saveCycles(data);

        this.status.textContent =
            `✅ ${data.length} registros importados`;

        console.log(data);

    }

    parseCSV(text) {

        const rows = text.split(/\r?\n/);

        const events = [];

        for (let row of rows) {

            row = row.trim();

            if (row === "")
                continue;

            // Saltar cabecera
            if (row.startsWith("Date"))
                continue;

            const columns = row.split(",");

            if (columns.length < 2)
                continue;

            const rawDate = columns[0].trim();

            const description = columns.slice(1).join(",").trim();

            const event = {

                date: this.normalizeDate(rawDate),

                rawDate: rawDate,

                description: description,

                type: this.detectType(description),

                duration: this.detectDuration(description)

            };

            events.push(event);

        }

        return events.sort((a, b) => a.date.localeCompare(b.date));

    }

    normalizeDate(dateString) {

        // Convierte:
        // 10/1/11
        // a:
        // 2011-01-10

        const parts = dateString.split("/");

        if (parts.length !== 3)
            return dateString;

        let day = parts[0].padStart(2, "0");
        let month = parts[1].padStart(2, "0");
        let year = parts[2];

        if (year.length === 2)
            year = "20" + year;

        return `${year}-${month}-${day}`;

    }

    detectType(text) {

        const t = text.toLowerCase();

        if (t.includes("comienzo del periodo"))
            return "period_start";

        if (t.includes("fin del periodo"))
            return "period_end";

        if (t.includes("ovulación"))
            return "ovulation";

        if (t.includes("fértil"))
            return "fertile";

        if (t.includes("síntoma"))
            return "symptom";

        return "other";

    }

    detectDuration(text) {

        const match = text.match(/(\d+)\s*d/i);

        if (match) {

            return parseInt(match[1]);

        }

        return null;

    }

}

window.addEventListener("DOMContentLoaded", () => {

    new WomanLogParser();

});