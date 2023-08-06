import ContactLinks from "./ContactLinks";
import SectionHeader from "./SectionHeader";

export default function GetInTouch() {
  return (
    <section className="w-full col-span-full max-w-5xl mx-auto" id="getintouch">
      <SectionHeader title={"Get In Touch"} />
      <ContactLinks />
    </section>
  );
}
