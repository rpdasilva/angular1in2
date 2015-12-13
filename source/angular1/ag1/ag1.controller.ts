export class Ag1Controller {
    public message: string;
    public gridHeaders: string[];
    public grid: string[];
    public templates: any[];

    static get $inject() {
        return [
            'ag2Service',
            'ag1Service'
        ];
    }

    constructor(
        private ag2Service,
        private ag1Service) {

        this.message = '<ag1> loaded';
        this.ag1Store = ag1Service.getStore();
        this.ag2Store = ag2Service.getStore();
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

        ag1Service.helloWorld('Angular 1');
        ag2Service.logAg2();
    }

    toggleAg1Foo() {
        this.ag1Service.toggleAg1Foo();
    }

    toggleAg2Foo() {
        this.ag2Service.toggleAg2Foo();
    }

    reverseOrder() {
        this.grid.reverse();
    }
}
