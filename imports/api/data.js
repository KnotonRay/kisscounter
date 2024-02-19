
import { Mongo } from 'meteor/mongo';

export const Data = new Mongo.Collection('data');
export const Kisses = {
    init: () => Data.upsert({}, { $setOnInsert: { kisses: 0 }}),
    set: n => Data.update({}, {kisses: n}),
    count: () => Data.findOne().kisses
};

Data.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});