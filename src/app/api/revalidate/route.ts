// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  // Get the URL parameters
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get("path") || "";
  const token = searchParams.get("token") || "";

  // Check the token and path
  if (token !== process.env.SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  } else if (path.length === 0) {
    return NextResponse.json({ message: "Path is required" }, { status: 401 });
  }

  try {
    // Use revalidatePath instead of res.revalidate
    revalidatePath(path);

    return NextResponse.json({
      revalidated: true,
      message: `Path ${path} revalidated successfully`,
      now: Date.now(),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error revalidating page" },
      { status: 500 }
    );
  }
}
