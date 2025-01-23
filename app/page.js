import PokeLink from "@/components/PokeLink";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaBluesky, FaInstagram } from "react-icons/fa6";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">

      <main className="flex flex-col gap-8 row-start-2 items-center justify-center w-[95%] max-w-[1280px]">
        <header className="flex flex-col items-center sm:mb-8">
          <div className="w-[128px] h-[128px] relative">
            <Image
              src='/toad2.jpg'
              alt='A pitcure of Toad from Mario dressed as a wizard.'
              className='object-contain rounded-full'
              fill
            />
          </div>
          <div className="max-w-[320px] sm:max-w-[480px] font-light">
            <p className="mt-10 text-justify">
              Hey! I&apos;m Alex &mdash; on the internet I go by <span className="font-bold">Poke</span> :) 
              I make video games and videos about gaming & online culture.
            </p>
          </div>
        </header>
        <div className="flex-col sm:flex sm:flex-row w-full justify-center sm:mb-8">
          <PokeLink
            text='@poke_'
            url='https://www.youtube.com/@poke_'
          >
            <FaYoutube className="w-full h-full text-[#ff0033]"/>
          </PokeLink>
          <PokeLink
            text='@poke_gamedev'
            url='https://www.youtube.com/@poke_gamedev'
          >
            <FaYoutube className="w-full h-full text-[#ff0033]"/>
          </PokeLink>
          <PokeLink
            text='@poke.place'
            url='https://bsky.app/profile/poke.place'
          >
            <FaBluesky className="w-full h-full text-[#1185fe]"/>
          </PokeLink>
          <PokeLink
            text='@poke.bd'
            url='https://instagram.com/poke.bd'
          >
            <FaInstagram className="w-full h-full text-[#ff0069]"/>
          </PokeLink>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center opacity-25">
        Last updated 1/23/25
      </footer>
    </div>
  );
}
