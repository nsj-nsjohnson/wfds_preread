import './style.css'

const links=[...document.querySelectorAll('nav a')];
const targets=['why','fgk','s1','s2','s3','led'].map(id=>document.getElementById(id));
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));
    }
  });
},{rootMargin:'-35% 0px -60% 0px'});
targets.forEach(t=>t&&obs.observe(t));
