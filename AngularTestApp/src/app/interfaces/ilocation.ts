import { ICoordinates } from './icoordinates';
import { IStreet } from './istreet';
import { ITimezone } from './itimezone';

export interface ILocation{
    city: string;
    coordinates: ICoordinates;
    country: string;
    postcode: number;
    state: string;
    street: IStreet;
    timezone: ITimezone;
}