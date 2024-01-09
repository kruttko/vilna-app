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
  
    // Generate a new random unique identifier for each page load
    var uniqueIdentifier = generateRandomIdentifier();
  
    // Create a conversation with the new identifier
    ApptentiveSDK.createConversation({
      app_release: {
        version: '1.0.0' // Replace with your website's version
      },
      person: {
        unique_token: uniqueIdentifier,
        name: 'Full Name',
        email: 'user@domain.tld',
        custom_data: {
          age: 30,
          premium: true
        }
      },
      device: {
        custom_data: {
          flash: true,
        }
      }
    });
  
    // Function to generate a random identifier
    function generateRandomIdentifier() {
      return 'user-' + Math.random().toString(36).substr(2, 9);
    }
  
    // Assuming you have a button with the id "btn-mc" for Message Center
    var messageCenterButton = document.getElementById("btn-mc");
  
    if (messageCenterButton) {
      messageCenterButton.addEventListener("click", function() {
        // Trigger the Message Center whenever the button is clicked
        ApptentiveSDK.showMessageCenter();
      });
    }
  });

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