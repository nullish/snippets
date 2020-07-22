// Takes a block of HTML as a string and performs a regex substitution
const xNodeSet = (strXpath) => {
	const xIn = document.evaluate(strXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE);
	const xOut = xIn.singleNodeValue.innerHTML.replace(/<li>\n.*?<h2><a href="#">(.*?)<\/a><\/h2>\n.*?<div style="display: none;">/g, "<h2>$1</h2>");
	return xOut;
}