import React, { PureComponent } from "react";
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

const data = [
  {
    name: "Jan",
    pv: 10,
    amt: 20,
  },
  {
    name: "Feb",
    pv: 19,
    amt: 20,
  },
  {
    name: "Mar",
    pv: 32,
    amt: 40,
  },
  {
    name: "Apr",
    pv: 32,
    amt: 40,
  },
  {
    name: "May",
    pv: 28,
    amt: 30,
  },
  {
    name: "Jun",
    pv: 55,
    amt: 60,
  },
  {
    name: "Jul",
    pv: 48,
    amt: 50,
  },
  {
    name: "Aug",
    pv: 69,
    amt: 70,
  },
  {
    name: "Sep",
    pv: 55,
    amt: 60,
  },
  {
    name: "Oct",
    pv: 61,
    amt: 70,
  },
  {
    name: "Nov",
    pv: 50,
    amt: 60,
  },
  {
    name: "Dec",
    pv: 39,
    amt: 40,
  },
];

export default class ReportChart extends PureComponent {
  render() {
    return (
      <ChartStyles>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={672}
            height={291}
            data={data}
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
            <Bar dataKey="pv" fill="#F7F8F8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartStyles>
    );
  }
}
