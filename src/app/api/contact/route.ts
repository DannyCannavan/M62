import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid form data.",
          issues: result.error.issues,
        },
        { status: 400 }
      );
    }

    console.log("Contact form submission:", result.data);

    return NextResponse.json(
      {
        message: "Message received successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}