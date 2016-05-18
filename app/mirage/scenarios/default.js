import {numberRandom} from '../../utils/number-util';

function userIdFromIndex(i) {
  if (i % 3 === 0) {
    return 1;
  } else if (i % 2 === 0) {
    return 2;
  } else {
    return 3;
  }
}

function meowsForUser(meows, userid) {
  return meows.reduce((list, meow) => {
    if (meow.user === userid) {
      list.push(meow.id);
    }
    return list;
  }, []);
}

function catsForUser(cats, userid) {
  return cats.reduce((list, cat) => {
    if (cat.user === userid) {
      list.push(cat.id);
    }
    return list;
  }, []);
}

export default function(server, random = true) {
  let meows = [];
  let cats = [];
  let users = [];

  let meowCount = random ? numberRandom(9, 12) : 9;
  for (let i = 0; i < meowCount; i++) {
    meows.push(server.create('meow', {
      user: i >= 3 && random ? numberRandom(1, 3) : userIdFromIndex(i),
    }));
  }

  let catCount = random ? numberRandom(15, 20) : 15;
  for (let i = 0; i < catCount; i++) {
    cats.push(server.create('cat', {
      user: i >= 3 && random ? numberRandom(1, 3) : userIdFromIndex(i),
    }));
  }

  for (let i = 0; i < 3; i++) {
    users.push(server.create('user', {
      meows: meowsForUser(meows, i + 1),
      cats: catsForUser(cats, i + 1),
      followers: [],
      following: []
    }));
  }
}
