// ==UserScript==
// @name       tabelog-thumbnail
// @version    0.1
// @description  食べログでAutopagerize時にサムネイルが表示されるようにするGreasemonkey Script
// @include      https://tabelog.com/*
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

document.body.addEventListener('AutoPagerize_DOMNodeInserted', function(evt) {
  var node = evt.target;
  var requestURL = evt.newValue;
  var parentNode = evt.relatedNode;
  $(node).find('.js-cassette-img').each(function(index, el) {
    var imgUrl = $(el).data('original');
    $(el).attr('src', imgUrl);
  });
}, false);
