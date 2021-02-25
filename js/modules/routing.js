import './routie';

// Routie to ID
function routeHandler() {
  routie({
    'id': function () {
      sectionToggler('detailpage');
    },
  })

function sectionToggler(page) {
  const allSections = document.querySelectorAll('section');
  const activeSection = document.querySelector(`#${page}`);

  allSections.forEach((section) => {
    section.classList.remove('active');
    section.setAttribute("aria-hidden", "true");
    section.hidden = true;
  });

  activeSection.classList.add('active');
  activeSection.setAttribute('aria-hidden', 'false');
  activeSection.hidden = false;
}

routeHandler();
export { routeHandler };