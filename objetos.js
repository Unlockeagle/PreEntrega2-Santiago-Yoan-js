// let usuario = {
//   nombre_completo: ["Enrique", "Barros", "Fernandez"],
//   edad: 30,
//   telefonos: {
//     telefono1: "0467489304",
//     telefono2: "0446395860",
//   },
//   pais_residencia: "australia",
//   idiomas: ["Españon", "Catalan", "Ingles", "Portugues", "Italiano"],
// };

// usuario.edad = 100;

// function cambioEdad() {
//   let user = prompt("ingrese usuario");
//   let nuevaEdad = prompt("ingrese la edad");
//   usuario[user].edad = nuevaEdad;
//   return user.edad;
// }
// let usuario = {
//   nombre_completo: ["Enrique", "Barros", "Fernandez"],
//   edad: 30,
//   telefonos: {
//     telefono1: "0467489304",
//     telefono2: "0446395860",
//   },
//   pais_residencia: "Australia",
//   idiomas: ["Español", "Catalán", "Inglés", "Portugués", "Italiano"],
// };

// function cambioEdad() {
//   let user = prompt("Ingrese el nombre del usuario");
//   let nuevaEdad = prompt("Ingrese la nueva edad");

//   // Verificamos si el usuario existe en el objeto
//   if (usuario.hasOwnProperty(user)) {
//     usuario[user].edad = nuevaEdad;
//     console.log(`La edad de ${user} ha sido modificada a ${nuevaEdad}`);
//   } else {
//     console.log("El usuario no existe en la base de datos.");
//   }
// }

// cambioEdad();
// console.log(usuario);
//////////////////////////////////////////////////////
// let usuario = {
//   nombre_completo: ["Enrique", "Barros", "Fernandez"],
//   edad: 30,
//   telefonos: {
//     telefono1: "0467489304",
//     telefono2: "0446395860",
//   },
//   pais_residencia: "Australia",
//   idiomas: ["Español", "Catalán", "Inglés", "Portugués", "Italiano"],
// };

// function cambioEdad() {
//   let nuevaEdad = prompt("Ingrese la nueva edad");
//   usuario.edad = nuevaEdad;
//   console.log(`La edad ha sido modificada a ${nuevaEdad}`);
// }

// cambioEdad();
// console.log(usuario);

// let Enrique = {
//   nombre_completo: "Enrique",
//   edad: 30,
//   telefonos: {
//     telefono1: "0467489304",
//     telefono2: "0446395860",
//   },
//   pais_residencia: "Australia",
//   idiomas: ["Español", "Catalán", "Inglés", "Portugués", "Italiano"],
// };
// let Maria = {
//   nombre_completo: "Maria",
//   edad: 30,
//   telefonos: {
//     telefono1: "0467489304",
//     telefono2: "0446395860",
//   },
//   pais_residencia: "Australia",
//   idiomas: ["Español", "Catalán", "Inglés", "Portugués", "Italiano"],
// };

// let usuarios = [Maria, Enrique];
// function cambiarEdad() {
//   let usuario = prompt("usuario a cambiar la edad");
//   let nuevaEdad = Number(prompt("Ingrese la edad"));
//   usuarios[usuario].edad = nuevaEdad;
//   console.log(usuarios);
// }
// // Esta funcion solo cambia la edad de maria, Como hacer para que reciba por un imput otro usuario
// cambiarEdad();
