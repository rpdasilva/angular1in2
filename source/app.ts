import {bootstrap} from 'angular2/bootstrap';
import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrapNg1App} from './core/ng1-app-bootstrap';
import {Grid} from './components/grid/grid';
import {Ag2Service} from './core/ag2.service';

// Batarangle dependencies
import {AppViewListener} from 'angular2/src/core/linker/view_listener.js';
import {DebugElementViewListener, inspectNativeElement} from 'angular2/src/platform/browser_common';
import {bind} from 'angular2/core';

bootstrap(Grid, [
    Ag2Service,
    HTTP_PROVIDERS,
    bind(AppViewListener).toClass(DebugElementViewListener)
])
.then(applicationReference => {
    window.ng.probe = inspectNativeElement;
})
.catch(console.warn.bind(console));

bootstrapNg1App();