// ==UserScript==
// @name       zozotown-thumbnail
// @version    0.0
// @description  ZOZOTOWNでAutopagerize時にサムネイルが表示されるようにするGreasemonkey Script
// @include      http://zozo.jp/search/*
// @require http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==

document.body.addEventListener('AutoPagerize_DOMNodeInserted', function(evt) {
  var node = evt.target;
  var requestURL = evt.newValue;
  var parentNode = evt.relatedNode;
  $(node).find('.loader').each(function(index, el) {
    var imgUrl = $(el).data('src');
    $(el).attr('src', imgUrl);
  });
}, false);
