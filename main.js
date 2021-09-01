name_array=[];
function submit(){
var displayNames=[];
for (var i = 0; i < 4; i++) {
    var nameStudent = document.getElementById("name_of_the_student_"+i).value;
    console.log(nameStudent);
    name_array.push(nameStudent)

}
console.log(name_array);
var lenght_array=name_array.length; 
for (var index = 0; index < lenght_array; index++) {
    displayNames.push("<h4> Name - - "+name_array[index]+"</h4>");
    
} 
console.log(displayNames);
document.getElementById("display_name_with_commas").innerHTML=displayNames;
var romove_commas=displayNames.join(" ");
document.getElementById("display_name_without_commas").innerHTML=romove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
name_array.sort();
console.log(name_array);
var display_sort_array=[];
var lenght_sort=name_array.length;
for (var index = 0; index < lenght_array; index++) {
    display_sort_array.push("<h4> Name - - "+name_array[index]+"</h4>");
    

}
var romove_commas=display_sort_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=romove_commas;
}