import { useEffect, useState } from 'react';
import { useUserStats } from '../../../providers/UserStatsProvider';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Import Filler plugin
} from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Register Filler plugin
);

const LineChart = () => {
  const down = (ctx, value) => (ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined);

  const { chartData } = useUserStats();
  const [config, setConfig] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: '#F8BF60',
        backgroundColor: '#1C2127',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(0, 0, 0, 0)', // Set point color to transparent
        pointBorderColor: 'rgba(0, 0, 0, 0)', // Set point border color to transparent
        segment: {
          borderColor: (ctx) => down(ctx, 'white')
        },
        spanGaps: true
      }
    ]
  });
  useEffect(() => {
    setConfig({
      labels: chartData.map(() => '3850'),
      datasets: [
        {
          data: chartData,
          backgroundColor: '#1C2127',
          borderColor: '#F8BF60',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)', // Set point color to transparent
          pointBorderColor: 'rgba(0, 0, 0, 0)', // Set point border color to transparent
          borderWidth: 1,
          segment: {
            borderColor: (ctx) => down(ctx, 'white')
          },
          spanGaps: true
        }
      ]
    });
  }, [chartData]);
  return (
    <div
      className="mx-[20px] flex justify-center w-full bg-[#1C2127] rounded-[8px]
        xl:pl-[20px] xl:pt-[20px] xl:pb-[10px]
        lg:pl-[16px] lg:pt-[16px] lg:pb-[8px]
        md:pl-[12px] md:pt-[12px] md:pb-[6px]
        pl-[5px] pt-[5px] pb-[5px]
        "
    >
      <Line
        data={config}
        width={500}
        options={{
          plugins: {
            title: {
              display: false
            },
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display: true,
                color: '#2c3137' // Set the color of the x-axis grid lines
              },
              ticks: {
                color: 'white',
                font: {
                  family: 'Montserrat'
                }
              }
            },
            y: {
              grid: {
                display: true,
                color: '#2c3137',
                drawTicks: false
              },
              ticks: {
                color: 'white',
                font: {
                  family: 'Montserrat'
                },
                callback: function (value) {
                  return `${value}K`;
                },
                padding: 10,
                stepSize: 5
              }
            }
          }
        }}
      />
    </div>
  );
};

export default LineChart;
