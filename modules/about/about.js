app
    .controller('AboutCtrl', AboutCtrl);

function AboutCtrl($scope, $state) {
    console.log('about ctrl');

    $scope.var1 = '22222222222';

    $scope.user = {
        fullName: 'John Doe',
        skills: [
            'HTML', 'CSS', 'Javascript', 'SCSS', 'Angular'
        ]
    };
}