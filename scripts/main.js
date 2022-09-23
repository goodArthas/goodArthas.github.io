var mainImage = document.querySelector(`img`);
mainImage.setAttribute('width', 500);
mainImage.setAttribute('height', 400);


mainImage.onclick = function() {
	changeMainImage();
}

function changeMainImage() {
	var imgSourcePath = mainImage.getAttribute(`src`);

	var firstImagePath = `images/memes.JPG`;
	var secondImagePath = `images/memes2JPG`;


	if(imgSourcePath === firstImagePath){
		mainImage.setAttribute(`src`, secondImagePath);
	} else {
		mainImage.setAttribute(`src`, firstImagePath);
	}
}


var header = document.querySelector(`h1`);
var btn = document.querySelector(`button`);

btn.onclick = function(){
	setUserName();
}

if (!localStorage.getItem(`name`)) {
	setUserName();
} else {
	var name = localstorage.getItem(`name`);
	header.textContent = name;
}

function setUserName() {
	var name = prompt(`Write name`);
	localStorage.setItem(`name`, name);
	header.textContent = name;
}