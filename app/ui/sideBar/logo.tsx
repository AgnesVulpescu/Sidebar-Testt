import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center justify-center leading-none text-white`}
    >
      <Image
        src="/client_logo.png"
        width={100}
        height={76}
        /*className="hidden md:block"*/
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <p className= "text-[44px]">CapGemini</p>
    </div>
  );
}
