var songs = angular.module('songs', []);

var loadSong = function($scope, $http, $routeParams) {
    console.log('loadSong called');

    $http.get('/gravitas/data/songs/' + $routeParams['songId'], getHttpConfig()).
        success(function(data) {
            console.log('loadSong success');

            $scope.song = data;
            angular.copy($scope.song, $scope.copy);
        }
    );
};

var loadSongs = function($scope, $http) {
    console.log('loadSongs called');

    $http.get('/gravitas/data/songs/', getHttpConfig()).
        success(function (data) {
            console.log('loadSongs success: ' + data);
            $scope.songs = data;
        }).
        error(function (data) {
            console.log('loadSongs error: ' + data);
            $scope.songs = data;
        }
    );
};

songs.controller('listSongsController',
    function ($scope, $location, $http) {
        console.log('listSongsController called');

        loadSongs($scope, $http);

        $scope.createSong = function() {
            console.log('createSong called');

            $location.path('/mySongs/create/');
        };

        $scope.editSong = function(index) {
            console.log('editSong called');

            $location.path('/mySongs/' + $scope.songs[index].id);
        };

        $scope.deleteSong = function(index) {
            console.log('deleteSong called');

            var songId = $scope.songs[index].id;
            $http.delete('/gravitas/data/songs/' + songId, getHttpConfig()).
                success(function(data) {
                    console.log('deleteSong success: ' + data);

                    $location.path('/mySongs');
                }
            );
        };
    }
);

songs.controller('createSongController',
    function ($scope, $location, $http) {
        console.log('createSongController called');

        /*$scope.showWeeks = false;
        $scope.toggleMin = function() {
            $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.toggleMin();*/

        $scope.saveSong = function () {
            console.log('saveSong called');

            $http.post('/gravitas/data/songs/', $scope.song, getHttpConfig()).
                success(function (data) {
                    console.log("saveSong success: " + data);
                    $scope.song = '';
                    $location.path("/mySongs")
                }).
                error(function (data) {
                    console.log('saveSong error: ' + data);

                    var errors = {};
                    $(data.errors).each( function() {
                        console.log(this.message);
                        errors[this.field] = this.message;
                    });
                    $scope.errors = errors;
                }
            );
        };

        $scope.cancel = function() {
            console.log('cancel called');

            $location.path("/mySongs");
        };
    }
);

songs.controller('editSongController',
    function ($scope, $location, $http, $routeParams) {
        console.log('editSongController called');

        loadSong($scope, $http, $routeParams);

        /*$scope.showWeeks = false;
        $scope.toggleMin = function() {
            $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.toggleMin();*/

        $scope.saveSong = function() {
            console.log('saveSong called');

            $http.put('/gravitas/data/songs/' + $scope.song.id, $scope.song, getHttpConfig()).
                success(function(data) {
                    console.log('saveSong success: ' + data);

                    $location.path('/mySongs');
                }).
                error(function(data) {
                    console.log('saveSong error: ' + data);
                }
            );
        };

        $scope.cancel = function() {
            console.log('cancel called');

            $location.path("/mySongs")
        };
    }
);

console.log('songs controllers load complete');