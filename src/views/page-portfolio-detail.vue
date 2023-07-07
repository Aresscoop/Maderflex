<script>
import {
  ArrowUpIcon,
  MailIcon,
  UserIcon,
  MessageCircleIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
// import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-work-detail component
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
    MailIcon,
    UserIcon,
    MessageCircleIcon,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section
      class="bg-half d-table w-100"
      style="background: url('images/principal/fondo_contacto.png')"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level title-heading">
              <h1 class="text-white title-dark">Producto</h1>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Inicio</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Producto
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

    <!-- Start Work Detail -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <img
              src="images/work/single.jpg"
              class="img-fluid rounded"
              alt=""
            />
          </div>

          <div class="col-md-10 mt-4 pt-2">
            <div class="bg-light rounded p-4">
              <h2 class="title mb-4">
                <span class="text-primary">Nuestros Productos</span>
              </h2>
              <p class="text-muted font-italic mb-0">
                " One disadvantage of Lorum Ipsum is that in Latin certain
                letters appear more frequently than others - which creates a
                distinct visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized; this means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces, it sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
                "
              </p>
            </div>

            <div class="row">
              <div class="col-md-6 mt-4 pt-2">
                <img src="images/work/2.jpg" class="img-fluid rounded" alt="" />
              </div>

              <div class="col-md-6 mt-4 pt-2">
                <img src="images/work/3.jpg" class="img-fluid rounded" alt="" />
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-lg-6 mt-4 pt-2">
                <div class="card work-details rounded bg-light border-0">
                  <div class="card-body">
                    <h5 class="card-title border-bottom pb-3 mb-3">
                      Info. del Producto
                    </h5>
                    <dl class="row mb-0">
                      <dt class="col-md-4 col-5">Material:</dt>
                      <dd class="col-md-8 col-7 text-muted">Madera de Haya</dd>

                      <dt class="col-md-4 col-5">Categoría:</dt>
                      <dd class="col-md-8 col-7 text-muted">
                        Láminas para somieres
                      </dd>

                      <dt class="col-md-4 col-5">Variedades:</dt>
                      <dd class="col-md-8 col-7 text-muted">
                        Madera de pino, de roble, etc.
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4 pt-2">
                <img src="images/work/6.jpg" class="img-fluid rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 pt-4 justify-content-center">
        <div class="col-12 text-center">
          <div class="section-title">
            <h2 class="title mb-4">
              <span class="text-primary">Tienes alguna duda? Contáctanos!</span>
            </h2>
            <p class="text-muted para-desc mx-auto">
              Si necesitas más información sobre nuestros productos, tienes
              alguna duda o necesitas un presupuesto, ponte en contacto con
              nosotros.
            </p>
            <router-link to="/contacto" class="btn btn-primary mt-4"
              ><i class="mdi mdi-phone"></i> Contáctanos!</router-link
            >
          </div>
        </div>
        <!--end col-->
      </div>
    </section>
    <!-- End Work Detail -->
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
