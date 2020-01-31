import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Styles from './style';
import {LineChart, PieChart} from 'react-native-chart-kit';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Info',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });

  render() {
    const data = [
      {
        name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Toronto',
        population: 2800000,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Beijing',
        population: 527612,
        color: 'red',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'New York',
        population: 8538000,
        color: 'green',
        legendFontColor: 'green',
        legendFontSize: 15,
      },
      {
        name: 'Moscow',
        population: 11920000,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];

    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
    };
    return (
      <View>
        <View>
          <Text>Chart GGG</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      </View>
    );
  }
}
