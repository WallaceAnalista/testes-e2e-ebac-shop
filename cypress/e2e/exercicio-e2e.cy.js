/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //acessando a loja ebac
        cy.login_ebac()

        //Escolhendo Produto, Add ao carrinho, Preenchendo opções de checkout e validando a compra.
        cy.visit('produtos')        

        var quantidade = 4

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

        

    });


})
