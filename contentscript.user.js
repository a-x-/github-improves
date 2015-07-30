// ==UserScript==
// @name Gravatar
// @description Adds avatars from Staff to local GitHub.
// @include https://github.yandex-team.ru
// @include https://github.com
// @require  jquery.min.js
// @run-at document-end
// @version 1.5
// ==/UserScript==

// Заменить хеши на 7-символьные
var shaBlocks = $('.commit-meta .sha-block .sha');
[].slice.call(shaBlocks).forEach(function(shaBlock){
  var sha = shaBlock.innerText;
  sha = sha.slice(0,7);
  shaBlock.innerText = sha;
});
