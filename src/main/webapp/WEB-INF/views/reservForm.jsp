<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>좌석 예약</title>

    <!-- Bootstrap -->
    <link href="resources/reservformboot/css/bootstrap.min.css" rel="stylesheet">
    <!-- font awesome -->
    <link rel="stylesheet" href="resources/reservformboot/css/font-awesome.min.css" media="screen" title="no title" charset="utf-8">
    <!-- Custom style -->
    <link rel="stylesheet" href="resources/reservformboot/css/style.css" media="screen" title="no title" charset="utf-8">
	<!-- timepicker -->
	<link rel='stylesheet' type='text/css'href='resources/reservformboot/css/timepicki.css'/>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>


      <article class="container">
        <div class="page-header">
          <h1>좌석 예약 <small>SkUinv</small></h1>
        </div>
        <div class="col-md-6 col-md-offset-3">
          <form role="form">
            <div class="form-group">
              <label for="InputEmail">열람실</label>
              <input type="text" class="form-control" value='${seat_list[0].room_name}' id="room_type" readonly="readonly" >
            </div>
            <div class="form-group">
              <label for="InputPassword1">학번</label>
              <input type="text" class="form-control" id="studentId" value='${seat_list[0].studentId}' readonly="readonly">
            </div>
            <div class="form-group">
              <label for="InputPassword2">선택 좌석</label>
              <input type="text" class="form-control" value = '${seat_list[0].seat_no}' id="selectSeat" readonly="readonly">	
              <p class="help-block">선택한 좌석이 아니라면 예약취소를 눌러주세요.</p>
            </div>
            
            <div class="form-group">
              <label for="username">예약 시작 시간</label>
              <input id='timepicker' type='text' name='timepicker' class="form-control" value=""/>
            </div>
            <div class="form-group">
              <label for="username">예약 종료 시간</label>
              <input id='timepicker1' type='text' name='timepicker1' class="form-control" value=""/>
            </div>
            <div class="form-group text-center">
              <button type="button" class="btn btn-info" onclick="reservation.reservOnclick()">좌석예약<i class="fa fa-check spaceLeft"></i></button>
              <button type="button" class="btn btn-warning" onclick="reservation.cancleOnclick()">홈으로<i class="fa fa-times spaceLeft"></i></button>
            </div>
          </form>
        </div>

      </article>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="resources/reservformboot/js/reserv.js?ver=2 charset=utf-8"></script>
    <script src="resources/reservformboot/js/bootstrap.min.js"></script>
    <script type='text/javascript'src='resources/reservformboot/js/jquery.min.js'></script>
    <script type='text/javascript'src='resources/reservformboot/js/timepicki.js'></script>
    <script>
   	 	$('#timepicker').timepicki();
    </script>
    <script>
   	 	$('#timepicker1').timepicki();
    </script>
  </body>
</html>
