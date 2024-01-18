import sql from 'better-sqlite3';
import { resolve } from 'styled-jsx/css';

const db = sql('meals.db');
export async function getMeals() {
  await new Promise((resolve)=>setTimeout(resolve, 5000))
  return db.prepare('Select * from meals').all();
}
export function getOneMeal(mealid){
  return db.prepare('select')
}