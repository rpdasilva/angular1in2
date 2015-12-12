import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class PeopleService {
    people: any;

    constructor(private http: Http) {
        this.people = this.http.get('/mocks/people.json');
        this.store = {
            foo: true
        };
        console.log('PeopleService constructed');
    }

    getPeople() {
        return this.people;
    }

    logPeople() {
        console.log('Hi People!');
    }

    getStore() {
        return this.store;
    }

    toggleFoo(value: string) {
        this.store.foo = !this.store.foo;
    }
}