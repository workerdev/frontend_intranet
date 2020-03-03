$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    //$('.modal').modal();
    // $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
    // $('select').material_select();

});
$(".dropdown-button").dropdown();
function remove(id) {
    swal({
        title: 'Eliminar Texto',
        text: "Esta seguro que desea elimianr este texto?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonText:'No',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then(function () {
        removeText(id)
    })
}

function removeText(id){
    $.ajax({
        url: '/text_delete',
        type: 'POST',
        dataType: 'json',
        data: {id:id},
        success: function(data) {
            //console.log(data);
            if(data.status==200){
                success('Eliminar página','La página se eliminado exitosamente')
                loadTable(data.result)
            }else{
                error('Error al eliminar el texto',''+data.message)
                $('#text').val('');
            }

        },
        error:function (data) {
            console.log(data);
        }

    });
}

function onPreloal() {
    $('#preload-content').css('background-color','#acece6');
    $('#preload-loader').css('background-color','#26a69a');
}

function offPreloal() {
    $('#preload-content').css('background-color','#FFF');
    $('#preload-loader').css('background-color','#FFF');
}
/*
 function deleteRow(id) {
 $('#'+id).remove();
 removeArray(id)
 loadTable();
 console.log(arraPages);
 }

 function  existPage(id) {
 var exist=false;
 for(var i=0;i<arraPages.length;i++){
 if(arraPages[i].id==id){
 exist=true; i=arraPages.length;
 }
 }
 return exist;
 }

 function removeArray(id) {
 for(var i=0;i<arraPages.length;i++){
 if(id==arraPages[i].id){
 arraPages.splice(i,1);
 i=arraPages.length;
 }
 }
 }*/

function loadTable(arraText) {
    var html="";
    for(var i=0;i<arraText.length;i++){
        //html=html+("<tr id='"+arraPages[i].id+"'><td>" + arraPages[i].page + "</td><td style='text-align: right;'><p id='costo'>30 bs</p></td><td style='text-align: right;'><p id='cantidad'>1</p></td><td  style='text-align: right;'><a href='#' onclick='add()' class=''><i class='material-icons'>add_circle_outline</i></a><a href='#' style='color:#ff9800' onclick='add()' class=''><i class='material-icons'>remove_circle_outline</i></a><a href='#' style='color:#f44336' onclick='deleteRow("+arraPages[i].id+")' class=''><i class='material-icons'>delete_forever</i></a></td></tr>");
        html=html+("<tr><td>" + arraText[i].text + "<td  style='text-align: right;'>" +
            "<a href='/text/edit?id="+arraText[i].id+"' style='color:#ff9800' class=''><i class='material-icons'>mode_edit</i></a>" +
            "<a href='#' style='color:#f44336' onclick='remove("+arraText[i].id+")' class=''><i class='material-icons'>delete_forever</i></a>" +
            "</td></tr>");
    }
    $('#table-text').html(html);
}

function error(title,description) {
    swal(
        ''+title+'',
        ''+description+'',
        'error'
    )
}

function success(title,description) {
    swal(
        ''+title+'',
        ''+description+'',
        'success'
    )
}


