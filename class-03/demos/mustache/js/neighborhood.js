// GOAL: render our neighborhoods to the page

// make a constructor and run the data through the constructor
let hoods = [];

function Hood(obj){
  this.name = obj.name;
  this.city = obj.city;
  this.population = obj.population;
  this.founded = obj.founded;
  this.body = obj.body;
  hoods.push(this);
}

// function Hood(obj){
//   for(let key in obj){
//     this[key] = obj[key]
//   }
//  hoods.push(this);
// }

neighborhoodDataSet.forEach(neighborhood => {
  new Hood(neighborhood);
})
// render prototype to render each object instance to the page using mustache

Hood.prototype.toHtml = function(){
  // 1. Get the template from the html
  let template = $('#neighborhood-template').html();

  // 2. Use Mustache to "render" new html by merging the template with the data
  let html = Mustache.render(template, this);

  // 3. Return the "html"  from this method
  return html;
}

// Hood.prototype.toHtml = function(){
//   let myTemplate = $('.template').html();
//   const $newSection = $(`<section>${myTemplate}</section>`);
//   $newSection.find('.name').text(this.name);
//   $newSection.find('.city').text(this.city);
//   return $newSection;
// }

hoods.forEach(hood => {
  // this will create the html
  let hoodHtml = hood.toHtml();

  // append to page
  $('#neighborhoods').append(hoodHtml);
})