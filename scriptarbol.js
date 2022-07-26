document.addEventListener('DOMContentLoaded',arbol,false);

function arbol() {
  
    class Node {
        constructor (value) {
          this.value = value
          this.right = null
          this.left = null
        }
      }
      
      class producto{
        constructor(Id,cantidad,precioTotal){
            this.Id=Id
            this.cantidad=cantidad
            this.precioTotal=precioTotal
        }
        
        
    }
    class Nodo {
        constructor (key,dat) {
          this.key = key
          this.right = null
          this.left = null
          this.dat=dat
        }
      }
      
      class Tree {
        constructor () {
          this.raiz = null
        }
      
        isEmpty () {
          return this.raiz === null
        }
      
        agregar (key,dat) {
          // arbol no tiene elementos
          if (this.isEmpty()) {
            this.raiz = new Nodo(key,dat)
            return
          }
      
          var aux = this.raiz
      
          while (aux) {
            // vamos hacia la izquierda
            if (key < aux.key) {
              if (aux.left) {
                aux = aux.left
              } else {
                aux.left = new Nodo(key,dat)
                return
              }
            } else { // vamos hacia la derecha
              if (aux.right) {
                aux = aux.right
              } else {
                aux.right = new Nodo(key,dat)
                return
              }
            }
          }
        }   
      
        buscarMin(Nodo = this.raiz) {
          if (!this.isEmpty()) {
            
              // siempre a la izquierda de cualquier Nodo
              // estará el menor valor.
              // iteramos hasta el último menor.
              
            while (Nodo.left) {
              Nodo = Nodo.left
            }
            return Nodo
          }
        }
      
        borrar (key, Nodo = this.raiz) {
          if (!Nodo) {
            return null
          }
          if (Nodo.key === key) {
            // no tiene hijos
            if (!Nodo.left && !Nodo.right) {
              return null
            }
            // no tiene hijo izquierdo
            if (!Nodo.left) {
              return Nodo.right
            }
            // no tiene hijo derecho
            if (!Nodo.right) {
              return Nodo.left
            }
      
            //
            var temp = this.buscarMin(Nodo.right)
            // con ese valor reemplazamos el valor del Nodo que queremos eliminar.
            Nodo.key = temp.key;
            
            Nodo.right = this.borrar(temp.key, Nodo.right)
            return Nodo;
          }
          // buscamos a la derecha
          if (Nodo.key < key) {
            Nodo.right = this.borrar(key, Nodo.right)
            return Nodo
          }
          // buscamos a la izquierda
          if (Nodo.key > key) {
            Nodo.left = this.borrar(key, Nodo.left)
            return Nodo
          }
        }
       
        inOrder (Nodo = this.raiz) {
          if (!Nodo) {
            return
          }
          this.inOrder(Nodo.left)
          console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
          datos.push(Nodo)
          id.push(Nodo.key)
          cantidades.push(Nodo.dat.cantidad)
          cuentaTotal.push(Nodo.dat.precioTotal)
          this.inOrder(Nodo.right)
          
        }
        
        preOrder (Nodo = this.raiz) {
          if (!Nodo) {
            return
          }
          console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
          this.preOrder(Nodo.left)
          this.preOrder(Nodo.right)
        }
        
        postOrder (Nodo = this.raiz) {
          if (!Nodo) {
            return
          }
          this.postOrder(Nodo.left)
          this.postOrder(Nodo.right)
          console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
        }
        buscar (value) {
          if (this.isEmpty()) {
            return null
          }
      
          var aux = this.raiz
          if (aux.key === value) {
            return aux
          }
      
          while(aux) {
            // si encontramos el nodo con el valor
            // paramos de iterar.
            if (aux.key === value) {
              break
            }
            // seguimos buscando a la derecha
            if (aux.key< value) {
              aux = aux.right
            } else if (aux.key > value) {
              // seguimos buscando a la izquierda
              aux = aux.left
            }
          }
          // retornamos el nodo encontrado.
          // si no encontramos el nodo con el valor
          // aux, toma el valor null.
          return aux
        }
      }
      
      var t = new Tree()
    
      let datos= [];
      let id=[];
      let cantidades=[];
      let cuentaTotal=[];

      $query = `Select * from mytable;`;//instrucción SQL
        
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
        
        console.log
        console.log(rows[i].nombre);
        console.log(rows[i].micro);
        console.log(rows[i].macro);
        console.log(rows[i].lanning);
        let level = (((rows[i].micro)+(rows[i].macro)+(rows[i].lanning))/3);
        console.log(level);
        levelr = Math.round(level);
        console.log(levelr);
        t.agregar((levelr),new producto(0,(rows[i].nombre),(rows[i].img)));
      }

  
          function verArrays() {
            console.log(datos)
            console.log(id)
            console.log(cantidades)
            console.log(cuentaTotal)
          }
          
          t.inOrder();
          verArrays();

          
          
          for (let i = 0; i < datos.length; i++) {
            document.getElementById(`nick${i+1}`).innerHTML=`${(cantidades[i])}`;
            document.getElementById(`parrafo${i+1}`).innerHTML=`Level: ${(id[i])}`;
            document.getElementById(`img${i+1}`).src=`${(cuentaTotal[i])}`;
          }
        }});
        
}