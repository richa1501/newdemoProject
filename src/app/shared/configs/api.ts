

let apiserver = "https://ai-lab-backend.herokuapp.com/"

export default {
    auth:{
        login : apiserver +  "api/v1/auth/login" 
    }  ,
    auth1:{
        signUp: apiserver +  "api/v1/auth/signup" 
    }  
}