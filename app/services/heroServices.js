angular.module('hero.services', [])
  .service('HeroesModel', function($http){
    var model = this,
        URLS = {
          FETCH: 'app/data/heroes.json'
        },
        heroes;

    //before we send data to ctrl - we extract it here
    function extract(result) {
      return result.data
    }

    function cacheHeroes(result) {
      heroes = extract(result);
      return heroes;
    }

    model.options =[
      { label: 'Newest', value: true },
      { label: 'Oldest', value: false }
    ];

    model.filters = {
      query: "",
      tags: [
        {
          label: "Strength",
          selected: false
        },
        {
          label: "tag2",
          selected: false
        },
        {
          label: "tag3",
          selected: false
        },
        {
          label: "tag4",
          selected: false
        },
        {
          label: "tag5",
          selected: false
        }
      ]
    };

      //--------------------------------------------------
      // HERO ARRAY
      //--------------------------------------------------


      model.myHeroes = [];
      //ADD HERO
      model.addHero = function(hero){
        var isAdded;

        if(  model.myHeroes.length < 5 ){

          isAdded = _.contains( model.myHeroes, hero);

          if(isAdded){
            alert('hero is already added');
          }else{
            model.myHeroes.push(hero);
          }

        } else{
          alert('Your team is full!');
        }

        console.log(model.myHeroes);
      };

    //instead of just returning the call - return a promise using then for the http call
    //This also checks first if categories exists and if it does wrap it in a promise so you dont make another call to the server
    model.getHeroes = function () {
      return (heroes) ? $q.when(heroes) : $http.get(URLS.FETCH).then(cacheHeroes);
    }

  });
