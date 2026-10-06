import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { createSupabaseServerClient } from "@/lib/supabase/server";

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

    const supabase = createSupabaseServerClient();

    const { error } = await supabase
      .from("contact_messages")
      .insert(result.data);

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        {
          error: "Failed to save message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Message received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}