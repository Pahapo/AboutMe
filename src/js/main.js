      let typed = new Typed('#typed', { 
        strings: ["Web Developer", "JavaScript/React developer", "UI/UX Designer"], 
        typeSpeed: 100,
        startDelay: 500,
        backSpeed: 50,
        loop: true,
      });
      
      var my_age = document.getElementById('my_age');
      age = new Date().getFullYear() - 2002;
      switch (age) {
        case 21:
        case 31:
        case 41:
        case 51:
          my_age.innerHTML = age + " год";
          break;
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
          my_age.innerHTML = age + " года";
          break;
        default:
          my_age.innerHTML = age + " лет";
      }


      var my_course = document.getElementById('my_course');
      if (new Date().getFullYear() == 2022) 
        my_course.innerHTML = "студент 3 курса";
      else if (new Date().getFullYear() == 2023)
        my_course.innerHTML = "студент 4 курса";
      else 
        my_course.innerHTML = "выпускник";

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