Feature('[FE] Environments: Bugged graphana link and back page');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://valera-dev.k3s.digitalskynet.com/login');
  I.seeElement('.p-card-header');
  I.waitForElement('div', 2)
  I.waitForElement('button', 2)
  I.click(locate('.auth-btn').at(3));
  pause();
}); 