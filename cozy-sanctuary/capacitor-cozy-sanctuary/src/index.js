import { registerPlugin } from '@capacitor/core';
const CapacitorCozySanctuary = registerPlugin('CapacitorCozySanctuary', {
    web: () => import('./web').then((m) => new m.CapacitorCozySanctuaryWeb()),
});
export * from './definitions';
export { CapacitorCozySanctuary };
//# sourceMappingURL=index.js.map