import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { 
  Provider as PaperProvider, Button, DefaultTheme, 
  Card, Text, TextInput, RadioButton 
} from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BarChart } from "react-native-chart-kit";

import TableExample from './DataTable';

import Dropdown11 from './Dropdown2';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000',
    accent: 'tomato',
    surface: 'gold',
    notification: 'blue',
  },
};

function OrderFormScreen() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  return (
    <ScrollView>

      <TextInput
        mode="outlined"
        label="Order ID"
        placeholder="Type your order ID here"
        left={<TextInput.Icon icon="account" />}
      />

      <Text></Text>

      <TextInput
        mode="outlined"
        label="Order Date"
        placeholder="dd/mm/yyyy"
        left={<TextInput.Icon icon="calendar" />}
      />

      <Text></Text>

      <TextInput
        mode="outlined"
        label="Name"
        placeholder="Type the customer's name here"
        left={<TextInput.Icon icon="account" />}
      />

      <Text></Text>

      <TextInput
        mode="outlined"
        label="Phone Number"
        placeholder="Type the customer's phone number"
        left={<TextInput.Icon icon="account" />}
      />

      <Text></Text>
     
      <TextInput
        mode="outlined"
        label="Pick Up Date"
        placeholder="dd/mm/yyyy"
        left={<TextInput.Icon icon="calendar" />}
      />

      <Text></Text>

      <Text>Type of Service</Text>

      <Text></Text>

      <CheckBox
      flex-start
      title="Dress"
      checked={check1}
      onPress={() => setCheck1(!check1)}
      />

      <CheckBox
      flex-start
      title="T-Shirt"
      checked={check2}
      onPress={() => setCheck2(!check2)}
      />

      <CheckBox
      flex-start
      title="Suit"
      checked={check3}
      onPress={() => setCheck3(!check3)}
      />

      <CheckBox
      flex-start
      title="Bedsheet"
      checked={check4}
      onPress={() => setCheck4(!check4)}
      />

      <CheckBox
      flex-start
      title="Curtain"
      checked={check5}
      onPress={() => setCheck5(!check5)}
      />

      <CheckBox
      flex-start
      title="Shoes"
      checked={check6}
      onPress={() => setCheck6(!check6)}
      />

      <Text></Text>

      <TextInput
        mode="outlined"
        label="Total Weight"
        placeholder="xx Kg"
        left={<TextInput.Icon icon="scale" />}
      />

      <Text></Text>

      <TextInput
        mode="outlined"
        label="Service Cost"
        placeholder="Rp xxx"
        left={<TextInput.Icon icon={() => <MaterialIcons name="attach-money" size={24} color="#141414" />} />}
      />

      <Text></Text>

      <TextInput
        mode="outlined"
        label="Approximate Pick Up Date"
        placeholder="dd/mm/yyyy"
        left={<TextInput.Icon icon="calendar" />}
      />

      <Text></Text>

      <View style={{alignItems:'center'}}>
        <Button  mode="elevated" buttonColor="white" onPress={() => console.log('pressed')}>
          Take In Order
        </Button>
      </View>

      <Text></Text>


    </ScrollView>
  )
}

function OrderCollectionScreen() {
  const [checked, setChecked] = React.useState('first');
  const [value, setValue] = React.useState('first');
  return (
    <View>
      <TextInput
        mode="outlined"
        label="Order ID"
        placeholder="Type your order ID here"
        left={<TextInput.Icon icon="account" />}
      />

      <Text></Text>

      <TextInput
        mode="outlined"
        label="Name"
        placeholder="Type the customer's name here"
        left={<TextInput.Icon icon="account" />}
      />

      <Text></Text>

      <TextInput
        mode="outlined"
        label="Pick Up Date"
        placeholder="dd/mm/yyyy"
        left={<TextInput.Icon icon="calendar" />}
      />

      <Text></Text>

      <Text>Payment</Text>

      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <RadioButton.Item
          label="Paid"
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onValueChange={() => setChecked('first')}
        />
        <RadioButton.Item
          label="Unpaid"
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onValueChange={() => setChecked('second')}
        />
      </RadioButton.Group>

      <Text></Text>

      <View style={{alignItems:'center'}}>
        <Button  mode="elevated" buttonColor="white" onPress={() => console.log('pressed')}>
          Take In Order
        </Button>
      </View>

      <Text></Text>

    </View>
  )
}

function ReportScreen() {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text></Text>
        <Text></Text>

        <Card>
          <Dropdown11/>
        </Card>

        <Text></Text>
        <Text></Text>

        <Card>
          <Card.Content>
            <ScrollView horizontal={true}>
              <BarChart
                data={{
                  labels: [ 'January','February','March','April' ],
                  datasets: [ { data: [8, 5, 7, 2],} ]
                }}
                width={400}
                height={250}
                showBarTops={false}
                fromZero={true}
                withInnerLines={false}
                yAxisLabel={'Rp'}
                chartConfig={{
                  backgroundColor: '#fffffff',
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  decimalPlaces: 0,
                  color: (opacity = 10) => `#141414`,
                  style: {
                    marginVertical: 15,
                    marginHorizontal: 15,
                  }
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: 15,
                  borderRadius: 15,
                  alignItems: 'center'
                }}
              />
            </ScrollView>

            <Text></Text>

            <ScrollView>
              <TableExample />
            </ScrollView>

          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ 
          tabBarStyle: ({ height:55 }), 
          tabBarActiveTintColor: 'blue' 
        }}
      >

        <Tab.Screen 
          name="Laundry Order Form" 
          component={OrderFormScreen} 
          options={{
            tabBarLabel: 'Order Form',
            tabBarLabelStyle: ({width: 400, fontSize: 10, flex: 0.5}),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="form-select" color={color} size={27} />
            ),
          }}
        />

        <Tab.Screen 
          name="Laundry Collection Form" 
          component={OrderCollectionScreen} 
          options={{
            tabBarLabel: 'Order Collection Form',
            tabBarLabelStyle: ({width: 400, fontSize: 10, flex: 0.5}),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="truck-fast-outline" color={color} size={27} />
            ),
          }}
        />

        <Tab.Screen 
          name="Report" 
          component={ReportScreen} 
          options={{
            tabBarLabel: 'Report',
            tabBarLabelStyle: ({width: 400, fontSize: 10, flex: 0.5}),
            tabBarColor: ({ theme }),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chart-bar" color={color} size={27} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}