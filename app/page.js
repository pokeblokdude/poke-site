import PokeLink from "@/components/PokeLink";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaBluesky, FaInstagram, FaPatreon, FaItchIo } from "react-icons/fa6";

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
        <ul className="flex w-full justify-center sm:mb-8 flex-wrap max-w-[900px]">
          <PokeLink
            text='poke-bd.itch.io'
            url='https://poke-bd.itch.io/'
          >
            <FaItchIo
              className="w-3/4 h-3/4 self-center text-[#fa5c5c]"
            />
          </PokeLink>
          <PokeLink
            text='@poke_gamedev'
            url='https://www.youtube.com/@poke_gamedev'
          >
            <FaYoutube className="w-full h-full text-[#ff0033]"/>
          </PokeLink>
          <PokeLink
            text='@poke_'
            url='https://www.youtube.com/@poke_'
          >
            <FaYoutube className="w-full h-full text-[#ff0033]"/>
          </PokeLink>
          <PokeLink
            text='@poke_bd'
            url='https://patreon.com/poke_bd'
          >
            <FaPatreon
              className="w-3/4 h-3/4 self-center"
            />
          </PokeLink>
          <PokeLink
            text='@poke.place'
            url='https://bsky.app/profile/poke.place'
          >
            <FaBluesky className="w-4/5 h-4/5 text-[#1185fe]"/>
          </PokeLink>
          <PokeLink
            text='@poke.bd'
            url='https://instagram.com/poke.bd'
          >
            <FaInstagram className="w-[80%] h-[80%] text-[#ff0069]"/>
          </PokeLink>
        </ul>
        <p className="font-normal text-xs ">
          email: <a href="mailto:alex@poke.place" className="font-bold hover:underline">alex@poke.place</a>
        </p>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center opacity-25">
        Last updated 8/22/25
      </footer>
    </div>
  );
}
