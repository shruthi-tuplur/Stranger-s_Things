const BASE_URL = 'https://strangers-things.herokuapp.com/api/2301-FTB-PT-WEB-PT'

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        return(result)


    } catch (err) {
        console.error(err);
    }
}

export const registerUser = async (username, password) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      });
      const result = await response.json();
      
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const loginUser = async (username, password) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      });
      const result = await response.json();

      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const makePost = async (title, description, price, willDeliver, location, token) => {
        let userCanDeliver;
        if(willDeliver){
            userCanDeliver = false;
        } else {
            userCanDeliver = true;
        }

    try {
        
        const response = await fetch(`${BASE_URL}/posts`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            post: {
              title: title,
              description: description,
              price: price,
              willDeliver: userCanDeliver,
              location: location
            }
          })
        });
        const result = await response.json();
        
        return result
      } catch (err) {
        console.error(err);
      }
  }