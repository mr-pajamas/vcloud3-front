/**
 * Created by Michael on 2017/9/25.
 */

import { Template } from 'meteor/templating';

import './header.js';
import './nav.js';
import './layout.html';

Template.layout.events({

  'transit.vc3'(event, templateInstance) {
    templateInstance.$('.disabler').show();
  },
  'transited.vc3'(event, templateInstance) {
    templateInstance.$('.disabler').hide();
  },
});
