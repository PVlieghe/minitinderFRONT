// Various classes not data related and not UI related
// fichier d'appel routes back

class TinderAPI {
    constructor() {
        this.baseurl = "http://localhost:3000",
        this.token = localStorage.getItem('token')
    }

    addUser(email, username, password, gender, orientation, age, global_desc, photoProfilUrl) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${this.baseurl}/users`, {
            method: 'POST',
            body: JSON.stringify({ email, username, password, gender, orientation, age, global_desc, photoProfilUrl }),
            headers: { 'Content-Type': 'application/json' }
          });
          
          if (response.status === 200) {
            resolve(await response.json());
          } else {
            console.log(response.status);
            reject(await response.json());
          }
        } catch (error) {
          reject(error);
        }
      });
    }
    

    addRelation(user2Id, like){
      return new Promise((resolve, reject) => {
        console.log("entre dans l'api")
        console.log("token");
        console.log(this.token);
        console.log("user2 id et like?")
        console.log(user2Id + like)
        fetch(`${this.baseurl}/relation`, {
          method: 'POST',
          body: JSON.stringify({user2Id, like}),
          headers: {'Content-Type': 'application/json',
                      'Authorization': `Bearer ${this.token}`
                    }
        }).then( (response) => {
          if (response.ok) {
            resolve(response.json());
          } else {
            console.log(response.status);
            reject( response.json());
          }
        }).catch((error) => reject(error));
      });
    }
    

    getAuth(email, password) {
        return new Promise((resolve, reject) =>
            fetch(`${this.baseurl}/auth`, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }

            }).then(
                (response) => {
                    if (response.status === 200) {
                        resolve(response.json());
                    }
                    else {
                        console.log(response.status);
                        reject(response.json());
                    }
                }
            )
        )
    }

    
    getFilteredUsers() {
      
      return new Promise((resolve, reject) =>
        fetch(`${this.baseurl}/users/search`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          if (response.status === 200) {
            resolve(response.json());
          } else {
            console.log(response.status);
            response.text().then((text) => {
              console.log('Server response:', text);
              reject(text);
            });
          }
        })
      );
    }


    getAvailableChats(){
      return new Promise((resolve, reject) =>
        fetch(`${this.baseurl}/chat/user`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          if(response.status === 200){
            resolve(response.json());
          } else{
            response.text().then((text) => {
              console.log('server response:', text);
              reject(text)
            })
          }
        }))
    }

    getConnectedUser(){
    return new Promise((resolve, reject) =>
        fetch(`${this.baseurl}/users/conn`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          if(response.status === 200){
            resolve(response.json());
          } else{
            response.text().then((text) => {
              console.log('server response:', text);
              reject(text)
            })
          }
        }))
    }

}
