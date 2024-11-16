import cls from './EventsPage.module.scss'
import {EventsMain} from "widgets/EventsMain";

export default function page() {
  return (
    <div className={cls.EventsPage}>
      <EventsMain />
    </div>
  );
}
