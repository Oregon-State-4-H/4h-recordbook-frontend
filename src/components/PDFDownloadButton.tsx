"use client";

import classes from "./styles.module.css";
import { FaDownload } from "react-icons/fa";
import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: true,
  }
);

interface PDFDownloadButtonProps {
  document: any;
  fileName: string;
}

export function PDFDownloadButton({
  document,
  fileName,
}: PDFDownloadButtonProps) {
  return (
    <PDFDownloadLink
      className={classes.actionButton}
      document={document}
      fileName={fileName}
    >
      {({ loading }) => (loading ? "Loading document..." : "Download Resume")}
    </PDFDownloadLink>
  );
}
