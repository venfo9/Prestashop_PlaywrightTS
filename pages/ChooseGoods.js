// ChooseGoods.js

exports.ChooseGoods = class ChooseGoods {
    constructor(page) {
        this.page = page
        this.searchField = "//*[@id='search_query_top']"
        this.btnswitchToGrid = "//body/div[@id='page']/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/ul[1]/li[3]/a[1]/i[1]"
        this.txtamountOfGood = '//*[@id="center_column"]/ul/li[1]/div/div/div[3]/div/div[1]/span'
        this.btnAddToCart = '//span[contains(text(),\'Add to cart\')]'
        this.btnProceedToCheckout = '//a[contains(@title, \'Proceed\')]'
    }

    async enterSearchWord(searchWord) {
        await this.page.fill(this.searchField, searchWord)
        await this.page.keyboard.press('Enter')
    }
    async switchToGrid() {
        await this.page.click(this.btnswitchToGrid)
    }
    async addToCart() {
        const amountElement = await this.page.locator(this.txtamountOfGood);
        this.amount = await amountElement.textContent();
        await this.page.click(this.btnAddToCart)
        return this.amount; // Return the amount value
    }
    async gotoCart() {
        await this.page.click(this.btnProceedToCheckout)
    }
};




    // async addProductToCart(productName) {
    //     // Wait for the product list to become visible
    //
    //
    //     // Continue with the rest of your logic
    //     const productList = await this.page.$$(this.productList);
    //     for (const product of productList) {
    //         if (productName === await product.textContent()) {
    //
    //
    //             // Perform the click
    //             await product.click();
    //             break;
    //         }
    //     }
    //
    //     await this.page.on('dialog', async dialog => {
    //         if (dialog.message().includes('added')) {
    //             await dialog.accept();
    //         }
    //     });
    //
    //     await this.page.click(this.addToCartbtn);
    // }


