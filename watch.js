console.log("HoloTools Tools Loaded");

var buttons;
var currentRulePauseOther = localStorage.getItem('rulePauseOther');

var loadCheck = setInterval(function(){
	if(document.querySelectorAll(".live-controls").length > 0) {
		buttons = document.querySelectorAll(".live-controls")[0];
		inject();
		clearInterval(loadCheck);
	}
}, 500);

function inject() {
	buttons.style.width = "205px";

	if(currentRulePauseOther == 0) {
		var newClass = "active";
		var newFunc = toggleOff;
	}
	else {
		var newClass = "deactive";
		var newFunc = toggleOn;
	}

	buttons.appendChild(generateNewButton(newClass, newFunc));
}

function generateNewButton(newClass, newFunc) {
	var newButtonParent = buttons.lastChild.cloneNode(true);
	newButtonParent.lastChild.innerHTML = "";
	var newButton = newButtonParent.firstChild.firstChild;
	newButton.className += " " + newClass;
	newButton.onclick = newFunc;
	newButton.innerHTML = "👪";
	return newButtonParent
}

function toggleOff() {
	toggle(1);
}

function toggleOn() {
	toggle(0);
}

function toggle(i) {
	localStorage.setItem('rulePauseOther', i);
	location.reload();
}

