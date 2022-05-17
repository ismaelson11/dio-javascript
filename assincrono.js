/*assíncrono: que não ocorre ou não se efetiva ao mesmo tempo*/
/*o javascript roda de maneira síncrona*/

/*promise: objeto de processamento assíncrono, inicialmente, seu valoré desconhecido.
Ela pode, então, ser resolvida ou rejeitada*/
/*possui tres estados: pending, fufilled ou rejected*/

//estrutura

/*async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        Window.setTimeout(() => {
           resolve('resolvida'); 
        }, 2000);
    })
    
    const resolved = await myPromise
        .then((result)=> result + ' passando pelo then')
        .then((result)=> result + ' e agora acabou!')
        .then((err)=> console.log(err.message));
        //após 2 segundos, retornará o valor  "Resolvida passando pelo then e agora acabou"
    return resolved
}*/

//utilizando try catch
async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        Window.setTimeout(() => {
           resolve('resolvida'); 
        }, 2000);
    })
    
    let result;
    
    try{
        result = await myPromise
        .then((result)=> result + ' passando pelo then')
        .then((result)=> result + ' e agora acabou!')
    } catch(err){
        result = err.message
    }
   return result
}