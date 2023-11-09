document.addEventListener("DOMContentLoaded", function () {
    const sucursalDropdown = document.getElementById("sucursal");
    const btnConsultar = document.getElementById("btn-consultar");
    const resultadosDiv = document.getElementById("resultados");
    const tblProductos = document.getElementById("tblProductos");

    const jsonDataProductos = {
        "Centro": [
            { "id": 1, "cliente": "Ana Martínez", "fecha": "2023-07-18", "hora": "10:00 AM", "empleado": "Juan Pérez", "producto": "Donepecilo", "cantidad": 14, "precioUnitario": 547 },
            { "id": 2, "cliente": "Luisa González", "fecha": "2023-07-18", "hora": "11:00 AM", "empleado": "María Sánchez", "producto": "Etambutol", "cantidad": 50, "precioUnitario": 210 },
            { "id": 3, "cliente": "Carlos Rodríguez", "fecha": "2023-07-18", "hora": "12:00 PM", "empleado": "Pedro Gómez", "producto": "Efavirenz", "cantidad": 30, "precioUnitario": 254 },
            { "id": 4, "cliente": "Laura Martínez", "fecha": "2023-07-18", "hora": "1:00 PM", "empleado": "Alejandro Vargas", "producto": "Ciprofibrato", "cantidad": 30, "precioUnitario": 665 },
            { "id": 5, "cliente": "Elena Torres", "fecha": "2023-07-18", "hora": "2:00 PM", "empleado": "Sofía López", "producto": "Lidocaína", "cantidad": 20, "precioUnitario": 306 },
            { "id": 6, "cliente": "Javier Ramos", "fecha": "2023-07-18", "hora": "3:00 PM", "empleado": "Andrés Castro", "producto": "Ambroxol", "cantidad": 120, "precioUnitario": 277 },
            { "id": 7, "cliente": "María Torres", "fecha": "2023-07-18", "hora": "4:00 PM", "empleado": "Lucía García", "producto": "Metronidazol", "cantidad": 10, "precioUnitario": 973 },
            { "id": 8, "cliente": "Pedro Soto", "fecha": "2023-07-18", "hora": "5:00 PM", "empleado": "José Rodríguez", "producto": "Nitrofural", "cantidad": 6, "precioUnitario": 213 },
            { "id": 9, "cliente": "Sara Pérez", "fecha": "2023-07-18", "hora": "6:00 PM", "empleado": "Fernando Martínez", "producto": "Ibuprofeno", "cantidad": 30, "precioUnitario": 537 },
            { "id": 10, "cliente": "Daniel López", "fecha": "2023-07-18", "hora": "7:00 PM", "empleado": "Gabriela Ruiz", "producto": "Montelukast", "cantidad": 30, "precioUnitario": 686 }
        ],
        "Centro Max": [
            { "id": 11, "cliente": "Raúl González", "fecha": "2023-07-18", "hora": "8:00 AM", "empleado": "María Torres", "producto": "Ibuprofeno", "cantidad": 12, "precioUnitario": 570 },
            { "id": 12, "cliente": "Mónica Herrera", "fecha": "2023-07-18", "hora": "9:00 AM", "empleado": "Andrés Soto", "producto": "Clorodiazepóxido", "cantidad": 1, "precioUnitario": 73 },
            { "id": 13, "cliente": "Gabriel Ramírez", "fecha": "2023-07-18", "hora": "10:00 AM", "empleado": "Laura Pérez", "producto": "Brimonidina", "cantidad": 5, "precioUnitario": 1128 },
            { "id": 14, "cliente": "Carolina Vargas", "fecha": "2023-07-18", "hora": "11:00 AM", "empleado": "David López", "producto": "Metamizol", "cantidad": 10, "precioUnitario": 472 },
            { "id": 15, "cliente": "Federico Martínez", "fecha": "2023-07-18", "hora": "12:00 PM", "empleado": "Patricia Gómez", "producto": "Insulina detemir", "cantidad": 1, "precioUnitario": 1147 },
            { "id": 16, "cliente": "Isabel Rodríguez", "fecha": "2023-07-18", "hora": "1:00 PM", "empleado": "Javier Ramírez", "producto": "Latanoprost", "cantidad": 3, "precioUnitario": 99 },
            { "id": 17, "cliente": "Alberto Sánchez", "fecha": "2023-07-18", "hora": "2:00 PM", "empleado": "Beatriz Torres", "producto": "Amlodipino", "cantidad": 30, "precioUnitario": 78 },
            { "id": 18, "cliente": "Lorena Pérez", "fecha": "2023-07-18", "hora": "3:00 PM", "empleado": "Sergio Soto", "producto": "Amlodipino", "cantidad": 30, "precioUnitario": 511 },
            { "id": 19, "cliente": "Ricardo Gómez", "fecha": "2023-07-18", "hora": "4:00 PM", "empleado": "Paula López", "producto": "Zinc", "cantidad": 25, "precioUnitario": 419 },
            { "id": 20, "cliente": "Camila Martínez", "fecha": "2023-07-18", "hora": "5:00 PM", "empleado": "Juan Ramírez", "producto": "Prednisolona, Sulfacetamida", "cantidad": 10, "precioUnitario": 1052 }
        ],
        "Plaza Mayor": [
            { "id": 21, "cliente": "Diego Pérez", "fecha": "2023-07-18", "hora": "6:00 AM", "empleado": "Ana Martínez", "producto": "Travoprost", "cantidad": 1, "precioUnitario": 853 },
            { "id": 22, "cliente": "Valentina López", "fecha": "2023-07-18", "hora": "7:00 AM", "empleado": "Santiago Ramírez", "producto": "Prednisolona, Sulfacetamida", "cantidad": 10, "precioUnitario": 1052 },
            { "id": 23, "cliente": "Marcela Gómez", "fecha": "2023-07-18", "hora": "8:00 AM", "empleado": "Gustavo Torres", "producto": "Latanoprost", "cantidad": 3, "precioUnitario": 99 },
            { "id": 24, "cliente": "Andrea Sánchez", "fecha": "2023-07-18", "hora": "9:00 AM", "empleado": "Lucas Pérez", "producto": "Bromfeniramina", "cantidad": 15, "precioUnitario": 863 },
            { "id": 25, "cliente": "Felipe Ramírez", "fecha": "2023-07-18", "hora": "10:00 AM", "empleado": "Elena Martínez", "producto": "Metronidazol", "cantidad": 10, "precioUnitario": 973 },
            { "id": 26, "cliente": "Natalia Torres", "fecha": "2023-07-18", "hora": "11:00 AM", "empleado": "Miguel Soto", "producto": "Ácido ascórbico", "cantidad": 25, "precioUnitario": 253 },
            { "id": 27, "cliente": "Oscar Pérez", "fecha": "2023-07-18", "hora": "12:00 PM", "empleado": "Carolina Ramírez", "producto": "Donepecilo", "cantidad": 10, "precioUnitario": 547 },
            { "id": 28, "cliente": "Laura González", "fecha": "2023-07-18", "hora": "1:00 PM", "empleado": "Andrés López", "producto": "Ibuprofeno", "cantidad": 20, "precioUnitario": 537 },
            { "id": 29, "cliente": "Gonzalo Martínez", "fecha": "2023-07-18", "hora": "2:00 PM", "empleado": "Valentina Ramírez", "producto": "Etambutol", "cantidad": 40, "precioUnitario": 210 },
            { "id": 30, "cliente": "Valeria Pérez", "fecha": "2023-07-18", "hora": "3:00 PM", "empleado": "Javier Torres", "producto": "Ácido ascórbico", "cantidad": 25, "precioUnitario": 253 }
        ]
    };
        
    
    btnConsultar.addEventListener("click", function () {
        const sucursalSeleccionada = sucursalDropdown.value;
        const productos = jsonDataProductos[sucursalSeleccionada] || [];
        mostrarResultados(productos);
    });

    function mostrarResultados(productos) {
        tblProductos.querySelector("tbody").innerHTML = "";

        if (productos && productos.length > 0) {
            productos.forEach((producto) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${producto.id}</td>
                    <td>${producto.cliente}</td>
                    <td>${producto.fecha}</td>
                    <td>${producto.hora}</td>
                    <td>${producto.empleado}</td>
                    <td>${producto.producto}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.precioUnitario}</td>
                `;
                tblProductos.querySelector("tbody").appendChild(row);
            });

            resultadosDiv.style.display = "block";
        } else {
            resultadosDiv.style.display = "none";
            const row = document.createElement("tr");
            row.innerHTML = `<td colspan="8">No se encontraron productos o existencias.</td>`;
            tblProductos.querySelector("tbody").appendChild(row);
        }
    }
});
