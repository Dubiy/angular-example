app.controller('SkillsCtrl', SkillsCtrl);

function SkillsCtrl($scope, $state) {
    console.log('SKills ctrl');

    $scope.user = {
        fullName: 'John Doe',
        skills: [
            'HTML', 'CSS', 'Javascript', 'SCSS', 'Angular'
        ]
    };
}