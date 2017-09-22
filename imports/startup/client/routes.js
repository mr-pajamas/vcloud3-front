/**
 * Created by Michael on 2017/1/23.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

BlazeLayout.setRoot("body");

FlowRouter.route('/', {
  name: 'home',
  action() {
    import "../../ui/pages/home.js";
    BlazeLayout.render('home');
  },
});

FlowRouter.notFound = {
  action() {
    import "../../ui/pages/not-found.js";
    BlazeLayout.render('notFound');
  },
};
