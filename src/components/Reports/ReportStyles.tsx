// import '../../_fonts/fonts';
import { StyleSheet } from "@react-pdf/renderer";

var pageMargin = 60;
var beavOrange = "#D73F09"

const styles = StyleSheet.create({
  body: {
    padding: pageMargin,
    paddingHorizontal: pageMargin,
    paddingTop: pageMargin,
    paddingBottom: 95,
    backgroundColor: "white",
    fontSize: 12,
    // fontFamily: "Kiexvit",
    fontWeight: "normal",
  },
  content: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    marginBottom: 30,
    color: beavOrange,
    // fontFamily: "Stratum2",
    fontWeight: "light"
  },
  h1: {
    fontSize: 18,
    marginBottom: 10,
    color: beavOrange,
    // fontFamily: "Stratum2",
    alignSelf: "center",
  },
  h2: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    color: beavOrange,
    // fontFamily: "Stratum2"
  },
  bold: {
    fontWeight: "bold" 
  },
  fillableForm: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
  },
  fillableFormRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  fillableFormMultiInputSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginRight: 5,
  },
  fillableFormLabel: {
    marginRight: 5,
  },
  fillableFormInput: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  tableHeaading: {
    alignSelf: "center",
    marginBottom: 10,
  },
  tableColAlignCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    padding: 3,
  },
  tableColAlignLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "black",
    padding: 3,
  },
  noData: {
    alignSelf: "center",
    marginTop: 10,
  }
});

export default styles;