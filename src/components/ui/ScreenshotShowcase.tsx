import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { cn } from "@/lib/utils";

type ScreenshotShowcaseProps = {
  screenshots: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
  reverse?: boolean;
  points: string[];
};

export function ScreenshotShowcase({
  screenshots,
  reverse = false,
  points,
}: ScreenshotShowcaseProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]",
        reverse && "lg:grid-cols-[0.75fr_1.25fr]",
      )}
    >
      <div className={cn("grid gap-5", reverse && "lg:order-2")}>
        {screenshots.map((screenshot, index) => (
          <BrowserMockup
            key={screenshot.src}
            {...screenshot}
            className={cn(index === 1 && "lg:ml-16")}
            imageClassName={screenshots.length > 1 ? "object-cover" : undefined}
          />
        ))}
      </div>
      <div className={cn("rounded-[28px] border border-[#1F6778]/14 bg-white/76 p-6 shadow-xl shadow-[#1F6778]/8 backdrop-blur-md", reverse && "lg:order-1")}>
        <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#F2B705] to-[#57D4DD]" />
        <ul className="grid gap-4">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-7 text-[#393D3F]/72">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1F6778]" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
