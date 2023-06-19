export default class MatchModel {
    constructor(){
        this.api = new TinderAPI();
    }
    async getAvailableChats(){
        console.log('il rentre dans le match model' )
        return await this.api.getAvailableChats()
    }
} 