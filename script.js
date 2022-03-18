/* var copyTextareaBtn = document.querySelector(".js-textareacopybtn");

copyTextareaBtn.addEventListener("click", function (event) {
  var copyTextarea = document.querySelector(".js-copytextarea");
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
  } catch (err) {
    console.log("Oops, unable to copy");
  }
}); */

var copyTextareaBtn = document.querySelectorAll('.js-textareacopybtn');


window.onload = function () {
    // Get all the elements that match the selector as arrays
    var copyTextareaBtn = Array.prototype.slice.call(document.querySelectorAll('.js-textareacopybtn'));
    var copyTextarea = Array.prototype.slice.call(document.querySelectorAll('.js-copytextarea'));
  
    // Loop through the button array and set up event handlers for each element
    copyTextareaBtn.forEach(function(btn, idx){
    
      btn.addEventListener("click", function(){
      
        // Get the textarea who's index matches the index of the button
        copyTextarea[idx].select();
  
        try {
          var msg = document.execCommand('copy') ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
        } catch (err) {
          console.log('Whoops, unable to copy');
        } 
        
      });
      
    });
  }
