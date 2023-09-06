

//navbar=
function closeNavbar() {
  var navlist = document.getElementById('navlist');
  navlist.style.display = 'none';

  var navbartoggle = document.getElementById('navbar-toggle');
    navbartoggle.classList.remove('active');

}

(function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });




    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });

  }); 
})(jQuery);   






$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  /*  autoplay: true,
    autoplaySpeed: 2000,   */ 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
     /*     infinite: true,
          dots: false  */
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
   /*   {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }   */
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
                  
/* for slider-1 */
  $('.slider-1').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
 /*   autoplay: true,
    autoplaySpeed: 2000,  
  */

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
       /*   infinite: true,
          dots: true */
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
  /*    {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }      */
          
    ]
});



/* for slider-2 */
$('.slider-2').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
 /* autoplay: true,
  autoplaySpeed: 2000,   */
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
     /*   infinite: true,
        dots: true */
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

            
  ]
});





/* video */
function toggleVideo() {
  var video = document.getElementById("myVideo");
  
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//contact  
function sendMail() {
    var params = {
      firstname: document.getElementById("firstname").value, 
      
      email: document.getElementById("email").value,
      number: document.getElementById("number").value, 
      message: document.getElementById("message").value,  
    };
  
  const serviceID = "service_89gqlzw";
  const templateID = "template_qa2a28r";
  
  emailjs
  .send(serviceID, templateID, params)
  .then( (res) => {
       document.getElementById("firstname").value = ""; 
        
       document.getElementById("email").value = "";
       document.getElementById("number").value = ""; 
       document.getElementById("message").value = ""; 
       console.log(res);
       alert("your message sent successfully");
  
    })
  .catch((err) => console.log(err));
  
  }
  

  const form = document.getElementById("form");
  const firstname = document.getElementById("firstname");
  
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const message = document.getElementById("message");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    validateInputs();
  
  });
  
  const setError = (element, message) => {
    const formfield = element.parentElement;
    const errorDisplay = formfield.querySelector('.error');
  
    errorDisplay.innerText = message;
    formfield.classList.add('error');
  }  
  
  const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
   
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const messageValue = message.value.trim();
  
  
  if (firstnameValue === '') {
   setError(firstname, 'Name is required');
  }
  else
  {
    console.log('Full Name: ' + firstnameValue);
  }
  
  
  if (emailValue === "") {
    setError(email, 'Email is required');
  }
  else
  {
    console.log('Email: ' + emailValue);
  }

  if (numberValue === '') {
    setError(number, 'Number is required');
   }
   else
   {
     console.log('Number: ' + numberValue);
   }

   if (messageValue === '') {
    setError(message, 'Message is required');
   }
   else
   {
     console.log('Message: ' + messageValue);
   }
  
  
  
  };  
  
  
  // aos animation
  
  AOS.init();
  
  
  AOS.init({
  duration: 800,  // Animation duration in milliseconds
  offset: 200     // Offset (in pixels) from the original trigger point
  });
  
  AOS.init({
  useClassNames: true,  // Enables the use of classes for animation targets
  initClassName: 'aos-animate', // Class name to be animated
  
  });

  /* uploaad file modal*/ 
  $('#OpenImgUpload').click(function(){ $('#imgupload').trigger('click'); });