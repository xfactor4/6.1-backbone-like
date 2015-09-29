var Person = require('models/person');

var PersonCollection = Backbone.Collection.extend({
  model: Person
});

module.exports = PersonCollection;
