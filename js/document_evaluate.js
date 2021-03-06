var headings = document.evaluate("/html/body//h2", document, null, XPathResult.ANY_TYPE, null);
/* Search the document for all h2 elements.
 * The result will likely be an unordered node iterator. */
var thisHeading = headings.iterateNext();
var alertText = "Level 2 headings in this document are:\n";
while (thisHeading) {
  alertText += thisHeading.textContent + "\n";
  thisHeading = headings.iterateNext();
}
alert(alertText); // Alerts the text of all h2 elements
