var rgb_color = 0;
    function setSwipe(elem) {
    var t = document.querySelector(elem);
    var s_X;
    var e_X;
    var dist = 30;
    t.addEventListener('touchstart', function(e) {
     e.preventDefault();
     s_X = e.touches[0].pageX;
    });
    t.addEventListener('touchmove', function(e) {
     e.preventDefault();
     e_X = e.changedTouches[0].pageX;
    });
    t.addEventListener('touchend', function(e) {
      if (s_X > e_X + dist) {
       t.textContent = '<<<?-左にスワイプされました';
       rgb_color = rgb_color + 16;
       t.style.backgroundColor = "rgb("+ rgb_color + ","+ rgb_color + "," + rgb_color + ")";
      } else if (s_X + dist < e_X) {
       t.textContent = '右にスワイプされました?->>>';
       rgb_color = rgb_color ? 16;
       t.style.backgroundColor = "rgb(" + rgb_color + "," + rgb_color + "," + rgb_color + ")";
      }
     });
    }
    setSwipe('.swipearea');