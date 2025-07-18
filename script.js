let count=1;
function increment(){
    count++;
    document.getElementById("data_cont").innerHTML=count;
}
function decrement(){
    if(count>=1){

        count--;
        document.getElementById("data_cont").innerHTML=count;
    }
}