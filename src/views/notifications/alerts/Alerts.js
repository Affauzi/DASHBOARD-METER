import React, { useState, useEffect } from "react";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CLink,
  CProgress,
  CRow,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import { paymentMeter } from "../../../actions/payment";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

const Alerts = () => {
  const initialPaymentState = {
    loading: false,
    no_meter: null,
  };

  const [user, setUser] = useState(initialPaymentState);
  const dispatch = useDispatch();

  const ClickConfirm = () => {
    const { no_meter } = user;

    dispatch(paymentMeter())
      .then((data) => {
        //console.log(data.no_meter);
        setUser({
          no_meter: data.no_meter,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    console.log(user.no_meter);
    //localStorage.setItem("user", JSON.stringify(user.no_meter));
    //sessionStorage.setItem("user", user.no_meter);
    // var url = window.location.pathname;
    // console.log("url:", url);
    //console.log("LOGIN BERHASIL");
    //routeChange();
  };

  return (
    <>
      <div>
        <CRow>
          <CCol sm="6">
            {/* <button onClick={CheckInfo}></button> */}
            <CCard>
              <CCardHeader>Konfirmasi Pembayaran</CCardHeader>
              <CCardBody>
                Klik Tombol di Bawah ini untuk mengkonfirmasi Pembayaran
              </CCardBody>
              <CCardFooter>
                {" "}
                <CButton onClick={ClickConfirm} color="primary">
                  Konfirmasi Pembayaran
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default Alerts;
