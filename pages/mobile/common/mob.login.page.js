const { I } = inject();

module.exports = {

  lblSkip: {android: '~activation.skip'},
  lblWelcomeTitle: {android: '~activation.welcome_title'},
  lblWelcomeHint: {android: '~activation.welcome_hint'},
  btnSignIn: {android: '~auth.sign_in'},
  txtUsername: {android: '~login_username'},
  txtPassword: {android: '~login_password'},
  lblPassword: {android: '~auth.password'},

  async enterQRCode(strQRCode) {
    await I.waitForElement(this.lblWelcomeTitle, 15);
    await I.tap(this.lblSkip);
    await I.waitForElement(this.lblWelcomeHint, 15);
    let arrQRCode = Array.from(strQRCode);
    for (let i=0; i<10; i++) {
      await I.fillField({android: '~activation_' + i.toString()}, arrQRCode[i]);
    }
    await I.waitForElement(this.btnSignIn, 15);
  }, 

  async enterUser(strUsername, strPassword) {
    await I.seeTextEquals(strUsername, this.txtUsername);
    await I.see('Password', this.lblPassword);
    await I.fillField(this.txtPassword, strPassword);
    await I.tap(this.btnSignIn);
    await I.waitForText('Security code', 15);
  },

  async enterSecurityCode(strOTP) {
    const arrSecCode = Array.from(strOTP);
    for(let i=0; i<6; i++) {
      await I.fillField({android: '~otp_' + i.toString()}, arrSecCode[i]);
    }
    await I.waitForText('Chats', 30);
  }
}
