


const showModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);
  // x.classList.add('show');
  modal.style.display = 'block';
  // clearInterval(timerId);
  // document.body.style.overflow = "hidden";
};  
const closeModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);
  // x.classList.add('hide');
  modal.style.display = 'none';
  // document.body.style.overflow = "";
};

function modalFunc(triggerSelector, modalSelector) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
  // modalClose = document.querySelectorAll('[data-close]'),
  modal = document.querySelector(modalSelector);
  modalTrigger.forEach(item => {
  item.addEventListener('click', () => {
  showModal(modalSelector);
  });
  });
  // modalClose.forEach(item => {
  //   item.addEventListener('click', () => {
  //     closeModal(modalSelector);
  //   });
  // });
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
  // const timerId = setTimeout(() => {
  //   showModal(modal);
  // }, 4000 );




  // const showModalByScroll = () => {
  //   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
  //     showModal(modalSelector);
  //     window.removeEventListener('scroll', showModalByScroll);
  //   } 
  // };
  // window.addEventListener('scroll', showModalByScroll);
}

export {showModal, closeModal};
export default modalFunc;