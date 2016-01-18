   function tableCreate() {
       var num = [];
       num[0] = document.getElementById('numStart').value;
       num[1] = document.getElementById('numEnd').value;

       var element = document.getElementById("tab");

       // create elements <tle> and a <tbody>
          

       // cells creation
       for (var j = num[0]; j <= num[1]; j++) {
           // table row creation
           var row = document.createElement("tr");

           var cell1 = document.createElement("td");
           var cellText1 = document.createTextNode(j);
           cell1.appendChild(cellText1);
           row.appendChild(cell1);

           var cell2 = document.createElement("td");
           var mult = j * j;
           var cellText2 = document.createTextNode(mult);
           cell2.appendChild(cellText2);
           row.appendChild(cell2);

           var answer = "";

           var checkPlus = 5*j*j + 4;
           var checkMin = 5*j*j - 4;
          var isSqrtPlus = Math.sqrt(checkPlus);
          var isSqrtMin = Math.sqrt(checkMin);

           if (isSqrtPlus % 1 === 0 || isSqrtMin % 1 === 0 ) {
               answer = "Yes";
           } else {
               answer = "No";
           }

           var cell3 = document.createElement("td");
           var cellText3 = document.createTextNode(answer);
           cell3.appendChild(cellText3);
           row.appendChild(cell3);
           //row added to end of table body
           element.appendChild(row);
       }


       
       // put <table> in the <body>
       element.appendChild(tbl);
       // tbl border attribute to 
       tbl.setAttribute("border", "2");
   }
