import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Logo from "./../assets/halodoc-footer-logo.webp";
import Plays from "./../assets/google-play-badge.png"

export default function App(props) {
  return (
    <MDBFooter
      style={{ backgroundColor: "#4656Be" }}
      className="text-center text-lg-start text-muted mt-5">
      <section className="mx-5 d-flex justify-content-center justify-content-lg-between p-4">
        <div style={{}} className="me-5  mx-5 mt-3">
          <img style={{ width: "50%"}} src={Logo} />
        </div>
      </section>

      <section style={{marginTop: "-30px", color:"white", }} className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="">
            <MDBCol md="2" lg="" xl="" className=" mb-4">
              <h6 style={{fontWeight:"600", paddingBottom: "5px"}}>Map Site</h6>
              <p>
                FAQ
              </p>
              <p>
              Blog
              </p>
              <p>
              Syarat & Ketentuan
              </p>
              <p>
              Kebijakan Privasi
              </p>
              <p>
              Promo
              </p>
            </MDBCol>
    
            <MDBCol md="2" lg="" xl="" className="my-5">
              <p>
                <a href="#!" className="text-reset">
                Karir
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Security
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Media
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Corporate Partnership
                </a>
              </p>
            </MDBCol>

            <MDBCol md="5" lg="" xl="" className="">
              <h6 style={{fontWeight:"600", paddingBottom: "5px"}}>Layanan Pengaduan Konsumen </h6>
              <p>
                <a href="#!" className="text-reset">
                <b>PT Media Dokter Investama</b><br />
Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan
help@halodoc.com / 021-5095-9900
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
Kementerian Perdagangan Republik Indonesia
0853 1111 1010 (WhatsApp) 
                </a>
              </p>
            </MDBCol>

            <MDBCol md="" lg="" xl="" className="mx-auto mb-md-0 mb-4">
              <h6 className="mb-3">
              <b>Download App di</b>
              </h6>
              <div className="mb-3" style={{display:"flex"}}>
                <img style={{width:"50%"}} src={Plays}/>
                <img style={{width:"50%"}} src={Plays}/>
              </div>              
              <h6 className="mb-3">
              <b>Apakah Kamu dokter?</b>
              </h6>
              <button style={{borderRadius: "2pxn",padding:"5px 20px", border:"none", color:"white",backgroundColor:"rgba(232,14,81,1)", fontWeight: "600"}}>DAFTAR</button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 d-flex"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          justifyContent: "space-around",
          color:"white"
        }}>
        <div>© 2021 Copyright:</div>
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}
