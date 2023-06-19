import BaseController from "./basecontroller.js";
import AuthModel from "../model/authModel.js";


class AuthController extends BaseController {
    constructor() {
        super()
        this.model = new AuthModel()
    }

    async authForm(event) {
        try {
            event.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            const token = await this.model.getAuth(email, password);
            console.log(token);
            localStorage.setItem('token', token.token);
            // const connectedUser = await this.model.getConnectedUser();
            // localStorage.setItem('connectedUser', connectedUser.id)
            console.log(localStorage.getItem('token'));
            console.log(localStorage.getItem('connectedUser'));
            navigate("main");

        } catch (error) {
            let value = await error;
            if (value === "L'adresse mail saisie n'est pas reconnue") {
                const erreurMail = document.getElementById('erreur_email')
                erreurMail.innerHTML = value;
                erreurMail.classList.remove('hidden');
                erreurMail.classList.add('err');
            }
            if (value === "Le mot de passe saisi est incorrect") {
                const erreurPassword = document.getElementById('erreur_password');
                erreurPassword.innerHTML = value;
                erreurPassword.classList.remove('hidden');
                erreurPassword.style.color = 'red';
                erreurPassword.style.fontSize = '12px';
            }

            console.log(value)
        }
    }
}
export default () => window.authController = new AuthController()