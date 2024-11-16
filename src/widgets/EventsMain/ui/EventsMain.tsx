'use client'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./EventsMain.module.scss";
import {EventMain} from "features/EventMain/ui/EventMain";
import {Event} from "app/types/Event";
import {usePathname} from 'next/navigation'
import Link from "next/link";

interface EventsMainProps {
  className?: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Новый год',
    description: 'Скоро Новый год! Поэтому дед мороз, дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,' +
      'дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз.',
    images: ['/assets/images/news1.jpg'],
    date: '24.06.2024'
  },
  {
    id: '2',
    title: 'Открытие',
    description: 'Скоро Новый год! Поэтому дед мороз, дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,' +
      'дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз.',
    images: ['/assets/images/news2.jpg'],
    date: '24.06.2024'
  },
  {
    id: '3',
    title: 'Свежие новости',
    description: 'Скоро Новый год! Поэтому дед мороз, дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,' +
      'дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз.',
    images: ['/assets/images/news3.jpg'],
    date: '24.06.2024'
  },
  {
    id: '4',
    title: 'Свежие новости',
    description: 'Скоро Новый год! Поэтому дед мороз, дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,' +
      'дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз.',
    images: ['/assets/images/news3.jpg'],
    date: '24.06.2024'
  },
  {
    id: '5',
    title: 'Свежие новости',
    description: 'Скоро Новый год! Поэтому дед мороз, дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,' +
      'дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз.',
    images: ['/assets/images/news3.jpg'],
    date: '24.06.2024'
  },
]

export const EventsMain: FC<EventsMainProps> = ({className}) => {
  const pathname = usePathname()
  
  return (
    <>
      <h2>Наши новости</h2>
      <div className={classNames(cls.events)}>
        {
          pathname == '/events' ?
            events.map(e => <EventMain event={e} key={e.id} />) :
            events.slice(0, 3).map(e => <EventMain event={e} key={e.id} />)
        }
      </div>
      {pathname == '/' && <Link href='/events' className={cls.more}>Показать еще...</Link>}
    </>
  );
};
