import { Text, View, StyleSheet, Page, Image } from "@react-pdf/renderer";
import ReportStyles from "../ReportStyles.jsx";
import Footer from "../Footer.jsx";

const dateFlex = .5;
const feedColFlex = 1;
const notesColFlex = 2;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 75,
    height: "auto"
  },
  tableHeader: {
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
    height: 40,
  },
  border: {
    borderRight: 1,
    borderBottom: 1,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: 1,
    borderLeft: 1,
    borderRight: 1,
    height: 15,
  },
  borderRight: {
    borderRight: 1,
  },
  textMargin: {
    marginLeft: 3,
  }
});

function FeedHeader({feedName}) {
  return (
    <View style={{display: "flex", flexDirection: "column", flex: feedColFlex}}>
      <View style={[styles.borderRight, {borderBottom: 1}]}>
        <Text>{feedName}</Text>
      </View>
      <View style={{display: "flex", flexDirection: "row"}}>
        <View style={[styles.borderRight, {flex: 1}]}>
          <Text>Lb</Text>
        </View>
        <View style={[styles.borderRight, {flex: 1}]}>
          <Text>Cost</Text>
        </View>
      </View>
    </View>
  )
}

function TableHeader({ feedName1, feedName2, feedName3}) {
  return (
    <View style={[styles.tableHeader, {marginTop: 5}]}>
      <View style={[styles.borderRight, {flex: dateFlex}]}>
        <Text>Date</Text>
      </View>

      <FeedHeader feedName={feedName1} />
      <FeedHeader feedName={feedName2} />
      <FeedHeader feedName={feedName3} />

      <View style={{flex: notesColFlex}}>
        <Text>Notes</Text>
      </View>
    </View>
  )
}

var rows = []

function getDay(date) {
  var day = date.getDate();
  return day;
}

export default function DailyFeed({ data }) {
  var name = data?.user?.name;
  var county = data?.user?.county;
  var animalType = data?.animal?.type;
  var identification = data?.animal?.identification;
  var month = data?.month;
  var feedName1 = "Corn";
  var feedName2 = "Purina";
  var feedName3 = "Pellets";
    
  rows = data?.feed?.map((row, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <View style={[styles.borderRight, {flex: dateFlex}]}>
          <Text style={styles.textMargin}>{getDay(row.date)}</Text>
        </View>

        <View style={{flex: feedColFlex, display: "flex", flexDirection: "row"}}>
          <View style={[styles.borderRight, {flex: 1}]}>
            <Text style={styles.textMargin}>{row.feed1Lb}</Text>
          </View>
          <View style={[styles.borderRight, {flex: 1}]}>
            <Text style={styles.textMargin}>{row.feed1Cost}</Text>
          </View>
        </View>

        <View style={{flex: feedColFlex, display: "flex", flexDirection: "row"}}>
        <View style={[styles.borderRight, {flex: 1}]}>
            <Text style={styles.textMargin}>{row.feed2Lb}</Text>
          </View>
          <View style={[styles.borderRight, {flex: 1}]}>
            <Text style={styles.textMargin}>{row.feed2Cost}</Text>
          </View>
        </View>

        <View style={{flex: feedColFlex, display: "flex", flexDirection: "row"}}>
          <View style={[styles.borderRight, {flex: 1}]}>
            <Text style={styles.textMargin}>{row.feed3Lb}</Text>
          </View>
          <View style={[styles.borderRight, {flex: 1}]}>
            <Text style={styles.textMargin}>{row.feed3Cost}</Text>
          </View>
        </View>

        <View style={{flex: notesColFlex}}>
          <Text style={styles.textMargin}>{row.notes}</Text>
        </View>
      </View>
    )
  })

  return (
    <Page size="LETTER" style={[ReportStyles.body, {padding: 20, paddingHorizontal: 25, paddingVertical: 25}]}>
      <Text style={ReportStyles.h1}>Daily Feed Record for Market Animals</Text>
      <View style={styles.header}>
        <Image src="/assets/photos/4hlogo.png" style={styles.logo}/>
        <Text style={[ReportStyles.h1, {fontWeight: "bold"}]}>Daily Feed Record for Market Animals</Text>
      </View>


      <View style={[ReportStyles.fillableForm, {marginTop: 10}]}>
        <View style={ReportStyles.fillableFormRow}>
          <View style={ReportStyles.fillableFormMultiInputSection}>
            <Text style={ReportStyles.fillableFormLabel}>Name:</Text>
            <Text style={ReportStyles.fillableFormInput}>{name}</Text>
          </View>
          <View style={ReportStyles.fillableFormMultiInputSection}>
            <Text style={ReportStyles.fillableFormLabel}>County:</Text>
            <Text style={ReportStyles.fillableFormInput}>{county}</Text>
          </View>
        </View>
        <View style={ReportStyles.fillableFormRow}>
          <View style={ReportStyles.fillableFormMultiInputSection}>
            <Text style={ReportStyles.fillableFormLabel}>Type of animal:</Text>
            <Text style={ReportStyles.fillableFormInput}>{animalType}</Text>
          </View>
          <View style={ReportStyles.fillableFormMultiInputSection}>
            <Text style={ReportStyles.fillableFormLabel}>Identification:</Text>
            <Text style={ReportStyles.fillableFormInput}>{identification}</Text>
          </View>
          <View style={ReportStyles.fillableFormMultiInputSection}>
            <Text style={ReportStyles.fillableFormLabel}>Month:</Text>
            <Text style={ReportStyles.fillableFormInput}>{month}</Text>
          </View>
        </View>
      </View>

      <Text style={[ReportStyles.h2, {alignSelf: "center", margin: 0}]}>Amount of Feed Each Day</Text>
      <TableHeader feedName1={feedName1} feedName2={feedName2} feedName3={feedName3} />
      {rows}

      <Footer />
    </Page>
  )
}