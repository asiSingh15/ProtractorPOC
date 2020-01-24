//import { browser, element, By, by } from "protractor";

//import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('AddProvider', () => {

	it('add provider', async () => {
		 browser.get('http://tsmqmodqaapp10.tsm.local/QNXTALL/QNXT/Master/QMain.aspx?__machname=naeau5t4wxjhcb3ty35hemrw');
		 element(by.id("ProviderIndex")).click();
		
         element(by.linkText("Add Provider")).click();
        browser.sleep(3000)
		 browser.switchTo().frame(element(by.id("fraMain")).getWebElement());
		 element(by.id("txtLastName")).sendKeys('Test');
		 element(by.id("txtFirstName")).sendKeys('USER 2');
		 element(by.id("txtMidInitial")).sendKeys('Provider');
         element(by.id("btNext")).click();
        browser.sleep(5000)

		 element(by.id("txtPadd1")).sendKeys('Dummy');
		 element(by.id("txtPadd2")).sendKeys('Address');
         element(by.id("btNext")).click();
        browser.sleep(4000)
//Page 3
        element(by.name("dgSelectTitle:_ctl2:rdoSelect")).click();
        browser.sleep(4000)
         element(by.id("btNext")).click();
        browser.sleep(4000)

//Page 4
         element(by.name("dgSelectSpecialty:_ctl2:rdoSelect")).click();
        browser.sleep(4000)
         element(by.id("TxtTermDate")).click();
        browser.executeScript("document.getElementById('TxtTermDate').value='01/30/2020'");
        browser.sleep(4000)
         element(by.id("btNext")).click();
        browser.sleep(4000)

         element(by.name("dgSelectTitle:_ctl3:rdoSelect")).click();
        browser.sleep(4000)
         element(by.id("btNext")).click();
        browser.sleep(4000)
        
         element(by.id("txtFederalID")).sendKeys('596012277');
         element(by.id("btSave")).click();
        browser.sleep(4000)
	});

	});