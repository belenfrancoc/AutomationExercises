import CartPageLocators from "../locators/CartPageLocators";

class CartPage {
  placeOrder(name, country, city, creditCardNumber, month, year) {
    cy.xpath(CartPageLocators.placeOrderButton).click();
    cy.get(CartPageLocators.nameInput).type(name);
    cy.get(CartPageLocators.countryInput).type(country);
    cy.get(CartPageLocators.cityInput).type(city);
    cy.get(CartPageLocators.cardNumberInput).type(creditCardNumber);
    cy.get(CartPageLocators.monthInput).type(month);
    cy.get(CartPageLocators.yearInput).type(year);
    cy.xpath(CartPageLocators.purchaseBt).click();
  }

  clickHomeButton() {
    cy.xpath(CartPageLocators.homeBt).click();
  }
}

export default CartPage;