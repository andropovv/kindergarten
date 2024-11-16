'use client'
import {FC, useEffect, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface NavbarProps {
  className?: string;
}

const paths = [
  {
    path: '/',
    name: 'Главная'
  },
  {
    path: '/contacts',
    name: 'Контакты'
  },
  {
    path: '/events',
    name: 'Новости'
  },
  {
    path: '/admission',
    name: 'Условия приема'
  },
  {
    path: '/for-parents',
    name: 'Родителям'
  },
  {
    path: '/about',
    name: 'О нас'
  },
]

export const Navbar: FC<NavbarProps> = ({className}) => {
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classNames(cls.Navbar, {[cls.fixed] : isSticky}, [className])}>
      {paths.map(p => (<Link key={p.path} href={p.path} className={classNames(cls.link,
        {[cls.active]: pathName == p.path}, [])}>
        {p.name}
      </Link>))}
    </div>
  );
};
