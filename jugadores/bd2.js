function datosconta(params) {
                //var cadena;
                $query = 'select nombre,contraseña,id,kda,opscore,descripcion,killparticipation from mytable where nombre="emiliano"';//instrucción SQL
                let tablaR= document.getElementById("Tablita");
                conexion.query($query, function (err, rows) {
                if (err) {
                console.log("error en el query");
                console.log(err);
                return;
                }
                else{
                //Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos
                var long = rows.length;//Se obtiene el tamaño de la lista
                for(i=0 ; i<long ; i++){//Se utiliza para recorrer la lista
                //cadena += rows[i].id + ' ' + rows[i].nombre +  ' ' + rows[i].contraseña +'\n';//Registro
                var newRow= tablaR.insertRow(-1);
                var celdaUsuario= newRow.insertCell(0);
                var celdaId= newRow.insertCell(1);
                var celdaHola= newRow.insertCell(2);

                var celdaKDA= newRow.insertCell(3);
                var celdaOpScore= newRow.insertCell(4);
                var celdaDescripcion= newRow.insertCell(5);
                var celdaKillp= newRow.insertCell(6);
                
                var textoUsuario = document.createTextNode(rows[i].nombre);
                var textoId=document.createTextNode(rows[i].id);
                var textoC=document.createTextNode(rows[i].contraseña);

                var textoKDA = document.createTextNode(rows[i].kda);
                var textoOpScore=document.createTextNode(rows[i].opscore);
                var textoDescripcion=document.createTextNode(rows[i].descripcion);
                var textoKillp = document.createTextNode(rows[i].killparticipation);
                

                celdaUsuario.appendChild(textoUsuario);
                celdaId.appendChild(textoId);
                celdaHola.appendChild(textoC);

                celdaKDA.appendChild(textoKDA);
                celdaOpScore.appendChild(textoOpScore);
                celdaDescripcion.appendChild(textoDescripcion);
                celdaKillp.appendChild(textoKillp);

                document.getElementById("kk").innerHTML = (rows[0].nombre) ;
        
                }
                //alert(cadena);
                
                }});
}

