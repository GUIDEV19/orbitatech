import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { SkillBar } from "@/components/skill-bar";
import { competencies } from "@/lib/data";

export function CompetenciesSection() {
  return (
    <section
      id="competencias"
      className="relative z-[1] bg-orbita-dark px-6 py-[100px] md:px-[60px]"
    >
      <Reveal className="mx-auto mb-[60px] max-w-[1100px]">
        <SectionHeader
          label="O Que Fazemos"
          title={
            <>
              Nossas Principais{" "}
              <span className="text-orbita-blue-bright">Competências</span>
            </>
          }
          description="Soluções completas do planejamento à entrega, com domínio técnico em cada etapa do ciclo de desenvolvimento."
        />
      </Reveal>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {competencies.map((comp, index) => (
          <Reveal key={comp.title} delay={(index % 3) * 0.1 + 0.1}>
            <article className="comp-card group relative cursor-default overflow-hidden rounded-xl border border-orbita-dark-border bg-orbita-dark-card/80 p-[36px_30px] transition-all duration-250 hover:-translate-y-1.5 hover:border-orbita-blue-bright/35 hover:shadow-[0_20px_60px_rgba(0,0,0,.4),0_0_30px_rgba(26,127,232,.08)]">
              <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-orbita-blue-bright to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-5 flex size-[52px] items-center justify-center rounded-xl border border-orbita-blue-bright/30 bg-gradient-to-br from-orbita-blue-bright/20 to-orbita-blue-bright/5 text-[1.4rem]">
                {comp.icon}
              </div>
              <h3 className="font-heading mb-2.5 text-[1.15rem] font-bold tracking-wide text-white">
                {comp.title}
              </h3>
              <p className="text-[0.88rem] leading-[1.65] text-orbita-text-muted">
                {comp.description}
              </p>
              <div className="mt-5">
                {comp.skills.map((skill, skillIndex) => (
                  <div key={skill.label} className={skillIndex > 0 ? "mt-3" : ""}>
                    <SkillBar label={skill.label} percentage={skill.percentage} />
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
