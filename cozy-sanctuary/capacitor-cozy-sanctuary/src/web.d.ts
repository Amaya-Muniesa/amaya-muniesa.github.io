import { WebPlugin } from '@capacitor/core';
import type { CapacitorCozySanctuaryPlugin } from './definitions';
export declare class CapacitorCozySanctuaryWeb extends WebPlugin implements CapacitorCozySanctuaryPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
