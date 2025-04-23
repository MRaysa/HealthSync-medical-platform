import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Updated to 12 distinct colors
const colors = [
  "#007bff", // Blue
  "#ffc107", // Yellow
  "#28a745", // Green
  "#dc3545", // Red
  "#fd7e14", // Orange
  "#6c757d", // Gray
  "#17a2b8", // Cyan
  "#6610f2", // Purple
  "#e83e8c", // Pink
  "#20c997", // Teal
  "#343a40", // Dark Gray
  "#ff6f61", // Coral
];

// Custom triangle bar shape
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width}, ${y + height} Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AppointmentsChart = ({ appointments }) => {
  const chartData = appointments?.map((doctor) => ({
    name: doctor.name,
    fee: doctor.fee,
  }));

  return (
    <div className="p-4 bg-white rounded-lg  border border-gray-200 mx-auto">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Dashed grid lines */}
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
          {/* X-axis with category names */}
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickLine={false}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          {/* Y-axis with numerical values */}
          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickLine={false}
            axisLine={{ stroke: "#e5e7eb" }}
            domain={[0, 1800]}
          />
          {/* Tooltip with Tailwind styling */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              fontSize: "12px",
            }}
            cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          />
          {/* Triangular bars with custom colors */}
          <Bar
            dataKey="fee"
            shape={<TriangleBar />}
            label={{ position: "top", fill: "#6b7280", fontSize: 12 }}
          >
            {chartData?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentsChart;
