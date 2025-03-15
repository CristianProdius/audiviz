import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");
  const token = searchParams.get("token");

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, token } = body;

    if (token !== process.env.SECRET_TOKEN) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    } else if (!path || path.length === 0) {
      return NextResponse.json(
        { message: "Path is required" },
        { status: 401 }
      );
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
  } catch (error) {
    console.error("Error revalidating path:", error);
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }
}
