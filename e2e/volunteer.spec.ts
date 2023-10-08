import { test, expect } from '@playwright/test';
import { generateUUID } from "./utilties"


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