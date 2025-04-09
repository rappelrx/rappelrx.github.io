import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-6xl font-bold">Rappel R.</h1>
        <div className="flex flex-row">
          <h2 className="text-3xl">I like Web Dev and UI/UX Design...</h2>
          <Image
            src="/squidward-octocat.png"
            alt="Squidward Octocat"
            width={60}
            height={15}
            priority
          />
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.5] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/rappelrx"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.2] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://www.linkedin.com/in/rappelrx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <h2 className="text-4xl font-bold pt-8">Projects</h2>
        <a href="https://rappelrx.github.io/intermission/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col text-center p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Intermission Orchestra Website</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Responsive front-end website for the Intermission Orchestra.</p>
                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Node.js, jQuery, JavaScript, HTML, CSS</p>
            </div>
            <img className="object-cover w-24 rounded-t-lg h-auto md:h-auto md:w-40 md:rounded-none md:rounded-s-lg pb-6 md:p-6" src="/jiji-tio.png" alt="Jiji from Kiki's Delivery Service" />
        </a>

        <a href="https://rappelrx.github.io/genshindoc-app/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-24 rounded-t-lg h-auto md:h-auto md:w-40 md:rounded-none md:rounded-s-lg pt-6 md:p-6" src="/baron-bunny-papercraft.png" alt="Baron bunny" />
            <div className="flex flex-col text-center p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GenshinDoc Web App</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Responsive front-end web app offering tools and resources for Genshin Impact players.</p>
                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Vue.js, TypeScript, Vite, HTML, CSS</p>
            </div>
        </a>

        <a href="https://rappelrx.github.io/pikasketch-app/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col text-center p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PikaSketch Web App</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Full-stack MERN web app that lets users draw and log Pokémon characters.</p>
                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">React.js, Express.js, Node.js, MongoDB, TypeScript, HTML, CSS</p>
            </div>
            <img className="object-cover w-24 rounded-t-lg h-auto md:h-auto md:w-40 md:rounded-none md:rounded-s-lg pb-6 md:p-6" src="/squidward-octocat.png" alt="Squidward Octocat" />
        </a>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
