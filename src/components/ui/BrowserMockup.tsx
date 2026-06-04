import Image from "next/image";
import { cn } from "@/lib/utils";

type BrowserMockupProps = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrowserMockup({
  src,
  alt,
  title,
  description,
  className,
  imageClassName,
  priority = false,
}: BrowserMockupProps) {
  return (
    <figure
      className={cn(
        "group overflow-hidden rounded-[28px] border border-white/16 bg-[#393D3F] shadow-2xl shadow-[#1F6778]/18",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-white/8 px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff6868]" />
          <span className="h-3 w-3 rounded-full bg-[#F2B705]" />
          <span className="h-3 w-3 rounded-full bg-[#57D4DD]" />
        </div>
        <div className="mx-4 h-7 flex-1 rounded-full border border-white/10 bg-white/8 px-4 text-center text-[11px] font-medium leading-7 text-white/46">
          bemfilkom.ub.ac.id
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#FDFDFF]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 92vw, 760px"
          className={cn("object-cover object-top transition duration-700 group-hover:scale-[1.025]", imageClassName)}
          priority={priority}
        />
      </div>
      {(title || description) ? (
        <figcaption className="border-t border-white/10 bg-[#393D3F] p-5">
          {title ? <h3 className="font-heading text-xl font-medium text-[#FDFDFF]">{title}</h3> : null}
          {description ? <p className="mt-2 text-sm leading-6 text-white/64">{description}</p> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
