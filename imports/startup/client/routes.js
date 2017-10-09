/**
 * Created by Michael on 2017/1/23.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { _ } from 'underscore';

import '../../ui/layouts/layout.js';

BlazeLayout.setRoot('body');

FlowRouter.previous = _.constant(undefined);
FlowRouter.triggers.exit([(context) => {
  FlowRouter.previous = _.constant(context);
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    // import '../../ui/pages/home.js';

    BlazeLayout.render('layout');
  },
});

FlowRouter.route('/aa', {
  name: 'homeaa',
  action() {
    // import '../../ui/pages/home.js';

    BlazeLayout.render('layout');
  },
});

FlowRouter.notFound = {
  action() {
    import '../../ui/pages/not-found.js';

    BlazeLayout.render('layout', { mainContent: 'notFound' });
  },
};
