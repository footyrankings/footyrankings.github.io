const fs = require("fs");
const fetch = require("node-fetch-commonjs");
const {dirname} = require("path");

let baseUrl = 'http://localhost/fr_afc/index.php';
const filepath = '../docs';
let years = [2026];
let countries = ['AFG','AUS','BAN','BHR','BHU','BRU','CAM','CHN','GUM','HKG','IDN','IND','IRN','IRQ','JOR','JPN','KGZ','KOR','KSA','KUW','LAO','LBN','MAC','MAS','MDV','MNG','MYA','NEP','NMI','OMA','PAK','PHI','PLE','PRK','QAT','SIN','SRI','SYR','THA','TJK','TKM','TLS','TPE','UAE','UZB','VIE','YEM'];

const replaceBaseUrl = (html) => {
  let str = html.replaceAll(baseUrl, 'https://footyrankings.github.io');
  return str.replaceAll('http://localhost/fr_afc', 'https://footyrankings.github.io');
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

const postsPath = [
  'fifa-rankings-changes-for-afc-member-associations-march-2024',
  'fifa-rankings-changes-for-afc-member-associations-asian-cup-2023',
  'fifa-rankings-changes-for-afc-member-associations-september-2024',
  'fifa-rankings-changes-for-afc-member-associations-october-2024',
  'fifa-rankings-changes-for-afc-member-associations-march-2025',
];
// postsPath.forEach(async (path) => {
//   const directory = `posts/${path}`;
//   const response = await fetch(`${baseUrl}/${directory}`);
//   const html = await response.text();
//   fs.mkdirSync(dirname(`${filepath}/${directory}/index.html`), { recursive: true });
//   fs.writeFileSync(
// 		`${filepath}/${directory}/index.html`,
// 		replaceBaseUrl(html)
// 	);
// });

async function getLatest() {
  for (const y of years) {
    const directories = [
      `crank${y}`,
      `matches${y}`,
      `cpts${y}`,
      `prizemoney${y}`,
      `contrib${y}`,
    ];

    for (const directory of directories) {
      const response = await fetch(`${baseUrl}/${directory}`);
      const html = await response.text();
      fs.mkdirSync(dirname(`${filepath}/${directory}/index.html`), { recursive: true });
      fs.writeFileSync(
        `${filepath}/${directory}/index.html`,
        replaceBaseUrl(html)
      );
    }
  }
}
getLatest();

async function getCptsCountry() {
  for (const y of years) {
    for (const c of countries) {
      const directory = `cpts/${y}/${c}`;
      const response = await fetch(`${baseUrl}/${directory}`);
      const html = await response.text();
      fs.mkdirSync(dirname(`${filepath}/${directory}/index.html`), { recursive: true });
      fs.writeFileSync(
        `${filepath}/${directory}/index.html`,
        replaceBaseUrl(html)
      );
    }
  }
}
getCptsCountry();
