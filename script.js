  document.querySelectorAll('.card').forEach(function(card){
    function toggle(){ card.classList.toggle('flipped'); }
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); }
    });
  });

  document.querySelectorAll('.pilar-head').forEach(function(btn){
    btn.addEventListener('click', function(){
      var pilar = btn.closest('.pilar');
      var wasOpen = pilar.classList.contains('open');
      document.querySelectorAll('.pilar.open').forEach(function(p){ p.classList.remove('open'); });
      if(!wasOpen){ pilar.classList.add('open'); }
    });
  });
