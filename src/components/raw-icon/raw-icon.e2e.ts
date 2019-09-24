import { newE2EPage } from '@stencil/core/testing';

describe('raw-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<raw-icon></raw-icon>');

    const element = await page.find('raw-icon');
    expect(element).toHaveClass('hydrated');
  });
});
