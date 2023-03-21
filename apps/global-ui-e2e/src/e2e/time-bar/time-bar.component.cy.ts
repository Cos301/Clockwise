describe('global-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=timebarcomponent--primary'));
  it('should render the component', () => {
    cy.get('mp-time-bar').should('exist');
  });
});