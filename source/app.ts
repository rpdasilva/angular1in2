import {bootstrap, bind} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ng1App} from './core/upgrade-adapters';
import {PeopleService} from './core/people.service';
import {Grid} from './components/grid/grid';
import helloWorld from './ng1/hello-world/hello-world.directive';
import HelloWorldService from './ng1/hello-world/hello-world.service';

import {AppViewListener} from 'angular2/src/core/linker/view_listener.js';
import {DebugElementViewListener, inspectNativeElement} from 'angular2/src/platform/browser_common';

bootstrap(Grid, [
    PeopleService,
    HTTP_PROVIDERS,
    bind(AppViewListener).toClass(DebugElementViewListener)
])
.then(applicationReference => {
    window.ng.probe = inspectNativeElement;
});

 ng1App.app = window.angular.module('ng1App', ['ux'])
      .directive('helloWorld', helloWorld)
      .directive('grid', ng1App.adapter.downgradeNg2Component(Grid))
      .service('helloWorldService', HelloWorldService)
      .service('peopleService', ng1App.adapter.downgradeNg2Provider(PeopleService))
      .run(() => console.info('Angular', window.angular.version.full, 'loaded'));

ng1App.adapter.upgradeNg1Provider('helloWorldService');
ng1App.adapter.addProvider(HTTP_PROVIDERS);
ng1App.adapter.addProvider(PeopleService);
ng1App.adapter.addProvider(PeopleService);
ng1App.adapter.bootstrap(document, ['ng1App']);