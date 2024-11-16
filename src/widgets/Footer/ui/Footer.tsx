import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({className}) => {
  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
      <div>Directed by Andrey Kuznetsov</div>
    </footer>
  );
};
