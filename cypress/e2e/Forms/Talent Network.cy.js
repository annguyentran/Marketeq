/// <reference types="Cypress" />

describe("Filling out the form", () => {
  beforeEach(() => {
   
    cy.visit('https://dev.marketeqdigital.com/careers')
    cy.wait(5000)
    cy.contains('Accept & Close', { timeout: 10000 }).click();


    // Filling out the email form
    cy.get('input[placeholder="Your email "]').scrollIntoView().type('testing@gmail.com')
    cy.get('body > div:nth-child(1) > div:nth-child(15) > div:nth-child(2) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > button:nth-child(2)').click()

  });
    it.only('Should be able to successful submit the form', () => {

      // Filling out the actual form

        //First name
      cy.get('#first-name').scrollIntoView().type('testing')

        //Last name
      cy.get('#last-name').scrollIntoView().type('testing')

      // Location
      cy.get('#select\\:\\:r46\\:\\:trigger').should('have.attr', 'data-state', 'closed').click().should('have.attr', 'data-state', 'open')
      cy.get('#select\\:\\:r46\\:\\:content > .relative > .h-full > [style="min-width: 100%; display: table;"] > :nth-child(2)').click()

      //Phone number
      cy.get('#phone-number').type('11111111111').should('have.value', "+1 (111) 111-1111")
     
      //Area of interest
      cy.get("div[id='select::r48::control']").should('have.attr', 'data-state', 'closed').click().should('have.attr', 'data-state', 'open')
      //cy.get("body > div:nth-child(83) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click()

      //Communication 
      cy.get("div[id='select::r49::control']").should('have.attr', 'data-state', 'closed').click().should('have.attr', 'data-state', 'open')
      //cy.get("body > div:nth-child(84) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click()

      //Job Title
      cy.get("#desired-job-title").should('have.attr', 'placeholder', 'Enter job title').click().type('testing')

      //Years of experience
      cy.get("div[id='select::r4a::control']").should('have.attr', 'data-state', 'closed').click().should('have.attr', 'data-state', 'open')
      cy.get('#select\\:\\:r4a\\:\\:content > .relative > .h-full > [style="min-width: 100%; display: table;"] > :nth-child(1)');


      //Skills
      cy.get("#skills").click().type('testing').should('have.value', 'testing');

      //Uploading Resume
      cy.writeFile('cypress/fixtures/test.pdf', 'This is a test PDF file');
      cy.get("input[type='file']").invoke('attr', 'style', 'display', 'visible').selectFile('cypress/fixtures/test.pdf');

      //Checkbox
      cy.get("button[value='on']").click().should('have.attr', 'data-state', 'checked');
      cy.get(".text-white.w-7.h-7",  { timeout: 15000 }).should('be.visible')

      //Submit button
      cy.get("body > div:nth-child(1) > div:nth-child(15) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)").click()
    

      
    })

    it('should display the error messages when invalid inputs are in the fields', () =>{

    
      // Submit the form
      cy.get("body > div:nth-child(1) > div:nth-child(15) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)").click()

      // Check the first name error message
      cy.get(".gap-5 > :nth-child(1) > .text-error-500").should("have.text", "Must contain at least 1 character(s)")

      // Check the last name error message
      cy.get(".gap-5 > :nth-child(2) > .text-error-500").should("have.text", "Must contain at least 1 character(s)")

      // Check the location error message
     cy.get(".gap-5 > :nth-child(3) > .text-error-500").should("have.text", "Must select 1 option(s)")

     // Check the phone error message error
      cy.get(":nth-child(4) > .text-error-500").should("have.text", "Must be a valid phone number")

      // Checking the area of interest error
      cy.get(":nth-child(5) > .text-error-500").should("have.text", "Must select 1 interest(s)")

      // Checking Communcation Preference error
      cy.get(":nth-child(6) > .text-error-500").should("have.text", "Must select 1 communication preference(s)")

      // Checking desired job title error
      cy.get(":nth-child(7) > .text-error-500").should("have.text", "Must contain at least 1 character(s)")

      // Checking if the years of experience area error
      cy.get(":nth-child(8) > .text-error-500").should("have.text", "Must select 1 option(s)")

      // Checking the skills error
      cy.get(":nth-child(9) > .text-error-500").should("have.text", "Must contain at least 1 character(s)")

      // Checking the resume part error
      cy.get(".mt-3 > .text-error-500").should("have.text", "Must select 1 file(s)")

      // Checking the checkbox error
      cy.get('.space-y-5 > .space-y-1\\.5 > .text-error-500').should("have.text", "You need to check the above checkbox to continue")

    })
  })