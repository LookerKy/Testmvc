reservation = {
	reservOnclick : function() {
		//alert($('#Broom').html());
		var room = $('#room_type').val();
		var studentId ="2011301051"
		var no = $('#selectSeat').val();
		var starttime = $('#timepicker').val();
		var endtime = $('#timepicker1').val();
//		alert(room+" "+studentId+" "+no+" "+starttime+" "+endtime);
//		alert(room);
		var query = {
				seat_no : no,
				room_name : room,
				studentId : studentId,
				stime : starttime,
				etime : endtime
				
			};
			$
					.ajax({
						type : "GET",
						url : "insertSeatb",
						data : query,
						dataType : "json",
						complete : function(json) {
							alert("ok");
							location.href="http://localhost:8080/mvc/";
						}
					});
	},
	cancleOnclick : function(){
		location.href="http://localhost:8080/mvc/";
	}

}
reservCheck = {
		checkComplete : function(){
			location.href="http://localhost:8080/mvc/";
		},
		
		deleteReserv : function(){
			var no = $('#selectSeat').val();
			var query = {
					seat_no : no
				};
			$
			.ajax({
				type : "GET",
				url : "deleteSeatb",
				data : query,
				dataType : "json",
				success : function(json) {
					alert("success");
					location.href="http://localhost:8080/mvc/";
				}
			});
		}
}
