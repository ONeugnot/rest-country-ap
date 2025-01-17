// function createTitle(text) {
// 	const newElement = document.createElement("h1");

// 	newElement.textContent = text;

// 	return newElement;
// }

// const titleElem = createTitle("coucou c'est nous");
// const titleElem2 = createTitle("coucou c'est nous encore");

// const titleElem3 = createTitle("coucou c'est nous encore encore");
// const titleElem4 = createTitle("coucou c'est nous a encore");

// document.body.appendChild(titleElem);
// document.body.appendChild(titleElem2);
// document.body.appendChild(titleElem3);
// document.body.appendChild(titleElem4);

const darkMode = document.getElementById("btndark");
const body = document.body;

darkMode.addEventListener("click", () => {
	if (body.classList.contains("black")) {
		body.classList.remove("black");
		body.classList.add("white");
	} else if (body.classList.contains("white")) {
		body.classList.remove("white");
		body.classList.add("black");
	} else {
		body.classList.add("black");
	}
});
