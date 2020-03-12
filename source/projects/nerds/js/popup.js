var link = document.querySelector(".footer-map-address-button");
var popup = document.querySelector(".user-popup");
var cross = document.querySelector(".user-popup-cross");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=сomment]");
			

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Клик по кнопке напишите нам");
	popup.classList.add("modal-show");
	login.focus();
				
});


cross.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});


popup.addEventListener("submit", function(evt) {
	evt.preventDefault();
	console.log(login.value);
	console.log(email.value);
	console.log(comment.value);
	if(!login.value || !email.value) {
		popup.classList.add("modal-error");
	} 
});	

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
		}
	}

});		
