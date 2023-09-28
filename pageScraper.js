const scraperObject = {
    url: "https://intranet.alxswe.com/projects/current",
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigate to ${this.url}`)
        await page.goto(this.url);
    }
}

module.exports = { scraperObject }