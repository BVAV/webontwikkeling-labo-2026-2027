export interface Recept {
    naam: string;
    beschrijving: string;
    personen: number;
    ingredienten: Ingredient[];
}

export interface Ingredient {
    naam: string;
    hoeveelheid: string;
    prijs: number;
}