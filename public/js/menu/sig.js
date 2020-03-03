function tituloDocumentacion(){
    $('#tituloDocumentacion').text('INFORMACIÓN SISTEMA INTEGRADO DE GESTIÓN')
}
$('#button-back').click(function(){
    menuProcesos()
    menuDocumentos()
    menuFichaCargo()
    menuAuditorias()
})
function menuProcesos(){
    opcProcess = document.getElementById("op_process").style.display
    opcDocs = document.getElementById("op_docs").style.display
    
    /////
    procMenu = document.getElementById("lista_ord").style.display
    procMenu1 = document.getElementById("seguimiento").style.display
    //crocm 
    crocmMenu = document.getElementById("lista_ord_crocm").style.display
    crocmMenu1 = document.getElementById("seguimiento_crocm").style.display
    if(opcProcess==""){
        $("#op_process").hide();
        $("#opciones").show();
        $("#button-back").hide();
        tituloDocumentacion();
    }    
    if(opcDocs ==""){
        $("#op_docs").hide();
        $("#opciones").show();
        $("#button-back").hide();
        tituloDocumentacion();
    }
     
    if(procMenu == ""){  
        tituloDocumentacion();
        mostrar_procesos();
         var table = $('#table_procesos').DataTable();
         table.destroy();
        $("#lista_ord").hide();
    }
    if(procMenu1 == ""){       
        tituloDocumentacion(); 
        mostrar_procesos();
         var tableseguimiento = $('#table_seguimiento').DataTable();
         tableseguimiento.destroy();
         $('#table_seguimiento').empty();
        $("#seguimiento").hide();
    }
    if(crocmMenu1 == ""){
        tituloDocumentacion();
        mostrar_procesos();
         var tableseguimientocrocm = $('#table_seguimiento_crocm').DataTable();
         tableseguimientocrocm.destroy();
         $('#table_seguimiento_crocm').empty();
        $("#seguimiento_crocm").hide();
    }
    if(crocmMenu == ""){
        tituloDocumentacion();
        mostrar_procesos();
         var tablecrocm = $('#table_procesos_crocm').DataTable();
         tablecrocm.destroy();
        $("#lista_ord_crocm").hide();
    }
    if(document.getElementById('ficha_proceso').style.display == ""){
        $('#ficha_proceso').hide();
        $('.bose-pagination').remove();
        $('.bose-pagination2').remove();
        $('.bose-pagination3').remove();
        $('#lista_ord').show();
    }
    if(document.getElementById('detalle_indicador').style.display == ""){
        $('#detalle_indicador').hide();
        indtable = $('#IND_TABLE').DataTable();
        indtable.destroy();
        $('#IND_TABLE').empty();
        $('#lista_ord').show();
    }
    if(document.getElementById('detalle_crocm').style.display == ""){
        $('#detalle_crocm').hide();  
        tablesegcrocm = $('#CROCM_TABLE').DataTable();
        tablesegcrocm.destroy();
        $('#CROCM_TABLE').empty();
        $('#lista_ord_crocm').show();
    }

}
function menuDocumentos(){
    //Inf doc 
    if(document.getElementById("infdocumentada").style.display == ""){
        mostrar_docs()
       tableinfdoc = $('#table_inf_documentada').DataTable()
       tableinfdoc.destroy();
       $('#table_inf_documentada').empty();     
        $("#infdocumentada").hide()
    }
    if(document.getElementById("formularios_inf_doc").style.display == ""){
        console.log(' le dio atras ')
         
        let tableinfdoc = $('#table_inf_documentada').DataTable()
        tableinfdoc.destroy();        
        $('#table_inf_documentada').empty();         
        let tableinfdocfc = $('#table_inf_documentada_fc').DataTable()
        tableinfdocfc.destroy();        
        $('#table_inf_documentada_fc').empty(); 
        listarInformacionDocumentada()          
        $('#infdocumentada').show()    
        $("#formularios_inf_doc").hide()
    }

    //Formularios
    if(document.getElementById("formulario").style.display == ""){
        mostrar_docs()
        tableform = $('#table_docfrm').DataTable()
        tableform.destroy();
        $('#table_docfrm').empty();
        $('#formulario').hide();
        tituloDocumentacion();
    }
    if(document.getElementById("formdocs").style.display == ""){
        tableform = $('#table_docfrm').DataTable()
        tableform.destroy();
        $('#table_docfrm').empty();
        listarDocFormulario();
        $('#formulario').show();
        $('#formdocs').hide();

    }

    //Doc Externo
    if(document.getElementById("doclegal").style.display == ""){
        mostrar_docs()
        tabledoclegal = $('#table_docleg').DataTable();
        tabledoclegal.destroy();
        $('#table_docleg').empty();
        $('#doclegal').hide();
        tituloDocumentacion();
    }
    //Doc Proceso
    if(document.getElementById("det_docproc").style.display == ""){
        mostrar_docs()       
        $('.bose-pagination').remove();
        $('.bose-pagination2').remove();
        $('#det_docproc').hide();
        tituloDocumentacion();
    }
    //Baja
    if(document.getElementById("bajadoc").style.display == ""){
        mostrar_docs()       
        tablebajadoc = $('#table_bajadoc').DataTable();
        tablebajadoc.destroy();
        $('#table_bajadoc').empty
        $('#bajadoc').hide();
        tituloDocumentacion();
    }

}
function menuFichaCargo(){
    opcFc = document.getElementById("list_fc").style.display
    if(opcFc ==""){
        $("#list_fc").hide();
        $("#opciones").show();
        var tablefc = $('#table_fcdata').DataTable();
        tablefc.destroy();
        $('#table_fcdata').empty(); 
        $("#button-back").hide();
        tituloDocumentacion();
    }   
    if(document.getElementById('detalle_fichacargo').style.display == ""){
       $('#detalle_fichacargo').hide()
       fc_table = $('#FICHACARGO_TABLE').DataTable();
       fc_table.destroy()     ;
       $('#FICHACARGO_TABLE').empty();     
       $('#list_fc').show()
    }
}
function menuAuditorias(){
    if(document.getElementById('op_auds').style.display == ""){        
        $('#op_auds').hide();
        $('#opciones').show();
        $("#button-back").hide();
        tituloDocumentacion()
    }
    //Auditorias y hallazgtos 
    if(document.getElementById('audhlg').style.display == ""){
        $('#audhlg').hide()
        let audTable = $('#table_audhlg').DataTable()
        audTable.destroy()
        $('#table_audhlg').empty()
        $('#op_auds').show()
    }
    //Auditorias y hallazgtos  - detalle 
    if(document.getElementById('aud-det').style.display == ""){
        $('#aud-det').hide()
        let list_aheq = $('#list_aheq').DataTable()
        let list_ahlg = $('#list_ahlg').DataTable()
        list_aheq.destroy()
        list_ahlg.destroy()
        $('#list_aheq').empty()
        $('#list_ahlg').empty()
        $('#audhlg').show()
    }

    //ACCIONES 
    if(document.getElementById('acn').style.display == ""){
        $('#acn').hide()
        let audTable = $('#table_acn').DataTable()
        audTable.destroy()
        $('#table_acn').empty()
        $('#op_auds').show()
    }
     //HALLAZGOS
     if(document.getElementById('hlg').style.display == "" ){
        $('#hlg').hide()        
        let audTable = $('#table_hlg').DataTable()
        audTable.destroy()
        $('#table_hlg').empty()        
        $('#op_auds').show()
    }
    //ACCIONES - HALLAZGOS
    if(document.getElementById('hlg-det').style.display == ""){
        if(document.getElementById('hlg-det').dataset.opcion == "accion" || document.getElementById('hlg-det').dataset.opcion == "accion2" ){            
            $('#hlg-det').hide()            
            let list_acn = $('#list_acn').DataTable();
            list_acn.destroy();
            $('#list_acn').empty();
            $('#acn').show()
        }
        if(document.getElementById('hlg-det').dataset.opcion == "hallazgo"){             
            console.log('hallazgo');
            console.log(document.getElementById('hlg').style.display)
            $('#hlg-det').hide();           
            let list_acn = $('#list_acn').DataTable();
            list_acn.destroy();
            $('#list_acn').empty();
            console.log('entro aca ?')                  
            $('#hlg').show();     
            $('#op_auds').hide();
            $('#hlg').show();   
            console.log('entro aca FIN')                  
            console.log(document.getElementById('hlg').style.display)
        }
        if(document.getElementById('hlg-det').dataset.opcion == "detalle_hallazgo"){             
            console.log('hallazgo');
            console.log(document.getElementById('hlg').style.display)
            $('#hlg-det').hide();           
            let list_acn = $('#list_acn').DataTable();
            list_acn.destroy();
            $('#list_acn').empty();
            console.log('entro aca ?')                  
            $('#aud-det').show();                             
            console.log('entro aca FIN detalle hallazgo')                  
            console.log(document.getElementById('hlg').style.display)
        }                 
    }
   
    //CROCM
    if(document.getElementById('crocm').style.display == ""){
        $('#crocm').hide()      
        $('#opciones').show()
        $('#button-back').hide()

    }

    if(document.getElementById("aud-cromins").style.display == ""){
            $('#aud-cromins').hide()
            $('#crocm').show()
            tituloDocumentacion()
    }
    if(document.getElementById("crocm-con").style.display == ""){
        $('#crocm-con').hide()
        let table_crocm_con = $('#tb_concrocm').DataTable()
        table_crocm_con.destroy()
        $('#tb_concrocm').empty()
        $('#crocm').show()
    }
    if(document.getElementById("crocmaud-det").style.display == ""){
        $('#crocmaud-det').hide()
        let table_crocm_con_seg = $('#tb_segcro').DataTable()
        table_crocm_con_seg.destroy()
        $('#tb_segcro').empty()
        $('#crocm-con').show()
    }
    
    //
    //FORTALEZAS
    if(document.getElementById('fortaleza').style.display == ""){
        $('#fortaleza').hide()
        let forTable = $('#tb_fortaleza').DataTable()
        forTable.destroy()
        $('#tb_fortaleza_wrapper').empty()
        $('#op_auds').show()
    }
    // VERIFICACION
    if(document.getElementById('verif-ef').style.display == ""){
        $('#verif-ef').hide()
        let verifTable = $('#tb_verif_ef').DataTable()
        verifTable.destroy()
        $('#tb_verif_ef').empty()
        $('#op_auds').show()
        $('#tituloDocumentacion').text('Auditorias')
    }
    //
    

    
}