import { WebPlugin } from '@capacitor/core';
export class CapacitorCozySanctuaryWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map