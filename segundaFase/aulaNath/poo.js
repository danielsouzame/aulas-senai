class Cafe {
    #preco
    #nome

    constructor(nome, preco) {
        this.#nome = nome
        this.#preco = preco
    }

    get nome() {
        return this.#nome
    }

    get preco() {
        return this.#preco
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    set preco(novoPreco) {
        if (novoPreco > 0) {
            this.#preco = novoPreco
        } else { 
            console.log('Preço inválido.')
        }
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }
}

const cafezes = new Cafe('melita', 30.00)

// console.log(cafezes.preco)
// cafezes.preco = 0
// console.log("O preço do café é:" + cafezes.preco)

// -------------------------------------------------------------------
class Computador{}

const meuComputador = new Computador()

// -------------------------------------------------------------------
class Usuario {
    #login
    #senha
    
    constructor(login, senha) {
        this.#login = login
        this.#senha = senha
    }
    
    get login() {
        return this.#login
    }

    get senha() {
        return this.#senha
    }

    set login(novoLogin) {
        this.#login = novoLogin
    }

    set senha(novaSenha) {
        this.#senha = novaSenha
    }

    logar() {return console.log('Acesso permitido')}
    
    get quemSouEu() {return console.log(`O login do usuário é: ${this.#login}`)}
    
}

const usuario1 = new Usuario('nath', '1234')

// console.log(usuario1.login)
// usuario1.login = 'nathalia'
// console.log(usuario1.login)
// usuario1.logar()
// usuario1.quemSouEu

// -------------------------------------------------------------------
class Cofre{
    #codigo

    constructor(codigo) {
        this.#codigo = codigo
    }
    
    set codigo(novoCodigo) {
        if (novoCodigo.length > 4) {
            this.#codigo = novoCodigo
        } else {
            console.log('Código inválido. O código deve conter mais de 4 caracteres.')
        }
    }

    get codigo() {
        return console.log(`O código do cofre é: ${ '*'.repeat(this.#codigo.length) }`)
    }
}

const cofre1 = new Cofre('1234')
console.log(cofre1.codigo)
cofre1.codigo = '123'

// -------------------------------------------------------------------

class Veiculo {
    #marca
    constructor(marca) {
        this.#marca = marca
    }
}
