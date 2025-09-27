// Menu toggle and demo form submit
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  toggle && toggle.addEventListener('click', function(){ 
    if(nav.style.display === 'block') nav.style.display = 'none';
    else nav.style.display = 'block';
  });

  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    console.log('Contacto (demo):', Object.fromEntries(data.entries()));
    alert('Mensaje enviado (demo).');
    form.reset();
  });
});
