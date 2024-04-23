'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import images from './images';
import './style.css';

type GalleryItem = {
    title: string;
    pattern?: string;
};

type GalleryItems = {
    [key: number]: GalleryItem;
};

const galleryItems: GalleryItems = {
    1: {
        title: "Soft White Gloves"
    },
    2: {
        title: "Halloween Pumpkins",
        pattern: "https://amigurumi.today/free-halloween-amigurumi-pumpkin-crochet-pattern/"
    },
    3: {
        title: "Fox Lovey"
    },
    4: {
        title: "Little Sheep and Bunny"
    },
    5: {
        title: "Granny Square Cardigan",
        pattern: "https://www.yarnspirations.com/patons-coziest-crochet-cardigan/PAC0128-001968M.html"
    },
    6: {
        title: "Paw Print on Sweater"
    },
    7: {
        title: "Soft Dice",
        pattern: "https://www.elisascrochet.com/post/soft-dice-free-crochet-pattern"
    },
    8: {
        title: "Sheep Lovey"
    },
    9: {
        title: "Soft Football"
    },
    10: {
        title: "Little Girl Doll"
    },
    11: {
        title: "Flower Cap with Hair",
        pattern: "https://www.youtube.com/watch?v=EP6U4jjKTCA&t=0s&ab_channel=HanDIYTutorials"
    },
    12: {
        title: "Frozen's Elsa Cap",
        pattern: "https://www.youtube.com/watch?v=EP6U4jjKTCA&t=0s&ab_channel=HanDIYTutorials"
    },
    13: {
        title: "Dandelion in Resin Pendant"
    },
    14: {
        title: "Rose Petals Earrings and Pendant"
    },
    15: {
        title: "Dragonfly Wings Earrings - design 1"
    },
    16: {
        title: "Dragonfly Wings Earrings - design 2"
    },
    17: {
        title: "Dragonfly Wings Earrings - design 3"
    },
    18: {
        title: "Personalised Letter Keychain"
    },
    19: {
        title: "Beach Themed Couple's Name Wall Hanging"
    },
    20: {
        title: "Beach Themed Home Wall Hanging"
    },
    21: {
        title: "Marble Effect Clock"
    },
    22: {
        title: "Key Holder"
    },
    23: {
        title: "Holographic Trinket Bowl"
    },
    24: {
        title: "Memories Preserved in Resin"
    },
    25: {
        title: "Crochet Bralette",
        pattern: "https://www.youtube.com/watch?v=TzTfxzUlGBU&ab_channel=ChendaDIY"
    },
    26: {
        title: "Crocheted and Sewed Dress with Pockets"
    },
    27: {
        title: "Multicolor Puff Stitch Beanie",
        pattern: "https://www.youtube.com/watch?v=X4uivY5FfSw&ab_channel=ClaudettaCrochet"
    },
    28: {
        title: "Fit and Flare Skirt"
    },
    29: {
        title: "Crochet pineapple crop top",
        pattern: "https://www.youtube.com/watch?v=9-SzGEBaosE&ab_channel=PassioKnitKelsie"
    },
    30: {
        title: "Crochet Round Boho Purse",
        pattern: "https://makeanddocrew.com/street-fair-crochet-hippie-purse-free-pattern/"
    },
    31: {
        title: "Baby Dress Set"
    },
    32: {
        title: "Baby Owl Cap"
    },
    33: {
        title: "Baby Earflap Cap"
    },
    34: {
        title: "Cloud Cradle Hanging"
    },
    35: {
        title: "Colorful Caterpillar"
    },
    36: {
        title: "Sleepy Dog"
    },
    37: {
        title: "Hello Kitty"
    },
    38: {
        title: "Cat in a dress",
        pattern: "https://yourcrochet.com/cat-doll-in-dress-free-crochet-pattern/"
    },
    39: {
        title: "Brontosaurus",
        pattern: "https://stringydingding.com/brontosaurus-dinosaur-amigurumi-free-crochet-pattern/"
    },
    40: {
        title: "Fox",
        pattern: ""
    },
    41: {
        title: "Cat with an attitude",
        pattern: "https://amigurumi.today/large-ami-cat-crochet-pattern/"
    },
    42: {
        title: "Cuddly sheep",
        pattern: "https://amigurumi.today/amigurumi-sheep-plush-toy-pattern/"
    },
    43: {
        title: "Snowman",
        pattern: "https://amigurumi.today/crochet-snowman-amigurumi-pattern/"
    },
    44: {
        title: "Teddy Bear",
        pattern: "https://amigurumi.today/crochet-bear-in-overalls-free-pattern/"
    },
    45: {
        title: "Yellow Rabbit"
    },
    46: {
        title: "Yellow llama",
        pattern: "https://www.yarnspirations.com/row-en/red-heart-llama-no-drama/RHC0334-024120M.html"
    },
    47: {
        title: "Pink llama",
        pattern: "https://www.yarnspirations.com/row-en/red-heart-llama-no-drama/RHC0334-024120M.html"
    },
    48: {
        title: "Honey Bee"
    },
    49: {
        title: "Owl"
    },
    50: {
        title: "Angel",
        pattern: "https://www.youtube.com/watch?v=3qe5hM-y2qQ&ab_channel=OombawkaDesignCrochet"
    },
    51: {
        title: "Basket weave crochet cushion cover"
    },
    52: {
        title: "Flower Coasters and Pot",
        pattern: "https://youtu.be/GqRXD7nzaRk?si=Geq8iQ95hDKRYmvB"
    },
    53: {
        title: "Sewed Boston Bag",
        Pattern: "https://www.youtube.com/watch?v=Fuu2Hq2ihQY"
    },
    54: {
        title: "Crochet Roses",
        Pattern: "https://www.youtube.com/watch?v=z4VoUx2mC_U"
    },
    55: {
        title: "Pikachu",
        pattern: "https://www.ravelry.com/patterns/library/pikachu-from-pokemon"
    },
    56: {
        title: "Mr. Bean's Teddy"
    },
    57: {
        title: "Squirtle",
        pattern: "https://www.ravelry.com/patterns/library/squirtle-from-pokemon"
    },
    58: {
        title: "Sweater, Beanie and Booties set"
    },
    59: {
        title: "Squishy Donut Cushion"
    },
    60: {
        title: "Onesie, Beanie and Booties set"
    },
    61: {
        title: "Air Dry Clay Dragonair"
    },
    62: {
        title: "Toothless"
    },
    63: {
        title: "Purple Dino",
        pattern: "https://bumcraftcrochet.com/2022/06/26/free-t-rex-dinosaur-crochet-pattern"
    },
    64: {
        title: "Charmander",
        pattern: "https://www.1upcrochet.com/charmander-amigurumi-pattern-copy"
    },
    65: {
        title: "Lapras",
        pattern: "https://www.deviantart.com/geekmakerart/art/Amigurumi-Pattern-Lapras-903506210"
    },
    66: {
        title: "Naruto"
    }
}

