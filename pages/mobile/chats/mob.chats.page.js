const { I } = inject();

module.exports = {

  btnProfileChat: {android: '~profile_chat'},
  txtMsgHint: {android: '~send_to_room'},
  txtChatInput: {android: '~chatDetail_input'}, 
  btnSend: {android: '~chatDetail_sendMessage'},

  async sendMessageToUser(strMsg, strUsername) {
    await I.see(strUsername);
    await I.tap(this.btnProfileChat);
    await I.waitForElement(this.txtMsgHint, 20);
    await I.fillField(this.txtChatInput, strMsg);
    await I.tap(this.btnSend);
    await I.waitForElement({android: '//android.widget.TextView[@content-desc="'+ strMsg + '"]'}, 10);
  }
}