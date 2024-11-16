'use client'
import {FC} from "react";
import cls from "./EventsPageTitle.module.scss";
import {Button} from "shared/ui/Button/Button";
import {useRouter} from "next/navigation";

interface EventsPageTitleProps {
  className?: string;
}

export const EventsPageTitle: FC<EventsPageTitleProps> = ({className}) => {
  const router = useRouter();
  return (
    <div className={cls.EventPageTitle}>
      <Button onClick={() => router.back()}>Назад</Button>
      <h2>Новый год</h2>
      <p>24.05.2024</p>
    </div>
  );
};
