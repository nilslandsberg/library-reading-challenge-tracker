import { useContext } from "react"
import ReaderContext from "../contexts/ReaderContext"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';

const ReaderTimeLogChart = () => {
  const reader = useContext(ReaderContext);

}

export default ReaderTimeLogChart