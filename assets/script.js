 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });

//login

        // Initialize Firebase
        var config = {
        apiKey: "AIzaSyBPd3T4yYxJ_NFDgkkFqIE47EcnDBAYkLQ",
        authDomain: "fir-hackathon-7211a.firebaseapp.com",
        databaseURL: "https://fir-hackathon-7211a.firebaseio.com",
        projectId: "fir-hackathon-7211a",
        storageBucket: "fir-hackathon-7211a.appspot.com",
        messagingSenderId: "766850801181"
        };

        firebase.initializeApp(config);

        $( document ).ready(function() {
            $("#upload").change(function(){
                readURL(this);
            });

            $('#login').click( function() {
                var uname = $('input[name=uname]').val()
                var psw = $('input[name=psw]').val()

                firebase.auth().signInWithEmailAndPassword(uname, psw).catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorCode + ": " + errorMessage)
                });
            });
        });

  //signup 
   var config = {
        apiKey: "AIzaSyBPd3T4yYxJ_NFDgkkFqIE47EcnDBAYkLQ",
        authDomain: "fir-hackathon-7211a.firebaseapp.com",
        databaseURL: "https://fir-hackathon-7211a.firebaseio.com",
        projectId: "fir-hackathon-7211a",
        storageBucket: "fir-hackathon-7211a.appspot.com",
        messagingSenderId: "766850801181"
        };

        firebase.initializeApp(config);

        $( document ).ready(function() {
            $("#upload").change(function(){
                readURL(this);
            });

            $('#signup').click( function() {
                var uname = $('input[name=uname]').val()
                var psw = $('input[name=psw]').val()
                var psw2 = $('input[name=psw2]').val()

                if (psw != psw2) {
                    console.log("Password doesn't match")
                    return
                }

                firebase.auth().createUserWithEmailAndPassword(uname, psw).catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorCode + ": " + errorMessage)
                });
            });
        });

