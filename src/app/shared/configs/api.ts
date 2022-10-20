

let apiserver = "https://ai-lab-backend.herokuapp.com/"
let postApi = "https://reqres.in/api/users"
export default {
    auth:{
        login : apiserver +  "api/v1/auth/login"
    }  ,
    authSignUp:{
        signUp: apiserver +  "api/v1/auth/signup"
    }  ,
    changePass:{
        changepassword:apiserver + "api/v1/auth/reset-password"
    }

}
