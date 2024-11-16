import cls from './EventPage.module.scss'
import {ImageSlider} from "shared/ui/ImageSlider/ImageSlider";
import Image from "next/image";
import {EventsPageTitle} from "widgets/EventPageTitle";

export default function page() {
  return (
    <div className={cls.EventPage}>
      <EventsPageTitle />
      <div className={cls.images}>
        <ImageSlider>
          <Image src='/assets/images/news1.jpg' alt={''} width={1000}
                 height={1000}/>
          <Image src='/assets/images/news2.jpg' alt={''} width={1000}
                 height={1000}/>
          <Image src='/assets/images/news3.jpg' alt={''} width={1000}
                 height={1000}/>

        </ImageSlider>
      </div>
      <div className={cls.description}>'Скоро Новый год! Поэтому дед мороз, дед мороз,дед мороз,дед мороз,дед мороз,дед
        мороз,дед мороз,' +
        'дед мороз,дед мороз,дед мороз,дед мороз,дед мороз,дед мороз.'
      </div>

    </div>
  );
}
