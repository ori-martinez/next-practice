import Head from 'next/head';
/* Styles */
import '@/styles/globals.css';

// FUNCION PRINCIPAL
/* Aplicación */
export default function App({ Component, pageProps }) {
    // RETORNO
    return (<>
        <Head>
            <title>Initial App</title>

            <meta content='Initial App in Next.js' name='description' />
        </Head>

        <Component {...pageProps} />
    </>);
}
