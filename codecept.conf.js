exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'D:\\Exercise\\app-qa-release.apk',
      platform: 'Android',
      desiredCapabilities: {
        platformName: 'android',
        deviceName: 'emulator-5554', 
        platformVersion: '11', 
        appPackage: 'com.test.manager.qa',
        appActivity: 'com.test.MainActivity', 
        app: 'D:\\Exercise\\app-qa-release.apk'
      }
    }
  },
  include: {
    I: './steps_file.js',
    mobLoginPage: './pages/mobile/common/mob.login.page.js',
    mobContactPage: './pages/mobile/contact/mob.contact.page.js',
    mobChatsPage: './pages/mobile/chats/mob.chats.page.js',
    commonPage: './pages/mobile/common/common.page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/send_message.steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'testmobile'
}
