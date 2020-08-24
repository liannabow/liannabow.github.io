 //jQuery to wait until page loads to execute code:
 $(function(){
     //define global variables
     var $drawRow = $(".drawRow");
     var $paintRow = $(".paintRow");
     
     function Filter($imgId){
         
         switch ($imgId) {
             case "drawBtn":
                 $drawRow.show();
                 $paintRow.hide();
                 break;
             case "paintBtn":
                 $drawRow.hide();
                 $paintRow.show();
                 break;
             default:
                 break;
         }
         
     }
     
     //jQuery event listeners     
     $(".filterBtn").on('click', function(){
        //get the id of the image clicked
         var $imgId = $(this).attr('id');
         
         Filter($imgId); 
     });
     document.getElementById("year").innerHTML = new Date().getFullYear();
 }
 )