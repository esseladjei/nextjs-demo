

import Link from "next/link";
import Image from "next/image";
import LogoImage from '@/assets/logo.png'
import styless from '@/components/main-header/css/main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styless.header}>
        <Link className={styless.logo} href="/">
          <Image src={LogoImage.src} alt="A plate with food on it" width="200" height="200" priority={true} />
          Next demo project food
        </Link>
        <nav className={styless.nav}>
          <ul>
            <li><NavLink href="/meals">Browse meals</NavLink></li>
            <li><NavLink href="/community">Foodies  community</NavLink></li>
            <li><NavLink href="/meals/share">Share meals</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )

}