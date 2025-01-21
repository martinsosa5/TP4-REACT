/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca,
 modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender
  y apagar el auto. */

 /* class Auto {

    constructor(color,marca,modelo){
        this._color = color;
        this._marca = marca;
        this._modelo = modelo;
        this._encendido = false;
    }

    encenderAuto(){
        this._encendido = true;
    }
    apagarAuto(){
        this._encendido = false;
    }

    estado(){
        document.write(`<p>-------------------------------------------------</p>`);
        document.write(`<p>Marca: ${this._marca}</p>`);
        document.write(`<p>Modelo: ${this._modelo}</p>`);
        document.write(`<p>Color: ${this._color}</p>`);
        document.write(`<p>Estado: ${this._encendido ? 'Encendido' : 'Apagado'}</p>`);
       

    }
 } 


 const auto1 = new Auto('Rojo', 'Toyota','Corola');
 auto1.estado();
 auto1.encenderAuto();
 auto1.estado();
 auto1.apagarAuto();
 auto1.estado(); */

/*  2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
 - Una propiedad titular con el valor "Alex".
 - Una propiedad saldo, teniendo como valor inicial 0.
 - Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como 
 parámetro
 - Un método extraer() que permita retirar la cantidad pasada como parámetro.
 - Un método informar() que retorne la información del estado de la cuenta. 
 
 Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a 
 mostrar la descripción del estado de la cuenta. */
 
/*  class Cuenta {

    constructor(titular){
    this._titular = titular;
    this._saldo = 0;
    }

    ingresar(cantidad){
        this._saldo += cantidad;
        document.write(`<p>------------------------------</p>`);
        document.write(`<p>Ingreso $ ${cantidad}</p>`);
        document.write(`<p>------------------------------</p>`);
    }

    extraer(cantidad){
        if(this._saldo >= cantidad){
            this._saldo -= cantidad;
            document.write(`<p>------------------------------</p>`);
            document.write(`<p>Se extrajo $ ${cantidad}</p>`);
            document.write(`<p>El saldo actual es de $ ${this._saldo}</p>`);
            document.write(`<p>------------------------------</p>`);
        }else{
            document.write(`<p>*No cuenta con fondos suficientes para extraer $ ${cantidad}*</p>`);
        }
        
    }

    informar(){
        document.write(`<p>------------------------------</p>`);
        document.write(`<p>TITULAR: ${this._titular}</p>`);
        document.write(`<p>SALDO: $ ${this._saldo}</p>`);
        document.write(`<p>------------------------------</p>`);
    }
 }

 const cuenta1 = new Cuenta('Alex');
 cuenta1.informar();
 cuenta1.ingresar(2000);
 cuenta1.extraer(500);
 cuenta1.informar(); */

/*  3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las 
 propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar
  sus propiedades, calcular el perímetro y el área */

/*   class Rectangulo{
        
        constructor(alto,ancho){
            this._alto = alto;
            this._ancho = ancho;
        }

        set modificarAlto(alto){
            this._alto = alto;
        }
        set modificarAncho(ancho){
            this._ancho = ancho;
        }

        get altoRectangulo(){
            return this._alto;
        }
        get anchoRectangulo(){
            return this._ancho;
        }
        get area(){
            return this,_alto * this._ancho;
        }
        get perimetro(){
            return 2 * (this,_alto + this._ancho);
        }

        mostrar(){
            document.write(`<p>------------------------------</p>`);
            document.write(`<p>Alto: ${this._alto}</p>`);
            document.write(`<p>Ancho: ${this._ancho}</p>`);
            document.write(`<p>------------------------------</p>`);
        }

  }

  const rectangulo1 = new Rectangulo(10,20);
  rectangulo1.mostrar();
  rectangulo1.modificarAlto = 5;
  rectangulo1.modificarAncho = 8;
  rectangulo1.mostrar(); */
  
/*   4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las
     propiedades código, nombre y precio, además del método imprime datos, el cual escribe
     por pantalla los valores de sus propiedades.
    Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
    Por último, utilice el método imprime datos para mostrar por pantalla los valores de los
     tres objetos instanciados. */


