import Link from "next/link";
import {
  footerCompany,
  footerContact,
  footerServices,
  socialLinks,
} from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-orbita-blue-bright/8 bg-black px-6 pt-[60px] pb-9 md:px-[60px]">
      <div className="mx-auto mb-12 grid max-w-[1100px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="font-heading mb-4 text-[1.5rem] font-bold tracking-[2px] text-white">
            orbita<span className="text-orbita-blue-bright">Tech</span>
          </div>
          <p className="max-w-[280px] text-[0.88rem] leading-[1.7] text-orbita-text-muted">
            Tecnologia de alta performance para empresas que desejam liderar o
            futuro digital com inovação, segurança e excelência.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social}
                href="#"
                className="flex size-[38px] items-center justify-center rounded-lg border border-orbita-blue-bright/20 bg-orbita-blue-bright/10 text-base text-orbita-blue-bright no-underline transition-colors hover:bg-orbita-blue-bright/25"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading mb-5 text-[0.9rem] font-bold tracking-[2px] text-white uppercase">
            Serviços
          </h4>
          <ul className="flex list-none flex-col gap-2.5">
            {footerServices.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-[0.88rem] text-orbita-text-muted no-underline transition-colors hover:text-orbita-blue-bright"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading mb-5 text-[0.9rem] font-bold tracking-[2px] text-white uppercase">
            Empresa
          </h4>
          <ul className="flex list-none flex-col gap-2.5">
            {footerCompany.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-[0.88rem] text-orbita-text-muted no-underline transition-colors hover:text-orbita-blue-bright"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading mb-5 text-[0.9rem] font-bold tracking-[2px] text-white uppercase">
            Contato
          </h4>
          <ul className="flex list-none flex-col gap-2.5">
            {footerContact.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-[0.88rem] text-orbita-text-muted no-underline transition-colors hover:text-orbita-blue-bright"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 border-t border-orbita-blue-bright/7 pt-7 sm:flex-row">
        <p className="text-[0.8rem] text-orbita-text-muted">
          © 2026 <span className="text-orbita-blue-bright">OrbitaTech</span>. Todos
          os direitos reservados.
        </p>
        <div className="flex gap-6">
          {["Política de Privacidade", "Termos de Uso", "LGPD"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[0.8rem] text-orbita-text-muted no-underline transition-colors hover:text-orbita-blue-bright"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
