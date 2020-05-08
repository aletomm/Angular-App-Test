import { ILocation } from './../interfaces/ilocation';
import { Street } from '../classes/street';

export class Location implements ILocation {
    city: string;
    country: string;
    postcode: any;
    state: string;
    street: Street;

    constructor(city: string, country: string, postcode: any, state: string, street: Street) {
        this.city = city;
        this.country = country;
        this.postcode = postcode;
        this.state = state;
        this.street = street;
    }
}