const MainPageLocators = {
    productNameLink: (productName) => {
      return `//a[text()='${productName}']`;
    },
    cartBt: "//a[contains(normalize-space(),'Cart')]",
  };
  
  module.exports = MainPageLocators;