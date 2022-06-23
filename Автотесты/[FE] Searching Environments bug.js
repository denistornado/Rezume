Feature('[FE] Searching Environments bug');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://valera-dev.k3s.digitalskynet.com/login');
  I.seeElement('.p-card-header');
  I.fillField(locate('.form-fields__input').at(1),'studentadmin@example.com');
  I.fillField(locate('.form-fields__input').at(2),'SfeduPractice2022!');
  I.click(locate('.form__submit-btn').at(1));
  I.waitForElement('h6', 2)
  I.waitForElement('div', 2)
  I.waitForElement('button', 2)
  I.click(locate('.environments-content__filter-btn').at(1));
  I.click(locate('.p-dropdown-trigger').at(1));
  I.click(locate('.p-dropdown-item').at(4));
  I.click(locate('.searchbar__input').at(1));
  I.fillField(locate('.searchbar__input').at(1),'ibiss ');
  pause();
}); 