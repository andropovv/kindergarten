'use client'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./EventMain.module.scss";
import {Event} from '/app/types/Event'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

interface EventMainProps {
  className?: string;
  event: Event
}

export const EventMain: FC<EventMainProps> = ({className, event}) => {
  const router = useRouter()
  return (
    <div className={classNames(cls.EventMain, {}, [className])} onClick={() => router.push(`/events/${event.id}`)}>
      <div className={cls.left}>
        <Image src={event.images[0]} alt='' width={1000} height={1000} />
      </div>
      <div className={cls.right}>
        <div className={cls.header}>
          <h3>{event.title}</h3>
          <div>{event.date}</div>
        </div>
        <p>{event.description}</p>
      </div>
    </div>
  );
};
