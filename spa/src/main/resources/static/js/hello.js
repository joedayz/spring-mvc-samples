//angular.module('hello', [])
//  .controller('home', function($scope) {
//    $scope.greeting = {id: 'xxx', content: 'Saludos Chicos!'}
//})

angular.module('hello', [])
  .controller('home', function($scope, $http) {
  $http.get('/resource/').success(function(data) {
    $scope.greeting = data;
  })
});