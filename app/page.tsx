import Header from "./components/header/page";
import Home from "./components/home/page";
import Portfolio from "./components/portfolio/page";
import Patterns from "./components/patterns/page";
import AboutMe from "./components/aboutme/page";
import MyWork from "./components/mywork/page";
import Contact from "./components/contact/page";

export default function Page() {
  return (
    <main id="body" className="h-full w-full box-border min-w-80 is-preload">
      <div className="w-full items-center justify-between font-mono">
        <Header />
        <Home />
        <Portfolio />
        <Patterns />
        <AboutMe />
        <MyWork />
        <Contact />
      </div>
    </main>
  );
}
