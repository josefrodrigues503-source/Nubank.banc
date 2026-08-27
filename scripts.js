// Mobile menu toggle
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
burger && burger.addEventListener('click', ()=>{
  if(navMobile.style.display === 'block') navMobile.style.display = 'none';
  else navMobile.style.display = 'block';
});

// Simple reveal animation on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('inview');
  });
},{threshold:0.1});
document.querySelectorAll('.feature, .card-mock, .hero-left').forEach(el=>observer.observe(el));
