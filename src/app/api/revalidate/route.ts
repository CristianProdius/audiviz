// app/api/revalidate/route.js (or .ts)
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

interface RevalidateRequest extends NextRequest {
  url: string;
}

interface RevalidateResponse {
  revalidated?: boolean;
  message: string;
}

export async function GET(
  request: RevalidateRequest
): Promise<NextResponse<RevalidateResponse>> {
  const { searchParams } = new URL(request.url);
  const path: string | null = searchParams.get("path");
  const token: string | null = searchParams.get("token");

  if (token !== process.env.SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  } else if (!path || path.length === 0) {
    return NextResponse.json({ message: "Path is required" }, { status: 401 });
  }

  try {
    revalidatePath(path);

    return NextResponse.json({
      revalidated: true,
      message: `Path ${path} revalidated successfully`,
    });
  } catch (err) {
    console.error("Error revalidating path:", err);
    return NextResponse.json(
      { message: "Error revalidating page" },
      { status: 500 }
    );
  }
}
