function toggle(){
  $('#resolution').toggle(500);
}

$(() => {
  
  const theUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=`
  let borough = null;
  // $('form').on('submit', (event) => {
    
  // });

  $(":button").click(function() {
    borough = this.id;
    // console.log(borough);
    const fullUrl = theUrl + borough;
  event.preventDefault(); // prevents refresh
      // complaintInput = $('#displayComplaints').val(); //get the value of the input
      // console.log(complaintInput);
      complaintInput = document.getElementById('No-of-complaints').value;
    
      console.log(complaintInput);

    $.ajax({
      url: fullUrl,
      type: "GET",
      data: {
        "$limit" : complaintInput || 10
     
      },
    // }).done(function(data) {
    //   // alert("Retrieved " + data.length + " records from the dataset!");
    //   console.log(data); 
    // }); 
      
     }) 
      .then(function(data) {
        // let limit = 10
          for (let i = 0; i < data.length; i++) {
           
          $('#displayComplaints') .append($("<tr>")
          .append($("<td>").append(data[i].descriptor))
          
          // $('#response')
          .append($("<td align='right'> <input type='button' value='What did the police do' id='policebutton'onclick='toggle()'></button>"))
          .append($("<tr id='resolution'><td colspan='2'>").append(data[i].resolution_description)))
          };
          console.log(data); 
   
    
             
    })
    
})
})

// .then(function(data) {
//   for (let i = 0; i < data.length; i++) {

//   $('#displayComplaints').append(data[i].descriptor) .append($("<tr>"));
//   $('#response').after(data[i].resolution_description) .append($("<tr>"))
//   };
//   console.log(data);
  




