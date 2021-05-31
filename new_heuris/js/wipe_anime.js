// JavaScript Document

(function() {
  const image = document.querySelectorAll('.img-wrap');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation');
      } else {
        entry.target.classList.remove('img-animation');
      }
    });
  });
  
  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();


(function() {
  const image = document.querySelectorAll('.txt_anime');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('txt_anime_fade');
      } else {
        entry.target.classList.remove('txt_anime_fade');
      }
    });
  });
  
  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();

(function() {
  const image = document.querySelectorAll('.txt_anime_2');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('txt_anime_fade_late');
      } else {
        entry.target.classList.remove('txt_anime_fade_late');
      }
    });
  });
  
  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();


(function() {
  const image = document.querySelectorAll('.img-wrap_bk');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation_bk');
      } else {
        entry.target.classList.remove('img-animation_bk');
      }
    });
  });

  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();

(function() {
  const image = document.querySelectorAll('.img-wrap_wt');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation_wt');
      } else {
        entry.target.classList.remove('img-animation_wt');
      }
    });
  });

  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();

(function() {
  const image = document.querySelectorAll('.img-wrap_wt_R');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation_wt_R');
      } else {
        entry.target.classList.remove('img-animation_wt_R');
      }
    });
  });

  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();

(function() {
  const image = document.querySelectorAll('.wipe_in');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('wipe_motion');
      } else {
        entry.target.classList.remove('wipe_motion');
      }
    });
  });
  
  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();