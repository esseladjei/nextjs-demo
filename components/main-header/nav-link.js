'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Styles from './css/nav-link.module.css'
export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <>
      <Link className={path.startsWith(href) ? `${Styles.link} ${Styles.active}` : Styles.link} href={href}>{children}</Link>
    </>
  )
}