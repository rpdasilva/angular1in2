import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class Ag2Service {
    store: any;

    constructor(private http: Http) {
        this.store = {
            foo: true,
            people: this.http.get('/mocks/people.json')
        };

        console.log('Ag2Service constructed');
    }

    logAg2() {
        console.log('Hi from Ag2Service!');
    }

    getStore() {
        return this.store;
    }

    toggleAg2Foo() {
        this.store.foo = !this.store.foo;
    }
}