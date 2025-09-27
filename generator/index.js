const fs = require("fs");
const fetch = require("node-fetch-commonjs");
const {dirname} = require("path");

let baseUrl = 'http://localhost/fr_afc/index.php';
const filepath = '../docs';

const replaceBaseUrl = (html) => {
  return html.replaceAll(baseUrl, 'https://footyrankings.github.io');
}

const rootPath = ['', 'database', 'formula'];
rootPath.forEach(async (path) => {
  const response = await fetch(`${baseUrl}/${path}`);
  const html = await response.text();
  fs.mkdirSync(dirname(`${filepath}/${path}/index.html`), { recursive: true });
  fs.writeFileSync(
		`${filepath}/${path}/index.html`,
		replaceBaseUrl(html)
	);
})