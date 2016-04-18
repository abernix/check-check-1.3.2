import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  "fun/fun/fun"(args) {
    console.log('validating:', args);
    check(args, {
      _id: Match.OneOf(String, undefined),
      title: String,
      description: String,
      orgId: String,
      tagIds: Match.OneOf([String], undefined),
    });
  },
})