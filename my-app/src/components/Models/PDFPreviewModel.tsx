import { OverlayModel } from "./OverlayModel";
import { PDFViewer } from "@react-pdf/renderer";

/**
 * Displays a PDF file in a model
 * @param {object} children - PDF file to be displayed
 * @param {function} handleClose - Function to close the model
 * @param {string} title - Title of the model
 * @returns 
 */

interface PDFPreviewModelProps {
  children: any,
  handleClose: any,
  title: string,
}

export default function PDFPreviewModel({ children, handleClose, title }: PDFPreviewModelProps) {
  return (
    <OverlayModel title={title} handleClose={handleClose}
      frameStyles={{ width: "90vw", height: "90vh" }} >
      <PDFViewer width="100%" height="100%">
        {children}
      </PDFViewer>
    </OverlayModel>
  );
}
