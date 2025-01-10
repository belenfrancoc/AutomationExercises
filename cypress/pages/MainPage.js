import MainPageLocators from "../locators/MainPageLocators";

class MainPage {
  goTo(url) {
    cy.visit(url);
  }

  clickOnProduct(productName) {
    const productLinkSelector = MainPageLocators.productNameLink(productName);
    cy.xpath(productLinkSelector).click();
  }

  clickOnCart() {
    const cartButtonSelector = MainPageLocators.cartBt;
    cy.xpath(cartButtonSelector).click();
  }
}

export default MainPage;