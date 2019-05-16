$(document).ready(function () {
    $("#txtFullName").focus();
});

var  i=0;

$("#txtFullName,#txtAddress,#txtNIC").click(function () {
    $(this).css('border-color', 'lightgray');
});

$( function() {
    $( "tbody" ).sortable();
    $( "tbody" ).disableSelection();
} );

$("#btnAdd").click(function () {
    validateFields();

    addTable();

    deleteRow();
});

function validateFields() {
    $('#txtFullName,#txtAddress,#txtNIC').each(function () {
        if($(this).val()==''){
            $(this).css('border-color','red');
            }
            else{
                return;
        }
    });
}

function addTable() {

    var text =$("#txtNIC").val();

    if(/\d{9}$/.test(text)) {
    var name=$("#txtFullName").val();
    var address=$("#txtAddress").val();
    var nic=$("#txtNIC").val();
    var img="<img src='images/recyclebin.png' width='48px' height='48px'>";

    i=i+1;
    if($("#txtFullName,#txtAddress,#txtNIC").val()!=''){
        $("#tblStudents tbody").append(
            "<tr>"+
            "<td>"+"<b>"+i+"</b>"+"</td>"+
            "<td>"+name+"</td>"+
            "<td>"+address+"</td>"+
            "<td>"+nic+"</td>"+
            "<td>"+img+"</td>"+
            "</tr>");

        $("#tblStudents tfoot").hide();
      mouseHover();

    }
    } else {
        return;
    }
}

function mouseHover() {

    $("#tblStudents").css('cursor','pointer');

        $("#tblStudents>tbody>tr>td>img").hover(
            function () {
                $(this).attr('src', 'images/recyclebin-hover.png');
        }, function () {
            $(this).attr('src', 'images/recyclebin.png');
        });
}

function deleteRow() {
    $("#tblStudents>tbody>tr>td>img").click(function () {
        $("#tblStudents tbody tr:last-child td:last-child").click(function () {
            if(confirm("Are you sure")){
                $(this).parent().parent().fadeTo(1000,0, function () {
                    $(this).remove();
                    if($("#tblStudents>tbody>tr").length===0){
                        $("tfoot").show();
                    }
                })
            }
        })
    })
}