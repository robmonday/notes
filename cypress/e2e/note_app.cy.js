describe('Note app', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2022')
  })

  it('login form can be opened', function() {
    cy.contains('log in').click()
    cy.get('#username').type('robmonday')
    cy.get('#password').type('abc123')
    cy.get('#login-button').click()
    cy.contains('Rob Monday logged-in')
  })
})