/**
 * Created by Michael on 2017/6/5.
 */
import { Template } from 'meteor/templating';
// import Masonry from 'masonry-layout';
// import Holder from 'holderjs';

//import '../layouts/header.js';
// import '../layouts/footer.js';
// import '../components/item-card.html';
// import '../components/pagination.js';
import './home.html';

Template.home.onRendered(() => {

  const template = this;

  //Holder.run();

  /*
  new Masonry( '.grid', {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });
  */
  //console.log($('.grid'));
});
