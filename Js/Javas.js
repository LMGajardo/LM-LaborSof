    var modificar = (listadoNuevo)=>{
      let eNombre = document.getElementById("nombre");
      let eCorreo = document.getElementById("correo");
      let eContrasena = document.getElementById("contrasena");
      let eNumero = document.getElementById("numero");
      let eCotizacion = document.getElementById("cotizacion");
      let eMensaje = document.getElementById("mensaje");
      let eRango = document.getElementById("rango");
      let eCheckbox = document.getElementById("checkbox");
      let eBtnEditarUp = document.getElementById('btnEditar');
              
      let nombre = eNombre.value;
      let correo = eCorreo.value;
      let contrasena = eContrasena.value;
      let numero = eNumero.value;
      let cotizacion = eCotizacion.value;
      let mensaje = eMensaje.value;
      let rango= eRango.value;
      let checkbox = eCheckbox.value;

      let indice = eBtnEditarUp.value;
      listadoNuevo[indice].nombre = nombre;
      listadoNuevo[indice].correo = correo;
      listadoNuevo[indice].contrasena = contrasena;
      listadoNuevo[indice].numero = numero;
      listadoNuevo[indice].cotizacion = cotizacion;
      listadoNuevo[indice].mensaje = mensaje;
      listadoNuevo[indice].rango = rango;
      listadoNuevo[indice].checkbox = checkbox;
      

      localStorage.setItem('personas',JSON.stringify(listadoNuevo));
      //Cargar la tabla de nuevo
      cargarTabla(listadoNuevo)

    //   La función modificar  obtiene los valores de entrada del formulario, modificar 
    //   los datos de un elemento en la lista listadoNuevo, guardar la lista actualizada en el almacenamiento 
    //   local (localStorage), y llamar a la función cargarTabla para mostrar la tabla actualizada.

  
    // La función modificar recibe un parámetro listadoNuevo, que representa la lista de elementos a modificar.
    
    }
    var eliminar = (listadoNuevo)=>{
      let eBtnEliminarUp = document.getElementById('btnEliminar');
      let indice = eBtnEliminarUp.value;
      console.log(listadoNuevo)
      lista = listadoNuevo.filter((p)=>p.id!=indice)
      lista = lista.map((p,index)=>{return {...p,'id':index}})
      //lista = lista.map((p,index)=>{return {'nombre':p.nombre,'apellido':p.apellido,'id':index}})
      console.log(lista)
      localStorage.setItem('personas',JSON.stringify(lista));
      cargarTabla(lista)
    }
      
    //   La función eliminar se encarga de eliminar un elemento de la lista listadoNuevo, actualizar 
    //   la lista en el almacenamiento local (localStorage), y llamar a la función cargarTabla para 
    //   mostrar la tabla actualizada.
    // La función eliminar recibe el parámetro listadoNuevo, que representa la lista de elementos a modificar.
    // La función eliminar utiliza un ciclo map para actualizar los valores de la propiedad 'id' en los
    //  elementos de la lista lista.

    // La función eliminar utiliza un condicional filter para filtrar los elementos de la 
    // lista listadoNuevo y eliminar el elemento con el índice indicado.
    
    
    var cargarTabla = (listadoNuevo)=>{
      let eContenedorTabla = document.getElementById("contenedorTabla");
      let eNombre = document.getElementById("nombre");
      let eCorreo = document.getElementById("correo");
      let eContrasena = document.getElementById("contrasena");
      let eNumero = document.getElementById("numero");
      let eCotizacion = document.getElementById("cotizacion");
      let eMensaje = document.getElementById("mensaje");
      let eRango = document.getElementById("rango");
      let eCheckbox = document.getElementById("checkbox");

      
      render = "<table>"
      // render+="<tr><th>Nombre</th><th>Correo</th><th>Accion</th></tr>"
      render += render += "<tr><th>Nombre</th><th>Correo</th><th>Contraseña</th><th>Número</th><th>Cotización</th><th>Mensaje</th><th>Rango</th><th>Checkbox</th><th>Acción</th></tr>";

      for (let i = 0; i <listadoNuevo.length; i++) {
          const element = listadoNuevo[i];
          render+="<tr>"
          render+="<td>"+element.nombre+"</td>"
          render+="<td>"+element.correo+"</td>"
          render+="<td>"+element.contrasena+"</td>"
          render+="<td>"+element.numero+"</td>"
          render+="<td>"+element.cotizacion+"</td>"
          render+="<td>"+element.mensaje+"</td>"
          render+="<td>"+element.rango+"</td>"
          render+="<td>"+element.checkbox+"</td>"
          render+="<td>"
          render+="<button id='btnEditar"+i+"'>Editar</button>"
          render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
          render+="</td>"
          render+="</tr>"
      }
      render += "</table>";
      eContenedorTabla.innerHTML = render;
      for (let i = 0; i < listadoNuevo.length; i++) {
          var eBtn = document.getElementById("btnEditar"+i); 
          var eBtn2 = document.getElementById("btnEliminar"+i);
          let element = listadoNuevo[i]
          eBtn.addEventListener("click",()=>{
              eNombre.value = element.nombre;
              eCorreo.value = element.correo;
              eContrasena.value = element.contrasena;
              eNumero.value = element.numero;
              eCotizacion.value = element.cotizacion;
              eMensaje.value = element.mensaje;
              eRango.value = element.rango;
              eCheckbox.cheked = element.checkbox;
              

              let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
              
              let contenedorBoton = document.getElementById('contenedorBtnExtra');
              contenedorBoton.innerHTML = sEditar;
              let eBtnEditarUp = document.getElementById('btnEditar');
              eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo))
          })
          eBtn2.addEventListener("click",()=>{
              eNombre.value = element.nombre;
              eCorreo.value = element.correo;
              eContrasena.value = element.contrasena;
              eNumero.value = element.numero;
              eCotizacion.value = element.cotizacion;
              eMensaje.value = element.mensaje;
              eRango.value = element.rango;
              eCheckbox.cheked = element.checkbox;
              

              let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
              let contenedorBoton = document.getElementById('contenedorBtnExtra');
              contenedorBoton.innerHTML = sEliminar;
              let eBtnEliminarUp = document.getElementById('btnEliminar');
              eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo))


               //   La función cargarTabla se encarga de crear y mostrar una tabla HTML a partir de la 
               //   lista listadoNuevo, dando los valores correspondientes a las celdas de la tabla. 
               //  También se encarga de agregar event listeners botones de edición y eliminación
              // La función cargarTabla utiliza un ciclo for para iterar sobre los elementos de la
            //  lista listadoNuevo y generar las filas de la tabla.
            // La función cargarTabla utiliza condicionales en los event listeners
            //  de los botones de edición y eliminación para realizar acciones específicas al hacer
            //   clic en ellos.
          })
      }
    }
    var registrar = ()=>{
      let eNombre = document.getElementById("nombre");
      let eCorreo = document.getElementById("correo");
      let eContrasena = document.getElementById("contrasena");
      let eNumero = document.getElementById("numero");
      let eCotizacion = document.getElementById("cotizacion");
      let eMensaje = document.getElementById("mensaje");
      let eRango = document.getElementById("rango");
      let eCheckbox = document.getElementById("checkbox");
      
      


      let nombre = eNombre.value;
      let correo = eCorreo.value;
      let contrasena = eContrasena.value;
      let numero = eNumero.value;
      let cotizacion = eCotizacion.value;
      let mensaje = eMensaje.value;
      let rango = eRango.value;
      let checkbox = eCheckbox.checked;


      var che = ""
      if (checkbox == true) {
        che = "acepta"
      }else{
          che = "no acepta"
        }
        // Verficiar chekeded

      console.log(nombre);
      console.log(correo);
      console.log(contrasena);
      console.log(numero);
      console.log(cotizacion);
      console.log(mensaje);
      console.log(rango);
      console.log(checkbox);
      //  True o false
      

      let listadoPersonas = localStorage.getItem("personas");
      let listadoAntiguo = JSON.parse(listadoPersonas);
      if(listadoAntiguo==null){
          let persona = {"id": 0,"nombre":nombre,"correo":correo,"contrasena":contrasena,
                          "numero":numero,"cotizacion":cotizacion,"mensaje":mensaje,"rango":rango,"checkbox":che}

          listadoNuevo = [persona]
      }else{
          //listadoAntiguo.push(persona)
          let persona = {"id": listadoAntiguo.length,"nombre":nombre,"correo":correo,"contrasena":contrasena,
                          "numero":numero,"cotizacion":cotizacion,"mensaje":mensaje,"rango":rango,"checkbox":che}
          listadoNuevo = [...listadoAntiguo,persona]
      }
      //console.log(persona)
      console.log(listadoAntiguo)
      console.log(listadoNuevo);
      localStorage.setItem("personas",JSON.stringify(listadoNuevo));
      //eContenedorTabla.innerHTML = ""+listadoNuevo.length;
      //tabla
      cargarTabla(listadoNuevo)
      

    //   La función registrar se encarga de obtener los valores del formulario, 
    //   crear un objeto de persona con esos valores, agregarlo a la lista listadoNuevo, guardar
    //    la lista actualizada en el almacenamiento local (localStorage), y llamar a la función 
    //    cargarTabla para mostrar la tabla actualizada.
    
    // La función registrar utiliza un condicional para verificar si la 
    // lista listadoAntiguo es nula y decidir cómo crear y actualizar la lista listadoNuevo.


    }
    var fuente = () => {
        let btn = document.getElementById('btnFuente');
        let estado = btn.value 
        if (estado == '0') {
          btn.value = '1';
          let elements = document.getElementsByClassName('small-letras');
          const medium = elements.length;
          
          for (let i = 0; i < medium; i++) {
            const element = elements[0]
            element.classList.add('medium-letras');
            element.classList.remove('small-letras');
          }
          
          
        } else if (estado == '1') {
        btn.value = '2';
          let elements = document.getElementsByClassName('medium-letras');
          const largo = elements.length;
          for (let i = 0; i < largo; i++) {
            const element = elements[0] 
            element.classList.replace('medium-letras', 'large-letras');
          }
          
        } else if (estado == '2') {
          let elements = document.getElementsByClassName('large-letras');
          const small = elements.length;
          
          for (let i = 0; i < small; i++) {
            const element = elements[0];
            element.classList.add('small-letras');
            element.classList.remove('large-letras');
          }
          
          btn.value = '0';
        }
      }

    //   La función fuente se encarga de cambiar el tamaño de las letras de los elementos HTML con las clases 
    //   small-letras, medium-letras y large-letras. Al hacer clic en el botón correspondiente, se cambia 
    //   entre tres tamaños diferentes de fuente.


    // La función fuente utiliza condicionales para
    //  determinar el estado actual y cambiar el tamaño de fuente en función de ese estado.


    
    var cargarDatos = ()=>{
      let listadoPersonas = localStorage.getItem("personas");
      let listadoAntiguo = JSON.parse(listadoPersonas);
      cargarTabla(listadoAntiguo)
    }
    // La función cargarDatos se encarga de obtener la lista de personas almacenada en el 
    //  (localStorage), convertirla de js a un objeto JavaScript y llamar a la 
    // función cargarTabla para mostrar la tabla con los datos cargados.

    // document.getElementById("btn").addEventListener("click",registrar);

    document.getElementById("btn").addEventListener("click",registrar);
    addEventListener('load',cargarDatos)
    document.getElementById('btnFuente').addEventListener('click', fuente);
      