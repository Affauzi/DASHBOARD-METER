import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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
import { createUser } from "../../../actions/user";

const Register = () => {
  const initialUserState = {
    no_meter: null,
    password: null,
    re_password: null,
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
    let path = `/login`;
    history.push(path);
  };

  const saveUser = () => {
    const { no_meter, password, nama, status, re_password } = user;

    dispatch(createUser(no_meter, password, nama, status))
      .then((data) => {
        setUser({
          no_meter: data.no_meter,
          password: data.password,
          nama: data.nama,
          status: 1,
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      {submitted ? (
        <CButton color="success" block onClick={routeChange}>
          Akun Berhasil Dibuat
        </CButton>
      ) : (
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
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
                        value={user.no_meter}
                        onChange={handleInputChange}
                        name="no_meter"
                        placeholder="No Meter"
                        autoComplete="no_meter"
                        //id="no_meter"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        className="form-control"
                        id="nama"
                        required
                        value={user.nama}
                        onChange={handleInputChange}
                        name="nama"
                        placeholder="nama"
                        autoComplete="nama"
                        //id="nama"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
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
                        value={user.password}
                        onChange={handleInputChange}
                        name="password"
                        placeholder="password"
                        autoComplete="password"
                        //id="password"
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
                        id="re_password"
                        required
                        value={user.re_password}
                        onChange={handleInputChange}
                        name="re-password"
                        placeholder="Repeat password"
                        autoComplete="re-password"
                      />
                    </CInputGroup>
                    <CButton
                      color="success"
                      block
                      onClick={saveUser}
                      className="btn btn-success"
                    >
                      Create Account
                    </CButton>
                  </CForm>
                </CCardBody>
                {/* <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter> */}
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      )}
    </div>
  );
};

export default Register;

// <div className="c-app c-default-layout flex-row align-items-center">
//   <CContainer>
//     <CRow className="justify-content-center">
//       <CCol md="9" lg="7" xl="6">
//         <CCard className="mx-4">
//           <CCardBody className="p-4">
//             <CForm>
//               <h1>Register</h1>
//               <p className="text-muted">Create your account</p>
//               <CInputGroup className="mb-3">
//                 <CInputGroupPrepend>
//                   <CInputGroupText>
//                     <CIcon name="cil-user" />
//                   </CInputGroupText>
//                 </CInputGroupPrepend>
//                 <CInput
//                   type="text"
//                   placeholder="No Meter"
//                   autoComplete="no_meter"
//                   id="no_meter"
//                 />
//               </CInputGroup>
//               <CInputGroup className="mb-3">
//                 <CInputGroupPrepend>
//                   <CInputGroupText>@</CInputGroupText>
//                 </CInputGroupPrepend>
//                 <CInput
//                   type="text"
//                   placeholder="Nama"
//                   autoComplete="nama"
//                   id="nama"
//                 />
//               </CInputGroup>
//               <CInputGroup className="mb-3">
//                 <CInputGroupPrepend>
//                   <CInputGroupText>
//                     <CIcon name="cil-lock-locked" />
//                   </CInputGroupText>
//                 </CInputGroupPrepend>
//                 <CInput
//                   type="password"
//                   placeholder="Password"
//                   autoComplete="new-password"
//                   id="password"
//                 />
//               </CInputGroup>
//               <CInputGroup className="mb-4">
//                 <CInputGroupPrepend>
//                   <CInputGroupText>
//                     <CIcon name="cil-lock-locked" />
//                   </CInputGroupText>
//                 </CInputGroupPrepend>
//                 <CInput
//                   type="password"
//                   placeholder="Repeat password"
//                   autoComplete="new-password"
//                   id="re_password"
//                 />
//               </CInputGroup>
//               <CButton color="success" block>
//                 Create Account
//               </CButton>
//             </CForm>
//           </CCardBody>
//           {/* <CCardFooter className="p-4">
//                 <CRow>
//                   <CCol xs="12" sm="6">
//                     <CButton className="btn-facebook mb-1" block>
//                       <span>facebook</span>
//                     </CButton>
//                   </CCol>
//                   <CCol xs="12" sm="6">
//                     <CButton className="btn-twitter mb-1" block>
//                       <span>twitter</span>
//                     </CButton>
//                   </CCol>
//                 </CRow>
//               </CCardFooter> */}
//         </CCard>
//       </CCol>
//     </CRow>
//   </CContainer>
// </div>;
