angular.module('hero.module', [
  'hero.services',
  'hero.filters',
  'team.create'

])
  .config(function ($stateProvider) {
    $stateProvider
      .state('heroapp.heroes',{
        url: '/',
        views:{
          //these target the categories as an absolute so it will target anything in this section
          'heroes@': {
            templateUrl: 'app/heroes/hero.tmpl.html',
            controller: 'HeroCtrl as heroesCtrl'
          }
        }
      });
  })
  .controller('HeroCtrl', function HeroCtrl(HeroesModel){
    var heroesCtrl = this;
    HeroesModel.getHeroes().then(function (result) {
      heroesCtrl.heroes = result.heroes;
    });

    heroesCtrl.options = HeroesModel.options;

    heroesCtrl.descending = heroesCtrl.options[0];

    heroesCtrl.filters = HeroesModel.filters;

    heroesCtrl.addHero = HeroesModel.addHero;

    heroesCtrl.myHeroes = HeroesModel.myHeroes;

    //console.log(heroesCtrl.addHero());

  });
