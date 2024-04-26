import Image from "next/image";

import Header from './components/header/Header';
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Patterns from "./components/patterns/Patterns";

export default function Page() {
  return (
    <main id="body" className="h-full w-full box-border min-w-80 is-preload">
      <div className="w-full items-center justify-between font-mono">
        <Header />
        <Home />
        <Portfolio />
        <Patterns />
      </div>
    </main>
  );
}
