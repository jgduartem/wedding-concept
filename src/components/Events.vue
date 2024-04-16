<template>
  <!-- https://ultimasnoticias.com.ve/wp-content/uploads/2019/04/Misa-Crismal.jpg -->
  <div
    id="fh5co-event"
    class="fh5co-bg"
    :class="{'bg-img-church': title === 'Ceremonia eclesiástica', 'bg-img-vivo': title === 'Recepción y fiesta' }"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <!-- <div
          class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"
        >
          <span>Evento especial</span>
          <h2>Nuestra boda</h2>
        </div> -->
      </div>
      <div class="row">
        <div class="display-t">
          <div class="display-tc">
            <div class="col-md-10 col-md-offset-1" style="display: flex; justify-content: center;">
              <div class="col-md-6 col-sm-6 text-center">
                <div class="event-wrap animate-box">
                  <h3>{{ title }}</h3>
                  <div class="event-col">
                    <i class="icon-clock"></i>
                    <span>{{ startTime }}</span>
                    <span>{{ endTime }}</span>
                  </div>
                  <div class="event-col">
                    <i class="icon-calendar"></i>
                    <span>{{day}}</span>
                    <span>{{ month }}</span>
                  </div>
                  <p>
                    {{ message }}
                  </p>
                  <p>
                    <b>
                      {{ postData }}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  props: {
    title: String,
    startTime: String,
    endTime: String,
    day: String,
    month: String,
    message: String,
    postData: String
  }
};
</script>

<style>
.bg-img-vivo{
  background-image: url("/bg-vivo.jpeg");
}

.bg-img-church {
   background-image: url("/bg-church.jpeg");
}


</style>