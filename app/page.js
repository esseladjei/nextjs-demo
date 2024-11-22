import Link from 'next/link';
import styless from './page.module.css';
import ImageSlideshow from '@/components/images-slides/images-slideshow';

export default function Home() {
  return (
    <>
      <header className={styless.header}>
        <div className={styless.slideshow}>
          <ImageSlideshow />

        </div>
        <div>
          <div className={styless.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={styless.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styless.section}>
          <h2>How it works</h2>
          <p>
           You can share a meal with some basic bio information and a meal picture of and instruction of how it is prepared
          </p>
        </section>

        <section className={styless.section}>
          <h6>Why NextLevel Food?</h6>
          <p>
           NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
