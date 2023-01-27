


function tabs() {
  const tabs = document.querySelectorAll('.tabheader__item'),
  tabsContent = document.querySelectorAll('.tabcontent'),
  tabsParent = document.querySelector('.tabheader__items');

  const hideTabContent = () => {
    tabsContent.forEach(item => {
      item.style.display = "none";
    });
    tabs.forEach(item => {
      // item.classList.add('hide');
      item.classList.remove('tabheader__item_active');
    });
  };
  const showTabContent = (i = 0) => {
    // tabsContent[i].classList.add('show', 'fade');
    // tabsContent[i].classList.remove('hide');
    tabsContent[i].style.display = 'block';
    tabs[i].classList.remove('tabheader__item_active');
  };
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;