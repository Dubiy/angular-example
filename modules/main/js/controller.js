angular.module('demo')
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $state) {
    console.log('Main ctrl');
}