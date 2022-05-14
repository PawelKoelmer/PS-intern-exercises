const API_URL = 'https://randomuser.me/api/?inc=gender,first,name,nat,location,registered,picture&noinfo';

async function getData(){
    try{
        const data = await fetchData();
        console.log(data)
    }  catch(err){
        console.log(`There is an error ${err}`)
    } 
}
const fetchData = () => {
     return fetch(API_URL).then((response) => response.json());
}

getData();



