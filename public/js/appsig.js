//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

//**********************/ FICHA DE PROCESOS /**********************//

//para la primera de 4 opciones de documentacion**
$("#btn_procesos").click(function() {
    mostrar_procesos()
});

function mostrar_procesos() {
    $("#opciones").hide();
    $("#op_process").show();
    $("#ficha_proceso").hide();
    $("#button-back").show()
}

function detalle_indi_proce(cod_indi) {
    axios.post('/detalle_indi_procesos', {
            codigo: cod_indi
        })
        .then(function(response) {
            self = response.data
            
            $("#lista_ord").hide();
            $("#detalle_indicador").show();

            $("#IND_ID_INDICADOR").val(self.indicador[0].id);
            $("#IND_COD_PROCESO").val(self.indicador[0].cod_proceso);
            $("#IND_CODIGO_INDICADOR").val(self.indicador[0].codigo_indicador);
            $("#IND_OBJETIVO_INDICADOR").val(self.indicador[0].objetivo_indicador);
            $("#IND_DESCRIPCION_INDICADOR").val(self.indicador[0].descripcion_indicador);
            $("#IND_RESPONSABLE_ELABORACION").val(self.indicador[0].responsable_elaboracion);
            $("#IND_FORMULA").val(self.indicador[0].formula);
            $("#IND_UNIDAD").val(self.indicador[0].unidad);
            $("#IND_META_MENSUAL").val(self.indicador[0].meta_mensual);
            $("#IND_META_ANUAL").val(self.indicador[0].meta_anual);
            $("#IND_VIGENTE").val(self.indicador[0].vigente);

            var dataset = [];
            for (var i = 0; i < self.segindicador.length; i++) {
                dataset.push([self.segindicador[i].id, self.segindicador[i].codigo_indicador, self.segindicador[i].resp_seguimiento,
                    self.segindicador[i].anio, self.segindicador[i].mes, self.segindicador[i].indicador, self.segindicador[i].observaciones
                ])
            }
            $('#IND_TABLE').DataTable({
                data: dataset,
                columns: [
                    { title: "ID." },
                    { title: "CODIGO INDICADOR" },
                    { title: "RESPONSABLE SEGUIMIENTO" },
                    { title: "AÑO" },
                    { title: "MES" },
                    { title: "INDICADOR" },
                    { title: "OBSERVACIONES" }
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

function detalle_crocm(id_crocm) {
    axios.post('/detalle_crocm', {
            id: id_crocm
        })
        .then(function(response) {
            self = response.data
            
            $("#lista_ord_crocm").hide();
            $("#detalle_crocm").show();

            $("#crocm_id").val(self.crocm[0]['ID_CROCM']);
            $("#crocm_tipo").val(self.crocm[0]['TIPO_CRO']);
            $("#crocm_cod_proceso").val(self.crocm[0]['COD_PROCESO']);
            $("#crocm_origen").val(self.crocm[0]['ORIGEN_CROCM']);
            $("#crocm_descripcion").val(self.crocm[0]['DESCRIPCION_CROCM']);
            $("#crocm_analisiscausaraiz").val(self.crocm[0]['ANALISIS_CAUSA_RAIZ']);
            $("#crocm_probabilidad").val(self.crocm[0]['PROBABILIDAD']);
            $("#crocm_impacto").val(self.crocm[0]['IMPACTO']);
            $("#crocm_accion").val(self.crocm[0]['ACCION']);
            $("#crocm_fecha_implementacion").val(self.crocm[0]['FECHA_IMPLEMENTACION']);
            $("#crocm_responsable_accion").val(self.crocm[0]['RESPONSABLE_ACCION']);
            $("#crocm_estado").val(self.crocm[0]['ESTADO']);

            var dataset = [];
            for (var i = 0; i < self.detalle.length; i++) {
                dataset.push([self.detalle[i].ID_CROCM, self.detalle[i].FECHA_SEGUIMIENTO, self.detalle[i].RESPONSABLE_SEGUIMIENTO,
                    self.detalle[i].OBSERVACIONES, self.detalle[i].ESTADO
                ])
            }
            $('#CROCM_TABLE').DataTable({
                data: dataset,
                columns: [
                    { title: "ID CROCM" },
                    { title: "FECHA SEGUIMIENTO" },
                    { title: "RESPONSABLE SEGUIMIENTO" },
                    { title: "OBSERVACIONES" },
                    { title: "ESTADO" }
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

function traer_detalle_proce(id_proc) {
    axios.post('/detalle_procesos', {
            id_proce: id_proc
        })
        .then(function(response) {
            self = response.data
            $("#lista_ord").hide();
            $("#ficha_proceso").show();

            $("#id_1").val(self.Ficha[0].id);
            $("#id_area_1").val(self.Ficha[0].id_area);
            $("#cod_1").val(self.Ficha[0].cod_proceso);
            $("#nombre_1").val(self.Ficha[0].nombre_proceso);
            $("#objetivo_1").val(self.Ficha[0].objetivo_proceso);
            $("#vigente_1").val(self.Ficha[0].vigente);
            $("#version_1").val(self.Ficha[0].version);
            $("#input_fec_1").val(self.Ficha[0].fecha_emision);
            $("#entrada_1").val(self.Ficha[0].entradas_requeridas);
            $("#salida_1").val(self.Ficha[0].salidas_esperadas);
            $("#recursos_1").val(self.Ficha[0].recursos_necesarios);
            $("#legales_1").val(self.Ficha[0].req_legales);

            $("#id_ger_1").val(self.Gas[0].id_area);
            $("#ger_gen_1").val(self.Gas[0].gerencia);
            $("#ger_are_1").val(self.Gas[0].area);
            $("#ger_sec_1").val(self.Gas[0].sector);
            $("#ger_resp_1").val(self.Gas[0].responsable);
            $("#ger_vig_1").val(self.Gas[0].vigente);

            for (i = 0; i < self.Documentos.length; i++) {
                $("#ul_doc").append("<li>\n" +
                    "  <fieldset class=\"name\">\n" +
                    "    <div class=\"row p-3\">\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">CODIGO DOCUMENTO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control cod_doc_1\" type=\"text\" value=\"" + self.Documentos[i].cod_documento + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">TIPO DOCUMENTO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control tipo_doc_1\" type=\"text\" value=\"" + self.Documentos[i].tipo_documento + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">TITULO DOCUMENTO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control tit_doc_1\" type=\"text\" value=\"" + self.Documentos[i].titulo_doc + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "   <div id=\"ver_mas_form_documento\" class=\"row\"style=\"display:none\">\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">CODIGO PROCESO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control cod_proc_1\" type=\"text\" value=\"" + self.Documentos[i].cod_proceso + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">VERSION VIGENTE</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control ver_vig_1\" type=\"text\" value=\"" + self.Documentos[i].version_vigente + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">FECHA PUBLICACION</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control fec_pub_1\" type=\"text\" value=\"" + self.Documentos[i].fecha_publicacion + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">APROBADO POR</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control apro_por_1\" type=\"text\" value=\"" + self.Documentos[i].aprobado_por + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">CARPETA OPERATIVA</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control car_ope_1\" type=\"text\" value=\"" + self.Documentos[i].carpeta_operativa + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">VINCULO ARCHIVO DIGITAL</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control vin_arch_1\" type=\"text\" value=\"" + self.Documentos[i].vinculo_archivo_digital + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">VINCULO DIAGRAMA DE FLUJO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control vin_diag_1\" type=\"text\" value=\"" + self.Documentos[i].vinculo_diagrama_de_flujo + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "   </div>\n" +
                    "  </fieldset>\n" +
                    "</li>")
            }
            Pagination.init('my-list1', {
                bosePagination: {
                    page: 1
                }
            });

            for (i = 0; i < self.Riesgo.length; i++) {
                $("#ul_crocm").append("<li>\n" +
                    "  <fieldset class=\"name\">\n" +
                    "    <div class=\"row p-3\">\n" +
                    "    <div class=\"col-sm-3\">\n" +
                    "      <div class=\"form-group row\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_id_1\">ID CROCM</label>\n" +
                    "        <div class=\"col-sm-8\">\n" +
                    "          <input class=\"form-control\" id=\"cro_id_1\" type=\"text\" value=\"" + self.Riesgo[i].id_cro + "\" />\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-sm-4\">\n" +
                    "      <div class=\"form-group row\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_tipo_1\">TIPO CRO</label>\n" +
                    "        <div class=\"col-sm-8\">\n" +
                    "          <input class=\"form-control\" id=\"cro_tipo_1\" type=\"text\" value=\"" + self.Riesgo[i].tipo_cro + "\" />\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-sm-5\">\n" +
                    "      <div class=\"form-group row\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_cod_1\">CODIGO PROCESO</label>\n" +
                    "        <div class=\"col-sm-8\">\n" +
                    "          <input class=\"form-control\" id=\"cro_cod_1\" type=\"text\" value=\"" + self.Riesgo[i].cod_proceso + "\" />\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-sm-6\">\n" +
                    "      <div class=\"form-group\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_ori_1\">ORIGEN CRO</label>\n" +
                    "        <textarea class=\"form-control\" id=\"cro_ori_1\" type=\"text\" value=\"\">" + self.Riesgo[i].origen_cro + "</textarea>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-sm-6\">\n" +
                    "      <div class=\"form-group\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_des_1\">DESCRIPCION CRO</label>\n" +
                    "        <textarea class=\"form-control\" id=\"cro_des_1\" type=\"text\" value=\"\">" + self.Riesgo[i].descripcion_cro + "</textarea>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  <div id=\"ver_mas_form_crocm\" style=\"display:none\" class=\"row\">\n" +
                    "    <div class=\"col-sm-4\">\n" +
                    "      <div class=\"form-group\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_an_1\">ANALISIS CAUSA RAIZ</label>\n" +
                    "        <textarea class=\"form-control\" id=\"cro_an_1\" type=\"text\" value=\"\">" + self.Riesgo[i].analisis_causa_raiz + "</textarea>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-sm-4\">\n" +
                    "      <div class=\"form-group\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_prob_1\">PROBABILIDAD</label>\n" +
                    "        <input class=\"form-control\" id=\"cro_prob_1\" type=\"text\" value=\"" + self.Riesgo[i].probabilidad + "\">\n" +
                    "      </div>\n" +
                    "      <div class=\"form-group\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_imp_1\">IMPACTO</label>\n" +
                    "        <input class=\"form-control\" id=\"cro_imp_1\" type=\"text\" value=\"" + self.Riesgo[i].impacto + "\">\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-sm-4\">\n" +
                    "      <div class=\"form-group\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_acc_1\">ACCION</label>\n" +
                    "        <textarea class=\"form-control\" id=\"cro_acc_1\" type=\"text\" value=\"\">" + self.Riesgo[i].accion + "</textarea>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"col-sm-12\">\n" +
                    "      <div class=\"form-group row\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_fec_1\">FECHA IMPLEMENTACION</label>\n" +
                    "        <div class=\"col-sm-8\">\n" +
                    "          <input class=\"form-control\" id=\"cro_fec_1\" type=\"text\" value=\"" + self.Riesgo[i].fecha_implementacion + "\" />\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"form-group row\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_resp_1\">RESPONSABLE ACCION</label>\n" +
                    "        <div class=\"col-sm-8\">\n" +
                    "          <input class=\"form-control\" id=\"cro_resp_1\" type=\"text\" value=\"" + self.Riesgo[i].responsable_accion + "\" />\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"form-group row\">\n" +
                    "        <label class=\"paralabel-control col-sm-4 text-right\" for=\"cro_est_1\">ESTADO</label>\n" +
                    "        <div class=\"col-sm-8\">\n" +
                    "          <input class=\"form-control\" id=\"cro_est_1\" type=\"text\" value=\"" + self.Riesgo[i].estado + "\" />\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "   </div>\n" +
                    "  </fieldset>\n" +
                    "</li>")
            }
            Pagination2.init('my-list2', {
                bosePagination: {
                    page: 1
                }
            });

            for (i = 0; i < self.Indicador.length; i++) {
                $("#ul_indi").append("<li>\n" +
                    "  <fieldset class=\"name\">\n" +
                    "    <div class=\"row p-3\">\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4 text-right\" for=\"ind_id_1\">ID</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" id=\"ind_id_1\" type=\"text\" value=\"" + self.Indicador[i].ID + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4 text-right\" for=\"ind_cod_1\">CODIGO PROCESO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" id=\"ind_cod_1\" type=\"text\" value=\"" + self.Indicador[i].COD_PROCESO + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_coi_1\">CODIGO INDICADOR</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" id=\"ind_coi_1\" type=\"text\" value=\"" + self.Indicador[i].CODIGO_INDICADOR + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_obj_1\">OBJETIVO INDICADOR</label>\n" +
                    "          <textarea class=\"form-control\" id=\"ind_obj_1\" type=\"text\" value=\"\">" + self.Indicador[i].OBJETIVO_INDICADOR + "</textarea>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_des_1\">DESCRIPCION INDICADOR</label>\n" +
                    "          <textarea class=\"form-control\" id=\"ind_des_1\" type=\"text\" value=\"\">" + self.Indicador[i].DESCRIPCION_INDICADOR + "</textarea>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "   <div id=\"ver_mas_form_indicadores\" class=\"row\" style=\"display:none\">\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_resp_1\">RESPONSABLE ELABORACION</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" id=\"ind_resp_1\" type=\"text\" value=\"" + self.Indicador[i].RESPONSABLE_ELABORACION + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_for_1\">FORMULA</label>\n" +
                    "          <textarea class=\"form-control\" id=\"ind_for_1\" type=\"text\"value=\"\">" + self.Indicador[i].FORMULA + "</textarea>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_uni_1\">UNIDAD</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" id=\"ind_uni_1\" type=\"text\" value=\"" + self.Indicador[i].UNIDAD + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_met_1\">META MENSUAL</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" id=\"ind_met_1\" type=\"text\" value=\"" + self.Indicador[i].META_MENSUAL + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_me_an_1\">META ANUAL</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" id=\"ind_me_an_1\" type=\"text\" value=\"" + self.Indicador[i].META_ANUAL + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\" for=\"ind_vig_1\">VIGENTE</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" id=\"ind_vig_1\" type=\"text\" value=\"" + self.Indicador[i].VIGENTE + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "   </div>\n" +
                    "  </fieldset>\n" +
                    "</li>")
            }
            Pagination3.init('my-list3', {
                bosePagination: {
                    page: 1
                }
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

//de la lista, hacer la peticion al listado por gerencias
$("#btn_ger").click(fpOrdenadoGerencia)

function fpOrdenadoGerencia() {
    $("#op_process").hide();
    $("#lista_ord").show();
    $("#ficha_proceso").hide();
    $('#tituloDocumentacion').text('Ficha Procesos - Ordenado por gerencia')
    axios.get('/lista_gerencias')
        .then(function(response) {
            
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push(["<button class='btn btn-primary' data-idproc=" + response.data[i].idfc + ">Detalle del proceso</button>", response.data[i].id, response.data[i].gerencia, response.data[i].area,
                    response.data[i].sector, response.data[i].nombre_del_proceso, response.data[i].codigo_del_proceso, response.data[i].responsable
                ])
            }
           
            $('#table_procesos').DataTable({
                "createdRow": function(row, data, index) {
                    $('td', row).eq(0).click(function() {
                        traer_detalle_proce($('td', row).eq(0).children().data("idproc"));
                    });
                },
                data: dataset,
                "order": [
                    [2, "asc"]
                ],
                "scrollX": true,
                "scrollY": "300px",
                columns: [
                    { title: "" },
                    { title: "ID." },
                    { title: "GERENCIA" },
                    { title: "AREA" },
                    { title: "SECTOR" },
                    { title: "NOMBRE DEL PROCESO" },
                    { title: "CODIGO DEL PROCESO" },
                    { title: "RESPONSABLE" }
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
//de la lista, hacer la peticion al listado por PROCESOS
$("#btn_pro").click(fpOrdenadoProcesos)

function fpOrdenadoProcesos() {
    $("#op_process").hide();
    $("#lista_ord").show();
    $("#ficha_proceso").hide();
    $('#tituloDocumentacion').text('Ficha Procesos - Ordenado por procesos')

    axios.get('/lista_ord_procesos')
        .then(function(response) {
            
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push(["<div class='btn btn-primary' data-idproc=" + response.data[i].idfc + ">Detalle Proceso</div>", response.data[i].nombre_del_proceso, response.data[i].codigo_proceso,
                    response.data[i].id, response.data[i].gerencia, response.data[i].area, response.data[i].sector, response.data[i].responsable
                ])
            }
            
            $('#table_procesos').DataTable({
                "createdRow": function(row, data, index) {
                    $('td', row).eq(0).click(function() {
                        traer_detalle_proce($('td', row).eq(0).children().data("idproc"));
                    });
                },
                data: dataset,
                order: [
                    [1, "asc"]
                ],
                columns: [{
                        "title": "",


                    },
                    { title: "NOMBRE DEL PROCESO" },
                    { title: "CODIGO DEL PROCESO" },
                    { title: "ID." },
                    { title: "GERENCIA" },
                    { title: "AREA" },
                    { title: "SECTOR" },
                    { title: "RESPONSABLE" }
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

//INDICADORES de la lista, hacer la peticion al listado por gerencias
$("#btn_ind_ger").click(indOrdenadoGerencia)

function indOrdenadoGerencia() {
    $("#op_process").hide();
    $("#lista_ord").show();
    $("#ficha_proceso").hide();
    $('#tituloDocumentacion').text('Indicadores - Ordenado por gerencia')

    axios.get('/lista_indicadores_gerencias')
        .then(function(response) {
           
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push(["<button class='btn btn-primary' data-codindi=" + response.data[i].codigo_indicador + ">Detalle Indicador</button>",
                    response.data[i].id, response.data[i].gerencia, response.data[i].area,
                    response.data[i].cod_proceso, response.data[i].codigo_indicador, response.data[i].objetivo_del_indicador, response.data[i].descripcion_del_indicador
                ])
            }
            $('#table_procesos').DataTable({
                "createdRow": function(row, data, index) {
                    $('td', row).eq(0).click(function() {
                        detalle_indi_proce($('td', row).eq(0).children().data("codindi"));
                    });
                },
                scrollX: true,
                scrollY: "300px",
                data: dataset,
                order: [
                    [2, "asc"]
                ],
                columns: [
                    { title: "" },
                    { title: "ID." },
                    { title: "GERENCIA" },
                    { title: "AREA" },
                    { title: "CODIGO DEL PROCESO" },
                    { title: "CODIGO DEL INDICADOR" },
                    { title: "OBJETIVO DEL INDICADOR" },
                    { title: "DESCRIPCION DEL INDICADOR" }
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

//INDICADORES -seguimiento
$("#btn_ind_seg").click(indSeguimiento)

function indSeguimiento() {
    $("#op_process").hide();
    $("#seguimiento").show();
    $('#tituloDocumentacion').text('Indicadores - Seguimiento')
    $("#ficha_proceso").hide();
    axios.get('/listar_indicadorseg')
        .then(function(response) {
            
            datos = response.data
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push([
                    response.data[i].gerencia, response.data[i].codigo_del_proceso,
                    response.data[i].codigo_del_indicador, response.data[i].objetivo_del_indicador, response.data[i].responsable_del_seguimiento,
                    response.data[i].anio, response.data[i].mes, response.data[i].valor_del_indicador, response.data[i].observaciones
                ])
            }
            
            var table_seg = $('#table_seguimiento').DataTable({
                "scrollX": true,
                data: datos,
                order: [
                    [1, "asc"],
                    [2, "asc"],
                    [3, "asc"],
                    [4, "asc"]
                ],
                ordering: false,
                columns: [{
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": '',
                        "render": function() {
                            return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
                        },

                    },
                    { title: "GERENCIA", data: "gerencia" },
                    { title: "CODIGO DEL PROCESO", data: "codigo_del_proceso" },
                    { title: "CODIGO DEL INDICADOR", data: "codigo_del_indicador" },
                    { title: "AÑO", data: "anio" },
                    { title: "MES", data: "mes" }
                ],
            });
            yadcf.init(table_seg, [{
                column_number: 1,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }, {
                column_number: 4,
                select_type: 'select2',
                sort_as: "num",
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }, {
                column_number: 5,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos",
                sort_as: "num",
            }, {
                column_number: 2,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }],
            {
                cumulative_filtering: true                
            })
            $('#table_seguimiento tbody').on('click', 'td.details-control', function() {
                var tr = $(this).closest('tr');
                var tdi = tr.find("i.fa");
                var row = table_seg.row(tr);
                
                row.child.className = "fondoTabla"
                if (row.child.isShown()) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                    tdi.first().removeClass('fa-minus-square');
                    tdi.first().addClass('fa-plus-square');
                } else {
                    // Open this row
                    row.child(formatTableSeguimiento(row.data())).show();
                    tr.addClass('shown');
                    tdi.first().removeClass('fa-plus-square');
                    tdi.first().addClass('fa-minus-square');
                }
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
$('.combo').on("select2:select", function(e) {
    $(".combo").select2()
});

function formatTableSeguimiento(data) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="table">' +
        '<tr>' +
        '<td>OBJETIVO DEL INDICADOR:</td>' +
        '<td>' + data.objetivo_del_indicador + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>RESPONSABLE DEL SEGUIMIENTO:</td>' +
        '<td>' + data.responsable_del_seguimiento + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>VALOR DEL INDICADOR:</td>' +
        '<td>' + data.valor_del_indicador + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>OBSERVACIONES:</td>' +
        '<td>' + data.observaciones + '</td>' +
        '</tr>' +
        '</table>';
}
//CROCM - seguimiento
$("#crocm_seg").click(crocmSeguimiento)

function crocmSeguimiento() {
    $("#op_process").hide();
    $("#seguimiento_crocm").show();
    $("#ficha_proceso").hide();
    $('#tituloDocumentacion').text('C.R.O.C.M. - Seguimiento')
    axios.get('/listar_crocmseg')
        .then(function(response) {
            
            var data_crocm = response.data
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push([
                    response.data[i].gerencia, response.data[i].codigo_proceso, response.data[i].id_cro,
                    response.data[i].tipo_crocm, response.data[i].descripcion_crocm, response.data[i].accion, response.data[i].fec_segu,
                    response.data[i].observaciones, response.data[i].estado, response.data[i].responsable_seguimiento
                ])
            }
            
            var table_crocm_seg = $('#table_seguimiento_crocm').DataTable({
                "scrollX": true,
                data: data_crocm,
                order: [
                    [1, "asc"],
                    [2, "asc"],
                    [3, "asc"],
                    [4, "asc"]
                ],
                ordering: false,
                "createdRow": function(row, data, index) {
                    //$('td', row).eq(1).css('background','red');                
                },
                columns: [{
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": '',
                        "render": function() {
                            return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
                        }
                    },
                    { title: "GERENCIA", data: 'gerencia' },
                    { title: "CODIGO PROCESO", data: 'codigo_proceso' },
                    { title: "ID CRO", data: 'id_cro' },
                    { title: "TIPO CROCM", data: 'tipo_crocm' },
                    { title: "ESTADO", data: 'estado' },
                ]
            });
            yadcf.init(table_crocm_seg, [{
                    column_number: 1,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }, {
                    column_number: 2,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }, {
                    column_number: 3,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos",
                    sort_as: 'num'

                }, {
                    column_number: 4,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }, {
                    column_number: 5,
                    select_type: 'select2',
                    filter_reset_button_text: false,
                    filter_default_label: "Todos"
                }],{
                    cumulative_filtering: true                
                })

            $('#table_seguimiento_crocm tbody').on('click', 'td.details-control', function() {
                var tr = $(this).closest('tr');
                var tdi = tr.find("i.fa");
                var row = table_crocm_seg.row(tr);

                if (row.child.isShown()) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                    tdi.first().removeClass('fa-minus-square');
                    tdi.first().addClass('fa-plus-square');
                } else {
                    // Open this row
                    row.child(format(row.data())).show();
                    tr.addClass('shown');
                    tdi.first().removeClass('fa-plus-square');
                    tdi.first().addClass('fa-minus-square');
                }
            });

            table_crocm_seg.on("user-select", function(e, dt, type, cell, originalEvent) {
                if ($(cell.node()).hasClass("details-control")) {
                    e.preventDefault();
                }
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
//fila detalles seguimiento crocm
function format(data) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Descripcion:</td>' +
        '<td>' + data.descripcion_crocm + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Accion:</td>' +
        '<td>' + data.accion + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Fecha seguimiento:</td>' +
        '<td>' + data.fec_segu + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Observaciones:</td>' +
        '<td>' + data.observaciones + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Responsable seguimiento:</td>' +
        '<td>' + data.responsable_seguimiento + '</td>' +
        '</tr>' +
        '</table>';
}
//CROCM lista
$("#crocm_ger").click(crocmOrdenadoGerencias)

function crocmOrdenadoGerencias() {
    $("#op_process").hide();
    $("#lista_ord_crocm").show();
    $("#ficha_proceso").hide();
    $('#tituloDocumentacion').text('C.R.O.C.M. - Ordenado por gerencia')
    axios.get('/lista_crocm')
        .then(function(response) {
            
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push(["<button class='btn btn-primary' data-idcro=" + response.data[i].ID_CROCM + ">Detalle CROCM</button>",
                    response.data[i].ID_GAS, response.data[i].GERENCIA, response.data[i].AREA, response.data[i].COD_PROCESO,
                    response.data[i].ID_CROCM, response.data[i].TIPO_CROCM, response.data[i].ORIGEN_CROCM, response.data[i].DESCRIPCION_CROCM
                ])
            }
            $('#table_procesos_crocm').DataTable({
                "createdRow": function(row, data, index) {
                    $('td', row).eq(0).click(function() {
                        detalle_crocm($('td', row).eq(0).children().data("idcro"));
                    });
                },
                data: dataset,
                columns: [
                    { title: "" },
                    { title: "ID." },
                    { title: "GERENCIA" },
                    { title: "AREA" },
                    { title: "COD. PROCESO" },
                    { title: "ID CROCM" },
                    { title: "TIPO CROCM" },
                    { title: "ORIGEN CROCM" },
                    { title: "DESCRIPCION CROCM" }
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

//de la tabla de gerencias, enviar el id apra sacar detalle
$("#lista_ord_gerencia").click(function() {
    $("#op_process").hide();
    $("#lista_ord_gerencia").hide();
    $("#ficha_proceso").show();
});






//**********************/ DOCUMENTOS /**********************//

$("#btn_docs").click(function() {
    mostrar_docs();
});

function mostrar_docs() {
    $("#opciones").hide();
    
    $("#op_docs").show();
    $("#ficha_proceso").hide();
    $("#button-back").show()
}
//Documentos - Baja documento
$("#btn_dbaja").click(docBaja)

function docBaja() {
    $("#op_docs").hide();
    $("#bajadoc").show();
    $('#tituloDocumentacion').text('Documentos dados de baja')
    axios.get('/listar_bajadoc')
        .then(function(response) {
            var rtback = $('#rt_dfr').val();
            
            var dataDocBaja = response.data
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push([
                    response.data[i].codigo_documento, response.data[i].tipo_documento,
                    response.data[i].titulo, response.data[i].version, response.data[i].fecha_publicacion, response.data[i].aprobado_por,
                    response.data[i].carpeta_operativa, response.data[i].vinculo_archivo_digital, response.data[i].codigo_proceso
                ])
            }
            var tableDocBaja = $('#table_bajadoc').DataTable({
                "scrollX": true,
                scrollY: "300px",
                data: dataDocBaja,
                columns: [
                    { title: "CODIGO DOCUMENTO", data: "codigo_documento" },
                    { title: "TIPO DOCUMENTO", data: "tipo_documento" },
                    { title: "TITULO", 
                        data: "titulo"                          
                    },
                    { title: "VERSION", data: "version" },
                    { title: "FECHA PUBLICACION", data: "fecha_publicacion" },
                    { title: "APROBADO POR", data: "aprobado_por" },
                    { title: "CARPETA OPERATIVA", data: "carpeta_operativa" },
                    { title: "CODIGO PROCESO", data: "codigo_proceso" }
                ], 
            });
            yadcf.init(tableDocBaja, [{
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
                select_type_options: {                    
                    width: '200px',
                    dropdownAutoWidth: true,
                  },
                filter_reset_button_text: false,
                filter_default_label: "Todos",
                sort_as: 'num'

            }], {
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

//Documentos - formulario
$("#btn_form").click(function() {
    $("#op_docs").hide();

    listarDocFormulario();
});

function listarDocFormulario() {
    $('#tituloDocumentacion').text('Documentos - Formularios')
    $("#formulario").show();
    axios.get('/listar_formdoc')
        .then(function(response) {
            var rtback = $('#rt_dfr').val();
            
            var dataDocForm = response.data
            var dataset = [];
            
            var tableDocForm = $('#table_docfrm').DataTable({
                "createdRow": function(row, data, index) {
                    $('td', row).eq(0).click(function() {
                        detalle_frmdoc($('td', row).eq(0).children().data("codfrm"), $('td', row).eq(0).children().data("codc"));
                    });
                },
                "scrollX": true,
                "scrollY": "300px",
                data: dataDocForm,
                columns: [{
                        title: "",
                        orderable: false,
                        data: null,
                        render: function(data, type, row) {
                            var a = '<div class="btn btn-primary btn-sm" data-codfrm="' + row.cod_formulario + '" data-codc="' + row.doc_relacionado + '">Detalle</div>'
                            return a
                        }
                    },
                    { title: "COD. FORMULARIO", data: "cod_formulario" },
                    { title: "TITULO FORMULARIO", data: "titulo_formulario" },
                    {
                        title: "VINCULO ARCHIVO",
                        data: 'vinculo_archivo',
                        render: function(data) {
                            var url;
                            var a;
                            if (data == "" || data == "N/A" || data == null) {
                                url = "#";
                                a = '<a class="btn bg-red-own btn-sm" href="' + url + '"><i class="fas fa-file-text"></i> Ningún archivo </a>'
                            } else {
                                url = rtback + data;
                                a = '<a class="btn bg-red-own btn-sm" target="_blank" href="' + url + '"><i class="fas fa-file-text"></i> Ver archivo </a>'
                            }
                            return a
                        }
                    },
                    {
                        title: "DESCARGA FORMULARIO",
                        data: 'descarga_formulario',
                        render: function(data) {
                            var url;
                            if (data == "" || data == "N/A" || data == null){
                                url = "#";
                                a = '<a class="btn bg-teal-own btn-sm" href="' + url + '"><i class="fas fa-download"></i> Ningún archivo </a>'
                            }else{
                                url = rtback + data;
                                var a = '<a class="btn bg-teal-own btn-sm" download="documento" href="' + url + '"><i class="fas fa-download"></i> Descargar </a>'
                            }
                            return a
                        }
                    },
                    { title: "VERSIÓN", data: "version" },
                    { title: "FECHA PUBLICACIÓN", data: "f_publicacion" },
                    { title: "TIPO DOC. RELACIONADO", data: "tipo_doc_relacionado" },
                    { title: "DOC. RELACIONADO", data: "doc_relacionado" },
                    { title: "GERENCIA", data: "gerencia" },
                    { title: "AREA", data: "area" },                                       
                    { title: "APROBADO POR", data: "aprobado_por" }
                ]
            });

            yadcf.init(tableDocForm, [{
                column_number: 1,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }, {
                column_number: 2,
                select_type: 'select2',
                select_type_options: {
                    width : "180px" ,
                    dropdownAutoWidth : true        
                },
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }, {
                column_number: 9,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos",
            }, {
                column_number: 10,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }],{
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

function detalle_frmdoc(codfrm, codc) {
    axios.post('/detalle_frmdoc', {
            cod_frm: codfrm,
            cod_doc: codc
        })
        .then(function(response) {
            var rtback = $('#rt_dfr').val();
            self = response.data
            
            $("#frm_adg").empty();
            $("#frm_vad").empty();

            $("#ul_dcto").empty();

            var uri = self['FORMULARIO'].vinculo_archivo_digital;
            var uric;
            var htmlb;
            if (uri == "" || uri == null || uri == "N/A") {
                uric = "#";
                htmlb = "<input class=\"form-control url_1\" type=\"text\" value=\"" + uri + "\"/>\n";
            } else {
                uric = rtback + uri;
                htmlb = "<a target=\"_blank\" href=\"" + uric + "\">" + uri + "</a>\n";
            }

            var urid = self['FORMULARIO'].vinculo_archivo_descarga;
            var uridwc;
            var htmlc;
            if (urid == "" || uri == null || urid == "N/A") {
                uridwc = "#";
                htmlc = "<input class=\"form-control url_1\" type=\"text\" value=\"" + urid + "\"/>\n";
            } else {
                uridwc = rtback + urid;
                htmlc = "<a target=\"_blank\" href=\"" + uridwc + "\">" + urid + "</a>\n";
            }

            $("#formulario").hide();
            $("#formdocs").show();

            $("#frm_id_formulario").val(self['FORMULARIO'].id_formulario);
            $("#frm_cod_documento").val(self['FORMULARIO'].cod_documento);
            $("#frm_cod_formulario").val(self['FORMULARIO'].cod_formulario);
            $("#frm_titulo_formulario").val(self['FORMULARIO'].titulo_formulario);
            $("#frm_version_vigente_formulario").val(self['FORMULARIO'].version_vigente_formulario);
            $("#frm_fecha_publicacion_formulario").val(self['FORMULARIO'].fecha_publicacion_formulario);
            $("#frm_aprobado_por").val(self['FORMULARIO'].aprobado_por);
            $("#frm_adg").append(htmlb);
            $("#frm_vad").append(htmlc);

            for (i = 0; i < self['DOCUMENTOS'].length; i++) {
                var url = self['DOCUMENTOS'][i].vinculo_archivo_digital;
                var urlc;
                var html;
                if (url == "" || url == null || url == "N/A") {
                    urlc = "#";
                    html = "<input class=\"form-control url_1\" type=\"text\" value=\"" + url + "\"/>\n";
                } else {
                    urlc = rtback + url;
                    html = "<a target=\"_blank\" href=\"" + urlc + "\">" + url + "</a>\n";
                }

                var urld = self['DOCUMENTOS'][i].vinculo_diagrama_de_flujo;
                var urldwc;
                var htmld;
                if (urld == "" || url == null || urld == "N/A") {
                    urldwc = "#";
                    htmld = "<input class=\"form-control url_1\" type=\"text\" value=\"" + urld + "\"/>\n";
                } else {
                    urldwc = rtback + urld;
                    htmld = "<a target=\"_blank\" href=\"" + urldwc + "\">" + urld + "</a>\n";
                }
                $("#ul_dcto").append("<li>\n" +
                    "  <fieldset class=\"name\">\n" +
                    "    <div class=\"row p-3\">\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">COD. DOCUMENTO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control cod_doc_1\" type=\"text\" value=\"" + self['DOCUMENTOS'][i].cod_documento + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">COD. PROCESO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control cod_proc_1\" type=\"text\" value=\"" + self['DOCUMENTOS'][i].cod_proceso + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">TIPO DOCUMENTO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control tipo_doc_1\" type=\"text\" value=\"" + self['DOCUMENTOS'][i].tipo_documento + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">TITULO DOC.</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control tit_doc_1\" type=\"text\" value=\"" + self['DOCUMENTOS'][i].titulo_doc + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">VERSION</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control ver_vig_1\" type=\"text\" value=\"" + self['DOCUMENTOS'][i].version_vigente + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">FECHA PUBLICACION</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control fec_pub_1\" type=\"text\" value=\"" + self['DOCUMENTOS'][i].fecha_publicacion + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">APROBADO POR</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control apro_por_1\" type=\"text\" value=\"" + self['DOCUMENTOS'][i].aprobado_por + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">CARPETA OPERATIVA</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control\" type=\"text\" value=\"" + self['DOCUMENTOS'][i].carpeta_operativa + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">VINCULO ARCHIVO DIGITAL</label>\n" +
                    "          <div class=\"col-sm-10\">\n" + html +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">VINCULO DIAGRAMA DE FLUJO</label>\n" +
                    "          <div class=\"col-sm-10\">\n" + htmld +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  </fieldset>\n" +
                    "</li>")
            }
            
        })
        .catch(function(error) {
            // handle error
            console.log(error);

        })
        .then(function() {
            // always executed
        });
}

//Documento externo
$("#btn_dleg").click(docExternosYLegales)

function docExternosYLegales() {
    $("#op_docs").hide();
    $("#doclegal").show();
    $("#tituloDocumentacion").text('Documentos - Externos y Legales');
    axios.get('/listar_docleg')
        .then(function(response) {
            var rtback = $('#rt_dfr').val();
            //console.log(response.data)
            var data_DocExt = response.data
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push([
                    response.data[i].GERENCIA, response.data[i].AREA,
                    response.data[i].TIPO, response.data[i].CODIGO, response.data[i].TITULO,
                    response.data[i].VINCULO_ARCHIVO, response.data[i].FECHA_PUBLICACION, response.data[i].COD_PROCESO
                ])
            }
            var tableDocExt = $('#table_docleg').DataTable({
                "scrollX": true,
                scrollY: "300px",
                data: data_DocExt,
                columns: [
                    { title: "TIPO", data: "TIPO" },
                    { title: "CODIGO", data: "CODIGO" },
                    { title: "TITULO", data: "TITULO" },
                    {
                        title: "VINCULO ARCHIVO",
                        data: 'VINCULO_ARCHIVO',
                        render: function(data) {
                            var url;
                            var a;
                            if (data == "" || data == null || data == "N/A") {
                                url = "#";
                                a = '<a class="btn btn-primary btn-sm" href="' + url + '"><i class="fas fa-file-text"></i> Ver Archivo</a>'
                            } else {
                                url = rtback + data;
                                a = '<a class="btn btn-primary btn-sm" href="' + url + '" target="_blank"><i class="fas fa-file-text"></i> Ver Archivo</a>'
                            }
                            return a
                        }
                    },
                    { title: "FECHA PUBLICACIÓN", data: "FECHA_PUBLICACION" },
                    { title: "GERENCIA", data: "GERENCIA" },
                    { title: "AREA", data: "AREA" },
                    { title: "CODIGO PROCESO", data: "COD_PROCESO" }
                    
                ]
            });
            yadcf.init(tableDocExt, [{
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
                column_number: 6,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos",
            }, {
                column_number: 7,
                select_type: 'select2',
                filter_reset_button_text: false,
                filter_default_label: "Todos"
            }],
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
//doc proceso
$("#btn_dproc").click(docEnProceso)

function docEnProceso() {
    $("#op_docs").hide();
    $('#tituloDocumentacion').text('Documentos en proceso')
    axios.post('/detalle_docproc')
        .then(function(response) {
            var rtback = $('#rt_dfr').val();
            self = response.data
                //console.log(self)
                // Documentos en proceso
            for (i = 0; i < self.length; i++) {
                var url = self[i].VINCULO_ARCHIVO_DIGITAL;
                var urlc;
                var html;
                if (url == "" || url == null || url == "N/A") {
                    urlc = "#";
                    html = "<input class=\"form-control url_1\" type=\"text\" value=\"" + url + "\"/>\n";
                } else {
                    urlc = rtback + url;
                    html = "<a target=\"_blank\" href=\"" + urlc + "\">" + url + "</a>\n";
                }
                $("#ul_dprc").append("<li>\n" +
                    "  <fieldset class=\"name\">\n" +
                    "    <div class=\"row p-3\">\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">ID REVISIÓN</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input id=\"idprv-frm\" class=\"form-control cod_doc_1\" type=\"text\" value=\"" + self[i].ID + "\" />\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">NUEVO O ATUALIZACION</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control cod_proc_1\" type=\"text\" value=\"" + self[i].NUEVO_O_ACTUALIZACION + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">COD. PROCESO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control tipo_doc_1\" type=\"text\" value=\"" + self[i].COD_PROCESO + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">TIPO DOCUMENTO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control tit_doc_1\" type=\"text\" value=\"" + self[i].TIPO_DOCUMENTO + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">TITULO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control ver_vig_1\" type=\"text\" value=\"" + self[i].TITULO + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">VERSION</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control fec_pub_1\" type=\"text\" value=\"" + self[i].VERSION + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">VINCULO ARCHIVO DIGITAL</label>\n" +
                    "          <div class=\"col-sm-8\">\n" + html +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">CARPETA OPERATIVA</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control car_ope_1\" type=\"text\" value=\"" + self[i].CARPETA_OPERATIVA + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">APROBADO O RECHAZADO</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control vin_arch_1\" type=\"text\" value=\"" + self[i].APROBADO_O_RECHAZADO + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-12\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">APROBADO POR</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control vin_diag_1\" type=\"text\" value=\"" + self[i].APROBADO_POR + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "      <div class=\"col-sm-6\">\n" +
                    "        <div class=\"form-group row\">\n" +
                    "          <label class=\"paralabel-control col-sm-4\">FECHA APROBACION</label>\n" +
                    "          <div class=\"col-sm-8\">\n" +
                    "            <input class=\"form-control car_ope_1\" type=\"text\" value=\"" + self[i].FECHA_APROBACION + "\"/>\n" +
                    "          </div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  </fieldset>\n" +
                    "</li>")


            }

            $("#ref-prv").click(function() { //alert('new'+' | '+$("#idprv-frm").val());
                $("#ul_dprv").hide();
                if (document.getElementById('idprv-frm')) {
                    axios.post('/detalle_docrev', {
                            id: $("#idprv-frm").val()
                        })
                        .then(function(response) {
                            self = response.data
                            //console.log(self)
                            $("#ul_dprv").show();

                            var dataset = [];
                            for (var j = 0; j < self.length; j++) {
                                dataset.push([self[j].id_revision, self[j].fecha_recibido,
                                    self[j].responsable_revision, self[j].estado, self[j].firma_electronica
                                ])
                            }

                            if ($.fn.dataTable.isDataTable('#table_procrev')) {
                                table = $('#table_procrev').DataTable();
                                table.destroy();
                                table = $('#table_procrev').DataTable({
                                    data: dataset,
                                    columns: [
                                        { title: "ID. REVISIÓN" },
                                        { title: "FECHA RECIBIDO" },
                                        { title: "RESPONSABLE REVISIÓN" },
                                        { title: "ESTADO" },
                                        { title: "FIRMA ELECTRONICA" }
                                    ]
                                });
                            } else {
                                table = $('#table_procrev').DataTable({
                                    data: dataset,
                                    columns: [
                                        { title: "ID. REVISIÓN" },
                                        { title: "FECHA RECIBIDO" },
                                        { title: "RESPONSABLE REVISIÓN" },
                                        { title: "ESTADO" },
                                        { title: "FIRMA ELECTRONICA" }
                                    ]
                                });
                            }
                        })
                        .catch(function(error) {
                            // handle error
                            console.log(error);

                        })
                        .then(function() {
                            // always executed
                        });
                } else {
                    Swal.fire('No existen datos relacionados', '', 'warning')
                }

            });

            Pagination.init('list-dprc', {
                bosePagination: {
                    page: 1
                }
            });

            //Documentos en proceso de revisión
            Pagination2.init('list-dprv', {
                bosePagination: {
                    page: 1
                }
            });
            //console.log(response.data)
            $("#det_docproc").show();
            //setTimeout(function(){ $("#det_docproc").show(); }, 2000);
        })
        .catch(function(error) {
            // handle error
            console.log(error);

        })
        .then(function() {
            // always executed
        });
}




//**********************/ FICHA DE CARGOS /**********************//

function detalle_fichacargo(idfc) {
    axios.post('/detalle_fichacargo', {
            id: idfc
        })
        .then(function(response) {
            var rtback = $('#rt_fc').val();
            self = response.data
            //console.log(self)
            $("#lista_ord").hide();
            $("#list_fc").hide();
            $("#detalle_fichacargo").show();

            $("#fc_id").val(self.fichacargo[0].id_cargo);
            $("#fc_id_area").val(self.fichacargo[0].id_area);
            $("#fc_id_gas").val(self.fichacargo[0].id_area);
            $("#fc_gerencia").val(self.fichacargo[0].gerencia);
            $("#fc_area").val(self.fichacargo[0].area);
            $("#fc_sector").val(self.fichacargo[0].sector);
            $("#fc_objetivo_cargo").val(self.fichacargo[0].objetivo_cargo);
            $("#fc_experiencia").val(self.fichacargo[0].experiencia);
            $("#fc_conocimientos").val(self.fichacargo[0].conocimientos);
            $("#fc_formacion").val(self.fichacargo[0].formacion);
            $("#fc_caracteristicas_pers").val(self.fichacargo[0].caracteristicas_pers);
            $("#fc_responsabilidades").val(self.fichacargo[0].responsabilidades);
            $("#fc_fecha_aprobacion").val(self.fichacargo[0].fecha_aprobacion);
            $("#fc_aprobado_jefe").val(self.fichacargo[0].aprobado_jefe);
            $("#fc_firma_electronica_jefe").val(self.fichacargo[0].firma_electronica_jefe);
            $("#fc_aprobado_gerente").val(self.fichacargo[0].aprobado_gerente);
            $("#fc_firma_electronica_gerente").val(self.fichacargo[0].firma_electronica_gerente);
            $("#fc_vinculo_archivo_ficha_cargo_boton").attr("href", rtback + self.fichacargo[0].vinculo_archivo_ficha_cargo)
            $("#fc_vinculo_archivo_ficha_cargo_boton").attr("target", "_blank")

            //console.log(self.docasociados)
            var dataset = [];
            for (var i = 0; i < self.docasociados.length; i++) {
                dataset.push([self.docasociados[i].tipo_doc, self.docasociados[i].codigo_doc, self.docasociados[i].titulo_doc,
                    self.docasociados[i].archivo
                ])
            }
            $('#FICHACARGO_TABLE').DataTable({
                data: self.docasociados,
                columns: [
                    { title: "TIPO DOC.", data: "tipo_doc" },
                    { title: "CODIGO DOC.", data: "codigo_doc" },
                    { title: "TITULO DOC.", data: "titulo_doc" },
                    {
                        title: "ARCHIVO",
                        data: "archivo",
                        render: function(data) {
                            var a = '<a class="btn btn-primary btn-sm" target="_blank" href="' + rtback + data + '">Ver archivo</a>'
                            return a
                        }
                    }
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

//FICHA DE CARGO lista
$("#btn_cargos").click(fichaCargo)

function fichaCargo() {
    $("#opciones").hide();
    $("#op_procesos").hide();
    $("#list_fc").show();
    $("#ficha_proceso").hide();

    $('#tituloDocumentacion').text('Ficha de cargo')
    axios.get('/lista_fichacargo')
        .then(function(response) {
            var dataFichaCargo = response.data
            //console.log(response.data)
            var dataset = [];
            for (var i = 0; i < response.data.length; i++) {
                dataset.push(["<button class='btn btn-primary' data-idfc=" + response.data[i].id + ">Detalle Ficha Cargo</button>",
                    response.data[i].gerencia, response.data[i].area,
                    response.data[i].id_cargo, response.data[i].f_aprobacion, response.data[i].aprobado_jefe, response.data[i].aprobado_gerente
                ])
            }
            var tableFichaCargo = $('#table_fcdata').DataTable({
                "createdRow": function(row, data, index) {
                    $('td', row).eq(0).click(function() {
                        detalle_fichacargo($('td', row).eq(0).children().data("idfc"));
                    });
                },
                "scrollX": true,
                scrollY: "300px",
                data: dataFichaCargo,
                columns: [{
                        title: "",
                        data: "id",
                        render: function(data) {
                            var a = '<button class="btn btn-primary" data-idfc=" ' + data + '">Detalle Ficha Cargo</button>'
                            return a
                        }
                    },
                    { title: "GERENCIA", data: "gerencia" },
                    { title: "AREA", data: "area" },
                    { title: "ID. CARGO", data: "id_cargo" },
                    { title: "FECHA APROBACIÓN", data: "f_aprobacion" },
                    { title: "APROBADO JEFE", data: "aprobado_jefe" },
                    { title: "APROBADO GERENTE", data: "aprobado_gerente" }
                ]
            });
            $("#button-back").show();
            yadcf.init(tableFichaCargo, [{
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
            }],
            {
                cumulative_filtering: true                
            }
            )

        })
        .catch(function(error) {
            // handle error
            console.log(error);

        })
        .then(function() {
            // always executed
        });
}


//Boton ver mas form proceso ord por gerencia
$('#ver_mas_fp').click(function() {
    $('#fichaproceso_vermas').fadeToggle()
});
$('#ver_mas_btn_documentos').click(function() {
    $('#ver_mas_form_documento').fadeToggle()
        // alert('hola')
})
$('#ver_mas_btn_crocm').click(function() {
    $('#ver_mas_form_crocm').fadeToggle()
        // alert('hola')
})
$('#ver_mas_btn_indicadores').click(function() {
    $('#ver_mas_form_indicadores').fadeToggle()
        // alert('hola')
})
$('#ver_mas_btn_gas').click(function() {
    $('#ver_mas_form_gas').fadeToggle()
        // alert('hola')
})





//**********************/ AUDITORIA /**********************//