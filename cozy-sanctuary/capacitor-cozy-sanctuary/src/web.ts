import { WebPlugin } from '@capacitor/core';

import type { CapacitorCozySanctuaryPlugin } from './definitions';

export class CapacitorCozySanctuaryWeb extends WebPlugin implements CapacitorCozySanctuaryPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
