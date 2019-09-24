import { newE2EPage } from '@stencil/core/testing';

describe('raw-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<raw-button></raw-button>');

    const element = await page.find('raw-button');
    expect(element).toHaveClass('hydrated');
  });
});
