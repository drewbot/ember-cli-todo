import Ember from 'ember';

export default Ember.ArrayController.extend({

	actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      // newTitle value from template 
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
      	// newTitle is the title of a new todo
        title: title,
        // whose isCompleted property is false
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  },

  // display the remaining todos in todos template
  // by calling this property directly
  remaining: function() {
	  return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	// Show the correct form of the word item
  // by calling this property directly
	inflection: function() {
	  var remaining = this.get('remaining');
	  return remaining === 1 ? 'item' : 'items';
	}.property('remaining')

});
