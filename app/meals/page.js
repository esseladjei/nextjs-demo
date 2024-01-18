import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import Style from './page.module.css'
import { getMeals } from '@/api/meals-backend';


export default async function MealsPage() {

  const mealsData = await getMeals();

  return (

    <>
      <header className={Style.header}>
        <h1>
          Delicious meals, created
          <span className={Style.highlight}> by you</span>
        </h1>
        <p> Choose your favorite recipe and cook it yourself, that is always awesome</p>
        <p className={Style.cta}>
          <Link className="" href="/meals/share">Share Your Recipe</Link>
        </p>
      </header>
      <main className={Style.main}>
        <MealsGrid meals={mealsData}/>
      </main>

    </>

  )
}