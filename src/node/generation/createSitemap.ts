// @ts-ignore

require('dotenv').config();
const nodeFetch = require('node-fetch');
const filesystem = require('fs');
const filesystemPromises = filesystem.promises;

const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://whatjackhasmade.co.uk';
const API = process.env.NEXT_PUBLIC_WORDPRESS_DOMAIN || '';

const sitemapPost = `${API}/post-sitemap.xml`;
const sitemapPage = `${API}/page-sitemap.xml`;
const sitemapWork = `${API}/case-sitemap.xml`;

const nodeFetchXML = async url => {
  const res = await nodeFetch(url);
  const data = await res.text();
  return data;
};

/**
 * Replace all the occerencess of $find by $replace in $originalString
 * @param  {originalString} input - Raw string.
 * @param  {find} input - Target key word or regex that need to be replaced.
 * @param  {replace} input - Replacement key word
 * @return {String}       Output string
 */
function replaceAll(originalString, find, replace) {
  return originalString.replace(new RegExp(find, 'g'), replace);
}

const replaceStrings = (data, append) => {
  let replaced = `<loc>${domain}`;
  if (append) replaced += `/${append}`;
  const pageData = replaceAll(data, `<loc>${API}`, replaced);
  const updatedCSS = replaceAll(pageData, `\<\?xml-stylesheet(.*?)\?\>`, ``).replace(
    `<?xml version="1.0" encoding="UTF-8"?><?`,
    `<?xml version="1.0" encoding="UTF-8"?>`,
  );
  return updatedCSS;
};

(async () => {
  const pageXML = await nodeFetchXML(sitemapPage);
  const pageData = replaceStrings(pageXML, undefined);

  const postXML = await nodeFetchXML(sitemapPost);
  const postData = replaceStrings(postXML, `stories`);

  const workXML = await nodeFetchXML(sitemapWork);
  const workData = replaceStrings(workXML, undefined);

  await filesystemPromises.writeFile(`./public/page-sitemap.xml`, pageData);
  await filesystemPromises.writeFile(`./public/post-sitemap.xml`, postData);
  await filesystemPromises.writeFile(`./public/work-sitemap.xml`, workData);

  await filesystemPromises.writeFile(`./out_publish/page-sitemap.xml`, pageData);
  await filesystemPromises.writeFile(`./out_publish/post-sitemap.xml`, postData);
  await filesystemPromises.writeFile(`./out_publish/work-sitemap.xml`, workData);
})();
