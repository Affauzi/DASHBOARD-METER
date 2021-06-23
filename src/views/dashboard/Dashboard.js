import React, { lazy, useState } from "react";
import {
  // CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  // CProgress,
  CRow,
  // CCallout
} from "@coreui/react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { retrieveDataMeter } from "../../actions/dataMeter";

import { CIcon } from "@coreui/icons-react";

import MainChartExample from "../charts/MainChartExample.js";

// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = (props) => {
  //const dataMeterFix = props.dataMeterFix;
  const initialDataState = {
    loading: false,
    // no_meter: null,
    dataKwh: "",
    dataVoltage: "",
    dataCurrent: "",
  };

  const [dataMeter, setDataMeter] = useState(initialDataState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };

  const history = useHistory();

  const routeChange = () => {
    let path = `/Dashboard`;
    history.push(path);
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setDataMeter({ ...dataMeter, [name]: value });
  // };
  const CheckInfo = () => {
    const { kwh, voltage, current } = dataMeter;

    dispatch(retrieveDataMeter())
      .then((data) => {
        console.log(data[0].ActiveTotal);
        setDataMeter({
          dataKwh: data[0].ActiveTotal,
          dataVoltage: data[0].Voltage,
          dataCurrent: data[0].Current,
        });
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });

    console.log(dataMeter.dataKwh);
  };

  return (
    <>
      <div>
        <CRow>
          <CCol sm="6">
            <CCard>
              <CCardHeader>Total kWh</CCardHeader>
              <CCardBody>
                <p>{dataMeter.dataKwh}</p>
              </CCardBody>
              {/* <CCardFooter>Standard Footer.</CCardFooter> */}
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>Voltage</CCardHeader>
              <CCardBody>
                <p>{dataMeter.dataVoltage}</p>
              </CCardBody>
              {/* <CCardFooter>Standard Footer.</CCardFooter> */}
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>Current</CCardHeader>
              <CCardBody>
                <p>{dataMeter.dataCurrent}</p>
              </CCardBody>
              {/* <CCardFooter>Standard Footer.</CCardFooter> */}
            </CCard>
          </CCol>
          {/* <CCol sm="6">
            <CCard>
              <CCardHeader>Standard usage</CCardHeader>
              <CCardBody>This content is in card body component.</CCardBody>
              <CCardFooter>Standard Footer.</CCardFooter>
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>Standard usage</CCardHeader>
              <CCardBody>This content is in card body component.</CCardBody>
              <CCardFooter>Standard Footer.</CCardFooter>
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>Standard usage</CCardHeader>
              <CCardBody>This content is in card body component.</CCardBody>
              <CCardFooter>Standard Footer.</CCardFooter>
            </CCard>
          </CCol> */}
        </CRow>
      </div>
    </>
  );
};

export default Dashboard;
