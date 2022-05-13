const API_URL = 'https://randomuser.me/api/?inc=gender,first,name,nat,location,registered,picture&noinfo';

async function getData(){
    try{
        const response = new Promise((resolve,reject) => {
            const data = fetch(API_URL).then(response => response.json()).then(data => console.log(data)).catch(err => alert(err));
            if(!data){
                reject('Error in fetch')
            }
            else resolve(data);
        })
        if(!response){
            throw new Error('Error in fetch')
        }
        console.log(response)
        return response;
    }catch(err){
        if(err instanceof Error){
            console.log(`Connection error `)
        }
        console.log(`There is an error ${err}`)
    } 
}

getData();




