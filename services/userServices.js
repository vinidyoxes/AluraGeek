//GET

const users = ()=>{
       
      return fetch('http://localhost:3000/users')
      .then(response => {
        return response.json();
      })
    };



export const userServices = {
    users
}