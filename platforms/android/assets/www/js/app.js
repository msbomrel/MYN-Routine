var app = angular

    .module('routineApp', ['ionic', 'ngStorage', 'ui.router', 'myFactory', 'myController', 'ngMaterial'])

    .run(function ($rootScope, $ionicPlatform) {
        $ionicPlatform.registerBackButtonAction(function (e) {
            if ($rootScope.backButtonPressedOnceToExit) {
                ionic.Platform.exitApp();
            }
            else {
                $rootScope.backButtonPressedOnceToExit = true;
                ionic.Platform.exitApp();
                setTimeout(function () {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 100);
            }
            e.preventDefault();
            return false;
        }, 101);

    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('day1', {
                url: "/day1",
                templateUrl: "templates/monday.html"
            })
            .state('day2', {
                url: "/day2",
                templateUrl: "templates/tuesday.html"
            })
            .state('day3', {
                url: "/day3",
                templateUrl: "templates/wednesday.html"
            })
            .state('day4', {
                url: "/day4",
                templateUrl: "templates/thursday.html"
            })
            .state('day5', {
                url: "/day5",
                templateUrl: "templates/friday.html"
            })
        ;
    })

    .controller('tabCtrl', function ($scope, $location) {
        var d = new Date();
        var n = d.getDay();
        $scope.selectedIndex = n - 1;

        $scope.onSwipeRight = function () {
            if ($scope.selectedIndex < 4) {
                $scope.selectedIndex = $scope.selectedIndex + 1;
            }
            // if you want to make all the tour
            else {
                $scope.selectedIndex = 0;
            }
        }

        $scope.onSwipeLeft = function () {

            if ($scope.selectedIndex > 0) {
                $scope.selectedIndex = $scope.selectedIndex - 1;
            }
            // if you want to make all the tour
            else {
                $scope.selectedIndex = 4;
            }
        }
        $scope.$watch('selectedIndex', function (current) {
            switch (current) {
                case 0:
                    $location.url("/day1");
                    break;
                case 1:
                    $location.url("/day2");
                    break;
                case 2:
                    $location.url("/day3");
                    break;
                case 3:
                    $location.url("/day4");
                    break;
                case 4:
                    $location.url("/day5");
                    break;
            }
        });
    })

    .controller('sideController', function ($scope, $mdSidenav) {
        $scope.openRightMenu = function () {
            $mdSidenav('right').toggle();
        };
    })

   
;
