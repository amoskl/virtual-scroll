import React from "react";

export interface User {
  name: string;
  jobTitle: string;
  avatarSrc: string;
}

export const UserCard: React.FC<User> = ({ name, jobTitle, avatarSrc }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "4px 12px",
    }}
  >
    <img
      src={avatarSrc}
      alt={name}
      style={{
        marginRight: 8,
        width: 32,
        height: 32,
        borderRadius: "100%",
        border: "1px solid #eee",
      }}
    />
    <div>
      <div style={{ fontSize: 14 }}>{name}</div>
      <div style={{ color: "#666", fontSize: 12 }}>{jobTitle}</div>
    </div>
  </div>
);
