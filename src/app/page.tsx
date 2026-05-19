"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="large"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Chi Siamo",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Sport",
          id: "sport",
        },
        {
          name: "Gallery",
          id: "gallery",
        },
        {
          name: "Contatti",
          id: "contact",
        },
      ]}
      brandName="New Roller Agropoli"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="New Roller - Agropoli"
      description="Sport, Relax & Great Food. Vivi la tua passione a pochi passi dal mare."
      kpis={[
        {
          value: "2",
          label: "Campi Sportivi",
        },
        {
          value: "50+",
          label: "Piatti al Menu",
        },
        {
          value: "100%",
          label: "Divertimento",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Contattaci",
          href: "#contact",
        },
        {
          text: "Scopri di più",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-friends-soccer-field_23-2150338721.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/team-celebrating-win-silver-cup_23-2149479283.jpg",
          alt: "Team celebrating the win of silver cup",
        },
        {
          src: "http://img.b2bpic.net/free-photo/excited-father-two-his-sons-watching-football-game-stadium-cheering-victory_1157-49477.jpg",
          alt: "Excited father and two his sons watching football game on stadium and cheering victory",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sporty-young-woman-kicking-ball-summer-day-sportswoman-dark-uniform-kicking-ball-direction-football-goals-teammates-background-sport-leisure-active-lifestyle-concept_74855-21459.jpg",
          alt: "Sporty young woman kicking ball on summer day",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-women-playing-football-team_23-2149044684.jpg",
          alt: "Young women playing in a football team",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-kid-running-outdoors_23-2149457232.jpg",
          alt: "Full shot kid running outdoors",
        },
      ]}
      avatarText="Unisciti alla nostra community sportiva"
      marqueeItems={[
        {
          type: "text",
          text: "Calcio a 5",
        },
        {
          type: "text",
          text: "Ristorante Gourmet",
        },
        {
          type: "text",
          text: "Eventi Sportivi",
        },
        {
          type: "text",
          text: "Area Relax",
        },
        {
          type: "text",
          text: "Aperitivi in compagnia",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Un punto di ritrovo per tutti"
      description="New Roller Agropoli nasce dalla passione per lo sport e la buona cucina. Ti offriamo un ambiente accogliente dove potrai goderti una partita con gli amici e rilassarti con i nostri piatti gourmet."
      buttons={[
        {
          text: "Prenota ora",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-smiley-woman-sitting-restaurant_23-2149390963.jpg"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Burger Gourmet",
          price: "€12",
          imageSrc: "http://img.b2bpic.net/free-photo/big-burger-french-fries-served-wooden-board-cafe_181624-58021.jpg",
        },
        {
          id: "2",
          name: "Pizza Margherita",
          price: "€8",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-pizza-with-parmesan-cheese_23-2148753754.jpg",
        },
        {
          id: "3",
          name: "Patatine Fritte",
          price: "€4",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-girls-eating-corn_23-2148629675.jpg",
        },
        {
          id: "4",
          name: "Club Sandwich",
          price: "€7",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pizza-frame-with-copy-space_23-2148574220.jpg",
        },
        {
          id: "5",
          name: "Birra Artigianale",
          price: "€5",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-lemon-water-with-plate-sweet-bakery-slices-tangerine_114579-30241.jpg",
        },
        {
          id: "6",
          name: "Soft Drinks",
          price: "€3",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-bottle-bear-with-glass-full-bear-light-background_140725-94847.jpg",
        },
      ]}
      title="Il Nostro Menu"
      description="Dai classici burger alle pizze croccanti, scopri tutto il gusto che ti aspetta."
    />
  </div>

  <div id="sport" data-section="sport">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Calcio a 5",
          description: "Campo regolamentare in erba sintetica.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-men-stretching-before-game_23-2150405359.jpg",
        },
        {
          title: "Prenotazioni",
          description: "Facile e veloce tramite WhatsApp.",
          imageSrc: "http://img.b2bpic.net/free-photo/football-field_23-2147813171.jpg",
        },
        {
          title: "Spogliatoi",
          description: "Servizi moderni inclusi per i giocatori.",
          imageSrc: "http://img.b2bpic.net/free-photo/rosaleda-stadium-malaga-spain_181624-49791.jpg",
        },
      ]}
      title="Attività Sportive"
      description="Disponiamo di campi moderni perfetti per sfide calcistiche. Prenota oggi il tuo spazio e gioca con chi ami."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Campo Sportivo",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-enjoying-together-while-drinking-cup-coffee-coffee-shop_58466-16179.jpg",
        },
        {
          id: "2",
          name: "Area Ristorazione",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-grass-field-hockey_23-2149668570.jpg",
        },
        {
          id: "3",
          name: "Partite di Calcio",
          imageSrc: "http://img.b2bpic.net/free-photo/ordinary-life-scene-from-mall-america_23-2151564133.jpg?_wi=1",
        },
        {
          id: "4",
          name: "Cene tra amici",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-modern-cafe-with-sofas-chairs-tables_169016-34786.jpg",
        },
        {
          id: "5",
          name: "Relax Post Partita",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-with-vegetables-plate-cafe_169016-39450.jpg",
        },
      ]}
      cardTitle="I nostri momenti"
      cardTag="Gallery"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Dove si trova il club?",
          content: "Siamo ad Agropoli, in una zona facile da raggiungere.",
        },
        {
          id: "q2",
          title: "Posso prenotare il campo online?",
          content: "Puoi prenotare facilmente contattandoci su WhatsApp.",
        },
        {
          id: "q3",
          title: "Il ristorante è aperto anche per pranzo?",
          content: "Sì, siamo aperti tutti i giorni per pranzo e cena.",
        },
      ]}
      title="FAQ"
      description="Domande frequenti"
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/ordinary-life-scene-from-mall-america_23-2151564133.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Vieni a trovarci ad Agropoli. Contattaci su WhatsApp per info e prenotazioni campi o tavoli."
      buttons={[
        {
          text: "Contattaci su WhatsApp",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "New Roller Agropoli",
          items: [
            {
              label: "Agropoli, SA",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 New Roller Agropoli"
      bottomRightText="P.IVA 0123456789"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
