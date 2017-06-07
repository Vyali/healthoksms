var app=angular.module('myapp',[]);




	
app.controller("formController", function($scope){
 
   $scope.items = [];
   $scope.posts= [{

	'name' : '',
    'email' : '',
    'comment' : ''
    }];
    

     $scope.add = function(itemToAdd) {

    var index = $scope.posts.indexOf(itemToAdd);

    $scope.posts.splice(index, 1);

    $scope.items.push(angular.copy(itemToAdd))
  }

  $scope.addNew = function() {

    $scope.posts.push({
      name: '',
      email: '',
      comment:''
    })
  }



});