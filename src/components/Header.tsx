import { type PropsWithChildren } from "react";
type HeaderProps = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;
// type HeaderProps = PropsWithChildren<{ image: string }>;
export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}
