import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class Ag2Service {
    people: any;

    constructor(private http: Http) {
        this.people = this.http.get('/mocks/people.json');
        this.store = {
            foo: true
        };
        console.log('Ag2Service constructed');
    }

    getPeople() {
        return this.people;
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