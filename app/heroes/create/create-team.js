angular.module('team.create',[
  'hero.services'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('heroapp.heroes.create',{
        url:'newteam/:category',
        views: {
          //these target the categories as an absolute so it will target anything in this section
          'teams': {
            controller: 'CreateTeamCtrl as createTeamCtrl',
            templateUrl: 'app/heroes/create/create-team.tmpl.html'
          }
        }
      });
  })
  .controller('CreateTeamCtrl', function CreateTeamCtrl(HeroesModel, $stateParams) {
    var createTeamCtrl = this;

    //HEROES added get pushed to array
    createTeamCtrl.myHeroes = HeroesModel.myHeroes;

    //--------------------------------------------------
    // ADD TEAM
    //--------------------------------------------------

      //ADD TEAM BUTTON
      //Return true if team array has 5 players
      function isTeamFull(){
        return createTeamCtrl.myHeroes.length >= 5;
      }

      //REMOVE HERO
      createTeamCtrl.removeHero = function(hero){
        var i = createTeamCtrl.myHeroes.indexOf(hero);
        createTeamCtrl.myHeroes.splice(i,1);
      };

      //update team with new team
      createTeamCtrl.isTeamFull = isTeamFull;
  })
;