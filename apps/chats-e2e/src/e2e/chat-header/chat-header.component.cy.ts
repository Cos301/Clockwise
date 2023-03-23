describe('chats', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chatheadercomponent--primary&args=chatName;profilePhotoUrl;'));
  it('should render the component', () => {
    cy.get('mp-chat-header').should('exist');
  });
});