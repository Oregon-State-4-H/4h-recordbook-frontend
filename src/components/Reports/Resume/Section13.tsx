import React from "react";
import { Text, View, StyleSheet, Page } from "@react-pdf/renderer";
import ReportStyles from "../ReportStyles";
import Footer from "../Footer";
import {
  Section13,
  isS13,
  ResumePDFProps,
  ResumePDFTableHeaderProps,
} from "@/API/ResumeAPI";

const col1Flex = 1;
const col2Flex = 7;

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
          <Text>Type of Recognition</Text>
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
          <Text>Type of Recognition</Text>
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
      <TableHeader headerKey={"Sec13Head-" + count} isBreak={true} />
    );
    i += 25;
    count++;
  }
}

/**
 * PDF page for Section 13 of the 4-H Resume
 * @param {Object} tableData - Section 13 data
 * @returns {JSX.Element}
 * @see {@link 'src/app/_db/models/resumeSections/section13Model'} for object structure
 * @example <Section13 tableData={section13Data}/>
 */
export default function Section13Report(props: ResumePDFProps) {
  const tableData: Section13[] = props.tableData.filter((item) => isS13(item));
  rows = tableData?.map((row, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>{row.year}</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignLeft]}>
          <Text>{row.recognition_type}</Text>
        </View>
      </View>
    );
  });

  if (tableData?.length > 23) addPageBreaks();

  return (
    <Page size="LETTER" style={ReportStyles.body} wrap>
      <Text style={ReportStyles.h1}>Section 13: 4-H Recognition</Text>
      <Text style={ReportStyles.tableHeaading}>Important 4-H recognitions</Text>

      <TableHeader headerKey={"Sec13Head-0"} isBreak={false} />

      {rows}

      {(!rows || rows.length == 0) && (
        <Text style={ReportStyles.noData}>No data available</Text>
      )}

      <Footer />
    </Page>
  );
}
