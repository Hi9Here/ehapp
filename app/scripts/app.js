(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
    app.top_filter = [{type:'Hotels'},{type:'Things to Do'},{type:'Destinations'},{type:'Food & Drink'}]
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    document.querySelector('body').removeAttribute('unresolved');

    // Ensure the drawer is hidden on desktop/tablet
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    drawerPanel.forceNarrow = true;
  });

})(document);

// TODO: Decide if we still want to suggest wrapping as it requires
// using webcomponents.min.js.
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
// )(wrap(document));

