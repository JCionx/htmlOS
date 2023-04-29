// Get the reference to the iframe element
var iframe = document.getElementById('iframe');

// Store the initial title
var initialTitle = iframe.contentDocument.title;

// Check for title changes at regular intervals
setInterval(function() {
  // Get the current title of the iframe
  var currentTitle = iframe.contentDocument.title;

  // Compare the current title with the initial title
  if (currentTitle !== initialTitle) {
    // Title has changed, do something
    console.log('Title changed:', currentTitle);
    
    // You can perform any action or call a function here based on the title change
    // For example, update a UI element, trigger an event, etc.
  }
}, 1000); // Check every second (you can adjust the interval as needed)