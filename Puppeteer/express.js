import express from 'express';
import puppeteer from 'puppeteer';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/run-puppeteer', async (req, res) => {
    const { url, alive, screenshot, timeout } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'Url is required' });
    }
    let browser;
    let page;
    let keepAlive = alive || 30000;
    let takeScreenshot = screenshot || false;
    let puppetterTimeout = timeout || 120000;
    try {
        console.log('Launching browser...');
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-web-security', '--disable-features=IsolateOrigins,site-per-process'],
            executablePath: '/app/chrome/chrome',
            protocolTimeout: puppetterTimeout
        });
        page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1080
        });
        await page.goto(url, { timeout: 30000, waitUntil: 'load' });
       
        console.log(`keeping the page open for ${keepAlive} seconds...`);
        await new Promise(resolve => setTimeout(resolve, keepAlive));

        if(takeScreenshot){
            console.log('Taking screenshot...');
            const timestamp = new Date().toISOString().replace(/:/g, '-');
            const screenshotPath = `/screenshots/screenshot-${timestamp}.png`;
            await page.screenshot({ path: screenshotPath, fullPage: true });
            console.log(`Screenshot saved to ${screenshotPath}`);
        }

        await browser.close();
        console.log(`Closed Browser`);
        return res.json({
            success: true
        });
    } catch (error) {
        console.error('An error occurred:', error);
        if (browser) await browser.close().catch(() => {});
        res.status(500).json({ error: 'Error executing Puppeteer script', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Puppeteer Express server is running...`);
});