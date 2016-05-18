import Mirage, {faker} from 'ember-cli-mirage';
import { numberRandom } from '../../utils/number-util';

export default Mirage.Factory.extend({
  user: null,
  text: function() {
    return faker.lorem.sentences(numberRandom(1, 3));
  },
  created: function() {
    return faker.date.past();
  }
});
