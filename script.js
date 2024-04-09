/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: 
      Date:   

      Filename: project02-02.js
 */
 

      function verifyForm() {
            // Retrieve values from input controls
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            
            // Check if all fields are filled
            if (name && email && phone) {
                window.alert("Thank you!");
            } else {
                window.alert("Please fill in all fields.");
            }
        }

        function verifyForm() {
            // Your form verification logic here
          }
          
          document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("submit").addEventListener("click", verifyForm);
          });
          
