$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Retail website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CompleteTest"
    }
  ]
});
formatter.before({
  "duration": 2104025800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# In feature will be use a comment"
    },
    {
      "line": 4,
      "value": "#Every Feature file starts with Feature: \u003cName of Feature\u003e"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDef.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 1702040600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Register new user to Retail Website",
  "description": "",
  "id": "login-to-retail-website;register-new-user-to-retail-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@RegisterTestCase"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User click on Register option",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User fill the Registration form with below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "eMail",
        "telephone",
        "password",
        "passwordConfirm",
        "Subscribe"
      ],
      "line": 44
    },
    {
      "cells": [
        "james",
        "bond",
        "jbond1@tekschool.us",
        "2021019911",
        "bond007",
        "bond007",
        "no"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User accept the privacy and policy",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User should be registered in Retail Website",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 53722900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_Register_option()"
});
formatter.result({
  "duration": 630285600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_fill_the_Registration_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 398647800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_accept_the_privacy_and_policy()"
});
formatter.result({
  "duration": 258211300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_continue_button()"
});
formatter.result({
  "duration": 408417100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_should_be_registered_in_Retail_Website()"
});
formatter.result({
  "duration": 189351800,
  "status": "passed"
});
formatter.after({
  "duration": 692522600,
  "status": "passed"
});
});