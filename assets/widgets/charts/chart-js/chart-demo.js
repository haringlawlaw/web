$(function(){var a=function(){return Math.round(100*Math.random())},b={labels:["January","February","March","April","May","June","July"],datasets:[{fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,0.8)",highlightFill:"rgba(220,220,220,0.75)",highlightStroke:"rgba(220,220,220,1)",data:[a(),a(),a(),a(),a(),a(),a()]},{fillColor:"rgba(151,187,205,0.5)",strokeColor:"rgba(151,187,205,0.8)",highlightFill:"rgba(151,187,205,0.75)",highlightStroke:"rgba(151,187,205,1)",data:[a(),a(),a(),a(),a(),a(),a()]}]},c=document.getElementById("canvas-1").getContext("2d");window.myBar=new Chart(c).Bar(b,{responsive:!0});var d=[{value:300,color:"#F7464A",highlight:"#FF5A5E",label:"Red"},{value:50,color:"#46BFBD",highlight:"#5AD3D1",label:"Green"},{value:100,color:"#FDB45C",highlight:"#FFC870",label:"Yellow"},{value:40,color:"#949FB1",highlight:"#A8B3C5",label:"Grey"},{value:120,color:"#4D5360",highlight:"#616774",label:"Dark Grey"}],c=document.getElementById("chart-area").getContext("2d");window.myDoughnut=new Chart(c).Doughnut(d,{responsive:!0});var a=function(){return Math.round(100*Math.random())},e={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fillColor:"rgba(220,220,220,0.2)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[a(),a(),a(),a(),a(),a(),a()]},{label:"My Second dataset",fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[a(),a(),a(),a(),a(),a(),a()]}]},c=document.getElementById("canvas-2").getContext("2d");window.myLine=new Chart(c).Line(e,{responsive:!0});var f=[{value:300,color:"#F7464A",highlight:"#FF5A5E",label:"Red"},{value:50,color:"#46BFBD",highlight:"#5AD3D1",label:"Green"},{value:100,color:"#FDB45C",highlight:"#FFC870",label:"Yellow"},{value:40,color:"#949FB1",highlight:"#A8B3C5",label:"Grey"},{value:120,color:"#4D5360",highlight:"#616774",label:"Dark Grey"}],c=document.getElementById("chart-area-2").getContext("2d");window.myPie=new Chart(c).Pie(f,{responsive:!0});var g=[{value:300,color:"#F7464A",highlight:"#FF5A5E",label:"Red"},{value:50,color:"#46BFBD",highlight:"#5AD3D1",label:"Green"},{value:100,color:"#FDB45C",highlight:"#FFC870",label:"Yellow"},{value:40,color:"#949FB1",highlight:"#A8B3C5",label:"Grey"},{value:120,color:"#4D5360",highlight:"#616774",label:"Dark Grey"}],c=document.getElementById("chart-area-3").getContext("2d");window.myPolarArea=new Chart(c).PolarArea(g,{responsive:!0});var h={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",fillColor:"rgba(220,220,220,0.2)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[28,48,40,19,96,27,100]}]};window.myRadar=new Chart(document.getElementById("canvas-4").getContext("2d")).Radar(h,{responsive:!0})});