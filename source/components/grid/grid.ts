import {Component, Inject} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ng1App} from '../../core/upgrade-adapters';
import {PeopleService} from '../../core/people.service';
import HelloWorldService from '../../ng1/hello-world/hello-world.service';

@Component({
    selector: 'grid',
    directives: [
        ng1App.adapter.upgradeNg1Component('helloWorld')
    ],
    templateUrl: '/source/components/grid/grid.html'
})
export class Grid {
    private gridHeaders: Array<string>;
    private grid: Array<any>;
    private filteredGrid: Array<any>;
    private store: any;

    constructor(private peopleService: PeopleService, @Inject('helloWorldService') private helloWorldService: HelloWorldService) {
        this.helloWorldService.helloWorld('NG2');
        this.store = this.helloWorldService.getStore();
        this.peopleStore = this.peopleService.getStore();

        peopleService.getPeople()
            .map(res => res.json())
            .subscribe(data => {
                this.gridHeaders = Object.keys(data[0]);
                this.grid = data;
                this.filteredGrid = data;
            });
    }

    toggleFoo() {
        this.helloWorldService.toggleFoo();
    }

    togglePeopleFoo() {
        this.peopleService.toggleFoo();
    }

    updateText($event) {
        var text = $event.target.value;
        this.helloWorldService.updateText(text);

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