import { IStreet } from './istreet';


export interface ILocation{
    city: string;
    country: string;
    postcode: any;
    state: string;
    street: IStreet;
}