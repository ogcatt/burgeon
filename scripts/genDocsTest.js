const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

const filenames = [
    "1. Introduction"
];

(async () => {
    var path = require("path");
    var absolutePath = path.resolve("Relative file path");
    console.log(absolutePath)

    for(let i=0; i < filenames.length; i++) {

        const pdf = await mdToPdf({ path: `./src/markdown/english/${filenames[i]}.md` }).catch(console.error);

        if (pdf) {
            console.log(`Writing to: ${filenames[i]}`)
            fs.writeFileSync(`./scripts/${filenames[i]}.pdf`, pdf.content);
        }

    }
})();