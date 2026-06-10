import SectionTitle from "@/components/ui/SectionTitle";
import ImgPlaceholder from "@/components/ui/ImgPlaceholder";
import { teamMembers } from "@/data/team-members";

export default function TeamGrid() {
  return (
    <section id="team" className="py-24 bg-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Team"
          title="The People Behind the Mission"
          subtitle="Experienced, passionate, and driven by a single purpose — ensuring every child finds where they belong."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-soft hover:shadow-md transition-shadow">
              <ImgPlaceholder aspect="1/1" color={member.color} label={`Photo of ${member.name}`} src={member.image} rounded="" />
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-dark">{member.name}</h3>
                <p className={`text-sm font-semibold mb-3 ${member.color === "purple" ? "text-purple" : member.color === "pink" ? "text-pink" : "text-blue"}`}>
                  {member.role}
                </p>
                <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
