import { ObjectId } from 'mongodb'
import {
  choclo,
  aguacate,
  mango,
  lima,
  aji,
  corvina,
} from '../ingredients/fridge'
import {
  cebolla,
  sal,
  aceite,
  aceitunas,
} from '../ingredients/pantry'
import { dinner } from '../meals'
import { spring, summer, autumn, winter } from '../seasons'

export default {
  name: 'Ceviche',
  meal: [dinner],
  seasons: [winter, autumn, summer, spring],
  ingredients: [
    { ingredient: ObjectId('5a83449dd9594c4b4024da28'), qty: 5 },
    { ingredient: ObjectId('5a83449cd9594c4b4024d7e2'), qty: 20 },
    { ingredient: lima, qty: 500 },
    { ingredient: aji, qty: 2, tip: 'Sirve otros picantes, estilo guindilla' },
    { ingredient: aceitunas, qty: 50 },
    { ingredient: choclo, qty: 100 },
    { ingredient: aguacate, qty: 200 },
    { ingredient: mango, qty: 200 },
    { ingredient: cebolla, qty: 200, tip: 'Si es morada mejor' },
    {
      ingredient: corvina,
      qty: 1000,
      tip:
        'Sirve cualquier pescado blanco, como lubina, lenguado. El salmon tambien va muy bien',
    },
  ],
  steps: ['Todo el mundo sabe como hacer paella'],
}
