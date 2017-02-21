app.directive('header', function() {
    var simple = false;
    var settings = false;
    return {
        // restrict: 'E', //element  <header></header>
        restrict: 'A', //attribute <div header></div>
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
})
    .directive('footer', function() {
        var simple = false;
        var settings = false;
        return {
            restrict: 'E', //element  <header></header>
            templateUrl: 'modules/main/views/footer.html'
        }
    })

    .directive('firstDirective', function() {
        return function (scope, element, attrs) {
            console.log('create my first directive');

            // scope - область видимости, в которой вызывается директива
            // element - элемент DOM, которому принадлежит директива, обернутый в jQuery Lite
            // attrs - объект со списком всех атрибутов тэга, в котором вызывается директива
            console.log(scope, element, attrs);
        }
    })

    .directive('say', function() {
        return function (scope, element, attrs) {
            console.log('say-directive');
            element.text('hello');
        }
    })

    .directive('sayWord', function() {
        return function (scope, element, attrs) {
            console.log('sayWord-directive');
            if (attrs.word) {
                if (attrs.repeat) {
                    element.text(attrs.word.repeat(attrs.repeat));
                } else {
                    element.text(attrs.word);
                }
            } else {
                element.text('hello');
            }
        }
    })

    .directive('fullExample', function () {
        return {
            compile: function compile(temaplateElement, templateAttrs) {
                return {
                    pre: function (scope, element, attrs) {
                    },
                    post: function(scope, element, attrs) {
                    }
                }
            },
            link: function (scope, element, attrs) {

            },
            priority: 0,
            terminal:false,
            template: '<div></div>',
            templateUrl: 'template.html',
            replace: false,
            transclude: false,
            restrict: 'A',
            scope: false,
            controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
            }
        }
    })

//compile - анализ всех директив используемых в данном элементе DOM ( в том числе и в его потомках child)
//linking - связывание переменных используемых в шаблоне и переменных в scope

    .directive('compileExampleBad', function() {
        return {
            link:function($scope, element, attrs) {
                element.html("<div>{{"+attrs.word1+"}}"+attrs.word2+"</div>");
            }
        }
    })
    .directive('compileExample', function() {
        return {
            compile: function compile(templateElement, templateAttrs) {
                let tpl = '<div>{{' + templateAttrs.word1+ '}}' + templateAttrs.word2 + '</div>';
                console.log('template', tpl);
                templateElement.html(tpl);
            },
            link: function (scope, element, attrs) {

            }
        }
    })

    .directive('templateExample', function() {
        return {
            template: '<div class="templateExample" ng-class="{active: true}">template-example</div>',
            // replace: true,
        }
    })

    .directive('templateUrlExample', function() {
        return {
            templateUrl: 'modules/main/views/templateUrlExample.html'
        }
    })


    //local-scope
    //When declaring isolate scope the scope definition object must be in specific format which starts with mode character (@&=<), after which comes an optional ?, and it ends with an optional local name.

    // @ Attribute string binding
    // = Two-way model binding
    // & Callback method binding
    // -- so --
    // @ string
    // = model
    // & method

    .directive('isolatedScope', function() {
        return {
            scope: {
                content: '=',
                myAttr: '@',
                nameInScope: '@nameInAttr',
                oneWay: '@',
                twoWay: '=',
                realOneWay: '<',
                optionalProperty: "=",
                optionalPropertySafe:"=?",
                callMe: '&',
                callMeArguments: '&',

                ctrlBridgeFn: '&callbackFn'
            },
            template: `<h1>Hello, isolated scope</h1>
                        <p><b>content:</b> {{ content }}</p>
                        <p><b>myAttr:</b> {{ myAttr }}</p>
                        <p><b>namedInScope:</b> {{ nameInScope }}</p>
                        <p><b>one-way:</b> {{ oneWay }} <button ng-click="oneWay = oneWay + ' upd!'">UPD</button></p>
                        <p><b>two-way:</b> {{ twoWay }} <button ng-click="twoWay = twoWay + ' upd!'">UPD</button></p>
                        <p title="real one way, not expression"><b>real-one-way:</b> {{ realOneWay }} <button ng-click="realOneWay = realOneWay + ' upd!'">UPD</button></p>
                        <p><b>optional-property:</b> {{ optionalProperty }} <button ng-click="optionalProperty = optionalProperty + ' upd!'">UPD (error)</button></p>
                        <p><b>optional-property-safe:</b> {{ optionalPropertySafe }} <button ng-click="optionalPropertySafe = optionalPropertySafe + ' upd!'">UPD</button></p>
                        <p><b>callable-function:</b><button ng-click="callMe()">Run!</button></p>
                        <p><b>callable-function-arguments:</b><button ng-click="callMeArguments({msg: 'hello', event: $event})">Run!</button></p>`
        }
    })

    .directive('anotherIsolatedScope', function() {
        return {
            scope: {

            },
            controller: ($scope) => {
                console.log('ctrl');
                $scope.date = new Date();
                $scope.getDate = () => {
                    $scope.date = new Date();
                };
            },
            template: `<h4>Hello, I'm isolated scope</h4>
                        <button ng-click="getDate()">{{date}}</button>`
        }
    })

    .directive('notIsolatedScope', function() {
        return {
            // scope: {
            //
            // },
            controller: ($scope) => {
                console.log('ctrl');
                $scope.date = new Date();
                $scope.getDate = () => {
                    $scope.date = new Date();
                };
            },
            template: `<h4>Hello, I'm <b>NOT</b> isolated scope</h4>
                        <button ng-click="getDate()">{{date}}</button>`
        }
    })


    .directive('compileTemplateExample', function($compile, $templateCache) {
        return {
            link: function(scope, element, attrs) {
                var template = $templateCache.get(scope.content.type);
                element.html(template);
                $compile(element.contents())(scope);
            },
            scope: {
                content: '=',
            },
            templateUrl: 'modules/main/views/directiveTemplatesExample.html'
        }
    })




;