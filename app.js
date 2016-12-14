(function() {
  var app = angular.module('starSystem', []);


.controller('ctrl', ['$scope', function($scope) {
  $scope.item = {
    star: false,
    favorite: false,
    bookmark: false
  };
}])

.directive('buttonStar', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<button class="btn btn-icon"><span class="glyphicon glyphicon-star" ng-class="{active: item.star}"></span></button>',
    link: function(scope, elem) {
      elem.bind('click', function() {
        scope.$apply(function() {
          scope.item.star = !scope.item.star;
        });
      });
    }
  };
})

.directive('buttonFavorite', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<button class="btn btn-icon"><span class="glyphicon glyphicon-heart" ng-class="{active: item.favorite}"></span></button>',
    link: function(scope, elem) {
      elem.bind('click', function() {
        scope.$apply(function() {
          scope.item.favorite = !scope.item.favorite;
        });
      });
    }
  };
})


    
var logIn=function(username){
console.log}


var favouriteButton = document.images["favourite"];
    
    
    app.controller("MainCtrl", function($scope){
        $scope.task=[
            {name:"Results 1"},
            {name:"Results 2"},
            {name:"Results 3"},
            {name:"Results 4"}
        ];
        $scope.hoverIn=function(){
            this.hoverEdit=true;
        };
    $scope.hoverOut=function(){
        this.hoverEdit=false;
    };
    });

  function starButton(favourite)



$(function(){
  $("h1").animate({
    "margin-left": "100px"
  }, "slow");
});


$('input[type="button"]').click(function(e){
   $(this).closest('tr').remove()
})

    
    
"checked"
if("checkbox"==="checked"){
   onclick('trashButton')
    delete HTMLTableRowElement;
    }
    
    function vote () {
}
    
    
    
    
    
    
    
    
    
    
    
    
    