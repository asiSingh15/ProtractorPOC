
describe('Add Member',function(){
	var originalTimeout;
	beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
	
    it('Launch QNXT and Add A New Member', async () => {
		browser.waitForAngularEnabled(false)
		browser.manage().timeouts().implicitlyWait(30000)
		browser.get('http://asthas:Jan@2020@tsmqmodqaapp10.tsm.local/QNXTALL/QNXT/Master/QMain.aspx?__machname=naeau5t4wxjhcb3ty35hemrw');

		await element(by.id("MemberIndex")).click();
		browser.sleep(3000)
		const handles_3 = await browser.getAllWindowHandles();
		await browser.switchTo().window(handles_3[handles_3.length - 1]);
		await element(by.id("lnkNewMember")).click();
		browser.sleep(3000)
	    
		await browser.switchTo().frame(element(by.id("fraMain")).getWebElement());
		await element(by.id("chkSubscriber")).click();
		browser.sleep(3000)
		await element(by.id("txtSSN")).sendKeys('701529325');
		await element(by.id("btnNext")).click();
		browser.sleep(3000)
		
		await element(by.id("txtLastName")).sendKeys('Test Protractor');
		await element(by.id("txtFirstName")).sendKeys('User 6');
		await element(by.id("txtDOB")).click();
		browser.sleep(3000);
		browser.executeScript("document.getElementById('txtDOB').value='05/10/1989'");
		browser.sleep(5000);
		await element(by.id("btnNext")).click();
		browser.sleep(5000);
		
		await element(by.id("txtAddress1")).sendKeys('Dummy');
		await element(by.id("txtAddress2")).sendKeys('Address');
		browser.sleep(3000);
		await element(by.id("btnNext")).click();
		browser.sleep(3000);
        await element(by.id("btnFinish")).click();
		browser.sleep(10000);

		browser.getAllWindowHandles().then(function(handles){
			browser.switchTo().window(handles[1]).then(function(){
				element(by.id("qnxtNo")).click();
				browser.sleep(3000);
				element(by.id("qnxtYes")).click();
				browser.sleep(3000);
			});
		});	
		
	});
});
