const MyWork = () => {
  return (
    <section
      id="mywork"
      className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center space-y-12 px-0 py-12 min-h-full h-screen sm:p-0 w-full align-baseline"
    >
      <header>
        <h2 className="font-['TitleFont'] text-3xl font-extrabold">
          What I do
        </h2>
      </header>
      <div className="box max-w-full sm:w-[50%] w-[75%] flex flex-col items-center justify-center my-0 mx-auto m-0 bgtext space-y-4 p-12">
        <p className="text-base font-semibold text-justify leading-7">
          Even though crochet is my jam, I also love whipping up tiny resin or
          clay trinkets and the occasional sewn goodie. So get ready for a mix
          of colorful creations in my portfolio! Whether you spot something you
          love or have a wild crafting idea, don&apos;t be shy, shoot me a
          message! I live for bringing new things to life! ✨
        </p>
        <p className="text-base font-semibold text-justify leading-7">
          Just a heads up, I have a full-time job, so super urgent requests
          might be tricky. (Plus, crocheting takes some serious time!) But if
          you have a special occasion coming up, let me know at least a month in
          advance, and we can make magic happen! 🪄
        </p>
      </div>
      <a href="#contact" className="button style2 down anchored">
        Next
      </a>
    </section>
  );
};

export default MyWork;
