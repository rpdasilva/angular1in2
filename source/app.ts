import {bootstrap, bind} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {appNG1} from './core/upgrade-adapters';
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

 var ng1App = window.angular.module('appNG1', ['ux'])
      .directive('helloWorld', helloWorld)
      .directive('grid', appNG1.adapter.downgradeNg2Component(Grid))
      .service('helloWorldService', HelloWorldService)
      .service('peopleService', appNG1.adapter.downgradeNg2Provider(PeopleService))
      .run(() => console.info('Angular', window.angular.version.full, 'loaded'));

appNG1.app = ng1App;
appNG1.adapter.bootstrap(document, ['appNG1']);