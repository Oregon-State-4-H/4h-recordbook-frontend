import React from "react";
import { Text, View, StyleSheet, Page } from "@react-pdf/renderer";
import ReportStyles from "../ReportStyles";
import Footer from "../Footer";
import { Section3 } from "@/API/ResumeAPI";

let col1Flex = 1;
let col2Flex = 4;
let col3Flex = 5;
let col4Flex = 2;

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
          <Text>Kind of Activity</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Things Learned</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>Region</Text>
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
          <Text>Kind of Activity</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Things Learned</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>Region</Text>
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
    rows.splice(i, 0, <TableHeader key={"Sec3Head-" + count} isBreak={true} />);
    i += 25;
    count++;
  }
}

/**
 * PDF page for Section 3 of the 4-H Resume
 * @param {Object} tableData - resume data for section 3
 * @returns {JSX.Element}
 * @see {@link 'src/app/_db/models/resumeSections/section3Model'} for object structure
 * @example <Section3 tableData={section3Data}/>
*/
export default function Section3Report(props: any) {
  const tableData: Section3[] = props.tableData;
  rows = tableData?.map((row, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>{row.year}</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignLeft]}>
          <Text>{row.activity_kind}</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignLeft]}>
          <Text>{row.things_learned}</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignLeft]}>
          <Text>{row.level}</Text>
        </View>
      </View>
    )
  });

  if (tableData?.length > 23)
    addPageBreaks();

  return (
    <Page size="LETTER" style={ReportStyles.body} wrap>
        <Text style={ReportStyles.h1}>Section 3: Participation in 4-H Activities/Events</Text>
        <Text style={ReportStyles.tableHeaading}>List of all 4-H activities and event I have attended.</Text>
  
        <TableHeader headerKey={"Sec3Head-0"} isBreak={false} />

        {rows}

        { (!rows || rows.length == 0) && <Text style={ReportStyles.noData}>No data available</Text> }
        
      <Footer />
    </Page>
  )
};