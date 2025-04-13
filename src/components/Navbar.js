
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar({ scrolled }) {
    return (

        <nav
            className={` fixed top-0 w-full transition-all duration-500 z-50 ${scrolled ? 'left-0 bg-[rgb(15,55,63)]/75 py-2' : ' bg-transparent py-8 '
                }`}
        >

            <div className={`container mx-auto flex flex-col items-center${scrolled ? "" : ""}`}>

                <Link href="/">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/jesus.jpg"
                            alt="Logo"
                            width={scrolled ? 60 : 500}
                            height={scrolled ? 60 : 900}
                            className={`hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500 rounded-full shadow-lg bg-white ${scrolled ? 'border-2 border-white' : 'border-4 border-white'
                                }`}
                        /></div>
                </Link>
                <h2 className={` text-white text-2xl font-bold text-center ${scrolled ? 'invisible' : ""}`}>jamil vargs portfolio</h2>
                <div className="flex space-x-9  ">

                    <Link href="#featured-projects">
                        <h className={`hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-2xl font-bold  text-white ${scrolled ? 'text-lg' : 'invisible'}`}>Featured Projects</h >
                    </Link>
                    <Link href="#github-repos">
                        <h className={`hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-2xl font-bold  text-white ${scrolled ? 'text-lg' : 'invisible'}`}>GitHub Repos</h >
                    </Link>
                </div>

            </div>
        </nav >
    );
}
