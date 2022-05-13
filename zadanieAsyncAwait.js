const API_URL = 'https://randomuser.me/api/?inc=gender,first,name,nat,location,registered,picture&noinfo';


async function getData(){
    try{
        const response = await fetch(API_URL).then((res) => res.json());
        if(!response){
            throw new Error('Error in fetch')
        }
        console.log(response);
        return response;
    }catch(err){
        if(err instanceof Error){
            console.log(`Connection error `)
        }
        console.log(`There is an error ${err}`)
    } 
}

getData();




