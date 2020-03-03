$("#acncob").click(listar_cobertura)

function listar_cobertura(){
    axios.post('/listar_cobertura',{
        id: 1
    })
        .then(function (response) {
            self=response.data
            //console.log(self)
            /*let html = "<th>NRO.</th>\n"+
                        "<th>DESCRIPCION DATOS</th>\n"+
                        "<th>UNIDAD</th>\n";
            for(i=0;i<self.length;i++){
                html += "<th>\n" +
                    ""+self[i].anio+"\n" +  
                    "</th\n";
            }
            //console.log(response.data)
            $("#hd-lcob").append(html);*/
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
        .then(function () {
            // always executed
        }); 
}