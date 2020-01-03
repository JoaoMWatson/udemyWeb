function tratarErrorELancar(error){
    // throw new Error('... error ... error ...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw{
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        console.log("Foda nega")
        tratarErrorELancar(e)
    } finally {
        console.log('finally')
    }
}

const obj = { nome: 'Roberto'}
imprimirNome(obj)