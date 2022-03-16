     // copy text 
     function copy(that){
      var inp =document.createElement('input');
      document.body.appendChild(inp)
      inp.value =that.textContent
      inp.select();
      document.execCommand('copy',false);
      inp.remove();
      }
      
      // show hide class
      
      seleCard.onclick = function(){
          var seleCard = document.getElementById('seleCard');
          var cShow = document.getElementById('cShow');
          cShow.classList.toggle("cHide");  
      }
      
      
      
      // copy Input value 1
      
      document.getElementById("CopyText").onclick = function() {
        this.select();
        document.execCommand('copy');
      }
      
      // show hide class
      
      CopyText.onclick = function(){
          var CopyText = document.getElementById('CopyText');
          var inShow = document.getElementById('inShow');
          inShow.classList.toggle("inHide");  
      }
      
      // copy Input value 2
      
      document.getElementById("CopyText2").onclick = function() {
        this.select();
        document.execCommand('copy');
      }
      
      // show hide class
      
      CopyText2.onclick = function(){
          var CopyText2 = document.getElementById('CopyText2');
          var inShow2 = document.getElementById('inShow2');
          inShow2.classList.toggle("inHide2");  
      }
      
      // copy Input value 3
      
      document.getElementById("CopyText3").onclick = function() {
        this.select();
        document.execCommand('copy');
      }
      
      // show hide class
      
      CopyText3.onclick = function(){
          var CopyText3 = document.getElementById('CopyText3');
          var inShow3 = document.getElementById('inShow3');
          inShow3.classList.toggle("inHide3");  
      }
      
      // copy Input value 4
      
      document.getElementById("CopyText4").onclick = function() {
        this.select();
        document.execCommand('copy');
      }
      
      // show hide class
      
      CopyText4.onclick = function(){
          var CopyText4 = document.getElementById('CopyText4');
          var inShow4 = document.getElementById('inShow4');
          inShow4.classList.toggle("inHide4");  
      }
      