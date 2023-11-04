/* Add your JavaScript to this file */
window.onload = function() {
    let email = document.getElementById("email");
    let subscribe = document.querySelector(".newsletter button");
    let userMessage = document.querySelector(".message");
    
    subscribe.addEventListener("click", function(event) {
        event.preventDefault();

        var useremail = email.value;
        
        // Regular expression for a simple email validation
        var validEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        
        if (validEmail.test(useremail)) {
            userMessage.textContent = "Thank you! Your email address " + useremail + " has been added to our mailing list!";
        } else {
            userMessage.textContent = "Please enter a valid email address.";
        }
    });
};