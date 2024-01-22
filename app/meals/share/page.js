/* Using serve actions to post forms only works if you don't have use client component
  If you do , you will get error since the component becomes  a client component
  Also, you might have problems if you have client actions performed on your form and 
  as such you had already used made it a client componet.
   To resolve this , it is better to move it into a seperate file and add 'use server' to the file
   This way you can freely use client on the form component file without errors
*/

import shareMeal from '@/api/post-form';
import classes from './page.module.css';
import ImagePicker from '@/components/image-picker/image-picker';
import MealFormSubmitButtonStatus from '../meal-form-submit-status';

export default function ShareMealPage() {

    
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
           <ImagePicker label='Upload an image of your meal' name='mealimage'/>
          <p className={classes.actions}>
            <MealFormSubmitButtonStatus />
          </p>
        </form>
      </main>
    </>
  );
}