'use client'
import React, { Component } from 'react';
import Chart from 'react-apexcharts';

interface State {
  options: any;
  series: number[];
  labels: string[];
}

class Donut extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          labels={this.state.labels}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donut;
