import React from "react";
import { Text, View, StyleSheet, Page } from "@react-pdf/renderer";
import ReportStyles from "../ReportStyles";
import Footer from "../Footer";
import {
  Section7,
  isS7,
  ResumePDFProps,
  ResumePDFTableHeaderProps,
} from "@/API/ResumeAPI";

const col1Flex = 1;
const col2Flex = 5;
const col3Flex = 1;
const col4Flex = 1;

const styles = StyleSheet.create({
  headerRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "black",
    borderBottom: 2,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    fontSize: 11,
  },
  tableRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    fontWeight: "normal",
    borderColor: "black",
    borderBottom: 1,
    borderLeft: 1,
    borderRight: 1,
    height: 25,
    alignContent: "center",
    fontSize: 10,
  },
  col1: {
    flex: col1Flex,
    borderRight: 1,
  },
  col2: {
    flex: col2Flex,
    borderRight: 1,
  },
  col3: {
    flex: col3Flex,
    borderRight: 1,
  },
  col4: {
    flex: col4Flex,
  },
});

function TableHeader(props: ResumePDFTableHeaderProps) {
  const headerKey = props.headerKey;
  const isBreak = props.isBreak;

  if (isBreak === false) {
    return (
      <View key={headerKey} style={styles.headerRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>Year</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignCenter]}>
          <Text>What I Did</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Hours Served</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>People Reached</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View key={headerKey} style={styles.headerRow} break>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>Year</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignCenter]}>
          <Text>What I Did</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Hours Served</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>People Reached</Text>
        </View>
      </View>
    );
  }
}

let rows: React.JSX.Element[] = [];

function addPageBreaks() {
  let i = 21;
  let count = 1;

  while (i < rows.length) {
    rows.splice(
      i,
      0,
      <TableHeader headerKey={"Sec7Head-" + count} isBreak={true} />
    );
    i += 25;
    count++;
  }
}

/**
 * PDF page for Section 7 of the 4-H Resume
 * @param {Object} tableData - resume data for section 7
 * @returns {JSX.Element}
 * @see {@link 'src/app/_db/models/resumeSections/section7Model'} for object structure
 * @example <Section7 tableData={section7Data}/>
 */
export default function Section7Report(props: ResumePDFProps) {
  const tableData: Section7[] = props.tableData.filter((item) => isS7(item));
  rows = tableData?.map((row, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>{row.year}</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignLeft]}>
          <Text>{row.club_member_activities}</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>{row.hours_spent}</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>{row.num_people_reached}</Text>
        </View>
      </View>
    );
  });

  if (tableData?.length > 23) addPageBreaks();

  return (
    <Page size="LETTER" style={ReportStyles.body} wrap>
      <Text style={ReportStyles.h1}>
        Section 7: Citizenship/Community Service in 4-H
      </Text>
      <Text style={ReportStyles.tableHeaading}>
        List of all 4-H related activitied that contributed to the welfare of my
        club or community
      </Text>

      <TableHeader headerKey={"Sec7Head-0"} isBreak={false} />

      {rows}

      {(!rows || rows.length == 0) && (
        <Text style={ReportStyles.noData}>No data available</Text>
      )}

      <Footer />
    </Page>
  );
}
