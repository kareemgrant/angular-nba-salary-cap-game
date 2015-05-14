'use strict';

angular.module('app', ['players'])
  .controller('CreateTeamCtrl', function($scope, playerList){

    $scope.players = playerList.getAllPlayers();
    $scope.members = [];
    $scope.teamSalary = 0;
    $scope.memberCount = 0;

    var maxSalary = 100000000;

    $scope.addPlayer = function(player){
      if($scope.exceedsMaxPlayers()){
        console.log('Too many players');
      }else {
        $scope.teamSalary = player.salary + $scope.teamSalary;
        $scope.memberCount = $scope.memberCount + 1;
        player.selected = true;
        console.log($scope.memberCount);
        return $scope.members.push(player);
      }
    }

    $scope.removePlayer = function(index){
      var player = $scope.members[index];
      $scope.teamSalary = $scope.teamSalary - player.salary;
      player.selected = false;
      $scope.memberCount--
      return $scope.members.splice(index, 1);
    }

    $scope.exceedsCap = function(){
      return $scope.teamSalary > maxSalary;
    };

    $scope.clearRoster = function(){
      resetSelections();
      $scope.members = [];
      $scope.memberCount = 0;
      $scope.teamSalary = 0;
    };

    $scope.preventDuplicates = {

    }

    function resetSelections(){
      $scope.members.forEach(function(element, index, ary){
        ary[index].selected = false;
      });
    };

    $scope.exceedsMaxPlayers = function(){
      return $scope.memberCount >= 8;
    };
  });
