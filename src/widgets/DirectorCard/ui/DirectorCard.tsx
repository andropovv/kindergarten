import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./DirectorCard.module.scss";
import Image from "next/image";
import {Button} from "shared/ui/Button/Button";

interface DirectorCardProps {
  className?: string;
}

export const DirectorCard: FC<DirectorCardProps> = ({className}) => {
  return (
    <>
      <h2>Наш директор</h2>
      <div className={classNames(cls.directorInf)}>
        <div className={classNames(cls.directorInfContainer)}>
          <div className={classNames(cls.directorInfPhoto)}>
            <Image src='/assets/images/director.jpg' alt={''} width={1000} height={1000}/>
          </div>
          <div className={classNames(cls.directorInfText)}>
            <h3>Donald Trump</h3>
            <p>President of USA and director of this kindergarten. "Welcome to your new home. We'll make Zelenokumsk
              great again!"</p>
            <Button>Обратиться к директору</Button>
          </div>
        </div>
      </div>
    </>
  );
};
