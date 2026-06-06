import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative z-[1] bg-gradient-to-b from-black via-orbita-dark to-black px-6 py-[100px] md:px-[60px]"
    >
      <Reveal className="mx-auto mb-[60px] max-w-[1100px]">
        <SectionHeader
          label="Depoimentos"
          title={
            <>
              O Que Nossos <span className="text-orbita-blue-bright">Clientes</span>{" "}
              Dizem
            </>
          }
          description="A satisfação de quem confia na OrbitaTech fala mais do que qualquer promessa."
        />
      </Reveal>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.1 + 0.1}>
            <article className="rounded-[14px] border border-orbita-dark-border bg-orbita-dark-card/70 p-[36px_30px] transition-colors duration-300 hover:border-orbita-blue-bright/30">
              <div className="font-serif text-[3rem] leading-none text-orbita-blue-deep">
                &ldquo;
              </div>
              <p className="mb-7 text-[0.95rem] leading-[1.75] text-orbita-text-muted italic">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orbita-blue-deep to-orbita-blue-bright font-heading text-[1.1rem] font-bold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-heading text-base font-bold text-white">
                    {testimonial.name}
                  </div>
                  <div className="mt-0.5 text-[0.78rem] text-orbita-text-muted">
                    {testimonial.company}
                  </div>
                  <div className="mt-1 text-[0.9rem] tracking-[2px] text-[#f4a700]">
                    ★★★★★
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
