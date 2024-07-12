import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    //layout is our navbar component
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  );
}
