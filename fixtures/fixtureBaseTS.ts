import { ConsoleMessage, test as base } from '@playwright/test'

export const test = base.extend({
    page:async ({page}, use) => {
        await page.setViewportSize({width: 1920, height: 1080});

        page.on('console',async (msg: ConsoleMessage) => {
            if(msg.type()=== 'error'){
                throw new Error('Error');
            }
        })

        // additional needed logic

        await use(page);

        // this could be your cleanup
        //...
    }
})