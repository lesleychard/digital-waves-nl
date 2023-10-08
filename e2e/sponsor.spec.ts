import { test, expect } from '@playwright/test';
import { generateUUID } from "./utilties"


test('Fill in sponsor form twice', async ({ page }) => {
  const testEmail = `fredmental709+sponsor${generateUUID()}@gmail.com`;
  console.log(`testEmail ${testEmail}`);

  await page.goto('http://localhost:3000/sponsor');

  await expect(page).toHaveTitle(/Digital Waves NL | Sponsor Us/);

  await page.getByTestId('sponsor-form-first-name').fill('Freddie');
  await page.getByTestId('sponsor-form-last-name').fill('Pike');
  await page.getByTestId('sponsor-form-job-title').fill('Engineering Manager');
  await page.getByTestId('sponsor-form-company-name').fill('CoLab Software');
  await page.getByTestId('sponsor-form-email').fill(testEmail);

  await page.getByTestId('sponsor-form-package').click();
  await page.getByTestId('sponsor-form-tb').click();

  await page.getByTestId('sponsor-request-button').click();

  await expect(page.getByText('Thank you for your interest in sponsoring Digital Waves. One of our team members will be in touch as soon as possible.')).toBeVisible();

  page.reload();

  await page.getByTestId('sponsor-form-first-name').fill('Freddie');
  await page.getByTestId('sponsor-form-last-name').fill('Pike');
  await page.getByTestId('sponsor-form-job-title').fill('again Engineering Manager');
  await page.getByTestId('sponsor-form-company-name').fill('again CoLab Software');
  await page.getByTestId('sponsor-form-email').fill(testEmail);

  await page.getByTestId('sponsor-form-package').click();
  await page.getByTestId('sponsor-form-tb').click();

  await page.getByTestId('sponsor-request-button').click();

  await expect(page.getByText('Thank you for your interest in sponsoring Digital Waves. One of our team members will be in touch as soon as possible.')).toBeVisible();
});