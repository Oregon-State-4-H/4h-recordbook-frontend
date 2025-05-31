import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import OrderedList from "../OrderedList";
import ReportStyles from "../ReportStyles";
import { User } from "@/API/UserAPI";

export interface S0Props {
  userData: User;
}

const indent = 20;

const bestResumelist = [
  <Text key="li1">
    List each year only once on each page at the first entry for that year.
  </Text>,
  <Text key="li2">
    Most items should only be entered once; however, some things may be listed
    in multiple places. For example, a speech you gave may be entered both in
    Section 11 if you gave it at your county contest AND in Section 9 as a
    Communication in 4-H. For major activities, you might emphasize different
    aspects of the activity in different sections. As an example, you might
    enter what you did and the hours you worked at a Community Service project
    in Section 7, but also enter it Section 5 under Leadership in 4-H if you
    were the person responsible for organizing the event.
  </Text>,
  <Text key="li3">
    Be as specific and complete with your entries as possible. You want people
    who read your record to understand the extent of what you have done.
  </Text>,
  <Text key="li4">
    Be careful in your use of abbreviations and/or acronyms. Someone reading
    your record might not be familiar with those you use, and some have multiple
    meanings.
  </Text>,
  <Text key="li5">
    {
      "Remember that quality is more important than quantity. Don't put things in your record just to fill up space."
    }
  </Text>,
];

/**
 * PDF page for Section 0 of the 4-H Resume
 * @param {Object} userData - User data
 * @returns {JSX.Element}
 * @see {@link 'src/app/_db/models/userModel'} for object structure
 * @example <Section0 userData={userDoc}/>
 */
export default function Section0({ userData }: S0Props) {
  console.log(userData);
  const name =
    userData?.first_name +
      " " +
      userData?.middle_name_initial +
      " " +
      userData?.last_name_initial || "";
  const dob = userData?.birthdate
    ? new Date(userData?.birthdate).toISOString().split("T")[0]
    : "";
  const county = userData?.county_name || "";
  const dateJoined = userData?.created
    ? new Date(userData?.created).toISOString().split("T")[0]
    : "";

  return (
    <Page size="LETTER" style={ReportStyles.body}>
      <Text style={ReportStyles.title}>My 4-H Resume</Text>

      <View style={ReportStyles.fillableForm}>
        <View style={ReportStyles.fillableFormRow}>
          <Text style={ReportStyles.fillableFormLabel}>Name:</Text>
          <Text style={ReportStyles.fillableFormInput}>{name}</Text>
        </View>

        <View style={ReportStyles.fillableFormRow}>
          <View style={ReportStyles.fillableFormMultiInputSection}>
            <Text style={ReportStyles.fillableFormLabel}>Date of Birth:</Text>
            <Text style={ReportStyles.fillableFormInput}>{dob}</Text>
          </View>
          <View style={ReportStyles.fillableFormMultiInputSection}>
            <Text style={ReportStyles.fillableFormLabel}>County:</Text>
            <Text style={ReportStyles.fillableFormInput}>{county}</Text>
          </View>
        </View>

        <View style={ReportStyles.fillableFormRow}>
          <Text style={ReportStyles.fillableFormLabel}>Date I joined 4-H:</Text>
          <Text style={ReportStyles.fillableFormInput}>{dateJoined}</Text>
        </View>
      </View>

      <Text>
        This record will be your summary of 4-H work done in all projects for
        every year you are in 4-H. Start with your first year and keep it up to
        date. It will be useful to you to know how much you have accomplished,
        particularly when you are filling out other forms for 4-H, school,
        <Text style={ReportStyles.bold}> scholarships</Text>, and other youth
        programs. It will be fun, too, to look back several years from now to
        see what you did.
      </Text>
      <Text style={ReportStyles.h2}>
        How to make your resume the best it can be:{" "}
      </Text>
      <View style={{ marginLeft: indent }}>
        <OrderedList items={bestResumelist} spaceAfter={true} />
      </View>
    </Page>
  );
}
