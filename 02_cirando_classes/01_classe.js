//criando uma classe
class  xMen {
    nome;
    codinome;
    nacionalidade;
    afiliacaoPrincipal;

    constructor(nome,codinome,nacionalidade,afiliacaoPrincipal) {
        this.nome = nome;
        this.codinome = codinome;
        this.nacionalidade = nacionalidade;
        this.afiliacaoPrincipal = afiliacaoPrincipal;
    }

    fichaDoPersonagem() {
        console.log(`Nome: ${this.nome}\nCodinome: ${this.codinome}\nNacionalidade: ${this.nacionalidade}\nEquipe principal: ${this.afiliacaoPrincipal}`)
    }
}

const wolverine = new xMen('Logan', 'Wolverine', 'Canadense', 'X-men')

wolverine.fichaDoPersonagem()