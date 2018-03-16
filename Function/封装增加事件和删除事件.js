<script>
  function addEvent(elem,type,handler){
    if(elem.addEventListener){
      elem.addEventListener(type,handler);

    }else if(elem.attachEvent){
       elem[type + handler] = function(){
         handler.call(elem);
       };
       elem.attachEvent("on" + type,elem[type + handler]); //elem.xx固定时，在多个添加时，与删除对象不符合
    }else {
      elem["on" + type] = handler;
    }
  }
    function removeEvent(elem,type,handler){
      if(elem,removeEventLister){
        elem.removeEventLister(type,handler);
      }else if (elem.detachEvent) {
        elem.detachEvent("on" + type ,elem[type + handler]);
      }else {
        elem["on" + type] = null;
      }
    }
</script>
