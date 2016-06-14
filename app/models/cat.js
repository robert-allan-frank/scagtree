import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  gender: DS.attr('string'),
  lives: DS.attr('number'),
  dead: DS.attr('boolean'),
  picture: DS.attr('string'),
  user: DS.belongsTo('user', {async: true})
});
