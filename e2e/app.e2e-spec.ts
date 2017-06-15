import { StockPortfolioClientPage } from './app.po';

describe('stock-portfolio-client App', () => {
  let page: StockPortfolioClientPage;

  beforeEach(() => {
    page = new StockPortfolioClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
