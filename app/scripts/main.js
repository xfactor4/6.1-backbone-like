var PersonCollection = require('models/person-collection');

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());

  var people = new PersonCollection([
    {name: "Jacob Smith", email: "jake@theironyard.com"},
    {name: "Mason Stewart"}
  ]);

  people.each(function(person){
    $('.people').append(JST.person(person.toJSON()));
  });
});
