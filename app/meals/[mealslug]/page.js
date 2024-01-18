import { getOneMeal } from '@/api/meals-backend';
import Image from 'next/image';
import styles from './page.module.css'
import { notFound } from 'next/navigation';

export default function MealDetailsPage({ params }) {
  const meal = getOneMeal(params.mealslug); 
   if(!meal){
    notFound()
  }
  const { title, creator, summary, creator_email, image } = meal;
  const instructions= meal.instructions.replace(/\n/g,'<br />')

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}> {summary}</p>
        </div>
      </header>
      <main>
        <p className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        >
        </p>
      </main>

    </>

  )
}