$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Scenarios",
  "description": "This cases is for Login feature which is every case will started with Background first.",
  "id": "login-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 21844887000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 159235600,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 2024634100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "TC001 - User login with correct credential",
  "description": "",
  "id": "login-scenarios;tc001---user-login-with-correct-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user input username \"standard_user\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user input password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user redirected to \"PRODUCTS\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 974670900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 2004798800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 712012900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PRODUCTS",
      "offset": 20
    }
  ],
  "location": "LoginStep.userRedirectedToProductPage(String)"
});
formatter.result({
  "duration": 1595931500,
  "status": "passed"
});
formatter.after({
  "duration": 741971200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 23,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;1"
    },
    {
      "cells": [
        "",
        "",
        "Username is required"
      ],
      "line": 24,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;2"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Password is required"
      ],
      "line": 25,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;3"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Username is required"
      ],
      "line": 26,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;4"
    },
    {
      "cells": [
        "standarduser",
        "secretsauce",
        "Epic sadface: Username and password do not match any user in this service."
      ],
      "line": 27,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21598294100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 110400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 2250427800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 1464386400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 2297492600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 663525500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 872672400,
  "status": "passed"
});
formatter.after({
  "duration": 900849300,
  "status": "passed"
});
formatter.before({
  "duration": 28166185000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 80300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 3193977200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Password is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 884682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 1471129100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 820023400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 760927100,
  "status": "passed"
});
formatter.after({
  "duration": 997735700,
  "status": "passed"
});
formatter.before({
  "duration": 26998736800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 86400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 3161801300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 845424300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 1873933500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 745582800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 866473900,
  "status": "passed"
});
formatter.after({
  "duration": 1127926400,
  "status": "passed"
});
formatter.before({
  "duration": 29838939200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 83100,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 3442544900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"standarduser\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"secretsauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Epic sadface: Username and password do not match any user in this service.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standarduser",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 1450956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secretsauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 1430415400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 755054100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service.",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 879903600,
  "status": "passed"
});
formatter.after({
  "duration": 921216800,
  "status": "passed"
});
});