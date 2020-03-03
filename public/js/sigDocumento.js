$('#btn_doc').click(function() {
    $('#op_docs').hide()
    listarInformacionDocumentada()
})

function listarInformacionDocumentada() {

    $('#infdocumentada').show()
    $('#tituloDocumentacion').text('Documentos - Informacion Documentada')
    axios.get('/listar_informacion_documentada')
        .then(function(response) {
            var rtback = $('#rt_infd').val();
            
            var datosInfDoc = response.data
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push(["<div class='btn btn-primary' data-idfc=" + response.data[i].id + ">Detalle Documentos</div>",
                    response.data[i].gerencia, response.data[i].area,
                    response.data[i].tipo_documento, response.data[i].codigo,
                    response.data[i].titulo_doc, response.data[i].vinculo_doc,
                    response.data[i].version, response.data[i].f_publicacion,
                    response.data[i].aprobado_por, response.data[i].carpeta_operativa,
                    rtback + response.data[i].vinculo_diagrama_flujo, response.data[i].cod_proceso
                ])
            }
            var tableInfDoc = $('#table_inf_documentada').DataTable({
                "createdRow": function(row, data, index) {
                    $('td', row).eq(0).click(function() {
                        detalleDocumento($('td', row).eq(0).children().data("idfc"));
                    });
                },
                "scrollX": true,
                scrollY: "320px",
                data: datosInfDoc,
                columns: [{
                        title: "",
                        data: "id",
                        orderable: false,
                        render: function(data) {
                            var a = '<div class="btn btn-primary btn-sm" data-idfc="' + data + '">Detalle</div>'
                            return a
                        }

                    },
                    { title: "TIPO DOCUMENTO", data: 'tipo_documento' },
                    { title: "CODIGO", data: 'codigo' },
                    { title: "TITULO DOCUMENTO", data: 'titulo_doc' },
                    {
                        title: "VINCULO DOCUMENTO",
                        data: 'vinculo_doc',
                        render: function(data) {
                            var url;
                            var a;
                            if (data == "" || data == null || data == "N/A") {
                                url = "#";
                                a = '<a class="btn btn-primary btn-sm" href="' + url + '"><i class="fas fa-file-text"></i> Ningún archivo </a>'
                            } else {
                                url = rtback + data;
                                a = '<a class="btn btn-primary btn-sm" target="_blank" href="' + url + '"><i class="fas fa-file-text"></i> Ver archivo </a>'
                            }
                            return a
                        }
                    },
                    { title: "VERSION", data: 'version' },
                    { title: "FECHA PUBLICACION", data: 'f_publicacion' },
                    { title: "GERENCIA", data: 'gerencia', orderable: false },
                    { title: "AREA", data: 'area' },                                                                                                    
                    { title: "APROBADO POR", data: 'aprobado_por'},
                    { title: "CODIGO PROCESO", data: 'cod_proceso'},
                    { title: "CARPETA OPERATIVA", data: 'carpeta_operativa' }
                    // {   title: "VINCULO DIAGRAMA FLUJO" , 
                    //     data: 'vinculo_diagrama_flujo',
                    //     render : function (data){
                    //         var url; var a;
                    //         if(data == "" || data == null || data == "N/A"){
                    //             url = "#";
                    //             a = '<a class="btn btn-primary btn-sm" href="'+ url +'"> Ver archivo </a>'
                    //         }else{ 
                    //             url = rtback + data;
                    //             a = '<a class="btn btn-primary btn-sm" target="_blank" href="'+ url +'"> Ver archivo </a>'
                    //         }
                    //         return a
                    //     }
                    // },
                    
                ]
            });
            yadcf.init(tableInfDoc, [{
                column_number: 1,
                select_type: 'select2',                                 
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }, {
                column_number: 7,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }, {
                column_number: 8,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos",
            }, {
                column_number: 2,
                select_type: 'select2',
                select_type_options: {
                    width: '100px',
                    dropdownAutoWidth: true,
                },
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }   
            ],
            {
                cumulative_filtering: true                
            })
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });
}

