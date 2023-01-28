


const showModal = (modalSelector, timerId) => {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'block';      // modal.classList.add('show');
  ///
  document.body.style.overflow = "hidden";
  console.log(timerId);
  if (timerId) {
    clearInterval(timerId);
  }
  clearInterval(timerId);
  ///
};  
const closeModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'none';    // modal.classList.add('hide');
  ///
  document.body.style.overflow = "";
  ///
};

function modalFunc(triggerSelector, modalSelector, timerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
  ///
  modalClose = document.querySelectorAll('[data-close]'),
  ///
  modal = document.querySelector(modalSelector);
  modalTrigger.forEach(item => {
  item.addEventListener('click', () => {
  showModal(modalSelector, timerId);
  });
  });
  ///
  modalClose.forEach(item => {
    item.addEventListener('click', () => {
      closeModal(modalSelector);
    });
  });
  ///
  modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') == '') {
  closeModal(modalSelector);
  }
  });
  document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.style.display === "block") {
  closeModal(modalSelector);
  }
  });

  const showModalByScroll = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
      showModal(modalSelector, timerId);
      window.removeEventListener('scroll', showModalByScroll);
    } 
  };
  window.addEventListener('scroll', showModalByScroll);
  ///
}

export {showModal, closeModal};
export default modalFunc;