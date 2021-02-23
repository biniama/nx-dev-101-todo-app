import { getTodos, getAddTodoButton } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Todos', () => {
    getTodos().should((t) => expect(t.length).equal(2))
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equals(3))
  });
});
