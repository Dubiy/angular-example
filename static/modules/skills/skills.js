app.controller('SkillsCtrl', SkillsCtrl);

function SkillsCtrl($scope, $state, lipsum) {
    console.log('SKills ctrl');

    $scope.skills = [
		{
			name: 'CSS',
			score: 4	 
		},
		{
			name: 'HTML',
			score: 4	 
		},
		{
			name: 'JS',
			score: 4	 
		},
		{
			name: 'SCSS',
			score: 3	 
		},
		{
			name: 'PHP',
			score: 4	 
		},
		{
			name: 'Symfony',
			score: 5	 
		},
		{
			name: 'Android',
			score: 3	 
		},
		{
			name: 'AngularJS',
			score: 3	 
		},
		{
			name: 'MySQL',
			score: 3	 
		},
    ];

}
