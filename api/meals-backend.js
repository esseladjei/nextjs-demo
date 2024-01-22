import sql from 'better-sqlite3';
import { resolve } from 'styled-jsx/css';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');
export async function getMeals() {
  await new Promise((resolve)=>setTimeout(resolve, 2000))
  return db.prepare('Select * from meals').all();
}
export  function getOneMeal(slug) {
  return db.prepare('select * from meals where Slug=?').get(slug)
}

export async function  saveMeal(meal){
  const slug= slugify(meal.title, {lower: true});
  //Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist.
   meal.instructions= xss(meal.instructions);
  //process image and save it in th public folder
  const extension= meal.image.name.split('.').pop();
  const fileName=`${slug}.${extension}`;

  const stream=fs.WriteStream(`public/images/${fileName}`);
  const bufferedArrayImage=await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedArrayImage),(error)=>{
    if(error){
      throw new Error('Saving image failed');
    }
  });
    //now save the path to the image into the database, so replace the image with the path of the new path
    meal.image=`/images/${fileName}`;
    meal.slug=slug
  try {
    db.prepare(`INSERT INTO meals
    (title, creator, summary, creator_email, image, instructions, slug)
      VALUES (
         @title, 
         @creator, 
         @summary, 
         @creator_email,
         @image,
         @instructions,
         @slug
      )
    `).run(meal);
  } catch (error) {
    return error
  }
  
}

export async function deleteMeal(slug){
   await new Promise((resolve)=>setTimeout(resolve, 2000))
  const removeMeal =  db.prepare('DELETE from meals where Slug=?');
  removeMeal.run(slug)
}