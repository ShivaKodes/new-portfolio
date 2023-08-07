"use client"

import ContactLinks from "./ContactLinks";
import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function GetInTouch() {
  return (
    <section className="w-full col-span-full max-w-5xl mx-auto px-5" id="getintouch">
      <SectionHeader title={"Get In Touch"} flexDir="flex-row-reverse"/>
      <Reveal width="100%">

      <ContactLinks />
      </Reveal>
    </section>
  );
}
