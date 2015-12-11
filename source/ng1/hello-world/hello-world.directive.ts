import helloWorldController from './hello-world.controller';

export default function helloWorld() {
    return {
        controller: helloWorldController,
        bindToController: true,
        controllerAs: 'helloWorldCtrl',
        restrict: 'E',
        scope: {
            grid: '=',
            gridHeaders: '='
        },
        templateUrl: '/source/ng1/hello-world/hello-world.html'
    };
}
