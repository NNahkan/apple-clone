import { useGSAP } from "@gsap/react";
import React from "react";
import { animateWithGsap } from "../utils/animation";

const Features = () => {
  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
  });

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-header">
            Explore the full story.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Features;
