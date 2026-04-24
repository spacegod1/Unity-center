import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { sendEmail } from "@/lib/mailer";

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info@unitycentresl.org.uk";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, space, date, attendance, details, ngoRate } = body;

    if (!fullName || !email) {
      return Response.json({ error: "Name and email are required." }, { status: 400 });
    }

    const emailHtml = `
      <h2>New Booking Enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        <tr><td style="padding:8px;font-weight:600;color:#475569">Name</td><td style="padding:8px">${fullName}</td></tr>
        <tr><td style="padding:8px;font-weight:600;color:#475569">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:600;color:#475569">Phone</td><td style="padding:8px">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:600;color:#475569">Space</td><td style="padding:8px">${space || "Not selected"}</td></tr>
        <tr><td style="padding:8px;font-weight:600;color:#475569">Date</td><td style="padding:8px">${date || "Not specified"}</td></tr>
        <tr><td style="padding:8px;font-weight:600;color:#475569">Attendance</td><td style="padding:8px">${attendance || "Not specified"}</td></tr>
        <tr><td style="padding:8px;font-weight:600;color:#475569">NGO Rate</td><td style="padding:8px">${ngoRate ? "Yes" : "No"}</td></tr>
      </table>
      ${details ? `<h3 style="margin-top:16px">Event Details</h3><p>${details}</p>` : ""}
    `;

    const subject = `New Booking Enquiry from ${fullName}`;

    // Save to Firestore for record-keeping
    await addDoc(collection(db, "mail"), {
      to: NOTIFICATION_EMAIL,
      subject,
      html: emailHtml,
      createdAt: new Date().toISOString(),
    });

    // Send email via Nodemailer
    await sendEmail({ to: NOTIFICATION_EMAIL, subject, html: emailHtml });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
