let indexClienteSeleccionado;
let obj = [];

let jsonData = '[{ "nombreCliente":"María", "apellidoPaterno":"García", "apellidoMaterno":"López", "generoCliente":"Femenino", "nacimientoCliente":"15/03/1992", "rfcCliente":"GALM920315HDFRMC3", "curpCliente":"GALM920315MDFRMC09", "domicilioCliente":"Calle Juárez #123", "cpCliente":"12345", "ciudadCliente":"León", "estadoCliente":"CDMX", "estatus":"Activo", "rutaFoto":"imagenes/Masculino1.jpg", "codigoBarras":"9876543210", "ingresosCliente":"10/06/2010", "ingresosMensuales":"15000",  "puestoCliente":"Analista", "salarioCliente":"18000", "codigoEmpresa":"ABCDE12345"},{"nombreCliente":"Javier", "apellidoPaterno":"López", "apellidoMaterno":"Martínez", "generoCliente":"Másculino", "nacimientoCliente":"25/11/1985", "rfcCliente":"LOMJ851125TJCRV29", "curpCliente":"LOMJ851125HDFRV06", "domicilioCliente":"Avenida Reforma #456", "cpCliente":"67890", "ciudadCliente":"León", "estadoCliente":"JAL", "estatus":"Activo", "rutaFoto":"/Femenino1.jpg", "codigoBarras":"5432109876", "ingresosCliente":"05/02/2006", "ingresosMensuales":"25000", "puestoCliente":"Gerente de Ventas", "salarioCliente":"35000", "codigoEmpresa":"FGHIJ67890" },{"nombreCliente":"Ana", "apellidoPaterno":"Sánchez", "apellidoMaterno":"Gómez", "generoCliente":"Femenino", "nacimientoCliente":"08/09/1988", "rfcCliente":"SAGA880908HDFNC02", "curpCliente":"SAGA880908MDFNC01", "domicilioCliente":"Calle Morelos #789", "cpCliente":"56789", "ciudadCliente":"León", "estadoCliente":"NL", "estatus":"Activo", "rutaFoto":"/img/clientes/ana_sanchez.jpg", "codigoBarras":"0123456789", "ingresosCliente":"20/04/2012", "ingresosMensuales":"18000", "puestoCliente":"Ingeniera", "salarioCliente":"22000", "codigoEmpresa":"KLMNO56789" }, {"nombreCliente":"Carlos", "apellidoPaterno":"Hernández", "apellidoMaterno":"Rodríguez", "generoCliente":"Másculino", "nacimientoCliente":"12/07/1990", "rfcCliente":"HERC900712TJCSV12", "curpCliente":"HERC900712HDFRV03", "domicilioCliente":"Avenida Benito Juárez #234", "cpCliente":"45678", "ciudadCliente":"León", "estadoCliente":"PUE", "estatus":"Activo", "rutaFoto":"../img/Femenino1.jpg", "codigoBarras":"9876543210", "ingresosCliente":"15/10/2013", "ingresosMensuales":"22000", "puestoCliente":"Diseñador Gráfico", "salarioCliente":"26000", "codigoEmpresa":"PQRST45678" },{"nombreCliente":"Laura", "apellidoPaterno":"Martínez", "apellidoMaterno":"López", "generoCliente":"Femenino", "nacimientoCliente":"30/05/1987", "rfcCliente":"MALO870530HDFCVR18", "curpCliente":"MALO870530HDFCVR07", "domicilioCliente":"Calle Revolución #567", "cpCliente":"23456", "ciudadCliente":"León", "estadoCliente":"BCN", "estatus":"Activo", "rutaFoto":"/img/clientes/laura_martinez.jpg", "codigoBarras":"0123456789", "ingresosCliente":"08/03/2011", "ingresosMensuales":"17000", "puestoCliente":"Contadora", "salarioCliente":"21000", "codigoEmpresa":"UVWXY23456"},{"nombreCliente":"David", "apellidoPaterno":"González", "apellidoMaterno":"Hernández", "generoCliente":"Másculino", "nacimientoCliente":"18/12/1995", "rfcCliente":"GODH951218TJCSV24", "curpCliente":"GODH951218HDFCSV05", "domicilioCliente":"Avenida Hidalgo #890", "cpCliente":"34567", "ciudadCliente":"León", "estadoCliente":"QRO", "estatus":"Activo", "rutaFoto":"/img/clientes/david_gonzalez.jpg", "codigoBarras":"9876543210", "ingresosCliente":"25/09/2016", "ingresosMensuales":"19000", "puestoCliente":"Ingeniero de Software", "salarioCliente":"23000", "codigoEmpresa":"Z12345QRO" },{ "nombreCliente":"Karla", "apellidoPaterno":"Rojas", "apellidoMaterno":"Martínez", "generoCliente":"Femenino", "nacimientoCliente":"02/08/1993", "rfcCliente":"ROMK930802HDFRJC04", "curpCliente":"ROMK930802MDFRJC09", "domicilioCliente":"Calle Allende #456", "cpCliente":"56789", "ciudadCliente":"León", "estadoCliente":"JAL", "estatus":"Activo", "rutaFoto":"/img/clientes/karla_rojas.jpg", "codigoBarras":"0123456789", "ingresosCliente":"15/05/2014", "ingresosMensuales":"20000", "puestoCliente":"Abogada", "salarioCliente":"24000", "codigoEmpresa":"ABCDE67890"},{"nombreCliente":"Alejandro", "apellidoPaterno":"Díaz", "apellidoMaterno":"López", "generoCliente":"Másculino", "nacimientoCliente":"17/09/1989", "rfcCliente":"DILA890917HDFZPR08", "curpCliente":"DILA890917HDFZPR05", "domicilioCliente":"Avenida Reforma #123", "cpCliente":"45678", "ciudadCliente":"León", "estadoCliente":"CDMX", "estatus":"Activo", "rutaFoto":"/img/clientes/alejandro_diaz.jpg", "codigoBarras":"9876543210", "ingresosCliente":"10/08/2012", "ingresosMensuales":"18000", "puestoCliente":"Arquitecto", "salarioCliente":"22000", "codigoEmpresa":"FGHIJ12345"},{ "nombreCliente":"Elena", "apellidoPaterno":"Pérez", "apellidoMaterno":"García", "generoCliente":"Femenino", "nacimientoCliente":"28/06/1997", "rfcCliente":"PEGU970628HDFDNE02", "curpCliente":"PEGU970628MDFDNE05", "domicilioCliente":"Calle Hidalgo #789", "cpCliente":"23456", "ciudadCliente":"León", "estadoCliente":"NL", "estatus":"Activo", "rutaFoto":"/img/clientes/ elena_perez.jpg", "codigoBarras":"0123456789", "ingresosCliente":"20/03/2015", "ingresosMensuales":"16000", "puestoCliente":"Maestra", "salarioCliente":"20000", "codigoEmpresa":"KLMNO23456"},{ "nombreCliente":"Ricardo", "apellidoPaterno":"Hernández", "apellidoMaterno":"González", "generoCliente":"Másculino", "nacimientoCliente":"09/11/1986", "rfcCliente":"HEGR861109HDFCNR03", "curpCliente":"HEGR861109HDFCNR07", "domicilioCliente":"Avenida Juárez #234", "cpCliente":"34567", "ciudadCliente":"León", "estadoCliente":"JAL", "estatus":"Activo", "rutaFoto":"/img/clientes/ ricardo_hernandez.jpg", "codigoBarras":"9876543210", "ingresosCliente":"18/07/2011", "ingresosMensuales":"19000", "puestoCliente":"Doctor", "salarioCliente":"23000", "codigoEmpresa":"PQRST34567"},{"nombreCliente":"Sofía", "apellidoPaterno":"López", "apellidoMaterno":"Martínez", "generoCliente":"Femenino", "nacimientoCliente":"14/04/1994", "rfcCliente":"LOMS940414HDFCFT08", "curpCliente":"LOMS940414HDFCFT01", "domicilioCliente":"Calle Benito Juárez #567", "cpCliente":"45678", "ciudadCliente":"León","estadoCliente":"PUE", "estatus":"Activo", "rutaFoto":"/img/clientes/sofia_lopez.jpg", "codigoBarras":"0123456789", "ingresosCliente":"12/02/2013", "ingresosMensuales":"17000","puestoCliente":"Psicóloga", "salarioCliente":"21000", "codigoEmpresa":"UVWXY45678"},{"nombreCliente":"Héctor", "apellidoPaterno":"García", "apellidoMaterno":"Hernández", "generoCliente":"Másculino", "nacimientoCliente":"23/10/1998", "rfcCliente": "GAHE981023HDFRHT05", "curpCliente":"GAHE981023HDFRHT03", "domicilioCliente":"Avenida Morelos #890", "cpCliente":"34567", "ciudadCliente":"León", "estadoCliente":"BCN", "estatus":"Activo", "rutaFoto":"/img/clientes/hector_garcia.jpg","codigoBarras":"9876543210", "ingresosCliente":"28/09/2017", "ingresosMensuales":"20000", "puestoCliente":"Ingeniero Industrial","salarioCliente":"24000", "codigoEmpresa":"Z12345BCN"}]';

