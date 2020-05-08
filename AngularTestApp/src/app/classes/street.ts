import { IStreet } from '../interfaces/istreet';

export class Street implements IStreet {
    name: string;
    number: number;

    constructor(name: string, number: number) {
        this.name = name;
        this.number = number;
    }
}