/*      class Producto {
        
        constructor(codigo, nombre, precio){
            this._codigo = codigo;
            this._nombre = nombre;
            this._precio = precio;
        }
        //creo los getters
        get codigo(){
            return this._codigo;
        }
        get nombre(){
            return this._nombre;
        }
        get precio(){
            return this._precio;
        }
        //creo los setters
        set codigo(valor){
            if(isNaN(valor)){
                document.write(`*ERROR el codigo debe contener solo numeros*`);
            }else{
                this._codigo = valor;
            }
        }
        set nombre(valor){
            if(valor.trim() !== ''){
                this._nombre = valor;
            }else{
                document.write(`*ERROR debe ingresar un nombre*`);
            }
        }
        set precio(valor){
            if(isNaN(valor) || valor === ''){
                document.write(`*ERROR el precio debe contener numeros*`);
            }else{
                this._precio = valor;
            }
        }
        // creo el metodo imprimirDatos
        imprimirDatos(){
            document.write(`<p>------------------------------</p>`);
            document.write(`<p>CODIGO: ${this._codigo}</p>`);
            document.write(`<p>NOMBRE: ${this._nombre}</p>`);
            document.write(`<p>PRECIO: $${this._precio}</p>`);
            document.write(`<p>------------------------------</p>`);
        }
        
     }

     //creo los productos
     const producto1 = new Producto(20351, 'Pepsi', 2500);
    //acá lo hice de esta manera para probar los setters
     const producto2 = new Producto();
     producto2.codigo = 61651;
     producto2.nombre = 'Coca Cola';
     producto2.precio = 3000;
     
     const producto3 = new Producto(29681, 'Mirinda', 2300);
     //creo el array de productos
     const productos = [producto1, producto2, producto3];
     //muestro todos los productos
     productos.forEach(producto => {
            producto.imprimirDatos();
     });
      */

/*      5- Crea una clase llamada Persona que siga las siguientes condiciones:
    Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año
     de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
    Los métodos que se debe poder utilizar  son:
    mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
    pertenece la persona creada y cual es el rasgo característico de esta generación. */

/*     class Persona {

        constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento){
            this._nombre = nombre;
            this._edad = edad;
            this._dni = dni;
            this._sexo = sexo;
            this._peso = peso;
            this._altura = altura;
            this._añoNacimiento = añoNacimiento;
        }

        mostrarGeneracion(){
                if(this._añoNacimiento >= 1930 && this._añoNacimiento <= 1948){
                    document.write(`${this._nombre} es de la Generacion "Silent Generation"`);
                }else if(this._añoNacimiento >= 1949 && this._añoNacimiento <= 1968){
                    document.write(`${this._nombre} es de la Generacion "Baby Boom"`);
                }else if(this._añoNacimiento >= 1969 && this._añoNacimiento <= 1980){
                    document.write(`${this._nombre} es de la Generacion "X"`);
                }else if(this._añoNacimiento >= 1981 && this._añoNacimiento <= 1993){
                    document.write(`${this._nombre} es de la Generacion "Y"`);
                }else if(this._añoNacimiento >= 1994 && this._añoNacimiento <= 2010){
                    document.write(`${this._nombre} es de la Generacion "Z"`);
                }else if(this._añoNacimiento >= 2011 && this._añoNacimiento <= 2024){
                    document.write(`${this._nombre} es de la Generacion "Alpha"`);
                }else{
                    document.write(`ERROR ingresar un año de nacimiento valido`);
                }
        }

        esMayorDeEdad(){
            document.write(`<p>${this._nombre} ${this._edad >= 18 ? ' es Mayor de edad' : ' es Menor de edad'}</p>`);
        }

        mostrarDatos(){
            document.write(`<p>------------------------------</p>`);
            document.write(`<p>Nombre: ${this._nombre}</p>`);
            document.write(`<p>Edad: ${this._edad}</p>`);
            document.write(`<p>Documento: ${this._dni}</p>`);
            document.write(`<p>Sexo: ${this._sexo === 'M' ? 'Masculino' : 'Femenino'}</p>`);
            document.write(`<p>Peso: ${this._peso}</p>`);
            document.write(`<p>Altura: ${this._altura}</p>`);
            document.write(`<p>Año de Nacimiento: ${this._añoNacimiento}</p>`);
            document.write(`<p>------------------------------</p>`);
        }
        //no se si solo hay que generarlo y mostrarlo o tambien modificar el dni actual
        // asi que solo lo genere y mostre
        generarDNI(){
            document.write(`<p>DNI generado aleatoriamente: ${Math.floor(Math.random() * (10**8 - 10**7)) + 10**7}</p>`);
        }
    }

    const persona1 = new Persona('Martin', 25, 41236985, 'M', 81.1, 1.75, 1999);
    persona1.mostrarDatos();
    persona1.mostrarGeneracion();
    persona1.esMayorDeEdad();
    persona1.generarDNI();
     */


