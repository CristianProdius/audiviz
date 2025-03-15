// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  // Verify the secure token
  if (token !== process.env.SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // Revalidate the entire website with the root path
    revalidatePath("/");

    return NextResponse.json({
      revalidated: true,
      message: "Entire site revalidated successfully",
    });
  } catch (err) {
    console.error("Error revalidating site:", err);
    return NextResponse.json(
      { message: "Error revalidating site" },
      { status: 500 }
    );
  }
}
