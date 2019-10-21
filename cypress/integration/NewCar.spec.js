describe ('First Test', () => {
    it ('is working', () => {
      expect (true).to.equal (true);
    });
  });

  describe ('Second Test', () => {
    it ('Visit the app', () => {
      cy.visit ('/new-car');
    });
  });

  describe ('Third Test', () => {
    it ('Accepts input', () => {
      const text = 'New Todo';
      cy.visit ('/new-car');
      cy.get('form').within(() => {
        cy.get('input[name="model"]').type("hello").should('have.value', "hello");
        cy.get('input[name="color"]').type("hello").should('have.value', "hello");
        cy.get('input[name="year"]').type("1").should('have.value', "1");
        cy.get('input[name="imageURL"]').type("hello").should('have.value', "hello");
      })
      cy.get('button').click();
      cy.url().should('include', '/collection/') 
    });
  });