<script>
import { ArrowUpIcon, ArrowRightIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
// import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * sobre-nosotros component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    // Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section
      class="bg-half d-table w-100"
      style="background: url('images/principal/fondo_sobre_nosotros.png')"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level title-heading">
              <h1 class="text-white title-dark">Sobre Nosotros</h1>
              <!-- <p class="text-white-50 para-desc mb-0 mx-auto">
                Para nosotros el descanso es muy importante, por ello trabajamos
                duro para crear unas laminas de calidad y resistentes.
              </p> -->
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Inicio</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Sobre Nosotros
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->

    <section class="section">
      <div class="container">
        <div class="row align-items-center" id="counter">
          <div class="col-md-6">
            <img
              src="images/principal/mix.png"
              class="img-fluid"
              alt="mix de imagenes"
            />
          </div>
          <!--end col-->

          <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="ml-lg-4">
              <div class="section-title">
                <h2 class="title mb-4">
                  <span class="text-primary">Qué hacemos?</span>
                </h2>
                <p class="text-muted">
                  Nuestra empresa siempre está en desarrollo continuo, a través
                  de la implementación de tecnologías modernas y una estrategia
                  de marketing dinámica, lo que permite la expansión de las
                  capacidades de producción y oferta.
                </p>
                <p class="text-muted">
                  En el período inicial de actividad,
                  <span class="text-primary font-weight-bold">Maderflex</span>
                  se centró exclusivamente en la exportación, pero la
                  oportunidad de participar como expositor en la Feria
                  Internacional Furnica en 2008 y 2009, dirigida, entre otros, a
                  fabricantes de componentes para muebles, creó una excelente
                  oportunidad para aparecer en el mercado interno Este paso
                  estratégico ha contribuido a la adquisición de muchos nuevos
                  clientes y al establecimiento de una cooperación a largo plazo
                  con muchas empresas, que continuamos con éxito hasta el día de
                  hoy.
                </p>
                <p class="text-muted">
                  Desde entonces, participamos regularmente en ferias de la
                  industria del mueble tanto en Polonia como en toda Europa
                  porque, como especialistas, nos aseguramos de estar siempre al
                  día con las tendencias y eventos actuales.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- Section Start -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h2 class="title mb-4">
                <span class="text-primary">Quiénes somos?</span>
              </h2>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-60">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-5">
            <div class="app-feature-shape-left position-relative">
              <div class="text-center text-md-left">
                <img
                  src="images/construction/t1.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
            <div class="section-title">
              <h3 class="title mb-3">Nombre 1</h3>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Digital Marketing Solutions for Tomorrow
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Our Talented & Experienced Marketing Agency
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Create your own skin to match your brand
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-60">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
            <div class="section-title">
              <h3 class="title mb-3">Nombre 2</h3>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Digital Marketing Solutions for Tomorrow
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Our Talented & Experienced Marketing Agency
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Create your own skin to match your brand
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-5 order-1 order-md-2">
            <div class="app-feature-shape-right position-relative">
              <div class="text-center text-md-right">
                <img
                  src="images/construction/t2.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-60">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-5">
            <div class="app-feature-shape-left position-relative">
              <div class="text-center text-md-left">
                <img
                  src="images/construction/t1.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
            <div class="section-title">
              <h3 class="title mb-3">Nombre 3</h3>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Digital Marketing Solutions for Tomorrow
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Our Talented & Experienced Marketing Agency
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Create your own skin to match your brand
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Section End -->

    <section class="section bg-light">
      <div class="container mt-60">
        <div class="row align-items-end mb-4 pb-4">
          <div class="col-md-8">
            <div class="section-title text-center text-md-left">
              <h2 class="title mb-4">
                <span class="text-primary">Nuestros Servicios</span>
              </h2>
              <p class="text-muted mb-0 para-desc">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <b-tabs
            vertical
            justified
            pills
            nav-class="bg-white p-3 mb-0 flex-column"
            nav-wrapper-class="col-md-4 mt-4"
            content-class="col-md-8 col-12  mt-4 pt-2"
          >
            <b-tab>
              <template v-slot:title>
                <div class="text-center pt-1 pb-1">
                  <h6 class="title font-weight-normal mb-0">Web Developing</h6>
                </div>
              </template>
              <img
                src="images/work/7.jpg"
                class="img-fluid rounded shadow"
                alt=""
              />
              <div class="mt-4">
                <p class="text-muted">
                  This is required when, for example, the final text is not yet
                  available. Dummy text is also known as 'fill text'. It is said
                  that song composers of the past used dummy texts as lyrics.
                </p>
                <a href="javascript:void(0)" class="text-primary"
                  >See More
                  <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                ></a>
              </div>
            </b-tab>
            <b-tab title-item-class="mt-2">
              <template v-slot:title>
                <div class="text-center pt-1 pb-1">
                  <h6 class="title font-weight-normal mb-0">
                    Database Analysis
                  </h6>
                </div>
              </template>
              <img
                src="images/work/8.jpg"
                class="img-fluid rounded shadow"
                alt=""
              />
              <div class="mt-4">
                <p class="text-muted">
                  This is required when, for example, the final text is not yet
                  available. Dummy text is also known as 'fill text'. It is said
                  that song composers of the past used dummy texts as lyrics.
                </p>
                <a href="javascript:void(0)" class="text-primary"
                  >See More
                  <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                ></a>
              </div>
            </b-tab>
            <b-tab title-item-class="mt-2">
              <template v-slot:title>
                <div class="text-center pt-1 pb-1">
                  <h6 class="title font-weight-normal mb-0">Server Security</h6>
                </div>
              </template>
              <img
                src="images/work/9.jpg"
                class="img-fluid rounded shadow"
                alt=""
              />
              <div class="mt-4">
                <p class="text-muted">
                  This is required when, for example, the final text is not yet
                  available. Dummy text is also known as 'fill text'. It is said
                  that song composers of the past used dummy texts as lyrics.
                </p>
                <a href="javascript:void(0)" class="text-primary"
                  >See More
                  <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                ></a>
              </div>
            </b-tab>
            <b-tab title-item-class="mt-2">
              <template v-slot:title>
                <div class="text-center pt-1 pb-1">
                  <h6 class="title font-weight-normal mb-0">Web Designing</h6>
                </div>
              </template>
              <img
                src="images/work/12.jpg"
                class="img-fluid rounded shadow"
                alt=""
              />
              <div class="mt-4">
                <p class="text-muted">
                  This is required when, for example, the final text is not yet
                  available. Dummy text is also known as 'fill text'. It is said
                  that song composers of the past used dummy texts as lyrics.
                </p>
                <a href="javascript:void(0)" class="text-primary"
                  >See More
                  <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                ></a>
              </div>
            </b-tab>
          </b-tabs>
          <!--end nav pills-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- Start -->
    <section class="section bg-light pt-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div
              class="video-solution-cta position-relative"
              style="z-index: 1"
            >
              <div class="position-relative">
                <img
                  src="images/cta-bg.jpg"
                  class="img-fluid rounded-md shadow-lg"
                  alt=""
                />
                <div class="play-icon">
                  <a
                    href="javascript: void(0);"
                    v-b-modal.modal
                    class="play-btn video-play-icon"
                  >
                    <i
                      class="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"
                    ></i>
                  </a>
                </div>
                <b-modal
                  id="modal"
                  hide-footer
                  size="lg"
                  header-close-variant="white"
                  header-class="border-0"
                  content-class="border-0"
                  centered
                >
                  <youtube
                    video-id="jNTZpfXYJa4"
                    ref="youtube"
                    width="750"
                    height="450"
                  ></youtube>
                </b-modal>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row -->
        <div class="feature-posts-placeholder bg-primary"></div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->

    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <Switcher />
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>

<style>
.modal-content {
  background-color: transparent;
}
</style>
