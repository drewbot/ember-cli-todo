import DS from 'ember-data';

var todos = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

todos.reopenClass ({
  FIXTURES: [
   {
     id: 1,
     title: 'Yes honey',
     isCompleted: false
   },
   {
     id: 2,
     title: 'Thats really excited',
     isCompleted: false
   },
   {
     id: 3,
     title: 'You know what',
     isCompleted: true
   },
   {
     id: 4,
     title: 'How many circles there are',
     isCompleted: false
   },
   {
     id: 5,
     title: 'And one BIIIG one',
     isCompleted: false
   },
  ]
});

export default todos;