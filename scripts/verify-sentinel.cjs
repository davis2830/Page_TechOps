const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  let count = 0, mode = 'success', configured = true;
  await page.route('**/api.web3forms.com/**', async route => {
    count++;
    if (mode === 'pending') await new Promise(resolve => setTimeout(resolve, 500));
    await route.fulfill({ status: mode === 'error' ? 500 : 200, contentType: 'application/json', body: JSON.stringify({ success: mode !== 'error' }) });
  });
  for (const path of ['/', '/sentinel', '/taller', '/privacidad', '/terminos', '/seguridad', '/sentinel/terminos']) {
    assert.equal((await page.goto('http://localhost:3000' + path)).status(), 200);
    await page.locator('h1').first().waitFor();
    await page.reload(); await page.locator('h1').first().waitFor();
  }
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 }); await page.goto('http://localhost:3000/sentinel');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow ${width}`);
    if (width < 1024) {
      await page.getByRole('button', { name: 'Abrir menú' }).click();
      await page.locator('#sentinel-menu').getByRole('link', { name: 'Cómo comenzar' }).click();
      assert.equal(await page.locator('#sentinel-menu').count(), 0);
    }
  }
  await page.locator('[aria-roledescription="carrusel"] button').filter({ hasText: 'Uptime' }).click();
  assert.match(await page.locator('[aria-roledescription="diapositiva"] img').getAttribute('src'), /uptime/);
  await page.getByRole('button', { name: 'Captura siguiente' }).click();
  assert.match(await page.locator('[aria-roledescription="diapositiva"] img').getAttribute('src'), /certificados/);
  await page.getByRole('button', { name: 'Captura siguiente' }).press('ArrowRight');
  assert.match(await page.locator('[aria-roledescription="diapositiva"] img').getAttribute('src'), /dashboard/);
  assert.equal(await page.locator('footer').getByRole('link', { name: 'Términos', exact: true }).getAttribute('href'), '/sentinel/terminos');
  await page.route('**/config/contacto.js*', async route => {
    const response = await route.fetch();
    const body = (await response.text()).replace(/web3formsKey:\s*[^\n]+/, `web3formsKey: ${configured ? "'test-key'" : "''"},`);
    await route.fulfill({ response, body });
  });
  async function fill() {
    for (const [name, value] of [['name', 'Prueba'], ['company', 'Demo'], ['email', 'test@example.com']]) await page.locator(`input[name="${name}"]`).fill(value);
    await page.locator('textarea[name="context"]').fill('Servicios de prueba');
    await page.locator('input[name="consent"]').check();
  }
  await page.reload(); await page.locator('#beta button[type="submit"]').click(); assert.equal(count, 0);
  await fill(); mode = 'pending'; await page.locator('#beta button[type="submit"]').click();
  assert(await page.locator('#beta button[type="submit"]').isDisabled());
  await page.getByRole('heading', { name: 'Solicitud recibida' }).waitFor();
  await page.reload(); await fill(); mode = 'error'; await page.locator('#beta button[type="submit"]').click();
  await page.locator('#beta [role="alert"]').waitFor();
  configured = false; await page.reload(); await page.getByRole('link', { name: 'Solicitar acceso por correo' }).waitFor();
  assert.equal(errors.length, 0, errors.join('\n'));
  console.log('PASS: routes, reloads, widths, mobile navigation, gallery and mocked form states. No real submissions.');
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
