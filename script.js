//your JS code here. If required.
function toUpperCase() {
	const inputField = document.getElementById("fname");
	inputField.value = inputField.value.toUpperCase();
}
document.getElementById("fname").addEventListener("blur", toUpperCase)