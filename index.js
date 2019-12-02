import * as util from 'dawa-util';
import 'babel-polyfill';
import 'whatwg-fetch';

const button = document.querySelector('#knap');

button.addEventListener('click', send);

async function send(event) {
    button.innerHTML = `Click count: ${event.detail}`;
    let response= await fetch(util.danUrl('http://dawa.aws.dk/autocomplete',{q:'daa', type: 'adresse', supplerendebynavn: true, stormodtagerpostnumre: true, multilinje: true, fuzzy:true}),
        {headers: {
                'x-requested-with': 'fejl'
                }}
            );
    let forslag= await response.json();
    let antal= forslag.length;
};