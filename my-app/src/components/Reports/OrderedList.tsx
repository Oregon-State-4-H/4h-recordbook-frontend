import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  itemNumber: {
    marginRight: 10,
  },
  item: {
    flex: 1,
  },
  spaceAfter: {
    marginBottom: 10,
  }
});

/**
 * Ordered list component
 * @param {Array} items - List of items to display
 * @param {Boolean} spaceAfter - (Optional) Add space after each item. Default is false
 * @returns {JSX.Element}
 * @example <OrderedList items={['Item 1', 'Item 2'], spaceAfter={true}}/>
 */

interface OrderedListProps {
  items: React.JSX.Element[],
  spaceAfter: boolean,
}

export default function OrderedList({items, spaceAfter = false}: OrderedListProps) {
  if (spaceAfter) {
    return (
      <View>
        {items.map((item, index) => (
          <View style={[styles.row, styles.spaceAfter]} key={index}>
            <Text style={styles.itemNumber}>{index + 1}.</Text>
            <View style={styles.item}>{item}</View>
          </View>
        ))}
      </View>
    )
  } else {
    return (
      <View>
        {items.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.itemNumber}>{index + 1}</Text>
            <View style={styles.item}>{item}</View>
          </View>
        ))}
      </View>
    )
  }
};
