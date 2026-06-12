import PageHero from "@/components/ui/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import StatsSection from "@/components/home/StatsSection";
import FaqSection from "@/components/home/FaqSection";

export const metadata = {
  title: "Contact Us | Arms of Grace",
  description: "Get in touch with the Arms of Grace team. We are here to answer your questions about foster care, adoption, and volunteering.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question, an inquiry, or simply want to learn more — our team is here."
        breadcrumb={[{ label: "Contact Us" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl text-dark mb-2">Get in Touch</h2>
              <p className="text-muted text-sm leading-relaxed mb-8">Our team typically responds within 24 hours on business days. For urgent matters, please call us directly.</p>
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <div className="bg-lavender rounded-2xl p-8 border border-soft">
                <h2 className="font-heading font-bold text-2xl text-dark mb-2">Send Us a Message</h2>
                <p className="text-muted text-sm mb-8">Fill in the form below and a member of our team will be in touch soon.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <StatsSection />
      <FaqSection />
    </>
  );
}
