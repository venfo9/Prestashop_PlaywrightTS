exports.Cart = class Cart {


    constructor(page) {
        this.page = page
        this.txtUnitPriceAmount = '#product_price_1_1_0 span'
    }

    async Cart() {
        this.UnitPriceAmount = await this.page.locator(this.txtUnitPriceAmount);
        this.amount = await this.UnitPriceAmount.textContent();
        return this.amount; // Return the amount value
    }

    // async checkProductInCart(productName) {
    //     const productsInCart = await this.page.$$(this.noOfProducts)
    //     for (const product of productsInCart) {
    //         console.log(await product.textContent())
    //         if (productName === await product.textContent()) {
    //             return true;
    //             break;
    //         }
    //     }
    // }
}