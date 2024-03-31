type Language = {
    name: string;
    url: string;
};

type EffectEntry = {
    effect: string;
    language: Language;
    short_effect: string;
};

export type AbilityType = {
    effect_changes: unknown[];
    effect_entries: EffectEntry[];
    flavor_text_entries: unknown[];
    generation: {
        name: string;
        url: string;
    };
    id: number;
    is_main_series: boolean;
    name: string;
    names: unknown[];
    pokemon: unknown[];
};