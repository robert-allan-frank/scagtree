import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  description: DS.attr('string'),
  joined: DS.attr('date'),
  avatar: DS.attr('string'),
  cover: DS.attr('string'),

  cats: DS.hasMany('cat', {async: true}),
  meows: DS.hasMany('meow', {async: true}),
  following: DS.hasMany('user', {
    inverse: 'followers',
    async: true
  }),
  followers: DS.hasMany('user', {
    inverse: 'following',
    async: true
  })
});
