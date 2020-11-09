

	$(document).ready(function(){
         $('.collectonme').hide();
                document.body.className  = "darkBg";
                $('.collectonme').show();
                $(document).snowfall({collection : '.collectonme', flakeCount : 250, minSize: 5, maxSize:8, round : true});
        
    });




//<script>
//	   	$(document).ready(function(){
//            $('.collectonme').hide();
//            //Start the snow default options you can also make it snow in certain elements, etc.
//            $(document).snowfall();
//            
//            $("#clear").click(function(){
//                $(document).snowfall('clear'); // How you clear
//            });
//            
//            $("#round").click(function(){
//                document.body.className  = "darkBg";
//                $('.collectonme').hide();
//                $(document).snowfall('clear');
//                $(document).snowfall({round : true, minSize: 5, maxSize:8}); // add rounded
//            });
//            
//            $("#shadows").click(function(){
//                document.body.className  = "lightBg";
//                $('.collectonme').hide();
//                $(document).snowfall('clear');
//                $(document).snowfall({shadow : true, flakeCount:200}); // add shadows
//            });
//
//            $("#roundshadows").click(function(){
//                document.body.className  = "lightBg";
//                $('.collectonme').hide();
//                $(document).snowfall('clear');
//                $(document).snowfall({shadow : true, round : true,  minSize: 5, maxSize:8}); // add shadows
//            });
//            
//            $("#collection").click(function(){
//                $(document).snowfall('clear');
//                document.body.className  = "darkBg";
//                $('.collectonme').show();
//                $(document).snowfall({collection : '.collectonme', flakeCount : 250});
//            });
//            
//            $("#imgbut1").click(function(){
//                $('.collectonme').hide();
//                $(document).snowfall('clear');
//                $(document).snowfall({image :"assets/img/snow/snow3.png", minSize: 10, maxSize:32});
//            });
//
//$("#imgbut2").click(function(){
//                $('.collectonme').hide();
//                $(document).snowfall('clear');
//                $(document).snowfall({image :"assets/img/snow/snow1.png", minSize: 10, maxSize:32});
//            });
//$("#imgbut3").click(function(){
//                $('.collectonme').hide();
//                $(document).snowfall('clear');
//                $(document).snowfall({image :"assets/img/snow/2.png", minSize: 10, maxSize:32});
//            });
//
//
//        });
// 
//	</script>