//LLamado a multiples URL/API
//1) Llamar a un usuario
//2) LLamar a sus Posts

const baseUrl = "https://jsonplaceholder.typicode.com";

const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
}

const getUser = async (id) => {
    // const url = `https://jsonplaceholder.typicode.com/users/1`;
    const url = `${baseUrl}/users/${id}`;
    return request(url);
}

const getPosts = async (id) => {
    // const url = `https://jsonplaceholder.typicode.com/posts?userId=1`;
    const url = `${baseUrl}/posts?userId=${id}`;
    return request(url);
}

const userID = 1;
Promise.all([getUser(userID),getPosts(userID)])
    .then( resp => {
        console.log('resp', resp);
    }
    );