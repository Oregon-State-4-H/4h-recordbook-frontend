export enum SectionNumbers {
    Section1 = 'section1',
    Section2 = 'section2',
    Section3 = 'section3',
    Section4 = 'section4',
    Section5 = 'section5',
    Section6 = 'section6',
    Section7 = 'section7',
    Section8 = 'section8',
    Section9 = 'section9',
    Section10 = 'section10',
    Section11 = 'section11',
    Section12 = 'section12',
    Section13 = 'section13',
    Section14 = 'section14',
}

export interface Section1 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    grade: number,
    club_name: string,
    num_in_club: number,
    club_leader: string,
    meetings_held: number,
    meetings_attended: number,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section2 {
    id: string,
    section: number,
    year: string,
    project_name: string,
    project_scope: string,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section3 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    activity_kind: string,
    things_learned: string,
    level: string,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section4 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    activity_kind: string,
    scope: string,
    level: string,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section5 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    leadership_role: string,
    hours_spent: number,
    num_people_reached: number,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section6 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    organization_name: string,
    leadership_role: string,
    hours_spent: number,
    num_people_reached: number,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section7 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    club_member_activities: string,
    hours_spent: number,
    num_people_reached: number,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section8 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    individual_group_activities: string,
    hours_spent: number,
    num_people_reached: number
    user_id: string,
    created: string,
    updated: string,
}

export interface Section9 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    communication_type: string,
    topic: string,
    times_given: number,
    location: string,
    audience_size: number,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section10 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    communication_type: string,
    topic: string,
    times_given: number,
    location: string,
    audience_size: number,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section11 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    event_and_level: string,
    exhibits_or_division: string,
    ribbon_or_placings: string,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section12 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    contest_or_event: string,
    recognition_received: string,
    level: string,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section13 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    recognition_type: string,
    user_id: string,
    created: string,
    updated: string,
}

export interface Section14 {
    id: string,
    section: number,
    nickname: string,
    year: string,
    recognition_type: string,
    user_id: string,
    created: string,
    updated: string,
}

export type SectionData = (Section1  | 
                           Section2  | 
                           Section3  | 
                           Section4  | 
                           Section5  |
                           Section6  | 
                           Section7  |
                           Section8  |
                           Section9  |
                           Section10 |
                           Section11 |
                           Section12 |
                           Section13 |
                           Section14)[]

export const fetchSectionData = async <T> (section: string): Promise<T[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${section}`, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();
        switch(section) {
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
                throw new Error('Section number doesn\'t exist');
        }
    }
    catch (error) {
        throw error;
    }
}

export const deleteSection = async (sectionID: string) => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/section/${sectionID}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        switch (response.status) {
            case 204:
                return true;
            case 404:
                throw new Error('Entry not found');
            default:
                throw new Error(`Error: status ${response.status}`)
        }

    }
    catch (error) {
        throw error;
    }

}