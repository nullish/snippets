/* NodeJS function to write a number of files with variations taken from an array of values.

A template file needs to be specified. This is what will be reproduced with variations. The template file must
contain placeholder text where value substitutions take place.


************ TODO **************
1. Make a function
2. Feed arguments
3. Add yargs for CLI running
4. NPM 

Nullish
June 2020

*/

const fs = require('fs');

// Array of elements that will be used to replace values in the files.
const es = [
["foo1", "foo2"],
["bar1", "bar2"]
]

const tempFile = fs.readFileSync("./path_to_base_template_file.txt").toString();
let writeFile;
let testName;
let scriptFile;

for (e of es) {
	testName = e[1];
	writeFile = tempFile.replace(/PH_REPLACE1/g, `'${testName}'`);
	writeFile = writeFile.replace(/PH_REPLACE2/g, `'${e[0]}'`);

	scriptFile = testName.replace(/\s/g, "-");

	fs.writeFileSync(`./path/to/output/multiple/files/${scriptFile}.js`, writeFile)
}