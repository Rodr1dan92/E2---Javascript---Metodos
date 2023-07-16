const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

let separador =
  "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬";

console.log("• Ejercicio 1:");
console.log("a) Las pizzas que tengan un id impar.");
console.log("  ");

function MostrarPizzasImpares() {
  console.log("Pizzas con ID impar:");
  pizzas.forEach((pizza) =>
    pizza.id % 3 == 0
      ? console.log("-> " + pizza.nombre + " (Id " + pizza.id + ")")
      : "No hay pizzas con id impar"
  );
}

MostrarPizzasImpares();

console.log(separador);
console.log("• Ejercicio 2:");
console.log("b) Responder: ¿Hay alguna pizza que valga menos de $600?");
console.log("  ");

const pizzaBarata = pizzas.filter((pizza) => pizza.precio < 600);

if (pizzaBarata.length == 0) {
  console.log("No hay pizzas menores a 600");
} else {
  pizzaBarata.forEach((barata) =>
    console.log(`Sí hay, es la ${barata.nombre} que vale $ ${barata.precio}`)
  );
}

console.log(separador);
console.log("• Ejercicio 3:");
console.log("c) El nombre de cada pizza con su respectivo precio.");
console.log("  ");

pizzas.forEach((precios) =>
  console.log(`► La ${precios.nombre} vale → $ ${precios.precio}`)
);

console.log(separador);
console.log("• Ejercicio 4:");
console.log(`d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).
'Ayuda: van a tener que realizar dos recorridos,
'ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.`);
console.log("  ");

function verIngredientesxPizza() {
  for (pizza of pizzas) {
    console.log("Los ingredientes de la " + pizza.nombre + " son:");
    console.log(" ");
    pizza.ingredientes.forEach((ingrediente) => {
      console.log("► " + ingrediente);
    });
    console.log("____________________________________________");
  }
}

verIngredientesxPizza();

// **Ejercicio extra**
// e) Aumenta el precio de las pizzas un 10% con una funcion que reciba por parámetro el porcentaje de incremento.

// function aumento(incremento){
// let porcentaje = (incremento / 100) + 1
// pizzas.forEach( pizza => {
//   let nuevoprecio = Math.ceil(pizza.precio * porcentaje)
//   console.log(`El nuevo precio de la ${pizza.nombre} es $${nuevoprecio}`)
// })}

// aumento(10)
