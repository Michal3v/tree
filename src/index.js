#!/usr/bin/env node
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

// const response = fetch('https://animeok.co.il/').
//     then(res => {        
//         res.json().then(j => console.log(j))
//     });

//const url = 'https://www.ramat-gan.muni.il/tashtiot/view/forest_commissioner/license/2022/';

export const getTreeList = async (url) => {
    // get html text from reddit
    const response = await fetch(url);
    // using await to ensure that the promise resolves
    const body = await response.text();

    // parse the html text and extract titles
    const $ = cheerio.load(body);
    let titleList = [];

    // using CSS selector  
    $("td > p:first-of-type").each((i, title) => {
        // console.log(title);
        // console.log(i);
        const titleNode = $(title);
        const titleText = titleNode.text();

        titleList.push(titleText);
    });

    //class="slotTitle small"
    //class="table_content_regular_wrap"
    titleList = titleList.filter(t => t.includes('אים'));
    return titleList;
};

for (let i = 2019; i < 2023; i++) {
    let url = `https://www.ramat-gan.muni.il/tashtiot/view/forest_commissioner/license/${i}/`
    const list = await getTreeList(url);
    console.log(`In the year ${i} There were ${list.length} permints in the area`);
    console.log(`The trees located in  ${list}`);
    console.log(``);
}