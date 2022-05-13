const API_URL = 'https://randomuser.me/api/?inc=gender,first,name,nat,location,registered,picture&noinfo';


async function getData(){
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error()
        }
        const json = response.then(result => result.json());
        return json;
    }catch(err){
        if(err instanceof Error){
            console.log(`Connection error `)
        }
        console.log(`There is an error ${err}`)
    } 
}

const data = getData();

console.log(data);



