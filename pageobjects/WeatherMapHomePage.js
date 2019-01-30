import Page from './page';

class WeatherMapHomePage extends Page  {
	get searchButton()  			{ return browser.element('//button[text()=" Search"]'); }
	get resultsList()   			{ return browser.element('//a[contains(text(),"Pune")]'); }
	get brand() 		  			{return browser.element('//img[@alt="openweathermap"]');}
	get searchTextBox()       	{return browser.element('//form[@id="searchform"]/div/input');}
	get getCurrentLocationBtn()   {return browser.element('//button[text()="  Current location"]');}
	get getWeatherMap()   {return browser.element('//div[@class="weather-forecast-hourly-graphic"]');}
	get guideLink()		  {return browser.element('//a[text()="Guide"]');}

	/**
	 * define or overwrite page methods
	 */
	open () {
		super.open('https://openweathermap.org/')
		browser.pause(1000);
	}

	isBrandVisible() {
		this.brand.waitForVisible(1000);
		return this.brand.isVisible();
	} 

	searchCity (citiName) {
		this.searchTextBox.clearElement();
		this.searchTextBox.setValue(citiName);
	}

	search () {
		this.searchButton.click();
	}

	isSearchResultDisplayed (cityName) {
		return browser.element("//a[contains(text(),'" + cityName + "')]").isVisible();
	}

	isCurrentLocationBtnDisplayed() {
		return this.getCurrentLocationBtn.isVisible();
	}

	isWeatherMapDisplayed() {
		return this.getWeatherMap.isVisible();
	}

	navigateToGuidePage() {
		this.guideLink.click();
	}

	OpenLink(cityName) {
		return browser.element("//a[text()='" + cityName + "']").click();
	}

	isWeatherDisplayed(cityName) {
		return browser.element("//h2[contains(text(),'" + cityName + "')]").isVisible();
	}

}

export default new WeatherMapHomePage();
