<template>
    <div
      class="mapContainer"
    >
      <div class="overlay"></div>
      <div class="container">
        <!-- <div
          class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"
        >
          <span>Ubicaciones</span>
          <h2>Parroquia Nuestra Señora de la Chiquinquirá</h2>
        </div> -->
        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h2>{{ this.$props.ubicationTitle }}</h2>
					<p>{{ this.$props.ubication }}</p>
				</div>
        <div >
          <iframe :src="this.$props.url"></iframe>
        </div>
      </div>
      <!-- <div class="container">
        <div
          class="col-md-8 col-md-offset-2 text-center animate-box"
        >
        </div>
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15707.439272633927!2d-64.6892969!3d10.1920375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d7382b3f91c17%3A0xc706d7fc41f07f56!2sVIVO%20Rest!5e0!3m2!1ses!2sve!4v1712281745440!5m2!1ses!2sve" width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Maps',
    props: {
      ubicationTitle: String,
      ubication: String,
      url: String
    }
  };
  </script>
  
  <style>
  </style>