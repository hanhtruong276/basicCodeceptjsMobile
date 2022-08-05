const { I, mobLoginPage, mobContactPage, mobChatsPage, commonPage } = inject();
let strRandomMessage = '';

Given('User1 starts Mobile app with the QR code {string}', async (qrCode) => {
  await I.switchToNative();
  await mobLoginPage.enterQRCode(qrCode);
});

When(/^User1 inputs the username\/password "(.*?)"\/"(.*?)" on the Mobile app$/, async (username, password) => {
  await mobLoginPage.enterUser(username, password);
});

When('User1 inputs OTP {string}', async (otpCode) => {
  await mobLoginPage.enterSecurityCode(otpCode);
});

When('User1 goes to Contact tab', async () => {
  await mobContactPage.gotoContacts();
});

When('User1 searches for the User2 {string}', async (username2) => {
  await mobContactPage.gotoTeam();
  let bFound = await mobContactPage.findUser(username2);
  if (bFound) {
    await mobContactPage.selectUser(username2);
  }
});

When('User1 sends a random message to User2 {string}', async (username2) => {
  strRandomMessage = await commonPage.randomAString();
  await mobChatsPage.sendMessageToUser(strRandomMessage, username2);
});
