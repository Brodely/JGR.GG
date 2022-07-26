document.addEventListener('DOMContentLoaded',ver,false);
document.addEventListener('DOMContentLoaded',iniciosesion,false);


function consultar(){
    //var cadena;
$query = 'Select *from mytable;';//instrucción SQL
let tablaR= document.getElementById("Tabla");
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
var celdaId= newRow.insertCell(0);
var celdaUsuario= newRow.insertCell(1);
var textoId = document.createTextNode(rows[i].id);
var textoUsuario = document.createTextNode(rows[i].nombre);
celdaId.appendChild(textoId);
celdaUsuario.appendChild(textoUsuario);
}
//alert(cadena);

}});
}

function buscar(){
    var nombre=document.getElementById("txtbuscar").value;
    $query=`select nombre from mytable where nombre ='${nombre}';`

    let tablaR= document.getElementById("table2");
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
    var celdaId= newRow.insertCell(0);
    var celdaUsuario= newRow.insertCell(1);
    //var textoId = document.createTextNode(rows[i].id);
    var textoUsuario = document.createTextNode(rows[i].nombre);
    var textooUsuario = tablaR.createTextNode(rows[i].nombre);
    celdaUsuario.appendChild(textoUsuario);
    }
    //alert(cadena);

    }});}


    function actualizar() {
        var nombre=document.getElementById("txt1").value;
        var txtKDA=document.getElementById("txtkda").value;

        var txtopScore=document.getElementById("txtopscore").value;
        var txtKillp=document.getElementById("txtkillp").value;

        var txtPuntosv=document.getElementById("txtpuntosv").value;

        $query=`UPDATE mytable SET 
        kda='${txtKDA}',
        opscore='${txtopScore}',
        killparticipation='${txtKillp}',
        puntosvision='${txtPuntosv}'
        
        WHERE nombre ='${nombre}';`
       
        conexion.query($query, function (err) {
            if (err) {
            console.log("error en el query");
            console.log(err);
            return;
            }
            else{        
               console.log('actualizacion exitosa')
                             
            }
        });
        }

        function actualizarD() {
            var nombre=document.getElementById("txt1").value;
    
            var txtMicro=document.getElementById("txtmicro").value;
            var txtMacro=document.getElementById("txtmacro").value;
            var txtLanning=document.getElementById("txtlanning").value;
    
            $query=`UPDATE mytable SET 
    
            micro='${txtMicro}',
            macro='${txtMacro}',
            lanning='${txtLanning}'
            WHERE nombre ='${nombre}';`
           
            conexion.query($query, function (err) {
                if (err) {
                console.log("error en el query");
                console.log(err);
                return;
                }
                else{        
                   console.log('actualizacion exitosa')
                                 
                }
            });
            }

        function ver(){
            //var cadena;
            var nombrej = document.getElementById("playern").value;
        $query = `Select * from mytable where nombre='${nombrej}';`;//instrucción SQL
        let tablaR= document.getElementById("Tabla");
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

        //var celdaPUNTOSV= newRow.insertCell(0);
        //var textoPUNTOSV = document.createTextNode(rows[i].puntosvision);
        //celdaPUNTOSV.appendChild(textoPUNTOSV);

        //var celdaKILLP= newRow.insertCell(0);
        //var textoKILLP = document.createTextNode(rows[i].killparticipation);
        //celdaKILLP.appendChild(textoKILLP);

        //var celdaDESCRIPCION= newRow.insertCell(0);
        //var textoDESCRIPCION = document.createTextNode(rows[i].descripcion);
        //celdaDESCRIPCION.appendChild(textoDESCRIPCION);

        //var celdaOPSCORE= newRow.insertCell(0);
        //var textoOPSCORE = document.createTextNode(rows[i].opscore);
        //celdaOPSCORE.appendChild(textoOPSCORE);

        //var celdaUsuario= newRow.insertCell(0);
        //var textoUsuario = document.createTextNode(rows[i].nombre);
        //celdaUsuario.appendChild(textoUsuario);

        //var celdaKDA= newRow.insertCell(0);
        //var textoKDA = document.createTextNode(rows[i].kda);
        //celdaKDA.appendChild(textoKDA);

        document.getElementById("kda1").innerHTML = (rows[i].kda) ;
        document.getElementById("kda2").innerHTML = (rows[i].kda) ;

        document.getElementById("verops").innerHTML = (rows[i].opscore) ;

        //document.getElementById("vernombre").innerHTML = (rows[i].nombre) ;

        document.getElementById("verdescripcion").innerHTML = (rows[i].descripcion);

        document.getElementById("verkillp").innerHTML = (rows[i].killparticipation+"%");

        document.getElementById("verpuntosv").innerHTML = (rows[i].puntosvision);

        
        let circularProgress = document.querySelector(".circular-progress"),
        progressValue = document.querySelector(".progress-value");

            let progressStartValue = 0,    
            progressEndValue = (rows[i].micro),    
            speed = 40;
            
        let progress = setInterval(() => {
            progressStartValue++;

            progressValue.textContent = `${progressStartValue}%`
            circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

            if(progressStartValue == progressEndValue){
                clearInterval(progress);
            }    
        }, speed);



        let circularProgress2 = document.querySelector(".circular-progress2"),
            progressValue2 = document.querySelector(".progress-value2");

        let progressStartValue2 = 0,    
            progressEndValue2 = (rows[i].macro),    
            speed2 = 40;
            
        let progress2 = setInterval(() => {
            progressStartValue2++;

            progressValue2.textContent = `${progressStartValue2}%`
            circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

            if(progressStartValue2 == progressEndValue2){
                clearInterval(progress2);
            }    
        }, speed2);



        let circularProgress3 = document.querySelector(".circular-progress3"),
            progressValue3 = document.querySelector(".progress-value3");

        let progressStartValue3 = 0,    
            progressEndValue3 = (rows[i].lanning),    
            speed3 = 40;
            
        let progress3 = setInterval(() => {
            progressStartValue3++;

            progressValue3.textContent = `${progressStartValue3}%`
            circularProgress3.style.background = `conic-gradient(#7d2ae8 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

            if(progressStartValue3 == progressEndValue3){
                clearInterval(progress3);
            }    
        }, speed3);



        let circularProgress4 = document.querySelector(".circular-progresss"),
            progressValue4 = document.querySelector(".progress-values");
        
        let level = (((rows[i].micro)+(rows[i].macro)+(rows[i].lanning))/3);
        console.log(level);
        levelr = Math.round(level);
        console.log(levelr);

        let progressStartValue4 = 0,    
            progressEndValue4 = (levelr),    
            speed4 = 40;
            
        let progress4 = setInterval(() => {
            progressStartValue4++;

            progressValue4.textContent = `${progressStartValue4}%`
            circularProgress4.style.background = `conic-gradient(#7d2ae8 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`

            if(progressStartValue4 == progressEndValue4){
                clearInterval(progress4);
            }    
        }, speed4);

        

        }
        //alert(cadena);
        
        }});
        }

        function iniciosesion() {
            //var cadena;
            $query = 'Select *from admins;';//instrucción SQL
            let tablaR= document.getElementById("Tabla");
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
            console.log(rows[i].usuario);

            for (let i = 0; i < 5; i++) {
                document.getElementById(`user${i+1}`).innerHTML=`<span class="data-list">${rows[i].usuario}</span>`;
                document.getElementById(`pass${i+1}`).innerHTML=`<span class="data-list">${rows[i].pass}</span>`;
              }

           

            
            }
            //alert(cadena);

            }});


        }


        function actualizarKDA() {
            var nombre=document.getElementById("txt1").value;
            
            var asesinatos=document.getElementById("txtasesinatos").value;
            var asistencias=document.getElementById("txtasistencias").value;
            var muertes=document.getElementById("txtmuertes").value;
            
            var kdaG = (Number(asesinatos)+Number(asistencias))/Number(muertes);
            console.log(kdaG);
            $query=`UPDATE mytable SET 
    
            kda='${kdaG}'
            WHERE nombre ='${nombre}';`
           
            conexion.query($query, function (err) {
                if (err) {
                console.log("error en el query");
                console.log(err);
                return;
                }
                else{        
                   console.log('actualizacion exitosa')
                                 
                }
            });
            }
            

        