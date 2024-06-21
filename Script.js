"use strict";
// VALIDATE EMAIL
document
	.getElementById("submitButton")
	.addEventListener("click", function (event) {
		event.preventDefault();

		var email = document.getElementById("email").value;

		// Regular expression for email validation
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (regex.test(email)) {
			document.getElementById("formContainer").classList.add("hide");
			document.getElementById("infoContainer").classList.remove("hide");
		} else {
			alert("Email is not valid.");
		}
	});

//VIEW MORE/lESS BUTTON
const btn = document.querySelectorAll(".view-btn");
btn.forEach(function (button, index) {
	button.addEventListener("click", function () {
		let hide = this.nextElementSibling;
		if (hide.style.display === "none") {
			hide.style.display = "block";
			this.textContent = "▲View Less";
			if (index < 3) {
				hide.style.height = "600px";
			} else {
				hide.style.height = "250px";
			}
		} else {
			hide.style.display = "none";
			this.textContent = "▼View More";
			hide.style.height = "auto";
		}
	});
});
