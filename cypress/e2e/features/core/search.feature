Feature: searchEngine
        Scenario: search the value
        Given open the site
        When search "pippo"
        Then view the search result
    