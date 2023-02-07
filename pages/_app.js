import Script from "next/script";
import Layout from "../components/Layout";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
    return (
    <Layout>
        <Script src="/js/custom.js" />
        <Component {...pageProps} />
    </Layout>
    );
}
