$("#btn_auds").click(function () {
    $("#opciones").hide();
    $("#op_auds").show();
    $("#button-back").show();
});

$("#iconito").click(function () {
    alert("hola");
});

$("#btn_audhlg").click(audAuditoriaYHallazgos)


function del_tbcont(idtable) {
    if ($.fn.DataTable.isDataTable('#'+idtable)) {
        var tabledel = $('#'+idtable).DataTable();
        tabledel.clear().draw();
        tabledel.destroy();
        //$('#'+idtable).empty();
    }
}

function audAuditoriaYHallazgos() {
    $("#op_auds").hide();
    $("#audhlg").show();
    $('#spn-loadtb').show()
    $('#tituloDocumentacion').text('Auditoria y Hallazgos')
    del_tbcont('table_audhlg')

    axios.get('/lista_audhlg')
        .then(function (response) {
            console.log(response.data)

            var table_auditoria = $('#table_audhlg').DataTable({
                "scrollX": true,
                scrollY: "350px",
                data: response.data,
                order: [[4, "desc"], [3, "desc"], [0, "asc"], [1, "asc"], [2, "asc"]],
                columns: [
                    { title: "GERENCIA", data : function(data) {
                            return format_sector(data.sectores, 'gerencia')
                        }
                    },
                    { title: "AREA", data : function(data) {
                            return format_sector(data.sectores, 'area')
                        }
                    },
                    {
                        title: "ID",
                        data: 'id',
                        render: function (data) {
                            var ahl = '<button class="btn boton-id">' + data + '</button>'
                            return ahl
                        }
                    },
                    { title: "AÑO", data: 'anio' },
                    { title: "FECHA PROGRAMADA", data: 'f_programada' },
                    { title: "FECHA INICIO", data: 'f_inicio' },
                    { title: "FECHA FIN", data: 'f_fin' },
                    { title: "ALCANCE", data: 'alcance' },
                    { title: "CONCLUSIONES", data: 'conclusiones' },
                    { title: "TIPO AUDITORIA", data: 'tipo_auditoria' }
                ],
                initComplete: function () {
                    $('#spn-loadtb').hide()
                }
            });


            /*yadcf.init(table_auditoria, [
                {
                    column_number: 0,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }, {
                    column_number: 1,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }
            ])*/

            $(".lida").parent().css({ "cursor": "pointer" });
            $(".lida").parent().attr({
                'data-toggle': 'tooltip',
                'data-placement': 'right',
                'title': 'Detalle auditoría y hallazgo'
            });
            $('#table_audhlg tbody').on('click', 'td', function () {

                // console.log( table_crocm_seg.cell(this).index().column);
                // console.log(this);
                let valor = table_auditoria.cell(this).data();

                if (table_auditoria.cell(this).index().column == 2) {
                    detalle_audhlg(valor)
                }

                // let valorcelda = table_crocm_seg.cell(this).index().column
                // if (valorcelda == 3 || valorcelda == 4 ){
                //     let fila = table_crocm_seg.cell(this).index().row   
                //     console.log(fila)         
                //     alert( table_crocm_seg.cell(fila,3).data());
                // 
                //}
            });
            // $("tbody", "#table_audhlg").on("click", "td",function() {
            //     if($(this).css('cursor') == 'pointer') detalle_audhlg(this.innerText);
            // });

        })
        .catch(function (error) {
            // handle error
            $('#spn-loadtb').hide()
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}


function detalle_audhlg(id_aud) {
    // console.log(id_aud)
    $('.det-aud').val('')
    del_tbcont('list_ahlg')
    del_tbcont('list_aheq')

    axios.post('/detalle_audhlg', {
        idaud: id_aud
    })
        .then(function (response) {
            self = response.data
            console.log(self)
            $("#audhlg").hide();
            $("#aud-det").show();

            $("#audh_id_auditoria").val(self.auditoria.id_auditoria);
            $("#audh_id_area").val(self.auditoria.id_proceso);
            $("#audh_tipo_auditoria").val(self.auditoria.tipo_auditoria);
            $("#audh_f_programada").val(self.auditoria.f_programada);
            $("#audh_duracion_estimada_horas").val(self.auditoria.duracion_estimada_horas);
            $("#audh_lugar_de_auditoria").val(self.auditoria.lugar_de_auditoria);
            $("#audh_alcance").val(self.auditoria.alcance);
            $("#audh_objetivos").val(self.auditoria.objetivos);
            $("#audh_fecha_hora_inicio").val(self.auditoria.fecha_hora_inicio);
            $("#audh_fecha_hora_fin").val(self.auditoria.fecha_hora_fin);
            $("#audh_responsable_registro").val(self.auditoria.jefe_sup_coord);
            $("#audh_fecha_registro").val(self.auditoria.fecha_registro);
            $("#audh_conclusiones").val(self.auditoria.conclusiones);

            if (self.equipo.length > 0) {
                $("#ahe_id_auditoria").val(self.equipo[0].id_auditoria);
                $("#ahe_item_auditor").val(self.equipo[0].item_auditor);
                $("#ahe_tipo_auditor").val(self.equipo[0].tipo_auditor);
            }

            var dataset_hlg = self.hallazgo;
            // console.log(dataset)
            var detalleHallazgo = $('#list_ahlg').DataTable({
                data: dataset_hlg,
                columns: [
                    { title: "ID. HALLAZGO", data: 'id_hallazgo' },
                    { title: "TIPO HALLAZGO", data: 'tipo_hallazgo' },
                    {
                        title: "ORDINAL",
                        data: "ordinal",
                        render: function (data) {
                            var ahl = '<button class="btn boton-id">' + data + '</button>'
                            return ahl
                        }
                    },
                    { title: "TITULO", data: 'titulo' },
                    { title: "DESCRIPCION", data: 'descripcion' }
                ]
            });
            $(".lidh").parent().css({ "cursor": "pointer" });
            $(".lidh").parent().attr({
                'data-toggle': 'tooltip',
                'data-placement': 'right',
                'title': 'Detalle hallazgo'
            });
            // $("tbody", "#list_ahlg").on("click", "td",
            //     function() {
            //         if($(this).css('cursor') == 'pointer') detalle_hallazgo(this.innerText);
            //     });
            $('#list_ahlg tbody').on('click', 'td', function () {

                // console.log( table_crocm_seg.cell(this).index().column);
                // console.log(this);
                //let columna = detalleHallazgo.cell(this).column; 
                let fila = detalleHallazgo.cell(this).index().row;
                let valor = detalleHallazgo.cell(fila, 0).data();
                // console.log(valor)
                if (detalleHallazgo.cell(this).index().column == 2) {
                    detalle_hallazgo(valor)
                    document.getElementById("hlg-det").dataset.opcion = "detalle_hallazgo"
                }

                // let valorcelda = table_crocm_seg.cell(this).index().column
                // if (valorcelda == 3 || valorcelda == 4 ){
                //     let fila = table_crocm_seg.cell(this).index().row   
                //     console.log(fila)         
                //     alert( table_crocm_seg.cell(fila,3).data());
                // 
                //}
            });
            var dataset_eqp = self.equipo;
            
            $('#list_aheq').DataTable({
                data: dataset_eqp,
                columns: [
                    { title: "ITEM", data: 'item' },
                    { title: "APELLIDOS NOMBRES", data: 'apellidos_nombres' },
                    { title: "VIGENTE", data: 'vigente' }
                ]
            });
            var table = $('#list_aheq').DataTable();
            $('#list_aheq tbody').on('click', 'tr', function () {
                var data = table.row(this).data();
                $("#ahe_id_auditoria").val(data.id_auditoria);
                $("#ahe_item_auditor").val(data.item_auditor);
                $("#ahe_tipo_auditor").val(data.tipo_auditor);
            });

            $("#ul_sectors").empty()
            $(".bose-pagination").remove()
            // console.log(response.data)
            var sectores = self.sectores
            for (i = 0; i < sectores.length; i++) {
                $("#ul_sectors").append("<li>\n" +
                    "  <fieldset class=\"name\">\n" +
                    "    <div class=\"row p-3\">\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-2\">ID AREA</label>\n" +
                    "          <div class=\"col-sm-10\">\n" +
                    "            <input id=\"idprv-frm\" class=\"form-control cod_doc_1\" type=\"text\" value=\"" + sectores[i].id_area + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-2\">GERENCIA</label>\n" +
                    "          <div class=\"col-sm-10\">\n" +
                    "            <input class=\"form-control cod_proc_1\" type=\"text\" value=\"" + sectores[i].gerencia + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-2\">AREA</label>\n" +
                    "          <div class=\"col-sm-10\">\n" +
                    "            <input class=\"form-control tipo_doc_1\" type=\"text\" value=\"" + sectores[i].area + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-2\">SECTOR</label>\n" +
                    "          <div class=\"col-sm-10\">\n" +
                    "            <input class=\"form-control tit_doc_1\" type=\"text\" value=\"" + sectores[i].sector + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-2\">RESPONSABLE</label>\n" +
                    "          <div class=\"col-sm-10\">\n" +
                    "            <input class=\"form-control ver_vig_1\" type=\"text\" value=\"" + sectores[i].responsable + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-2\">VIGENTE</label>\n" +
                    "          <div class=\"col-sm-10\">\n" +
                    "            <input class=\"form-control fec_pub_1\" type=\"text\" value=\"" + sectores[i].vigente + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  </fieldset>\n" +
                    "</li>")


            }

            Pagination.init('list-sectors', {
                bosePagination: {
                    page: 1
                }
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}


function detalle_hallazgo(idhlg) {
    $('.det-hlg').val('')
    del_tbcont('list_acn')

    axios.post('/detalle_hallazgo', {
        id: idhlg
    })
        .then(function (response) {
            self = response.data
            console.log(self)
            $("#aud-det").hide();
            $("#hlg").hide();
            // console.log(console.log(document.getElementById('hlg').style.display))
            $("#acn").hide();
            $("#hlg-det").show();

            $("#hlg_id_hallazgo").val(self.hallazgo.id_hallazgo);
            $("#hlg_id_auditoria").val(self.hallazgo.id_auditoria);
            $("#hlg_tipo_hallazgo").val(self.hallazgo.tipo_hallazgo);
            $("#hlg_ordinal_hallazgo").val(self.hallazgo.ordinal_hallazgo);
            $("#hlg_titulo_hallazgo").val(self.hallazgo.titulo_hallazgo);
            $("#hlg_descripcion_hallazgo").val(self.hallazgo.descripcion_hallazgo);
            $("#hlg_evidencia_del_hallazgo").val(self.hallazgo.evidencia_del_hallazgo);
            $("#hlg_documento_del_hallazgo").val(self.hallazgo.documento_del_hallazgo);
            $("#hlg_punto_iso_del_hallazgo").val(self.hallazgo.punto_iso_del_hallazgo);
            $("#hlg_impacto").val(self.hallazgo.impacto);
            $("#hlg_probabilidad").val(self.hallazgo.probabilidad);
            $("#hlg_analisis_causa_raiz").val(self.hallazgo.analisis_causa_raiz);
            $("#hlg_recomendaciones").val(self.hallazgo.recomendaciones);
            $("#hlg_cargo_del_auditado").val(self.hallazgo.cargo_del_auditado);
            $("#hlg_nombre_del_auditado").val(self.hallazgo.nombre_del_auditado);
            $("#hlg_responsable_registro").val(self.hallazgo.responsable_registro);
            $("#hlg_fecha_registro").val(self.hallazgo.fecha_registro);

            var dataset = self.accion;
            $('#list_acn').DataTable({
                data: dataset,
                columns: [
                    { title: "ESTADO", data: 'estado' },
                    { title: "ID. ACCION", data: 'id_accion' },
                    { title: "ORDINAL ACCION", data: 'ordinal_accion' },
                    { title: "ACCION", data: 'accion' },
                    { title: "F. IMPLEMENTACION", data: 'f_implementacion' },
                    { title: "RESPONSABLE", data: 'responsable' }
                ]
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}

//HALLAZGOS
$("#btn_hlg").click(audHallazgos)

function audHallazgos() {
    $("#op_auds").hide();
    $("#hlg").show();
    $('#spn-loadtb').show()
    del_tbcont('table_hlg')

    axios.get('/lista_hallazgo')
        .then(function (response) {
            var dataset = response.data;
            console.log(dataset)
            
            var table_hlg = $('#table_hlg').DataTable({
                "scrollX": true,
                /*initComplete: function () {
                    this.api().columns([0, 1]).every(function () {
                        var column = this;
                        var select = $('<select><option value="">Todas </option></select>')
                            .appendTo($(column.footer()).empty())
                            .on('change', function () {
                                var val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                );
                                column
                                    .search(val ? '^' + val + '$' : '', true, false)
                                    .draw();
                            });

                        column.data().unique().sort().each(function (d, j) {
                            select.append('<option value="' + d + '">' + d + '</option>')
                        });
                    });
                },*/
                data: dataset,
                columns: [
                    { title: "GERENCIA", data : function(data) {
                            return format_sector(data.sectores, 'gerencia')
                        }
                    },
                    { title: "AREA", data : function(data) {
                            return format_sector(data.sectores, 'area')
                        }
                    },
                    { title: "ID. AUDITORIA", data: 'id_auditoria' },
                    { title: "AÑO", data: 'anio' },
                    { title: "FECHA PROGRAMADA", data: 'f_programada' },
                    {
                        title: "ID. HALLAZGO",
                        data: 'id_hallazgo',
                        render: function (data) {
                            var ahl = '<button class="btn boton-id">' + data + '</button>'
                            return ahl
                        }
                    },
                    {
                        title: "ORDINAL",
                        data: 'ordinal',
                        render: function (data) {
                            var ahl = '<button class="btn boton-id">' + data + '</button>'
                            return ahl
                        }
                    },
                    { title: "TIPO HALLAZGO", data: 'tipo_hallazgo' },
                    { title: "TITULO", data: 'titulo' },
                    { title: "DESCRIPCION", data: 'descripcion' }
                ],
                "order": [[ 4, "desc" ], [ 3, "desc" ], [ 0, "asc" ], [ 1, "asc" ], [ 2, "asc" ]],
                initComplete: function () {
                    $('#spn-loadtb').hide()
                }
            });

            $('#table_hlg tbody').on('click', 'td', function () {

                // console.log( table_crocm_seg.cell(this).index().column);
                // console.log(this);
                let tablehlg = table_hlg.cell(this).data();
                //alert(table_hlg.cell(this).index().column)
                let fila = table_hlg.cell(this).index().row
                if (table_hlg.cell(this).index().column == 5 || table_hlg.cell(this).index().column == 6) {
                    let valor = table_hlg.cell(fila, 5).data()
                    detalle_hallazgo(valor)
                    document.getElementById('hlg-det').dataset.opcion = "hallazgo";
                }

                // let valorcelda = table_crocm_seg.cell(this).index().column
                // if (valorcelda == 3 || valorcelda == 4 ){
                //     let fila = table_crocm_seg.cell(this).index().row   
                //     console.log(fila)         
                //     alert( table_crocm_seg.cell(fila,3).data());
                // 
                //}
            });
        })
        .catch(function (error) {
            // handle error
            $('#spn-loadtb').hide()
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}

//TABLE ACCIONES
$("#btn_acn").click(audAcciones)

function audAcciones() {
    $("#op_auds").hide();
    $("#acn").show();
    $('#spn-loadtb').show()
    del_tbcont('table_acn')

    axios.get('/lista_accion')
        .then(function (response) {
            console.log(response.data)
            var dataset = response.data;

            var table_acn = $('#table_acn').DataTable({
                "scrollX": true,
                scrollY: "350px",
                data: dataset,
                columns: [
                    { title: "GERENCIA", data : function(data) {
                            return format_sector(data.sectores, 'gerencia')
                        }
                    },              
                    { title: "AREA", data : function(data) {
                            return format_sector(data.sectores, 'area')
                        }
                    },
                    {
                        title: "ID. HALLAZGO",
                        data: 'id_hallazgo',
                        render: function (data) {
                            var ahl = '<button class="btn boton-id">' + data + '</button>'
                            return ahl
                        }
                    },
                    {
                        title: "ORDINAL HALLAZGO",
                        data: 'ordinal_hallazgo',
                        render: function (data) {
                            var ahl = '<button class="btn boton-id">' + data + '</button>'
                            return ahl
                        }
                    },
                    { title: "TITULO", data: 'titulo' },
                    { title: "DESCRIPCION", data: 'descripcion' },
                    
                    {
                        title: "ID. ACCION",
                        data: 'id_accion',
                        render: function (data) {
                            var acnl = '<button class="btn button-id">' + data + '</button>'
                            return acnl
                        }
                    },
                    {
                        title: "ORDINAL ACCION",
                        data: 'ordinal_accion',
                        render: function (data) {
                            var acnl = '<button class="btn button-id">' + data + '</button>'
                            return acnl
                        }
                    },
                    { title: "ACCION", data: 'accion' },
                    { title: "F. IMPLEMENTACION", data: 'f_implementacion' },
                    { title: "RESPONSABLE", data: 'responsable' },
                    { title: "ESTADO", data: 'estado' }
                ],
                "order": [[ 9, "desc" ], [ 0, "asc" ], [ 1, "asc" ]],
                initComplete: function () {
                    $('#spn-loadtb').hide()
                }
            });
            /*yadcf.init(table_acn, [
                {
                    column_number: 0,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }, {
                    column_number: 1,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }, {
                    column_number: 2,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos",
                }, {
                    column_number: 3,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }
            ],{
                cumulative_filtering: true                
            })*/
            $('#table_acn tbody').on('click', 'td', function () {

                // console.log( table_crocm_seg.cell(this).index().column);
                // console.log(this);
                let valor = table_acn.cell(this).data();
                let fila = table_acn.cell(this).index().row

                if (table_acn.cell(this).index().column == 2 || table_acn.cell(this).index().column == 3) {
                    console.log('n-accion / hallazgo')
                    let idHallazgo = table_acn.cell(fila, 2).data()
                    detalle_hallazgo(idHallazgo)
                    document.getElementById('hlg-det').dataset.opcion = "accion2"
                }
                if (table_acn.cell(this).index().column == 6 || table_acn.cell(this).index().column == 7) {
                    console.log('accion/hallazgo')
                    let idAccion = table_acn.cell(fila, 6).data()
                    detalle_hlgacn(idAccion)
                }


                // let valorcelda = table_crocm_seg.cell(this).index().column
                // if (valorcelda == 3 || valorcelda == 4 ){
                //     let fila = table_crocm_seg.cell(this).index().row   
                //     console.log(fila)         
                //     alert( table_crocm_seg.cell(fila,3).data());
                // 
                //}
            });
            /*
            $(".idhl").parent().click(function () {
                alert($('.idhl').attr('id'));
                //$("#contattaci").trigger('click');
            });*/
        })
        .catch(function (error) {
            // handle error
            $('#spn-loadtb').hide()
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}


function detalle_hlgacn(idacn) {
    $('.det-hlg').val('')
    del_tbcont('list_acn')

    axios.post('/detalle_hlgacn', {
        id: idacn
    })
        .then(function (response) {
            self = response.data
            console.log(self)
            $("#acn").hide();
            $("#hlg-det").show();
            document.getElementById('hlg-det').dataset.opcion = "accion";
            $("#hlg_id_hallazgo").val(self.hallazgo.id_hallazgo);
            $("#hlg_id_auditoria").val(self.hallazgo.id_auditoria);
            $("#hlg_tipo_hallazgo").val(self.hallazgo.tipo_hallazgo);
            $("#hlg_ordinal_hallazgo").val(self.hallazgo.ordinal_hallazgo);
            $("#hlg_titulo_hallazgo").val(self.hallazgo.titulo_hallazgo);
            $("#hlg_descripcion_hallazgo").val(self.hallazgo.descripcion_hallazgo);
            $("#hlg_evidencia_del_hallazgo").val(self.hallazgo.evidencia_del_hallazgo);
            $("#hlg_documento_del_hallazgo").val(self.hallazgo.documento_del_hallazgo);
            $("#hlg_punto_iso_del_hallazgo").val(self.hallazgo.punto_iso_del_hallazgo);
            $("#hlg_impacto").val(self.hallazgo.impacto);
            $("#hlg_probabilidad").val(self.hallazgo.probabilidad);
            $("#hlg_analisis_causa_raiz").val(self.hallazgo.analisis_causa_raiz);
            $("#hlg_recomendaciones").val(self.hallazgo.recomendaciones);
            $("#hlg_cargo_del_auditado").val(self.hallazgo.cargo_del_auditado);
            $("#hlg_nombre_del_auditado").val(self.hallazgo.nombre_del_auditado);
            $("#hlg_responsable_registro").val(self.hallazgo.responsable_registro);
            $("#hlg_fecha_registro").val(self.hallazgo.fecha_registro);

            var dataset = []
            dataset.push(self.accion)
            console.log(dataset)

            $('#list_acn').DataTable({
                data: dataset,
                columns: [
                    { title: "ESTADO", data: 'estado' },
                    { title: "ID. ACCION", data: 'id_accion' },
                    { title: "ORDINAL ACCION", data: 'ordinal_accion' },
                    { title: "ACCION", data: 'accion' },
                    { title: "F. IMPLEMENTACION", data: 'f_implementacion' },
                    { title: "RESPONSABLE", data: 'responsable' }
                ]
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}


$("#btn_veref").click(audVerEficacia)


function sortArray(array, property, direction) {
    direction = direction || 1;
    array.sort(function compare(a, b) {
        let comparison = 0;
        if (a[property] > b[property]) {
            comparison = 1 * direction;
        } else if (a[property] < b[property]) {
            comparison = -1 * direction;
        }
        return comparison;
    });
    return array; // Chainable
}

function audVerEficacia() {
    $("#op_auds").hide();
    $("#verif-ef").show();
    $('#spn-loadtb').show()
    $("#tituloDocumentacion").text("VERIFICACION EFICACIA")
    del_tbcont('tb_verif_ef')

    axios.get('/lista_eficacia')
        .then(function (response) {
            console.log(response.data)
            var dataset = response.data
            
            var table_verif = $('#tb_verif_ef').DataTable({
                "scrollX": true,
                scrollY: "380px",
                data: dataset,
                columns: [          
                    { title: "GERENCIA", data : function(data) {
                            gerencias = data.sectores
                            sortArray(gerencias, "gerencia") 
                            return format_sector(gerencias, 'gerencia')
                        }
                    },              
                    { title: "AREA", data : function(data) {
                            areas = data.sectores
                            sortArray(areas, "area") 
                            return format_sector(areas, 'area')
                        }
                    },
                    { title: "ID. HALLAZGO", data: "id_hallazgo" },
                    { title: "ORDINAL HALLAZGO", data: "ordinal_hallazgo" },
                    { title: "TITULO HALLAZGO", data: "titulo_hallazgo" },
                    {
                        title: "DESCRIPCION", data: "descripcion",
                        render: function (data) {
                            var a = '<div class="row-cont">' + data + '</div>'
                            return a
                        }
                    },
                    { title: "ID. ACCION", data: "id_accion" },
                    { title: "ORDINAL ACCION", data: "ordinal_accion" },
                    {
                        title: "ACCION", data: "accion", render: function (data) {
                            var a = '<div class="row-cont">' + data + '</div>'
                            return a
                        }
                    },
                    { title: "EFICAZ SI NO", data: "eficaz_si_no" },
                    { title: "RESULTADO", data: "resultado" },
                    { title: "FECHA VERIFICACION", data: "f_verificacion" },
                    { title: "RESPONSABLE", data: "responsable" },
                    { title: "NOMBRE VERIFICADO", data: "nombre_verificado" },
                    { title: "CARGO VERIFICADO", data: "cargo_verificado" }
                ],
                "order": [[ 11, "desc" ], [ 0, "asc" ], [ 1, "asc" ]],
                initComplete: function () {
                    $('#spn-loadtb').hide()
                }
            });
            /*yadcf.init(table_verif, [
                {
                    column_number: 0,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }, {
                    column_number: 1,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }
            ],{
                cumulative_filtering: true                
            })*/
        })
        .catch(function (error) {
            // handle error
            $('#spn-loadtb').hide()
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}

// Fortalezas
$("#btn_fort").click(audFortalezas)

function format_sector(array, field) {
    response = ''
    data = []
    //console.log('str_sector')
    //console.log(array)
    //console.log(field)
    if(array.length > 0) {
        array.forEach(function (item) {
            if (!data.includes(item[field])) {
                data.push(item[field])

                if (response.length > 0) response += ' / '
                response += item[field]
            }
        });
    }
    return response;
}

function audFortalezas() {
    $("#op_auds").hide();
    $("#fortaleza").show();
    $('#spn-loadtb').show()
    del_tbcont('tb_fortaleza')

    axios.get('/lista_fortaleza')
        .then(function (response) {
            //console.log(response)
            var dataset = response.data;
            console.log(dataset)
            /*dataset.forEach(function (item) {
                console.log(item)
            });*/

            $('#tb_fortaleza').DataTable({
                "scrollX": true,
                /*initComplete: function () {
                    this.api().columns([0, 1]).every(function () {
                        var column = this;
                        var select = $('<select><option value="">Todas </option></select>')
                            .appendTo($(column.footer()).empty())
                            .on('change', function () {
                                var val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                );
                                column
                                    .search(val ? '^' + val + '$' : '', true, false)
                                    .draw();
                            });

                        column.data().unique().sort().each(function (d, j) {
                            select.append('<option value="' + d + '">' + d + '</option>')
                        });
                    });
                },*/
                data: dataset,
                columns: [
                    { title: "GERENCIA", data : function(data) {
                            return format_sector(data.sectores, 'gerencia')
                        }
                    },              
                    { title: "AREA", data : function(data) {
                            return format_sector(data.sectores, 'area')
                        }
                    },
                    { title: "ID. AUDITORIA", data : "id_auditoria" },
                    { title: "AÑO", data : "anio" },
                    { title: "FECHA PROGRAMADA", data : "f_programada" },
                    { title: "ID. FORTALEZA", data : "id_fortaleza" },
                    { title: "ORDINAL FORTALEZA", data : "ordinal_f" },
                    { title: "DESCRIPCION", data : "descripcion" }
                ],
                "order": [[ 4, "desc" ], [ 3, "desc" ], [ 0, "asc" ], [ 1, "asc" ], [ 2, "asc" ]],
                initComplete: function () {
                    $('#spn-loadtb').hide()
                }
            });

        })
        .catch(function (error) {
            // handle error
            $('#spn-loadtb').hide()
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}

/**-------------------------------------------------------------------------------------------------------------**/


$("#btn_crocm").click(function () {
    $("#opciones").hide();
    $("#crocm").show();
    $("#button-back").show();
});


$("#ins-crocm").click(function () {
    $("#crocm").hide();
    $("#aud-cromins").show();
    $('#tituloDocumentacion').text('INSERTAR CAMBIO – RIESGO – OPORTUNIDAD – CORRECTIVA - MEJORA')
    crocm_list()
});


function crocm_list() {
    $('#origenCrocm').val('')
    $('#descripcionCrocm').val('')
    $('#analisisCausaRaiz').val('')
    $('#accionCrocm').val('')
    $('#fecha_implementacion').val('')
    $("#infoEspere").show();
    selectTipo = document.getElementById("cbtipo")
    selectProceso = document.getElementById("cbproceso")
    selectProbabilidad = document.getElementById("cbprobabilidad")
    selectImpacto = document.getElementById("cbimpacto")
    selectResponsable = document.getElementById("cbresponsable")
    selectTipo.innerHTML = ''
    selectProceso.innerHTML = ''
    selectProbabilidad.innerHTML = ''
    selectImpacto.innerHTML = ''
    selectResponsable.innerHTML = ''
    axios.all([
        axios.get('/get_combo_proceso'),
        axios.get('/get_combo_tipocrocm'),
        axios.get('/get_combo_probabilidad'),
        axios.get('/get_combo_impacto'),
        axios.get('/get_combo_responsable'),
    ])
        .then(axios.spread(function (cbProcesoRes, cbTipoCrocmRes, cbProbabilidadRes, cbImpactoRes, cbResponsableRes) {
            // console.log(cbProcesoRes.data)
            // console.log(cbTipoCrocmRes.data)
            // console.log(cbProbabilidadRes.data)
            // console.log(cbImpactoRes.data)
            // console.log(cbResponsableRes.data)
            opt = document.createElement("option");
            opt.value = "";
            opt.disabled = true;
            opt.selected = true;
            opt.innerHTML = "Seleccione el Proceso";
            selectProceso.appendChild(opt);

            console.log(cbProcesoRes.data)
            for (e in cbprodatos = cbProcesoRes.data) {
                opt = document.createElement("option");
                opt.value = cbprodatos[e].idfp;
                opt.innerHTML = cbprodatos[e].codigofp;
                selectProceso.appendChild(opt);
                // console.log(cbprodatos[e])

            }
            opt = document.createElement("option");
            opt.value = "";
            opt.disabled = true;
            opt.selected = true;
            opt.innerHTML = "Seleccione Tipo";
            selectTipo.appendChild(opt);

            for (e in cbTipoCrocmRes.data) {
                opt = document.createElement("option");
                opt.value = cbTipoCrocmRes.data[e].id;
                opt.innerHTML = cbTipoCrocmRes.data[e].nombre;
                selectTipo.appendChild(opt);
                // console.log(cbprodatos[e])

            }
            opt = document.createElement("option");
            opt.value= "";
            opt.disabled = true ;
            opt.selected = true ;
            opt.innerHTML = "Seleccione Probabilidad";
            selectProbabilidad.appendChild(opt);
            for (e in cbProbabilidadRes.data) {
                opt = document.createElement("option");
                opt.value = cbProbabilidadRes.data[e].id;
                opt.innerHTML = cbProbabilidadRes.data[e].nombre;
                selectProbabilidad.appendChild(opt);
                // console.log(cbprodatos[e])                
            }
            opt = document.createElement("option");
            opt.value= "";
            opt.disabled = true ;
            opt.selected = true ;
            opt.innerHTML = "Seleccione Impacto";
            selectImpacto.appendChild(opt);
            for (e in cbImpactoRes.data) {
                opt = document.createElement("option");
                opt.value = cbImpactoRes.data[e].id;
                opt.innerHTML = cbImpactoRes.data[e].nombre;
                selectImpacto.appendChild(opt);
                // console.log(cbprodatos[e])
            }
            opt = document.createElement("option");
            opt.value= "";
            opt.disabled = true ;
            opt.selected = true ;
            opt.innerHTML = "Seleccione Responsable";
            selectResponsable.appendChild(opt);
            for (e in cbResponsableRes.data) {
                opt = document.createElement("option");
                opt.value = cbResponsableRes.data[e].idu;
                opt.innerHTML = cbResponsableRes.data[e].nombre;
                selectResponsable.appendChild(opt);
                // console.log(cbprodatos[e])
            }
            $("#infoEspere").hide();
        }))
    // axios.get('/get_combo_proceso', { })
    //     .then(function (response) {
    //         self=response.data
    //         console.log(response)
    //         console.log(self)
    //         //$("#crocm-ins").show();

    //         // for(i=0; i<self.length; i++){
    //         //     // $("#crocm_reg").append("<li>\n" +
    //         //     //     "  
    //         //     //     "</li>")
    //         // }
    //         // Pagination.init('list-rgcrocm', {
    //         //     bosePagination: {
    //         //         page: 1
    //         //     }
    //         // });
    //         //console.log(response.data)
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);

    //     })
    //     .then(function () {
    //         // always executed
    //     }); 
}

$("#insertarCrocm").click(function () {
    var inputVal = document.querySelectorAll('#aud-cromins input:enabled')
    var textAreaVal = document.querySelectorAll('#aud-cromins textarea')
    var selectVal = document.querySelectorAll('#aud-cromins select')
    var flagError = false

    for (var i = 0; i < inputVal.length; i++) {
        if (!inputVal[i].checkValidity()) {
            flagError = true
        } else {
            // console.log("ok")
        }
    }
    for (var i = 0; i < textAreaVal.length; i++) {
        if (!textAreaVal[i].checkValidity()) {
            flagError = true
        } else {
            // console.log("ok")
        }
    }
    for (var i = 0; i < selectVal.length; i++) {
        if (selectVal[i].value == "") {
            flagError = true
        } else {
            // console.log("ok")
        }
    }
    
    if (flagError == true) {
        Swal.fire('Error al insertar datos , existen campos vacios o sin elegir en el formulario','','error')        
    } else {
        axios.post('/insertar_crocm', {
            descripcion: $('#descripcionCrocm').val(),
            origen: $('#origenCrocm').val(),
            accion: $('#accionCrocm').val(),
            fecha: $('#fecha_implementacion').val(),
            estadocro: $('#cbestado').val(),
            analisiscausaraiz: $('#analisisCausaRaiz').val(),
            fichaprocesos: $('#cbproceso').val(),
            tipocro: $('#cbtipo').val(),
            probabilidad: $('#cbprobabilidad').val(),
            impacto: $('#cbimpacto').val(),
            fkresponsable: $('#cbresponsable').val()

        })
            .then(function (response) {
                Swal.fire('Datos Registrados Correctamente','','success')                
                $('#aud-cromins').hide()
                consultaCrocm();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
})

$("#con-crocm").click(function () {
    $("#crocm").hide();
    consultaCrocm();
});

function consultaCrocm() {
    $("#crocm-con").show();
    $("#tituloDocumentacion").text("INFORMACIÓN SISTEMA INTEGRADO DE GESTIÓN")
    axios.get('/consult_crocm')
        .then(function (response) {

            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push([response.data[i].gerencia, response.data[i].area, response.data[i].cod_proceso, response.data[i].id_cro,
                response.data[i].tipo, "<div class='row-cont'>" + response.data[i].descripcion + "</div>", "<div class='row-cont'>" + response.data[i].accion + "</div>",
                response.data[i].f_implementacion, response.data[i].responsable, response.data[i].estado
                ])
            }
            var table_concrocm = $('#tb_concrocm').DataTable({
                "scrollX": true,
                initComplete: function () {
                    this.api().columns([0, 1]).every(function () {
                        var column = this;
                        var select = $('<select><option value="">Todas </option></select>')
                            .appendTo($(column.footer()).empty())
                            .on('change', function () {
                                var val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                );
                                column
                                    .search(val ? '^' + val + '$' : '', true, false)
                                    .draw();
                            });

                        column.data().unique().sort().each(function (d, j) {
                            select.append('<option value="' + d + '">' + d + '</option>')
                        });
                    });
                },
                data: dataset,
                columns: [
                    { title: "GERENCIA" },
                    { title: "AREA" },
                    { title: "COD. PROCESO" },
                    {
                        title: "ID. CRO",
                        data: '3',
                        render: function (data) {
                            var ahl = '<button class="btn boton-id">' + data + '</button>'
                            return ahl
                        }
                    },
                    { title: "TIPO" },
                    { title: "DESCRIPCION" },
                    { title: "ACCION" },
                    { title: "F. IMPLEMENTACION" },
                    { title: "RESPONSABLE" },
                    { title: "ESTADO" }
                ]
            });
            $('#tb_concrocm tbody').on('click', 'td', function () {

                // console.log( table_crocm_seg.cell(this).index().column);
                // console.log(this);
                let valor = table_concrocm.cell(this).data();
                // console.log(valor)
                if (table_concrocm.cell(this).index().column == 3) {
                    det_audcrocm(valor)
                }

                // let valorcelda = table_crocm_seg.cell(this).index().column
                // if (valorcelda == 3 || valorcelda == 4 ){
                //     let fila = table_crocm_seg.cell(this).index().row   
                //     console.log(fila)         
                //     alert( table_crocm_seg.cell(fila,3).data());
                // 
                //}
            });
            $(".idcrocm").parent().css({ "cursor": "pointer" });
            $(".idcrocm").parent().attr({
                'data-toggle': 'tooltip',
                'data-placement': 'right',
                'title': 'Detalle CROCM'
            });
            $("tbody", "#tb_concrocm").on("click", "td",
                function () {
                    if ($(this).css('cursor') == 'pointer') det_audcrocm(this.innerText);
                });

        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}

function det_audcrocm(id_crocm) {
    axios.post('/det_audcrocm', {
        idcro: id_crocm
    })
        .then(function (response) {
            self = response.data
            //console.log(self)
            $("#crocm-con").hide();
            $("#crocmaud-det").show();

            $("#adcr_id_cro").val(self.crocm[0].id_cro);
            $("#adcr_tipo_cro").val(self.crocm[0].tipo_cro);
            $("#adcr_cod_proceso").val(self.crocm[0].cod_proceso);
            $("#adcr_origen_crocm").val(self.crocm[0].origen_crocm);
            $("#adcr_descripcion_crocm").val(self.crocm[0].descripcion_crocm);
            $("#adcr_analisis_causa_raiz").val(self.crocm[0].analisis_causa_raiz);
            $("#adcr_probabilidad").val(self.crocm[0].probabilidad);
            $("#adcr_impacto").val(self.crocm[0].impacto);
            $("#adcr_accion").val(self.crocm[0].accion);
            $("#adcr_f_implementacion").val(self.crocm[0].f_implementacion);
            $("#adcr_responsable").val(self.crocm[0].responsable);
            $("#adcr_estado").val(self.crocm[0].estado);

            var dataset = [];
            for (var i = 0; i < self.seguimiento.length; i++) {
                dataset.push([self.seguimiento[i].id, self.seguimiento[i].id_crocm, self.seguimiento[i].f_seguimiento,
                self.seguimiento[i].responsable_seguimiento, self.seguimiento[i].observaciones, self.seguimiento[i].estado
                ])
            }
            $('#tb_segcro').DataTable({
                data: dataset,
                columns: [
                    { title: "ID" },
                    { title: "ID. CROCM" },
                    { title: "F. SEGUIMIENTO" },
                    { title: "RESPONSABLE SEGUIMIENTO" },
                    { title: "OBSERVACIONES" },
                    { title: "ESTADO" }
                ]
            });
            //console.log(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
        .then(function () {
            // always executed
        });
}
