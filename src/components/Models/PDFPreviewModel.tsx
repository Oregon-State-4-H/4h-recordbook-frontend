import React from "react";
import Box from "@mui/material/Box";
import { OverlayModelPDF } from "./OverlayModel";
import { PDFViewer } from "@react-pdf/renderer";

/**
 * Displays a PDF file in a model
 * @param {object} children - PDF file to be displayed
 * @param {function} handleClose - Function to close the model
 * @returns
 */

interface PDFPreviewModelProps {
  children: any;
  handleClose: any;
}

export default function PDFPreviewModel({
  children,
  handleClose,
}: PDFPreviewModelProps) {
  return (
    <OverlayModelPDF handleClose={handleClose}>
      <Box height={"5%"} />
      <PDFViewer width="100%" height="95%">
        {children}
      </PDFViewer>
    </OverlayModelPDF>
  );
}
