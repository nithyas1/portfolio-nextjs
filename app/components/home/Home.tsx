import Link from "next/link";

import './style.css';

const Home = () => {
    return (
        <section id="intro" className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center space-y-12 px-0 py-12 min-h-full h-screen sm:p-0 w-full align-baseline">
				<header>
					<h2 className="font-['TitleFont'] text-3xl font-extrabold">Hoops & Loops</h2>
				</header>
				<div className="animate box max-w-full sm:w-[50%] w-[75%] flex flex-col items-center justify-center my-0 mx-auto transition-opacity duration-1000 active:opacity-100 m-0 bgtext space-y-4 p-12">
					<p className="text-base font-semibold text-justify leading-7">Hoops & Loops was born out of my love for crafting and the excitement of bringing something beautiful to life. This is not just a portfolio for my craft work, but also for my technical knowledge as a front-end developer, as showcased by this website. You will find all the crochet projects I have done so far in the <Link className="link" href="#portfolio">Portfolio</Link> section. If you are a crochet artist yourself, you can check out the <Link className="link" href="#patterns">Patterns</Link> section to see if any of the patterns I have written are to your liking. Or, if you like any of my work, you can contact me on <Link className="link" href="https://www.instagram.com/_hoops.and.loops_" target="_blank">Instagram</Link> or <Link className="link" href="https://wa.me/9946525977">WhatsApp</Link> or reach out to me from <Link className="link" href="#contact">Contact</Link> to give your customised specifications or just to say Hi! 😊</p>
					<footer className="mb-0 align-baseline">
						<a href="#portfolio" className="button style2 down">More</a>
					</footer>
				</div>
			</section>
    )
}


export default Home;