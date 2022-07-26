function registrar(){
var nombre=document.getElementById("RUser").value;
var pass=document.getElementById("RPass").value;
var rcpass=document.getElementById("RCPass").value;

if (pass.length >= 8) {
    if(pass==rcpass){
        //Instrucción SQL
        $query=`INSERT INTO admins (usuario,pass) VALUES ('${nombre}','${pass}')`};
        conexion.query($query, function (err) {
    
            if (err) {
                console.log("error en el query");
                console.log(err);
                return;
            } else { 
                console.log ("Datos guardados en la base de datos");
            }
    
            });
}else{
    alert("tu contraseña debe tener 8 caracteres");
}

}

function eliminar() {
    var nombreD=document.getElementById("nombredelete").value;
    $query = `delete from admins where usuario='${nombreD}';`

    conexion.query($query, function (err) {
        if (err) {
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("actualizacion exitosa");
        }
    });
}

function recuperar() {
    var passact=document.getElementById("actpass").value;
    var nombreact=document.getElementById("nombreact").value

     $query=`UPDATE admins SET 
    
            pass='${passact}'

            WHERE usuario ='${nombreact}';`

    conexion.query($query, function (err) {
        if (err) {
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("actualizacion exitosa");
        }
    });
}

function validar(){
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;

    $query = `select usuario,pass from admins WHERE usuario = '${user}' AND pass = '${pass}'`;

    conexion.query($query, function (err,rows,fields) {
        if (err) {
            console.log("error en el query");
            console.log(err);
            return;
        }else{
            console.log("Sesion iniciada", rows, fields)

            if (rows.length == 0) {
                alert("Contraseña o usuario incorrecto")
            }
            else {
                location.href = "principal.html"
            }
        }
    });

}
/*
function rankear() {
    //var cadena;
    $query = 'Select *from mytable;';//instrucción SQL
    
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
    
    console.log(rows[i].nombre);
    console.log(`Micro: ${rows[i].micro}`);
    
    }
    //alert(cadena);

    }});


}*/