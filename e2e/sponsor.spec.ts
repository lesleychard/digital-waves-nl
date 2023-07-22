import { test, expect } from '@playwright/test';

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}


test('Fill in sponsor form', async ({ page }) => {
  console.log(`generateUUID(): ${generateUUID()}`)
  await page.goto('http://localhost:3000/sponsor');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Digital Waves NL | Sponsor Us/);

  await page.getByTestId('sponsor-form-first-name').fill('Freddie');
  await page.getByTestId('sponsor-form-last-name').fill('Pike');
  await page.getByTestId('sponsor-form-job-title').fill('Engineering Manager');
  await page.getByTestId('sponsor-form-company-name').fill('CoLab Software');
  await page.getByTestId('sponsor-form-email').fill(`freddiepike709+sponsor${generateUUID()}@gmail.com`);

  await page.getByTestId('sponsor-form-package').click();
  await page.getByTestId('sponsor-form-tb').click();

  await page.getByTestId('sponsor-request-button').click();

  await expect(page.getByText('Thank you for your interest in sponsoring Digital Waves. One of our team members will be in touch as soon as possible.')).toBeVisible();
});

