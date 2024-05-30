//criando um obejto

const carro = {
    modelo: 'uno',
    ano: 1998,
    cor: 'prata',
    fabricante: 'fiat',
    fichaDoCarro: () => {
        console.log(`modelo do carro: ${carro.modelo} | Ano do carro: ${carro.ano} | Cor do carro: ${carro.cor} | Fabricante do carro: ${carro.fabricante}`)
    }
}

carro.fichaDoCarro()