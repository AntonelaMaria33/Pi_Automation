import RegisterPage from '../pages/RegisterPage';

describe('User Registration', () => {
    beforeEach(() => {
        RegisterPage.visit();
    });

    it('Registro Correcto con Datos Mínimos', () => {
        RegisterPage.fillUsername('Peppa');
        RegisterPage.fillPassword('Test@123');
        RegisterPage.selectGender('Male');
        RegisterPage.selectDay('9');
        RegisterPage.selectMonth('2');
        RegisterPage.selectYear('1969');
        RegisterPage.submitForm();

        cy.url({ timeout: 20000 }).should('include', '/home');
    });

    it('Registro Correcto con Año de Nacimiento Reciente', () => {
        RegisterPage.fillUsername('peppaa');
        RegisterPage.fillPassword('Test@123');
        RegisterPage.selectGender('Male');
        RegisterPage.selectDay('7');
        RegisterPage.selectMonth('11');
        RegisterPage.selectYear('2000');
        RegisterPage.submitForm();

        cy.url({ timeout: 20000 }).should('include', '/home');
    });

    it('Registro Correcto con Año de Nacimiento Antiguo', () => {
        RegisterPage.fillUsername('peppaaaaa');
        RegisterPage.fillPassword('Test@123');
        RegisterPage.selectGender('Female');
        RegisterPage.selectDay('7');
        RegisterPage.selectMonth('11');
        RegisterPage.selectYear('1940');
        RegisterPage.submitForm();

        cy.url({ timeout: 20000 }).should('include', '/home');
    });

    it('Validar mensaje de error con campos user Vacío', () => {
        RegisterPage.submitForm();
        cy.get('input[name="user"]').then(($input) => {
            cy.on('window:alert', (str)=>{
                expect(str).to.equal('Please fill out this field.')
            })
        });
    });

    it('Validar mensaje de error con campos Password Vacío', () => {
        
        RegisterPage.fillUsername('Ppepita');
        RegisterPage.submitForm();
         cy.get('input[name="pass"]').then(($input) => {
            cy.on('window:alert', (str)=>{
                expect(str).to.equal('Please fill out this field.')
            })
        });
    });

    it('Validar Contraseña Sin Caracter Especial', () => {
        RegisterPage.fillUsername('Ppepe');
        RegisterPage.fillPassword('123');
        RegisterPage.selectGender('Female');
        RegisterPage.selectDay('8');
        RegisterPage.selectMonth('3');
        RegisterPage.selectYear('1989');
        RegisterPage.submitForm();
        cy.get('[data-cy="errorMessage"]').should('contain', 'Password must have a special character and a number');
    });

    it('Validar Género no Seleccionado', () => {
        RegisterPage.fillUsername('Ppepeee');
        RegisterPage.fillPassword('Test@123');
        RegisterPage.selectDay('7');
        RegisterPage.selectMonth('11');
        RegisterPage.selectYear('1999');
        RegisterPage.submitForm();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out this field.');
        });

        cy.get('[data-cy="Male"]').should('not.be.checked');
        cy.get('[data-cy="Female"]').should('not.be.checked');
        cy.get('[data-cy="Other"]').should('not.be.checked');
    });
});


