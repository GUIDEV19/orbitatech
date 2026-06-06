import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  centered?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <p className="font-heading text-[0.78rem] font-bold tracking-[3px] text-orbita-blue-bright uppercase">
        {label}
      </p>
      <h2 className="font-heading mt-3 text-[clamp(2rem,4vw,3.2rem)] leading-tight font-bold text-white">
        {title}
      </h2>
      <div
        className={cn(
          "my-[18px] h-0.5 w-12 bg-gradient-to-r from-orbita-blue-bright to-transparent",
          centered && "mx-auto",
        )}
      />
      {description && (
        <p
          className={cn(
            "max-w-[560px] text-base leading-[1.75] text-orbita-text-muted",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
