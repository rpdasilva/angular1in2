export default class HelloWorldController {
    public message: string;
    public gridHeaders: Array<string>;
    public grid: Array<string>;
    public templates: Array<any>;

    static get $inject() {
        return [
            'peopleService',
            'helloWorldService'
        ];
    }

    constructor(
        private peopleService,
        private helloWorldService) {

        this.message = 'Hello World';
        this.store = helloWorldService.getStore();
        this.peopleStore = peopleService.getStore();
        this.templates = [
            {
                template: `
                    <div class="row" style="height: 25px; white-space: nowrap">
                        <span ng-repeat="(key, value) in item" style="padding: 0 5px;">{{value}}</span>
                    </div>`,
                name: 'default',
                item: 'item',
                base: null
            }
        ];

        console.log('helloWorldCtrl constructed');
        helloWorldService.helloWorld('NG1');
        peopleService.logPeople();
    }

    toggleFoo() {
        this.helloWorldService.toggleFoo();
    }

    togglePeopleFoo() {
        this.peopleService.toggleFoo();
    }

    updateText($event) {
        this.helloWorldService.updateText($event.target.value);
    }

    reverseOrder() {
        this.grid.reverse();
    }
}
