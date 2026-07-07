import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TransitionTimeline from "@/components/TransitionTimeline";
import PourquoiIdentite from "@/components/PourquoiIdentite";
import TenDefis from "@/components/TenDefis";
import MonParcours from "@/components/MonParcours";
import CommentJePeuxAider from "@/components/CommentJePeuxAider";
import FaqCta from "@/components/FaqCta";
import BookingCta from "@/components/BookingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TransitionTimeline />
        <PourquoiIdentite />
        <TenDefis />
        <MonParcours />
        <CommentJePeuxAider />
        <FaqCta />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}