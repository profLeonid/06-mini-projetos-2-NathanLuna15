const criarListaNumero = function(quantidade){
    let ListaNumero = []

    for(let i = 1; i<=quantidade; i++){
        ListaNumero.push(i)
    }

    return ListaNumero
}

const listaPar = function(quantidade){
    let par = []


    for(let pa=2; pa <= quantidade*2; pa +=2){
        par.push(pa)
    }
    return par
}

const listaImpar = function(quantidade){
    let impar = []


    for(let imp=1; imp <= quantidade*2; imp +=2){
        impar.push(imp)
    }
    return impar
}

const listaMultiplo = function(quantidade){
    let multplo = []

    for(let mult = 5; mult <= quantidade*5; mult+= 5){
        multplo.push(mult)
    }

    return multplo
}

const listaPotencia = function(quantidade){
    let potencia = []

    for(let pote = 0; pote < quantidade; pote++){
        potencia.push(2**pote)
    }

    return potencia
} 

const tabela =function(num, par, impar, multi5, pot2){
    const tbody = document.getElementById("tbody")
    const tr = document.createElement("tr")
    
    const tdNum = document.createElement("td")
    tdNum.textContent = num

    const tdPar = document.createElement("td")
    tdPar.textContent = par

    const tdImpar = document.createElement("td")
    tdImpar.textContent = impar

    const tdMultis = document.createElement("td")
    tdMultis.textContent = multi5

    const tdPot = document.createElement("td")
    tdPot.textContent = pot2
    
    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMultis, tdPot)
    tbody.appendChild(tr)
}

const handclick = function(){
    const quantidade = Number(document.getElementById("quantidade").value)

    const numero = criarListaNumero(quantidade)
    const par = listaPar(quantidade)
    const impar = listaImpar(quantidade)
    const multiplo = listaMultiplo(quantidade)
    const potencia = listaPotencia(quantidade)

    document.getElementById("tbody").replaceChildren()

    for(let i = 0; i< quantidade; i++){
        tabela(numero[i], par[i], impar[i], multiplo[i], potencia[i])
    }
}
