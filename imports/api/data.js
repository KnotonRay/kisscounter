
import { Mongo } from 'meteor/mongo';

export const Data = new Mongo.Collection('data');

Data.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});