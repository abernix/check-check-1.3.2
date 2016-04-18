import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Template.hello.events({
  'click button'(event, instance) {
    const data = {
      "_id": undefined,
      "title": "test123",
      "description": "description here",
      "orgId": "95Wct9LbcLovDn55b",
      "tagIds": undefined,
    };

    Meteor.call("fun/fun/fun", data, (error, result) => {
      console.log(error, result);
    });
  },
});
