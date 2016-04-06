/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
          */

          function solve() {
            return function (selector, count) {
             var where = selector,
             num = parseInt(count);

             var node = $(where);

             if(node !== 'undefined'){

               $(where).append('<ul/>');
               var ul = $('ul');
               for(var i= 0; i < num; i+=1){
                ul.append('<li/>');
                $('li').text('List item #INDEX').attr('class', 'list-item');
                }
              }
              else if(num < 1){
                throw new Error();
              }
              else if(num === 'NaN'){
                throw new Error();
              }
              else if(num === 'undefined'){
                throw new Error();

              }

          };
        }

        module.exports = solve;