(function(){
  var c=document.getElementById('cover'),b=document.body;
  b.style.overflow='hidden';
  var au=document.getElementById('bg'),sn=document.getElementById('snd');
  function go(){c.className='gone';b.style.overflow='';sn.className='snd show';
    try{var pr=au.play();if(pr&&pr.catch){pr.catch(function(){sn.textContent='🔇';});}}catch(e){sn.textContent='🔇';}}
  sn.addEventListener('click',function(){if(au.paused){au.play();sn.textContent='🔊';}else{au.pause();sn.textContent='🔇';}});
  c.addEventListener('click',go);
  c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){go();}});
  var els=document.querySelectorAll('.rv,.unroll');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');}});},{threshold:.25});
    els.forEach(function(x){io.observe(x);});
  }else{els.forEach(function(x){x.classList.add('on');});}
  var t0=new Date(2026,11,1,0,0,0).getTime();
  function tick(){var t=Math.max(0,t0-Date.now());
    document.getElementById('d').textContent=Math.floor(t/864e5);
    document.getElementById('h').textContent=Math.floor(t%864e5/36e5);
    document.getElementById('m').textContent=Math.floor(t%36e5/6e4);
    document.getElementById('s').textContent=Math.floor(t%6e4/1e3);}
  tick();setInterval(tick,1000);
})();
