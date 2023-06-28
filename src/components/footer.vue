<script>
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "vue-feather-icons";
export default {
  data() {
    return {};
  },
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
  },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <footer class="footer">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" class="logo-footer">
              <img
                src="images/logo_M_horiz_blanco.png"
                width="300"
                height="auto"
                alt="logo maderflex"
              />
            </a>
            <p class="mt-4">
              Para nosotros el descanso es muy importante, por ello trabajamos
              duro para crear unas laminas de calidad y resistentes.
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded" target="_blank">
                  <facebook-icon class="fea icon-sm fea-social"></facebook-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded" target="_blank">
                  <instagram-icon
                    class="fea icon-sm fea-social"
                  ></instagram-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded" target="_blank">
                  <twitter-icon class="fea icon-sm fea-social"></twitter-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded" target="_blank">
                  <linkedin-icon class="fea icon-sm fea-social"></linkedin-icon>
                </a>
              </li>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">índice</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Inicio</router-link
                >
              </li>
              <li>
                <router-link to="/sobre-nosotros" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Sobre
                  Nosotros</router-link
                >
              </li>
              <li>
                <router-link to="/contacto" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Contacto</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Textos Legales</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/politica-de-cookies" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Política de
                  Cookies</router-link
                >
              </li>
              <li>
                <router-link to="/politica-de-privacidad" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Política de
                  Privacidad</router-link
                >
              </li>
              <li>
                <router-link to="/proteccion-de-datos" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Protección de
                  Datos</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div>
              <img
                src="../../public/images/Finan-UE-blanco.png"
                width="200"
                height="auto"
                style="margin-bottom: 30px"
              />
              <img
                src="../../public/images/Plan-recu-blanco.png"
                width="200"
                height="auto"
              />
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <footer class="footer footer-bar" style="background-color: white">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0" style="color: #68904c">
                <b> © 2023 - {{ new Date().getFullYear() }} Maderflex.</b>
                Derechos reservados.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
  </div>
</template>
