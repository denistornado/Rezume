Feature('[FE] Environments  There are no information about hosting in project pages');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://valera-dev.k3s.digitalskynet.com/login');
  I.seeElement('.p-card-header');
  I.fillField(locate('.form-fields__input').at(1),'studentadmin@example.com');
  I.fillField(locate('.form-fields__input').at(2),'SfeduPractice2022!');
  I.click(locate('.form__submit-btn').at(1));
  I.waitForElement('h6', 5)
  I.waitForElement('div', 5)
  I.waitForElement('button', 5)
  I.moveCursorTo(locate('.environment_inner').at(1));
  pause();
}); 