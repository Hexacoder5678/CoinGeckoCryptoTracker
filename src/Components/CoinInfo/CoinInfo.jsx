import { Line } from "react-chartjs-2";
import Alert from "../Alert/Alert";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }) {

  const chartDays=[
    {
    label:'24 Hours',
    value:1
  },
  {
    label:'7 Days',
    value:7
  },
  {
    label:'30 Days',
    value:30
  },
  {
    label:'90 Days',
    value:90
  },
  {
    label:'365 Days',
    value:365
  },
  ]

  function handleDayChange(e){
    const value=Number(e.target.value);
    if(value==1){
      setCoinInterval('');
    }
    else {
      setCoinInterval('daily');
    }
    setDays(value);
  }
Chart.register(CategoryScale);
  
  if (!historicData) {
    return <Alert message="No data available" type="info" />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 mt-6 ">
      <div className="h-[500px] w-full">
      <Line
        data={{
          labels: historicData.prices.map((coinPrice) => {
            const date = new Date(coinPrice[0]);
            const time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;

            return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              label: `Price (Past ${days} ${days === 1 ? "Day" : "Days"}) in ${currency.toUpperCase()}`,
              data: historicData.prices.map((coinPrice) => coinPrice[1]),
              borderColor: "rgb(75, 192, 192)",
              tension: 0.3,
            },
          ],
        }}
        options={{
          responsive:true,
          maintainAspectRatio:false,
          elements:{
            point:{
              radius:0
            }
          }
        }}
      />
      </div>
      <div className="flex justify-center w-full mt-5">
        <select className="w-full select select-primary max-w-x5" onChange={handleDayChange}>
      {chartDays.map((d,index)=>{
        return(
          <option selected={days==d.value} key={index} value={d.value} > {d.label}</option>
        )
      })}
      </select>
      </div>
    </div>
  );
}

export default CoinInfo;
