import { deleteMeal } from "@/api/meals-backend";
import { redirect } from "next/navigation";

export default  async function removeMeal({params}){
  await  deleteMeal(params.mealslug)
  redirect('/meals')
}