app.config(($stateProvider) => {
        $stateProvider

            .state({
                name: 'main',
                url: '',
                template: `<header>
                               <a ui-sref="main.about" ui-sref-active="active">About</a>
                               <a ui-sref="main.skills" ui-sref-active="active">Skills</a>
                           </header>
                           v1: {{ var1 }}
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