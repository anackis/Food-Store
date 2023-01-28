


function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
  tabsContent = document.querySelectorAll(tabsContentSelector),
  tabsParent = document.querySelector(tabsParentSelector);

  const hideTabContent = () => {
    tabsContent.forEach(item => {
      item.style.display = "none";
    });
    tabs.forEach(item => {
      // item.classList.add('hide');
      item.classList.remove(activeClass);
    });
  };
  const showTabContent = (i = 0) => {
    // tabsContent[i].classList.add('show', 'fade');
    // tabsContent[i].classList.remove('hide');
    tabsContent[i].style.display = 'block';
    tabs[i].classList.remove('tabheader__item_active');
    tabs[i].classList.add(activeClass);
  };
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
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