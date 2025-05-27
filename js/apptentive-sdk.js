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

      // Set debug mode to true
  ApptentiveSDK.setOption('debug', true);
  
    // Create a conversation with the new identifier
    ApptentiveSDK.createConversation({
        app_release: {
          version: '1.0.0' // Replace with your website's version
        },
        person: {
          unique_token: uniqueIdentifier,
          custom_data: {
            age: 30,
            total_purchases: getTotalPurchases(),
            subscription_type: getSubscriptionType(),
            zip_code: getZipCode()
          }
        },
        device: {
          custom_data: {
            browser_name: getBrowserName(),
            flash: hasFlashSupport(),
            html: false
          }
        }
      });
    
      // Function to generate a random identifier
      function generateRandomIdentifier() {
        return 'user-' + Math.random().toString(36).substr(2, 9);
      }
    
      // Function to get the browser name
      function getBrowserName() {
        var userAgent = window.navigator.userAgent;
        if (userAgent.indexOf("Chrome") != -1) return "Chrome";
        if (userAgent.indexOf("Safari") != -1) return "Safari";
        if (userAgent.indexOf("Firefox") != -1) return "Firefox";
        if (userAgent.indexOf("Edge") != -1) return "Edge";
        if (userAgent.indexOf("Opera") != -1 || userAgent.indexOf("OPR") != -1) return "Opera";
        return "Unknown";
      }
    
      // Function to check if Flash is supported
      function hasFlashSupport() {
        // Implement your logic to check if Flash is supported
        // This is just a placeholder, you may need to use a more sophisticated approach
        return true;
      }
    
      // Function to get total purchases
      function getTotalPurchases() {
        // Implement your logic to get the total purchases
        // This is just a placeholder, you may need to fetch this information from your application
        return 10; // Replace with actual total purchases
      }
    
      // Function to get subscription type
      function getSubscriptionType() {
        // Implement your logic to get the subscription type
        // This is just a placeholder, you may need to fetch this information from your application
        return "Premium"; // Replace with actual subscription type
      }
    
      // Function to get zip code
      function getZipCode() {
        // Implement your logic to get the zip code
        // This is just a placeholder, you may need to fetch this information from your application
        return "12345"; // Replace with actual zip code
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
        ApptentiveSDK.engage('survey_1_');
      });
    }

  // Assuming you have a button with the class "btn-note-1" for Note 1
  var note1Button = document.querySelector(".btn-note-1");

  if (note1Button) {
    note1Button.addEventListener("click", function() {
      // Send an event named "note_1" when the button is clicked
      ApptentiveSDK.engage('note_1');
    });
  }
      // Assuming you have a button with the class "btn-survey-1" for Survey 1
      var survey1Button = document.querySelector(".btn-survey-2");
  
      if (survey1Button) {
        survey1Button.addEventListener("click", function() {
          // Send an event named "survey_1" when the button is clicked
          ApptentiveSDK.engage('survey_2_');
        });
      }
  
    // Assuming you have a button with the class "btn-note-1" for Note 1
    var note1Button = document.querySelector(".btn-note-2");
  
    if (note1Button) {
      note1Button.addEventListener("click", function() {
        // Send an event named "note_1" when the button is clicked
        ApptentiveSDK.engage('note_2');
      });
    }

  // Assuming you have a button with the class "btn-love-dialog" for Love Dialog
  var loveDialogButton = document.querySelector(".btn-love");

  if (loveDialogButton) {
    // Define the order of events
    var loveDialogEvents = ['love_dialog', 'love', 'dialog', 'love_experience', '!love_experience', 'dialog_love'];

    // Initialize the index
    var currentIndex = 0;

    loveDialogButton.addEventListener("click", function() {
      // Get the event at the current index
      var currentEvent = loveDialogEvents[currentIndex];

      // Send the current event
      ApptentiveSDK.engage(currentEvent);

      // Move to the next event in the order
      currentIndex = (currentIndex + 1) % loveDialogEvents.length;
    });
  }




//   if (loveDialogButton) {
//     loveDialogButton.addEventListener("click", function() {
//       // Send an event named "love_dialog" when the button is clicked
//       ApptentiveSDK.engage('love_dialog');
//     });
//   }
  
    // ... (add more event listeners if needed)
  });
