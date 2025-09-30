// submit data 
$(document).ready(function(){
    $("#btnadd").click(function(e){
        e.preventDefault();
        let uid = $("#uid").val();
        let uname = $("#nameid").val();
        let uemail = $("#emailid").val();
        let uage = $("#ageid").val();
        let ugender = $("#genderid").val();

        let dataobj = {id: uid,name: uname, email: uemail, age: uage, gender: ugender};
        
        $.ajax({
            url : "AJAX/submit.php",
            type : "POST",
            data : JSON.stringify(dataobj),
            success : function(data){
                data = data.trim()
                $("#msg").html(data).show();
                if(data !== "Fill all fields"){
                    $("#myform").trigger("reset");
                     showdata();
                }
            }

        })

    })





    //Retrieve data(list.php)
    function showdata(){
        output = "";
        $.ajax({
            url : "list.php",
            type : "GET",
            dataType : "json",  //receiving in json obj, not string
            success : function(data){
                for(let i=0; i<data.length; i++){
                    output += `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].gender}</td>
                        <td><button class='edit' data-sid=${data[i].id}>Edit</button> <button class='delete' data-sid=${data[i].id}>Delete</button></td>
                    </tr>`
                }
                $("#tbody").html(output)
            }
        })
    }
    showdata()
    




    //delete row
    $("tbody").on("click",".delete",function(){
        let sid = $(this).attr("data-sid");
        mydata = {id: sid}
        $mythis = this;

        $.ajax({
            url : "AJAX/delete.php",
            type : "POST",
            data : JSON.stringify(mydata),
            success : function(data){
                $("#msg").html(data).show();
                showdata();
            }
        })
    })






    //edit data
    $("tbody").on("click",".edit",function(){
        let sid = $(this).attr("data-sid");
        mydata = {id: sid}

        $.ajax({
            url : "AJAX/edit.php",
            type : "POST",
            data : JSON.stringify(mydata),
            dataType : "json",
            success : function(data){
                $("#uid").val(data[0].id);
                $("#nameid").val(data[0].name);
                $("#emailid").val(data[0].email);
                $("#ageid").val(data[0].age);
                $("#genderid").val(data[0].gender);
            }
        })



    
    })


})