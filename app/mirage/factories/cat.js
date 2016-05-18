import Mirage, {faker} from 'ember-cli-mirage';
import { numberRandom } from '../../utils/number-util';

export default Mirage.Factory.extend({
  user: null,
  name: function(i) {
    return i % 2 === 0 ? faker.commerce.productName() : faker.name.lastName();
  },
  description: function() {
    return faker.lorem.sentences(numberRandom(1, 2));
  },
  gender: function(i) {
    return i % 2 === 0 ? 'Male' : 'Female';
  },
  lives: function() {
    return 9;
  },
  dead: function() {
    return false;
  },
  picture: function(i) {
    return `/images/cats/${i + 1}.jpg`;
  }
});
