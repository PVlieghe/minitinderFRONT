import BaseController from "./basecontroller.js";
import MatchModel from "../model/matchModel.js";


class MatchController extends BaseController {
    constructor() {
        super()
        this.model = new MatchModel()
    }

    async printMatch() {
      const chatListElement = document.querySelector('#chat-list');
    
      try {
        const chats = await this.model.getAvailableChats();
    
        chats.forEach((chat) => {
          const li = document.createElement('li');
          li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    
          // Créer un élément pour afficher le nom d'utilisateur
          const usernameElement = document.createElement('span');
          usernameElement.innerText = chat.username;
          li.appendChild(usernameElement);
    
          // Créer un élément pour afficher l'ID du chat
          const chatIdElement = document.createElement('span');
          chatIdElement.innerText = "     " + chat.chatId;
          li.appendChild(chatIdElement);
    
          // Créer un bouton pour accéder au chat
          const button = document.createElement('button');
          button.classList.add('btn', 'btn-primary');
          button.innerText = 'Accéder au chat';
    
          button.addEventListener('click', () => {
            // Faites quelque chose lorsque le bouton est cliqué, comme rediriger vers une page dédiée au chat
            // Vous pouvez utiliser window.location.href = 'URL' pour cela
          });
    
          li.appendChild(button);
          chatListElement.appendChild(li);
        });
      } catch (error) {
        console.error('Front: Une erreur s\'est produite lors de la récupération des chats :', error);
      }
    }
  }    





export default () => {
    window.matchController = new MatchController();
    window.matchController.printMatch();
    
  };