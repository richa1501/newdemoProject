

let apiserver = "https://ai-lab-backend.herokuapp.com/"
let postApi = "https://reqres.in/api/users"
export default {
    auth:{
        login : apiserver +  "api/v1/auth/login" 
    }  ,
    auth1:{
        signUp: apiserver +  "api/v1/auth/signup" 
    }  

}
