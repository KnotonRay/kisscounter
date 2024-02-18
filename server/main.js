import { Meteor } from 'meteor/meteor';
import { Log } from 'meteor/logging';
import { Data } from '/imports/api/data.js';

let expectedsniff = Meteor.settings.EDIT_TOKEN || '';

function setKisses(sniffcheck, n) {
  if (sniffcheck === expectedsniff) {
    Log(sniffcheck + ' ' + getKisses() + ' -> ' + n);
    return Data.update({}, { kisses: n });
  }else {
    Log('increment didn\'t pass sniffcheck ' + sniffcheck);
  }
}

function getKisses() {
  return Data.findOne().kisses;
}


Meteor.startup(() => {
  Data.upsert({}, { $setOnInsert: { kisses: 0 }});

  Log('');
  Log('Kiss Count at startup: ' + Data.findOne().kisses);
  Log('sniffcheck="' + expectedsniff + '"');
  Log('');
  Log('Meteor.settings=');
  Log(Meteor.settings);
  Log('');

  Meteor.methods({
    increment: (sniffcheck, n) => setKisses(sniffcheck, getKisses() + n),
    set: (sniffcheck, n) => setKisses(sniffcheck, n)
  });

  Meteor.publish('data', () => { return Data.find() });
});


