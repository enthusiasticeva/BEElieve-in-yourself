// JavaScript Document
var cyclepos = 1;
var forward = document.getElementById("forward");
var backward = document.getElementById("backward");
var title = document.getElementById("title");
var details = document.getElementById("details");

function increment() {
	"use strict";
	cyclepos += 1;
	if (cyclepos === 7){
		cyclepos = 1;
	}
}

function decrement() {
	"use strict";
	cyclepos -= 1;
	if (cyclepos === 0){
		cyclepos = 6;
	}
}

function displaypicture() {
	"use strict";
	if (cyclepos === 1) {
		var prev = 6;
	} else {
		prev = cyclepos-1;
	}
	if (cyclepos === 6) {
		var nex = 1;
	} else {
		nex = cyclepos+1;
	}
	var image = document.getElementById("step"+cyclepos);
	var previmg = document.getElementById("step"+prev);
	var neximg = document.getElementById("step"+nex);
	previmg.style.opacity = "0";
	previmg.style.filter  = 'alpha(opacity=0)';
	neximg.style.opacity = "0";
	neximg.style.filter  = 'alpha(opacity=0)';
	image.style.opacity = "1";
	image.style.filter  = 'alpha(opacity=100)';	
}
function updatetext() {
	"use strict";
	if (cyclepos === 1) {
		title.textContent = "Step " + cyclepos;
		details.textContent = "Queen bee lays egg in a wax cell.";
	} else if (cyclepos === 2) {
		title.textContent = "Step " + cyclepos;
		details.textContent = "Worker bees feed hatched larva.";
	} else if (cyclepos === 3) {
		title.textContent = "Step " + cyclepos;
		details.textContent = "Larva reaches full growth.";
	} else if (cyclepos === 4) {
		title.textContent = "Step " + cyclepos;
		details.textContent = "Workers seal cell with wax.";
	} else if (cyclepos === 5) {
		title.textContent = "Step " + cyclepos;
		details.textContent = "Larva spins cocoon and changes into a pupa";
	} else if (cyclepos === 6) {
		title.textContent = "Step " + cyclepos;
		details.textContent = "Adult bee leaves cell";
	}
}



forward.onclick = function() {
	"use strict";
	increment();

	displaypicture();
	updatetext();
};

backward.onclick = function() {
	"use strict";
	decrement();

	displaypicture();
	updatetext();
};

