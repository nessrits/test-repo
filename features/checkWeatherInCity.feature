Feature: Check weather in city

    As a user on the WeatherMap page
    I want to search for a city
    and check the weather

    Background:
        Given I am on the search page

    Scenario Outline: Search field is working fine on WeatherMap home page
        When I enter a valid <cityName> in the search box
        Then I should see a list of search results with <cityName>
        And  I eneter invalid <inValidCityName> in the search box
        Then i should not get any search result with the given <inValidCityName>

        Examples:
        |cityName|inValidCityName|
        |"Pune"|"abcdef"|
        
         Scenario Outline: Search for city and the verify that weather is displayed for that city
        When I enter a valid <cityName> in the search box
        Then I should see a list of search results with <cityName>
        And I click on <cityName> from search result
        Then I should see the weather <cityName>

        Examples:
        |cityName|
        |" Pune, IN"|
        
