
import { defineSupportCode } from 'cucumber';
import WeatherMapHomePage from '../../pageobjects/WeatherMapHomePage.js';

defineSupportCode(function({ Given, When, Then }) {

	Given(/^I am on the search page$/, function() {
		WeatherMapHomePage.open();
		browser.getTitle().should.equal('Сurrent weather and forecast - OpenWeatherMap');
		
		//check visibility of element "openweathermap" in top left side of the application
		WeatherMapHomePage.isWeatherMapDisplayed().should.be.true;
		//check visibility of button "current location" at the right side of search button
		WeatherMapHomePage.isCurrentLocationBtnDisplayed().should.be.true;
	});

	When(/^I enter a valid "([^"]*)" in the search box$/, function(cityName) {
		WeatherMapHomePage.searchCity(cityName);
		WeatherMapHomePage.search();
	});

	Then(/^I should see a list of search results with "([^"]*)"$/, function(cityName) {
		WeatherMapHomePage.isSearchResultDisplayed(cityName).should.be.true;
	});
	
	When(/^I eneter invalid "([^"]*)" in the search box$/, function(inValidCityName) {
		WeatherMapHomePage.searchCity(inValidCityName);
		WeatherMapHomePage.search();
	});

	Then(/^i should not get any search result with the given "([^"]*)"$/, function(inValidCityName) {
		WeatherMapHomePage.isSearchResultDisplayed(inValidCityName).should.be.false;
	});
	
	When(/^I click on "([^"]*)" from search result$/, function(cityName) {
		WeatherMapHomePage.OpenLink(cityName)
	});
	
	Then(/^I should see the weather "([^"]*)"$/, function(cityName) {
		WeatherMapHomePage.isWeatherDisplayed(cityName).should.be.false;
	});
	
	

});
