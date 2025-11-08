const fs = require("fs");

const files = fs.readdirSync("src/content/blog");

const filenames = files.map(file => file.slice(0, -3));

fs.writeFileSync("src/utils/blogFiles.json", JSON.stringify(filenames));