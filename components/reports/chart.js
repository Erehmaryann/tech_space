import React, { Component } from "react";
import {
  BarChart,
  Bar,
  //   Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartStyles } from "./reportStyles";

export default class ReportChart extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "Jan",
        pv: this.props.data[0],
        amt: this.props.data[0],
      },
      {
        name: "Feb",
        pv: this.props.data[1],
        amt: this.props.data[1],
      },
      {
        name: "Mar",
        pv: this.props.data[2],
        amt: this.props.data[2],
        // amt: 40,
      },
      {
        name: "Apr",
        pv: this.props.data[3],
        amt: this.props.data[3],
      },
      {
        name: "May",
        pv: this.props.data[4],
        amt: this.props.data[4],
      },
      {
        name: "Jun",
        pv: this.props.data[5],
        amt: this.props.data[5],
      },
      {
        name: "Jul",
        pv: this.props.data[6],
        amt: this.props.data[6],
      },
      {
        name: "Aug",
        pv: this.props.data[7],
        amt: this.props.data[7],
      },
      {
        name: "Sep",
        pv: this.props.data[8],
        amt: this.props.data[8],
      },
      {
        name: "Oct",
        pv: this.props.data[9],
        amt: this.props.data[9],
      },
      {
        name: "Nov",
        pv: this.props.data[10],
        amt: this.props.data[10],
      },
      {
        name: "Dec",
        pv: this.props.data[11],
        amt: this.props.data[11],
      },
    ];
  }
  render() {
    return (
      <ChartStyles>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={672}
            height={291}
            data={this?.data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#f9f9f9" />
          </BarChart>
        </ResponsiveContainer>
      </ChartStyles>
    );
  }
}
