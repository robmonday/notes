describe('Note app', function() {

  beforeEach(function() {
    cy.request('POST', 'http://localhost:8080/api/testing/reset')
    const user = {
      name: 'Rob Monday',
      username: 'robmonday',
      password: 'abc123'
    }
    cy.request('POST', 'http://localhost:8080/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2022')
  })

  it('user can login', function() {
    cy.contains('log in').click()
    cy.get('#username').type('robmonday')
    cy.get('#password').type('abc123')
    cy.get('#login-button').click()
    cy.contains('Rob Monday logged-in')
  })

  it('login fails with wrong password', function() {
    cy.contains('log in').click()
    cy.get('#username').type('robmonday')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()

    cy.get('.error').should('contain','Wrong credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Rob Monday logged in')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'robmonday', password: 'abc123' })
    })
    
    it('a new note can be created', function() {
      cy.contains('add new note').click()
      cy.get('input').type('a new note created by cypress')
      cy.contains('save').click()
      cy.contains('a new note created by cypress')
    })

    describe('and several notes exist', function() {
      beforeEach(function() {
        cy.createNote({content: 'first note', important: false})
        cy.createNote({content: 'second note', important: false})
        cy.createNote({content: 'third note', important: false})
      })

      it('one of those can be made important', function () {
        cy.contains('second note').parent().find('button').as('theButton')  // creating an alias
        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make not important')
      })

    })

  })

})