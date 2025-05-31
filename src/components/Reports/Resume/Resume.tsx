"use client";

import { Document } from "@react-pdf/renderer";
import Section0Report from "./Section0";
import Section1Report from "./Section1";
import Section2Report from "./Section2";
import Section3Report from "./Section3";
import Section4Report from "./Section4";
import Section5Report from "./Section5";
import Section6Report from "./Section6";
import Section7Report from "./Section7";
import Section8Report from "./Section8";
import Section9Report from "./Section9";
import Section10Report from "./Section10";
import Section11Report from "./Section11";
import Section12Report from "./Section12";
import Section13Report from "./Section13";
import Section14Report from "./Section14";
import { ResumeSections } from "@/API/ResumeAPI";
import { User } from "@/API/UserAPI";

/**
 * Complete PDF file for the 4-H resume
 * @param {Object} resumeData - resume data for all 14 sections
 * @returns {JSX.Element}
 */

export interface ResumePDFProps {
  userData: User;
  resumeData: ResumeSections;
}

export default function PDFFile(props: ResumePDFProps) {
  const userData = props.userData;
  const resumeData: ResumeSections = props.resumeData;
  return (
    <Document>
      <Section0Report userData={userData} />
      <Section1Report tableData={resumeData.section_1_data} />
      <Section2Report tableData={resumeData.section_2_data} />
      <Section3Report tableData={resumeData.section_3_data} />
      <Section4Report tableData={resumeData.section_4_data} />
      <Section5Report tableData={resumeData.section_5_data} />
      <Section6Report tableData={resumeData.section_6_data} />
      <Section7Report tableData={resumeData.section_7_data} />
      <Section8Report tableData={resumeData.section_8_data} />
      <Section9Report tableData={resumeData.section_9_data} />
      <Section10Report tableData={resumeData.section_10_data} />
      <Section11Report tableData={resumeData.section_11_data} />
      <Section12Report tableData={resumeData.section_12_data} />
      <Section13Report tableData={resumeData.section_13_data} />
      <Section14Report tableData={resumeData.section_14_data} />
    </Document>
  );
}
