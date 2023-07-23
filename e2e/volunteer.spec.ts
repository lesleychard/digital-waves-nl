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


test('Fill in sponsor form twice', async ({ page }) => {
  const testEmail = `fredmental709+volunteer${generateUUID()}@gmail.com`;
  console.log(`testEmail ${testEmail}`);

  await page.goto('http://localhost:3000/volunteer');

  await expect(page).toHaveTitle(/Digital Waves NL | Volunteer With Us/);

  await page.getByTestId('volunteer-form-first-name').fill('Freddie');
  await page.getByTestId('volunteer-form-last-name').fill('Pike');
  await page.getByTestId('volunteer-form-job-title').fill('Engineering Manager');
  await page.getByTestId('volunteer-form-company-name').fill('CoLab Software');
  await page.getByTestId('volunteer-form-email').fill(testEmail);

  await page.getByTestId('volunteer-request-button').click();

  await expect(page.getByText('Thank you for your interest in volunteering with Digital Waves. One of our team members will be in touch as soon as possible.')).toBeVisible();

  page.reload();

  await page.getByTestId('volunteer-form-first-name').fill('again Freddie');
  await page.getByTestId('volunteer-form-last-name').fill('again Pike');
  await page.getByTestId('volunteer-form-job-title').fill('again Engineering Manager');
  await page.getByTestId('volunteer-form-company-name').fill('again CoLab Software');
  await page.getByTestId('volunteer-form-email').fill(testEmail);

  await page.getByTestId('volunteer-request-button').click();

  await expect(page.getByText('Thank you for your interest in volunteering with Digital Waves. One of our team members will be in touch as soon as possible.')).toBeVisible();
});