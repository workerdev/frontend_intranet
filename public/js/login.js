/*const formlogin=document.querySelector('#form-login')

formlogin.addEventListener('submit',event=>{
    event.preventDefault()
      $.ajax({
         url: '/login',
         type: 'post',
         dataType: 'json',
         data: $("#form-login").serialize(),
         success: function(data) {
           console.log(data);
             if(data.status==200){
                 conosle.log(data)
             }
             if(data.status==401){
               $('#text-error').text(''+data.message);
             }
         },
         error:function (data) {
             console.log(data);
           var response=JSON.parse(data.responseText);
           $('#text-error').text(''+response.message);
         }

      });
})*/