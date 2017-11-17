 //jQuery to wait until page loads to execute code:
 $(function(){
     //define global variables
     var $devBtn = $("#devBtn");
     var $designBtn = $("#designBtn");
     var $illusBtn = $("#illusBtn");
     var $designRow = $(".designRow");
     var $devRow = $(".devRow");
     var $illusRow = $(".illusRow");
     
     function Filter($imgId){
         
         switch ($imgId) {
             case "devBtn":
                 $illusRow.hide();
                 $devRow.show();
                 $designRow.hide();
                 break;
             case "designBtn":
                 $illusRow.hide();
                 $devRow.hide();
                 $designRow.show();
                 break;
             case "illusBtn":
                 $illusRow.show();
                 $devRow.hide();
                 $designRow.hide();
                 break;
         }
         
     }
     
     //jQuery event listeners     
     $(".filterBtn").on('click', function(){
        //get the id of the image clicked
         var $imgId = $(this).attr('id');
         
         Filter($imgId); 
     });
 }
 )