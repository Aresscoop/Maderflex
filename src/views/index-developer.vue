<script>
import { ArrowUpIcon,ArrowRightIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-developer component
 */
export default {
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon
  },
};
</script>

<template>
  <div>
    <Navbar :isIcons="true"/>

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12">
            <div class="title-heading">
              <span class="badge badge-pill badge-soft-primary"
                >Development</span
              >
              <h1 class="font-weight-bold mt-2 mb-3">
                A Complete <br />
                Developer Toolset
              </h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary mr-2"
                  >Get Started</a
                >
                <a href="javascript:void(0)" class="btn btn-outline-primary"
                  >Documentation</a
                >
              </div>
              <p class="text-muted mb-0 mt-3">Current Version: v2.6.0</p>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <img
              src="images/digital/about.png"
              class="img-fluid d-block mx-auto"
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

    <!-- Partners start -->
    <section class="py-4 border-top bg-light">
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

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Key Features</h4>
              <p class="para-desc text-muted mb-0">
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

        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"
            >
              <div class="icons text-primary text-center">
                <i class="uil uil-layer-group d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Modular</a
                >
                <p class="text-muted mt-2">
                  Composed in a pseudo-Latin language which more or less
                  corresponds.
                </p>
                <a href="javascript:void(0)" class="text-primary read-more"
                  >Read More <i class="mdi mdi-chevron-right"></i
                ></a>
                <i class="uil uil-layer-group text-primary full-img"></i>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"
            >
              <div class="icons text-primary text-center">
                <i class="uil uil-airplay d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Responsive</a
                >
                <p class="text-muted mt-2">
                  Composed in a pseudo-Latin language which more or less
                  corresponds.
                </p>
                <a href="javascript:void(0)" class="text-primary read-more"
                  >Read More <i class="mdi mdi-chevron-right"></i
                ></a>
                <i class="uil uil-airplay text-primary full-img"></i>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"
            >
              <div class="icons text-primary text-center">
                <i class="uil uil-focus-target d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Customizable</a
                >
                <p class="text-muted mt-2">
                  Composed in a pseudo-Latin language which more or less
                  corresponds.
                </p>
                <a href="javascript:void(0)" class="text-primary read-more"
                  >Read More <i class="mdi mdi-chevron-right"></i
                ></a>
                <i class="uil uil-focus-target text-primary full-img"></i>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"
            >
              <div class="icons text-primary text-center">
                <i class="uil uil-expand-arrows d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Scalable</a
                >
                <p class="text-muted mt-2">
                  Composed in a pseudo-Latin language which more or less
                  corresponds.
                </p>
                <a href="javascript:void(0)" class="text-primary read-more"
                  >Read More <i class="mdi mdi-chevron-right"></i
                ></a>
                <i class="uil uil-expand-arrows text-primary full-img"></i>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h6 class="text-primary">Quickstart</h6>
              <h4 class="title mb-4">Awesome isn't it? Let's dive in!</h4>
              <p class="para-desc mx-auto text-muted mb-0">
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

        <div class="row justify-content-center">
          <div class="col-lg-8 col-mg-10 mt-4 pt-2">
            <div class="bg-dark bg-white-dark p-4 rounded shadow">
              <div class="row">
                <div class="col-lg-12">
                  <b-tabs
                    pills
                    justified
                    content-class="pt-2"
                    active-nav-item-class="nav-link-alt"
                    nav-class="flex-column flex-sm-row rounded bg-soft-light"
                  >
                    <b-tab>
                      <template v-slot:title>
                        <div class="text-center text-white">
                          <h5 class="title font-weight-normal mb-0">npm</h5>
                        </div>
                      </template>
                     <p class="text-muted font-weight-bold mb-0"><span class="text-success">$</span> npm install <span class="text-success">-g</span> claps.js </p>
                    </b-tab>
                    <b-tab>
                      <template v-slot:title>
                        <div class="text-center text-white">
                          <h5 class="title font-weight-normal mb-0">nuget</h5>
                        </div>
                      </template>
                     <p class="text-muted font-weight-bold mb-0">coming soon ...</p>
                    </b-tab>
                    <b-tab>
                      <template v-slot:title>
                        <div class="text-center text-white">
                          <h5 class="title font-weight-normal mb-0">spm</h5>
                        </div>
                      </template>
                       <p class="text-muted font-weight-bold mb-0">coming soon ...</p>
                    </b-tab>
                    <b-tab>
                      <template v-slot:title>
                        <div class="text-center text-white">
                          <h5 class="title font-weight-normal mb-0">github</h5>
                        </div>
                      </template>
                       <p class="text-muted font-weight-bold mb-0">coming soon ...</p>
                    </b-tab>
                  </b-tabs>
                  <!--end nav pills-->
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>

            <ul class="list-unstyled text-muted mb-0 mt-3">
              <li class="list-inline-item mr-lg-5 mr-4">
                <span class="text-success h5 mr-2"
                  ><i class="uil uil-check-circle align-middle"></i></span
                >Organize your data
              </li>
              <li class="list-inline-item mr-lg-5 mr-4">
                <span class="text-success h5 mr-2"
                  ><i class="uil uil-check-circle align-middle"></i></span
                >Work with any team
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <img src="images/integration/1.png" class="img-fluid" alt="" />
          </div>
          <!--end col-->

          <div
            class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
          >
            <div class="section-title mr-lg-5">
              <h4 class="title mb-4">
                Build tools and <br />
                extensive documention
              </h4>
              <p class="text-muted">
                You can combine all the Landrick templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
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
              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary"
                  >Read More
                 <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">
                Our rates for developer from landrick team
              </h4>
              <p class="para-desc mx-auto text-muted mb-0">
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
          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div
              class="card pricing-rates business-rate border-0 p-4 rounded-md shadow"
            >
              <div class="card-body p-0">
                <span
                  class="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg"
                  >Basic</span
                >
                <h2 class="font-weight-bold mb-0 mt-3">$9.00</h2>
                <p class="text-muted">Per Month</p>

                <p class="text-muted">
                  All the basics for businesses that are just getting started.
                </p>

                <ul class="list-unstyled pt-3 border-top">
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Full Access
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Enhanced Security
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Source Files
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >1 Domain Free
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Enhanced Security
                  </li>
                </ul>

                <div class="mt-4">
                  <a href="javascript:void(0)" class="btn btn-block btn-primary"
                    >Buy Now</a
                  >
                  <p class="text-muted mt-3 mb-0">*No credit card required</p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div
              class="card pricing-rates business-rate border-0 p-4 rounded-md shadow"
            >
              <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                <span class="text-center d-block shadow small h6">Best</span>
              </div>
              <div class="card-body p-0">
                <span
                  class="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg"
                  >Business</span
                >
                <h2 class="font-weight-bold mb-0 mt-3">$39.00</h2>
                <p class="text-muted">Per Month</p>

                <p class="text-muted">
                  Better for growing businesses that want more customers.
                </p>

                <ul class="list-unstyled pt-3 border-top">
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Full Access
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Enhanced Security
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Source Files
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >1 Domain Free
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Enhanced Security
                  </li>
                </ul>

                <div class="mt-4">
                  <a href="javascript:void(0)" class="btn btn-block btn-primary"
                    >Buy Now</a
                  >
                  <p class="text-muted mt-3 mb-0">*No credit card required</p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div
              class="card pricing-rates business-rate border-0 p-4 rounded-md shadow"
            >
              <div class="card-body p-0">
                <span
                  class="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg"
                  >Enterprise</span
                >
                <h2 class="font-weight-bold mb-0 mt-3">$79.00</h2>
                <p class="text-muted">Per Month</p>

                <p class="text-muted">
                  Advanced features for pros who need more customization.
                </p>

                <ul class="list-unstyled pt-3 border-top">
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Full Access
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Enhanced Security
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Source Files
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >1 Domain Free
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Enhanced Security
                  </li>
                </ul>

                <div class="mt-4">
                  <a href="javascript:void(0)" class="btn btn-block btn-primary"
                    >Buy Now</a
                  >
                  <p class="text-muted mt-3 mb-0">*No credit card required</p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">
                Want to be among the first to find out?
              </h4>
              <p class="text-muted para-desc mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>

              <div class="subcribe-form mt-4 pt-2">
                <form>
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="border bg-white rounded-pill"
                      required
                      placeholder="Email Address"
                    />
                    <button type="submit" class="btn btn-pills btn-primary">
                      Get Started
                    </button>
                  </div>
                </form>
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
    <!-- End -->
    <!-- Section End -->
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