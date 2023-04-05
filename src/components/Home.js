import Navigasi from "./Navigation";
import Logo from "./../assets/halodoc-logo.webp"
import Cards from "./Cards";
import Dokter from "./../assets/Dokterc.png";
import Toko from "./../assets/Toko.png";
import Janji from "./../assets/Janji.png";
import Ramuan from "./../assets/Ramuan.png";
import Lab from "./../assets/Lab.png";
import Background from "./../assets/home-banner-v3.svg";
import Asuransi from "./Asuransi";
import Asur from "./../assets/Asur.png";
import Layanan from "./Layanan";
import Penawaran from "./Penawaran";
import Penawaran1 from "./../assets/Penawaran1.jpeg";
import Penawaran2 from "./../assets/Penawaran2.jpeg";
import Penawaran3 from "./../assets/Penawaran3.jpeg";
import Artikel from "./Artikel";
import Flu from "./../assets/bisakah-flu-babi-menular-ke-manusia-ini-faktanya-halodoc.jpg.webp";
import Menu from "./Menu";
import Stroke from "./../assets/Kenali-Manfaat-dan-Tips-Berpuasa-bagi-Pengidap-Stroke.png.webp";
import Monyet from "./../assets/Terkena-COVID-19-Cacar-Monyet-dan-HIV-Bersamaan-Ini-Penyebabnya.jpg.webp";
import Paru2 from "./../assets/de343ee1-82ad-4708-bee3-d562c337455b_article_image_url.webp";
import Obat from "./Obat";
import Perawatan from "./../assets/Perawatan.png";
import Suplemen from "./../assets/Supleman.png";
import Ibu from "./../assets/Ibu.png";
import Susu from "./../assets/Susu.png";
import Ramadhan from "./../assets/Ramadhan.png";
import Obat2 from "./Obat2";


const Home = () => {
  return (
    <div>
      <Navigasi image={Logo} />

      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
        }}>
        <div className="container">
          <div className="row">
            <div className="col-12 py-5">
              <h2 style={{ fontWeight: "600", fontSize: "35px" }}>
                Solusi Kesehatan Terlengkap{" "}
              </h2>
              <p style={{ color: "rgba(134,134,134,1)" }}>
                Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update
                informasi seputar <br /> kesehatan, semua bisa di Halodoc!{" "}
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="col-2">
                  <Cards image={Dokter} alt="Chat dengan Dokter" />
                </div>
                <div className="col-2">
                  <Cards image={Toko} alt="Toko Kesehatan" />
                </div>
                <div className="col-2">
                  <Cards image={Janji} alt="Buat Janji RS " />
                </div>
                <div className="col-2">
                  <Cards image={Ramuan} alt="Janji Medis " />
                </div>
                <div className="col-2">
                  <Cards image={Lab} alt="Layanan Home Lab " />
                </div>
              </div>
              <div className="my-3">
                <Asuransi image={Asur} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div style={{ marginBottom: "-55px" }} className="col-12 py-5">
            <h3
              style={{
                marginLeft: "20px",
                color: "balck",
                fontSize: "150%",
                fontWeight: "600",
              }}>
              Layanan Khusus
            </h3>
            <div className="d-flex gap-3">
              <div className="col-1">
                <Layanan image={Asur} text="Layanan Bidan" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Tes COVID-19" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Perawatan diabetes" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Kesehatan jantung" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Vaksinasi COVID-19" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Kesehatan kulit" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Kesehatan seksual" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Kesehatan mental" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Kesehatan hewan" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Parenting" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <h3
              style={{
                marginLeft: "20px",
                color: "balck",
                fontSize: "150%",
                fontWeight: "600",
              }}>
              Layanan Khusus
            </h3>
            <div className="d-flex gap-3">
              <div className="col-1">
                <Layanan image={Asur} text="Cek stres" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Kalender menstruasi" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Kalkulator BMI" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Kalender Kehamilan" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Risiko jantung" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Risiko diabetes" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Pengingat obat" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Tes depresi" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Tes gangguan kecemasan" />
              </div>
              <div className="col-1">
                <Layanan image={Asur} text="Layanan Bidan" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3
            style={{
              marginLeft: "20px",
              color: "balck",
              fontSize: "150%",
              fontWeight: "600",
              marginBottom: "30px",
            }}>
            Penawaran Menarik
          </h3>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <div>
            <Penawaran image={Penawaran1} />
          </div>
          <div>
            <Penawaran image={Penawaran2} />
          </div>
          <div>
            <Penawaran image={Penawaran3} />
          </div>
        </div>
        <div
          style={{ marginTop: "60px", marginBottom: "-90px" }}
          className="d-flex">
          <div>
            <h3
              style={{
                color: "balck",
                fontSize: "150%",
                fontWeight: "600",
                marginLeft: "13px",
              }}>
              Baca 100+ Artikel Baru{" "}
            </h3>
          </div>
          <div>
            <a
              style={{
                marginLeft: "749px",
                textDecoration: "none",
                color: "red",
                fontWeight: "600",
              }}
              href="https://www.halodoc.com/artikel">
              Lihat Semua
            </a>
          </div>
        </div>
        <div>
          <Menu />
        </div>
        <div className="d-flex gap-3 px-3 py-5">
          <Artikel image={Flu} />
          <Artikel image={Stroke} />
          <Artikel image={Monyet} />
          <Artikel image={Paru2} />
        </div>
        <div>
          <h3
            style={{
              color: "balck",
              fontSize: "150%",
              fontWeight: "600",
              marginLeft: "13px",
            }}>
            Obat & Vitamin{" "}
          </h3>
          <p
            style={{
              color: "rgba(134,134,134,1)",
              fontSize: "14px",
              marginLeft: "13px",
            }}>
            Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan
            obat dan vitamin di sini{" "}
          </p>
        </div>
        <div
          style={{ fontSize: "14px", marginLeft: "10px", fontWeight: "600" }}
          className="d-flex gap-4">
          <Obat image={Perawatan} text="Obat & Perawatan" />
          <Obat image={Suplemen} text="Vitamin & Suplemen" />
          <Obat image={Ibu} text=" Ibu & Anak " />
        </div>
        <br />
        <div
          style={{ fontSize: "14px", marginLeft: "10px", fontWeight: "600" }}
          className="d-flex gap-4">
          <Obat image={Susu} text="Susus" />
          <Obat image={Ramadhan} text="Ramadhan" />
          <Obat2 text=" LIHAT SEMUA " />
        </div>

        <div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
