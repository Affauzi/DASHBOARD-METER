import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../actions/user";

const Login = () => {
  // const [no_meter, setNo_Meter] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [inputs, setInputs] = React.useState({
    no_meter: "",
    password: "",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const { no_meter, password } = inputs;

  const state = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      getUser({
        no_meter: inputs.no_meter,
        password: inputs.password,
        // nama: nama,
        loggedIn: true,
      })
    );
  };

  const handleChange = (e) => {
    const { no_meter, value } = e.target.value;
    setInputs((prevState) => ({ ...prevState, [no_meter]: value }));
    // this.setState({ [e.target]: e.target.value });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm name="form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        className={"form-control"}
                        id="no_meter"
                        name="no_meter"
                        value={inputs.no_meter}
                        placeholder="No Meter"
                        autoComplete="no_meter"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        //autoComplete="nometer"
                        // defaultValue="A"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        //defaultValue={"A"}
                        value={inputs.password}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (submitted && !password ? " is-invalid" : "")
                        }
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          type="submit"
                          color="primary"
                          className="px-4"
                          onClick={(e) => handleSubmit(e)}
                          //onClick={handleSubmit}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Silakan Buat Akun dengan No Meter untuk Login</p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
