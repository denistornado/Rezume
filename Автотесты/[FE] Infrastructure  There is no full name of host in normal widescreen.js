Feature('[FE] Environments : Information about links dont close if we open new link');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://valera-dev.k3s.digitalskynet.com/login');
  I.seeElement('.p-card-header');
  I.fillField(locate('.form-fields__input').at(1),'studentadmin@example.com');
  I.fillField(locate('.form-fields__input').at(2),'SfeduPractice2022!');
  I.click(locate('.form__submit-btn').at(1));
  I.waitForElement('h6', 2)
  I.waitForElement('div', 2)
  I.waitForElement('button', 2)
  I.click(locate('.navigation-link').at(3));
  I.click(locate('h3').withText('Kubernetes'));
  I.click(locate('.p-col-9').at(6));
  pause();
}); 