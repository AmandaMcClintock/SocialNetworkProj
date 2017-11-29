var app = angular.module('app', [])

app.service('PostsSvc', function ($http) {
    this.fetch = function () {
    return $http.get('/api/posts')
}
    this.create = function (post) {
        return $http.post('/api/posts', post)
    }
})
app.controller('PostsCtrl', function ($scope, PostsSvc) {
    $scope.addPost = function() {
        if($scope.postBody){
            PostsSvc.create({
                username: 'Manda', 
                body: $scope.postBody
            }).success(function(posts) {
                $scope.posts.unshift(post)
                $scope.posts = null
            })
        }
    }
    PostsSvc.fetch()
    .success(function (posts) {
        $scope.posts = posts
    })
})