import { Cart } from '../pages/CartTS';
import { ChooseGoods } from '../pages/ChooseGoodsTS';
import { Login } from '../pages/LoginTS';
import { test as base } from './fixtureBase';

type Pages = {
    cart: Cart;
    chooseGoods: ChooseGoods;
    login: Login;
}

export const test = base.extend<Pages>({
    cart: ({page}, use) => {
        const cart = new Cart(page);
        use(cart);
    },
    chooseGoods: ({page}, use) => {
        const chooseGoods = new ChooseGoods(page);
        use(chooseGoods);
    },
    login: ({page}, use) => {
        const login = new Login(page);
        use(login);
    },

    //add as many page as needed...
})