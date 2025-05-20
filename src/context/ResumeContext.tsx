"use client";

import React, { createContext, useContext, useState } from "react";
import {
  isResumeSections,
  SectionAny,
  ResumeSections,
  emptyResumeSections,
} from "@/API/ResumeAPI";

export interface SectionProperties {
  SectionData: SectionAny[];
  SectionPopulated: boolean;
}

interface SectionMap {
  [section: string]: SectionProperties;
}

export interface ResumeValues {
  ResumeData: SectionAny[] | ResumeSections;

  // section value should be 0 for ResumeSection type
  // section value should be 1-14 for ResumeAny type
  section: string;
}

export interface ResumeProp {
  Sections: SectionMap;
  SAll: ResumeSections;
  SAllPopulated: boolean;
  updateResume: (values: ResumeValues) => void;
}

const emptySectionProperties: SectionProperties = {
  SectionData: [],
  SectionPopulated: false,
};

export const resumeContextDefaultProp: ResumeProp = {
  Sections: {
    "1": emptySectionProperties,
    "2": emptySectionProperties,
    "3": emptySectionProperties,
    "4": emptySectionProperties,
    "5": emptySectionProperties,
    "6": emptySectionProperties,
    "7": emptySectionProperties,
    "8": emptySectionProperties,
    "9": emptySectionProperties,
    "10": emptySectionProperties,
    "11": emptySectionProperties,
    "12": emptySectionProperties,
    "13": emptySectionProperties,
    "14": emptySectionProperties,
  },
  SAll: emptyResumeSections,
  SAllPopulated: false,
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
  const S1Properties: SectionProperties = {
    SectionData: S1Entries,
    SectionPopulated: isPopulatedS1,
  };

  const [S2Entries, setS2Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS2, setIsPopulatedS2] = useState<boolean>(false);
  const S2Properties: SectionProperties = {
    SectionData: S2Entries,
    SectionPopulated: isPopulatedS2,
  };

  const [S3Entries, setS3Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS3, setIsPopulatedS3] = useState<boolean>(false);
  const S3Properties: SectionProperties = {
    SectionData: S3Entries,
    SectionPopulated: isPopulatedS3,
  };

  const [S4Entries, setS4Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS4, setIsPopulatedS4] = useState<boolean>(false);
  const S4Properties: SectionProperties = {
    SectionData: S4Entries,
    SectionPopulated: isPopulatedS4,
  };

  const [S5Entries, setS5Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS5, setIsPopulatedS5] = useState<boolean>(false);
  const S5Properties: SectionProperties = {
    SectionData: S5Entries,
    SectionPopulated: isPopulatedS5,
  };

  const [S6Entries, setS6Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS6, setIsPopulatedS6] = useState<boolean>(false);
  const S6Properties: SectionProperties = {
    SectionData: S6Entries,
    SectionPopulated: isPopulatedS6,
  };

  const [S7Entries, setS7Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS7, setIsPopulatedS7] = useState<boolean>(false);
  const S7Properties: SectionProperties = {
    SectionData: S7Entries,
    SectionPopulated: isPopulatedS7,
  };

  const [S8Entries, setS8Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS8, setIsPopulatedS8] = useState<boolean>(false);
  const S8Properties: SectionProperties = {
    SectionData: S8Entries,
    SectionPopulated: isPopulatedS8,
  };

  const [S9Entries, setS9Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS9, setIsPopulatedS9] = useState<boolean>(false);
  const S9Properties: SectionProperties = {
    SectionData: S9Entries,
    SectionPopulated: isPopulatedS9,
  };

  const [S10Entries, setS10Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS10, setIsPopulatedS10] = useState<boolean>(false);
  const S10Properties: SectionProperties = {
    SectionData: S10Entries,
    SectionPopulated: isPopulatedS10,
  };

  const [S11Entries, setS11Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS11, setIsPopulatedS11] = useState<boolean>(false);
  const S11Properties: SectionProperties = {
    SectionData: S11Entries,
    SectionPopulated: isPopulatedS11,
  };

  const [S12Entries, setS12Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS12, setIsPopulatedS12] = useState<boolean>(false);
  const S12Properties: SectionProperties = {
    SectionData: S12Entries,
    SectionPopulated: isPopulatedS12,
  };

  const [S13Entries, setS13Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS13, setIsPopulatedS13] = useState<boolean>(false);
  const S13Properties: SectionProperties = {
    SectionData: S13Entries,
    SectionPopulated: isPopulatedS13,
  };

  const [S14Entries, setS14Entries] = useState<SectionAny[]>([]);
  const [isPopulatedS14, setIsPopulatedS14] = useState<boolean>(false);
  const S14Properties: SectionProperties = {
    SectionData: S14Entries,
    SectionPopulated: isPopulatedS14,
  };

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
        case "1":
          setS1Entries(updateValues.ResumeData);
          setIsPopulatedS1(true);
          break;
        case "2":
          setS2Entries(updateValues.ResumeData);
          setIsPopulatedS2(true);
          break;
        case "3":
          setS3Entries(updateValues.ResumeData);
          setIsPopulatedS3(true);
          break;
        case "4":
          setS4Entries(updateValues.ResumeData);
          setIsPopulatedS4(true);
          break;
        case "5":
          setS5Entries(updateValues.ResumeData);
          setIsPopulatedS5(true);
          break;
        case "6":
          setS6Entries(updateValues.ResumeData);
          setIsPopulatedS6(true);
          break;
        case "7":
          setS7Entries(updateValues.ResumeData);
          setIsPopulatedS7(true);
          break;
        case "8":
          setS8Entries(updateValues.ResumeData);
          setIsPopulatedS8(true);
          break;
        case "9":
          setS9Entries(updateValues.ResumeData);
          setIsPopulatedS9(true);
          break;
        case "10":
          setS10Entries(updateValues.ResumeData);
          setIsPopulatedS10(true);
          break;
        case "11":
          setS11Entries(updateValues.ResumeData);
          setIsPopulatedS11(true);
          break;
        case "12":
          setS12Entries(updateValues.ResumeData);
          setIsPopulatedS12(true);
          break;
        case "13":
          setS13Entries(updateValues.ResumeData);
          setIsPopulatedS13(true);
          break;
        case "14":
          setS14Entries(updateValues.ResumeData);
          setIsPopulatedS14(true);
          break;
      }
    }
  };

  const value: ResumeProp = {
    Sections: {
      "1": S1Properties,
      "2": S2Properties,
      "3": S3Properties,
      "4": S4Properties,
      "5": S5Properties,
      "6": S6Properties,
      "7": S7Properties,
      "8": S8Properties,
      "9": S9Properties,
      "10": S10Properties,
      "11": S11Properties,
      "12": S12Properties,
      "13": S13Properties,
      "14": S14Properties,
    },
    SAll: AllSectionEntries,
    SAllPopulated: isPopulatedAllSections,
    updateResume: update,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
}
