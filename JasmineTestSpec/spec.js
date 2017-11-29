var pageObject = require('../JasminePageObject/PageObject.js');
var testinit  = require('../JasmineTestInitiators/TestFundamentals.js')


describe('Protractor Demo Project', function() {

	pageObject = new pageObject();
	
	
	it('test lauching browser and verify title',function(){
		pageObject.get();
		pageObject.verifyTitle('Super Calculator');

	});

	it('add two numbers',function(){
		pageObject.addTwoNum('1','2');

	});

	it('verify output', function(){
		pageObject.verifySolution('3'); 
	});

	// expect(browser.getTitle()).toEqual('Super Calculator');
});