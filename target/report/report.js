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
  "duration": 1948640900,
  "error_message": "java.io.IOException: Cannot run program \"idevice_id\": CreateProcess error\u003d2, The system cannot find the file specified\r\n\tat java.lang.ProcessBuilder.start(ProcessBuilder.java:1048)\r\n\tat java.lang.Runtime.exec(Runtime.java:621)\r\n\tat java.lang.Runtime.exec(Runtime.java:451)\r\n\tat java.lang.Runtime.exec(Runtime.java:348)\r\n\tat com.testinium.deviceinformation.helper.ProcessHelper.runTimeExec(ProcessHelper.java:11)\r\n\tat com.testinium.deviceinformation.device.IosDeviceFinder.readDeviceInfo(IosDeviceFinder.java:43)\r\n\tat com.testinium.deviceinformation.device.IosDeviceFinder.findDevices(IosDeviceFinder.java:26)\r\n\tat com.testinium.deviceinformation.device.AllDeviceFinder.findDevices(AllDeviceFinder.java:27)\r\n\tat com.testinium.deviceinformation.device.DeviceFinder.findDevices(DeviceFinder.java:14)\r\n\tat com.testinium.deviceinformation.DeviceInfoImpl.getDevices(DeviceInfoImpl.java:43)\r\n\tat com.testinium.deviceinformation.DeviceInfo.getFirstDevice(DeviceInfo.java:20)\r\n\tat setups.Capabilities.android(Capabilities.java:19)\r\n\tat setups.Hook.startDriver(Hook.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.io.IOException: CreateProcess error\u003d2, The system cannot find the file specified\r\n\tat java.lang.ProcessImpl.create(Native Method)\r\n\tat java.lang.ProcessImpl.\u003cinit\u003e(ProcessImpl.java:453)\r\n\tat java.lang.ProcessImpl.start(ProcessImpl.java:140)\r\n\tat java.lang.ProcessBuilder.start(ProcessBuilder.java:1029)\r\n\t... 48 more\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.userRedirectedToProductPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 107600,
  "error_message": "java.lang.NullPointerException\r\n\tat setups.Hook.stopDriver(Hook.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
});