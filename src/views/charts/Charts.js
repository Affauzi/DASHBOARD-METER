import React from "react";
import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";
import { DocsLink } from "src/reusable";

const Charts = () => {
  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader>kWh Usage</CCardHeader>
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

      <CCard>
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

      <CCard>
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

      {/* <CCard>
        <CCardHeader></CCardHeader>
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

      <CCard>
        <CCardHeader>Line Chart</CCardHeader>
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

      <CCard>
        <CCardHeader>Line Chart</CCardHeader>
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
      </CCard> */}
    </CCardGroup>
  );
};

export default Charts;
