import BaseController from "./basecontroller.js";
import MainModel from "../model/mainModel.js";

class MainController extends BaseController {
  constructor() {
    super();
    this.model = new MainModel();
    this.currentProfileUser;
  }
 
    handleLike(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du bouton
    this.createRelation(true); // Appeler createRelation avec la valeur "true" pour "like"
  }

    handleDislike(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du bouton
    this.createRelation(false); // Appeler createRelation avec la valeur "false" pour "dislike"
  }

async createRelation(choix){
  try {
    
    // Vérifier si un utilisateur est actuellement affiché
      const user2Id = this.currentProfileUser.id;
      const like = choix;
      await this.model.addRelation(user2Id, like);
      console.log("main.js: relation créée");
       this.getRandomUser() ;

    
  } catch (error) {
    console.error('Une erreur s\'est produite:', error);
  }
}


async getRandomUser() {
  try {
    await this.model.getFilteredUsers()
      .then(users => {
        console.log(users);
        if (users.length > 0) {
          const randomUser = users[Math.floor(Math.random() * users.length)];
          this.updateProfile(randomUser);
          this.currentProfileUser = randomUser;
        } else {
          console.log('Aucun utilisateur trouvé');
        }
      })
      .catch(error => {
        console.error('Une erreur s\'est produite:', error);
      });
  } catch (error) {
    console.error('Une erreur s\'est produite:', error);
  }
}



updateProfile(user) {
  // Mettre à jour les champs avec les données de l'utilisateur
  document.querySelector('.username').textContent = user.username + ', ' + user.age + " ans";
  document.querySelector('.profile-photo').textContent = user.photoProfilUrl;
  document.querySelector('.description').textContent = user.global_desc;
}
}

export default () => {
  window.mainController = new MainController();
  window.mainController.getRandomUser();
  
};


