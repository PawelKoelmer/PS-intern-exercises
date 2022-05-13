const API_URL = 'https://randomuser.me/api/?inc=gender,first,name,nat,location,registered,picture&noinfo';

async function getData(){
    try{
        const data = await fetchData();
    }  catch(err){
        console.log(`There is an error ${err}`)
    } 
}
const fetchData = () => {
    return new Promise((resolve,reject) => {
        const fetched = fetch(API_URL).then((response) => response.json()).then(data => console.log(data))
        if(!fetched){
            reject("Error in fetch")
        }
        resolve(fetched)
    })
}

getData();



