import Image from 'next/image';

// PAGINA
/* Home */
export default function Home() {
    // RETORNO
    return (
        <main className="p-2 min-h-screen flex flex-col items-center justify-evenly">
            <div className="w-full max-w-5xl z-10 items-center justify-between text-sm font-mono lg:flex">
                <p className="pt-8 pb-6 w-full fixed left-0 top-0 flex justify-center bg-gradient-to-b from-zinc-200 border-b border-gray-300 backdrop-blur-2xl lg:p-4 lg:w-auto lg:static lg:border lg:bg-gray-200 lg:rounded-xl">
                    <span className='mr-2 font-bold'>Home</span> de la Aplicación de práctica.
                </p>

                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        By

                        <Image
                            alt="Vercel Logo"
                            height={24}
                            priority
                            src="/vercel.svg"
                            width={100}
                        />
                    </a>
                </div>
            </div>

            <div className="h-96 flex flex-col items-center justify-center">
                <Image
                    alt="Next.js Logo"
                    height={37}
                    priority
                    src="/next.svg"
                    width={180}
                />

                <button className='py-2 px-6 mt-8 bg-rose-700 rounded-full'>
                    <span className='text-white font-bold'>About</span>
                </button>
            </div>

        </main>
    );
}
