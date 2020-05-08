import { IName } from './../interfaces/iname';

export class Name implements IName {
    first: string;
    last: string;
    title: string;

    constructor(fn: string, ln: string, title: string) {
        this.first = fn;
        this.last = ln;
        this.title = title;
    }
}