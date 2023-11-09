let indexEmpleadosSeleccionado;
let obj = [];

let jsonData = '[{"nombreEmpleado":"Isaac", "apelldiPaterno":"Ramírez", "apellidoMaterno":"De Maria Y Campos", "generoEmpleado":"Hombre", "nacimientoEmpleado":"04/10/2004", "rfcEmpleado":"No se", "curpEmpleado":"RAMI041004HGTMRSA7", "domicilioEmpleado":"Mi casa", "cpEmpleado":"38350", "ciudadEmpleado":"León", "estadoEmpleado":"GTO", "tefonoEmpleado":"4774809461", "estatus":"Si", "rutaFoto":"/img/Empleadoss/", "codigoBarras":"1234567890", "estatus":"Disponible", "ingresosEmpleado":"20/09/2014", "ingresosEmpleado":"8000", "puestoEmpleado":"Gerente", "salarioEmpleado":"9000", "correoEmpleado":"empleado@gmail.com", "codigoEmpre":"AAAAA000000"},{"nombreEmpleado":"Isaac", "apelldiPaterno":"Ramírez", "apellidoMaterno":"De Maria Y Campos", "generoEmpleado":"Hombre", "nacimientoEmpleado":"04/10/2004", "rfcEmpleado":"No se", "curpEmpleado":"RAMI041004HGTMRSA7", "domicilioEmpleado":"Mi casa", "cpEmpleado":"38350", "ciudadEmpleado":"León", "estadoEmpleado":"GTO", "tefonoEmpleado":"4774809461", "estatus":"Si", "rutaFoto":"/img/Empleadoss/", "codigoBarras":"1234567890", "estatus":"Disponible", "ingresosEmpleado":"20/09/2014", "ingresosEmpleado":"8000", "puestoEmpleado":"Gerente", "salarioEmpleado":"9000", "correoEmpleado":"empleado@gmail.com", "codigoEmpre":"AAAAA000000"}]';

