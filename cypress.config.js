const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--window-size=1280,1080')
        }

        if (browser.name === 'electron' && browser.isHeadless) {
          launchOptions.preferences.width = 1280
          launchOptions.preferences.height = 1080
        }

        if (browser.name === 'firefox' && browser.isHeadless) {
          launchOptions.args.push('--width=1280')
          launchOptions.args.push('--height=1080')
        }

        return launchOptions
      })

    },
    testIsolation: false
  },
  reporter: "mochawesome", //配置报告类型
  reporterOptions: {
    reportDir: "cypress/results/mochawesome-report",
    overwrite: false, // 如果设置为true，则每次测试运行时都会覆盖之前的报告
    html: true, // 生成 HTML 报告
    json: true, // 生成 JSON 报告
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  viewportWidth: 375,
  viewportHeight: 1080,
  video: true,
  trashAssetsBeforeRuns: true, // 测试运行前是否清空资产文件
  videoCompression: 32, // 视频压缩质量
});

