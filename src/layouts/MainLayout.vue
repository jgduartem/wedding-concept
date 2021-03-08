<template>
  <div id="page">
    <nav class="fh5co-nav" role="navigation">
      <div class="container bg-dark">
        <div class="row">
          <div class="col-xs-2">
            <div id="fh5co-logo">
              <a href="index.html">Wedding<strong>.</strong></a>
            </div>
          </div>
          <div class="col-xs-10 text-right menu-1">
            <ul>
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="about.html">Story</a></li>
              <li class="has-dropdown">
                <a href="services.html">Services</a>
                <ul class="dropdown">
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">eCommerce</a></li>
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">API</a></li>
                </ul>
              </li>
              <li class="has-dropdown">
                <a href="gallery.html">Gallery</a>
                <ul class="dropdown">
                  <li><a href="#">HTML5</a></li>
                  <li><a href="#">CSS3</a></li>
                  <li><a href="#">Sass</a></li>
                  <li><a href="#">jQuery</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
var $ = global.jQuery;
window.$ = $;
export default {
  data() {
    return {};
  },
  methods: {
    menuOutsideClick() {
      $(document).click(function (e) {
        var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("offcanvas")) {
            $("body").removeClass("offcanvas");
            $(".js-fh5co-nav-toggle").removeClass("active");
          }
        }
      });
    },
    offCanvasMenu() {
      {
        $("#page").prepend('<div id="fh5co-offcanvas" />');
        $("#page").prepend(
          '<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>'
        );
        var clone1 = $(".menu-1 > ul").clone();
        $("#fh5co-offcanvas").append(clone1);
        var clone2 = $(".menu-2 > ul").clone();
        $("#fh5co-offcanvas").append(clone2);

        $("#fh5co-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown");
        $("#fh5co-offcanvas").find("li").removeClass("has-dropdown");

        // Hover dropdown menu on mobile
        $(".offcanvas-has-dropdown")
          .mouseenter(function () {
            var $this = $(this);

            $this.addClass("active").find("ul").slideDown(500, "easeOutExpo");
          })
          .mouseleave(function () {
            var $this = $(this);
            $this.removeClass("active").find("ul").slideUp(500, "easeOutExpo");
          });

        $(window).resize(function () {
          if ($("body").hasClass("offcanvas")) {
            $("body").removeClass("offcanvas");
            $(".js-fh5co-nav-toggle").removeClass("active");
          }
        });
      }
    },
    burgerMenu() {
      {
        $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
          var $this = $(this);

          if ($("body").hasClass("overflow offcanvas")) {
            $("body").removeClass("overflow offcanvas");
          } else {
            $("body").addClass("overflow offcanvas");
          }
          $this.toggleClass("active");
          event.preventDefault();
        });
      }
    },
  },
  mounted() {
    this.menuOutsideClick();
    this.offCanvasMenu();
    this.burgerMenu()
  },
};
</script>

<style>
</style>