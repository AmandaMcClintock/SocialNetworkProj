angular.module("app",[]);
var app=angular.module("app",[]);
app.service("PostsSvc",["$http",function(t){
    this.fetch=function(){
        return t.get("/api/posts")
    },
    this.create=function(s){
        return t.post("/api/posts",s)}
    }]),
    app.controller("PostsCtrl",["$scope","PostsSvc",function(t,s){
        t.addPost=function(){
            t.postBody&&s.create({
                username:"Manda",
                body:t.postBody})
                .success(function(s){
                    t.posts.unshift(post),
                    t.posts=null})},s.fetch()
                    .success(function(s){
                        t.posts=s
                    })
                }]),
                angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,s){
                    t.addPost=function(){
                        t.postBody&&s.create({
                            username:"Manda",
                            body:t.body.body})
                            .success(function(s){
                                t.posts.unshift(s),t.postBody=null})},
                                s.fetch().success(function(s){
                                    t.posts=s})}]),angular.module("app").service("PostsSvc",["$http",function(t){
                                        this.fetch=function(){
                                            return t.get("api/posts")},
                                            this.create=function(s){
                                                return t.post("api/posts",post)}
                                            }]);