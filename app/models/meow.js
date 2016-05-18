import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', {async: true}),
  text: DS.attr('string'),
  created: DS.attr('date')
});
