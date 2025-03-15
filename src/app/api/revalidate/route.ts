import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

interface RevalidateResponse {
  revalidated: boolean;
  message: string;
  error?: string;
}

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const path: string | null = searchParams.get("path");
  const token: string | null = searchParams.get("token");

  // Verify the secret token
  if (token !== process.env.SECRET_KEY) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    let response: RevalidateResponse;
    if (path) {
      // Revalidate the specific path
      revalidatePath(path);
      response = {
        revalidated: true,
        message: `Path ${path} revalidated`,
      };
    } else {
      // If no path specified, revalidate the entire site
      revalidatePath("/");
      response = {
        revalidated: true,
        message: "Site revalidated",
      };
    }
    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
