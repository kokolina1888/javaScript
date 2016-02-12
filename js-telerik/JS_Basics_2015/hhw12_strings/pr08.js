//Write a JavaScript function that 
//replaces in a HTML document given as 
//string all the tags <a href="…">…</a> 
//with corresponding tags [URL=…]…/URL]

var text, res1;

text = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
res1 = text.replace(/<a href/g, '[URL');
res2 = res1.replace(/<\/a>/g, '[/URL]');
res3 = res2.replace(/>/g, ']');
console.log(res3);