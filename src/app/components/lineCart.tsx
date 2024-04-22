"use client"

import React, { useState, useEffect } from "react"

const DataChart = ({...props}) => {
  const [Chart, setChart] = useState<any>()
  const hasWindow = typeof window !== "undefined"

  useEffect(() => {
    if (hasWindow) {
      import("react-apexcharts").then((mod) => {
        setChart(() => mod.default)
      })
    }
  }, [hasWindow])

  const chartData: any = {
    series: [
      {
        name: "Wallet Value (in USD)",
        data: [5000, 5500, 6000, 5800, 3200],
      },
    ],
    options: {
      chart: {
        height: 200,
        type: "line",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
      colors: ["#5A67D8"], 
    
    },
  
  }

  


  return (
    <div>
      <h1 className="text-xl font-bold">{props.Label ? props.Label : "Money Flow"}</h1>
      {Chart && hasWindow && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={360}
        />
      )}
    </div>
  )
}

export default DataChart