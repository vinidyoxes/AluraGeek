//GET

const users = ()=>{
       
      return fetch('https://my-json-server.typicode.com/vinidyoxes/AluraGeek/users')
      .then(response => {
        return response.json();
      })
    };



export const userServices = {
    users
}