import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../assets/css/bootstrap.min.css";

const data = [
    { name: 'Jan', value: 2400, previous: 1800 },
    { name: 'Feb', value: 1398, previous: 1600 },
    { name: 'Mar', value: 9800, previous: 7200 },
    { name: 'Apr', value: 3908, previous: 3000 },
    { name: 'May', value: 4800, previous: 4100 },
    { name: 'Jun', value: 3800, previous: 4300 },
    { name: 'Jul', value: 4300, previous: 3800 },
];
const tasks = [
    { task: 'Prepare client report', due: '07/26/2024' },
    { task: 'Review ad performance', due: '07/26/2024' },
    { task: 'Plan new campaign', due: '07/27/2024' },
  ];

const CampaignOverview = () => {
  return (
    <div className="card p-6 rounded-xl w-full">
      {/* <div className='flex flex-row'> */}
        <h2 className="text-xl font-semibold mb-9 text-[#2a3547]">Campaign Overview</h2>
        {/* <div className='ml-10 flex gap-2'> 
            Label
        </div>
      </div>*/}

      {/* Metric Labels */}
      <div className="flex gap-6 mb-9 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#8ecae6]"></span>
          Impressions
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#219ebc]"></span>
          Clicks
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#023047]"></span>
          Conversions
        </div>
      </div>

      {/* Area Chart */}
      {/* <ResponsiveContainer className="w-full pb-5 border-b border-gray-300" width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorImpr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8ecae6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8ecae6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorClick" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#219ebc" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#219ebc" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorConv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#023047" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#023047" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Impressions" stroke="#8ecae6" fillOpacity={1} fill="url(#colorImpr)" />
          <Area type="monotone" dataKey="Clicks" stroke="#219ebc" fillOpacity={1} fill="url(#colorClick)" />
          <Area type="monotone" dataKey="Conversions" stroke="#023047" fillOpacity={1} fill="url(#colorConv)" />
        </AreaChart>
      </ResponsiveContainer> */}
      <ResponsiveContainer className=" pb-5 border-b border-gray-300" width="100%" height="100%">
        <AreaChart
            data={data}
            margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#3b82f6" 
            fill="url(#colorValue)" 
            strokeWidth={2} 
            />
            <Area 
            type="monotone" 
            dataKey="previous" 
            stroke="#94a3b8" 
            fill="url(#colorPrevious)" 
            strokeWidth={2} 
            strokeDasharray="3 3"
            />
            <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
            </linearGradient>
            </defs>
        </AreaChart>
    </ResponsiveContainer>
      <div className="mt-2">
        <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-gray-300 text-[#2a3547] ">Summary Overview</h3>
        <ul className="space-y-2">
          {tasks.map((item, index) => (
            <li key={index} className="flex justify-between !mb-[0.9rem] text-sm">
                <div className='flex'>
                    <span className='w-[8px] h-[8px] text-[#fff] bg-blue-400 rounded-[50%] mr-[12px] mt-1'></span>
                    {item.task}
                </div>
              <span className="text-gray-500">{item.due}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CampaignOverview;



