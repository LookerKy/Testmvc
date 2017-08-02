<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title>좌석 예약시스템</title>

<!-- Bootstrap Core CSS -->
<link href="resources/bootstrap/vendor/bootstrap/css/bootstrap.css"
	rel="stylesheet">

<!-- Theme CSS -->
<link href="resources/bootstrap/css/freelancer.css" rel="stylesheet">

<!-- Custom Fonts -->
<link
	href="resources/bootstrap/vendor/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
	rel="stylesheet" type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
	rel="stylesheet" type="text/css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">
	<div id="skipnav">
		<a href="#maincontent">Skip to main content</a>
	</div>

	<!-- Navigation -->
	<nav id="mainNav"
		class="navbar navbar-default navbar-fixed-top navbar-custom">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header page-scroll">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> Menu <i
						class="fa fa-bars"></i>
				</button>
				<a class="navbar-brand" href="#page-top">열람실 예약 시스템</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="hidden"><a href="#page-top"></a></li>
					<li class="page-scroll"><a href="#portfolio">Reservation</a></li>
					<li class="page-scroll"><a href="#contact">My Page</a></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>

	<!-- Header -->
	<header>
		<div class="container" id="maincontent" tabindex="-1">
			<div class="row">
				<div class="col-lg-12">
					<img class="img-responsive"
						src="resources/bootstrap/img/portfolio/spring-homelogo.png" alt="">
					<div class="intro-text">
						<h1 class="name">열람실 좌석예약 시스템</h1>
						<hr class="star-light">
						<span class="skills">SeoKyoung.UNIV Seat Reservation</span>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!--1.좌석예약기능-->
	<section id="portfolio">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>좌석 현황 및 좌석 예약</h2>
					<hr class="star-primary">
				</div>
			</div>
			<div class="col">
				<div class="col-sm-4 portfolio-item">
					<a href="#portfolioModal1" class="portfolio-link"
						data-toggle="modal">
						<div class="caption">
							<div class="caption-content">
								<i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div> <img src="resources/bootstrap/img/portfolio/blue.jpg"
						class="img-responsive" alt="Cabin">
					</a>
				</div>
			</div>
			<div class="col">
				<div class="col-sm-4 portfolio-item">
					<a href="#portfolioModal1" class="portfolio-link"
						data-toggle="modal">
						<div class="caption">
							<div class="caption-content">
								<i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div> <img src="resources/bootstrap/img/portfolio/blue.jpg"
						class="img-responsive" alt="Cabin">
					</a>
				</div>
			</div>
			<div class="col">
				<div class="col-sm-4 portfolio-item">
					<a href="#portfolioModal3" class="portfolio-link"
						data-toggle="modal">
						<div class="caption">
							<div class="caption-content">
								<i class="fa fa-search-plus fa-3x"></i>
							</div>
						</div> <img src="resources/bootstrap/img/portfolio/blue.jpg"
						class="img-responsive" alt="Cabin">
					</a>
				</div>
			</div>

		</div>
	</section>


	<!-- Contact Section -->
	<section id="contact">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>좌석 예약 내역</h2>
					<hr class="star-primary">
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
					<!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
					<form name="sentMessage" id="contactForm" novalidate>
						<div id="success"></div>
						<div class="row">
							<div class="form-group col-xs-12" >
								<button type="button" class="btn btn-success btn-lg" onClick="reserve.reservcheckOnclick()">나의 예약 확인 </button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="text-center">
		<div class="footer-above">
			<div class="container">
				<div class="row">
					<div class="footer-col col-md-4">
						<h3>Location</h3>
						<p>
							서경대학교 <br>서울시 성북구 정릉동 124
						</p>
					</div>
					<div class="footer-col col-md-4">
						<h3>Around the Web</h3>
						<ul class="list-inline">
							<li><a href="#" class="btn-social btn-outline"><span
									class="sr-only">Facebook</span><i class="fa fa-fw fa-facebook"></i></a>
							</li>
							<li><a href="#" class="btn-social btn-outline"><span
									class="sr-only">Google Plus</span><i
									class="fa fa-fw fa-google-plus"></i></a></li>
							<li><a href="#" class="btn-social btn-outline"><span
									class="sr-only">Twitter</span><i class="fa fa-fw fa-twitter"></i></a>
							</li>
							<li><a href="#" class="btn-social btn-outline"><span
									class="sr-only">Linked In</span><i class="fa fa-fw fa-linkedin"></i></a>
							</li>
							<li><a href="#" class="btn-social btn-outline"><span
									class="sr-only">Dribble</span><i class="fa fa-fw fa-dribbble"></i></a>
							</li>
						</ul>
					</div>
					<div class="footer-col col-md-4">
						<h3>좌석예약 시스템</h3>
						<p>
							좌석예약 시스템입니다.
							by <a href="http://startbootstrap.com">이 규 영</a>.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-below">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">Copyright &copy; leeky</div>
				</div>
			</div>
		</div>
	</footer>

	<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
	<div
		class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
		<a class="btn btn-primary" href="#page-top"> <i
			class="fa fa-chevron-up"></i>
		</a>
	</div>

	<!-- Blue Room -->
	<div class="portfolio-modal modal fade" id="portfolioModal1"
		tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-content">
			<div class="close-modal" data-dismiss="modal">
				<div class="lr">
					<div class="rl"></div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-lg-offset-2">
						<div class="modal-body">
							<h2 id="Broom">Blue RooM</h2>
							<hr class="star-primary">
							<!--   <img src="resources/bootstrap/img/portfolio/cabin.png" class="img-responsive img-centered" alt="">
                          -->

							<!--note book 석  -->
							<p>note book</p>
							
							<div id ="group1" style="margin-left: 60px; height: 50px; width: 700px;">
							</div>
							<!-- -->
							<!--일반석 -->

							<!--1열-->
							<!--@65~70 SEAT group2-->
							<div id="group2" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!--group2 end -->
	
							<!--2열-->
							
							<!--@59~64 SEAT group3-->
							<div id="group3" style="margin-left: 80px; height: 50px; width: 640px;">
							</div>
							<!--group 3 end -->

							<!--3열-->
							<!--@53~58 SEAT group4-->
							<div
								id="group4"style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!--group4 end -->

							<!--4열-->
							<!--@47~52  group5-->
							<div
								id="group5"style="margin-left: 80px; height: 50px; width: 640px;">
							</div>
							<!-- group5 end -->
							
							<!--5열-->
							<!--@41~46 SEAT group6 -->
							<div
								id="group6" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!-- -->

							<!--6열-->
							<!--@35~40 SEAT id="group7" -->
							<div
								id="group7" style="margin-left: 80px; height: 50px; width: 640px;">
							</div>

							<!--7열-->
							<!--@29~34 SEAT  id="group8"-->
							<div id="group8" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!-- -->

							<!--8열-->
							<!--@23~28 SEAT  id="group9"-->
							<div id="group9" style="margin-left: 80px;  height: 50px; width: 640px; cursor:pointer;">
							</div>
							<!-- -->

							<!--9열-->
							<!--@17~22 SEAT id="group10"-->
							<div id="group10" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!-- -->


							<!--10열-->
							<!--@11~16 SEAT id="group11" -->
							<div id="group11" style="margin-left: 80px; height: 50px; width: 640px;">
							</div>
							<!-- -->

							<!--11열-->
							<!--@6~10 SEAT id="group12"-->
							<div id="group12" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!-- -->

							<!--12열-->
							<!-- @1~5 SEAT id="group13" -->
							<div id="group13" style="margin-left: 80px; height: 50px; width: 640px;">
							</div>
							<!-- -->
						
							<button type="button" class="btn btn-default"
								data-dismiss="modal">
								<i class="fa fa-times"></i> Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Blue Room -->
	<div class="portfolio-modal modal fade" id="portfolioModal2"
		tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-content">
			<div class="close-modal" data-dismiss="modal">
				<div class="lr">
					<div class="rl"></div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-lg-offset-2">
						<div class="modal-body">
							<h2 id="Oroom">Orange RooM</h2>
							<hr class="star-primary">
					

							<!--note book 석  -->
							<p>note book</p>
							
							<div id ="group1" style="margin-left: 60px; height: 50px; width: 700px;">
							</div>
							<!-- -->
							<!--일반석 -->

							<!--1열-->
							<!--@65~70 SEAT group2-->
							<div id="group2" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!--group2 end -->
	
							<!--2열-->
							
							<!--@59~64 SEAT group3-->
							<div id="group3" style="margin-left: 80px; height: 50px; width: 640px;">
							</div>
							<!--group 3 end -->

							<!--3열-->
							<!--@53~58 SEAT group4-->
							<div
								id="group4"style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!--group4 end -->

							<!--4열-->
							<!--@47~52  group5-->
							<div
								id="group5"style="margin-left: 80px; height: 50px; width: 640px;">
							</div>
							<!-- group5 end -->
							
							<!--5열-->
							<!--@41~46 SEAT group6 -->
							<div
								id="group6" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!-- -->

							<!--6열-->
							<!--@35~40 SEAT id="group7" -->
							<div
								id="group7" style="margin-left: 80px; height: 50px; width: 640px;">
							</div>

							<!--7열-->
							<!--@29~34 SEAT  id="group8"-->
							<div id="group8" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!-- -->

							<!--8열-->
							<!--@23~28 SEAT  id="group9"-->
							<div id="group9" style="margin-left: 80px;  height: 50px; width: 640px; cursor:pointer;">
							</div>
							<!-- -->

							<!--9열-->
							<!--@17~22 SEAT id="group10"-->
							<div id="group10" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!-- -->


							<!--10열-->
							<!--@11~16 SEAT id="group11" -->
							<div id="group11" style="margin-left: 80px; height: 50px; width: 640px;">
							</div>
							<!-- -->

							<!--11열-->
							<!--@6~10 SEAT id="group12"-->
							<div id="group12" style="margin-left: 80px; height: 31px; width: 640px;">
							</div>
							<!-- -->

							<!--12열-->
							<!-- @1~5 SEAT id="group13" -->
							<div id="group13" style="margin-left: 80px; height: 50px; width: 640px;">
							</div>
							<!-- -->
						
							<button type="button" class="btn btn-default"
								data-dismiss="modal">
								<i class="fa fa-times"></i> Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- jQuery -->
	<script src="resources/bootstrap/vendor/jquery/jquery.min.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="resources/bootstrap/vendor/bootstrap/js/bootstrap.min.js"></script>

	<!-- Plugin JavaScript -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

	<!-- Contact Form JavaScript -->
	<script src="resources/bootstrap/js/jqBootstrapValidation.js"></script>
	<script src="resources/bootstrap/js/contact_me.js"></script>
    <script src="resources/bootstrap/vendor/bootstrap/js/reserveseat.js?ver=4 charset=utf-8"></script>
	<!-- Theme JavaScript -->
	<script src="resources/bootstrap/js/freelancer.min.js"></script>

</body>

</html>
