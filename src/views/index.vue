<script>
import {
  ArrowUpIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
  ChevronRightIcon,
  PlayIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import countTo from "vue-count-to";

import Navbar from "@/components/navbar";
// import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";

/**
 * index component
 */
export default {
  data() {
    return {
      slide: 0,
      teamData: [
        {
          image: "images/client/01.jpg",
          name: "Ronny Jofra",
          designation: "C.E.O",
        },
        {
          image: "images/client/04.jpg",
          name: "Micheal Carlo",
          designation: "Director",
        },
        {
          image: "images/client/02.jpg",
          name: "Aliana Rosy",
          designation: "Manager",
        },
        {
          image: "images/client/03.jpg",
          name: "Sofia Razaq",
          designation: "Developer",
        },
      ],
      testimonialData: [
        {
          id: 1,
          profile: "images/client/01.jpg",
          message:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          name: "Thomas Israel",
          designation: "C.E.O",
        },
        {
          id: 2,
          profile: "images/client/02.jpg",
          message:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          name: "Barbara McIntosh",
          designation: "M.D",
        },
        {
          id: 3,
          profile: "images/client/03.jpg",
          message:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          name: "Carl Oliver",
          designation: "P.A",
        },
        {
          id: 4,
          profile: "images/client/04.jpg",
          message:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          name: "Christa Smith",
          designation: "Manager",
        },
        {
          id: 5,
          profile: "images/client/05.jpg",
          message:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          name: "Dean Tolle",
          designation: "Developer",
        },
        {
          id: 6,
          profile: "images/client/05.jpg",
          message:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          name: "Jill Webb",
          designation: "Designer",
        },
      ],
    };
  },
  components: {
    Navbar,
    // Switcher,
    Footer,
    Team,
    Carousel,
    Slide,
    ArrowUpIcon,
    countTo,
    MailIcon,
    PhoneIcon,
    UserIcon,
    ChevronRightIcon,
    PlayIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    Testimonial,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section class="main-slider">
      <b-carousel fade id="carousel-1" v-model="slide" class="slides">
        <b-carousel-slide
          class="bg-slider d-flex align-items-center"
          style="background-image: url('images/MaderFlex.jpg')"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="title-heading text-white mt-4">
                  <!-- <h1 class="display-4 title-dark font-weight-bold mb-3">
                    MADERFLEX
                  </h1> -->
                  <!-- <p class="para-desc para-dark mx-auto text-light">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p> -->
                  <!-- <div class="mt-4">
                    <a href="#courses" class="btn btn-primary mt-2 mouse-down"
                      ><i class="mdi mdi-book-open-variant"></i> Find Courses</a
                    >
                  </div> -->
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </b-carousel-slide>
        <b-carousel-slide
          class="bg-slider d-flex align-items-center"
          style="background-image: url('images/MaderFlex2.jpg')"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="title-heading text-white mt-4">
                  <!-- <h1 class="display-4 title-dark font-weight-bold mb-3">
                    Better Education For A Better Future
                  </h1>
                  <p class="para-desc para-dark mx-auto text-light">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p> -->
                  <!-- <div class="mt-4">
                    <a href="#admission" class="btn btn-primary mt-2 mouse-down"
                      ><i class="mdi mdi-school"></i> Admission Now</a
                    >
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <!-- <b-carousel-slide
          class="bg-slider d-flex align-items-center"
          style="background-image: url('images/MaderFlex3.jpg')"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="title-heading text-white mt-4">
                  <h1 class="display-4 title-dark font-weight-bold mb-3">
                    Education Is The Key of Success
                  </h1>
                  <p class="para-desc para-dark mx-auto text-light">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div class="mt-4">
                    <a
                      href="#instructors"
                      class="btn btn-primary mt-2 mouse-down"
                      ><i class="mdi mdi-account"></i> Instructors</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide> -->
      </b-carousel>
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- FEATURES START -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="features-absolute">
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow"
                  >
                    <div class="icons text-primary text-center mx-auto">
                      <i
                        class="uil uil-align-justify d-block rounded h3 mb-0"
                      ></i>
                    </div>
                    <div class="card-body p-0 mt-4">
                      <a href="javascript:void(0)" class="title h5 text-dark">
                        Láminas para somieres</a
                      >
                      <p class="text-muted mt-2">
                        Láminas de calidad para somieres, las cuales se
                        encargarán de ofrecer un reposo perfecto para tu
                        colchón.
                      </p>
                      <router-link
                        to="/sobre-nosotros"
                        class="text-primary read-more"
                        >Saber más<i class="mdi mdi-chevron-right"></i
                      ></router-link>
                      <i
                        class="uil uil-align-justify text-primary full-img"
                      ></i>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div
                    class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow"
                  >
                    <div class="icons text-primary text-center mx-auto">
                      <i
                        class="uil uil-layer-group d-block rounded h3 mb-0"
                      ></i>
                    </div>
                    <div class="card-body p-0 mt-4">
                      <a href="javascript:void(0)" class="title h5 text-dark">
                        Chapas de madera</a
                      >
                      <p class="text-muted mt-2">
                        Gran variedad de chapas de madera de distintos tipos
                        como haya, abedul y chopo.
                      </p>
                      <router-link
                        to="/sobre-nosotros"
                        class="text-primary read-more"
                        >Saber más<i class="mdi mdi-chevron-right"></i
                      ></router-link>
                      <i class="uil uil-layer-group text-primary full-img"></i>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div
                    class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow"
                  >
                    <div class="icons text-primary text-center mx-auto">
                      <i class="uil uil-bed d-block rounded h3 mb-0"></i>
                    </div>
                    <div class="card-body p-0 mt-4">
                      <a href="javascript:void(0)" class="title h5 text-dark">
                        Patas de metal</a
                      >
                      <p class="text-muted mt-2">
                        Patas de hierro resistentes y ajustables, de varias
                        medidas para un mayor confort.
                      </p>
                      <router-link
                        to="/sobre-nosotros"
                        class="text-primary read-more"
                        >Saber más<i class="mdi mdi-chevron-right"></i
                      ></router-link>
                      <i class="uil uil-bed text-primary full-img"></i>
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- FEATURES END -->

    <!-- About Start -->
    <section class="section pt-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 col-12">
            <img
              src="images/principal/mock_mf.png"
              class="img-fluid shadow rounded"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-4">
              <h2 class="title mb-4">
                <span class="text-primary">Nuestra Historia</span>
              </h2>
              <p class="text-muted">
                Nuestra empresa siempre está en desarrollo continuo, a través de
                la implementación de tecnologías modernas y una estrategia de
                marketing dinámica, lo que permite la expansión de las
                capacidades de producción y oferta.
              </p>
              <p class="text-muted">
                En el período inicial de actividad,
                <span class="text-primary font-weight-bold">Maderflex</span>
                se centró exclusivamente en la exportación, pero la oportunidad
                de participar como expositor en la Feria Internacional Furnica
                en 2008 y 2009, dirigida, entre otros, a fabricantes de
                componentes para muebles, creó una excelente oportunidad para
                aparecer en el mercado interno Este paso estratégico ha
                contribuido a la adquisición de muchos nuevos clientes y al
                establecimiento de una cooperación a largo plazo con muchas
                empresas, que continuamos con éxito hasta el día de hoy.
              </p>
              <p class="text-muted">
                Desde entonces, participamos regularmente en ferias de la
                industria del mueble tanto en Polonia como en toda Europa
                porque, como especialistas, nos aseguramos de estar siempre al
                día con las tendencias y eventos actuales.
              </p>
              <!-- <a href="javascript:void(0)" class="btn btn-outline-primary mt-3"
                >Admission Now</a
              > -->
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--enc container-->
    </section>
    <!--end section-->
    <!-- About End -->

    <!-- Start CTA -->
    <div class="container-fluid mt-60">
      <div
        class="rounded py-5"
        style="background: url('images/principal/laminas.png') fixed"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h2 class="font-weight-bold mb-4">
                  Ofrecemos
                  <span class="text-primary font-weight-bold"
                    >chapas de haya</span
                  >
                  y<br />
                  de madera contrachapada.
                </h2>
                <p class="para-desc para-white mb-0">
                  Además del producto,
                  <span class="text-primary font-weight-bold">Maderflex</span>
                  también ofrece soporte técnico constante, consultas y
                  asistencia en la solución de problemas. Al proporcionar
                  servicios integrales, todavía atrae a nuevos clientes.
                </p>
                <div class="mt-4">
                  <router-link to="/sobre-nosotros" class="btn btn-primary"
                    >Saber más</router-link
                  >
                </div>
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--end container-->
      </div>
    </div>
    <!--end container-->
    <!-- End CTA -->

    <!-- About Start -->
    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <div class="row align-items-center">
            <div class="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div
                class="card work-container work-modern overflow-hidden rounded border-0 shadow-md"
              >
                <div class="card-body p-0">
                  <img
                    src="images/principal/palet.png"
                    class="img-fluid"
                    alt="work-image"
                  />
                  <div class="overlay-work bg-dark"></div>
                  <div class="content">
                    <a
                      href="javascript:void(0)"
                      class="title text-white d-block font-weight-bold"
                      >Palet con maderas</a
                    >
                    <!-- <small class="text-light">IT & Software</small> -->
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-6">
              <div class="row">
                <div class="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div
                    class="card work-container work-modern overflow-hidden rounded border-0 shadow-md"
                  >
                    <div class="card-body p-0">
                      <img
                        src="images/principal/laminas_finas.png"
                        class="img-fluid"
                        alt="work-image"
                      />
                      <div class="overlay-work bg-dark"></div>
                      <div class="content">
                        <a
                          href="javascript:void(0)"
                          class="title text-white d-block font-weight-bold"
                          >Láminas de madera</a
                        >
                        <!-- <small class="text-light">Engineering</small> -->
                      </div>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-lg-12 col-md-12 mt-4 pt-2">
                  <div
                    class="card work-container work-modern overflow-hidden rounded border-0 shadow-md"
                  >
                    <div class="card-body p-0">
                      <img
                        src="images/principal/troncos.png"
                        class="img-fluid"
                        alt="work-image"
                      />
                      <div class="overlay-work bg-dark"></div>
                      <div class="content">
                        <a
                          href="javascript:void(0)"
                          class="title text-white d-block font-weight-bold"
                          >Troncos matería prima</a
                        >
                        <!-- <small class="text-light">C.A.</small> -->
                      </div>
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--end col-->

        <div class="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
          <div class="ml-lg-4">
            <div class="section-title mb-4 pb-2">
              <h2 class="title mb-4">
                <span class="text-primary"
                  >Chapa de haya cortada perifericamente</span
                >
              </h2>
              <p class="text-muted para-desc">
                Las chapas que ofrecemos se obtienen a partir de madera de haya
                de origen nacional y extranjero.
              </p>
              <p class="text-muted para-desc mb-3">
                Nuestra oferta también incluye productos con la marca FSC®, lo
                que significa que la madera obtenida para su producción proviene
                de bosques certificados FSC y otras fuentes controladas.
              </p>
              <p class="text-muted para-desc mb-0">
                Las molduras se fabrican por encargo, por lo que cada lote de
                producción se adapta a las necesidades individuales de nuestros
                clientes.
              </p>
            </div>

            <div class="watch-video mt-4 pt-2">
              <router-link to="/sobre-nosotros" class="btn btn-primary mb-2"
                >Saber más<chevron-right-icon
                  class="fea icon-sm"
                ></chevron-right-icon
              ></router-link>
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
      <!--end row-->
    </div>
    <!--end container-->

    <!-- Partners Start -->
    <section class="py-4 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/amazon.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/google.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/lenovo.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/paypal.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/shopify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/spotify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Partners End -->
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

<style scoped>
::v-deep .carousel-caption {
  display: contents;
}

::v-deep .modal-content {
  background-color: transparent;
}
</style>
