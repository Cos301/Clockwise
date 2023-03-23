describe('chats', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chatsearchcomponent--primary'));
  it('should render the component', () => {
    cy.get('mp-chat-search').should('exist');
  });
});