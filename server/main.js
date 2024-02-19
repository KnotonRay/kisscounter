import { Meteor } from 'meteor/meteor';
import { Log } from 'meteor/logging';
import { Data, Kisses } from '/imports/api/data.js';

let expectedsniff = Meteor.settings.EDIT_TOKEN || '';

function sniff(sniffcheck) {
  let passed = sniffcheck === expectedsniff;
  if (!passed) {
    Log('Didn\'t pass sniffcheck ' + sniffcheck);
  }
  return passed;
}

function setKisses(sniffcheck, n) {
  n = parseInt(n);
  if (sniff(sniffcheck)) {
    Log(sniffcheck + ' ' + Kisses.count() + ' -> ' + n);
    return Kisses.set(n);
  }
}

Meteor.startup(() => {
  Kisses.init();

  Log('');
  Log('Kiss Count at startup: ' + Data.findOne().kisses);
  Log('sniffcheck="' + expectedsniff + '"');
  Log('');
  Log('Meteor.settings=');
  Log(Meteor.settings);
  Log('');

  Meteor.methods({
    increment: (sniffcheck, n) => setKisses(sniffcheck, Kisses.count() + n),
    set: (sniffcheck, n) => setKisses(sniffcheck, n)
  });

  Meteor.publish('data', () => { return Data.find() });
});


