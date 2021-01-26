#!/usr/bin/env node

const { getCode, getName } = require('country-list');  
const axios = require('axios').default;



let ArgsInput = process.argv.slice(2);
let CountryInput = ArgsInput[0];
let CurrentYear = ArgsInput[1];

console.log(CountryInput);

let CountryCode = getCode(CountryInput);
console.log(CountryCode);

// let CurrentYear = new Date().getFullYear()
console.log(CurrentYear);

let URLAPI ="https://date.nager.at/Api/v2/PublicHolidays/"+CurrentYear+"/"+CountryCode;
console.log(URLAPI);

axios
.get(URLAPI)
.then(function (reponse) {
    let items = reponse.data;
    items.forEach((item, index) => {
        console.log(
            `${index +1} : ${item.date} - ${item.name} (${item.localName})`
        );
    });
})

