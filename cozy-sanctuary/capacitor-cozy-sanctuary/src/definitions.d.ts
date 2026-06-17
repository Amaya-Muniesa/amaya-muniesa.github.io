export interface CapacitorCozySanctuaryPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
