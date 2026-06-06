import { AboutVisual } from "@/components/about-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { values } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative z-[1] bg-gradient-to-b from-black to-orbita-dark px-6 py-[100px] md:px-[60px]"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
        <Reveal>
          <SectionHeader
            label="Quem Somos"
            title={
              <>
                Movidos pela <span className="text-orbita-blue-bright">paixão</span>{" "}
                por tecnologia
              </>
            }
          />
          <p className="max-w-[560px] text-base leading-[1.75] text-orbita-text-muted">
            A OrbitaTech nasceu da visão de que tecnologia bem aplicada transforma
            negócios. Com uma equipe multidisciplinar de alta performance, entregamos
            projetos que combinam inovação, robustez e design pensado para o futuro.
          </p>
          <p className="mt-4 max-w-[560px] text-base leading-[1.75] text-orbita-text-muted">
            Atendemos empresas de todos os portes — de startups em aceleração a
            grandes corporações que buscam modernização digital com segurança e
            agilidade.
          </p>

          <div className="mt-9 flex flex-col gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-3.5 rounded-lg border border-orbita-dark-border bg-orbita-dark-card/60 p-4 transition-colors hover:border-orbita-blue-bright/40 md:p-5"
              >
                <span className="mt-0.5 shrink-0 text-[1.3rem]">{value.icon}</span>
                <div>
                  <strong className="mb-1 block font-semibold text-white">
                    {value.title}
                  </strong>
                  <span className="text-[0.88rem] text-orbita-text-muted">
                    {value.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <AboutVisual />
        </Reveal>
      </div>
    </section>
  );
}
