describe("Test Ballots", () => {
  before(() => {
    cy.task("prismaLoader", "testdb.yml");
  });

  it("lets student vote on a ballot (only once)", () => {
    cy.login("student@teachen.ch", "teachen");
    cy.visit("/ballots/");
    cy.contains("Testinitiative").click();
    cy.contains("Zur Abstimmung").click();
    cy.contains("Ja, ich stimme zu").click();
    cy.contains("Du hast abgestimmt");
  });

  it("student may not vote on closed ballot", () => {
    cy.login("student@teachen.ch", "teachen");
    cy.visit("/ballots/");
    cy.contains("Abgelaufene Initiative").click();
    cy.contains("Zur Abstimmung").click();
    cy.contains("Abstimmung ist beendet");
    cy.go("back");

    cy.contains("Zukunftsinitiative").click();
    cy.contains("Zur Abstimmung").click();
    cy.contains("Abstimmung noch nicht gestartet");
  });
});
