import "./Home.css";
import { Menu } from "../Menu/Menu";

export function Home() {
  return (
    <>
    <header>
        <Menu></Menu>
    </header>
      <section className="banner">
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          dicta illum ad, alias officia a, est iure laudantium aperiam pariatur,
          placeat labore! Sapiente ex eum aperiam omnis delectus. Enim, odit.
        </p>
      </section>
    </>
  );
}
