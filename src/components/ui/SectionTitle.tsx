
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({
  subtitle,
  title,
  alignment = "center",
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        className
      )}
    >
      <div className="opacity-0 animate-fade-in">
        <span className="inline-block text-bonsai-olive uppercase tracking-wider text-sm font-semibold mb-2">
          {subtitle}
        </span>
      </div>
      <h2 className="opacity-0 animate-fade-in-delay-1 text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-bonsai-dark-green">
        {title}
      </h2>
      <div className="opacity-0 animate-fade-in-delay-2 w-20 h-1 bg-bonsai-wheat mt-4 mb-4 rounded-full mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
