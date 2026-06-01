import { useEffect } from "react";
import { useLanguage } from "./hooks/useLanguage";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RaceTicker } from "./components/RaceTicker";
import { QuickFacts } from "./components/QuickFacts";
import { RouteCards } from "./components/RouteCards";
import { MapSection } from "./components/MapSection";
import { ScrollVideo } from "./components/ScrollVideo";
import { GallerySection } from "./components/GallerySection";
import { RunnerGuide } from "./components/RunnerGuide";
import { Schedule } from "./components/Schedule";
import { DiscoverCox } from "./components/DiscoverCox";
import { Sponsors } from "./components/Sponsors";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export default function App() {
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "es"
        ? "Trail Cox | Carrera de montaña nocturna en Cox, Alicante"
        : "Trail Cox | Night trail race in Cox, Alicante";
  }, [lang]);

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary"
      >
        {lang === "es" ? "Ir al contenido principal" : "Skip to main content"}
      </a>
      <Header lang={lang} setLang={setLang} />
      <main id="inicio">
        <Hero lang={lang} />
        <RaceTicker />
        <QuickFacts lang={lang} />
        <RouteCards lang={lang} />
        <MapSection lang={lang} />
        <ScrollVideo lang={lang} />
        <GallerySection lang={lang} />
        <RunnerGuide lang={lang} />
        <Schedule lang={lang} />
        <DiscoverCox lang={lang} />
        <Sponsors lang={lang} />
        <Faq lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
