import { test, expect } from '@playwright/test';
import { generateUUID } from "./utilties"


test('Fill in volunteer form twice', async ({ page }) => {
  const testEmail = `fredmental709+subscribe${generateUUID()}@gmail.com`;
  console.log(`testEmail ${testEmail}`);

  await page.goto('http://localhost:3000/subscribe');

  await expect(page).toHaveTitle(/Digital Waves NL | Stay Updated/);

  await page.getByTestId('subscribe-form-first-name').fill('Freddie');
  await page.getByTestId('subscribe-form-last-name').fill('Pike');
  await page.getByTestId('subscribe-form-email').fill(testEmail);
  await page.getByTestId('subscribe-form-sponsor').click();
  await page.getByTestId('subscribe-form-isNL').click();


  await page.getByTestId('subscribe-request-button').click();

  await expect(page.getByText('Thanks for subscribing to Digital Waves NL. We will be in touch with important updates, announcements, and key contest reminders.')).toBeVisible();

  page.reload();

  await page.getByTestId('subscribe-form-first-name').fill('again Freddie');
  await page.getByTestId('subscribe-form-last-name').fill('again Pike');
  await page.getByTestId('subscribe-form-email').fill(testEmail);
  await page.getByTestId('subscribe-form-sponsor').click();
  await page.getByTestId('subscribe-form-isNL').click();

  await page.getByTestId('subscribe-request-button').click();

  await expect(page.getByText('Thanks for subscribing to Digital Waves NL. We will be in touch with important updates, announcements, and key contest reminders.')).toBeVisible();
});

test('Fill in volunteer without checkboxes', async ({ page }) => {
  const testEmail = `fredmental709+subscribe${generateUUID()}@gmail.com`;
  console.log(`testEmail ${testEmail}`);

  await page.goto('http://localhost:3000/subscribe');

  await expect(page).toHaveTitle(/Digital Waves NL | Stay Updated/);

  await page.getByTestId('subscribe-form-first-name').fill('Freddie');
  await page.getByTestId('subscribe-form-last-name').fill('Pike');
  await page.getByTestId('subscribe-form-email').fill(testEmail);

  await page.getByTestId('subscribe-request-button').click();

  await expect(page.getByText('Thanks for subscribing to Digital Waves NL. We will be in touch with important updates, announcements, and key contest reminders.')).toBeVisible();
});