import { registerPlugin } from '@capacitor/core';

import type { CapacitorCozySanctuaryPlugin } from './definitions';

const CapacitorCozySanctuary = registerPlugin<CapacitorCozySanctuaryPlugin>('CapacitorCozySanctuary', {
  web: () => import('./web').then((m) => new m.CapacitorCozySanctuaryWeb()),
});

export * from './definitions';
export { CapacitorCozySanctuary };
