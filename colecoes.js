/*coleções*/
function getAdmins(map){
    let admins = []
    for([key, value] of map){
        if(value === 'admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('luis', 'admin');
usuarios.set('chico', 'bilu');
usuarios.set('marcelo', 'admin');
usuarios.set('toquinho', 'modelo') ;    

console.log(getAdmins(usuarios));

const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet];
}

console.log(valoresUnicos(meuArray));