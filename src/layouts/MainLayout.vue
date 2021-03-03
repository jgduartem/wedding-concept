<template>
  <div>
    <nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="row">
				<div class="col-xs-2">
					<div id="fh5co-logo"><a href="index.html">Our Wedding<strong>.</strong></a></div>
				</div>
				<div class="col-xs-10 text-right menu-1">
					<ul>
						<li class="active"><a href="index.html">Home</a></li>
						<li><a href="about.html">Story</a></li>
						<li><a href="about.html">The Wedding</a></li>
						<!-- <li class="has-dropdown">
							<a href="gallery.html">Gallery</a>
							<ul class="dropdown">
								<li><a href="#">HTML5</a></li>
								<li><a href="#">CSS3</a></li>
								<li><a href="#">Sass</a></li>
								<li><a href="#">jQuery</a></li>
							</ul>
						</li> -->
					</ul>
				</div>
			</div>
			
		</div>
	</nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style>
</style>