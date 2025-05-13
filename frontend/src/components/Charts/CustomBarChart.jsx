import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({ data }) => {
  // Function to alternate bar colors
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#065F46" : "#047857"; // Dark green shades
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-green-300">
          <p className="text-xs font-semibold text-green-800 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900">
              ${payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#E5E7EB" /> {/* Light gray grid */}
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#065F46" }} // Dark green
            stroke="none"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#065F46" }} // Dark green
            stroke="none"
          />
          <Tooltip content={CustomTooltip} />
          <Bar
            dataKey="amount"
            radius={[10, 10, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
