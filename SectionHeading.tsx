import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeIn className={`mb-16 md:mb-20 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description && (
        <>
          <div className={`divider-gold mt-6 ${align === "left" ? "mx-0" : ""}`} />
          <p className={`body-lg mt-6 ${align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
            {description}
          </p>
        </>
      )}
    </FadeIn>
  );
}
