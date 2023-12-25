const config = require('../playwright.config');
import { test } from '../fixtures/fixturePagesTS';

import {expect} from '@playwright/test'
import {Login} from '../pages/LoginTS'
import {ChooseGoods} from '../pages/ChooseGoodsTS'
import {Cart} from '../pages/CartTS'


test('Compare good amount on good list page and in the cart page', async ({cart,chooseGoods,login}) => {
    //Login
    await login.gotoLogin()
    await login.enterCredentials(config.email, config.password)

    //ChooseGoods
    await chooseGoods.enterSearchWord("t-shirt")
    await chooseGoods.switchToGrid()
    let amountFromChooseGoods = await chooseGoods.addToCart();
    await chooseGoods.gotoCart()

    //Cart
    let amountFromCart = await cart.Cart();


    // Expectation
    amountFromChooseGoods = amountFromChooseGoods.trim();
    amountFromCart = amountFromCart.trim();
    console.log('amountFromChooseGoods:', amountFromChooseGoods);
    console.log('amountFromCart:', amountFromCart);

    expect(amountFromChooseGoods).toBe(amountFromCart);
});