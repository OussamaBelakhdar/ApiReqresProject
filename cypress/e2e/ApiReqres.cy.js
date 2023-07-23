/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

describe("API Tests", () => {
  it("GET - Liste des utilisateurs", () => {
    cy.request("GET", "https://reqres.in/api/users?page=1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length.above(0);
      expect(response.body.data[0]).to.have.property('id');
      expect(response.body.data[0]).to.have.property('email');
    });
  });

  it("GET - utilisateur Unique", () => {
    cy.request("GET", "https://reqres.in/api/users/2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id', 2);
    });
  });

  it("GET - Utilisateur non Trouvé ", () => {
    cy.request({
      method: 'GET',
      url:  'https://reqres.in/api/users/23',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("GET - Liste les ressources", () => {
    cy.request("GET", "https://reqres.in/api/unknown").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length.above(0);
      expect(response.body.data[0]).to.have.property('id');
      expect(response.body.data[0]).to.have.property('name');
    });
  });

  it("GET - Liste une seule ressource unique", () => {
    cy.request("GET", "https://reqres.in/api/unknown/2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id', 2);
    });
  });

  it("GET - Ressource non Trouvé ", () => {
    cy.request({
      method: 'GET',
      url: "https://reqres.in/api/unknown/23",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("POST - Créer un utilisateur", () => {
    const userData = {
      name: faker.person.fullName(),
      job: faker.person.jobTitle(),
    };

    cy.request("POST", "https://reqres.in/api/users", userData).then(
      (response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(userData.name);
        expect(response.body.job).to.eq(userData.job);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
      }
    );
  });

  it("PUT - Mettre à jour un utilisateur", () => {
    const userId = 2;
    const updatedUserData = {
      name: faker.person.fullName(),
      job: faker.person.jobTitle(),
    };

    cy.request("PUT", `https://reqres.in/api/users/${userId}`, updatedUserData).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(updatedUserData.name);
        expect(response.body.job).to.eq(updatedUserData.job);
        expect(response.body).to.have.property('updatedAt');
      }
    );
  });

  it("PATCH - Mettre à jour un utilisateur", () => {
    const userId = 2;
    const updatedUserData = {
      name: faker.person.fullName(),
      job: faker.person.jobTitle(),
    };

    cy.request("PATCH", `https://reqres.in/api/users/${userId}`, updatedUserData).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(updatedUserData.name);
        expect(response.body.job).to.eq(updatedUserData.job);
        expect(response.body).to.have.property('updatedAt');
      }
    );
  });

  it("DELETE - Supprimer un utilisateur", () => {
    const userId = 2;

    cy.request("DELETE", `https://reqres.in/api/users/${userId}`).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it("POST - Enregistrement Réussi", () => {
    const userData = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };

    cy.request("POST", "https://reqres.in/api/register", userData).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token');
      }
    );
  });

  it("POST - Enregistrement non Réussi", () => {
    const userData = {
      email: "sydney@fife",
    };

    cy.request({
      method: 'POST',
      url: "https://reqres.in/api/register",
      body: userData,
      failOnStatusCode: false
    }).then(
      (response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      }
    );
  });

  it("POST - Connection Réussi", () => {
    const userData = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    cy.request("POST", "https://reqres.in/api/login", userData).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      }
    );
  });

  it("POST - Connection non  Réussi", () => {
    const userData = {
      email: "peter@klaven",
    };

    cy.request({
      method: 'POST',
      url: "https://reqres.in/api/login",
      body: userData,
      failOnStatusCode: false
    }).then(
      (response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      }
    );
  });

  it("GET - Réponse Rétardée", () => {
    cy.request("GET", "https://reqres.in/api/users?delay=3").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length.above(0);
      expect(response.body.data[0]).to.have.property('id');
      expect(response.body.data[0]).to.have.property('email');
    });
  });
});
