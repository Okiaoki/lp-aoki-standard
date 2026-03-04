(function () {
  var mount = document.getElementById("phase1-top-video");
  if (!mount) return;

  mount.innerHTML = [
    '<div class="phase1-mv">',
    '  <div class="phase1-mv-video">',
    '    <div class="phase1-mv-iframe phase1-mv-iframe-pc">',
    '      <iframe src="https://www.youtube.com/embed/c6VO8KRLlfo?rel=0&autoplay=1&mute=1&loop=1&playlist=c6VO8KRLlfo&showinfo=0&modestbranding=1&fs=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
    '    </div>',
    '    <div class="phase1-mv-iframe phase1-mv-iframe-sp">',
    '      <iframe src="https://www.youtube.com/embed/c6VO8KRLlfo?rel=0&autoplay=1&mute=1&loop=1&playlist=c6VO8KRLlfo&showinfo=0&modestbranding=1&fs=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
    '    </div>',
    '    <div class="phase1-mv-click-guard" aria-hidden="true"></div>',
    '  </div>',
    '</div>'
  ].join('');
})();
