app
    .controller('MainCtrl', MainCtrl)
;

var var0 = 'var0';

function MainCtrl($scope, $rootScope) {
    console.log('Main ctrl');

    $scope.var1 = 'var1';

    var var2 = 'var2';

    this.var3 = 'var3';

    $scope.getVar2 = function () {
        return var2;
    };
    //////////////

    $scope.name = 'John';
    $scope.greet = function () {
        alert("Hello, I'm " + $scope.name);
    };
    $scope.alert = function (text) {
        alert(text);
    };



    ////////one time binding

    $scope.username = '';

    var counter = 0;
    var names = ['John', 'Gary', 'Bobby', 'Adolf', 'Timmy'];
    $scope.clickMe = function(clickEvent) {
        console.log(event, $scope.username = names[counter++ % names.length]);
    };

    $scope.now = new Date();


    //ngInit
    $scope.userData = undefined;
    $scope.showUserData = function () {
        console.log($rootScope.userData);
    }

}
