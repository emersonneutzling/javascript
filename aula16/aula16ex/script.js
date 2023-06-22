let nun = document.querySelector('input#fnun')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if((Number(n)) >= 1 && (Number(n)) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}


function adicionar() {
    if(isNumero(nun.value) && !inLista(nun.value, valores)) {
        valores.push(Number(nun.value))
        let item = document.createElement('option')
        item.text = `valor ${nun.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    nun.value = ''
    nun.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    }
}