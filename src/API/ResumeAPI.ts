import { buildBaseUrl } from "@/API/base";

export enum SectionNumbers {
  Section1 = "section1",
  Section2 = "section2",
  Section3 = "section3",
  Section4 = "section4",
  Section5 = "section5",
  Section6 = "section6",
  Section7 = "section7",
  Section8 = "section8",
  Section9 = "section9",
  Section10 = "section10",
  Section11 = "section11",
  Section12 = "section12",
  Section13 = "section13",
  Section14 = "section14",
}

type GenericSectionFields = {
  id: string;
  section: number;
  user_id: string;
  created: string;
  updated: string;
};

export interface CustomSection1Fields {
  nickname: string;
  year: string;
  grade: number;
  club_name: string;
  num_in_club: number;
  club_leader: string;
  meetings_held: number;
  meetings_attended: number;
}

export interface CustomSection2Fields {
  year: string;
  project_name: string;
  project_scope: string;
}

export interface CustomSection3Fields {
  nickname: string;
  year: string;
  activity_kind: string;
  things_learned: string;
  level: string;
}

export interface CustomSection4Fields {
  nickname: string;
  year: string;
  activity_kind: string;
  scope: string;
  level: string;
}

export interface CustomSection5Fields {
  nickname: string;
  year: string;
  leadership_role: string;
  hours_spent: number;
  num_people_reached: number;
}

export interface CustomSection6Fields {
  nickname: string;
  year: string;
  organization_name: string;
  leadership_role: string;
  hours_spent: number;
  num_people_reached: number;
}

export interface CustomSection7Fields {
  nickname: string;
  year: string;
  club_member_activities: string;
  hours_spent: number;
  num_people_reached: number;
}

export interface CustomSection8Fields {
  nickname: string;
  year: string;
  individual_group_activities: string;
  hours_spent: number;
  num_people_reached: number;
}

export interface CustomSection9Fields {
  nickname: string;
  year: string;
  communication_type: string;
  topic: string;
  times_given: number;
  location: string;
  audience_size: number;
}

export interface CustomSection10Fields {
  nickname: string;
  year: string;
  communication_type: string;
  topic: string;
  times_given: number;
  location: string;
  audience_size: number;
}

export interface CustomSection11Fields {
  nickname: string;
  year: string;
  event_and_level: string;
  exhibits_or_division: string;
  ribbon_or_placings: string;
}

export interface CustomSection12Fields {
  nickname: string;
  year: string;
  contest_or_event: string;
  recognition_received: string;
  level: string;
}

export interface CustomSection13Fields {
  nickname: string;
  year: string;
  recognition_type: string;
}

export interface CustomSection14Fields {
  nickname: string;
  year: string;
  recognition_type: string;
}

export type CustomSectionFields =
  | CustomSection1Fields
  | CustomSection2Fields
  | CustomSection3Fields
  | CustomSection4Fields
  | CustomSection5Fields
  | CustomSection6Fields
  | CustomSection7Fields
  | CustomSection8Fields
  | CustomSection9Fields
  | CustomSection10Fields
  | CustomSection11Fields
  | CustomSection12Fields
  | CustomSection13Fields
  | CustomSection14Fields;

export type Section1 = CustomSection1Fields & GenericSectionFields;
export type Section2 = CustomSection2Fields & GenericSectionFields;
export type Section3 = CustomSection3Fields & GenericSectionFields;
export type Section4 = CustomSection4Fields & GenericSectionFields;
export type Section5 = CustomSection5Fields & GenericSectionFields;
export type Section6 = CustomSection6Fields & GenericSectionFields;
export type Section7 = CustomSection7Fields & GenericSectionFields;
export type Section8 = CustomSection8Fields & GenericSectionFields;
export type Section9 = CustomSection9Fields & GenericSectionFields;
export type Section10 = CustomSection10Fields & GenericSectionFields;
export type Section11 = CustomSection11Fields & GenericSectionFields;
export type Section12 = CustomSection12Fields & GenericSectionFields;
export type Section13 = CustomSection13Fields & GenericSectionFields;
export type Section14 = CustomSection14Fields & GenericSectionFields;
export type SectionEmpty = GenericSectionFields;

