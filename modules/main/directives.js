app.directive('header', function() {
        var simple = false;
        var settings = false;
        return {
            restrict: 'E', //element  <header></header>
            // restrict: 'A', //attribute <div header></div>
            // restrict: 'C', //class <div class="header"></div>
            // restrict: 'M', //comment  <!-- directive: header -->
            templateUrl: 'modules/main/views/header.html',
            controller: ($scope, $state, config) => {
                $scope.current = $state.current.name;
                $scope.simple = simple;
                $scope.settings = settings;
                $scope.getDate = function () {
                    return new Date();
                }
            }
        }
    });