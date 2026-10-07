import LegalDocumentLayout from "../components/LegalDocumentLayout";

export default function TermsAndConditions() {
  const sections = [
    {
      id: "acceptance",
      heading: "1. Acceptance",
      content: (
        <p>
          By accessing or using the Attendance application, you agree to these Terms and Conditions. If you do not agree, please do not use the application.
        </p>
      ),
    },
    {
      id: "purpose",
      heading: "2. Purpose",
      content: (
        <p>
          The application is intended to help organizations manage employee attendance, working hours, attendance history, tasks, late arrivals, early departures, and related records.
        </p>
      ),
    },
    {
      id: "user-accounts",
      heading: "3. User Accounts",
      content: (
        <p>
          Users must provide accurate information and keep their login credentials confidential. Users are responsible for all activity performed through their accounts.
        </p>
      ),
    },
    {
      id: "attendance-records",
      heading: "4. Attendance Records",
      content: (
        <>
          <p>
            Attendance data may include check-in time, check-out time, working hours, attendance status, late-arrival reasons, early-departure reasons, task details, and location-related approval information where enabled.
          </p>
          <p className="mt-2">Records may be subject to verification or correction by authorized organization administrators.</p>
        </>
      ),
    },
    {
      id: "acceptable-use",
      heading: "5. Acceptable Use",
      content: (
        <>
          <p>Users must not:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Access another user's account</li>
            <li>Submit false or misleading attendance information</li>
            <li>Attempt to bypass security controls</li>
            <li>Reverse engineer or interfere with the application</li>
            <li>Use the application for unlawful purposes</li>
          </ul>
        </>
      ),
    },
    {
      id: "organization-administration",
      heading: "6. Organization Administration",
      content: (
        <p>
          The organization may create, modify, review, approve, or correct attendance records according to its internal policies.
        </p>
      ),
    },
    {
      id: "availability",
      heading: "7. Availability",
      content: (
        <p>
          We do not guarantee that the application will always be available or error-free. Temporary interruptions may occur because of maintenance, network failures, server problems, or third-party service outages.
        </p>
      ),
    },
    {
      id: "third-party-services",
      heading: "8. Third-Party Services",
      content: (
        <p>
          The application may rely on hosting, authentication, database, analytics, or other third-party services. Their availability and practices may be governed by their own terms.
        </p>
      ),
    },
    {
      id: "intellectual-property",
      heading: "9. Intellectual Property",
      content: (
        <p>
          The application, design, source code, branding, and related content belong to the project owner or its licensors and may not be copied or reused without permission.
        </p>
      ),
    },
    {
      id: "limitation-of-liability",
      heading: "10. Limitation of Liability",
      content: (
        <p>
          To the extent permitted by law, the project owner is not responsible for losses caused by inaccurate user submissions, unauthorized account access, service interruptions, or reliance on attendance records without organizational verification.
        </p>
      ),
    },
    {
      id: "termination",
      heading: "11. Termination",
      content: (
        <p>
          Access may be suspended or terminated if a user violates these Terms, organizational policies, or applicable law.
        </p>
      ),
    },
    {
      id: "changes-to-terms",
      heading: "12. Changes",
      content: (
        <p>
          These Terms may be updated from time to time. Continued use of the application after changes indicates acceptance of the updated Terms.
        </p>
      ),
    },
    {
      id: "contact",
      heading: "13. Contact",
      content: (
        <div className="flex flex-col gap-1 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper-alt)] p-4">
          <p className="font-semibold text-[var(--color-ink)]">Organization</p>
          <p>IRCS Cancer Hospital</p>
          <p>Email: info@ircscancerhospital.org</p>
          <p>Address: podalakur Road, Nellore, Andhra Pradesh - 5240024</p>
        </div>
      ),
    },
  ];

  return (
    <LegalDocumentLayout
      title="Terms & Conditions"
      lastUpdated="2026-09-03"
      sections={sections}
      legalNotice="These Terms & Conditions are provided as a general draft and should be reviewed by a qualified legal professional before publication. Replace all placeholders and adjust sections according to your actual implementation, features, and applicable local laws."
    />
  );
}
