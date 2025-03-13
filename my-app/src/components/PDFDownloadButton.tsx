"use client"

import classes from "./styles.module.css";
import { FaDownload } from "react-icons/fa";
import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod. PDFDownloadLink),
  {
    ssr: false,
  },
);

interface PDFDownloadButtonProps {
    document: any,
    fileName: string,
    text: string,
}

export function PDFDownloadButton({ document, fileName, text }: PDFDownloadButtonProps) {
    return (
      <PDFDownloadLink className={classes.actionButton} document={document} fileName={fileName} >
        {({loading}) => (loading ? 
          (<>
            <FaDownload className={classes.actionButtonIcon} />
            <span id={classes.actionButtonText}>Loading...</span>
          </>) : (
          <>
            <FaDownload className={classes.actionButtonIcon} />
            <span id={classes.actionButtonText}>{text}</span>
          </> )
        )}
      </PDFDownloadLink>
    );
  }