const { I } = inject();

module.exports = {

  btnContact: {android: '//android.view.ViewGroup[@content-desc="bottomTab_contact"]/android.view.ViewGroup'}, 
  lblContacts: {android: '~contact'},
  lnkTeam: {android: '~tab_teams'},
  txtSearch: {android: '~contact_search'},
  lblContactProfile: {android: '~chat.contact_profile'},

  async gotoContacts() {
    await I.tap(this.btnContact);
    await I.waitForElement(this.lblContacts, 10);
  },

  async gotoTeam() {
    await I.tap(this.lnkTeam);
    await I.waitForText('Search by name, email', 10);   
  },

  async findUser(strUsername) {
    I.fillField(this.txtSearch, strUsername);
    I.hideDeviceKeyboard();
      // await I.waitForElement('//android.widget.TextView[@content-desc="chat.search_results"]', 30)
    // I got the error with the above function. Search Results text cannot be found
    I.wait(5);
    let numOfElements = await I.grabNumberOfVisibleElements('//android.widget.TextView[@text="' + strUsername + '"]');
    if (numOfElements>0)
      return true;
    else return false;
  },

  async selectUser(strUsername) {
    await I.tap({android: '//android.widget.TextView[@text="' + strUsername + '"]'});
    await I.waitForText('Contact Profile', 20, this.lblContactProfile);
  }
}