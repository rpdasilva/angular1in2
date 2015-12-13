export class Ag1Service {
    private store: any;

    constructor() {
        this.store = {
            foo: true,
            filterText: ''
        };
    }

    helloWorld(context: string) {
        console.log('Ag1Service injected inside ' + context);
    }

    getStore() {
        return this.store;
    }

    toggleAg1Foo() {
        this.store.foo = !this.store.foo;
    }
}