function detalleDocumento(idDoc) {
    axios.post('/detalle_informacion_documentada', {
            id: idDoc
        })
        .then(function(response) {
            var rtback = $('#rt_dfr').val();
            self = response.data

            var uri = self.documento.vinculo_archivo;
            var uric;
            var htmlb;
            if (uri == "" || uri == null || uri == "N/A") {
                $("#DOC_VINCULO_ARCHIVO").show();
                $("#DOC_VINCULO_ARCHIVO").prop('href', '#');
                $("#DOC_VINCULO_ARCHIVO").text('Sin Archivos');
            } else {
                uric = rtback + uri;
                $("#DOC_VINCULO_ARCHIVO").prop('href', uric);
                $("#DOC_VINCULO_ARCHIVO").prop('target', '_blank');
                $("#DOC_VINCULO_ARCHIVO").text('Ver archivo');

            }

            var urid = self.documento.vinculo_diagrama;
            var uridwc;
            var htmlc;
            if (urid == "" || urid == null || urid == "N/A") {
                uridwc = "#";
                $("#lnkdvd").remove();
                $("#DOC_VINCULO_DIAGRAMA").prop('href', '#');
                $("#DOC_VINCULO_DIAGRAMA").text('Sin Archivos');
            } else {
                uridwc = rtback + urid;
                $("#DOC_VINCULO_DIAGRAMA").prop('href', uridwc);
                $("#DOC_VINCULO_DIAGRAMA").prop('target', '_blank');
                $("#DOC_VINCULO_DIAGRAMA").text('Ver archivo');
            }

            $("#infdocumentada").hide();
            $("#formularios_inf_doc").show();
            // $("#doc_inf_documentada_form").show();
            // $("#doc_inf_documentada_fichaproceso").show();
            // $("#doc_inf_documentada_fichacargo").show();

            $("#DOC_CODIGO_DOCUMENTO").val(self.documento.codigo_documento);
            $("#DOC_CODIGO_PROCESO").val(self.documento.cod_proceso);
            $("#DOC_TIPO_DOCUMENTO").val(self.documento.tipo_documento);
            $("#DOC_TITULO_DOCUMENTO").val(self.documento.titulo_doc);
            $("#DOC_VERSION").val(self.documento.version);
            $("#DOC_FECHA_PUBLICACION").val(self.documento.f_publicacion);
            $("#DOC_APROBADO_POR").val(self.documento.aprobado_por);
            $("#DOC_CARPETA_OPERATIVA").val(self.documento.carpeta_operativa);
            /*$("#DOC_VINCULO_ARCHIVO").val(self.documento.vinculo_archivo);
            $("#DOC_VINCULO_DIAGRAMA").val(self.documento.vinculo_diagrama);*/
            //ficha proceso
            $("#DOC_FP_ID").val(self.fichaproceso[0].id);
            $("#DOC_FP_ID_AREA").val(self.fichaproceso[0].id_area);
            $("#DOC_FP_CODIGO_PROCESO").val(self.fichaproceso[0].cod_proceso);
            $("#DOC_FP_NOMBRE").val(self.fichaproceso[0].nombre);
            $("#DOC_FP_OBJETIVO_PROCESO").val(self.fichaproceso[0].objetivo_proceso);
            $("#DOC_FP_VIGENTE").val(self.fichaproceso[0].vigente);
            $("#DOC_FP_VERSION").val(self.fichaproceso[0].version);
            $("#DOC_FP_FECHA_EMISION").val(self.fichaproceso[0].fecha_emision);
            $("#DOC_FP_ENTRADAS_REQUERIDAS").val(self.fichaproceso[0].entradas_requeridas);
            $("#DOC_FP_SALIDAS_ESPERADAS").val(self.fichaproceso[0].salidas_esperadas);
            $("#DOC_FP_RECURSOS_NECESARIOS").val(self.fichaproceso[0].recursos_necesarios);
            //gas
            $("#DOC_GAS_ID_AREA").val(self.gerenciareasector[0].id_area);
            $("#DOC_GAS_GERENCIA").val(self.gerenciareasector[0].gerencia);
            $("#DOC_GAS_AREA").val(self.gerenciareasector[0].area);
            $("#DOC_GAS_SECTOR").val(self.gerenciareasector[0].sector);
            $("#DOC_GAS_RESPONSABLE").val(self.gerenciareasector[0].responsable);
            $("#DOC_GAS_VIGENTE").val(self.gerenciareasector[0].vigente);

            var dataset = [];
            for (var i = 0; i < self.fichacargo.length; i++) {
                dataset.push([self.fichacargo[i].nombre_cargo,
                    self.fichacargo[i].codigo_documento
                ])
            }
            $('#table_inf_documentada_fc').DataTable({
                data: dataset,
                dom: 't',
                columns: [
                    { title: "NOMBRE" },
                    { title: "CODIGO" }
                ]
            });
        })
        .catch(function(error) {
            // handle error
            console.log(error);

        })
        .then(function() {
            // always executed
        });
}