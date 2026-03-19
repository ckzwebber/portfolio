import { ReactNode } from "react";

type SectionHeadingProps = {
  number: string;
  title: ReactNode;
  subtitle: string;
  align?: "left" | "center";
};

export default function SectionHeading({ number, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`editorial-heading reveal ${align === "center" ? "text-center" : ""}`} data-reveal="slice">
      <span className="section-number" aria-hidden="true">
        {number}
      </span>
      <h2 className="section-title text-balance" data-testid={`section-title-${number}`}>
        {title}
      </h2>
      <p className={`section-subtitle ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>
      <div className="section-rule" />
    </div>
  );
}
