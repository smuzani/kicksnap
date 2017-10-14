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
            
            $('#login').click( function() {
                var uname = $('#exampleInputEmail2').val()
                var psw = $('#exampleInputPassword2').val()

                firebase.auth().signInWithEmailAndPassword(uname, psw).catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorCode + ": " + errorMessage)
                });
            });
        });

  //signup 


        $( document ).ready(function() {
          

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


$(function () {
    var ol = $('#upload ol');
    $('#drop a').click(function () {
        $(this).parent().find('input').click();
    });
    $('body').on('click', '#openUpload', function (e) {
        e.preventDefault();
        $('#upload ol').empty();
        $('#uploadModal').modal('show');
    });


    $('#upload').fileupload({
        messages: {
            maxFileSize: "File is too big",
            minFileSize: "File is too small",
            acceptFileTypes: "Filetype not allowed",
            maxNumberOfFiles: "Too many files",
            uploadedBytes: "Uploaded bytes exceed file size",
            emptyResult: "Empty file upload result"
        },
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        //url: 'AJAX.ashx',
        url: 'http://jquery-file-upload.appspot.com/',
        dataType: 'json',
        disableImageLoad: true,
        headers: {
            Accept: "application/json"
        },
        accept: 'application/json',
        maxFileSize: 10000000, //5mb
        maxNumberOfFiles: 5,
        sequentialUploads: true,
        //singleFileUploads: false,
        //resizeMaxWidth: 1920,
        //resizeMaxHeight: 1200,
        //acceptFileTypes: /(.|\/)(gif|jpe?g|png|pdf)$/i,
        uploadTemplateId: null,
        downloadTemplateId: null,
        uploadTemplate: function (o) {
            var rows = $();
            $.each(o.files, function (index, file) {
                var row = $('<li class="template-upload fade upload-file">' +
                    '<div class="upload-progress-bar progress" style="width: 0%;"></div>' +
                    '<div class="upload-file-info">' +
                    '<div class="filename-col"><span class="filename"></span></div>' +
                    '<div class="filesize-col"><span class="size"></span></div>' +
                    '<div class="error-col"><span class="error field-validation-error"></span></div>' +
                    '<div class="actions-col">' +
                    '<button class="btn btn-xs btn-danger cancel removeFile" data-toggle="tooltip" data-placement="left" title="" data-original-title="Remove file">' +
                    '<i class="glyphicon glyphicon-ban-circle"></i> <span></span>' +
                    '</button> ' +
                    '<button class="btn btn-success start"><i class="glyphicon glyphicon-upload"></i> <span>Start</span></button>' +
                    '</div>' +
                    '</div>' +
                    '</li>');
                row.find('.filename').text(file.name);
                row.find('.size').text(o.formatFileSize(file.size));
                if (file.error) {
                    row.find('.error').text(file.error);
                }
                rows = rows.add(row);
            });
            return rows;
        },
        downloadTemplate: function (o) {
            var rows = $();
            $.each(o.files, function (index, file) {
                var row = $('<li class="template-download fade upload-file complete">' +
                    '<div class="upload-progress-bar progress" style="width: 100%;"></div>' +
                    '<div class="upload-file-info">' +
                    '<div class="filename-col"><span class="filename"></span> - <span class="size"></span></div>' +
                    '<div class="error-col"><span class="error"></span></div>' +
                    '</div>' +
                    '</li>');

                row.find('.size').text(o.formatFileSize(file.size));
                if (file.error) {
                    row.find('.filename').text(file.name);
                    row.find('.error').text(file.error);
                    row.removeClass('complete').addClass('error');
                } else {
                    row.find('.filename').text(file.name);
                }
                rows = rows.add(row);
            });
            return rows;
        }
    });

    $('#upload').bind('fileuploadprocessalways', function (e, data) {
        var currentFile = data.files[data.index];
        if (data.files.error && currentFile.error) {
            //console.log(currentFile.error);
            data.context.find(".start").prop('disabled', true);
            data.context.find('.error').text(currentFile.error);
            return;
        }
    });

    /*$(document, '.removeFile').on('show.bs.tooltip', function (e) {
        e.stopPropagation();
    }).on('hide.bs.tooltip', function (e) {
        e.stopPropagation();
    });*/

    $('#upload').bind('fileuploadadd', function (e, data) {
        setTimeout(function () {
            $('.removeFile').tooltip();
        }, 0);
        //$('.removeFile').tooltip();
        //console.log('add');
    })
        .bind('fileuploadprogress', function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        data.context.find('.progress').css('width', progress + '%');
        //console.log(progress);
    })
        .bind('fileuploadfail', function (e, data) {
        console.log('fail');
    }).bind('fileuploadstart', function (e) {
        console.log('start');
    })

});