import './styles/_tabs.css'

class Tabs {
  constructor(containor) {
    this.containor = containor;
    this.tabs = containor.querySelectorAll('.trigger');
  }

  init() {
    this.tabs.forEach(tabs => {
      tabs.addEventListener('click', e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }

  toggleTabs(e) {
    this.tabs.forEach(tab => tab.classList.remove('active'));

    e.target.classList.add('active');
  }

  toggleContent(e){
    // remove current active classes
    this.containor.querySelectorAll('.content').forEach(item => {
      item.classList.remove('active');
    });
    // add new active class
    const selector = e.target.getAttribute('data-target');
    const content = this.containor.querySelector(selector);
    content.classList.add('active');
  }
}

export { Tabs as default };