/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el
método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

/* class Libro{

    constructor (isbn, titulo, autor, numeroPag){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPag = numeroPag;
    }
    //setters
    set isbn(valor){
        if(valor.strim() !== ''){
            this._isbn = valor;
        }else{
            document.write(`<p>*ERROR debe ingresar un valor*</p>`);
        }
    }
    set titulo(valor){
        if(valor.strim() !== ''){
            this._titulo = valor;
        }else{
            document.write(`<p>*ERROR debe ingresar un titulo*</p>`);
        }
    }
    set autor(valor){
        if(valor.strim() !== ''){
            this._autor = valor;
        }else{
            document.write(`<p>*ERROR debe ingresar un autor*</p>`);
        }
    }
    set numeroPag(valor){
        if(valor !== '' && !isNaN(valor)){
            this._numeroPag = valor;
        }else{
            document.write(`<p>*ERROR formato incorrecto para el numero de paginas*</p>`);
        }
    }

    //getters
    get isbnLibro(){
        return this._isbn;
    }
    get tituloLibro(){
        return this._titulo;
    }
    get autorLibro(){
        return this._autor;
    }
    get numeroPagLibro(){
        return this._numeroPag;
    }

    //metodos
    mostrarLibro(){
        document.write(`<p>"El libro ${this._titulo} con ISBN ${this._isbn} creado por
            ${this._autor} tiene ${this._numeroPag} paginas"</p>`);
    }

}

    const libro1 = new Libro('9504976751', 'La felicidad','Gabriel Rolon', 392);
    const libro2 = new Libro('8466652094', 'Futbol',' Johan Cruyff', 167);
    libro1.mostrarLibro();
    libro2.mostrarLibro();

    if(libro1.numeroPagLibro > libro2.numeroPagLibro){
        document.write(`<p>El libro "${libro1.tituloLibro}" tiene mas paginas</p>`);
    }else  if(libro1.numeroPagLibro < libro2.numeroPagLibro){
        document.write(`<p>El libro "${libro2.tituloLibro}" tiene mas paginas</p>`);
    }else{
        document.write(`<p>Los libros tiene la misma cantidad de paginas</p>`);
    }
     */
    

    //ejercicio 7 (No entiendo como se hace)

    /* 7- Nos piden realizar una agenda telefónica de contactos.

    Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

    Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

    Los métodos de la agenda serán los siguientes:

    aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
    existeContacto(Contacto): indica si el contacto pasado existe o no.
    listarContactos(): Lista toda la agenda
    buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
    eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    agendaLlena(): indica si la agenda está llena.
    huecosLibres(): indica cuántos contactos más podemos ingresar.

    Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar
     en pantalla y  por consola.
    */
    
     class Contacto {
        constructor(nombre, tel){
            this._nombre = nombre;
            this._tel = tel;

            /* esIgual(contacto){
                return this.nombre === contacto.nombre;
            } */
        }
     }

     class Agenda {
        constructor(tamano = 10){
            this.contactos = [];
            this.tamano = tamano;
        }

        agendaLlena(){
            return this.contactos.length < 10 ? true : false; //si la agenda esta llena devuelve false
        }

        aniadirContacto(contacto){
            if(this.agendaLlena()){
                if(contacto._nombre != '' && contacto._tel != ''){
                    this.contactos.push(contacto);
                    alert(`----------------------------------\nCONTACTO AGREGADO \n---------------------------------- \nNombre: ${contacto._nombre} \nCelular: ${contacto._tel}`);
                }else{
                    alert('*ERROR en los datos ingresados*')
                }  
            }else{
                alert('*ERROR la agenda se encuentra llena*')
            }  
        }
        
        listarContactos(){
            if(this.contactos.length === 0){
                alert('*NO HAY CONTACTOS CARGADOS*')
            }else{
                alert(`Listado:\n${this.contactos.map(contacto => `\nNombre: ${contacto._nombre}\nTeléfono: ${contacto._tel}`).join('\n')}`);
            }
        }

        existeContacto(nombre){
            if(nombre !== ''){
                //pongo en mayusculas para comparar mejor y elimino los espacios al principio y final
               let bandera = false;
               this.contactos.forEach(element => {
                   if(nombre.trim().toUpperCase() === element._nombre.trim().toUpperCase()){
                       bandera = true;
                       alert(`----------------------------------\nSI EXISTE EL CONTACTO\n----------------------------------`);
                   }
               });
   
               if(bandera === false) alert('*EL CONTACTO NO EXISTE*');
               
               }else alert('Error no se ingresaron datos');
        }

        buscarContactos(nombre){
            if(nombre !== ''){
             //pongo en mayusculas para comparar mejor y elimino los espacios al principio y final
            let bandera = false;
            this.contactos.forEach(element => {
                if(nombre.trim().toUpperCase() === element._nombre.trim().toUpperCase()){
                    bandera = true;
                    alert(`----------------------------------\nCONTACTO\n---------------------------------- \nNombre: ${element._nombre} \nCelular: ${element._tel}`);
                }
            });

            if(bandera === false) alert('Contacto NO encontrado');
            
            }else alert('*Error no se ingresaron datos*');
        }

        eliminarContacto(nombre){
            if(nombre !== ''){
                //pongo en mayusculas para comparar mejor y elimino los espacios al principio y final
               let bandera = false;
               this.contactos.forEach((element, indice) =>{
                   if(nombre.trim().toUpperCase() === element._nombre.trim().toUpperCase()){
                       bandera = true;
                       alert(`CONTACTO ${nombre} ELIMINADO`);
                       this.contactos.splice(indice,1);
                   }
               });
   
               if(bandera === false) alert('*EL CONTACTO NO EXISTE*');
               
               }else alert('Error no se ingresaron datos');
        }

        huecosLibres(){
            if(this.contactos.length <10){
                alert(`Espacio disponible para agregar ${ 10 - this.contactos.length} contactos`);
            }else{
                alert(`Agenda llena eliminar contactos para poder ingresar mas`);
            }
          
        }

     }  

     menu();7
     
  

     // funcion para el menu
    function menu(){
        const agenda = new Agenda();  //creo una nueva agenda
        let opc;
        let nombre ='';
        let numero = '';
          do{ 
            opc = parseInt(prompt(' MENU \n1) Añadir Contacto \n2) Verificar si existe un contacto \n3) Listar Agenda \n4) Buscar Contacto por Nombre \n5) Eliminar contacto \n6) Mostrar Disponibilidad en la agenda \n7) Salir \n Ingresar una opcion:'));
                if( opc !== '' && !isNaN(opc) && opc>0 && opc<8){

                    switch (opc) {
                            
                            case 1:
                                nombre = prompt('Ingresar Nombre:');
                                numero = prompt('Ingresar Numero:')
                                const contacto = new Contacto(nombre,numero);
                                agenda.aniadirContacto(contacto);
                                break;
                            case 2:
                                nombre = prompt('Ingresar Nombre:');
                                agenda.existeContacto(nombre);   
                                break;
                            case 3:
                                agenda.listarContactos();
                                break;
                            case 4:
                                nombre = prompt('Ingresar Nombre:');
                                agenda.buscarContactos(nombre);  
                                break;
                            case 5:
                                nombre = prompt('Ingresar Nombre:');
                                agenda.eliminarContacto(nombre);
                                break;
                            case 6:
                                agenda.huecosLibres();
                                break;            
                        }

                }else { alert('*ERROR opcion invalida*');}

            }while(opc != 7);     
    }

 