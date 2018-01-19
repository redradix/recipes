import { pescado } from "../mealTypes";
import { alcachofa, choclo, aguacate, mango, lima, aji, corvina } from "../ingredients/fridge";
import {
  arrozBlanco,
  cebolla,
  sal,
  aceite,
  zanahoria,
  ajo,
  aceitunas,
} from "../ingredients/pantry";

export default {
  mealType: pescado,
  name: "Ceviche",
  ingredients: [
    { ingredient: sal, qty: 5},
    { ingredient: aceite, qty: 20 },
    { ingredient: lima, qty: 500},
    { ingredient: aji, qty: 2, tip: 'Sirve otros picantes, estilo guindilla'},
    { ingredient: aceitunas, qty: 50 },
    { ingredient: choclo, qty: 100 },
    { ingredient: aguacate, qty: 200 },
    { ingredient: mango, qty: 200 },
    { ingredient: cebolla, qty: 200, tip: 'Si es morada mejor' },
    { ingredient: corvina, qty: 1000, tip: 'Sirve cualquier pescado blanco, como lubina, lenguado. El salmon tambien va muy bien' },
  ],
  steps: ["Todo el mundo sabe como hacer paella"],
};