import {HTTP_PROVIDERS} from 'angular2/http';
import {ng1AppAdapter} from './ng-upgrade-adapters';
import {Grid} from '../components/grid/grid';
import {Ag2Service} from './ag2.service';
import {ag1} from '../angular1/ag1/ag1.directive';
import {Ag1Service} from '../angular1/ag1/ag1.service';

export function bootstrapNg1App() {
    window.angular.module('ng1App', ['ux'])
        .directive('ag1', ag1)
        .directive('grid', ng1AppAdapter.downgradeNg2Component(Grid))
        .service('ag1Service', Ag1Service)
        .service('ag2Service', ng1AppAdapter.downgradeNg2Provider(Ag2Service))
        .run(() => console.info('Angular', window.angular.version.full, 'loaded'));
     
    ng1AppAdapter.upgradeNg1Provider('ag1Service');
    ng1AppAdapter.addProvider(HTTP_PROVIDERS);
    ng1AppAdapter.addProvider(Ag1Service);
    ng1AppAdapter.addProvider(Ag2Service);
    ng1AppAdapter.bootstrap(document, ['ng1App']); 
}