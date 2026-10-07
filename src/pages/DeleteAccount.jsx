import React from "react";

const DeleteAccount = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundColor: "#f5f7fa",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          fontFamily: "Arial, sans-serif",
          color: "#333333",
          lineHeight: "1.7",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            marginBottom: "25px",
            fontSize: "32px",
            color: "#222222",
          }}
        >
          Account Deletion Request
        </h1>

        <p>
          If you are an <strong>IRCS Attendance</strong> user and want to
          delete your account and associated personal data, please contact
          your company's HR/Admin team.
        </p>

        <h2
          style={{
            marginTop: "30px",
            marginBottom: "12px",
            fontSize: "22px",
            color: "#222222",
          }}
        >
          How to request account deletion
        </h2>

        <ol style={{ paddingLeft: "25px" }}>
          <li>Contact your HR/Admin team.</li>

          <li>
            Provide your registered <strong>Employee ID</strong>.
          </li>

          <li>
            Provide your registered{" "}
            <strong>email address or phone number</strong>.
          </li>

          <li>
            Request your IRCS Attendance account and associated data to be
            deleted.
          </li>
        </ol>

        <h2
          style={{
            marginTop: "30px",
            marginBottom: "12px",
            fontSize: "22px",
            color: "#222222",
          }}
        >
          What happens after your request?
        </h2>

        <p>
          Your HR/Admin team will verify your identity and process the account
          deletion request according to your organization's policies.
        </p>

        <p>
          Once the request is approved, your account and applicable associated
          personal data will be deleted or deactivated as required.
        </p>

        <h2
          style={{
            marginTop: "30px",
            marginBottom: "12px",
            fontSize: "22px",
            color: "#222222",
          }}
        >
          Need help?
        </h2>

        <p>
          Please contact your organization's HR/Admin team for assistance with
          account deletion.
        </p>

        <div
          style={{
            marginTop: "35px",
            padding: "15px 20px",
            backgroundColor: "#f0f4f8",
            borderRadius: "8px",
            fontSize: "14px",
            color: "#555555",
          }}
        >
          <strong>Note:</strong> Account deletion requests are handled by your
          organization's authorized HR/Admin team.
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;