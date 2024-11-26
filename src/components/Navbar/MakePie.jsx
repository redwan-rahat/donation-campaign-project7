
import { PieChart, Pie, Tooltip, Cell } from "recharts";





export default function MakePie({resutl1,resutl2}) {


  const val = 500
  const data = [
    { name: "Your Donation", value: parseFloat(resutl1), color:'rgb(52 211 153)' },
    { name: "Total Donation", value: parseFloat(resutl2) ,color: 'rgb(239 68 68)' },
   
  ];
  return (
    <div className=" my-44 ">
       <PieChart  className="m-auto hover:cursor-pointer "  width={500} height={400}>
       <Pie 
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            label
      >
      {
        data.map(val => <Cell fill={val.color}></Cell>)
      }
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
   
  );
}
