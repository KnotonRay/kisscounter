import { Meteor } from 'meteor/meteor';
import { Log } from 'meteor/logging';
import { Data } from '/imports/api/data.js';

let expectedsniff = Meteor.settings.EDIT_TOKEN;


Meteor.startup(async () => {
  Data.upsert({}, { $setOnInsert: { kisses: 0 }});

  Log('\n');
  Log('Kiss Count at startup: ' + Data.findOne().kisses);
  Log('sniffcheck="' + expectedsniff + '"');
  Log(Meteor.settings);

  Meteor.methods({
    async 'increment'(sniffcheck) {
      if (sniffcheck === expectedsniff) {
        Log('server increment');
        return Data.updateAsync({}, { $inc: { kisses: 1 }})
          .then((value) => { Log('Kiss Count: ' + Data.findOne().kisses) })
      }
      else
      {
        Log('increment didn\'t pass sniffcheck ' + sniffcheck);
      }
    },
    async 'decrement'(sniffcheck) {
      if (sniffcheck === expectedsniff) {
        Log('server decrement');
        return Data.updateAsync({}, { $inc: { kisses: -1 }})
          .then((value) => { Log('Kiss Count: ' + Data.findOne().kisses) })
      }
      else
      {
        Log('decrement didn\'t pass sniffcheck ' + sniffcheck);
      }
    }
  });

  Meteor.publish('data', () => { return Data.find() });
});


