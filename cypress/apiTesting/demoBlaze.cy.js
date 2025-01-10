const { signup, isLogedin } = require('../../support/apiHelpers/signUpHelpers');

describe('API Testing for Sign Up and Login', () => {
    
    let validUser;

    it('Sign up a new user successfully', () => {
        signup().then(({ username, password }) => {
            validUser = { username, password };
            cy.log('user created:', validUser);
        });
    });

    it('Sign up with an existing user', () => {
        signup().then(({ username, password }) => {
            signup(username, password).catch((error) => {
                
                expect(error.responseBody.error).to.eq("User already exists");

                cy.log('Existing user error.');
            });
        });
    });

    it('Login with a correct username and password', () => {
        isLogedin(validUser.username, validUser.password).then((token) => {
            expect(token).to.exist;
            cy.log('Logged in', token);
        });
    });

    it('Login with an incorrect username and password', () => {

        isLogedin("invalidUser", "invalidPassword").catch((error) => {
            // Validate the error response
            expect(error.status).to.eq(401);
            expect(error.responseBody.error).to.eq("username does not exists");
            cy.log('incorrect login.');
        });
    });
});
