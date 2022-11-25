Feature: searchEngine

        @SEARCH_001
        Scenario: search the value
                Given open the site
                When search "men"
                Then view the search result

        @SEARCH_002
        Scenario: search null result
                Given open the site
                When search "pippo"
                Then the search result is null