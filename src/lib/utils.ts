import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const screenshotPaths = {
  landing: "/assets/screenshots/landing-page.png",
  news: "/assets/screenshots/user-news.png",
  detailNews: "/assets/screenshots/user-detail-news.png",
  eventPreview: "/assets/screenshots/admin-preview-event.png",
  adminDetail: "/assets/screenshots/admin-detail-event.png",
};
