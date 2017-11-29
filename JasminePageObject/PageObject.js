var pageObject = function(){
	var firstNumber = element(by.model('first')); 
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));
    var url ="http://juliemr.github.io/protractor-demo/";
	 
	this.get = function(){
		browser.driver.manage().window().maximize();
		browser.get(url); 
		console.log('launched browser with : ' + url);	 
	};

	this.verifyTitle=function(title){
		expect(browser.getTitle()).toEqual(title); 
		console.info('Verified Title of application');
	}

	this.addTwoNum = function(a,b){
		firstNumber.sendKeys(a);
		console.log('entered '+ a+ ' in first text box')
		secondNumber.sendKeys(b);
		console.log('entered ' +b+' in first text box')
		goButton.click();
		console.log('Clicked on go button')
	}
	this.verifySolution = function(s){
		expect(latestResult.getText()).toEqual(s);	  
		var text = latestResult.getText();
		console.log('verified actual and expected answer is : ' + text);
	}

};
module.exports = pageObject;