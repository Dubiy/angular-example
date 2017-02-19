app.config(($stateProvider) => {
        $stateProvider

            .state({
                name: 'main',
                url: '',
                template: `<aside id="sidebar" class="column-left" header></aside>
                           <section id="content" class="column-right">
                               <article class="expanded">
                                   <ui-view></ui-view>
                               </article>
                               <footer class="clear"></footer>
                           </section>
`,
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
            })
            .state({
                name: 'main.portfolio',
                url: '/portfolio',
                templateUrl: '/modules/portfolio/portfolio.html',
                controller: 'PortfolioCtrl as Portfolio'
            })
            .state({
                name: 'main.experience',
                url: '/experience',
                templateUrl: '/modules/experience/experience.html',
                controller: 'ExperienceCtrl as Experience'
            })
            .state({
                name: 'main.contact',
                url: '/contact',
                templateUrl: '/modules/contact/contact.html',
                controller: 'ContactCtrl as Contact'
            })
        ;
});