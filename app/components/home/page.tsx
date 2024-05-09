import Link from "next/link";

import "./style.css";

const Home = () => {
  return (
    <section
      id="intro"
      className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center space-y-12 px-0 py-12 min-h-full h-screen sm:p-0 w-full align-baseline"
    >
      <header>
        <h2 className="font-['TitleFont'] text-3xl font-extrabold">
          Hoops & Loops
        </h2>
      </header>
      <div className="animate box max-w-full sm:w-[50%] w-[75%] flex flex-col items-center justify-center my-0 mx-auto transition-opacity duration-1000 active:opacity-100 m-0 bgtext space-y-4 p-12">
        <p className="text-base font-semibold text-justify leading-7">
          Hoops & Loops emerged from my passion for crafting and the thrill of
          creating something beautiful. This website&apos;s more than just a
          showcase of my craftwork; it&apos;s also a platform where I display my
          love for front-end development.
        </p>
        <p className="text-base font-semibold text-justify leading-7">
          In the{" "}
          <Link className="link" href="#portfolio">
            Portfolio
          </Link>{" "}
          section, you&apos;ll find all the craft work I have done so far. If
          you are a crochet artist yourself, head over to the{" "}
          <Link className="link" href="#patterns">
            Patterns
          </Link>{" "}
          section to see if anything tickles your fancy. And if you spot
          something you love in my work, don&apos;t be a stranger! Hit me up on{" "}
          <Link
            className="link"
            href="https://www.instagram.com/_hoops.and.loops_"
            target="_blank"
          >
            Instagram
          </Link>
          ,{" "}
          <Link className="link" href="https://wa.me/9946525977">
            WhatsApp
          </Link>{" "}
          or use the{" "}
          <Link className="link" href="#contact">
            Contact
          </Link>{" "}
          section to chat, customize something special, or just say hi! 😊
        </p>
        <footer className="mb-0 align-baseline">
          <a href="#portfolio" className="button style2 down">
            More
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Home;
