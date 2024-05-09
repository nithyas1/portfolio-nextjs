import Link from "next/link";
import Image from "next/image";

import images from "../../utils/images";
import rightArrow from "../../../public/images/right-arrow.svg";
import darkRightArrow from "../../../public/images/dark-right-arrow.svg";

const Patterns = () => {
  return (
    <section
      id="patterns"
      className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center space-y-12 px-0 py-12 min-h-full h-screen sm:p-0 w-full align-baseline"
    >
      <div className="max-w-full sm:w-[50%] w-[75%] space-y-12">
        <header className="space-y-12">
          <h2 className="font-['TitleFont'] text-3xl font-extrabold">
            Patterns
          </h2>
          <p>
            These are a few of the patterns that I have written. They are
            absolutely free!
          </p>
        </header>
      </div>
      <Link
        href="/naruto"
        target="_blank"
        className="flex justify-between max-w-full sm:w-[50%] w-[75%] box patternbox"
      >
        <span className="img">
          <Image
            src={images[0]}
            className="flex justify-center relative w-16 object-contain rounded-2xl"
            title="Naruto"
            alt="Naruto"
          />
        </span>
        <span className="flex justify-center items-center ml-8">
          Crochet Pattern for Naruto - Intermediate level
        </span>
        <span className="flex justify-end">
          <Image
            src={rightArrow}
            className="w-6 hidden dark:block"
            alt="Tap to open pattern"
          />
          <Image
            src={darkRightArrow}
            className="w-6 dark:hidden"
            alt="Tap to open pattern"
          />
        </span>
      </Link>
      <Link
        href="/mrbean"
        target="_blank"
        className="flex justify-between max-w-full sm:w-[50%] w-[75%] box patternbox"
      >
        <span className="img">
          <Image
            src={images[10]}
            className="flex justify-center relative w-16 object-contain rounded-2xl"
            title="Mr. Bean's Teddy Bear"
            alt="Mr. Bean's Teddy Bear"
          />
        </span>
        <span className="flex justify-center items-center ml-8">
          Crochet Pattern for Mr. Bean&apos;s Teddy - Beginner level
        </span>
        <span className="flex justify-end">
          <Image
            src={rightArrow}
            className="w-6 hidden dark:block"
            alt="Tap to open pattern"
          />
          <Image
            src={darkRightArrow}
            className="w-6 dark:hidden"
            alt="Tap to open pattern"
          />
        </span>
      </Link>
      <a href="#aboutme" className="button style2 down anchored">
        Next
      </a>
    </section>
  );
};

export default Patterns;
