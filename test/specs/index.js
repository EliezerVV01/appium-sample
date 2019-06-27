const assert = require('assert');

describe('test 1', ()=>{
    it('shouldnt enter', ()=>{
        const username = browser.$('id=username');
        const password = browser.$('id=password');
        const button = browser.$('id=login');
        username.setValue('algo');
        password.setValue('algo');
        button.click();
       // const value = algo.getText();
       // assert.strictEqual(value, 'algo', 'Eso e mentira caballero xdd');
        browser.debug();
    })
});