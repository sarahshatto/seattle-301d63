// GOAL: when the user enters a city, we want to get that city, display the location, display the map, and display the restaurants.

let allLocationInformation = [];
let allRestaurantInformation = [];

function Location(obj){
  this.formatted_query = obj.formatted_query;
  this.search_query = obj.search_query;
  this.latitude = obj.latitude;
  this.longitude = obj.longitude;

  allLocationInformation.push(this);
}

function Restaurant(obj){
  this.restaurant = obj.restaurant;
  this.cuisines = obj.cuisines;
  this.locality = obj.locality;

  allRestaurantInformation.push(this);
}

Restaurant.prototype.restaurantRender = function(){
  let template = $('#restaurant-results-template').html();
  let target = $('#restaurant-results');
  target.append(Mustache.render(template, this));
}

Location.prototype.summaryRender = function(){
  let template = $('#title-template').html();
  let target = $('#title');
  target.append(Mustache.render(template, this));
}

Location.prototype.mapRender = function(){
  let template = $('#image-template').html();
  let target = $('#map');
  target.append(Mustache.render(template, this));
}


// use ajax to get the information from the location.json and run it through a constructor function
// mustache render prototype
// display it on the map
// display on the summary

function handleSubmit(e){
  e.preventDefault();
  
  $.ajax('../fake-data/location.json', {method: 'GET', dataType: 'JSON'})
    .then(locationInformation => {
      new Location(locationInformation).summaryRender();
    })
    .then(() => {
      allLocationInformation.forEach(location => {
        location.mapRender();
      })
    })
    .then(() => {
      $.ajax('../fake-data/restaurants.json', {method: 'GET', dataType: 'JSON'})
      .then(restaurantInformation => {
        restaurantInformation.forEach(value => {
          new Restaurant(value);
        })
      })
      .then(() => {
        allRestaurantInformation.forEach(restaurant => {
          restaurant.restaurantRender();
        })
      })
    })
  }
  
  // use ajax to get the information from the restaurants and run it through a constructor function
  // mustache render prototype
  // display it on restaurants part of the page

  
  // put a listener on the input box
  $('#search-form').on('submit', handleSubmit);