// Add innerHTML to body in new instance of a DOM.
const createBody = (strHTML) => {
	let d = new Document;
	let elB = d.createElement('body');
	d.appendChild(elB);
	let dBody = d.getElementsByTagName('body');
	dBody[0].innerHTML = strHTML;
	return dBody;
}
