let tof = true;

const showBtn = document.querySelector('#show-more');

const moreTxt = document.querySelector('#more');

showBtn.addEventListener('click', () => {
  if (tof === true) {
    moreTxt.style.display = 'block';
    showBtn.textContent = 'Show Less';
    tof = false;
  } else {
    moreTxt.style.display = 'none';
    showBtn.textContent = 'Show More';
    tof = true;
  }
});
