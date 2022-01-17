'use strict'
const box = document.querySelector('.box');
const fetchAPI = ()  => {
    return new Promise(async(resolve, reject)=>{

        try{
            const urlAPI = 'https://api.covidtracking.com/v1/us/daily.json';
            const res = await fetch(urlAPI);
            
            if(res){
                resolve(res)
                /* non usare le keyword comuni per il nome delle variabili */
                const pippo = await res.json() 
                //console.log(json)
                /* 
                    non invocare metodi qui dentro, ma deve solo ritornare il risultato, quindi:
                    return json
                */
                return pippo
                
            } else {
                throw new Error("no items or no result");
            }
              
        } catch (e){
            reject(e)
        };
    })
}


fetchAPI().then(pippo.map(item => renderAPI(item)))




const renderAPI = function(data){
    const div = document.createElement('div');
    div.classList.add('container');

    const divHTML = `
    <p>Date: ${data.dateChecked}</p>
    <p>Positive: ${data.positive}</p>
    <p>Negative: ${data.negative}</p>
    `
    div.innerHTML = divHTML
    box.appendChild(div);
}

fetchAPI()