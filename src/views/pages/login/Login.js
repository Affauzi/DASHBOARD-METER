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
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../actions/user";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const Login = () => {
  const initialUserState = {
    loading: false,
    no_meter: null,
    password: null,
    nama: null,
    status: 1,
  };

  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const history = useHistory();

  const routeChange = () => {
    let path = `/Dashboard`;
    history.push(path);
  };

  const ClickLogin = () => {
    const { no_meter, password } = user;

    dispatch(loginUser(no_meter, password))
      .then((data) => {
        //console.log(data.no_meter);
        setUser({
          no_meter: data.no_meter,
          password: data.password,
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    console.log(user.no_meter);
    //localStorage.setItem("user", JSON.stringify(user.no_meter));
    sessionStorage.setItem("user", user.no_meter);
    // var url = window.location.pathname;
    // console.log("url:", url);
    //console.log("LOGIN BERHASIL");
    //routeChange();
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      {submitted ? (
        <CButton color="success" block onClick={routeChange}>
          Berhasil Login
        </CButton>
      ) : (
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm name="form">
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
                          className="form-control"
                          id="no_meter"
                          required
                          value={user.no_meter || ""}
                          onChange={handleInputChange}
                          name="no_meter"
                          placeholder="No Meter"
                          autoComplete="no_meter"
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
                          className="form-control"
                          id="password"
                          required
                          value={user.password || ""}
                          onChange={handleInputChange}
                          name="password"
                          placeholder="password"
                          autoComplete="password"
                          // className={
                          //   "form-control" +
                          //   (submitted && !password ? " is-invalid" : "")
                          // }
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            // type="submit"
                            color="primary"
                            className="px-4"
                            block
                            onClick={ClickLogin}
                            //onClick={handleSubmit}
                            className="btn btn-success"
                          >
                            Login
                          </CButton>
                        </CCol>
                        {/* <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol> */}
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
      )}
    </div>
  );
};

export default Login;
