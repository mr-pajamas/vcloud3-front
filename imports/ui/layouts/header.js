/**
 * Created by Michael on 2017/6/25.
 */
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './header.html';

Template.header.onCreated(function () {

});

Template.header.onRendered(function () {
  // TODO: temporary use of session
  Session.set('showHeader', true);
});

Template.header.helpers({
  show() {
    return Session.get('showHeader');
  },
});
