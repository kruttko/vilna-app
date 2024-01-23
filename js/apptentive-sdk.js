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
        ApptentiveSDK.showMessageCenter();
      });
    }
  
    // Assuming you have a button with the class "btn-survey-1" for Survey 1
    var survey1Button = document.querySelector(".btn-survey-1");
  
    if (survey1Button) {
      survey1Button.addEventListener("click", function() {
        // Send an event named "survey_1" when the button is clicked
        ApptentiveSDK.engage('survey_1');
      });
    }
  
    // ... (add more event listeners if needed)
  });
