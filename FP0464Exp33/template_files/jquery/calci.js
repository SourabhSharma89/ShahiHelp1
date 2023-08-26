$(window).load(function(){
			
		  
	$(".tab,.tabDevice").on("click",function(){
			tabRotation();
			$(".squareRoot").hide();
			$(".squareRootStart").show();
	}); 
	
			$(".squareRootStart").click(function(){
										   
		$(".squareRoot").hide();								 
		$(".squareRootStop").show();
		
	})
	
	$(".squareRootStop").click(function(){
		$(".squareRoot").hide();									
		$(".squareRootStart").show();
		
	})

////////////////////////////////////////////////////////// new code//////////////////////////////////////////////////////////////////
				 //arry=new Array();			  
		var powerClick = 0;
						window.post;
$(".input1").on("click",function(){
	 var chars_c = '+−=()0123456789AaÆᴂɐɑɒBbcɕDdðEeƎəɛɜɜfGgɡɣhHɦIiɪɨᵻɩjJʝɟKklLʟᶅɭMmɱNnɴɲɳŋOoɔᴖᴗɵȢPpɸrRɹɻʁsʂʃTtƫUuᴜᴝʉɥɯɰʊvVʋʌwWxyzʐʑʒꝯᴥβγδθφχнნʕⵡ';
							var sup_c  = '⁺⁻⁼⁽⁾⁰¹²³⁴⁵⁶⁷⁸⁹ᴬᵃᴭᵆᵄᵅᶛᴮᵇᶜᶝᴰᵈᶞᴱᵉᴲᵊᵋᶟᵌᶠᴳᵍᶢˠʰᴴʱᴵⁱᶦᶤᶧᶥʲᴶᶨᶡᴷᵏˡᴸᶫᶪᶩᴹᵐᶬᴺⁿᶰᶮᶯᵑᴼᵒᵓᵔᵕᶱᴽᴾᵖᶲʳᴿʴʵʶˢᶳᶴᵀᵗᶵᵁᵘᶸᵙᶶᶣᵚᶭᶷᵛⱽᶹᶺʷᵂˣʸᶻᶼᶽᶾꝰᵜᵝᵞᵟᶿᵠᵡᵸჼˤⵯ';
									 
			 
	 post = $txt[0].selectionStart;		
	pst1=Number(post)-1	
		
		
	var input_value=document.querySelector(".input1").value;

				var input_value1=input_value.charAt(post)
				
			 var input_value2=input_value.charAt(pst1)
		
	
		
		if(sup_c.includes(input_value1) &&  sup_c.includes(input_value2) && pst1!=-1 && input_value1!=""){
			
			powerClick=1;
			//alert()
			$(".powerOn").hide()
			$(".powerOf").show()
			
			//alert(input_value1+" "+"hiii")
			}else{
				powerClick=2;
			$(".powerOn").show()
			$(".powerOf").hide()
				
				}
								 })
	$(document).keydown(function(event){
			var chars_c = '+−=()0123456789AaÆᴂɐɑɒBbcɕDdðEeƎəɛɜɜfGgɡɣhHɦIiɪɨᵻɩjJʝɟKklLʟᶅɭMmɱNnɴɲɳŋOoɔᴖᴗɵȢPpɸrRɹɻʁsʂʃTtƫUuᴜᴝʉɥɯɰʊvVʋʌwWxyzʐʑʒꝯᴥβγδθφχнნʕⵡ';
							var sup_c  = '⁺⁻⁼⁽⁾⁰¹²³⁴⁵⁶⁷⁸⁹ᴬᵃᴭᵆᵄᵅᶛᴮᵇᶜᶝᴰᵈᶞᴱᵉᴲᵊᵋᶟᵌᶠᴳᵍᶢˠʰᴴʱᴵⁱᶦᶤᶧᶥʲᴶᶨᶡᴷᵏˡᴸᶫᶪᶩᴹᵐᶬᴺⁿᶰᶮᶯᵑᴼᵒᵓᵔᵕᶱᴽᴾᵖᶲʳᴿʴʵʶˢᶳᶴᵀᵗᶵᵁᵘᶸᵙᶶᶣᵚᶭᶷᵛⱽᶹᶺʷᵂˣʸᶻᶼᶽᶾꝰᵜᵝᵞᵟᶿᵠᵡᵸჼˤⵯ';
			

	
		
		if(event.which==37){
			
		post = $txt[0].selectionStart;	
		var input_value=document.querySelector(".input1").value;
				var input_value1=input_value.charAt(Number(post)-2)
			
			 var input_value2=input_value.charAt(Number(post)-1)
			
		if(sup_c.includes(input_value1) &&  sup_c.includes(input_value2) && input_value1!=""){
			
			powerClick=1;
			
			$(".powerOn").hide()
			$(".powerOf").show()
			
			//alert(input_value1+" "+"hiii")
			}else{
				powerClick=2;
			$(".powerOn").show()
			$(".powerOf").hide()
				
				}
		
		
		
			
			}else if(event.which==39){
			
			
			
			
			post = $txt[0].selectionStart;	
		
		post=Number(post)
		pst1=post+1
			 var input_value=document.querySelector(".input1").value;
				var input_value1=input_value.charAt(post)
			
			 var input_value2=input_value.charAt(pst1)
			
			
				//alert(post+" "+input_value2 )
			
		if(sup_c.includes(input_value1) &&  sup_c.includes(input_value2) && input_value1!="" && input_value2!=""){
			
			powerClick=1;
			
			$(".powerOn").hide()
			$(".powerOf").show()
			
			//alert(input_value1+" "+"hiii")
			}else{
				powerClick=2;
			$(".powerOn").show()
			$(".powerOf").hide()
				
				}
			
			
			
			
			
			}
		
	
		
		if(event.which==8){
				post = $txt[0].selectionStart;	
		
		post=Number(post)
		pst1=post-1
			 var input_value=document.querySelector(".input1").value;
				var input_value1=input_value.charAt(post)
			
			 var input_value2=input_value.charAt(pst1)
			
			
			
				//alert(post+" "+input_value2 )
			
		if(sup_c.includes(input_value1) &&  sup_c.includes(input_value2) && input_value1!="" && input_value2!=""){
			
			powerClick=1;
			
			$(".powerOn").hide()
			$(".powerOf").show()
			
			//alert(input_value1+" "+"hiii")
			}else{
				powerClick=2;
			$(".powerOn").show()
			$(".powerOf").hide()
				
				}
			}else if(event.which==46){
				
				post = $txt[0].selectionStart;	
		
		post=Number(post)
		pst1=post-1
			 var input_value=document.querySelector(".input1").value;
				var input_value1=input_value.charAt(post)
			
			 var input_value2=input_value.charAt(pst1)
			
			
			
				//alert(post+" "+input_value2 )
			
		if(sup_c.includes(input_value1) &&  sup_c.includes(input_value2) && input_value1!="" && input_value2!=""){
			
			powerClick=1;
			
			$(".powerOn").hide()
			$(".powerOf").show()
			
			//alert(input_value1+" "+"hiii")
			}else{
				powerClick=2;
			$(".powerOn").show()
			$(".powerOf").hide()
				
				}
				
				
				}

						
								 
								 })	
 
//////////////////////////////////////////////////new code end////////////////////////////////////////////////////////////////////////////////////////////////////	   
 
/*////////////////////////////////////////////////Code Calculator ///////////////////////////////////////////////////////////////////*/						   						  
			
				 //var $txt = null; // Keep track of currently active input
				 var maxLength = 60;
				 var a = 0;				   
				 var $txt = null;
				 
				 $(".input1,.input2").prop('maxlength',maxLength);
		
			
				$txt = $(".input1"); 
				
				
				
				$(".input1").focus(); 
				//$(".input2").focus();
				$(".input1").on("focus", function(e) {
							
					$txt = $(".input1");
					$(".input1").focus(); 
					
					tabindex="1";
					keyPressed();
	
					 });
				
				 
			 $(".input2").on("focus", function(e) {
												 // alert("a")
				 $txt = $(".input2");
				$(".input2").focus(); 
				
				tabindex="2";
				keyPressed();

					});
			 
			 $(".input3").on("focus", function(e) {
												 // alert("a")
				 $txt = $(".input3");
				$(".input3").focus(); 
				
				tabindex="3";
				keyPressed();

					});
			 
			 $(".input4").on("focus", function(e) {
												 // alert("a")
				 $txt = $(".input4");
				$(".input4").focus(); 
				
				tabindex="4";
				keyPressed();

					});
			 
			 $(".input5").on("focus", function(e) {
												 // alert("a")
				 $txt = $(".input5");
				$(".input5").focus(); 
				
				tabindex="5";
				keyPressed();

					});
			 
			 $(".input6").on("focus", function(e) {
												 // alert("a")
				 $txt = $(".input6");
				$(".input6").focus(); 
				
				tabindex="6";
				keyPressed();

					});
			 
			 $(".input7").on("focus", function(e) {
												 // alert("a")
				 $txt = $(".input7");
				$(".input7").focus(); 
				
				tabindex="7";
				keyPressed();

					});
			 
			 $(".input8").on("focus", function(e) {
												 // alert("a")
				 $txt = $(".input8");
				$(".input8").focus(); 
				
				tabindex="8";
				keyPressed();

					});
			
				
					 if(String(navigator.userAgent).indexOf("Mobile") != -1){
					
				}else{
							$(".done1").on("focus", function(e) {
					$(".input1").focus().val($(".input1").val()); 

					});
					
				}
				 
$(".powerOn").click(function(){
					
			 powerArray[0]=94;	 
		 $(".powerOn").hide();
		 $(".powerOf").show();
		 
		//$txt.focus();

	});
	
	$(".powerOf").click(function(){
								 
		
		 powerArray[0]=9999;	
		 $(".powerOn").show();
		 $(".powerOf").hide();
		 $txt.focus();
		 
	});
							 
				 
				 
/////////////////////////////////////////////////////////////////////////////////////					   
																							 
/////////////////////////////////////////////////////////////////////////////////////																									
$(".bt").on("click", function(e) {		 
if (! $txt) return false; // If tracker is cleared, just return

	var SClick = String($txt.val()).length+1
					$txt .focus();
					
					if (! $txt) return false; // If tracker is cleared, just return
					
					var prev = $txt.val();
					
					var bt = this.value;
					var pos = $txt[0].selectionStart;

				
	
				
				
				
	if(maxLength >= SClick){
			var prev = $txt.val();
			//var bt = this.value;
							if(powerClick%2 == 0){
							 var bt = this.value;
	
						}else{
							 // alert(Number(this.value)+"  == this.value at bt")
							 var thisValue = Number(this.value)
							 
							 
							 
							 switch(thisValue){
								case 1:
									 var secondValue = document.querySelector("#one");
									var bt = secondValue.getAttribute("data-value");
									//$("#one").attr('value', '¹');
									break;
								case 2:
									var secondValue = document.querySelector("#two");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 3:
									var secondValue = document.querySelector("#three");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 4:
									var secondValue = document.querySelector("#four");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 5:
									var secondValue = document.querySelector("#five");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 6:
									var secondValue = document.querySelector("#six");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 7:
									var secondValue = document.querySelector("#seven");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 8:
									var secondValue = document.querySelector("#eight");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 9:
									var secondValue = document.querySelector("#nine");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 0:
									var secondValue = document.querySelector("#zero");
									var bt = secondValue.getAttribute("data-value");
									break;
							 }
								 
							 }
var pos = $txt[0].selectionStart;
var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
$txt.val(newValue);
$txt[0].setSelectionRange(pos+1, pos+1);

}					
				
				
				
				
					if(bt == " – ")
					{
						bt == " – ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
						
					}
					
					else if(bt == " x ⁴ "){
			          
						bt == " x ⁴ ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+5, pos+5);
						
					}
					else if(bt == " x ⁵ "){
			          
						bt == " x ⁵ ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+5, pos+5);
						
					}
					else if(bt == " x ² "){
			          
						bt == " x ² ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+5, pos+5);
						
					}
					else if(bt == " x ³ "){
			          
						bt == " x ³ ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+5, pos+5);
						
					}
						else if(bt == " y ² "){
			          
						bt == " y ² ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+5, pos+5);
						
					}
					else if(bt == " x "){
			          
						bt == " x ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
					else if(bt == " y "){
			          
						bt == " y ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
					
					else if(bt == " + "){
											
						bt == " + ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
					 else if(bt == " π "){
									 
									 bt = " π ";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+3, pos+3);
								}
					else if(bt == " / ")
					{					
						bt == " / ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
						else if(bt == " √( 5 ) ")
					{					
						bt = " √( 5 )";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+8, pos+8);
						
					}
						else if(bt == " √( 3 ) ")
					{					
						bt = " √( 3 )";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+8, pos+8);
						
					}
					else if(bt == " ( ")
					{					
						bt == " ( ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
					
					else if(bt == " ) ")
					{					
						bt == " ) ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
						
					else if(bt == " ) ² ")
					{					
						bt == " ) ² ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+5, pos+5);
						
					}
					else if(bt == " ) ")
					{					
						bt == " ) ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
					else if(bt == "sin ")
					{					
						bt == " sin ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+4, pos+4);
						
					}
					else if(bt == "cos ")
					{					
						bt == " cos ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+4, pos+4);
						
					}
					else if(bt == "tan ")
					{					
						bt == " tan ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+4, pos+4);
						
					}
					else if(bt == "csc ")
					{					
						bt == " csc ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+4, pos+4);
						
					}
					else if(bt == "sec ")
					{					
						bt == " sec ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+4, pos+4);
						
					}
					else if(bt == "cot ")
					{					
						bt == " cot ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+4, pos+4);
						
					}
					else if(bt == " x "){
											
						bt == " x ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
					else if(bt == " ! "){
											
						bt == " ! ";
						var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						$txt.val(newValue);
						$txt[0].setSelectionRange(pos+3, pos+3);
						
					}
					
					
					
	//alert(SClick+"  == SClick")

	 

post=$txt[0].selectionStart;	






}); 


																				 

/*////////////////FOR POWER BUTTON//////////////////////////////////////*/       

var r = 0;


$(".power").on('click',function() {
			
powerClick++;	

if(powerClick==2){
powerClick=0;
}

				
				 
				 
				 
					var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
						 $txt.val(newValue);
						 $txt[0].setSelectionRange(pos+2, pos+2);
						 
					
					 
					
					 $txt.focus();
								
			 /*  if(powerClick%2 == 0){
					
					$(".power").css({'color':'black','box-shadow':'0px 0px 0px #2b638f, 0px 0px 0px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'})
			
				}else{
					
					$(".power").css({'color':'yellow','box-shadow':'0px 0px 0px #2b638f, 0px 0px 25px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'})
				}
			
				$txt.focus();*/
});


/////////////////////////////////////////////////////////////////////////////////////



var tabVar = Number(1);
				
				tabRotation = function(){
				
					tabVar++;
					if(tabVar >= 8){
						
						 tabVar = 1;
					}
					
					if(tabVar == 1){
						 $(".input1").focus().val($(".input1").val()); 
					}
					else if(tabVar == 2){
						 $(".input2").focus().val($(".input2").val()); 
					}
					else if(tabVar == 3){
						 $(".input3").focus().val($(".input3").val()); 
					}
					else if(tabVar == 4){
						 $(".input4").focus().val($(".input4").val()); 
					}
					else if(tabVar == 5){
						 $(".input5").focus().val($(".input5").val()); 
					}
					else if(tabVar == 6){
						 $(".input6").focus().val($(".input6").val()); 
					}
					else if(tabVar == 7){
						 $(".input7").focus().val($(".input7").val()); 
						 tabVar = 0;
					
					}
					
					
				}
////////////////////////////////////////////////////////////////
			
//////////////////////////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////////////
									
				$('.back').on('click',function() {
					 post=$txt[0].selectionStart;
				//alert(thisIS)
					
					var strt = $txt.val().indexOf("√(");
					var stp = $txt.val().indexOf(")");
						
					var bt1 = $txt.val();
					var pos1 = $txt[0].selectionStart;
				/*	var pos1 = $txt[0].selectionStart;
				 
					bt1 = String(bt1).split("");
					
					var bt2 = bt1[bt1.length-1]
					
					
*/								
																			//alert(post)

					
				
				
					var $myInput = String($txt.val()).split("").join("ris");
					var position = Number(post);
					var $myInput1 = String($myInput).split("ris");
				
				
				/*alert1=String(($myInput1[position-1]))
			
			
				if(alert1==" "){
					
				if(alert1="√("){
					
							 }
					
					
					}
					*/
					
					
					 if(strt==-1 && stp==-1){
					
							if(position!=0){
						$myInput1.splice(position-1,1);
						$myInput = $myInput1.join("ris")
							
					}
						
					
					$txt.val(String($myInput).split("ris").join(""))
					$txt[0].setSelectionRange(position-1, position-1);
						
				
						$(".squareRoot").hide();
						$(".squareRootStart").show();	
						
						
						}else if(strt!=-1 && stp==-1){
						
						
					
						if(position!=0){
							
							
							
						
						$myInput1.splice(position-1,1);
						$myInput = $myInput1.join("ris")
							
					}
						
					
					$txt.val(String($myInput).split("ris").join(""))
					$txt[0].setSelectionRange(position-1, position-1);
						
						$(".squareRoot").show();
						$(".squareRootStart").hide();	
						
						
						
						}else if(strt==-1 && stp!=-1){
						
						
						if(position!=0){
					
						$myInput1.splice(position-1,1);
						$myInput = $myInput1.join("ris")
							
					}
						
					
					$txt.val(String($myInput).split("ris").join(""))
					$txt[0].setSelectionRange(position-1, position-1);
						
						$(".squareRoot").hide();
						$(".squareRootStart").show();	
						
						
						
						
						}else if(strt!=-1 && stp!=-1){
						
								 var i=(bt1.length)-1;
						
						
					
					
						for(i;i>=0;i--){
							
						if(bt1.charAt(i)==")" && (post-1)==i)	{
							
									 $(".squareRoot").show();
						$(".squareRootStart").hide();	
								 break;
									}else if(bt1.charAt(i)=="(" && (post-1)==i){
									
						$(".squareRoot").hide();
						$(".squareRootStart").show();		
									
								break;
								
									}
							
							
							
							}
						
						
						
						
						if(position!=0){
					
						$myInput1.splice(position-1,1);
						$myInput = $myInput1.join("ris")
							
					}
						
					
					$txt.val(String($myInput).split("ris").join(""))
					$txt[0].setSelectionRange(position-1, position-1);
						
					
						
						
						
						
						}
					
					
					
				if($txt.val()==""){
				$(".powerOn").show();
					 $(".powerOf").hide();
				}
			
					
				
					
			
					$txt.focus();
				
				 
					
					
				});
				
				$('.clear').on('click',function() {
					
					powerClick=0;
					$(".squareRoot").hide();									
					$(".squareRootStart").show();
					$(".powerOn").show();
					 $(".powerOf").hide();
					$txt.val('');
					$txt.focus();
					 
					
				});
				
				
				
				
				$('.delete').on('click',function() {
				
						
					var strt = $txt.val().indexOf("√(");
					var stp = $txt.val().indexOf(")");
					
					var bt1 = $txt.val();
					 post = $txt[0].selectionStart;
					bt1 = String(bt1);
					var bt2 = bt1[bt1.length-1]
					
				
				var $myInput = String($txt.val()).split("").join("ris");
					var position = $txt[0].selectionStart;
					var $myInput1 = String($myInput).split("ris");
					$myInput1.splice(position,1);
					$myInput = $myInput1.join("ris")
					$txt.val(String($myInput).split("ris").join(""))
					$txt[0].setSelectionRange(position, position);	 
					
					
				
					
				if(strt==-1 && stp==-1){
					$(".squareRoot").show();
						$(".squareRootStop").hide();
						
				
				
					}else if(strt!= -1 && stp==-1){
						
			
						
							 if(bt1.charAt(post)=="√"){
								 
						$(".squareRoot").show();
						$(".squareRootStop").hide();
								
						$myInput1.splice(position,2);
					$myInput = $myInput1.join("ris")
					$txt.val(String($myInput).split("ris").join(""))
					$txt[0].setSelectionRange(position, position);	 		  
								
								
								 }
						
						
						
						}else if(strt==-1 && stp!=-1){
					
					 if(bt1.charAt(post)==")"){
								 
						$(".squareRoot").show();
						$(".squareRootStop").hide();
								
								 }
						
						}else if(strt!=-1 && stp !=-1){
						
					
					 if(bt1.charAt(post)=="√"){
								 
						$(".squareRoot").show();
						$(".squareRootStop").hide();
								
						$myInput1.splice(position,2);
					$myInput = $myInput1.join("ris")
					$txt.val(String($myInput).split("ris").join(""))
					$txt[0].setSelectionRange(position, position);	 		  
								
								
								 }
								 
								 
								 if(bt1.charAt(post)==")"){
							
							
						$(".squareRoot").hide();
						$(".squareRootStop").show();
								
								 }
								 
								 
						
						}
					
					
					
					if($txt.val()==""){
				$(".powerOn").show();
					 $(".powerOf").hide();
				}
			
					 
					$txt.focus();
					
				});
				
				
				

/////////////////////////////////////////////////////////////////////////////////////
/*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/
/*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/

$(".input").keydown(function(e){
				 
	
				 
				 if( e.which==46){
		
			
				e.preventDefault()
				$(".delete").click();
						 }else if( e.which==8){
							 
							 
							 
						e.preventDefault()
					
					
			
					
				$(".back").click();
				
				
									}
						 
						 
						 
						 });
			



			
		
			

				
				$(".input1").keypress(function(e){
						 inputKeyRestrict(e);
					
					 
						 $txt = $(".input1"); 
						if( e.which==27){
							$(".prompt").hide();
							$(".Procedure_banner").hide();
							$(".ReducePromt").hide();
							$(".blankMessage").hide();
						}
						if( e.which==13){
						
							doneButton()
							document.getElementById("inputText").value;
							
			
							$txt.focus();
						}
					$txt.focus();
					
				});
				$(".input2").keypress(function(e){
						 inputKeyRestrict(e);
					
					 
						 $txt = $(".input2"); 
						if( e.which==27){
							$(".prompt").hide();
							$(".Procedure_banner").hide();
							$(".ReducePromt").hide();
							$(".blankMessage").hide();
						}
						if( e.which==13){
						
							doneButton()
							document.getElementById("inputText1").value;
							
			
							$txt.focus();
						}
					$txt.focus();
					
				});
				$(".input3").keypress(function(e){
						 inputKeyRestrict(e);
					
					 
						 $txt = $(".input3"); 
						if( e.which==27){
							$(".prompt").hide();
							$(".Procedure_banner").hide();
							$(".ReducePromt").hide();
							$(".blankMessage").hide();
						}
						if( e.which==13){
						
							doneButton()
							document.getElementById("inputText2").value;
							
			
							$txt.focus();
						}
					$txt.focus();
					
				});
				$(".input4").keypress(function(e){
						 inputKeyRestrict(e);
					
					 
						 $txt = $(".input4"); 
						if( e.which==27){
							$(".prompt").hide();
							$(".Procedure_banner").hide();
							$(".ReducePromt").hide();
							$(".blankMessage").hide();
						}
						if( e.which==13){
						
							doneButton()
							document.getElementById("inputText3").value;
							
			
							$txt.focus();
						}
					$txt.focus();
					
				});
				$(".input5").keypress(function(e){
						 inputKeyRestrict(e);
					
					 
						 $txt = $(".input5"); 
						if( e.which==27){
							$(".prompt").hide();
							$(".Procedure_banner").hide();
							$(".ReducePromt").hide();
							$(".blankMessage").hide();
						}
						if( e.which==13){
						
							doneButton()
							document.getElementById("inputText4").value;
							
			
							$txt.focus();
						}
					$txt.focus();
					
				});
				$(".input6").keypress(function(e){
						inputKeyRestrict(e);
					 
						 $txt = $(".input6"); 
						if( e.which==27){
							$(".prompt").hide();
							$(".Procedure_banner").hide();
							$(".ReducePromt").hide();
							$(".blankMessage").hide();
						}
						if( e.which==13){
							
							doneButton();
							document.getElementById("inputText5").value;
							

							$txt.focus();
						}
						
						 
					$txt.focus();
					
					
					 
				});
				$(".input7").keypress(function(e){
						inputKeyRestrict(e);
					 
						 $txt = $(".input7"); 
						if( e.which==27){
							$(".prompt").hide();
							$(".Procedure_banner").hide();
							$(".ReducePromt").hide();
							$(".blankMessage").hide();
						}
						if( e.which==13){
							
							doneButton();
							document.getElementById("inputText6").value;
							

							$txt.focus();
						}
						
						 
					$txt.focus();
					
					
					 
				});
				
				
				$.fn.superScript = function() {
var chars = '+−=()0123456789AaÆᴂɐɑɒBbcɕDdðEeƎəɛɜɜfGgɡɣhHɦIiɪɨᵻɩjJʝɟKklLʟᶅɭMmɱNnɴɲɳŋOoɔᴖᴗɵȢPpɸrRɹɻʁsʂʃTtƫUuᴜᴝʉɥɯɰʊvVʋʌwWxyzʐʑʒꝯᴥβγδθφχнნʕⵡ',
	sup   = '⁺⁻⁼⁽⁾⁰¹²³⁴⁵⁶⁷⁸⁹ᴬᵃᴭᵆᵄᵅᶛᴮᵇᶜᶝᴰᵈᶞᴱᵉᴲᵊᵋᶟᵌᶠᴳᵍᶢˠʰᴴʱᴵⁱᶦᶤᶧᶥʲᴶᶨᶡᴷᵏˡᴸᶫᶪᶩᴹᵐᶬᴺⁿᶰᶮᶯᵑᴼᵒᵓᵔᵕᶱᴽᴾᵖᶲʳᴿʴʵʶˢᶳᶴᵀᵗᶵᵁᵘᶸᵙᶶᶣᵚᶭᶷᵛⱽᶹᶺʷᵂˣʸᶻᶼᶽᶾꝰᵜᵝᵞᵟᶿᵠᵡᵸჼˤⵯ';

return this.each(function() {
	this.value = this.value.replace(/<sup[^>]*>(.*?)<\/sup>/g, function(x) {
			var str = '',
					txt = $.trim($(x).unwrap().text());
			
			for (var i=0; i<txt.length; i++) {
					var n = chars.indexOf(txt[i]);
					str += (n!=-1 ? sup[n] : txt[i]);
			}
			return str;
	});
});
}
				
				 
////////////////////Restrict the values/////////////////////////////////						
inputKeyRestrict = function(e) {

//alert("e.which == "+e.which)		

	var restrict = (e.which == 120 ||e.which == 121 ||e.which == 36 || e.which == 40 || e.which == 41 ||e.which == 47 || e.which == 33 || e.which == 43 || e.which == 46 || e.which == 8 || e.which == 9 || e.which == 189 ||e.which == 37||e.which == 39  || e.which == undefined || e.which == 0 || e.which == 109  || (e.which >= 96 && e.which <= 105) ) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
			if (restrict) {e.preventDefault();}






		
};

/*//////////////////////////////////////////////////////////////////////////////////////////////////////*/
	 
	var powerArray= new Array();
keyPressed = function(event){
var x = event.which || event.keyCode;
//alert(x)
var SClick = String($txt.val()).length+1;





if(x==47 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#Slash");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+3, pos+3);
	 
	 
 }
 

if(x==45 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#minus");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+3, pos+3);
	 
	 
} 
 

if(x==43 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#plus");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+3, pos+3);
	 
	 
 } 

if(x==40 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#OpenBrac");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+3, pos+3);
	 
	 
 }
 
 if(x==41 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#closBrac");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+3, pos+3);
	 
	 
 }
 
 if(x==33 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#fact");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+3, pos+3);
	 
	 
 }
 
 
 if(x==41 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#CloseBrac");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+3, pos+3);
	 
	 
 }
 
 if(x==120 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#x");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+2, pos+2);
	 
	 
 }
 if(x==121 && maxLength >= SClick){
									 
								 
									
	var secondValue = document.querySelector("#y");
	var bt1 = secondValue.getAttribute("data-value"); 
 
	var prev = $txt.val();

	
	var pos = $txt[0].selectionStart;
	event.preventDefault();
	var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
	$txt.val(newValue);
	$txt[0].setSelectionRange(pos+2, pos+2);
	 
	 
 }

// alert(powerArray[0])

//if (! $txt) return false; // If tracker is cleared, just return

 if(x==94){
//alert("x == "+x+"  event.which == "+event.which+" and event.keyCode == "+event.keyCode)
powerClick++;	
if(powerClick>=2){
powerClick=0;
	$(".powerOn").show();
$(".powerOf").hide();	


	
}else{

$(".powerOn").hide();
$(".powerOf").show();	

	}

powerArray[0]=x;

	
//$(".power").click();
var secondValue = document.querySelector(".power");
var bt = secondValue.getAttribute("data-value");

					 

 
var SClick = String($txt.val()).length+1




$txt.focus();	

}else if( powerArray[0]==94){



var SClick = String($txt.val()).length+1;
var thisValue = String.fromCharCode(event.which);



if(maxLength >= SClick){

var prev = $txt.val();




							 if(powerClick%2 == 0){
							 var bt = thisValue;
														//alert(thisValue)
							 }else{
								//alert(prev) 
							
								
								thisValue = Number(thisValue);
							 
								 if(isNaN(thisValue)){
									 thisValue = String.fromCharCode(event.which)
								}
							 
							 
							 
							
							
							 switch(thisValue){
								case 1:
								
									var secondValue = document.querySelector("#one");
									var bt = secondValue.getAttribute("data-value");
									
									break;
								case 2:
									var secondValue = document.querySelector("#two");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 3:
									var secondValue = document.querySelector("#three");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 4:
									var secondValue = document.querySelector("#four");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 5:
									var secondValue = document.querySelector("#five");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 6:
									var secondValue = document.querySelector("#six");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 7:
									var secondValue = document.querySelector("#seven");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 8:
									var secondValue = document.querySelector("#eight");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 9:
									var secondValue = document.querySelector("#nine");
									var bt = secondValue.getAttribute("data-value");
									break;
								case 0:
									var secondValue = document.querySelector("#zero");
									var bt = secondValue.getAttribute("data-value");
									break;
								case "a":
									var bt = "ᵃ";
									break;
								case "b":
									var bt = "ᵇ";
									break;
								case "c":
									var bt = "ᶜ";
									break;
								case "d":
									var bt = "ᵈ";
									break;
								case "e":
									var bt = "ᵉ";
									break;
								case "f":
									var bt = "ᶠ";
									break;
								case "g":
									var bt = "ᵍ";
									break;
								case "h":
									var bt = "ʰ";
									break;
								case "i":
									var bt = "ⁱ";
									break;
								case "j":
									var bt = "ʲ";
									break;
								case "k":
									var bt = "ᵏ";
									break;
								case "l":
									var bt = "ˡ";
									break;
								case "m":
									var bt = "ᵐ";
									break;
								case "n":
									var bt = "ⁿ";
									break;
								case "o":
									var bt = "ᵒ";
									break;
								case "p":
									var bt = "ᵖ";
									break;
								case "q":
									var bt = "ᶲ";
									break;
								case "r":
									var bt = "ʳ";
									break;
								case "s":
									var bt = "ˢ";
									break;
								case "t":
									var bt = "ᵗ";
									break;
								case "u":
									var bt = "ᵘ";
									break;
								case "v":
									var bt = "ᵛ";
									break;
								case "w":
									var bt = "ʷ";
									break;
								case "x":
									var bt = "ˣ";
									break;
								case "y":
									var bt = "ʸ";
									break;
								case "z":
									var bt = "ᶻ";
									break;
								 case "A":
									var bt = "ᴬ";
									break;
								case "B":
									var bt = "ᴮ";
									break;
								case "C":
									var bt = "ᶜ";
									break;
								case "D":
									var bt = "ᴰ";
									break;
								case "E":
									var bt = "ᴱ";
									break;
								case "F":
									var bt = "ᶠ";
									break;
								case "G":
									var bt = "ᴳ";
									break;
								case "H":
									var bt = "ᴴ";
									break;
								case "I":
									var bt = "ᴵ";
									break;
								case "J":
									var bt = "ᴶ";
									break;
								case "K":
									var bt = "ᴷ";
									break;
								case "L":
									var bt = "ᴸ";
									break;
								case "M":
									var bt = "ᴹ";
									break;
								case "N":
									var bt = "ᴺ";
									break;
								case "O":
									var bt = "ᴼ";
									break;
								case "P":
									var bt = "ᴾ";
									break;
								case "Q":
									var bt = "ᶲ";
									break;
								case "R":
									var bt = "ᴿ";
									break;
								case "S":
									var bt = "ˢ";
									break;
								case "T":
									var bt = "ᵀ";
									break;
								case "U":
									var bt = "ᵁ";
									break;
								case "V":
									var bt = "ᵛ";
									break;
								case "W":
									var bt = "ᵂ";
									break;
								case "X":
									var bt = "ˣ";
									break;
								case "Y":
									var bt = "ʸ";
									break;
								case "Z":
									var bt = "ᶻ";
									break;
								case "+":
									var bt = "⁺";
									break;
								case "-":
									var bt = "⁻";
									break;
								case "=":
									var bt = "⁼";
									break;
								case "(":
									var bt = "⁽";
									break;
								case ")":
									var bt = "⁾";
									break;
								case "*":
									var bt = "×";
									break;
								case "/":
									var bt = "÷";
									break;
								case ".":
									var bt = "·";
									break;
								case ",":
									var bt = "٫";
									break;
								default:
									var bt = thisValue;
								}
							
							
							if(x==32 || x==13){
							var bt="";	
								
								}
							
							
							 }
var pos = $txt[0].selectionStart;
var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
$txt.val(newValue);
$txt[0].setSelectionRange(pos+1, pos+1);
event.preventDefault();
}

}
$txt.focus();
					}



/*/////////////////////////////////////////////////////////////////////////////*/
				
				
				
}); 

