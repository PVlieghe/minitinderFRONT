export default class UserModel {
    constructor() {
        // data-oriented service instanciations (ex: API)
        this.api = new TinderAPI();

    }
    
    async addUser(email, username, password, 
                genre, orientation, age, description, photoProfilUrl){
                    console.log("il rentre dans user model")
        return await this.api.addUser(email, username, password, 
                genre, orientation, age, description, photoProfilUrl);

    }


}