// app/api/hero/route.js
import { NextResponse } from "next/server";
import { getHeroContent } from "@/lib/api";

export async function GET() {
  try {
    const pageData = await getHeroContent();

    // Transform the data to match the component's expectations
    const heroData = {
      heroHeading: pageData?.acfHeroFields?.heroHeading || "",
      heroSubheading: pageData?.acfHeroFields?.heroSubheading || "",
      heroButtonText: pageData?.acfHeroFields?.heroButtonText || "",
      heroButtonLink: pageData?.acfHeroFields?.heroButtonLink || "",
      heroSmileIcon: pageData?.acfHeroFields?.heroSmileIcon?.node || null,
      herobasketballicon:
        pageData?.acfHeroFields?.herobasketballicon?.node || null,
      imagineaCuCopil: pageData?.acfHeroFields?.imagineaCuCopil?.node || null,
    };

    return NextResponse.json(heroData);
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return NextResponse.json(
      { error: "Failed to fetch hero data" },
      { status: 500 }
    );
  }
}
