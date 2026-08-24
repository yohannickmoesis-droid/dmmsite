import Hero from "@/components/Hero";
import TransitionTimeline from "@/components/TransitionTimeline";
import TenDefis from "@/components/TenDefis";
import MonParcours from "@/components/MonParcours";
import CommentJePeuxAider from "@/components/CommentJePeuxAider";
import FaqCta from "@/components/FaqCta";
import BookingCta from "@/components/BookingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TransitionTimeline />
      <TenDefis />
      <MonParcours />
      <CommentJePeuxAider />
      <FaqCta />
      <BookingCta />
    </>
  );
}
