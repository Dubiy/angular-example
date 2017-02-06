app.config(($stateProvider) => {
        $stateProvider

            .state({
                name: 'main',
                url: '',
                template: `<header></header>
                           <ui-view></ui-view>`,
                controller: 'MainCtrl as Main'
            })
            .state({
                name: 'main.about',
                url: '/about',
                templateUrl: '/modules/about/about.html',
                controller: 'AboutCtrl as About'
            })
            .state({
                name: 'main.skills',
                url: '/skills',
                templateUrl: '/modules/skills/skills.html',
                controller: 'SkillsCtrl as Skills'
            });

});