This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## To run
npm install && bower install
grunt`serve


## Learning objective:
Learn about Angular's defer and promise API.
Instead of writing code to do polling and then putting a thread/process to sleep
the Promise and defer.resolve API can solve this problem elegantly.

## USE CASE
Given a block of code which depends on a magical variable $scope.VERY_IMPORTANT 
But that variable is only available after a fetch request to a RESTFUL service is completed.
In such case we can use the promise and defer API.
