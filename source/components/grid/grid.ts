import {Component, Inject} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ng1AppAdapter} from '../../core/ng-upgrade-adapters';
import {Ag2Service} from '../../core/ag2.service';
import {Ag1Service} from '../../angular1/ag1/ag1.service';

@Component({
    selector: 'grid',
    directives: [
        ng1AppAdapter.upgradeNg1Component('ag1')
    ],
    templateUrl: 'source/components/grid/grid.html',
    styleUrls: ['source/components/grid/grid.css']
})
export class Grid {
    private gridHeaders: string[];
    private grid: any[];
    private filteredGrid: any[];
    private ag1Store: any;
    private ag2Store: any;

    constructor(private ag2Service: Ag2Service, @Inject('ag1Service') private ag1Service: Ag1Service) {
        this.ag1Service.helloWorld('Angular 2');
        this.ag1Store = this.ag1Service.getStore();
        this.ag2Store = this.ag2Service.getStore();

        ag2Service.getPeople()
            .map((res: any) => res.json())
            .subscribe((data: any) => {
                this.gridHeaders = Object.keys(data[0]);
                this.grid = data;
                this.filteredGrid = data;
            });
    }

    toggleAg1Foo() {
        this.ag1Service.toggleAg1Foo();
    }

    toggleAg2Foo() {
        this.ag2Service.toggleAg2Foo();
    }

    updateFilterText($event: KeyboardEvent) {
        var text: string = $event.target.value;
        this.ag1Service.updateFilterText(text);

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