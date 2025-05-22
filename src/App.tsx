// import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
// import Features from "./components/sections/Features";
import WhyJoin from "./components/sections/WhyJoin";
import ProductVisuals from "./components/sections/ProductVisuals";
// import TeamMembers from "./components/sections/TeamMembers";
import WaitlistForm from "./components/sections/WaitlistForm";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./styles/animations.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            {/* <Features /> */}
            <ProductVisuals />
            <WhyJoin />
            {/* <TeamMembers /> */}
            <WaitlistForm />
            <ContactForm />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
