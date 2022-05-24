function join() {
    let firstName = prompt("What is your first name?");
    let lastName = prompt("What is your last name?");
    let age = prompt("How old are you?");
    let heading = document.querySelector(".h3_join");
    firstName = firstName.toUpperCase();
    firstName = firstName.trim();
    lastName = lastName.toUpperCase();
    lastName = lastName.trim();

    if (age < 18) {
        alert(
            "Sorry!😥 People who under 18 years old🔞 is not allowed to join this event."
        );

        heading.innerHTML =
            "Hello, " +
            firstName +
            " " +
            lastName +
            "!" +
            "<br/>" +
            "Please join us next time when you over 18.😊";
    } else {
        let email = prompt("What is your email address?");
        alert(
            "Thankyou so much! We will send you a confirm email📩 to you. See you soon✨!"
        );
        heading.innerHTML =
            "Thankyou for joining our festival🎈" +
            "<br/>" +
            firstName +
            " " +
            lastName +
            "!";
    }
}

let joinButton = document.querySelector("button");
joinButton.addEventListener("click", join);