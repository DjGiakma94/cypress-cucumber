Feature: searchEngine
        Scenario: search the value
                Given open the site
                When search "men"
                Then view the search result