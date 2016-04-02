var app=angular
    .module('myFactory',[])

      .factory('Class19A', ['$rootScope', function($rootScope){
    return {
      query: function(callback) {
        Tabletop.init({
          key: 'https://docs.google.com/spreadsheets/d/1EkdOGBAuYseK_HX7PJAZKlw7BW0p089JI0A2AoZAvJA/pubhtml',
          simpleSheet: true,
          parseNumbers: true,
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          }
        });
      }
    };
  }])

     .factory('Class19B', ['$rootScope', function($rootScope){
    return {
      query: function(callback) {
        Tabletop.init({
          key: 'https://docs.google.com/spreadsheets/d/1ISUmZl-aUZEe_sY393C7US5yy4ftVswyZhe0-GaWxUI/pubhtml',
          simpleSheet: true,
          parseNumbers: true,
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          }
        });
      }
    };
  }])
     .factory('Class18A', ['$rootScope', function($rootScope){
    return {
      query: function(callback) {
        Tabletop.init({
          key: 'https://docs.google.com/spreadsheets/d/1KNETDR6T1W5OSFjEX6H8TaNFICUvIYYg9uee1okDBHU/pubhtml',
          simpleSheet: true,
          parseNumbers: true,
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          }
        });
      }
    };
  }])

    .factory('Class18B', ['$rootScope', function($rootScope){
    return {
      query: function(callback) {
        Tabletop.init({
          key: 'https://docs.google.com/spreadsheets/d/1CV-LowyuetA5AH8rEAsUPS5OAzoWC6tUKuwG4jrd9j0/pubhtml',
          simpleSheet: true,
          parseNumbers: true,
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          }
        });
      }
    };
  }])

     .factory('Class17A', ['$rootScope', function($rootScope){
    return {
      query: function(callback) {
        Tabletop.init({
          key: 'https://docs.google.com/spreadsheets/d/1ZU-Hz-48zmSd3S8MbmvUWev5r7UWsifCCzkOSG9H1tY/pubhtml',
          simpleSheet: true,
          parseNumbers: true,
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          }
        });
      }
    };
  }])
     .factory('Class17B', ['$rootScope', function($rootScope){
    return {
      query: function(callback) {
        Tabletop.init({
          key: 'https://docs.google.com/spreadsheets/d/1mYqOOYpREJSd4DhzA_65XFtmCJpAvk07cwff_coTO1k/pubhtml',
          simpleSheet: true,
          parseNumbers: true,
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          }
        });
      }
    };
  }])
     .factory('Class16A', ['$rootScope', function($rootScope){
    return {
      query: function(callback) {
        Tabletop.init({
          key: 'https://docs.google.com/spreadsheets/d/19cOj5VbvKgrJE7ATZJlxa_2JjxCHvkOauppXQrQlN6Y/pubhtml',
          simpleSheet: true,
          parseNumbers: true,
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          }
        });
      }
    };
  }])
     .factory('Class16B', ['$rootScope', function($rootScope){
    return {
      query: function(callback) {
        Tabletop.init({
          key: 'https://docs.google.com/spreadsheets/d/1V0rwl4gT-9SXVTSTcVnXWb1XcXGg_-xv8vf_Pj3mfnw/pubhtml',
          simpleSheet: true,
          parseNumbers: true,
          callback: function(data, tabletop) {
            if(callback && typeof(callback) === "function") {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          }
        });
      }
    };
  }]);
