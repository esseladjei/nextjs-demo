import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import styles from './page.module.css'
import { getMeals } from '@/api/meals-backend';
import { Suspense } from 'react';

/*delegate this meals component to be fetching and returning the meals grid
Now the data fetching part is outsourced into this component, and the React Suspense will be used to load it */
async function Meals() {
  const mealsData = await getMeals();
  return <MealsGrid meals={mealsData} />
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created
          <span className={styles.highlight}> by you</span>
        </h1>
        <p> Choose your favorite recipe and cook it yourself, that is always awesome</p>
        <p className={styles.cta}>
          <Link className="" href="/meals/share">Share Your Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        {/* This allow nextjs/react to load the page with all the contents that
        can already be rendered and then streams in and render the loaded content once the async/slow process is done */}
        <Suspense fallback={<p className={styles.loading}>Fetching data...</p>}>
          <Meals />
        </Suspense>
      </main>

    </>

  )
}