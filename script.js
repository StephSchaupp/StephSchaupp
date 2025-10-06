// minimal interactive behavior: nav toggle and current year
document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      if(nav.style.display === 'flex') {
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '12px';
        nav.style.alignItems = 'flex-start';
      }
    });
  }

  // year in footer
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;
});

