app
    .controller('ContactCtrl', ContactCtrl);

function ContactCtrl($scope, $state, $rootScope, $http) {
    console.log('ContactCtrl');

    $scope.formData = {
        'hello': 'world'
    };

    $scope.sendMessage = (form) => {
        if (form.$invalid) {
            return;
        }

        $rootScope.spinner = true;


        $http({
            method: 'POST',
            url: '/send-email',
            data: {
                form: $scope.formData
            }
        }).then(function successCallback(response) {
            $rootScope.spinner = false;
            console.log(response);
        }, function errorCallback(response) {
            $rootScope.spinner = false;
            console.log(response);
        });


    };
}