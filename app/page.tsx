import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Corners from "./components/Corners";
import Faq from "./components/Faq";
import FloatingCallButton from "./components/FloatingCallButton";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import { getLandingData } from "./lib/data";

export default async function Home() {
  const data = await getLandingData();

  return (
    <div className="overflow-x-hidden bg-[radial-gradient(circle_at_top,#eff7ee_0%,#e2f2ea_35%,#f7f6f0_100%)] text-[#1f3d34]">
      <Navbar siteName={data.site.name} />

      <Hero
        name={data.site.name}
        slogan={data.site.slogan}
        images={data.hero.images}
      />

      <main>
        <AboutSection
          label={data.site.aboutLabel}
          title={data.site.title}
          intro={data.site.intro}
          calmLine={data.site.calmLine}
          features={data.site.features}
          establishedYear={data.site.establishedYear}
          hours={data.site.hours}
          services={data.site.services}
          notes={data.site.notes}
        />
        <Corners corners={data.corners.corners} />
        <MenuSection
          title={data.menu.title}
          subtitle={data.menu.subtitle}
          featured={data.menu.featured}
          seasonal={data.menu.seasonal}
          categories={data.menu.categories}
        />
        <Gallery
          title={data.gallery.title}
          description={data.gallery.description}
          images={data.gallery.images}
        />
        {/* <Testimonials testimonials={data.testimonials.testimonials} /> */}
        <Faq faqs={data.faq.faqs} />
        <Contact
          address={data.site.address}
          phone={data.site.phone}
          email={data.site.email}
          hours={data.site.hours}
          mapEmbedUrl={data.site.mapEmbedUrl}
          social={data.social}
        />
      </main>

      <Footer
        siteName={data.site.name}
        slogan={data.site.slogan}
        address={data.site.address}
        phone={data.site.phone}
        email={data.site.email}
        mapEmbedUrl={data.site.mapEmbedUrl}
        social={data.social}
      />
      <FloatingCallButton phone={data.site.phone} />
    </div>
  );
}
