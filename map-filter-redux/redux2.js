const lista = [
    {
        name: 'sabão em pó',
        preco: 30,
    },
    {
        name: 'leite',
        preco: 6,
    },
    {
        name: 'manteiga',
        preco: 5,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));