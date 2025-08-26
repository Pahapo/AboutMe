      let typed = new Typed('#typed', { 
        strings: ["Python Developer", "Telegram Bot Developer"], 
        typeSpeed: 100,
        startDelay: 500,
        backSpeed: 50,
        loop: true,
      });
    

      document.onkeydown = function (event) {
        if(event.code == 'ControlLeft') {
          document.onkeyup = function (event) {
            if(event.code == 'KeyY') {
              $('.combination__hidden').toggleClass('combination__active');
            }
            else {
              document.onkeyup = null;
            }
          }
        }
      }
