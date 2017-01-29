app
    .controller('MainCtrl', MainCtrl)
    .controller('ChildController', ChildController)
    .controller('GrandChildController', GrandChildController);

function MainCtrl($scope) {
    console.log('Main ctrl');

    $scope.ctrlName = 'MainCtrl';

    $scope.user = {
        name: 'John Doe',
        age: 35
    };
}

function ChildController($scope) {
    console.log('Child ctrl');

    $scope.user = {
        name: 'Alex Fisher',
        age: 42
    };
}

function GrandChildController($scope) {
    console.log('GrandChild ctrl');

    $scope.ctrlName = 'GrandChildController';

    $scope.user = {
        name: 'Timmy',
        age: 15
    };
}