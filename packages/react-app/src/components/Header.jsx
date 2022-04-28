import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a class="header" href="https://github.com/austintgriffith/multi-sig" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="multi-sig"
        subTitle="multi-sig example"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
