const puppeteer = require('puppeteer');
const constants = require('./constants');
const EMAIL_SELECTOR = '#user_email';
const PASSWORD_SELECTOR = '#user_password';
const CTA_SELECTOR = '.btn';

async function startBrowser() {
    const browser = await puppeteer.launch(
        {
            headless: false,
        }
    );
    const page = await browser.newPage();
    return { browser, page };
}

async function closeBrowser(browser) {
    return browser.close()
}

async function login(url) {
    const datas = []
    const {browser, page} = await startBrowser();
    page.setViewport({ width: 1366, height: 768});
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    await page.click(EMAIL_SELECTOR);
    await page.keyboard.type(constants.username);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(constants.password)
    await page.click(CTA_SELECTOR);
    await page.waitForNavigation();
    await page.goto("https://intranet.alxswe.com/projects/current");
    await page.waitForSelector('list-group-item > div > div > a')
    const data = await page.$eval("list - group - item > div > div > a", (el) => el.textContent)
    await page.screenshot({ path: 'alx-home.png' })
    // const data = await page.$$eval('.list-group', element => element.map((el) => {el.innerText}));
    // datas.push(data
    console.log(data)
    closeBrowser ();
}

const signIn = async () => {
    await login("https://intranet.alxswe.com/auth/sign_in")
    process.exit(1)
};

module.exports = { signIn }