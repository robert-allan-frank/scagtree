export function initialize(application) {
  application.inject('route', 'sessionService', 'service:session');
  application.inject('component', 'sessionService', 'service:session');
  application.inject('controller', 'sessionService', 'service:session');
}

export default {
  name: 'session',
  initialize
};
