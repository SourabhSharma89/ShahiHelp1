$(document).ready(function(){
						   
						    $(".mini_tablBtn").click(function(){
					   					$(".tablesolu").css("top",1+"em");
					   					$(".tablesolu").css("left",20+"em");
									});
						   
						   var OrientationPort = window.orientation
		if(checkMobile)
		{

			if (window.innerHeight < window.innerWidth || OrientationPort === 90 || OrientationPort === -90) 
			{	 
				$(".question").css("padding-bottom", "0%")
				$(".fntsz").css("font-size", "1.5em")
				$(".InptDnTd1").css("width","44%")
				$(".InptDnTd2").css("width","12%")
				$(".InputAndDoneTbl").css("width","100%") ;
				$(".solutionMainSteps").css({"width":"100%","margin-left":"0%"}) ;
			}
			else
			{
				$(".question").css("padding-bottom", "2%")
				$(".fntsz").css("font-size", "1.8em")
				$(".InputAndDoneTbl").css("width","100%") ;
				$(".InptDnTd1").css("width","45%")
				$(".InptDnTd2").css("width","10%")
				$(".solutionMainSteps").css({"width":"100%","margin-left":"0%"}) ;
			
			$(".mini_tablBtn").click(function(){
					   					$(".tablesolu").css("top",7+"em");
					   					$(".tablesolu").css("left",0+"em");
									});
			
			}
		}
		else
		{
			$(".question").css("padding-bottom", "0%")
			$(".fntsz").css("font-size", "1.4em")
		}	  
						   
						    
						  window.SpaceClick=0;
						  
						  
					$(".side1,.side2,.side3,.side1_1").hide();
					 
					 
					 $(".step1").click(function(){ 
												$(".input1 ").focus();
										SpaceClick = 1;			   
									$(".SpaceBarDiv,.spacebar").hide();
								
								$(".step1").css({'color':'#C00','box-shadow':'0px 3px 5px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step4,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  
						  
						       $(".middle,.side1,.side2,.side1_1").hide();
								$(".Step1_div").show();
							
						  
						    });
							
							
							  $(".step2").click(function(){ 
														 $(".input1 ").focus();
						    		SpaceClick = 2;
								$(".middle,.side2").hide();
								$(".Step2_div").show();									 
								$(".SpaceBarDiv,.spacebar,.side1,.side1_1").show();
								$(".SpaceBarDiv,.spacebar").show();
									  
									  $(".step2").css({'color':'#C00','box-shadow':'0px 3px 5px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
	$(".step1,.step3,.step4,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
							  
						    });
							  
							 
							  
							  $(".step3").click(function(){ 
						  			SpaceClick = 3;
							    $(".middle").hide();
								$(".Step3_div").show();	
									  $(".SpaceBarDiv").hide();
									   
									   $(".step3").css({'color':'#C00','box-shadow':'0px 3px 5px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });
					       
						 /*  $(".solution ").click(function(){ 
					 
					  			 $(".side1,.side2,.side1_1").hide();
					 		 });  
							 
							 $(".ClickToAnsDiv").click(function(){
																
																
															$(".SpaceBarDiv,.spacebar").hide();	
																
																});*/
					 
					 
					/*  $(".step4").click(function(){ 
						  			SpaceClick = 4;
							    $(".middle").hide();
								$(".Step4_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step4").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step1,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						  
						
						  
						    });
					 
					 
					 
					  $(".step5").click(function(){ 
						  			SpaceClick = 5;
							    $(".middle").hide();
								$(".Step5_div").show();	
									 $(".SpaceBarDiv").show();
									   
									   $(".step5").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step4,.step1,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });
					 
					  $(".step6").click(function(){ 
						  			SpaceClick = 6;
							    $(".middle").hide();
								$(".Step6_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step6").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step1,.step5,.step4,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });
					 
					 
					  $(".step7").click(function(){ 
						  			SpaceClick = 7;
							    $(".middle").hide();
								$(".Step7_div").show();	
									$(".SpaceBarDiv").show();
									   
									   $(".step7").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step1,.step5,.step6,.step4,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });
					 
					 
					  $(".step8").click(function(){ 
						  			SpaceClick = 8;
							    $(".middle").hide();
								$(".Step8_div").show();	
									   $(".SpaceBarDiv").hide();
									   
									   $(".step8").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step1,.step5,.step6,.step7,.step4").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });*/
					 
					 
					 
					 /*******************************************************************************************************************************************/
					 
						$(document).keydown(function(e){
								  
								
								  if(e.which==32 && SpaceClick!=0 ){
									
						
									
													
									  spacebarClickFunction();
												
								  }
											  });  	
					 
					  
				
			
				
				/*	$(".spacebar").click(function(){
								
												spacebarClickFunction();
												 
												  });
					*/
					
						spacebarClickFunction = function(){
							SpaceClick++;	
					
						//alert(SpaceClick)
							
							/*if(SpaceClick==2)
							{
								 $(".middle").hide();
								$(".Step2_div,.side1,.side1_1").show();	
								$(".SpaceBarDiv,.spacebar").hide();
									   $(".step2").css({'color':'#C00','box-shadow':'0px 3px 5px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step8,.step3,.step1,.step5,.step6,.step7,.step4").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
								
							}
							else if(SpaceClick==3)
							{
								   $(".middle").hide();
								$(".Step3_div").show();	
									   $(".SpaceBarDiv").hide();
									   
									   $(".step3").css({'color':'#C00','box-shadow':'0px 3px 5px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==4)
							{
								   $(".middle").hide();
								$(".Step4_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step4").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step3,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==5)
							{
								   $(".middle").hide();
								$(".Step5_div").show();	
									   $(".SpaceBarDiv").show();

									   
									   $(".step5").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step3,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==6)
							{
								   $(".middle").hide();
								$(".Step6_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step6").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step3,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==7)
							{
								   $(".middle").hide();
								$(".Step7_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step7").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step6,.step3,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==8)
							{
								   $(".middle").hide();
								$(".Step8_div").show();	
									   $(".SpaceBarDiv").hide();
									   
									   $(".step8").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step6,.step7,.step3").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}*/
							$(".input1 ").focus();
						}
						
						
						
					
				
					  
						   });