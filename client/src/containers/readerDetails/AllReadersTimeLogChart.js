import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';
import { useSelector } from "react-redux";

ChartJS.register(
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Tooltip, 
  Legend
)

const AllReadersTimeLogChart = () => {
  const readers = useSelector((state) => state.userReaders.readers);
  const backgroundColors = ['aqua', 'blue', 'green', 'orange', 'purple'];

  if (!readers || readers.length === 0) {
    return;
  }

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: readers.map((reader, index) => ({
      label: reader.name,
      data: reader.readingTime,
      backgroundColor: backgroundColors[index % backgroundColors.length],
      borderColor: 'black',
      borderWidth: 1,
    })),
  };

  const options = {};

  return <Bar className="reading-chart" data={data} options={options} />;
}

export default AllReadersTimeLogChart;
