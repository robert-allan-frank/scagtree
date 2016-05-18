import Mirage, {faker} from 'ember-cli-mirage';
import { numberRandom } from '../../utils/number-util';

export default Mirage.Factory.extend({
  username: function(i) {
    if (i === 0) {
      return 'robertdotfrank';
    }
    return faker.internet.userName().toLowerCase();
  },
  description: function() {
    return faker.lorem.sentences(numberRandom(2, 3));
  },
  joined: function() {
    return faker.date.past();
  },
  meows: null,
  cats: null,
  following: null,
  followers: null,
  avatar: function(i) {
    return `/images/users/${i + 1}/avatar.jpg`;
  },
  cover: function(i) {
    return `/images/users/${i + 1}/cover.jpg`;
  }
});
