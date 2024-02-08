import { Meteor } from 'meteor/meteor';
import { Log } from 'meteor/logging';
import App from '../imports/ui/App.svelte';


Meteor.startup(() => {
  Log("client startup");
  new App({ target: document.getElementById('app') });
});
