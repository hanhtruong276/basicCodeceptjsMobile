const { I } = inject();

module.exports = {

  async randomAString() {
    const strRandom = Math.random().toString(36).substring(2,12);
    console.log(strRandom); 
    return strRandom;
  }
}