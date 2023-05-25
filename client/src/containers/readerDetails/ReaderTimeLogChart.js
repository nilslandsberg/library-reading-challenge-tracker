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
const ReaderTimeLogChart = () => {
  const reader = useSelector((state) => state.readerDetails.readerDetails)

  const data = {
    labels: [ 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: reader.name,
        data: reader.readingTime,
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  };

  const options = {}
  return (
    <Bar className="reading-chart"
      data={data}
      options={options}
      ></Bar>
  )
}

export default ReaderTimeLogChart