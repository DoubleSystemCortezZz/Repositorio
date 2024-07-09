describe('Practica', () => {

it('C165_Eliminar varias opciones ya existentes', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('.new-todo').click().type("Tarea 1{enter}")
    cy.get('.new-todo').click().type("Tarea 2{enter}")
    cy.get('.new-todo').click().type("Tarea 3{enter}")

    cy.contains ('Tarea 1').parent().find('.destroy').invoke('show').click()
    cy.contains ('Tarea 2').parent().find('.destroy').invoke('show').click()
    cy.contains ('Tarea 3').parent().find('.destroy').invoke('show').click()

    })
    
it('C169_Editar una tarea y ponerle el mismo nombre que una tarea ya existente', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('.new-todo').click().type("Tarea 1{enter}")
    cy.get('.new-todo').click().type("Tarea 2{enter}")
    cy.get('.new-todo').click().type("Tarea 3{enter}")
    
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"] ').dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]').type('{selectall}{backspace}Tarea 1{enter}')
    
    })
it.only('C167_Al filtrar las tareas activas cuando todas las tareas están completadas no muestra ninguna tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('.new-todo').click().type("Tarea 1{enter}")
    cy.get('.new-todo').click().type("Tarea 2{enter}")
    cy.get('.new-todo').click().type("Tarea 3{enter}")
    cy.get('.new-todo').click().type("Tarea 4{enter}")
    cy.get('.new-todo').click().type("Tarea 5{enter}")

    cy.get('[data-testid="toggle-all"]').click();
    cy.get(':nth-child(2) > a').click();

        
        
    })

})