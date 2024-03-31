type Ability = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
};

type Cry = {
    latest: string;
    legacy: string;
};

type Form = {
    name: string;
    url: string;
};

type GameIndex = {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
};

type HeldItem = {
    item: {
        name: string;
        url: string;
    };
    version_details: VersionDetail[];
};

type Move = {
    move: {
        name: string;
        url: string;
    };
    version_group_details: VersionGroupDetail[];
};

type PastAbility = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
};

type PastType = {
    generation: {
        name: string;
        url: string;
    };
    types: Type[];
};

type Species = {
    name: string;
    url: string;
};

type Sprite = {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: Other;
    versions: { [key: string]: any };
};

interface Other {
    dream_world: DreamWorld;
    home: { [key: string]: any }[];
    'official-artwork': { [key: string]: any }[];
    showdown: { [key: string]: any }[];
}

interface DreamWorld {
    front_default: string;
    front_female: null;
}


type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
};

type Type = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};

type VersionDetail = {
    rarity: number;
    version: {
        name: string;
        url: string;
    };
};

type VersionGroupDetail = {
    level_learned_at: number;
    move_learn_method: {
        name: string;
        url: string;
    };
    version_group: {
        name: string;
        url: string;
    };
};

export type PokemonData = {
    abilities: Ability[];
    base_experience: number;
    cries: Cry;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: PastAbility[];
    past_types: PastType[];
    species: Species;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
};