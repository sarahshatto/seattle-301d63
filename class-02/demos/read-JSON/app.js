// GOAL: render each dog and their info to the index page

let allDogs = [];

function Dog(obj){
  this.name = obj.name;
  this.hobbies = obj.hobbies;
  this.image_url = obj.image_url;
  allDogs.push(this);
}

Dog.prototype.render = function(){
  console.log('in the render function')
  // I need to render the object instances to the index page
    // prototype - 
      // get my template
      // make a copy of it
      // fill it with my object instance
      // append it to the DOM

  // selecting all the html in the template
  const myTemplate = $('#dog-template').html();

  // create a new section
  const $newSection = $(`<section>${myTemplate}</section>`);

  // const $newPTag = $(`<p>${this.description}</p>`)

  // fill my section with the html template
  // $newSection(myTemplate);

  // fill the h2 with the name
  $newSection.find('h2').text(this.name);

  // fill the p with the hobbies
  $newSection.find('p').text(this.hobbies);

  // fill the src of the img to the imgage_url
  $newSection.find('img').attr('src', this.image_url);

  // append to the DOM
  $('main').append($newSection);
}


// I need to get the data.json and make new object instances with it
$.ajax('data.json', {method: 'GET', dataType: 'JSON'})
  .then(dogs => {
    // do something with that data
    // data only exists in here
    console.log('this is the data', dogs)

    dogs.forEach(value => {
      new Dog(value).render();
    })

  })

// data does not exist down here


