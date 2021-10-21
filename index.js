
const puppeteer = require('puppeteer');

(async () => {
  // Starting browser
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Login flow
  await page.goto('https://www.instagram.com/accounts/login/?source=auth_switcher');
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', '');
  await page.type('input[name="password"]', '');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
     
   
})();
