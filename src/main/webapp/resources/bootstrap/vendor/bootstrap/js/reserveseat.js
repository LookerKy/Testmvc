
$('#group1').empty();
$.ajax({
	type : "GET",
	url : "selectSeatb",
	dataType : "json",
	success : function(json) {
		var list = json.seat_list;
		for (var i = 0; i < list.length; i++) {
			if (list[i].seat_no >= 141 && list[i].seat_no <= 149) {
				displayGroup1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 150) {
				displayGroup1_margin(list[i].reservation, list[i].seat_no);
			}
				
			else if (list[i].seat_no >= 151 && list[i].seat_no <= 158) {
				displayGroup1(list[i].reservation, list[i].seat_no);
			}
			//2열
			else if (list[i].seat_no >= 65 && list[i].seat_no <= 67){
				displayGroup2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 68){
				displayGroup2_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 69 && list[i].seat_no <= 70){
				displayGroup2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 135){
				displayGroup2_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 136 && list[i].seat_no <= 137){
				displayGroup2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 138){
				displayGroup2_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 139 && list[i].seat_no <= 140){
				displayGroup2(list[i].reservation, list[i].seat_no);
			}
			//2열end
			//3열
			else if (list[i].seat_no >= 59 && list[i].seat_no <= 61){
				displayGroup3(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 62){
				displayGroup3_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 63 && list[i].seat_no <= 64){
				displayGroup3(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 129){
				displayGroup3_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 130 && list[i].seat_no <= 131){
				displayGroup3(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 132){
				displayGroup3_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 133 && list[i].seat_no <= 134){
				displayGroup3(list[i].reservation, list[i].seat_no);
			}
			//3열end
			//4열
			else if (list[i].seat_no >= 53 && list[i].seat_no <= 55){
				displayGroup4(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 56){
				displayGroup4_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 57 && list[i].seat_no <= 58){
				displayGroup4(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 123){
				displayGroup4_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 124 && list[i].seat_no <= 125){
				displayGroup4(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 126){
				displayGroup4_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 127 && list[i].seat_no <= 128){
				displayGroup4(list[i].reservation, list[i].seat_no);
			}
			//4열end
			//5열
			else if (list[i].seat_no >= 47 && list[i].seat_no <= 49){
				displayGroup5(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 50){
				displayGroup5_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 51 && list[i].seat_no <= 52){
				displayGroup5(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 117){
				displayGroup5_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 118 && list[i].seat_no <= 119){
				displayGroup5(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 120){
				displayGroup5_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 121 && list[i].seat_no <= 122){
				displayGroup5(list[i].reservation, list[i].seat_no);
			}
			//5열end
			//6열
			else if (list[i].seat_no >= 41 && list[i].seat_no <= 43){
				displayGroup6(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 44){
				displayGroup6_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 45 && list[i].seat_no <= 46){
				displayGroup6(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 111){
				displayGroup6_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 112 && list[i].seat_no <= 113){
				displayGroup6(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 114){
				displayGroup6_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 115 && list[i].seat_no <= 116){
				displayGroup6(list[i].reservation, list[i].seat_no);
			}
			//6열end
			//7열
			else if (list[i].seat_no >= 35 && list[i].seat_no <= 37){
				displayGroup7(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 38){
				displayGroup7_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 39 && list[i].seat_no <= 40){
				displayGroup7(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 105){
				displayGroup7_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 106 && list[i].seat_no <= 107){
				displayGroup7(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 108){
				displayGroup7_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 109 && list[i].seat_no <= 110){
				displayGroup7(list[i].reservation, list[i].seat_no);
			}
			//7열end
			//8열
			else if (list[i].seat_no >= 29 && list[i].seat_no <= 31){
				displayGroup8(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 32){
				displayGroup8_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 33 && list[i].seat_no <= 34){
				displayGroup8(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 99){
				displayGroup8_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 100 && list[i].seat_no <= 101){
				displayGroup8(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 102){
				displayGroup8_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 103 && list[i].seat_no <= 104){
				displayGroup8(list[i].reservation, list[i].seat_no);
			}
			//8열end
			//9열
			else if (list[i].seat_no >= 23 && list[i].seat_no <= 25){
				displayGroup9(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 26){
				displayGroup9_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 27 && list[i].seat_no <= 28){
				displayGroup9(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 93){
				displayGroup9_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 94 && list[i].seat_no <= 95){
				displayGroup9(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 96){
				displayGroup9_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 97 && list[i].seat_no <= 98){
				displayGroup9(list[i].reservation, list[i].seat_no);
			}
			//9열end
			//10열
			else if (list[i].seat_no >= 17 && list[i].seat_no <= 19){
				displayGroup10(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 20){
				displayGroup10_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 21 && list[i].seat_no <= 22){
				displayGroup10(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 87){
				displayGroup10_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 88 && list[i].seat_no <= 89){
				displayGroup10(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 90){
				displayGroup10_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 91 && list[i].seat_no <= 92){
				displayGroup10(list[i].reservation, list[i].seat_no);
			}
			//10열end
			//11열
			else if (list[i].seat_no >= 11 && list[i].seat_no <= 13){
				displayGroup11(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 14){
				displayGroup11_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 15 && list[i].seat_no <= 16){
				displayGroup11(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 81){
				displayGroup11_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 82 && list[i].seat_no <= 83){
				displayGroup11(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 84){
				displayGroup11_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 85 && list[i].seat_no <= 86){
				displayGroup11(list[i].reservation, list[i].seat_no);
			}
			//11열end
			//12열
			else if (list[i].seat_no >= 6 && list[i].seat_no <= 8){
				displayGroup12(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 9){
				displayGroup12_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no ==10){
				displayGroup12(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 76){
				displayGroup12_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no ==77){
				displayGroup12(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 78){
				displayGroup12_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 79 && list[i].seat_no <=80){
				displayGroup12(list[i].reservation, list[i].seat_no);
			}
			//12열end
			//13열
			else if (list[i].seat_no >= 1 && list[i].seat_no <= 3){
				displayGroup13(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 4){
				displayGroup13_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no ==5){
				displayGroup13(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 71){
				displayGroup13_margin2(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no ==72){
				displayGroup13(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no == 73){
				displayGroup13_margin1(list[i].reservation, list[i].seat_no);
			}
			else if (list[i].seat_no >= 74 && list[i].seat_no <=75){
				displayGroup13(list[i].reservation, list[i].seat_no);
			}
			//13열end
		}
		
	}
});

displayGroup1 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group1')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group1')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup1_margin = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group1')
		.append(
				'<div style="margin-left: 120px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group1')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 120px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup2 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group2')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group2')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup2_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group2')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group2')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup2_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group2')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group2')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup3 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group3')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group3')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup3_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group3')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group3')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup3_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group3')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group3')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup4 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group4')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group4')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup4_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group4')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group4')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup4_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group4')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group4')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup5 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group5')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group5')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup5_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group5')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group5')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup5_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group5')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group5')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup6 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group6')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group6')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup6_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group6')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group6')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup6_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group6')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group6')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup7 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group7')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group7')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup7_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group7')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group7')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup7_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group7')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group7')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup8 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group8')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group8')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup8_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group8')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group8')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup8_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group8')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group8')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup9 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group9')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group9')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup9_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group9')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group9')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup9_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group9')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group9')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup10 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group10')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group10')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup10_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group10')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group10')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup10_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group10')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group10')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup11 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group11')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group11')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup11_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group11')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group11')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup11_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group11')
		.append(
				'<div style="margin-left: 200px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group11')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 200px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup12 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group12')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group12')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup12_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group12')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group12')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup12_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group12')
		.append(
				'<div style="margin-left: 260px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group12')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 260px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

displayGroup13 = function(reservation, seat_no) {
	if (reservation == 1 ) {
		$('#group13')
		.append(
				'<div style="background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group13')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup13_margin1 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group13')
		.append(
				'<div style="margin-left: 25px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group13')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 25px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}
displayGroup13_margin2 = function(reservation, seat_no){
	if (reservation == 1 ) {
		$('#group13')
		.append(
				'<div style="margin-left: 260px; background-color: RED; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');
	} else {
		$('#group13')
		.append(
				'<div onclick="reserve.seatOnclick('+seat_no+')" style="margin-left: 260px; background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+seat_no+'</span></div></div>');			
	}
}

//for (var i = 141; i <= 149; i++) {
//	
//	$('#group1')
//	.append(
//	'<div onclick="reserve.seatOnclick('+i+')" style="background-color: YELLOW; margin-bottom: 1px; float: left; cursor:pointer"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+i+'</span></div></div>');
//}
//$('#group1').append('<div onclick="reserve.seatOnclick(150)" style="margin-bottom: 1px; float: left; margin-left: 120px; cursor:pointer;"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">150</span></div></div>');
//for (var i = 151; i <= 158; i++) {
//	$('#group1').append('<div onclick="reserve.seatOnclick('+i+')" style="margin-bottom: 1px; float: left; cursor:pointer;"><div style="text-align: center; border: 1px solid; width: 30px; height: 30px; display: table;"><span style="display: table-cell; text-align: center; vertical-align: middle;">'+i+'</span></div></div>');
//}
reserve = {
	seatOnclick : function(no) {
		//alert($('#Broom').html());
		var room = $('#Broom').html();
		var studentId = "2011301051"
		//		alert(room);
		var query = {
			seat_no : no,
			room_name : room
		};
		$.ajax({
			type : "GET",
			url : "reservationb",
			data : query,
			dataType : "json",
			complete : function(json) {
				alert("ok");
				location.href = "reservationb?seat_no=" + no + "&room_name="
						+ room + "&studentId=" + studentId;
			}
		});
	},
	reservcheckOnclick : function(){
		//alert($('#Broom').html());
		var room = $('#Broom').html();
		var studentId = "2011301051"
		//		alert(room);
		var query = {
				studentId : studentId
		};
		$.ajax({
			type : "GET",
			url : "serchreserv",
			data : query,
			dataType : "json",
			success : function(json) {
				var list = json.check_reserv;
				var no = list[0].seat_no;
				var stime = list[0].reserv_stime;
				var etime = list[0].reserv_etime;
				//alert(no + stime + etime);
				location.href = "reservationcheck?seat_no=" + no + "&room_name="
						+ room + "&studentId=" + studentId+"&stime="+stime + "&etime="+etime;
			}
		});
	}
}
