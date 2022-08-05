Feature: Send message from Mobile app

  Scenario: Send message from Mobile app
    Given User1 starts Mobile app with the QR code "x8ojpnmgtd"
    When User1 inputs the username/password "automation_auto_31"/"Testing@123" on the Mobile app
    And User1 inputs OTP "111111"
    And User1 goes to Contact tab
    And User1 searches for the User2 "automation_auto_30"
    And User1 sends a random message to User2 "automation_auto_30"