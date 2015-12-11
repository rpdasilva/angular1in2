export default class HelloWorldService {
    store: any;

    constructor() {
        this.store = {
            foo: true,
            text: 'Lorem ipsum'
        };
    }

    helloWorld(app: string) {
        console.log('HelloWorldService instantiated inside ' + app);
    }

    getStore() {
        return this.store;
    }

    toggleFoo(value: string) {
        this.store.foo = !this.store.foo;
    }

    updateText(value: string) {
        this.store.text = value;
    }
}