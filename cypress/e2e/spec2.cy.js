
describe('username&password Test',()=>{
    it('open home page',()=>{
     cy.visit  ('https://www.flipkart.com') 
     cy.get('._1_3w1N').click()
    
      cy.get(':nth-child(1) > ._2IX_2-').type('surywanshi.surbhi09@gmail.com')
     cy.get(':nth-child(1) > ._2IX_2-').type('91')
     cy.get(':nth-child(1) > ._2IX_2-').type('8669079485')
     cy.get(':nth-child(1) > ._2IX_2-').type('918669079485')
    cy.get(':nth-child(1) > ._2IX_2-').type('surbhi.com')
     cy.get(':nth-child(1) > ._2IX_2-').type('surbhi123@j')
     
     cy.get(':nth-child(1) > ._2IX_2-').type('23214')
  
  
 cy.get(':nth-child(2) > ._2IX_2-').focus().type('sur123@')
  cy.get(':nth-child(2) > ._2IX_2-').focus().type('123@Surj')
  cy.get(':nth-child(2) > ._2IX_2-').type('Surbhijaiswal')
  cy.get(':nth-child(2) > ._2IX_2-').focus()
  cy.get(':nth-child(2) > ._2IX_2-').type('Surbhijaiswal')
  cy.get('._1D1L_j > ._2KpZ6l').click()
                                                                                                                                                            
cy.get('._1D1L_j > ._2KpZ6l').click()
cy.get('._2QKxJ- > span').click()
cy.get('._2IX_2-').type('8669079485')
cy.get('._3AWRsL').click()



    })
})