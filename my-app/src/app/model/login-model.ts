export class LoginModel {
    id       : string;
    username : string;
    password : string;
 
    public static isNull(user: LoginModel): boolean {
        return user.username === null &&
            user.password === null ;
           
    }  
}
