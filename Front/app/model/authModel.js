export default class AuthModel {
    constructor() {
        // data-oriented service instanciations (ex: API)
        this.api = new TinderAPI();

    }

    async getAuth(email, password){
           return await this.api.getAuth(email, password);

    }

    async getConnectedUser(){
        return await this.api.getConnectedUser();
    }



}