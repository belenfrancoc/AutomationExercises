import { testData } from "../../fixtures/ApiTestData";

export const signup = (username, password) => {
    const encodedUsername = `belen-${Date.now()}`
    const encodedPassword = Date.now().toString();

    return cy.request({
        method: 'POST',
        url: `${testData.testURL}/signup`,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            username: encodedUsername,
            password: encodedPassword,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Generated Username:', encodedUsername);
        cy.log('Generated Username:', encodedPassword);

        return { username: encodedUsername, password: encodedPassword };;
    });
};


export const isLogedin = (username, password) => {
    return cy.request({
        method: 'POST',
        url: `${testData.testURL}/login`,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            username: username,
            password: password,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
        cy.log('Login Response:', response.body);

        return response.body.token || response.body;
    });
};