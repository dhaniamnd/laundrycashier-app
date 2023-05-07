import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        "ORDER ID", "DATE", "CUSTOMER'S NAME", "PHONE NUMBER", 
        "TYPE OF SERVICE",	"WEIGHT", "SERVICE COST", "COLLECTION DATE"
      ],
      widthArr: [100, 150, 160, 150, 150, 100, 180, 150]
    }
  }

  render() {
    const state = this.state;
    const tableData = [
        ['A001', '01-04-2023', 'Billie', '087866663456', 'Shoes', '2.0kg', 'Rp70.000,00', '07-04-2023'],
        ['A002', '04-04-2023', 'Max', '081299994444', 'T-Shirt', '4.5kg', 'Rp31.500,00', '09-04-2023'],
        ['A003', '06-04-2023', 'Jess', '087811112222', 'Curtain', '5.4kg', 'Rp108.000,00', '09-04-2023'],
        ['A004', '06-04-2023', 'Rory', '081122227777', 'Bedsheet', '10.2kg', 'Rp102.000,00', '09-04-2023'],
        ['A005', '09-04-2023', 'Emily', '089810102020', 'Dress', '1.1kg', 'Rp16.500,00', '12-04-2023'],
        ['A006', '12-04-2023', 'Ashley', '085134346565', 'T-Shirt', '3.9kg', 'Rp27.300,00', '15-04-2023'],
        ['A007', '12-04-2023', 'Jim', '081540409898', 'Suit', '5.0kg', 'Rp27.300,00', '15-04-2023'],
    ];

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#141414' }}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#141414'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, {backgroundColor: '#ffffff'}]}
                      textStyle={{ textAlign: 'center', fontWeight: 'normal'}}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#ffffff', borderRadius: 15 },
  header: { height: 40, backgroundColor: '#ffd700' },
  text: { textAlign: 'center', fontWeight: 'bold' },
  dataWrapper: { marginTop: -1 },
  row: { height: 30, backgroundColor: '#E7E6E1' }
});