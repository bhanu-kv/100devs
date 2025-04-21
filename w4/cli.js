const { program } = require('commander');

program
  .argument('<string>');

program.parse();

const options = program.opts();
const txt_file = program.args[0];
fetch(txt_file)
  .then((res) => res.text())
  .then((text) => {
    console.log(text)
   })
  .catch((e) => console.error(e));