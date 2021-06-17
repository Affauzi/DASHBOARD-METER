import React, { Component } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { connect, useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";
import { retrieveData } from "../../actions/dataKWh";
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";
import { DocsLink } from "src/reusable";
import { time } from "echarts/core";

const Charts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.dataGraphics);
  console.log("state data;", state.data);
  const loading = true;
  const [num, setNum] = React.useState(15);
  const fetchData = (time) => {
    dispatch(retrieveData({ time: time, number: num }));
  };

  // const data = {
  //   label: "Voltage",
  //   backgroundColor: "rgb(228,102,81,0.9)",
  //   data: [30, 39, 10, 50, 30, 70, 35],
  // };
  return (
    <div className="charts">
      <div className={"btns-wrapper"}>
        <button onClick={() => fetchData("15Menit")}>15 Menit</button>
        <button onClick={() => fetchData("30Menit")}>30 Menit</button>
        <button onClick={() => fetchData("1Jam")}>1 Jam</button>

        <input onChange={(e) => setNum(e.target.value)} />
        {loading && <p>Loading ....</p>}
      </div>
      <div className="kWh usage">
        <CCardGroup>
          <CCard columns className="cols-2">
            <CCardHeader>kWh Usage</CCardHeader>
            <CCardBody>
              {/* <input onChange = {e => } */}
              <CChartLine
                datasets={state.data.datasets}
                labels={state.data.labels}
              />
            </CCardBody>
          </CCard>
        </CCardGroup>
      </div>

      <div className="current">
        <CCardGroup>
          <CCard columns className="cols-2">
            <CCardHeader>Voltage</CCardHeader>
            <CCardBody>
              <CChartLine
                datasets={[
                  {
                    label: "Data One",
                    backgroundColor: "rgb(228,102,81,0.9)",
                    data: [30, 39, 10, 50, 30, 70, 35],
                  },
                  {
                    label: "Data Two",
                    backgroundColor: "rgb(0,216,255,0.9)",
                    data: [39, 80, 40, 35, 40, 20, 45],
                  },
                ]}
                options={{
                  tooltips: {
                    enabled: true,
                  },
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCardGroup>
      </div>
      <div className="current">
        <CCardGroup>
          <CCard columns className="cols-2">
            <CCardHeader>Current</CCardHeader>
            <CCardBody>
              <CChartLine
                datasets={[
                  {
                    label: "Data One",
                    backgroundColor: "rgb(228,102,81,0.9)",
                    data: [30, 39, 10, 50, 30, 70, 35],
                  },
                ]}
                options={{
                  tooltips: {
                    enabled: true,
                  },
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCardGroup>
      </div>
    </div>
    // <div className = "charts">

    // </div>
    // <div className = "charts">

    // </div>
  );
};

export default Charts;