export type SectionData = (
  | Section1
  | Section2
  | Section3
  | Section4
  | Section5
  | Section6
  | Section7
  | Section8
  | Section9
  | Section10
  | Section11
  | Section12
  | Section13
  | Section14
)[];

export type SectionAny =
  | Section1
  | Section2
  | Section3
  | Section4
  | Section5
  | Section6
  | Section7
  | Section8
  | Section9
  | Section10
  | Section11
  | Section12
  | Section13
  | Section14
  | SectionEmpty;

export type SectionValid =
  | Section1
  | Section2
  | Section3
  | Section4
  | Section5
  | Section6
  | Section7
  | Section8
  | Section9
  | Section10
  | Section11
  | Section12
  | Section13
  | Section14;

export type ResumeSections = {
  section_1_data: Section1[];
  section_2_data: Section2[];
  section_3_data: Section3[];
  section_4_data: Section4[];
  section_5_data: Section5[];
  section_6_data: Section6[];
  section_7_data: Section7[];
  section_8_data: Section8[];
  section_9_data: Section9[];
  section_10_data: Section10[];
  section_11_data: Section11[];
  section_12_data: Section12[];
  section_13_data: Section13[];
  section_14_data: Section14[];
};

export function isS1(sectionData: SectionAny): sectionData is Section1 {
  return (sectionData as Section1).section == 1;
}

export function isS2(sectionData: SectionAny): sectionData is Section2 {
  return (sectionData as Section2).section == 2;
}

export function isS3(sectionData: SectionAny): sectionData is Section3 {
  return (sectionData as Section3).section == 3;
}

export function isS4(sectionData: SectionAny): sectionData is Section4 {
  return (sectionData as Section4).section == 4;
}

export function isS5(sectionData: SectionAny): sectionData is Section5 {
  return (sectionData as Section5).section == 5;
}

export function isS6(sectionData: SectionAny): sectionData is Section6 {
  return (sectionData as Section6).section == 6;
}

export function isS7(sectionData: SectionAny): sectionData is Section7 {
  return (sectionData as Section7).section == 7;
}

export function isS8(sectionData: SectionAny): sectionData is Section8 {
  return (sectionData as Section8).section == 8;
}

export function isS9(sectionData: SectionAny): sectionData is Section9 {
  return (sectionData as Section9).section == 9;
}

export function isS10(sectionData: SectionAny): sectionData is Section10 {
  return (sectionData as Section10).section == 10;
}

export function isS11(sectionData: SectionAny): sectionData is Section11 {
  return (sectionData as Section11).section == 11;
}

export function isS12(sectionData: SectionAny): sectionData is Section12 {
  return (sectionData as Section12).section == 12;
}

export function isS13(sectionData: SectionAny): sectionData is Section13 {
  return (sectionData as Section13).section == 13;
}

export function isS14(sectionData: SectionAny): sectionData is Section14 {
  return (sectionData as Section14).section == 14;
}

export function isSectionEmpty(
  sectionData: SectionAny
): sectionData is SectionEmpty {
  return (sectionData as SectionEmpty).section == -1;
}

export function isSectionValid(
  sectionData: SectionAny
): sectionData is SectionValid {
  return (sectionData as SectionEmpty).section > 0;
}

