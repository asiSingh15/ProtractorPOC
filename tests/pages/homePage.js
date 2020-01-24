import { browser,element,by,protractor,$$,$} from 'protractor';

describe('Non angular application',function(){
	
    it('open google', async () => {
		browser.waitForAngularEnabled(false)
		browser.manage().timeouts().implicitlyWait(30000)
        browser.get('http://asthas:Jan@2020@tsmqmodqaapp10.tsm.local/QNXTALL/QNXT/Master/QMain.aspx?__machname=naeau5t4wxjhcb3ty35hemrw');
    });
});