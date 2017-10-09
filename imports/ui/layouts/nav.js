/**
 * Created by Michael on 2017/6/5.
 */
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';
import { _ } from 'underscore';
// import Masonry from 'masonry-layout';
// import Holder from 'holderjs';

// import '../layouts/header.js';
// import '../layouts/footer.js';
// import '../components/item-card.html';
// import '../components/pagination.js';
import './nav.html';

Template.nav.onRendered(function () {
  const template = this;

  // Holder.run();

  /*
  new Masonry( '.grid', {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });
  */
  // console.log($('.grid'));
  const $element = template.$('.home-nav');

  const transitions = {
    home() {
      $element.trigger('transit.vc3');
      $element.velocity({ height: '100%' }, {
        complete() {
          $element.trigger('transited.vc3');
        },
      });
    },
    homeaa() {
      $element.trigger('transit.vc3');
      $element.velocity({ height: '81px' }, {
        complete() {
          $element.trigger('transited.vc3');
        },
      });
    },
  };

  template.autorun(() => {
    const routeName = FlowRouter.getRouteName();

    /*
     * 1. 登录后到首页，与具体页面回到首页，效果不同
     *    登录后到首页，导航幕布不动，迅速清晰
     *    具体页面回到首页，导航幕布下放，当前导航不动
     *    个人页面回到首页，导航幕布下放
     * 2. 也就是说，导航幕布的状态有四种
     *    第一种，登录页面，下放，雾化，无图标。只可能到首页状态
     *    第二种，首页，下放，清晰，有图标。可以去其他三种状态
     *    第三种，具体导航页面，收起，当前导航不动。可以去其他三种状态
     *    第四种，个人页面，全部收起。可以去登录页和首页
     */
    /*
    template.$('.home-nav').velocity({ opacity: 0.5 }, 5000, function () {
      console.log('resolved');
    });
    */
    _.isFunction(transitions[routeName]) && transitions[routeName]();
  });
});
