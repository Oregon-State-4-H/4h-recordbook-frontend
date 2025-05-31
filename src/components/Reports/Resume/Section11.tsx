import React from "react";
import { Text, View, StyleSheet, Page } from "@react-pdf/renderer";
import ReportStyles from "../ReportStyles";
import Footer from "../Footer";
import {
  Section11,
  isS11,
  ResumePDFProps,
  ResumePDFTableHeaderProps,
} from "@/API/ResumeAPI";

const col1Flex = 1;
const col2Flex = 3;
const col3Flex = 5;
const col4Flex = 3;

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
          <Text>Event and Level</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Exhibits or Division Shown</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>Ribbon(s) Received or Placings</Text>
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
          <Text>Event and Level</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Exhibits or Division Shown</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>Ribbon(s) Received or Placings</Text>
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
      <TableHeader headerKey={"Sec11Head-" + count} isBreak={true} />
    );
    i += 25;
    count++;
  }
}

/**
 * PDF page for Section 11 of the 4-H Resume
 * @param {Object} tableData - Section 11 data
 * @returns {JSX.Element}
 * @see {@link 'src/app/_db/models/resumeSections/section11Model'} for object structure
 * @example <Section11 tableData={section11Data}/>
 */
export default function Section11Report(props: ResumePDFProps) {
  const tableData: Section11[] = props.tableData.filter((item) => isS11(item));
  rows = tableData?.map((row, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>{row.year}</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignLeft]}>
          <Text>{row.event_and_level}</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignLeft]}>
          <Text>{row.exhibits_or_division}</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignLeft]}>
          <Text>{row.ribbon_or_placings}</Text>
        </View>
      </View>
    );
  });

  if (tableData?.length > 23) addPageBreaks();

  return (
    <Page size="LETTER" style={ReportStyles.body} wrap>
      <Text style={ReportStyles.h1}>
        Section 11: Participation in 4-H Contests/Competitions
      </Text>
      <Text style={ReportStyles.tableHeaading}>
        List of all contests/competitions you entered in 4-H
      </Text>

      <TableHeader headerKey={"Sec11Head-0"} isBreak={false} />

      {rows}

      {(!rows || rows.length == 0) && (
        <Text style={ReportStyles.noData}>No data available</Text>
      )}

      <Footer />
    </Page>
  );
}
