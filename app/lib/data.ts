import { readFile } from "node:fs/promises";
import path from "node:path";
import type {
  CornersData,
  FaqData,
  GalleryData,
  HeroData,
  LandingData,
  MenuData,
  SiteData,
  SocialData,
  TestimonialsData,
} from "../types";

async function readJson<T>(name: string): Promise<T> {
  const filePath = path.join(process.cwd(), "public", "data", `${name}.json`);
  const content = await readFile(filePath, "utf-8");
  return JSON.parse(content) as T;
}

export async function getLandingData(): Promise<LandingData> {
  const [site, hero, gallery, corners, menu, social, testimonials, faq] =
    await Promise.all([
    readJson<SiteData>("site"),
    readJson<HeroData>("hero"),
    readJson<GalleryData>("gallery"),
    readJson<CornersData>("corners"),
    readJson<MenuData>("menu"),
    readJson<SocialData>("social"),
      readJson<TestimonialsData>("testimonials"),
      readJson<FaqData>("faq"),
    ]);

  return {
    site,
    hero,
    gallery,
    corners,
    menu,
    social,
    testimonials,
    faq,
  };
}