const totalPhotos: number = Object.keys(galleryItems).length;

const Portfolio = () => {

    // Pagination state
    const [page, setPage] = useState(1);

    // Function to handle pagination
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const createGallery = () => {
        const rowsShown = 6;  
        const imageStart = (page - 1) * rowsShown;
        const imageEnd = Math.min(imageStart + rowsShown, totalPhotos);
        const photos = [];
        for (let i=imageStart; i<imageEnd; i++) {
            let styleDirection = "translate-x-56";
            if(i%2 === 0) {
                styleDirection = "-translate-x-56";
            }
            photos.push(<article className={`${styleDirection} w-[50%] transition-transform duration-1000 ease-out translate-x-0 opacity-100`}><Link href={`../../../public/gallery/fulls/${i}.jpg`} className="relative block w-full"><Image src={images[i]} title={galleryItems[i+1].title} className='block w-full m-0' alt=""/></Link></article>);
        }

        const pages = [];
        var numPages = totalPhotos/rowsShown; 
        let pageStart = 1;
        let pageEnd = numPages;
        if (numPages > 5) {
            if (page + 4 < numPages){
                pageStart = page;
                pageEnd = page + 4;
            }
            else {
                pageStart = numPages - 4;
            }
        }

        pages.push(<button onClick={() => handlePageChange(page - 1)} className="page px-8 disabled:bg-gray-400 bg-cyan-700 hover:bg-cyan-500 dark:bg-cyan-400 dark:hover:bg-cyan-300" disabled={page === 1}>&laquo;</button>);

        for (let pageNum = pageStart; pageNum <= pageEnd; pageNum++) {  
            pages.push(<button className={`page ${pageNum < 10 ? 'px-6' : 'px-5'} ${pageNum === page ? 'bg-cyan-400 hover:bg-cyan-300 dark:bg-cyan-200 dark:hover:bg-cyan-100' : 'bg-cyan-700 hover:bg-cyan-500 dark:bg-cyan-400 dark:hover:bg-cyan-300'}`} onClick={() => handlePageChange(pageNum)}>{pageNum}</button>);  
        }

        pages.push(<button onClick={() => handlePageChange(page + 1)} className="page px-8 disabled:bg-gray-400 bg-cyan-700 hover:bg-cyan-500 dark:bg-cyan-400 dark:hover:bg-cyan-300" disabled={imageEnd >= totalPhotos}>&raquo;</button>)

        return (
            <div className="w-['45rem'] max-w-full space-y-8">
                <div className='flex flex-wrap'>
                    {photos}
                </div>
                <div className='flex items-center justify-evenly w-full'>
                    {pages}
                </div>
            </div>
        )
    }

    return (
        <section id="portfolio" className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center space-y-12 px-0 py-24 min-h-full w-full align-baseline">
            <div className="max-w-full sm:w-[50%] w-[75%] space-y-12">
                <header className="space-y-12">
                    <h2 className="font-['TitleFont'] text-3xl font-extrabold">Portfolio</h2>
                    <p>My work primarily comprises amigurumi dolls (Amigurumi is the Japanese art of knitting or crocheting small, stuffed yarn creatures). </p>
                </header>
                {/* Gallery */}
                {createGallery()}

            </div>
            <a href="#patterns" className="button style2 down anchored">Next</a>
        </section>
    )
}


export default Portfolio;