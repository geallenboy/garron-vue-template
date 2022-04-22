import React from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [this.props.value],
      options: {
        chart: {
          height: 150,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              show: false,
              margin: 20,
              size: "90%",
              background: "#fff",
              dropShadow: {
                enabled: false,
              },
            },
            track: {
              background: "#F8F8F8",
              strokeWidth: "100%",
              margin: 0, // margin is in pixels
            },

            dataLabels: {
              show: false,
              value: {
                offsetY: -7,
                color: "#111",
                fontSize: "20px",
                show: true,
              },
            },
          },
        },
        fill: {
          colors: ["#be9a78", "#F1F1F1"],
        },
        stroke: {},
        labels: [""],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={150}
        />
      </div>
    );
  }
}

export default DonutChart;
