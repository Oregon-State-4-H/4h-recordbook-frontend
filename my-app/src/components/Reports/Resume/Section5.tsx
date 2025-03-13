import React from "react";
import { Text, View, StyleSheet, Page } from "@react-pdf/renderer";
import ReportStyles from "../ReportStyles";
import Footer from "../Footer";
import { Section5 } from "@/API/ResumeAPI";

let col1Flex = 1;
let col2Flex = 5;
let col3Flex = 1;
let col4Flex = 1.5;

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

function TableHeader(props: any) {
  const headerKey = props.headerKey;
  const isBreak = props.isBreak;

  if(isBreak === false){
    return (
      <View key={headerKey} style={styles.headerRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>Year</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignCenter]}>
          <Text>Leadership Title and Responsibilities</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Hours Spent</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>People Reached</Text>
        </View>
      </View>
    )
  } else {
    return (
      <View key={headerKey} style={styles.headerRow} break>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>Year</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignCenter]}>
          <Text>Leadership Title and Responsibilities</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Hours Spent</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>People Reached</Text>
        </View>
      </View>
    )
  }
}

var rows: React.JSX.Element[] = [];

function addPageBreaks() {
  var i = 21;
  var count = 1

  while (i < rows.length) {
    rows.splice(i, 0, <TableHeader key={"Sec5Head-" + count} isBreak={true} />);
    i += 25;
    count++;
  }
}


/**
 * PDF page for Section 5 of the 4-H Resume
 * @param {Object} tableData - resume data for section 5
 * @returns {JSX.Element}
 * @see {@link 'src/app/_db/models/resumeSections/section5Model'} for object structure
 * @example <Section5 tableData={section5Data}/>
 */
export default function Section5Report(props: any) {
  const tableData: Section5[] = props.tableData;
  rows = tableData?.map((row, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>{row.year}</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignLeft]}>
          <Text>{row.leadership_role}</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>{row.hours_spent}</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>{row.num_people_reached}</Text>
        </View>
      </View>
    )
  });

  if (tableData?.length > 23)
    addPageBreaks();

  return (
    <Page size="LETTER" style={ReportStyles.body} wrap>
        <Text style={ReportStyles.h1}>Section 5: Leadership in 4-H</Text>
        <Text style={ReportStyles.tableHeaading}>List of all 4-H related leadership roles</Text>
  
        <TableHeader headerKey={"Sec5Head-0"} isBreak={false} />

        {rows}

        { (!rows || rows.length == 0) && <Text style={ReportStyles.noData}>No data available</Text> }
        
      <Footer />
    </Page>
  )
};