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

    createTeamCtrl.myHeroes = HeroesModel.myHeroes;
  })
;