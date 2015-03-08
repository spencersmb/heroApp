angular.module('heroApp', [
  'ui.router',
  'hero.module'
])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('heroapp', {
        url:'', //dont usee / in the url for main index
        abstract: true
      });
    $urlRouterProvider.otherwise('/');
  })
  //.controller('MainCtrl', ['$scope',function ($scope) {
  //
  //  //$scope.title = 'Heroes Charge App';
  //  $scope.myHeroes = [];
  //
  //  //method on the scope that takes in data and reassigns it to scope.heroes.
  //  //$scope.setData = function(data){
  //  //  $scope.heroes = data.heroes;
  //  //  //console.log($scope.heroes);
  //  //};
  //  ////call get method from country.services injection passing in data location and the callback function which takes in the data.
  //  //data.get('app/data/heroes.json', $scope.setData);
  //
  //  //SORT BY NEWEST
  //  $scope.options = [
  //    { label: 'Newest', value: true },
  //    { label: 'Oldest', value: false }
  //  ];
  //  console.log($scope.options);
  //
  //  //Sets the options to grab the first in whats selected
  //  //if newest, grab the first element in newest
  //  //then when we filter by pub date it looks for the value of label.
  //  //orderby filter param knows to filter in order - angular feature.
  //  $scope.descending = $scope.options[0];
  //
  //  function top(){
  //    $scope.descending = true;
  //  }
  //  function bottom(){
  //    $scope.descending = false;
  //  }
  //
  //  $scope.top = top;
  //  $scope.bottom = bottom;
  //
  //
  //  $scope.filters = {
  //    query: "",
  //    tags: [
  //      {
  //        label: "Strength",
  //        selected: false
  //      },
  //      {
  //        label: "tag2",
  //        selected: false
  //      },
  //      {
  //        label: "tag3",
  //        selected: false
  //      },
  //      {
  //        label: "tag4",
  //        selected: false
  //      },
  //      {
  //        label: "tag5",
  //        selected: false
  //      }
  //    ]
  //  };
  //
  //  //--------------------------------------------------
  //  // HERO ARRAY
  //  //--------------------------------------------------
  //
  //  //ADD HERO
  //  $scope.addHero = function(hero){
  //    var isAdded;
  //
  //    if( $scope.myHeroes.length < 5 ){
  //
  //      isAdded = _.contains($scope.myHeroes, hero);
  //
  //      if(isAdded){
  //        alert('hero is already added');
  //      }else{
  //        $scope.myHeroes.push(hero);
  //      }
  //
  //    } else{
  //      alert('Your team is full!');
  //    }
  //
  //    console.log($scope.isTeamFull());
  //  };
  //
  //  //ADD TEAM BUTTON
  //  //Return true if team array has 5 players
  //  function isTeamFull(){
  //    return $scope.myHeroes.length >= 5;
  //  }
  //
  //  //REMOVE HERO
  //  $scope.removeHero = function(hero){
  //    var i = $scope.myHeroes.indexOf(hero);
  //    $scope.myHeroes.splice(i,1);
  //  };
  //
  //  //update team with new team
  //  $scope.isTeamFull = isTeamFull;
  //
  //}])
;
