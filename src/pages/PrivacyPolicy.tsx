import LegalDocumentLayout from "../components/LegalDocumentLayout";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      heading: "1. Introduction",
      content: (
        <p>
          This Privacy Policy explains how the Attendance application collects, uses, stores, and protects personal information.
        </p>
      ),
    },
    {
      id: "information-we-collect",
      heading: "2. Information We Collect",
      content: (
        <>
          <p>
            Depending on enabled features, we may collect:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Name, employee ID, email address, and department</li>
            <li>Login and authentication information</li>
            <li>Check-in and check-out times</li>
            <li>Attendance dates and working hours</li>
            <li>Late-arrival and early-departure reasons</li>
            <li>Task descriptions submitted by users</li>
            <li>Location data, if location-based attendance is enabled</li>
            <li>Device, log, and technical information required for security and troubleshooting</li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use",
      heading: "3. How We Use Information",
      content: (
        <>
          <p>Information may be used to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Record and manage employee attendance</li>
            <li>Calculate working hours and attendance summaries</li>
            <li>Review late arrivals and early departures</li>
            <li>Support attendance approvals and corrections</li>
            <li>Authenticate users and protect accounts</li>
            <li>Maintain, troubleshoot, and improve the application</li>
            <li>Comply with legal or organizational obligations</li>
          </ul>
        </>
      ),
    },
    {
      id: "information-sharing",
      heading: "4. Sharing of Information",
      content: (
        <>
          <p>Personal information may be shared with:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Authorized organization administrators</li>
            <li>Supervisors or HR personnel</li>
            <li>Service providers hosting or supporting the application</li>
            <li>Government authorities or regulators where legally required</li>
          </ul>
          <p className="mt-2">We do not sell personal information.</p>
        </>
      ),
    },
    {
      id: "location-information",
      heading: "5. Location Information",
      content: (
        <p>
          If location tracking is enabled, location data is collected only for attendance verification or related organizational purposes. Users will be informed about when location is collected and whether collection occurs only during check-in/check-out or continuously.
        </p>
      ),
    },
    {
      id: "data-retention",
      heading: "6. Data Retention",
      content: (
        <p>
          Attendance and account information is retained for as long as necessary for organizational, operational, accounting, employment, or legal purposes. Data may be deleted or anonymized when it is no longer required.
        </p>
      ),
    },
    {
      id: "data-security",
      heading: "7. Data Security",
      content: (
        <p>
          Reasonable technical and organizational safeguards are used to protect personal information. However, no online system can guarantee complete security.
        </p>
      ),
    },
    {
      id: "user-rights",
      heading: "8. User Rights",
      content: (
        <>
          <p>
            Subject to applicable law and organizational policies, users may request to:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Access their personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion where legally permitted</li>
            <li>Ask how their information is being used</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="mt-2">Requests should be submitted to the organization or HR department.</p>
        </>
      ),
    },
    {
      id: "cookies",
      heading: "9. Cookies and Similar Technologies",
      content: (
        <p>
          The application may use cookies, tokens, local storage, or similar technologies to maintain sessions, authenticate users, and improve security.
        </p>
      ),
    },
    {
      id: "childrens-privacy",
      heading: "10. Children's Privacy",
      content: (
        <p>
          This application is intended for employees and is not directed toward children.
        </p>
      ),
    },
    {
      id: "changes",
      heading: "11. Policy Changes",
      content: (
        <p>
          This Privacy Policy may be updated periodically. The latest version will be made available within the application or on the organization's website.
        </p>
      ),
    },
    {
      id: "contact",
      heading: "12. Contact",
      content: (
       <div className="flex flex-col gap-1 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper-alt)] p-4">
  <p className="font-semibold text-[var(--color-ink)]">
    Organization
  </p>

  <p>IRCS Cancer Hospital</p>

  <p>
    Email: info@ircscancerhospital.org
  </p>

  <p>
    Phone: 0861 2341714
  </p>

  <p>
    Address: Podalakur Road, Nellore, Andhra Pradesh 524004, India
  </p>
</div>
      ),
    },
  ];

  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      lastUpdated="2026-09-03"
      sections={sections}
      legalNotice="This Privacy Policy is provided as a general draft and should be reviewed by a qualified legal professional before publication. Replace all placeholders and adjust sections according to your actual APIs, permissions, location tracking, storage provider, retention rules, and applicable local laws."
    />
  );
}