function init() {
    obj = JSON.parse(jsonData);
    actualizaTabla();
}


function obtenerNombreFoto() {
    let nombreFoto;
    nombreFoto = document.getElementById("txtfoto").value;
    nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\") + 1);
    return nombreFoto;
}

function actualizaTabla() {
    let cuerpo = "";
    obj.forEach(function (newCliente, index) {
        let registro =
            '<tr onclick="selectCliente(' + index + ');">' +
            '<td>' + index + '</td>' +
            '<td>' + newCliente.nombreCliente + '</td>' +
            '<td>' + newCliente.apellidoPaterno + " " + newCliente.apellidoMaterno + '</td>' +
            '<td>' + newCliente.generoCliente + '</td>' +
            '<td>' + newCliente.rfcCliente + '</td>' +
            '<td>' + newCliente.curpCliente + '</td>' +
            '<td> <img src="img/' + newCliente.rutaFoto + '" width="100"> </td>' +
            '<td>' + newCliente.cpCliente + '</td>' +
            '<td>' + newCliente.ciudadCliente + '</td>' +
            '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblClientes").innerHTML = cuerpo;
}

function selectCliente(index) {
    document.getElementById("txtNom").value = obj[index].nombreCliente;
    document.getElementById("txtPrmAp").value = obj[index].apellidoPaterno;
    document.getElementById("txtSegAp").value = obj[index].apellidoMaterno;
    document.getElementById("txtGen").value = obj[index].generoCliente;
    document.getElementById("txtNacim").value = obj[index].nacimientoCliente;
    document.getElementById("txtRFC").value = obj[index].rfcCliente;
    document.getElementById("txtCURP").value = obj[index].curpCliente;
    document.getElementById("txtTel").value = obj[index].telefonoCliente;
    document.getElementById("txtEmail").value = obj[index].emailCliente;
    document.getElementById("txtDomi").value = obj[index].domicilioCliente;
    document.getElementById("txtCP").value = obj[index].cpCliente;
    document.getElementById("txtCiud").value = obj[index].ciudadCliente;
    document.getElementById("txtEst").value = obj[index].estadoCliente;
    document.getElementById("txtIngres").value = obj[index].ingresosCliente;
    document.getElementById("txtPuesto").value = obj[index].puestoCliente;
    document.getElementById("txtSalario").value = obj[index].salarioCliente;
    document.getElementById("txtCodEmp").value = obj[index].codigoEmpleado;
    document.getElementById("txtfoto").src = obj[index].rutaFoto;




    
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexClienteSeleccionado = index;
}

function limpiar() {
    document.getElementById("txtNom").value = ""; 
   document.getElementById("txtPrmAp").value = "";
   document.getElementById("txtSegAp").value = "";
   document.getElementById("txtGen").value = "";
   document.getElementById("txtNacim").value = "";
   document.getElementById("txtRFC").value = "";
   document.getElementById("txtCURP").value = "";
   document.getElementById("txtTel").value = "";
   document.getElementById("txtEmail").value = "";
   document.getElementById("txtDomi").value = "";
   document.getElementById("txtCP").value = "";
   document.getElementById("txtCiud").value = "";
   document.getElementById("txtEst").value = "";
   document.getElementById("txtIngres").value = "";
   document.getElementById("txtPuesto").value = "";
   document.getElementById("txtSalario").value = "";
   document.getElementById("txtfoto").src = "";

   document.getElementById("btnModificar").classList.add("disabled");
   document.getElementById("btnEliminar").classList.add("disabled");
   document.getElementById("btnAgregar").classList.remove("disabled");
   indexClienteSeleccionado = 0;
}


function agregarCliente() {
    let nombre, apellidoPaterno, apellidoMaterno, genero,
        nacimiento, rfc, curp, domicilio,
        cp, ciudad, estado, ingresos, puesto, salario, foto;

    nombre = document.getElementById("txtNom").value;
    apellidoPaterno = document.getElementById("txtPrmAp").value;
    apellidoMaterno = document.getElementById("txtSegAp").value;
    genero = document.getElementById("txtGen").value;
    nacimiento = document.getElementById("txtNacim").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    domicilio = document.getElementById("txtDomi").value;
    cp = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiud").value;
    estado = document.getElementById("txtEst").value;
    ingresos = document.getElementById("txtIngres").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    foto = obtenerNombreFoto();

    let newCliente = {
        'nombreCliente': nombre,
        'apellidoPaterno': apellidoPaterno,
        'apellidoMaterno': apellidoMaterno,
        'generoCliente': genero,
        'nacimientoCliente': nacimiento,
        'rfcCliente': rfc,
        'curpCliente': curp,
        'domicilioCliente': domicilio,
        'cpCliente': cp,
        'ciudadCliente': ciudad,
        'estadoCliente': estado,
        'ingresosCliente': ingresos,
        'puestoCliente': puesto,
        'salarioCliente': salario,
        'rutaFoto': foto
    };
    obj.push(newCliente);

    jsonData = JSON.stringify(obj);

    console.log(jsonData);
    console.log(typeof (jsonData));

    limpiar();
    actualizaTabla();
}

function eliminarCliente() {
    swal({
        title: "¿Quieres eliminar el cliente seleccionado?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                obj[indexClienteSeleccionado].estatus = "Inactivo";
                limpiar();
                actualizaTabla();
                swal("Eliminado con éxito!", {
                    icon: "success",
                });
            } else {
                swal("No se eliminó el cliente");
            }
        });
}


function modificarCliente() {
    swal({
        title: "¿Quieres modificar el cliente seleccionado?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willModify) => {
        if (willModify) {
            modificarCliente();
            actualizaTabla();
            limpiar();
            swal("¡Cliente modificado con éxito!", {
                icon: "success",
            });
        } else {
            swal("¡Los cambios en el cliente han sido cancelados!");
        }
    });
}



function modificarCliente() {
    let nombre, apellidoPaterno, apellidoMaterno, genero,
        nacimiento, rfc, curp, domicilio,
        cp, ciudad, estado, ingresos, puesto, salario, foto;

    nombre = document.getElementById("txtNom").value;
    apellidoPaterno = document.getElementById("txtPrmAp").value;
    apellidoMaterno = document.getElementById("txtSegAp").value;
    genero = document.getElementById("txtGen").value;
    nacimiento = document.getElementById("txtNacim").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    domicilio = document.getElementById("txtDomi").value;
    cp = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiud").value;
    estado = document.getElementById("txtEst").value;
    ingresos = document.getElementById("txtIngres").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    foto = obtenerNombreFoto();

    let clienteModificado = {
        'nombreCliente': nombre,
        'apellidoPaterno': apellidoPaterno,
        'apellidoMaterno': apellidoMaterno,
        'generoCliente': genero,
        'nacimientoCliente': nacimiento,
        'rfcCliente': rfc,
        'curpCliente': curp,
        'domicilioCliente': domicilio,
        'cpCliente': cp,
        'ciudadCliente': ciudad,
        'estadoCliente': estado,
        'ingresosCliente': ingresos,
        'puestoCliente': puesto,
        'salarioCliente': salario,
        'rutaFoto': foto
    };

    obj[indexClienteSeleccionado] = clienteModificado;
    jsonData = JSON.stringify(obj);

    limpiar();
    actualizaTabla();
}




init();
