     'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals-backend";
import { revalidatePath } from "next/cache";

  export default async function shareMeal(formData){
    const meal={
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      creator: formData.get('name'),
      image: formData.get('mealimage'),
      creator_email: formData.get('email')
    }
    await saveMeal(meal);
    //trigger cache revalidations to enable  next to fetch new content from the sever
    revalidatePath('/meals')
    redirect('/meals')
  }