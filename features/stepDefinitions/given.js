
import { defineSupportCode } from 'cucumber';
import yahooPage from 'C:/Users/Ritesh_Prakash/eclipse-workspace/test-webdriverio/pageobjects/yahoo-search.page.js';

defineSupportCode(function({ Given }) {

  // *** belongs to Yahoo serch feature
  Given(/^I am on the search page$/, function() {
    yahooPage.open();
    browser.getTitle().should.equal('Yahoo Search - Web Search');
  });


});
