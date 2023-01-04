const BASE_URL = 'http://localhost:8080';

// Login Form
// $("#loginForm").submit((e) => {
//     console.log('LOGIN')
//     e.preventDefault();
//     $.ajax({
//         url:`${BASE_URL}/auth/login_auth`,
//         method: 'GET',
//         success: (msg) => {
//             console.log('MSG: ', msg);
            
//         }
//     })
// })

// Register Form Submitted
$("#registerForm").submit(function(e){
    alert("You successfully Register!");

});

$("#updateForm").submit(function(e){
    // Prevent Submitting the form early
    e.preventDefault();

    // Get all data in the form
    var unindexed_array = $(this).serializeArray();

    // Store data
    var data = {}

    // Fixing the format of the User data and Store it
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    $.ajax({
        // Access the Update API
        "url" : `${BASE_URL}/updateUser/${data.id}`,
        "method" : "PUT",
        "data" : data,
        success: function (data) {
            // Refresh Page
            location.reload(); 
        }
    }).done(function(response){
        alert("User Data Successfully Updated!");
    })

})

$( "#btnDelete" ).click(function() {
   var id = $(this).val();

    // Confirmation if the user want to delete
    if(confirm("You want to delete this user?")){
        // Access the deleteUser API
        $.ajax({
            "url" : `${BASE_URL}/deleteUser/${id}`,
            "method" : "DELETE",
            success: function (data) {
                // Refresh Page
                location.reload(); 
            }
        }).done(function(response){
            alert("User Deleted Successfully!");
            
        })
    }
  });