function init() {
    obj = JSON.parse(jsonData);
    console.log(obj);
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
    obj.forEach(function (newEmpleados, index) {
        let registro =
            '<tr onclick="selectEmpleado(' + index + ');">' +
            '<td>' + index + '</td>' +
            '<td>' + newEmpleados.nombreEmpleado + '</td>' +
            '<td>' + newEmpleados.apelldiPaterno + '</td>' +
            '<td>' + newEmpleados.curpEmpleado + '</td>' +
            '<td>' + newEmpleados.rfcEmpleado + '</td>' +
            '<td> <img src="' + newEmpleados.rutaFoto + newEmpleados.foto + '" width="100"> </td>' +
            '<td>' + newEmpleados.generoEmpleado + '</td>' +
            '<td>' + newEmpleados.cpEmpleado + '</td>' +
            '<td>' + newEmpleados.estadoEmpleado + '</td>' +
            '<td>' + newEmpleados.tefonoEmpleado + '</td>' +
            '<td>' + newEmpleados.ciudadEmpleado + '</td>' +
            '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}

function selectEmpleado(index) {
    document.getElementById("txtNom").value = obj[index].nombreEmpleado;
    document.getElementById("txtPrmAp").value = obj[index].apelldiPaterno;
    document.getElementById("txtSegAp").value = obj[index].apellidoMaterno;
    document.getElementById("txtGen").value = obj[index].generoEmpleado;
    document.getElementById("txtNacim").value = obj[index].nacimientoEmpleado;
    document.getElementById("txtRFC").value = obj[index].rfcEmpleado;
    document.getElementById("txtCURP").value = obj[index].curpEmpleado;
    document.getElementById("txtDomi").value = obj[index].domicilioEmpleado;
    document.getElementById("txtCP").value = obj[index].cpEmpleado;
    document.getElementById("txtCiud").value = obj[index].ciudadEmpleado;
    document.getElementById("txtEst").value = obj[index].estadoEmpleado;
    document.getElementById("txtTel").value = obj[index].tefonoEmpleado;

    // Datos adicionales
    document.getElementById("txtIngres").value = obj[index].ingresosEmpleado;       //Fecha
    document.getElementById("txtPuesto").value = obj[index].puestoEmpleado;
    document.getElementById("txtSalario").value = obj[index].salarioEmpleado;       // Decimal
    document.getElementById("txtEmail").value = obj[index].correoEmpleado;
    document.getElementById("txtCodEmp").value = obj[index].codigoEmpre;

    // Fotos
    document.getElementById("txtfoto").src = obj[index].rutaFoto + obj[index].foto;
    document.getElementById("txtfoto").value = "";

    // Botones
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexEmpleadosSeleccionado = index;
}

function modificarEmpleado() {
    let nombre, apellPaterno, apellMaterno, genero, nacimiento, rfc, curp, domicilio, cp, ciudad, estado, telefono, ingresos, puesto, salario, email, codigoEmpre, foto;

    nombre = document.getElementById("txtNom").value;
    apellPaterno = document.getElementById("txtPrmAp").value;
    apellMaterno = document.getElementById("txtSegAp").value;
    genero = document.getElementById("txtGen").value;
    nacimiento = document.getElementById("txtNacim").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    domicilio = document.getElementById("txtDomi").value;
    cp = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiud").value;
    estado = document.getElementById("txtEst").value;
    telefono = document.getElementById("txtTel").value;
    ingresos = document.getElementById("txtIngres").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    email = document.getElementById("txtEmail").value;
    codigoEmpre = document.getElementById("txtCodEmp").value;
    foto = obtenerNombreFoto();

    let empleadoModificado = {
        'nombreEmpleado': nombre,
        'apelldiPaterno': apellPaterno,
        'apellidoMaterno': apellMaterno,
        'generoEmpleado': genero,
        'nacimientoEmpleado': nacimiento,
        'rfcEmpleado': rfc,
        'curpEmpleado': curp,
        'domicilioEmpleado': domicilio,
        'cpEmpleado': cp,
        'ciudadEmpleado': ciudad,
        'estadoEmpleado': estado,
        'tefonoEmpleado': telefono,
        'ingresosEmpleado': ingresos,
        'puestoEmpleado': puesto,
        'salarioEmpleado': salario,
        'correoEmpleado': email,
        'codigoEmpre': codigoEmpre,
        'foto': foto
    };

    obj[indexEmpleadosSeleccionado] = empleadoModificado;
    actualizaTabla();
    limpiar();
    alert('Registro modificado con éxito!');
}

// Resto del código...

function agregarEmpleado() {
    let nombre, apellPaterno, apellMaterno, genero, nacimiento, rfc, curp, domicilio, cp, ciudad, estado, telefono, ingresos, puesto, salario, email, codigoEmpre, foto;

    nombre = document.getElementById("txtNom").value;
    apellPaterno = document.getElementById("txtPrmAp").value;
    apellMaterno = document.getElementById("txtSegAp").value;
    genero = document.getElementById("txtGen").value;
    nacimiento = document.getElementById("txtNacim").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    domicilio = document.getElementById("txtDomi").value;
    cp = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiud").value;
    estado = document.getElementById("txtEst").value;
    telefono = document.getElementById("txtTel").value;
    ingresos = document.getElementById("txtIngres").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    email = document.getElementById("txtEmail").value;
    codigoEmpre = document.getElementById("txtCodEmp").value;
    foto = obtenerNombreFoto();

    let nuevoEmpleado = {
        'nombreEmpleado': nombre,
        'apelldiPaterno': apellPaterno,
        'apellidoMaterno': apellMaterno,
        'generoEmpleado': genero,
        'nacimientoEmpleado': nacimiento,
        'rfcEmpleado': rfc,
        'curpEmpleado': curp,
        'domicilioEmpleado': domicilio,
        'cpEmpleado': cp,
        'ciudadEmpleado': ciudad,
        'estadoEmpleado': estado,
        'tefonoEmpleado': telefono,
        'ingresosEmpleado': ingresos,
        'puestoEmpleado': puesto,
        'salarioEmpleado': salario,
        'correoEmpleado': email,
        'codigoEmpre': codigoEmpre,
        'foto': foto
    };

    obj.push(nuevoEmpleado);
    actualizaTabla();
    limpiar();
    alert('Registro agregado con éxito!');
}

// Resto del código...


function limpiar() {
    document.getElementById("txtNom").value = "";
    document.getElementById("txtPrmAp").value = "";
    document.getElementById("txtSegAp").value = "";
    document.getElementById("txtGen").value = "";
    document.getElementById("txtNacim").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtCURP").value = "";
    document.getElementById("txtDomi").value = "";
    document.getElementById("txtCP").value = "";
    document.getElementById("txtCiud").value = "";
    document.getElementById("txtEst").value = "";
    document.getElementById("txtTel").value = "";
    document.getElementById("txtIngres").value = "";
    document.getElementById("txtPuesto").value = "";
    document.getElementById("txtSalario").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtCodEmp").value = "";
    document.getElementById("txtfoto").src = "img/default.jpg";
    document.getElementById("txtfoto").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexEmpleadosSeleccionado = 0;
}
// Resto del código...

function eliminarEmpleado() {
    if (confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
        obj.splice(indexEmpleadosSeleccionado, 1);
        actualizaTabla();
        limpiar();
        alert('Registro eliminado con éxito!');
    }
}

function despliegaFoto(fotoRuta) {
    let nombreFoto = obtenerNombreFoto();
    let ruta = 'img/';
    document.getElementById("txtfoto").src = ruta + nombreFoto;
}

init();
