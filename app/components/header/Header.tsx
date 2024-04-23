import Link from 'next/link';

import './style.css';

const Header = () => {
    return (
		<div id="header" className="sticky dark:bg-black bg-white z-50 left-0 top-0 w-full h-12 leading-10 shadow-lg shadow-indigo-500/40 dark:shadow-slate-300/40 mb-4">
            <h1 className="sm:absolute sm:left-4 top-0 h-12 leading-10 cursor-default text-xl pt-1 text-center relative left-0">Hoops & Loops</h1>
            <nav className="absolute right-2 top-0 h-12 leading-10 pt-1 invisible sm:visible">
                <ul className="m-0">
                    <li>
                        <Link href="#intro" className='link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#portfolio" className='link'>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="#patterns" className='link'>
                            Patterns
                        </Link>
                    </li>
                    <li>
                        <Link href="#aboutme" className='link'>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="#mywork" className='link'>
                            What I Do
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className='link'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;