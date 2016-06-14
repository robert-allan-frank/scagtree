'use strict';
let fs = require('fs');
let writerStream = fs.createWriteStream('public/data/meows.csv');
let start = new Date('03/15/2016');
let end = new Date('06/15/2016');

let hashtags = [
'#justsayin',
'#truestory',
'#nofilter',
'#selfie',
'#purrrrrfect',
'#purrrrr',
'#kitty',
'#meow',
'#claws',
'#spoileralert',
'#sorrynotsorry',
'#ineedadrink',
'#thisweekend',
'#winning',
'#fail',
'#love',
'#me',
'#cute',
'#photooftheday',
'#beautiful',
'#picoftheday',
'#follow',
'#happy',
'#summer',
'#bestoftheday',
'#fashion',
'#nofilter',
'#sky',
'#followme',
'#smile',
'#pretty',
'#sid_sethi',
'#friends',
'#lol',
'#hair',
'#bored',
'#swag',
'#wham',
'#funny',
'#onedirection',
'#nature',
'#family',
'#pink',
'#dog',
'#beach',
'#hot',
'#amazing',
'#sunset',
'#party',
'#awesome',
'#baby',
'#music',
'#night',
'#throwbackthursday',
'#bestfriend',
'#yum',
'#eyes',
'#trump',
'#sweet',
'#style',
'#beauty',
'#harrystyles',
'#food',
'#best'
];

function randomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

while(start <= end) {

  writerStream.write('date,characters,hashtags,summary\r\n','UTF8');
  let meows = [];
  let month = start.getMonth() < 9 ? '0' + (start.getMonth() + 1) : (start.getMonth() + 1);
  let date = start.getDate() < 10 ? '0' + start.getDate() : start.getDate();

  for(let i = 4; i < 24; i++) {
    let meowCount = randomNumber(0, 100);
    let hour = i < 10 ? '0' + i : i;

    for(let j = 0; j <= meowCount; j++) {
      let minute = randomNumber(0, 59);
      minute = minute < 10 ? '0' + minute : minute;


      let characterThreshold = 1;
      let hashtagMinimumThresold = 1;
      let hashtagMaximumThresold = 1;

      if (hour < 6 || hour > 21) {
        hashtagMinimumThresold = 12;
        hashtagMaximumThresold = 20;
        characterThreshold = 60;
      } else if (hour < 8 || hour > 18) {
        hashtagMinimumThresold = 6;
        hashtagMaximumThresold = 14;
        characterThreshold = 100;
      } else if (hour < 10 || hour > 14) {
        hashtagMinimumThresold = 4;
        hashtagMaximumThresold = 12;
        characterThreshold = 110;
      } else if ( hour < 12 || hour > 16) {
        hashtagMinimumThresold = 1;
        hashtagMaximumThresold = 8;
        characterThreshold = 120;
      } else if ( hour < 13 || hour > 15) {
        hashtagMinimumThresold = 1;
        hashtagMaximumThresold = 4;
        characterThreshold = 160;
      }

      let characterCount = randomNumber(20, characterThreshold);
      let hashtagCount = randomNumber(hashtagMinimumThresold, hashtagMaximumThresold);
      let summary = [];

      for(let k = 0; k < hashtagCount; k++) {
        summary.push(hashtags[randomNumber(0, hashtags.length - 1)]);
      }

      meows.push({
        date: '' + month + date + hour + minute,
        characterCount: characterCount,
        hashtagCount: hashtagCount,
        summary: summary.join(' ')
      });

    }
  }

  meows.sort((a, b) => {
    return a.date.localeCompare(b.date);
  });

  let data = meows.reduce((list, meow) => {
    list.push(meow.date +',' + meow.characterCount +',' + meow.hashtagCount +',' + meow.summary);
    return list;
  }, []);

  writerStream.write(data.join('\r\n'),'UTF8');

  start = new Date(start.setDate(start.getDate() + 1));
}

writerStream.end();


// date,characters,hashtags,summary
// 01010001,14,405,TODO
