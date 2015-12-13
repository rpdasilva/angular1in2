import {Ag1Controller} from './ag1.controller';

export function ag1() {
    return {
        controller: Ag1Controller,
        bindToController: true,
        controllerAs: 'ag1Ctrl',
        restrict: 'E',
        scope: {
            grid: '=',
            gridHeaders: '='
        },
        templateUrl: 'source/angular1/ag1/ag1.html'
    };
}
