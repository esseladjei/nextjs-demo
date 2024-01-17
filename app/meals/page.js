import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import Style from './page.module.css'


export default function MealsPage() {



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
        <MealsGrid meals={[
          {
            title: 'Food 1',
            slug: '1', summary: 'This is some nice food 1 menu',
            creator:'Kofi Mensah',
            summary: 'This is some special food'
          }, {
            title: 'Banku',
            slug: '2',
            creator: 'Kofi Adjei',
            summary: 'This is some special bank'
          }

        ]} />
      </main>

    </>

  )
}