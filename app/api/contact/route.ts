import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { sendEmail } from "@/lib/mailer";

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info@unitycentresl.org.uk";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message } = body;

    if (!fullName || !email || !message) {
      return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const subjectLabel = subject === "volunteer" ? "Volunteering"
      : subject === "support" ? "Support Request"
      : subject === "partnership" ? "Partnership"
      : "General Inquiry";

    const emailSubject = `New Contact Message from ${fullName} — ${subjectLabel}`;
    const emailHtml = `
      <h2>New Contact Form Message</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        <tr><td style="padding:8px;font-weight:600;color:#475569">Name</td><td style="padding:8px">${fullName}</td></tr>
        <tr><td style="padding:8px;font-weight:600;color:#475569">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:600;color:#475569">Subject</td><td style="padding:8px">${subjectLabel}</td></tr>
      </table>
      <h3 style="margin-top:16px">Message</h3>
      <p>${message}</p>
    `;

    // Save to Firestore for record-keeping
    await addDoc(collection(db, "mail"), {
      to: NOTIFICATION_EMAIL,
      subject: emailSubject,
      html: emailHtml,
      createdAt: new Date().toISOString(),
    });

    // Send email via Nodemailer
    await sendEmail({ to: NOTIFICATION_EMAIL, subject: emailSubject, html: emailHtml });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
