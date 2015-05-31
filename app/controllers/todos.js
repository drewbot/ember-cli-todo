import Ember from 'ember';

export default Ember.Controller.extend({
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
  }
});
