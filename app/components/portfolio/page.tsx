"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import images from "@/app/utils/images";
import {
  transitionFromLeftAndRotate,
  transitionFromRightAndRotate,
  scaleOnHover,
} from "@/app/utils/variants";
import "./style.css";

type GalleryItem = {
  title: string;
  pattern?: string;
};

type GalleryItems = {
  [key: number]: GalleryItem;
};

const galleryItems: GalleryItems = {
  66: {
    title: "Soft White Gloves",
  },
  65: {
    title: "Halloween Pumpkins",
    pattern:
      "https://amigurumi.today/free-halloween-amigurumi-pumpkin-crochet-pattern/",
  },
  64: {
    title: "Fox Lovey",
  },
  63: {
    title: "Little Sheep and Bunny",
  },
  62: {
    title: "Granny Square Cardigan",
    pattern:
      "https://www.yarnspirations.com/patons-coziest-crochet-cardigan/PAC0128-001968M.html",
  },
  61: {
    title: "Paw Print on Sweater",
  },
  60: {
    title: "Soft Dice",
    pattern:
      "https://www.elisascrochet.com/post/soft-dice-free-crochet-pattern",
  },
  59: {
    title: "Sheep Lovey",
  },
  58: {
    title: "Soft Football",
  },
  57: {
    title: "Little Girl Doll",
  },
  56: {
    title: "Flower Cap with Hair",
    pattern:
      "https://www.youtube.com/watch?v=EP6U4jjKTCA&t=0s&ab_channel=HanDIYTutorials",
  },
  55: {
    title: "Frozen's Elsa Cap",
    pattern:
      "https://www.youtube.com/watch?v=EP6U4jjKTCA&t=0s&ab_channel=HanDIYTutorials",
  },
  54: {
    title: "Dandelion in Resin Pendant",
  },
  53: {
    title: "Rose Petals Earrings and Pendant",
  },
  52: {
    title: "Dragonfly Wings Earrings - design 1",
  },
  51: {
    title: "Dragonfly Wings Earrings - design 2",
  },
  50: {
    title: "Dragonfly Wings Earrings - design 3",
  },
  49: {
    title: "Personalised Letter Keychain",
  },
  48: {
    title: "Beach Themed Couple's Name Wall Hanging",
  },
  47: {
    title: "Beach Themed Home Wall Hanging",
  },
  46: {
    title: "Marble Effect Clock",
  },
  45: {
    title: "Key Holder",
  },
  44: {
    title: "Holographic Trinket Bowl",
  },
  43: {
    title: "Memories Preserved in Resin",
  },
  42: {
    title: "Crochet Bralette",
    pattern: "https://www.youtube.com/watch?v=TzTfxzUlGBU&ab_channel=ChendaDIY",
  },
  41: {
    title: "Crocheted and Sewed Dress with Pockets",
  },
  40: {
    title: "Multicolor Puff Stitch Beanie",
    pattern:
      "https://www.youtube.com/watch?v=X4uivY5FfSw&ab_channel=ClaudettaCrochet",
  },
  39: {
    title: "Fit and Flare Skirt",
  },
  38: {
    title: "Crochet pineapple crop top",
    pattern:
      "https://www.youtube.com/watch?v=9-SzGEBaosE&ab_channel=PassioKnitKelsie",
  },
  37: {
    title: "Crochet Round Boho Purse",
    pattern:
      "https://makeanddocrew.com/street-fair-crochet-hippie-purse-free-pattern/",
  },
  36: {
    title: "Baby Dress Set",
  },
  35: {
    title: "Baby Owl Cap",
  },
  34: {
    title: "Baby Earflap Cap",
  },
  33: {
    title: "Cloud Cradle Hanging",
  },
  32: {
    title: "Colorful Caterpillar",
  },
  31: {
    title: "Sleepy Dog",
  },
  30: {
    title: "Hello Kitty",
  },
  29: {
    title: "Cat in a dress",
    pattern: "https://yourcrochet.com/cat-doll-in-dress-free-crochet-pattern/",
  },
  28: {
    title: "Brontosaurus",
    pattern:
      "https://stringydingding.com/brontosaurus-dinosaur-amigurumi-free-crochet-pattern/",
  },
  27: {
    title: "Fox",
    pattern: "",
  },
  26: {
    title: "Cat with an attitude",
    pattern: "https://amigurumi.today/large-ami-cat-crochet-pattern/",
  },
  25: {
    title: "Cuddly sheep",
    pattern: "https://amigurumi.today/amigurumi-sheep-plush-toy-pattern/",
  },
  24: {
    title: "Snowman",
    pattern: "https://amigurumi.today/crochet-snowman-amigurumi-pattern/",
  },
  23: {
    title: "Teddy Bear",
    pattern: "https://amigurumi.today/crochet-bear-in-overalls-free-pattern/",
  },
  22: {
    title: "Yellow Rabbit",
  },
  21: {
    title: "Yellow llama",
    pattern:
      "https://www.yarnspirations.com/row-en/red-heart-llama-no-drama/RHC0334-024120M.html",
  },
  20: {
    title: "Pink llama",
    pattern:
      "https://www.yarnspirations.com/row-en/red-heart-llama-no-drama/RHC0334-024120M.html",
  },
  19: {
    title: "Honey Bee",
  },
  18: {
    title: "Owl",
  },
  17: {
    title: "Angel",
    pattern:
      "https://www.youtube.com/watch?v=3qe5hM-y2qQ&ab_channel=OombawkaDesignCrochet",
  },
  16: {
    title: "Basket weave crochet cushion cover",
  },
  15: {
    title: "Flower Coasters and Pot",
    pattern: "https://youtu.be/GqRXD7nzaRk?si=Geq8iQ95hDKRYmvB",
  },
  14: {
    title: "Sewed Boston Bag",
    pattern: "https://www.youtube.com/watch?v=Fuu2Hq2ihQY",
  },
  13: {
    title: "Crochet Roses",
    pattern: "https://www.youtube.com/watch?v=z4VoUx2mC_U",
  },
  12: {
    title: "Pikachu",
    pattern: "https://www.ravelry.com/patterns/library/pikachu-from-pokemon",
  },
  11: {
    title: "Mr. Bean's Teddy",
  },
  10: {
    title: "Squirtle",
    pattern: "https://www.ravelry.com/patterns/library/squirtle-from-pokemon",
  },
  9: {
    title: "Sweater, Beanie and Booties set",
  },
  8: {
    title: "Squishy Donut Cushion",
  },
  7: {
    title: "Onesie, Beanie and Booties set",
  },
  6: {
    title: "Air Dry Clay Dragonair",
  },
  5: {
    title: "Toothless",
  },
  4: {
    title: "Purple Dino",
    pattern:
      "https://bumcraftcrochet.com/2022/06/26/free-t-rex-dinosaur-crochet-pattern",
  },
  3: {
    title: "Charmander",
    pattern: "https://www.1upcrochet.com/charmander-amigurumi-pattern-copy",
  },
  2: {
    title: "Lapras",
    pattern:
      "https://www.deviantart.com/geekmakerart/art/Amigurumi-Pattern-Lapras-903506210",
  },
  1: {
    title: "Naruto",
  },
};

