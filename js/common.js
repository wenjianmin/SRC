//  ========== 
//  = 公共js = 
//  ==========
$(function(){
	/*左侧导航菜单*/
	$('.submenu>a').click(function(e){
		e.preventDefault();
		
		var  submenu=$(this).siblings('ul');
		var li=$(this).parent('li');

		if(submenu.is(':visible')){
			submenu.slideUp();
		}else{
			submenu.slideDown().parent('li').siblings().find('ul').slideUp();
		}
		
/*通过样式切换来进行*/
//		if(li.hasClass('open')){
//			submenu.slideUp();
//			li.removeClass('open');
//		}else{
//			submenu.slideDown();
//			li.addClass('open').siblings().removeClass('open');
//		}
	
	});
	
});
