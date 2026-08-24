import Hero from "@/components/Hero";
import LaRealite from "@/components/LaRealite";
import TransitionTimeline from "@/components/TransitionTimeline";
import TenDefis from "@/components/TenDefis";
import MonParcours from "@/components/MonParcours";
import CommentJePeuxAider from "@/components/CommentJePeuxAider";
import BookingCta from "@/components/BookingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <LaRealite />
      <TransitionTimeline />
      <TenDefis />
      <MonParcours />
      <CommentJePeuxAider />
      <BookingCta />
    </>
  );
}
