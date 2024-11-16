import {ImageSlider} from "shared/ui/ImageSlider/ImageSlider";
import Image from "next/image";
import {EventsMain} from "widgets/EventsMain";
import {DirectorCard} from "widgets/DirectorCard";

export default function Home() {
  return (
    <div className='home-page-container'>
      <div>
        <p style={{font: 'var(--font-l)', textAlign: "center", margin: '10px'}}>Добро пожаловать на официальный сайт
          ..........</p>

      </div>
      <div className='home-present'>
        <p style={{width: '80%', textAlign: 'justify', textIndent: '20px'}}>Слова вы сможете слова слова слова слова
          словаслова слова слова
          Слова слова словасловаслова слова слова слова
          словасловаслова слова слова слова словасловаслова слова слова слова словасловаслова слова слова слова
          словаслова
        </p>
        <p style={{width: '80%', textAlign: 'justify', textIndent: '20px'}}>Слова вы сможете слова слова слова слова
          словаслова слова слова
          Слова слова словасловаслова слова слова слова
          словасловаслова слова слова слова словасловаслова слова слова слова словасловаслова слова слова слова
          словаслова
        </p>
        <div style={{width: '80%', height: 'auto'}}>
          <ImageSlider>
            <Image src='/assets/images/placeholder.jpg' alt={''} width={0}
                   height={0}
                   sizes="100vw"
                   style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
            <Image src='/assets/images/placeholder.jpg' alt={''} width={0}
                   height={0}
                   sizes="100vw"
                   style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
            <Image src='/assets/images/placeholder.jpg' alt={''} width={0}
                   height={0}
                   sizes="100vw"
                   style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>

          </ImageSlider>
        </div>
      </div>
      <DirectorCard />
      <EventsMain />
    </div>
  );
}