export const fetchResume = async (): Promise<ResumeSections> => {
  try {
    const response = await fetch(`${buildBaseUrl()}resume`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.resume as ResumeSections;
  } catch (error) {
    throw error;
  }
};

export const fetchSectionData = async <T>(section: string): Promise<T[]> => {
  try {
    const response = await fetch(`${buildBaseUrl()}${section}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    switch (section) {
      case SectionNumbers.Section1:
        return data.section_1_data as T[];
      case SectionNumbers.Section2:
        return data.section_2_data as T[];
      case SectionNumbers.Section3:
        return data.section_3_data as T[];
      case SectionNumbers.Section4:
        return data.section_4_data as T[];
      case SectionNumbers.Section5:
        return data.section_5_data as T[];
      case SectionNumbers.Section6:
        return data.section_6_data as T[];
      case SectionNumbers.Section7:
        return data.section_7_data as T[];
      case SectionNumbers.Section8:
        return data.section_8_data as T[];
      case SectionNumbers.Section9:
        return data.section_9_data as T[];
      case SectionNumbers.Section10:
        return data.section_10_data as T[];
      case SectionNumbers.Section11:
        return data.section_11_data as T[];
      case SectionNumbers.Section12:
        return data.section_12_data as T[];
      case SectionNumbers.Section13:
        return data.section_13_data as T[];
      case SectionNumbers.Section14:
        return data.section_14_data as T[];
      default:
        throw new Error("Section number doesn't exist");
    }
  } catch (error) {
    throw error;
  }
};

export const postSection = async <T>(
  section: string,
  input: string
): Promise<T> => {
  try {
    const response = await fetch(`${buildBaseUrl()}${section}`, {
      method: "POST",
      credentials: "include",
      body: input,
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    switch (section) {
      case SectionNumbers.Section1:
        return data.section_1 as T;
      case SectionNumbers.Section2:
        return data.section_2 as T;
      case SectionNumbers.Section3:
        return data.section_3 as T;
      case SectionNumbers.Section4:
        return data.section_4 as T;
      case SectionNumbers.Section5:
        return data.section_5 as T;
      case SectionNumbers.Section6:
        return data.section_6 as T;
      case SectionNumbers.Section7:
        return data.section_7 as T;
      case SectionNumbers.Section8:
        return data.section_8 as T;
      case SectionNumbers.Section9:
        return data.section_9 as T;
      case SectionNumbers.Section10:
        return data.section_10 as T;
      case SectionNumbers.Section11:
        return data.section_11 as T;
      case SectionNumbers.Section12:
        return data.section_12 as T;
      case SectionNumbers.Section13:
        return data.section_13 as T;
      case SectionNumbers.Section14:
        return data.section_14 as T;
      default:
        throw new Error("Section number doesn't exist");
    }
  } catch (error) {
    throw error;
  }
};

export const updateSection = async <T>(
  section: string,
  id: string,
  input: string
): Promise<T> => {
  try {
    const response = await fetch(`${buildBaseUrl()}${section}/${id}`, {
      method: "PUT",
      credentials: "include",
      body: input,
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    switch (section) {
      case SectionNumbers.Section1:
        return data.section_1 as T;
      case SectionNumbers.Section2:
        return data.section_2 as T;
      case SectionNumbers.Section3:
        return data.section_3 as T;
      case SectionNumbers.Section4:
        return data.section_4 as T;
      case SectionNumbers.Section5:
        return data.section_5 as T;
      case SectionNumbers.Section6:
        return data.section_6 as T;
      case SectionNumbers.Section7:
        return data.section_7 as T;
      case SectionNumbers.Section8:
        return data.section_8 as T;
      case SectionNumbers.Section9:
        return data.section_9 as T;
      case SectionNumbers.Section10:
        return data.section_10 as T;
      case SectionNumbers.Section11:
        return data.section_11 as T;
      case SectionNumbers.Section12:
        return data.section_12 as T;
      case SectionNumbers.Section13:
        return data.section_13 as T;
      case SectionNumbers.Section14:
        return data.section_14 as T;
      default:
        throw new Error("Section number doesn't exist");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteSection = async (sectionID: string) => {
  try {
    const response = await fetch(`${buildBaseUrl()}section/${sectionID}`, {
      method: "DELETE",
      credentials: "include",
    });

    switch (response.status) {
      case 204:
        return true;
      case 404:
        throw new Error("Entry not found");
      default:
        throw new Error(`Error: status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};
