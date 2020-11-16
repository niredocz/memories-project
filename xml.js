const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');

// HTTP Request Syntax
const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('method', 'url');
        xhr.responseType = 'json';
    
        xhr.onload = () => {
            resolve(xhr.response);
        };
        
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

// https://reqres.in/api/users/
const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
        console.log(responseData);
    });
}

// https://reqres.in/api/register
const postData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    }).then(responseData => {
        console.log(responseData)
    })
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);