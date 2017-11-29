/**
 * Created by 乐园 on 2017/11/29.
 */
function getByClass(className, context) {
    var result = [];
    context = context || document;
    var arr = context.getElementsByTagName('*');
    for(var i=0; i<arr.length; i++){
        //arr[i].className = "aa bb"
        if(arr[i].className.indexOf(className) != -1){
            result.push(arr[i]);
        }
    }
    return result;
}