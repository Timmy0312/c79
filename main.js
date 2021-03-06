var name_of_the_student_array = [];
function submit ()
{

  var display_student_array = [];
for (var counter=1; counter <= 4; counter++)
{
    var name_1 = document.getElementById("name_of_the_student_"+counter).value;
    name_of_the_student_array.push(name_1);
    console.log(name_1);

}

    
    console.log(name_of_the_student_array);

var len=name_of_the_student_array.length;
console.log(len);

for(var counter=0; counter < len; counter++)
{
    display_student_array.push("<h4>NAME - "+ name_of_the_student_array[counter] + "</h4>");
    console.log(display_student_array);


}

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var remove_commas_array=display_student_array.join(" ");
console.log(remove_commas_array);
document.getElementById("display_name_without_commas").innerHTML=remove_commas_array;
    
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting (){

name_of_the_student_array.sort();
var display_student_array=[];
var len=name_of_the_student_array.length;
console.log(len);

for(var counter=0; counter < len; counter++)
{
    display_student_array.push("<h4>NAME - "+ name_of_the_student_array[counter] + "</h4>");
    console.log(display_student_array);


}



var remove_commas_array=display_student_array.join(" ");
console.log(remove_commas_array);
document.getElementById("display_name_without_commas").innerHTML=remove_commas_array;


}