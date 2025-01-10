import { CPTestData } from "../fixtures/CartPageTestData";
import { MPTestData } from "../fixtures/MainPageTestData";
import CartPage from "../pages/CartPage";
import MainPage from "../pages/MainPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

describe("End-to-End eCommerce Test", function () {
  before(function () {
    this.mainPage = new MainPage();
    this.cartPage = new CartPage();
    this.productDetailsPage = new ProductDetailsPage();
  });

  it("Verify Submit Order", function () {
    this.mainPage.goTo(MPTestData.url);

    this.mainPage.clickOnProduct(MPTestData.product1); 
    this.productDetailsPage.addProductToCart(); 
    cy.on("window:confirm", () => true); 
    this.productDetailsPage.clickHomeButton();

    this.mainPage.clickOnProduct(MPTestData.product2);
    this.productDetailsPage.addProductToCart(); 
    cy.on("window:confirm", () => true); 
    this.productDetailsPage.clickHomeButton(); 
    

    this.mainPage.clickOnCart();


    this.cartPage.placeOrder(
      CPTestData.name,
      CPTestData.country,
      CPTestData.city,
      CPTestData.creditCardNumber,
      CPTestData.month,
      CPTestData.year
    );

    cy.contains("Thank you for your purchase!").should("be.visible");
  });
});