Feature('My First Test');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://valera-dev.k3s.digitalskynet.com/login');
  I.seeElement('.p-card-header');
  //form-fields__input
  I.fillField(locate('.form-fields__input').at(1),'studentadmin@example.com');
  I.fillField(locate('.form-fields__input').at(2),'SfeduPractice2022!');
 // I.fillField('Email', 'studentadmin@example.com');
//I.fillField('Password', 'SfeduPractice2022!');
//form__submit-btn
  I.click(locate('.form__submit-btn').at(1));
  I.waitForElement('h6', 2)
  I.waitForElement('div', 2)
  I.waitForElement('button', 2)
 //I.click(locate('h6').withText('Инфраструктура'));
 
  I.click(locate('.environment-header__favourite-icon').at(2));
  I.click(locate('.environment-pinned-actions__btn').at(1));
 //I.click('.environment-header__favourite-icon[1]');
 //I.click(locate('h6').withText('Главная'));
// I.click(locate('h6').withText('Главная'));
  I.click(locate('.navigation-link').at(1));
  I.waitForElement('h6', 2)
  I.waitForElement('div', 2)
  I.waitForElement('button', 2)
 
 //I.click(locate('h6').withText('Окружения'));
 //I.click(locate('a').at(2));
  I.click(locate('.navigation-link').at(2));
  I.click(locate('button .environment-header__favourite-icon').at(2));
  I.click(locate('div .environment-pinned-actions__btn').at(1));
  pause();
}); 