/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

  */
  function solve() {
    return function (selector) {
      var sel = selector;
      var button = $(sel).find('.button');
      var content = $(sel).find('.content');
      button.text('hide');
      var first = $(sel).find('.content').first().addClass('hidden');
      button.on('click', function(){
        if(first.hasClass('hidden')){
          button.text('show');
          first.toggleClass('hidden');
          first.hide();
        }
        else {
          button.text('hide');
          first.toggleClass('hidden');
          first.show();
        }
      });
    };
  }

  module.exports = solve;