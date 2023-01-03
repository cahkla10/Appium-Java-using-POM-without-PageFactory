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
  "duration": 23807598900,
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
  "duration": 274900800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 3065736400,
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
  "name": "user redirected to Product page",
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
  "duration": 1435521000,
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
  "duration": 1220155800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 597660400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userRedirectedToProductPage()"
});
formatter.result({
  "duration": 2070172500,
  "status": "passed"
});
formatter.after({
  "duration": 1166828200,
  "status": "passed"
});
});