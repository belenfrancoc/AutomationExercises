import ProductDetailsPageLocators from "../locators/ProductDetailsPageLocators";

class ProductDetailsPage {
  validateAddToCartButton() {
    cy.xpath(ProductDetailsPageLocators.addToCartBt).should("be.visible");
  }

  addProductToCart() {
    this.validateAddToCartButton();
    cy.xpath(ProductDetailsPageLocators.addToCartBt).click();
  }

  clickHomeButton() {
    cy.xpath(ProductDetailsPageLocators.homeBt).click();
  }
}

export default ProductDetailsPage;