"use client";

import React, { createContext, useContext, useState } from "react";
import {
  isS1,
  isS2,
  isS3,
  isS4,
  isS5,
  isS6,
  isS7,
  isS8,
  isS9,
  isS10,
  isS11,
  isS12,
  isS13,
  isS14,
  isResumeSections,
  SectionAny,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Section10,
  Section11,
  Section12,
  Section13,
  Section14,
  ResumeSections,
  emptyResumeSections,
} from "@/API/ResumeAPI";

export interface ResumeValues {
  ResumeData: SectionAny[] | ResumeSections;

  // section value should be 0 for ResumeSection type
  // section value should be 1-14 for ResumeAny type
  section: number;
}

export interface ResumeProp {
  S1: SectionAny[];
  S1populated: boolean;
  S2: SectionAny[];
  S2populated: boolean;
  S3: SectionAny[];
  S3populated: boolean;
  S4: SectionAny[];
  S4populated: boolean;
  S5: SectionAny[];
  S5populated: boolean;
  S6: SectionAny[];
  S6populated: boolean;
  S7: SectionAny[];
  S7populated: boolean;
  S8: SectionAny[];
  S8populated: boolean;
  S9: SectionAny[];
  S9populated: boolean;
  S10: SectionAny[];
  S10populated: boolean;
  S11: SectionAny[];
  S11populated: boolean;
  S12: SectionAny[];
  S12populated: boolean;
  S13: SectionAny[];
  S13populated: boolean;
  S14: SectionAny[];
  S14populated: boolean;
  SAll: ResumeSections;
  SAllpopulated: boolean;
  updateResume: (values: ResumeValues) => void;
}

export const resumeContextDefaultProp: ResumeProp = {
  S1: [],
  S1populated: false,
  S2: [],
  S2populated: false,
  S3: [],
  S3populated: false,
  S4: [],
  S4populated: false,
  S5: [],
  S5populated: false,
  S6: [],
  S6populated: false,
  S7: [],
  S7populated: false,
  S8: [],
  S8populated: false,
  S9: [],
  S9populated: false,
  S10: [],
  S10populated: false,
  S11: [],
  S11populated: false,
  S12: [],
  S12populated: false,
  S13: [],
  S13populated: false,
  S14: [],
  S14populated: false,
  SAll: emptyResumeSections,
  SAllpopulated: false,
  updateResume: () => {},
};

export const ResumeContext = createContext<ResumeProp>(
  resumeContextDefaultProp
);

export function useResume() {
  return useContext(ResumeContext);
}

type Props = {
  children: React.ReactNode;
};

export function ResumeProvider({ children }: Props) {
  const [S1Entries, setS1Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS1, setIsPopulatedS1] = useState<boolean>(false);

  const [S2Entries, setS2Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS2, setIsPopulatedS2] = useState<boolean>(false);

  const [S3Entries, setS3Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS3, setIsPopulatedS3] = useState<boolean>(false);

  const [S4Entries, setS4Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS4, setIsPopulatedS4] = useState<boolean>(false);

  const [S5Entries, setS5Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS5, setIsPopulatedS5] = useState<boolean>(false);

  const [S6Entries, setS6Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS6, setIsPopulatedS6] = useState<boolean>(false);

  const [S7Entries, setS7Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS7, setIsPopulatedS7] = useState<boolean>(false);

  const [S8Entries, setS8Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS8, setIsPopulatedS8] = useState<boolean>(false);

  const [S9Entries, setS9Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS9, setIsPopulatedS9] = useState<boolean>(false);

  const [S10Entries, setS10Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS10, setIsPopulatedS10] = useState<boolean>(false);

  const [S11Entries, setS11Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS11, setIsPopulatedS11] = useState<boolean>(false);

  const [S12Entries, setS12Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS12, setIsPopulatedS12] = useState<boolean>(false);

  const [S13Entries, setS13Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS13, setIsPopulatedS13] = useState<boolean>(false);

  const [S14Entries, setS14Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS14, setIsPopulatedS14] = useState<boolean>(false);

  const [AllSectionEntries, setAllSectionEntries] =
    useState<ResumeSections>(emptyResumeSections);
  const [isPopulatedAllSections, setIsPopulatedAllSections] =
    useState<boolean>(false);

  const update = (updateValues: ResumeValues) => {
    if (isResumeSections(updateValues.ResumeData)) {
      setAllSectionEntries(updateValues.ResumeData);
      setIsPopulatedAllSections(true);
    } else {
      switch (updateValues.section) {
        case 1:
          setS1Entries(updateValues.ResumeData);
          setIsPopulatedS1(true);
        case 2:
          setS2Entries(updateValues.ResumeData);
          setIsPopulatedS2(true);
        case 3:
          setS3Entries(updateValues.ResumeData);
          setIsPopulatedS3(true);
        case 4:
          setS4Entries(updateValues.ResumeData);
          setIsPopulatedS4(true);
        case 5:
          setS5Entries(updateValues.ResumeData);
          setIsPopulatedS5(true);
        case 6:
          setS6Entries(updateValues.ResumeData);
          setIsPopulatedS6(true);
        case 7:
          setS7Entries(updateValues.ResumeData);
          setIsPopulatedS7(true);
        case 8:
          setS8Entries(updateValues.ResumeData);
          setIsPopulatedS8(true);
        case 9:
          setS9Entries(updateValues.ResumeData);
          setIsPopulatedS9(true);
        case 10:
          setS10Entries(updateValues.ResumeData);
          setIsPopulatedS10(true);
        case 11:
          setS11Entries(updateValues.ResumeData);
          setIsPopulatedS11(true);
        case 12:
          setS12Entries(updateValues.ResumeData);
          setIsPopulatedS12(true);
        case 13:
          setS13Entries(updateValues.ResumeData);
          setIsPopulatedS13(true);
        case 14:
          setS14Entries(updateValues.ResumeData);
          setIsPopulatedS14(true);
      }
    }
  };

  const value: ResumeProp = {
    S1: S1Entries,
    S1populated: isPopulatedS1,
    S2: S2Entries,
    S2populated: isPopulatedS2,
    S3: S3Entries,
    S3populated: isPopulatedS3,
    S4: S4Entries,
    S4populated: isPopulatedS4,
    S5: S5Entries,
    S5populated: isPopulatedS5,
    S6: S6Entries,
    S6populated: isPopulatedS6,
    S7: S7Entries,
    S7populated: isPopulatedS7,
    S8: S8Entries,
    S8populated: isPopulatedS8,
    S9: S9Entries,
    S9populated: isPopulatedS9,
    S10: S10Entries,
    S10populated: isPopulatedS10,
    S11: S11Entries,
    S11populated: isPopulatedS11,
    S12: S12Entries,
    S12populated: isPopulatedS12,
    S13: S13Entries,
    S13populated: isPopulatedS13,
    S14: S14Entries,
    S14populated: isPopulatedS14,
    SAll: AllSectionEntries,
    SAllpopulated: isPopulatedAllSections,
    updateResume: update,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
}
