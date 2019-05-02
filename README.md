# puppeteer-share
use puppeteer to generate share picuture from any website
使用puppeteer框架，针对某个网站生成分享图

# install cnpm 安装cnpm环境
npm config set registry https://registry.npm.taobao.org
npm install cnpm -g --registry=https://registry.npm.taobao.org

# install puppeteer 安装puppeteer框架
npm i puppeteer
#or "yarn add puppeteer"

# Example  网站截图案例:
- navigating to https://example.com and saving a screenshot as example.png
Save file as example.js

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
# 运行测试
node example.js
