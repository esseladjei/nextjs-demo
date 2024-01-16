import Link from "next/link";
import Image from "next/image";
import LogoImage from '@/assets/logo.png'
import Styles from '@/components/css/main-header.module.css'
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {

  return (
    <>
      <MainHeaderBackground />
      <header className={Styles.header}>
        <Link className={Styles.logo} href="/">
          <Image src={LogoImage.src} alt="A plate with food on it" width="200" height="200" priority={true} />
          Next demo project food
        </Link>
        <nav className={Styles.nav}>
          <ul>
            <li><Link href="/meals">Browse Meals</Link></li>
            <li><Link href="/community">Foodies  community</Link></li>
            <li><Link href="/meals/share">share meal</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )

}