// Taking a folder as an input, this script will convert all SVG files in the folder to JSX files and output them in another folder

const fs = require("fs");
const path = require("path");

const convertSVGtoJSX = (inputFolder, outputFolder) => {
  const files = fs.readdirSync(inputFolder);

  files.forEach((file) => {
    if (file.endsWith(".svg")) {
      const svg = fs.readFileSync(
        `${inputFolder}/${file}`,
        "utf8",
      );

      // file names have spaces. We need the final name to be in CamelCase
      const svgName = file
        .replace(/.svg/, "")
        .split(" ")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() + word.slice(1),
        )
        .join("");

      const jsx = `
          import React from "react";

          const ${svgName} = (props) => (
            ${svg.replace(/<svg/, "<svg {...props}")}
          );

          export default ${svgName};
          `;

      fs.writeFileSync(
        `${outputFolder}/${svgName}.jsx`,
        jsx,
        { flag: "a+" },
        function (err) {
          if (err) throw err;
          console.log("It's saved!");
        },
      );
    }
  });
};

convertSVGtoJSX(
  path.join(__dirname, "../../../public/icons"),
  path.join(
    __dirname,
    "../../../src/packages/components/atoms/Icon/icons",
  ),
);
