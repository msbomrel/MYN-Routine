/**
 * Created by root on 2/26/16.
 */
var app = angular
    .module('myController', [])


    .controller('GlobalController',
        function ($scope, $location, $localStorage, $log, $window, $state, $mdDialog,
                  Class19A, Class19B, Class18A, Class18B, Class17A, Class17B, Class16A, Class16B) {

            $scope.showDialog = function () {
                var alert;
                alert = $mdDialog.alert({
                    content: 'Developers: Mohan, Yasin  Designer: Nikita',
                    ok: 'Okay'
                });

                $mdDialog
                    .show(alert)
                    .finally(function () {
                        alert = undefined;
                    });
            };

            $scope.selectChanged = function () {
                if ($scope.someVal == 1) {
                    $scope.update();
                    $scope.sixteenA();

                    $window.location.reload();

                }
                else if ($scope.someVal == 2) {
                    $scope.update();
                    $scope.sixteenB();
                    $window.location.reload();

                }
                else if ($scope.someVal == 3) {
                    $scope.update();
                    $scope.seventeenA();
                    $window.location.reload();

                }
                else if ($scope.someVal == 4) {
                    $scope.update();
                    $scope.seventeenB();
                    $window.location.reload();

                }
                else if ($scope.someVal == 5) {
                    $scope.update();
                    $scope.eighteenA();
                    $window.location.reload();
                }
                else if ($scope.someVal == 6) {
                    $scope.update();
                    $scope.eighteenB();
                    $window.location.reload();
                }
                else if ($scope.someVal == 7) {
                    $scope.update();
                    $scope.nineteenA();
                    $window.location.reload();
                }
                else {
                    $scope.update();
                    $scope.nineteenB();
                    $window.location.reload();
                }
            };

            /* $scope.goToWhere= function () {
             $location.path('/day'+n);
             };*/

            $scope.nineteenA = function () {
                Class19A.query(function (data) {
                    $localStorage.store_nineteenA = data;
                });

                $localStorage.sem = ' 19 A';
                $localStorage.message = $localStorage.store_nineteenA;
                /* $location.path('/day' + n);*/
            };
            $scope.nineteenB = function () {
                Class19B.query(function (data) {
                    $localStorage.store_nineteenB = data;
                });
                $localStorage.sem = ' 19 B';
                $localStorage.message = $localStorage.store_nineteenB;
                /*$location.path('/day' + n);*/
            };
            $scope.eighteenA = function () {
                Class18A.query(function (data) {
                    $localStorage.store_eighteenA = data;
                });
                $localStorage.sem = ' 18 A';
                $localStorage.message = $localStorage.store_eighteenA;
                /*$location.path('/day' + n);*/
            };
            $scope.eighteenB = function () {
                Class18B.query(function (data) {
                    $localStorage.store_eighteenB = data;
                });
                $localStorage.sem = ' 18 B';
                $localStorage.message = $localStorage.store_eighteenB;
                /*$location.path('/day' + n);*/
            };
            $scope.seventeenA = function () {
                Class17A.query(function (data) {
                    $localStorage.store_seventeenA = data;
                });
                $localStorage.sem = ' 17 A';
                $localStorage.message = $localStorage.store_seventeenA;
                /*$location.path('/day'+n);*/
            };
            $scope.seventeenB = function () {
                Class17B.query(function (data) {
                    $localStorage.store_seventeenB = data;
                });
                $localStorage.sem = ' 17 B';
                $localStorage.message = $localStorage.store_seventeenB;
                /*$location.path('/day'+n);*/
            };
            $scope.sixteenA = function () {
                Class16A.query(function (data) {
                    $localStorage.store_sixteenA = data;
                });
                $localStorage.sem = ' 16 A';
                $localStorage.message = $localStorage.store_sixteenA;
                //$location.path('/day' + n);
            };
            $scope.sixteenB = function () {
                Class16B.query(function (data) {
                    $localStorage.store_sixteenB = data;
                });
                $localStorage.sem = ' 16 B';
                $localStorage.message = $localStorage.store_sixteenB;
                //$location.path('/day' + n);
            };
            $scope.getInReal = function () {
                $scope.subjects = $localStorage.message;
                $scope.semester = $localStorage.sem;
            };

            $scope.subjects = $localStorage.message;
            $scope.semester = $localStorage.sem;

            $scope.update = function () {
                $scope.sixteenA();
                $scope.sixteenB();
                $scope.seventeenA();
                $scope.seventeenB();
                $scope.eighteenA();
                $scope.eighteenB();
                $scope.nineteenA();
                $scope.nineteenB();
                $scope.getInReal();
            }
        })
    ;
