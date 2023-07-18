<script type="text/javascript">
<!--
 var imlocation = "https://flbc.edu/wp-content/uploads/banner/";
 var currentdate = 0;
 var image_number = 0;
 function ImageArray (n) {
   this.length = n;
   for (var i =1; i <= n; i++) {
     this[i] = ' '
   }
 }
 image = new ImageArray(14)
 image[0] = 'homebanner-01.jpg'
 image[1] = 'homebanner-02.jpg'
 image[2] = 'homebanner-03.jpg'
 image[3] = 'homebanner-04.jpg'
 image[4] = 'homebanner-05.jpg'
 image[5] = 'homebanner-06.jpg'
 image[6] = 'homebanner-07.jpg'
 image[7] = 'homebanner-08.jpg'
 image[8] = 'homebanner-09.jpg'
 image[9] = 'homebanner-10.jpg'
 image[10] = 'homebanner-13.jpg'
 image[11] = 'homebanner-14.jpg'
 image[12] = 'homebanner-15.jpg'
 image[13] = 'homebanner-16.jpg'
 var rand = 60/image.length
 function randomimage() {
 	currentdate = new Date()
 	image_number = currentdate.getSeconds()
 	image_number = Math.floor(image_number/rand)
 	return(image[image_number])
 }
 document.write("<img style='height: 100%; width: 100%; object-fit: cover;' id='randomheader' src='" + imlocation + randomimage()+ "'>"); 
setInterval(function () { 
 document.getElementById("randomheader").src= '" + imlocation + randomimage()+ "'>");
    }, 10000); 
//-->
</script>
