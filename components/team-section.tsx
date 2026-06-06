import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { teamMembers } from "@/lib/data";

export function TeamSection() {
  return (
    <section
      id="profissionais"
      className="relative z-[1] bg-black px-6 py-[100px] md:px-[60px]"
    >
      <Reveal className="mx-auto mb-[60px] max-w-[1100px]">
        <SectionHeader
          label="Nosso Time"
          title={
            <>
              Os <span className="text-orbita-blue-bright">Profissionais</span> por
              Trás da Órbita
            </>
          }
          description="Uma equipe de especialistas apaixonados por tecnologia, entrega e resultado."
        />
      </Reveal>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <Reveal key={member.name} delay={(index % 4) * 0.1 + 0.1}>
            <article className="overflow-hidden rounded-[14px] border border-orbita-dark-border bg-orbita-dark-card/70 transition-all duration-250 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,.5),0_0_40px_rgba(26,127,232,.07)]">
              <div className="relative flex h-[180px] items-center justify-center bg-gradient-to-br from-[#060f1e] to-orbita-dark-border text-[4.5rem]">
                {member.avatar}
                <span className="absolute bottom-3 left-1/2 z-[1] -translate-x-1/2 rounded-full border border-orbita-blue-bright/40 bg-orbita-blue-bright/20 px-3 py-0.5 text-[0.65rem] font-bold tracking-[1.5px] whitespace-nowrap text-orbita-blue-glow uppercase">
                  {member.badge}
                </span>
                <div className="absolute right-0 bottom-0 left-0 h-10 bg-gradient-to-t from-orbita-dark-card/70 to-transparent" />
              </div>
              <div className="px-5 pt-[22px] pb-6">
                <h3 className="font-heading text-[1.1rem] font-bold text-white">
                  {member.name}
                </h3>
                <p className="mb-3.5 text-[0.8rem] text-orbita-text-muted">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-orbita-blue-bright/20 bg-orbita-blue-bright/8 px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide text-orbita-silver"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
