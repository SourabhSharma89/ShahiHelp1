//START:Changed from Bangalore Team
var CurrQuestionIndex = 0;
//END:Changed from Bangalore Team


$(document).ready(function(){
						  
						  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	checkMobile=isMobileDevice();		  
						  //////////////NFR///////////////////
						   
						    $(document).keydown(function(objEvent) {
														 
												 
							
						  if(DoneClicked == 1)
						  {
							  
							 $(function() {
					  
									// gather all inputs of selected types
									var inputs = $('.tab,.done1,.calc'), inputTo;
									
									// bind on keydown
									inputs.on('keydown', function(e) {
																
										// if we pressed the tab
										if (e.keyCode == 9 || e.which == 9) {
											
											// prevent default tab action
											//e.preventDefault();
								
											if (e.shiftKey) {
												// get previous input based on the current input
												inputTo = inputs.get(inputs.index(this) - 1);
											} else {
												// get next input based on the current input
												inputTo = inputs.get(inputs.index(this) + 1);
											}
								
											// move focus to inputTo, otherwise focus first input
											if (inputTo) {
												inputTo.focus();
											} else {
												inputs[0].focus();
											}
										}
									});
								});
						  }
						  else if(DoneClicked == 0)
						  {
							  
    
						  }
						  })
						   var DoneClicked = 0
						   $(".section1").css('display',"none");
						   $(".footer").css("pointer-events","none");
						   $(".FtrTab_Td3").css("pointer-events","auto");
						   $(".newSet,.Procedure").hide();
						   $(".solution").css('visibility','hidden');
						   var attempted_num = 1;
						   var next_val = 0;
						   
						   //////////////For NFR closed//////////
						  
				var sb=-10000;
				var autorunVar = 0
				
				$(".autorun").css('opacity','.4');
				$(".autorun").attr('disable','true');
				$(".autorun").css('cursor','default');
				$(".promptComma,.prompt_New,.blankMessage,.ReducePromt,.blankMessage_New,.remark,.txt_Score_total").hide();
				
				$(".solutionMainSteps,.solutionText,.steps").hide();	
				$(".incorrect,.correct").show();
				$(".Partially").hide();
				$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8").css('visibility','hidden');
				$(".Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8").css('visibility','hidden');
				//$(".imgD2").hide();
				$(".imgD1").show();
				$(".newSet").css({'pointer-events':'none','opacity':'0.5'})
				window.optionclicked=0;
				

							
				///////////////////////////////////For Print///////////////////////////////////
				
				myFunction= function() 
				{
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				$(".newSet").click(function()
				{
					
					sb=-10000;///set this as initial value

					$(".remark,.correct,.incorrect,.blankMessage,.prompt_New,.promptComma,.ReducePromt,.blank,.portraitblankMessage,.LandScapeblankMessage,.blankMessage_New,.txt_Score_total").hide();			
					$(".solutionMainSteps,.solutionText").hide();
					$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").val('');
					$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8").css('visibility','hidden');
				$(".Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8").css('visibility','hidden');
					$(".incorrect,.correct").hide();
					$(".blankMessage,.ReducePromt").hide();
					$(".prompt,.promptComma").hide();
					$(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
					$(".blankMessage_New").hide();
					$(".SpaceBarDiv").hide();
					$(".steps").hide();
					
					$(".squareRoot").hide();									
					$(".squareRootStart").show();
					//$(".imgD2").hide();
					$(".imgD1").show();
				});

/////////////////////////////////////////////////////////Buttons////////////////////////////////////////////////////////////////////////////////////
				
				
				$(".done1").click(function()
				{ 
					$(".Procedure_banner").hide();				   

					$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
					$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
					$(".Procedure").css({'color':'black','box-shadow':'none'});
					$(".input1").focus();
				});

				$(".newSet").click(function()
				{ 
					$(".autorun").css('disable','true');				 
					$(".Procedure_banner").hide();				   
					$(".newSet").css('color','#ffff00');
					$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
					$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
					$(".done1").css({'color':'black','box-shadow':'none'});
					$(".Procedure").css({'color':'black','box-shadow':'none'});
					$(".input1,.input2,.input3,.input4").val('')
					$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").val('');
					$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8").css('visibility','hidden');
				$(".Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8").css('visibility','hidden');
				optionclicked=0;
				////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").val('')
									$(".done1").css("pointer-events","auto")
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									$(".Procedure_banner,.prompt_New,.solutionMain").hide();
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").attr("disabled",false)
									
									$(".respond").html("");
									////////// for NFR //////
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"}); 
				});

				$(".solution").click(function(){ 
														
											 window.SpaceClick=1;
											 $(".middle").hide();
								             $(".Step1_div").show();
												$(".solution").blur();
												$(".step1,.step2,.step3,.step8,.step5,.step6,.step7,.step4").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
												$(".step1").css({'color':'#C00','box-shadow':'0px 3px 5px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
									$(".solution").blur();
				 					$(".input1 ").focus();
									$(".spacebar").show();
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".SpaceBarDiv").hide();
									$(".steps").show();   
												        
														});
				
				
				
				
				 $(".Procedure").click(function(){ 
															
															$(".input1").focus();
															 autorunVar = 1; 
															 sb=-1;
															 
									$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
									$(".solutionMainSteps,.solutionText,.SolutionRemark").hide();
 									$(".autorun").css('opacity','.4');
									$(".autorun").css('disable','true');
									$(".autorun").css('cursor','default');
									$(".autorun").attr('disabled',true);
 				        		    $(".Procedure").css('color','red');
									$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.solution").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure_banner").fadeIn();	
							
						});
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

						   $(".Cross_PB").click(function(){
														 
								$(".Procedure_banner").hide();	
								$(".input1").focus();
								
							});	
							 
	 					   $(".Cross_BM").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								
							});	
						 $(".crossDiv").click(function(){
								$(".AreaForKeypadAndInputInDevice").hide();
							});	
						   
 					   $(".ClickToAnsDiv").click(function(){
								$(".AreaForKeypadAndInputInDevice").show();
							});	
					
				
				
	
				randRange = function (min, max) 
				{
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				}	
				
					///////////////////////////////////////////////////
					
				var next_val = 0;
			
				var array_Range = 599;
				
				
				var R1_Arr = new Array();
				var R2_Arr = new Array();
				var R3_Arr = new Array();
				var R4_Arr = new Array();

				var R5_Arr = new Array();
				var R11_Arr = new Array();
				var R1_indexArr = new Array();
				
				Q1_Arr = new Array();
				Q2_Arr = new Array();
				Q3_Arr = new Array();
				Q4_Arr = new Array();	
				Q5_Arr = new Array();	
				Q6_Arr = new Array();
				Q7_Arr = new Array();	
			
				var temp_str;
				var ta1;
				var ta2;
				var ta3;
				var ta4;
				var ta5;
				var ta6;
				var ta7;
				var ta8;
				var q1_txt;
				var counter = 0;
				var wt_id1;
		
				
			quesGeneration = function(){
					//var R1_Arr = new Array();
					
				for (var i = 0; i<array_Range; i++) {
						
					
					num1 = randRange(1, 1);
				    //num1 = 5;
				   
		                    if(true){
								 Q1_Arr.push(num1);
						     }
							  else{
								  i--;
							  }
							 
							 
      				}
				
					Q2_Arr = random_Array(String(Q1_Arr));
						 
						//Q2_Arr = (Q1_Arr)	
					Q2_Arr=["1"]
						};
				

		          				
					
					
			/*////////////////////R1_Arr////////////////////////////////*/
		
			/*/////////////////////////R1_Arr////////////////////////////////*/
			var loadingString = [];
				window.loadingValues = function () {
			
					//START:Changed from Bangalore Team 
					// loadingValues.fired = true;
					//END:Changed from Bangalore Team 
			
					// next_val = 25;
					loadingString = [next_val];
					//////////alert(next_val+"  == next_val")
					return loadingString;
			
				}
				var dataURL;	
				
				var GCFnum;
				
				
		nextQuesGeneration = function(){
				  	
					if (CurrQuestionIndex != 0) {
						next_val = Number(CurrQuestionIndex);
			}
			else {
						next_val = next_val;
			}
			
				
					if (next_val >= Q2_Arr.length) {
						next_val = 0;
					}
					
					temp1 = String(Q2_Arr[next_val]).split("@");
				
				
				$(".case2").hide();
				
				val1 = temp1[0];
				
					
					
				$(".option1 .graphoption,.option2 .graphoption, .option3 .graphoption, .option4 .graphoption").css('border','solid 2px #ff000000');
				
				$(".option1").click(function(){
				$(".option1 .graphoption").css('border','solid 2px red');
				$(".option2 .graphoption, .option3 .graphoption, .option4 .graphoption").css('border','solid 2px #ff000000');
				  optionclicked = 1;
				});
				
				$(".option2").click(function(){
				$(".option2 .graphoption").css('border','solid 2px red');
				$(".option1 .graphoption, .option3 .graphoption, .option4 .graphoption").css('border','solid 2px #ff000000');
				 optionclicked = 2;
				});
				
				$(".option3").click(function(){
				$(".option3 .graphoption").css('border','solid 2px red');
				$(".option2 .graphoption,.option1 .graphoption, .option4 .graphoption").css('border','solid 2px #ff000000');
				 optionclicked = 3;
				});
				
				
				answer_final=3
				}		
			
			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
			next_val = randRange(0, Q2_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
				doneButtonMain = function(){
					 
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.prompt_New,.txt_Score_total").hide();
					$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8,.Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8").css('visibility','hidden');
						
					
					
					 var k1_text = trimSpaces(document.getElementById("inputText").value);
					 var k2_text = trimSpaces(document.getElementById("inputText1").value);
					 var k3_text = trimSpaces(document.getElementById("inputText2").value);
					 var k4_text = trimSpaces(document.getElementById("inputText3").value);
					 var k5_text = trimSpaces(document.getElementById("inputText4").value);
					 var k6_text = trimSpaces(document.getElementById("inputText5").value);
					 var k7_text = trimSpaces(document.getElementById("inputText6").value);
					// var k8_text = trimSpaces(document.getElementById("inputText7").value);
						
					 ////alert(val6)
///////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
					
					var score1 = 0;
					var score2 = 0;
					var score3 = 0;
					var score4 = 0;
					var score5 = 0;
					var score6 = 0;
					var score7 = 0;
					var score8 = 0;
			
			
			Final_ans1 = "–3";
			Final_ans2 = "1";
			Final_ans3 = "4";
			Final_ans4 = "–6";
			Final_ans5 = "8";
			Final_ans6 = "0.5";
			Final_ans7 = "11";
			
				//alert(trimzero(k1_text)+"  "+trimzero(Final_ans1))	
//////////////////////////////////////////////////////////////////////////
								
					
					
			if(k1_text == "" || k2_text == "" || k3_text == "" || k4_text == "" || k5_text == "" || k6_text == "" || k7_text == ""){
						$(".prompt_New,.txt_Score_total").hide();
						$(".blankMessage_New").show();
						$(".incomplete_New").hide();
						$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8,.Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8").css('visibility','hidden');
						
					}else if(optionclicked==0){
						$(".prompt_New,.txt_Score_total").hide();
						$(".blankMessage_New").hide();
						$(".SelectAns").show();
						$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8,.Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8").css('visibility','hidden');
						
					}
				
					else {
						
						
						if (trimzero(k1_text) == trimzero(Final_ans1)) {
						score1 = 1;
						} 
						else {
						score1 = 0;
						}
						if (trimzero(k2_text) == trimzero(Final_ans2)) {
						score2 = 1;
						} 
						else {
						score2 = 0;
						}
						if (trimzero(k3_text) == trimzero(Final_ans3)) {
						score3 = 1;
						} 
						else {
						score3 = 0;
						}
						if (trimzero(k4_text) == trimzero(Final_ans4)) {
						score4 = 1;
						} 
						else {
						score4 = 0;
						}
						if (trimzero(k5_text) == trimzero(Final_ans5)) {
						score5 = 1;
						} 
						else {
						score5 = 0;
						}
						if (trimzero(k6_text) == trimzero(Final_ans6)) {
						score6 = 1;
						} 
						else {
						score6 = 0;
						}
						if (trimzero(k7_text) == trimzero(Final_ans7)) {
						score7 = 1;
						} 
						else {
						score7 = 0;
						}
						
								
								
									
										
						if (score1 == 1) {
							$(".Wrt1").css('visibility','visible');
							$(".Wrng1").css('visibility','hidden');
							$(".qu1").html("2")
							$(".txt_Score_total1").show();
						} else{
							$(".Wrng1").css('visibility','visible');
							$(".Wrt1").css('visibility','hidden');
							$(".qu1").html("0")
							$(".txt_Score_total1").show();
						}
						if (score2 == 1) {
							$(".Wrt2").css('visibility','visible');
							$(".Wrng2").css('visibility','hidden');
							$(".qu2").html("2")
							$(".txt_Score_total2").show();
						} else {
							$(".Wrng2").css('visibility','visible');
							$(".Wrt2").css('visibility','hidden');
							$(".qu2").html("0")
							$(".txt_Score_total2").show();
						}
						if (score3 == 1) {
							$(".Wrt3").css('visibility','visible');
							$(".Wrng3").css('visibility','hidden');
							$(".qu3").html("2")
							$(".txt_Score_total3").show();
						} else {
							$(".Wrng3").css('visibility','visible');
							$(".Wrt3").css('visibility','hidden');
							$(".qu3").html("0")
							$(".txt_Score_total3").show();
						}
						if (score4 == 1) {
							$(".Wrt4").css('visibility','visible');
							$(".Wrng4").css('visibility','hidden');
							sc_1="0.5"
						} else {
							$(".Wrng4").css('visibility','visible');
							$(".Wrt4").css('visibility','hidden');
							sc_1="0"
						}
						if (score5 == 1) {
							$(".Wrt5").css('visibility','visible');
							$(".Wrng5").css('visibility','hidden');
							sc_2="0.5"
						} else {
							$(".Wrng5").css('visibility','visible');
							$(".Wrt5").css('visibility','hidden');
							sc_2="0"
						}
						if (score6 == 1) {
							$(".Wrt6").css('visibility','visible');
							$(".Wrng6").css('visibility','hidden');
							$(".txt_Score_total").css('color','blue');
							sc_3="0.5"
						} else {
							$(".Wrng6").css('visibility','visible');
							$(".Wrt6").css('visibility','hidden');
							sc_3="0"
						}
						if (score7 == 1) {
							$(".Wrt7").css('visibility','visible');
							$(".Wrng7").css('visibility','hidden');
							sc_4="0.5"
						} else {
							$(".Wrng7").css('visibility','visible');
							$(".Wrt7").css('visibility','hidden');
							sc_4="0"
						}
						
						sc_final=Number(sc_1)+Number(sc_2)+Number(sc_3)+Number(sc_4)
						
					  $(".qu4").html(sc_final)
					
					
						
						
						if(optionclicked==answer_final){
							score8=1;
						$(".txt_Score_total5").show();
						 $(".qu5").html("5")
						 $(".Wrt8").css('visibility','visible');
						 $(".Wrng8").css('visibility','hidden');
						}else{
							score8=0;
						$(".txt_Score_total5").hide();
						 $(".qu5").html("0")
						 $(".Wrng8").css('visibility','visible');
							$(".Wrt8").css('visibility','hidden');
						}
						
						finalScore = Number(score1+score2+score3+score4+score5+score6+score7+score8)/8;
						if (finalScore == 1 ) {
							////alert("   in correct")
							$(".remark,.correct,.txt_Score_total").show();
							$(".prompt_New").hide();
							$(".txt_Score_total").show();
							//$(".qu0").html("2");
							//$(".txt_Score_total").css('color','blue');
						} 
					
						else if (finalScore > 0) {
							$(".prompt_New").hide();
							$(".incomplete_New,.txt_Score_total").show();
							//$(".qu0").html("0");
							//$(".txt_Score_total").css('color','blue');
						} 
						else {
							$(".remark,.incorrect,.txt_Score_total").show();
							$(".prompt_New").hide();
							//$(".qu0").html("0");
							//$(".txt_Score_total").css('color','blue');
					}
						
					}
					
				}
				
				
		
			 showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").hide();
					 $(".solutionMainSteps,.solutionText,.SolutionRemark").hide();

 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").show().css({"display":"inline-block"});

					
					
					}
				//////////////////////////////////For FR///////////////////////////////////////////////
					//////////////////////////////////For NFR///////////////////////////////////////////////
				reviewMode = false;
				var Qid;
				var FBOpt;
				var HOpt;
				var SOpt;
				var VOpt;
				var MOpt;
				var EOpt;
				readQuesID();
				setModes();
				
				//$(".calc").css("pointer-events","auto");
				function setModes() {
					/*SOpt = 0 
					FBOpt = 1 
					EOpt = 1*/
					    if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
							
							$(".solution").css('visibility','hidden');
							
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 1) {
							
							//$(".newSet").show();
							$(".solution").show();
							$(".solution").css('visibility','visible');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 0 && FBOpt == 2 && EOpt == 1) {
							
							$(".solution").css('visibility','hidden');
						    $(".calc").css("pointer-events","auto");
						} else if (SOpt == 2 && FBOpt == 2 && EOpt == 1) {
							
							$(".solution").css('visibility','hidden');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 0) {
							  
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").hide();
								
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").attr("disabled",true)
								DoneClicked = 1;
								
								$(".done1").click(function(){ 
                        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								
							 
						}else if (SOpt == 3 && FBOpt == 2 && EOpt == 1) {        
							  
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto");
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").css("pointer-events","auto");
								                                          
								
							 
						} else {
							/////////////////////rest/////////////////////
							$(".solution").hide();
							$(".calc").css("pointer-events","none");
							$(".done1").css("pointer-events","none");
							$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").css("pointer-events","none");
					
						}
					
				}
				//////////////////
				
				// ML -- Read QuestionID
				//////////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					//////////////alert(Qid.length+"  == Qid.length")
					setPreviewMode();
				}
				/*$(".QuesDiv").show();
				$(".LoadingDiv").hide();  */                 ///////////It should be closed while uploading the file
				//function setstuValues(ans, evals) {
				window.setstuValues = function setstuValues(ans, evals) {
					//8thMar2018 BLR Comments
					//Start
					
					
					$("#QuesDiv").show();
        			$("#LoadingDiv").hide();
					
					//End
					
					//////////////alert(FBOpt+" == FBOpt")
					$(".remark,.respond").css("display","inline-block")
					if (FBOpt == 2) {
						if (evals == "true") {
							
							$(".respond").html("Correct");
							$(".respond").css('color','#339966');
							
								
							
					     }else if (evals == "partial") {
							
							 $(".respond").html("Partially Correct");
							$(".respond").css('color','#0000CC');	
							
					     } else {
							
							 $(".respond").html("Incorrect");
							 $(".respond").css('color','#FF0000');
								
							
						 }
					}
					if (FBOpt == 1) {
						
						$(".respond").html("Responded");
						$(".respond").css('color','#339966');
						
						
						
					}
					preloadans(ans);
				}
				
				
				 //START:Changed from Bangalore Team 
					window.setQuesIndex = function setQuesIndex(QuesIndex) {
						//////////////alert("setQuesIndex:" + QuesIndex)
						CurrQuestionIndex = QuesIndex;
				
						//8thMar2018 BLR Comments
						//Start
					
						
						 $("#QuesDiv").show();
       					 $("#LoadingDiv").hide();
						
						//End
						
						nextQuesGeneration();
					}
					//END:Changed from Bangalore Team 

				//ExternalInterface.addCallback("setstuValues", this, setstuValues);
				//PageMethods.setstuValues();
				//setstuValues();
				function setPreviewMode() {
					reviewMode = true;
					
					$(".solution").show();
					$(".solution").css('visibility','visible');
					// show solution in review mode
				}
				
				function readQuesID() {
					try {
						var sQid = window.location.href.substr(window.location.href.indexOf("?"));
						var QArr;
						//////////////alert(sQid+"  == sQid")
						//var sQid = "http://localhost/EducoTestPrep/HTMLFRQuestionCheck/131-B0132Exp3AL.html?Qid=101$h=0$s=0$f=2"
						QArr = sQid.split("$");
						////Below code are used for opening the file without loader//////
						if (QArr.length < 2) {
									$("#QuesDiv").show();
									$("#LoadingDiv").hide();
						}
						////////////////////////////.. End ..//////////////////////////////

 						Qid = QArr[0].substr(QArr[0].indexOf("Qid")+4);
						FBOpt = QArr[3].substr(QArr[0].indexOf("f")+3);
						HOpt = QArr[1].substr(QArr[0].indexOf("h")+3);
						SOpt = QArr[2].substr(QArr[0].indexOf("s")+3);
						VOpt = QArr[4].substr(QArr[0].indexOf("v")+3);
						MOpt = QArr[5].substr(QArr[0].indexOf("m")+3);
						EOpt = QArr[6].substr(QArr[0].indexOf("e")+3);

					} catch (ex) {
					}
				}
				
				////////////////////// NFR Closed ////////////
				//////////////////////////////////////////////
		
				function preloadans(strfrmServer) {
					
				
					if(strfrmServer != undefined){
						////////////////alert("strfrmServer 2 == "+strfrmServer);
						//alert("")
						
						var tx1 = strfrmServer.split('@serverString@');
						
						$(".input1").val(String(tx1[0]))
						$(".input2").val(String(tx1[1]))
						$(".input3").val(String(tx1[2]))
						$(".input4").val(String(tx1[3]))
						$(".input5").val(String(tx1[4]))
						$(".input6").val(String(tx1[5]))
						$(".input7").val(String(tx1[6]))
						$(".input8").val(String(tx1[7]))
					
						
   						temp1 = String(tx1[8]).split(",");
						
						score1=String(tx1[9])
						score2=String(tx1[10])
						score3=String(tx1[11])
						score4=String(tx1[12])
						score5=String(tx1[13])
						score6=String(tx1[14])
						score7=String(tx1[15])
						score8=String(tx1[16])
						score9=String(tx1[17])
						
						
						
						
						
						final_score = String(tx1[18]);
						
						Attempted_score = String(tx1[19]);
						finalScore = String(tx1[20])
						
						optionclicked= String(tx1[21])
					
 						
					//temp1 = String(Q2_Arr[next_val]).split("@");
				
				//temp1 = String(Q2_Arr[next_val]).split("@");
				
				
				$(".case2").hide();
				
				val1 = temp1[0];
				
					
					
				$(".option1 .graphoption,.option2 .graphoption, .option3 .graphoption, .option4 .graphoption").css('border','solid 2px #ff000000');
				if(optionclicked==1){
				
				$(".option1 .graphoption").css('border','solid 2px red');
				$(".option2 .graphoption, .option3 .graphoption, .option4 .graphoption").css('border','solid 2px #ff000000');
				  
				}else if(optionclicked==2){
				
				
				$(".option2 .graphoption").css('border','solid 2px red');
				$(".option1 .graphoption, .option3 .graphoption, .option4 .graphoption").css('border','solid 2px #ff000000');
				
				}else if(optionclicked==3){
				
				$(".option3 .graphoption").css('border','solid 2px red');
				$(".option2 .graphoption,.option1 .graphoption, .option4 .graphoption").css('border','solid 2px #ff000000');
				 //optionclicked = 3;
				};
				
				
				answer_final=3
				
               
		
					
						if (FBOpt != 1) {
							if (score1 == 1) {
							$(".Wrt1").css('visibility','visible');
							$(".Wrng1").css('visibility','hidden');
							$(".qu1").html("2")
							$(".txt_Score_total1").show();
						} else{
							$(".Wrng1").css('visibility','visible');
							$(".Wrt1").css('visibility','hidden');
							$(".qu1").html("0")
							$(".txt_Score_total1").show();
						}
						if (score2 == 1) {
							$(".Wrt2").css('visibility','visible');
							$(".Wrng2").css('visibility','hidden');
							$(".qu2").html("2")
							$(".txt_Score_total2").show();
						} else {
							$(".Wrng2").css('visibility','visible');
							$(".Wrt2").css('visibility','hidden');
							$(".qu2").html("0")
							$(".txt_Score_total2").show();
						}
						if (score3 == 1) {
							$(".Wrt3").css('visibility','visible');
							$(".Wrng3").css('visibility','hidden');
							$(".qu3").html("2")
							$(".txt_Score_total3").show();
						} else {
							$(".Wrng3").css('visibility','visible');
							$(".Wrt3").css('visibility','hidden');
							$(".qu3").html("0")
							$(".txt_Score_total3").show();
						}
						if (score4 == 1) {
							$(".Wrt4").css('visibility','visible');
							$(".Wrng4").css('visibility','hidden');
							sc_1="0.4"
						} else {
							$(".Wrng4").css('visibility','visible');
							$(".Wrt4").css('visibility','hidden');
							sc_1="0"
						}
						if (score5 == 1) {
							$(".Wrt5").css('visibility','visible');
							$(".Wrng5").css('visibility','hidden');
							sc_2="0.4"
						} else {
							$(".Wrng5").css('visibility','visible');
							$(".Wrt5").css('visibility','hidden');
							sc_2="0"
						}
						if (score6 == 1) {
							$(".Wrt6").css('visibility','visible');
							$(".Wrng6").css('visibility','hidden');
							$(".txt_Score_total").css('color','blue');
							sc_3="0.4"
						} else {
							$(".Wrng6").css('visibility','visible');
							$(".Wrt6").css('visibility','hidden');
							sc_3="0"
						}
						if (score7 == 1) {
							$(".Wrt7").css('visibility','visible');
							$(".Wrng7").css('visibility','hidden');
							sc_4="0.4"
						} else {
							$(".Wrng7").css('visibility','visible');
							$(".Wrt7").css('visibility','hidden');
							sc_4="0"
						}
						
						if (score8 == 1) {
							$(".Wrt8").css('visibility','visible');
							$(".Wrng8").css('visibility','hidden');
							sc_5="0.4"
						} else {
							$(".Wrng8").css('visibility','visible');
							$(".Wrt8").css('visibility','hidden');
							sc_5="0"
						}
		
						}
						
						//sc_final=Number(sc_1)+Number(sc_2)+Number(sc_3)+Number(sc_4)+Number(sc_5);
						
						//sc_final = pround(sc_final,-1);
						
					  //$(".qu4").html(sc_final)
					  
					
						if (FBOpt != 1) {
						if(score9==1){
							
						$(".txt_Score_total5").show();
						 $(".qu5").html("5")
						 $(".Wrt9").css('visibility','visible');
						 $(".Wrng9").css('visibility','hidden');
						}else{
							
						$(".txt_Score_total5").hide();
						 $(".qu5").html("0")
						 $(".Wrng9").css('visibility','visible');
							$(".Wrt9").css('visibility','hidden');
						}
						}
							
	
 						
						
						
						
					
					
				
						if (SOpt == 2) {
							
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").attr("disabled",true)
								
                                DoneClicked = 1;
								$(".done1").click(function(){ 
                        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});

                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
						
						if (final_score == 1) {
								$(".solution").css('visibility','hidden');
								$(".newSet").css('visibility','hidden');
								$(".newSet").hide();
						} else {
								$(".solution").css('visibility','visible');
								$(".solution").show();
								$(".newSet").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").click(function(){
								$(".newSet,.solution").css('visibility','hidden');
								});
								
								}
		
							}
						}
						
					 
						
						
						
						if (SOpt == 3) {        
								
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").attr("disabled",false)
								
                                DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								})
								
		
							}                  /////////End for educo testing mode////////
				}
				////////////////////////////////////////////////////
				
				
				////////////////////////////////////////////////////
				doneButton = function() {
				
					var Responseflag="false";
					
					var FeedbackFlag = "false";
					var FeedbackText = "Incorrect";
					$(".respond").html("")
					
					
					feed_flag = 0;
					
					//////// For NFR //////////////
					final_score = 0;
					finalScore = 0;
					Attempted_score = attempted_num;
					/////// Closed NFR //////////////
					
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.prompt_New,.txt_Score_total").hide();
					$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8,.Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8").css('visibility','hidden');
						
					
					
					 var k1_text = trimSpaces(document.getElementById("inputText").value);
					 var k2_text = trimSpaces(document.getElementById("inputText1").value);
					 var k3_text = trimSpaces(document.getElementById("inputText2").value);
					 var k4_text = trimSpaces(document.getElementById("inputText3").value);
					 var k5_text = trimSpaces(document.getElementById("inputText4").value);
					 var k6_text = trimSpaces(document.getElementById("inputText5").value);
					 var k7_text = trimSpaces(document.getElementById("inputText6").value);
					// var k8_text = trimSpaces(document.getElementById("inputText7").value);
						
					 ////alert(val6)
///////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
					
					var score1 = 0;
					var score2 = 0;
					var score3 = 0;
					var score4 = 0;
					var score5 = 0;
					var score6 = 0;
					var score7 = 0;
					var score8 = 0;
			
			
			Final_ans1 = "–3";
			Final_ans2 = "1";
			Final_ans3 = "4";
			Final_ans4 = "–6";
			Final_ans5 = "8";
			Final_ans6 = "0.5";
			Final_ans7 = "11";
					var score9 = 0;
					
					
			
		



			if (trimzero(k1_text) == trimzero(Final_ans1)) {
						score1 = 1;
						} 
						else {
						score1 = 0;
						}
						if (trimzero(k2_text) == trimzero(Final_ans2)) {
						score2 = 1;
						} 
						else {
						score2 = 0;
						}
						if (trimzero(k3_text) == trimzero(Final_ans3)) {
						score3 = 1;
						} 
						else {
						score3 = 0;
						}
						if (trimzero(k4_text) == trimzero(Final_ans4)) {
						score4 = 1;
						} 
						else {
						score4 = 0;
						}
						if (trimzero(k5_text) == trimzero(Final_ans5)) {
						score5 = 1;
						} 
						else {
						score5 = 0;
						}
						if (trimzero(k6_text) == trimzero(Final_ans6)) {
						score6 = 1;
						} 
						else {
						score6 = 0;
						}
						if (trimzero(k7_text) == trimzero(Final_ans7)) {
						score7 = 1;
						} 
						else {
						score7 = 0;
						}
						
							
					
						
						//finalScore = Number(score1+score2/*+score6+score7+score8*/)/2;
						
						if (FBOpt != 1) {
							if (score1 == 1) {
							$(".Wrt1").css('visibility','visible');
							$(".Wrng1").css('visibility','hidden');
							$(".qu1").html("2")
							$(".txt_Score_total1").show();
						} else{
							$(".Wrng1").css('visibility','visible');
							$(".Wrt1").css('visibility','hidden');
							$(".qu1").html("0")
							$(".txt_Score_total1").show();
						}
						if (score2 == 1) {
							$(".Wrt2").css('visibility','visible');
							$(".Wrng2").css('visibility','hidden');
							$(".qu2").html("2")
							$(".txt_Score_total2").show();
						} else {
							$(".Wrng2").css('visibility','visible');
							$(".Wrt2").css('visibility','hidden');
							$(".qu2").html("0")
							$(".txt_Score_total2").show();
						}
						if (score3 == 1) {
							$(".Wrt3").css('visibility','visible');
							$(".Wrng3").css('visibility','hidden');
							$(".qu3").html("2")
							$(".txt_Score_total3").show();
						} else {
							$(".Wrng3").css('visibility','visible');
							$(".Wrt3").css('visibility','hidden');
							$(".qu3").html("0")
							$(".txt_Score_total3").show();
						}
						if (score4 == 1) {
							$(".Wrt4").css('visibility','visible');
							$(".Wrng4").css('visibility','hidden');
							sc_1="0.5"
						} else {
							$(".Wrng4").css('visibility','visible');
							$(".Wrt4").css('visibility','hidden');
							sc_1="0"
						}
						if (score5 == 1) {
							$(".Wrt5").css('visibility','visible');
							$(".Wrng5").css('visibility','hidden');
							sc_2="0.5"
						} else {
							$(".Wrng5").css('visibility','visible');
							$(".Wrt5").css('visibility','hidden');
							sc_2="0"
						}
						if (score6 == 1) {
							$(".Wrt6").css('visibility','visible');
							$(".Wrng6").css('visibility','hidden');
							$(".txt_Score_total").css('color','blue');
							sc_3="0.5"
						} else {
							$(".Wrng6").css('visibility','visible');
							$(".Wrt6").css('visibility','hidden');
							sc_3="0"
						}
						if (score7 == 1) {
							$(".Wrt7").css('visibility','visible');
							$(".Wrng7").css('visibility','hidden');
							sc_4="0.5"
						} else {
							$(".Wrng7").css('visibility','visible');
							$(".Wrt7").css('visibility','hidden');
							sc_4="0"
						}
		
						}
						
						if (score4 == 1) {
							
							sc_1="0.5"
						} else {
							
							sc_1="0"
						}
						if (score5 == 1) {
							
							sc_2="0.5"
						} else {
							
							sc_2="0"
						}
						if (score6 == 1) {
							
							sc_3="0.5"
						} else {
							
							sc_3="0"
						}
						if (score7 == 1) {
							
							sc_4="0.5"
						} else {
							
							sc_4="0"
						}
						
						
						sc_final=Number(sc_1)+Number(sc_2)+Number(sc_3)+Number(sc_4);
						//alert()
						sc_final = pround(sc_final,-1);
						
					  $(".qu4").html(sc_final)
					  
					  if(optionclicked==answer_final){
							score8=1;
						
						}else{
							score8=0;
						
						}
						
							
						if (FBOpt != 1) {
						if(score8==1){
							
						$(".txt_Score_total5").show();
						 $(".qu5").html("5")
						 $(".Wrt9").css('visibility','visible');
						 $(".Wrng9").css('visibility','hidden');
						}else{
							
						$(".txt_Score_total5").hide();
						 $(".qu5").html("0")
						 $(".Wrng9").css('visibility','visible');
							$(".Wrt9").css('visibility','hidden');
						}
						}
						
						finalScore = pround(Number(score1+score2+score3+score4+score5+score6+score7+score8)/8,-2);
					 // alert(finalScore)
						
						if ((finalScore<1) && (finalScore>0)) {
		                     FeedbackText = "";
		                     FeedbackFlag = "partial";
	                    }
	
	
	

		
	
		
		
		
		
		

		
		
		
	
					if(k1_text == "" && k2_text == "" && k3_text == "" && k4_text == "" && k5_text == "" && k6_text == "" && k7_text == "" && optionclicked==0){
						$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrt1,.Wrt2,.Wrt3,.Wrt4").css('visibility','hidden');
						$(".prompt_New").hide();
						$(".blankMessage_New").show();
						$(".incomplete_New").hide();

						Responseflag="false";
						var FeedbackText = "";
						$(".respond").html("")
						
					
						////////// for NFR //////
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
						/////////////for NFR/////////////
						
					}else {
						
						
						if(k1_text == "" || k2_text == ""  ||  k3_text == ""  ||  k4_text == ""  ||  k5_text == ""  ||  k6_text == ""  ||  k7_text == "" ){
						$(".prompt_New,.txt_Score_total").hide();
						$(".blankMessage_New").show();
						$(".incomplete_New").hide();
						$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8,.Wrng9").css('visibility','hidden');
				$(".Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8,.Wrt9").css('visibility','hidden');

						Responseflag="true";
						var FeedbackText = "";
						$(".remark,.respond").show().css("display","inline-block")
						$(".respond").html("")
					
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
							
							
						} else if (optionclicked==0){
						$(".prompt_New,.txt_Score_total").hide();
						$(".blankMessage_New").hide();
						$(".SelectAns").show();
						$(".Wrng1,.Wrng2,.Wrng3,.Wrng4,.Wrng5,.Wrng6,.Wrng7,.Wrng8,.Wrng9").css('visibility','hidden');
				        $(".Wrt1,.Wrt2,.Wrt3,.Wrt4,.Wrt5,.Wrt6,.Wrt7,.Wrt8,.Wrt9").css('visibility','hidden');

						Responseflag="true";
						var FeedbackText = "";
						$(".remark,.respond").show().css("display","inline-block")
						$(".respond").html("")
					
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
							
							
						}else{
						
						$(".remark,.respond").show().css("display","inline-block")
						Responseflag="true";
						
						
						
						
							
				    	if (finalScore==1) {
							
							FeedbackFlag = "true";
							FeedbackText = "Correct";
							//////// For NFR //////////////
							final_score = 1;
							$(".respond").css('color','#339966');
							/////// Closed NFR //////////////
						}else if ((finalScore>0) && (finalScore<1)) {
			
							FeedbackText = "Partially Correct";
			                FeedbackFlag = "partial";
							$(".respond").css('color','#0000CC');
							
						}  else {
							FeedbackFlag = "false";
							FeedbackText = "Incorrect";
							$(".respond").css('color','#FF0000');
						}
									
						
						if(feed_flag!=1){
					
								if (SOpt == 2) {
										$(".solution").show();
										$(".calc").css("pointer-events","none");
										$(".done1").css("pointer-events","none")
										$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").css({"pointer-events":"none"})
										$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").attr("disabled",true)
										DoneClicked = 1;
								$(".done1").click(function(){ 
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								});
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
										
								$(".tab").focus();		
								
										
										
								if (final_score == 1) {
										$(".solution").css('visibility','hidden');
										$(".newSet").css('visibility','hidden');
				
								} else {
									//////////alert('')
										$(".solution").css('visibility','visible');
										//$(".solution").css('visibility','visible');
										$(".newSet").css('visibility','visible');
										$(".newSet,.solution").show();
										$(".newSet").click(function(){
								        $(".newSet,.solution").css('visibility','hidden');
								
															
								});
									}
				
								}
								
								
								if (SOpt == 3) {                    /////////for educo testing mode////////
							
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.input9,.input10,.input11,.input12").attr("disabled",false)
								
                                //DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});
								
						}   
							}
						}
						
						/////// Closed NFR //////////////
						if (feed_flag != 1) {
							//////////alert(FBOpt+"  == FBOpt")
							if (FBOpt == 2 || FBOpt == undefined) {
								// if feedback is enabled
								$('.respond').html(FeedbackText);
								
							} else {
								
								$('.respond').html("Responded");
								 $(".respond").css('color','#339966');
								
							}
						}
					}
					  
					/*Construct a string out of user answer so that 
					when this string is passed back to this file, it can be parsed
					to reproduce the user answer. Keep the string as small as possible
					*/
					
					
 					
			//////////////////////////////////////////////////////////////////
					
					
					
					
					if(Responseflag == "false"){
						
						
						 $(".respond").html('')
						 $(".input1").html('')
						 $(".input2").html('')
						
						var FeedbackText = "";
						
						
						
					}else{
						
						
						
				/*	localStorage.removeItem("key")
					
					////alert($(temp1+"")
					
					localStorage.setItem("key",$('.input1').val()+"@serverString@"+$('.input2').val()+"@serverString@"+$('.input3').val()+"@serverString@"+$('.input4').val()+"@serverString@"+$('.input5').val()+"@serverString@"+$('.input6').val()+"@serverString@"+$('.input7').val()+"@serverString@"+$('.input8').val()+"@serverString@"+$('.input8').val()+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+score4+"@serverString@"+score5+"@serverString@"+score6+"@serverString@"+score7+"@serverString@"+score8+"@serverString@"+score9+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore+"@serverString@"+optionclicked);
					//////////////alert("jjjj")

					localStorage.getItem("key");*/
					
				//	$(".input4").val(String(tx1[10]))
						//$(".input5").val(String(tx1[11]))
						//score4=String(tx1[12])
						//score5=String(tx1[13])
					
					//alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
				
					
					var answerString = $('.input1').val()+"@serverString@"+$('.input2').val()+"@serverString@"+$('.input3').val()+"@serverString@"+$('.input4').val()+"@serverString@"+$('.input5').val()+"@serverString@"+$('.input6').val()+"@serverString@"+$('.input7').val()+"@serverString@"+$('.input8').val()+"@serverString@"+$('.input8').val()+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+score4+"@serverString@"+score5+"@serverString@"+score6+"@serverString@"+score7+"@serverString@"+score8+"@serverString@"+score9+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore+"@serverString@"+optionclicked
					
					//ExternalInterface.call("writeans",Qid,answerString,FeedbackFlag);
					////////////////alert("answerString == "+answerString);
					//writeans(Qid,answerString,FeedbackFlag);
 					//8thMar2018 BLR Comments
					//Start
					////////alert(final_score+"  final_score")
					////alert(finalScore)
					score = finalScore;
				   //	if (FeedbackFlag == 'true'){
					//	score = finalScore;
					//}else if (FeedbackFlag == 'partial'){
					//	score = finalScore;
					//}else{
					//	score = finalScore;
					//}
					parent.writeans(Qid, answerString, FeedbackFlag, score, Attempted_score);
					
					}
					
					//End
					
				};
						
						
			//preloadans(localStorage.getItem("key"));
				
			$(".calc_btn,.back,.delete,.clear,.solution").each(function (i) { $(this).attr('tabindex', -1); })	
/*///////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////*/								
						
/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////

						
/*////////////////////////////////////////////////////////////////////////16-7-2020 Done//////////////////////////////////////////////////////////////////////////////////*/
