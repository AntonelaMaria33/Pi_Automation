class RegisterPage {
    visit() {
        cy.visit('https://pushing-it.vercel.app/');
    }

    fillUsername(username) {
        cy.get('input[name="user"]').type(username);
    }

    fillPassword(password) {
        cy.get('input[name="pass"]').type(password);
    }

    selectGender(gender) {
        switch (gender) {
            case 'Male':
                cy.get('[data-cy=Male]').click();
        
                break;
            case 'Female':
                cy.get('[data-cy=Female]').click();
                
                break;
            case 'Other':
                cy.get('[data-cy=Other]').click();
                
                break;
            default:
                throw new Error('Invalid gender option');
        }
    }

    selectDay(day) {
        cy.get('select[data-cy="day"]').select(day.toString()).should('have.value', day.toString());
    }

    selectMonth(month) {
        cy.get('select[data-cy="month"]').select(month.toString()).should('have.value', month.toString());
    }

    selectYear(year) {
        cy.get('select[data-cy="year"]').select(year.toString()).should('have.value', year.toString());
    }

    submitForm() {
        cy.get('button[type="submit"]').click();
    }
}

export default new RegisterPage();

