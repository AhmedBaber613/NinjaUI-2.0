import Tooltip from "./ninja-ui/tooltips";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tab";
import Snackbar from "./ninja-ui/snackbar";

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show("I'm a javascript dev :)");
});





//absolute mc
//DuckPlayz
//GoldenDuckMC