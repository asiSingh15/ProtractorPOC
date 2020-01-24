//import { browser, element, By, by } from "protractor";

//import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('AddProvider', () => {
    var originalTimeout;
	beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

	it('Launch QNXT and Add A New Provider', async () => {
        browser.waitForAngularEnabled(false)
		browser.manage().timeouts().implicitlyWait(30000)
		await browser.get('http://asthas:Jan@2020@tsmqmodqaapp10.tsm.local/QNXTALL/QNXT/Master/QMain.aspx?__machname=naeau5t4wxjhcb3ty35hemrw');
        //await browser.get('http://asthas:Jan@2020@//tsmqmodqaapp10.tsm.local/QNXTALL/QNXT/Master/Index.aspx');
        await element(by.id("ProviderIndex")).click();
		const handles_3 = await browser.getAllWindowHandles();
		await browser.switchTo().window(handles_3[handles_3.length - 1]);
        await element(by.linkText("Add Provider")).click();
        browser.sleep(3000)
		await browser.switchTo().frame(element(by.id("fraMain")).getWebElement());
		await element(by.id("txtLastName")).sendKeys('Test');
		await element(by.id("txtFirstName")).sendKeys('USER 2');
		await element(by.id("txtMidInitial")).sendKeys('Provider');
        await element(by.id("btNext")).click();
        browser.sleep(5000)

		await element(by.id("txtPadd1")).sendKeys('Dummy');
		await element(by.id("txtPadd2")).sendKeys('Address');
        await element(by.id("btNext")).click();
        browser.sleep(4000)
//Page 3
        element(by.name("dgSelectTitle:_ctl2:rdoSelect")).click();
        browser.sleep(4000)
        await element(by.id("btNext")).click();
        browser.sleep(4000)

//Page 4
        await element(by.name("dgSelectSpecialty:_ctl2:rdoSelect")).click();
        browser.sleep(4000)
        await element(by.id("TxtTermDate")).click();
        browser.executeScript("document.getElementById('TxtTermDate').value='01/30/2020'");
        browser.sleep(4000)
        await element(by.id("btNext")).click();
        browser.sleep(4000)

        await element(by.name("dgSelectTitle:_ctl3:rdoSelect")).click();
        browser.sleep(4000)
        await element(by.id("btNext")).click();
        browser.sleep(4000)
        
        await element(by.id("txtFederalID")).sendKeys('596012277');
        await element(by.id("btSave")).click();
        browser.sleep(4000)
	});

	});