const totalPhotos: number = Object.keys(galleryItems).length;

const Portfolio = () => {
  // Pagination state
  const [page, setPage] = useState(1);

  // Function to handle pagination
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const createGallery = () => {
    const rowsShown: number = 6;
    const imageStart: number = (page - 1) * rowsShown;
    const imageEnd: number = Math.min(imageStart + rowsShown, totalPhotos);
    const photos = [];
    for (let i: number = imageStart; i < imageEnd; i++) {
      photos.push(
        <motion.div
          variants={scaleOnHover}
          initial="offscreen"
          whileHover="hover"
          whileTap="pressed"
          whileInView="onscreen"
          className="w-[50%] flex flex-wrap"
        >
          <article key={`image${i}`}>
            <Link
              href={`../../../public/gallery/fulls/${i}.jpg`}
              className="relative block w-full shadow-indigo-500 dark:shadow-slate-300"
            >
              <motion.div
                variants={
                  i % 2
                    ? transitionFromRightAndRotate
                    : transitionFromLeftAndRotate
                }
              >
                <Image
                  src={images[i]}
                  title={galleryItems[i + 1].title}
                  className="block w-full m-0"
                  alt={galleryItems[i + 1].title}
                />
              </motion.div>
            </Link>
          </article>
        </motion.div>
      );
    }

    const pages: Array<ReactNode> = [];
    let numPages: number = totalPhotos / rowsShown;
    let pageStart: number = 1;
    let pageEnd: number = numPages;
    if (numPages > 5) {
      if (page + 4 < numPages) {
        pageStart = page;
        pageEnd = page + 4;
      } else {
        pageStart = numPages - 4;
      }
    }

    pages.push(
      <button
        key={"prev"}
        onClick={() => handlePageChange(page - 1)}
        className="page px-8 disabled:bg-gray-400 bg-cyan-700 hover:bg-cyan-500 dark:bg-cyan-400 dark:hover:bg-cyan-300"
        disabled={page === 1}
      >
        &laquo;
      </button>
    );

    for (let pageNum = pageStart; pageNum <= pageEnd; pageNum++) {
      pages.push(
        <button
          key={pageNum}
          className={`page ${pageNum < 10 ? "px-6" : "px-5"} ${
            pageNum === page
              ? "bg-cyan-400 hover:bg-cyan-300 dark:bg-cyan-200 dark:hover:bg-cyan-100"
              : "bg-cyan-700 hover:bg-cyan-500 dark:bg-cyan-400 dark:hover:bg-cyan-300"
          }`}
          onClick={() => handlePageChange(pageNum)}
        >
          {pageNum}
        </button>
      );
    }

    pages.push(
      <button
        key={"next"}
        onClick={() => handlePageChange(page + 1)}
        className="page px-8 disabled:bg-gray-400 bg-cyan-700 hover:bg-cyan-500 dark:bg-cyan-400 dark:hover:bg-cyan-300"
        disabled={imageEnd >= totalPhotos}
      >
        &raquo;
      </button>
    );

    return (
      <div className="max-w-full space-y-8">
        <div className="flex flex-wrap">{photos}</div>
        <div className="flex items-center justify-evenly w-full">{pages}</div>
      </div>
    );
  };

  return (
    <section
      id="portfolio"
      className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center space-y-12 px-0 py-24 min-h-full w-full align-baseline"
    >
      <div className="max-w-full sm:w-[50%] w-[75%] space-y-12">
        <header className="space-y-12">
          <h2 className="font-['TitleFont'] text-3xl font-extrabold">
            Portfolio
          </h2>
          <p>
            My work primarily comprises amigurumi dolls (Amigurumi is the
            Japanese art of knitting or crocheting small, stuffed yarn
            creatures).{" "}
          </p>
        </header>
        {/* Gallery */}
        {createGallery()}
      </div>
      <a
        href="#patterns"
        className="button style2 down anchored sm:visible invisible"
      >
        Next
      </a>
    </section>
  );
};

export default Portfolio;
