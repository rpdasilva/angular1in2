import {Component} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {appNG1} from '../../core/upgrade-adapters';
import {PeopleService} from '../../core/people.service';
import HelloWorldService from '../../ng1/hello-world/hello-world.service';

@Component({
    selector: 'grid',
    directives: [
        appNG1.adapter.upgradeNg1Component('helloWorld')
    ],
    providers: [
        HTTP_PROVIDERS,
        PeopleService,
        HelloWorldService
    ],
    templateUrl: '/source/components/grid/grid.html'
})
export class Grid {
    private gridHeaders: Array<string>;
    private grid: Array<any>;
    private filteredGrid: Array<any>;
    private store: any;
    private hwService: HelloWorldService;

    constructor(private peopleService: PeopleService) {
        this.hwService = window.angular.element(document.body).injector().get('helloWorldService');
        this.hwService.helloWorld('NG2');
        this.store = this.hwService.getStore();

        peopleService.getPeople()
            .map(res => res.json())
            .subscribe(data => {
                this.gridHeaders = Object.keys(data[0]);
                this.grid = data;
                this.filteredGrid = data;
            });
    }

    toggleFoo() {
        this.hwService.toggleFoo();
    }

    updateText($event) {
        var text = $event.target.value;
        this.hwService.updateText(text);

        if(text.length) {
            this.filteredGrid = this.grid.filter(row => JSON.stringify(row).toLowerCase().indexOf(text.toLowerCase()) > -1);
        } else {
            this.filteredGrid = this.grid;
        }
    }

    reverseOrder() {
        this.filteredGrid.reverse();
    }
}