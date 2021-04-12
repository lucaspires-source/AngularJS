var app = angular.module('mainApp', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        template:'Welcome user!'
    })
    .when('/neymar',{
        template:'o pai ta on'
    }
    .otherwise({
        redirectTo:'/'
    })
    )
})