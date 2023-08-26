$(document).ready(function()
{
	
	 window.ua = navigator.userAgent.toLowerCase();
	window.isAndroid = ua.indexOf("android") > -1;	
	 if(isAndroid) {
		 $(".AndroidSet").css({"font-size":"1.45em","font-weight":"100","vertical-align":"-0.23em","line-height":"20%"})
		 
                        }
	
	
				
					
	
				$(".mini_tblsolu").hide();
					
					$(".mini_tablBtn").click(function(){
					   $(".mini_tblsolu").show();
					});
					$(".cross").click(function(){
					   $(".mini_tblsolu").hide();
					});
	
	$(".ZtableDivMain").draggable({"containment":'.container'});
						$(".ZtableDivMain").on('mouseenter mouseup' , function(){
							$(".ZtableDivMain").css("cursor","grab");
						})
						$(".ZtableDivMain").mouseleave(function(){
							$(".ZtableDivMain").css("cursor","default");
						})
						$(".ZtableDivMain").mousedown(function(){
							$(".ZtableDivMain").css("cursor","grabbing");
						})
	
	
	$(".solution").click(function()
	{
										   
		$(".solutionContainer").fadeIn();
		$(".solutionMainSteps,.solutionText,.SolutionRemark,.solutionContainer").show();
		var sol_height = $(".SolutionRemark").height();
							 
		$(".middle").css("margin-top",+0+"px");
								 
	})
							
});