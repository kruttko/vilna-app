// const messageCenterBtn = document.querySelector("#btn-mc");
// const survey1Btn = document.querySelector('.btn-survey-1');
// const survey2Btn = document.querySelector('.btn-survey-2');
// const noteBtn = document.querySelector('.btn-note');

// messageCenterBtn.addEventListener("click", () => {
//     console.log('MC clicked');
// });

// survey1Btn.addEventListener('click', () => {
//     console.log('MC clicked');
// });

// survey2Btn.addEventListener('click', () => {
//     console.log('MC clicked');
// });

// noteBtn.addEventListener('click', () => {
//     console.log('MC clicked');
// });

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before adding event listeners
  
    // Assuming you have a button with the id "btn-mc" for Message Center
    var messageCenterButton = document.getElementById("btn-mc");
  
    if (messageCenterButton) {
      // Add a click event listener to the Message Center button
      messageCenterButton.addEventListener("click", function() {
        // Trigger the Message Center when the button is clicked
        ApptentiveSDK.showMessageCenter();
      });
    }
  });