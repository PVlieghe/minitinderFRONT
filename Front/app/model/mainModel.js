export default class MainModel {
    constructor(){
        this.api = new TinderAPI();
    }

    async getFilteredUsers(){
        console.log('il rentre dans le main model' )
        return await this.api.getFilteredUsers()
    }

    async addRelation(user2Id, like){
        console.log("il entre dans le model de la relation")
        return await this.api.addRelation(user2Id, like)
    }
} 