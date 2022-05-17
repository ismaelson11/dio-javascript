//esqueleto do fetch()
fetch(url, opcoes)
    .then(response => response.json())
    .then(json => console.log(json))
//retorna uma Promise, o que significa que precisa utilizar o await quando for utilizar o fetch

//pode fazer operações no banco (POST, GET, PUT, DELETE, etc)
fetch('http://endereco-api.com/', {
    method: "GET",
    cache: "no-cache",
})
    .then(response => response.json())
    .then(json => console.log(json)) //retorna uma promise
//***************************************
fetch('https://endereco-api.com/', {
    method: "POST",
    cache:"no-cache", 
    body: JSON.stringify(data)
})
    .then(response =>response.json())
    .then(json => console.log(json)) //retorna uma promise