$(document).ready(function(){
  let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
  let mail = $('#mail');
  let error = $('#error');
  let errorEmpty = $('#errorEmpty')

  mail.on('blur', function(e){
    e.preventDefault();
    if(mail.val() !== ''){
      if(mail.val().search(pattern) === 0){
        errorEmpty.removeClass('invalid-email');
        error.removeClass('invalid-email');
      }else{
        errorEmpty.removeClass('invalid-email');
        error.addClass('invalid-email');
      }
    }else{
      error.removeClass('invalid-email');
      errorEmpty.addClass('invalid-email');
    }
  });
});
