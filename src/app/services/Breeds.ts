export interface BreedInfo{
        image_link: string;
        good_with_children: number;
        good_with_other_dogs: number;
        shedding: number;
        coat_length: number;
        trainability: number;
        barking: number;
        min_life_expectancy: number;
        max_life_expectancy: number;
        max_height_male: number;
        max_height_female: number;
        max_weight_male: number;
        max_weight_female: number;
        min_height_male: number;
        min_height_female: number;
        min_weight_male: number;
        min_weight_female: number;
        grooming: number;
        drooling: number;
        good_with_strangers:number;
        playfulness: number;
        protectiveness:number;
        energy: number;
        name: string;
}

export interface Breed{
        name:string;
        index: number;
}