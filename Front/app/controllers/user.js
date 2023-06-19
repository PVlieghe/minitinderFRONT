import BaseController from "./basecontroller.js";
import UserModel from "../model/userModel.js";


class UserController extends BaseController {
    constructor() {
        super()
        this.model = new UserModel()
    }

    async addUserForm(event){
        try {
            event.preventDefault();
            var email = document.getElementById('email').value ; 
            var username = document.getElementById('username').value ;
            var password = document.getElementById('password').value ;
            if(document.getElementById('estFemme').checked){
                var genre = 1;
            }
            else{
                var genre = 2;
            }
            if(document.getElementById('veutFemme').checked 
                && document.getElementById('veutHomme').checked){
                var orientation = 3;
            }
            else if(document.getElementById('veutFemme').checked){
                var orientation = 2;
            }
            else if(document.getElementById('veutHomme').checked){
                var orientation = 1;
            }

            var age = document.getElementById('age').value ;
            var description = document.getElementById('description').value ;
            var photoProfilUrl = document.getElementById('photo').value;
           
            
            await this.model.addUser(email, username, password, 
                genre, orientation, age, description, photoProfilUrl);
                navigate("auth");
        } catch (error) {
            console.log(error);

            const { errors } = error;
    
            errors.forEach((error) => {
                const { field, message } = error;
                const errorElement = document.getElementById(`erreur_${field}`);
                if (errorElement) {
                    errorElement.innerHTML = message;
                    errorElement.classList.remove('hidden');
                    errorElement.classList.add('err');
                }
            });
        }
        
    }

    
}
export default () => window.userController = new UserController()