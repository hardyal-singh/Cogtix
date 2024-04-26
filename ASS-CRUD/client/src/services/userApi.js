
const BASE_URL=`${import.meta.env.VITE_SERVER_URL}/api/v1/user`; //userapi.js

console.log(BASE_URL)

const handleresponse=(response)=>{
    if(response){
        return response.json()
    }

    throw new Error("Network response was not ok.")
}

const userApi={
    // for create and update
    signup:async (endpoint, data)=>{
     const response=await fetch(`${BASE_URL}/${endpoint}`, {
        method:"POST", 
        credentials:"include", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
     })

     return await handleresponse(response);

    },
    //for get all user (read)
    allUsers:async (endpoint)=>{
        const response= await fetch(`${BASE_URL}/${endpoint}`, {
            method:"GET",
            credentials:"include", 
            headers:{"Content-Type":"application/json"},
        })

        return handleresponse(response);
    },
    //for delete a particular user..
    deleteUser:async (endpoint, id)=>{
        const response=await fetch(`${BASE_URL}/${endpoint}/${id}`, {
            method:"GET",
            credentials:"include", 
            headers:{"Content-Type":"application/json"},
        })

        return handleresponse(response)
    }
}

export default userApi;