import './styles/_dropdown.css';

class Dropdown {
  constructor(containor) {
    this.containor = containor;
    this.trigger = containor.querySelector('.trigger');
    this.content = containor.querySelector('.content');
  }

  init() {
    this.trigger.addEventListener('click', () => {
      this.trigger.classList.toggle('active');
      this.content.classList.toggle('active');
    });
  }
}

export { Dropdown as default };