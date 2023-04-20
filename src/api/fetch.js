const BASE_URL = 'https://strangers-things.herokuapp.com/api/2309-FTB-PT-WEB-PT'

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        return(result)


    } catch (err) {
        console.error(err);
    }
}

