import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
    <Layout>
        <Script src="../public/js/custom.js" />
        <Component {...pageProps} />
    </Layout>
}
