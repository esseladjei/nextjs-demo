'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styless from './css/nav-link.module.css'
export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <>
      <Link className={path.startsWith(href) ? `${styless.link} ${styless.active}` : styless.link} href={href}>{children}</Link>
    </>
  )
}