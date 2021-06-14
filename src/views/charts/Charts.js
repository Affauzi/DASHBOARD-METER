import React, { Component } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { connect } from "react-redux";
import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";
import { retrieveData } from "../../actions/data";
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";
import { DocsLink } from "src/reusable";

class Charts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.retrieveData();
  }

  render() {
    const { datas } = this.props;

    const datakWh = {
      label: "Data One",
      backgroundColor: "rgb(228,102,81,0.9)",
      data: [30, 39, 10, 50, 30, 70, 35],
    };

    const fetchData = (time) => {};
    return (
      <div className="charts">
        <div className={"btns-wrapper"}>
          <button onClick={() => fetchData("15Menit")}>15 Menit</button>
          <button>30 Menit</button>
          <button>1 Jam</button>
        </div>
        <div className="kWh usage">
          <CCardGroup>
            <CCard columns className="cols-2">
              <CCardHeader>kWh Usage</CCardHeader>
              <CCardBody>
                {/* <input onChange = {e => } */}
                <CChartLine
                  datasets={[datakWh]}
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
  }
}

const mapStateToProps = (state) => {
  return {
    datas: state.datas,
  };
};

export default connect(mapStateToProps, { retrieveData })(Charts);
