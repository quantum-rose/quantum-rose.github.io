function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var ListItem=function(){function ListItem(template,index,height){_classCallCheck(this,ListItem);_defineProperty(this,"_visible",false);this.template=template;this.index=index;this.height=height;this.node=null}_createClass(ListItem,[{key:"visible",get:function get(){return this._visible},set:function set(val){this._visible=val;if(val&&!this.node){this.node=document.createElement("li");this.node.style.top=this.index*this.height+"px";this.node.innerHTML=this.template}}}]);return ListItem}();var VirtualList=function(){function VirtualList(elem,listItems,itemHeight){var _this=this;_classCallCheck(this,VirtualList);_defineProperty(this,"_onscroll",function(e){var newStart=Math.floor(_this.$root.scrollTop/_this.itemHeight);var newEnd=Math.min(newStart+_this.visibleCount,_this.listItems.length)-1;if(newEnd<_this.start||newStart>_this.end){for(var i=_this.start;i<=_this.end;i++){_this.listItems[i].visible=false;_this.$list.removeChild(_this.listItems[i].node)}for(var _i=newStart;_i<=newEnd;_i++){_this.listItems[_i].visible=true;_this.$list.append(_this.listItems[_i].node)}}else if(newStart<_this.start){for(var _i2=newEnd+1;_i2<=_this.end;_i2++){_this.listItems[_i2].visible=false;_this.$list.removeChild(_this.listItems[_i2].node)}for(var _i3=newStart;_i3<_this.start;_i3++){_this.listItems[_i3].visible=true;_this.$list.prepend(_this.listItems[_i3].node)}}else if(newEnd>_this.end){for(var _i4=_this.start;_i4<newStart;_i4++){_this.listItems[_i4].visible=false;_this.$list.removeChild(_this.listItems[_i4].node)}for(var _i5=_this.end+1;_i5<=newEnd;_i5++){_this.listItems[_i5].visible=true;_this.$list.append(_this.listItems[_i5].node)}}_this.start=newStart;_this.end=newEnd});this.$root=elem;this.listItems=listItems;this.itemHeight=itemHeight;this.$list=document.createElement("ul");this.$list.classList.add("list");this.$list.style.height=this.listItems.length*this.itemHeight+"px";this.$root.appendChild(this.$list);this.height=this.$root.offsetHeight;this.visibleCount=Math.ceil(this.height/this.itemHeight)+1;this.start=Math.floor(this.$root.scrollTop/this.itemHeight);this.end=Math.min(this.start+this.visibleCount,this.listItems.length)-1;for(var i=this.start;i<=this.end;i++){this.listItems[i].visible=true;this.$list.append(this.listItems[i].node)}this.$root.addEventListener("scroll",this._onscroll)}_createClass(VirtualList,[{key:"scrollTo",value:function scrollTo(index){if(index<0){index=0}if(index>this.listItems.length-1){index=this.listItems.length-1}this.$root.scrollTop=index*this.itemHeight}}]);return VirtualList}();var listItems=[];for(var i=0;i<100000;i++){listItems[i]=new ListItem("<div class=\"container\"><div class=\"img\"></div><div class=\"text\"><input type=\"text\" placeholder=\"".concat(i,"\" /></div></div>"),i,120)}var $virtualList=document.querySelector(".virtual-list");var virtualList=new VirtualList($virtualList,listItems,120);var $input=document.querySelector("#index");var $go=document.querySelector(".go");$go.addEventListener("click",function(){virtualList.scrollTo($input.value)});$input.addEventListener("keyup",function(e){if(e.keyCode===13){virtualList.scrollTo($input.value)}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInRlbXBsYXRlIiwiaW5kZXgiLCJoZWlnaHQiLCJub2RlIiwiX3Zpc2libGUiLCJ2YWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInRvcCIsImlubmVySFRNTCIsIlZpcnR1YWxMaXN0IiwiZWxlbSIsImxpc3RJdGVtcyIsIml0ZW1IZWlnaHQiLCJlIiwibmV3U3RhcnQiLCJNYXRoIiwiZmxvb3IiLCIkcm9vdCIsInNjcm9sbFRvcCIsIm5ld0VuZCIsIm1pbiIsInZpc2libGVDb3VudCIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwiaSIsInZpc2libGUiLCIkbGlzdCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kIiwicHJlcGVuZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwib2Zmc2V0SGVpZ2h0IiwiY2VpbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25zY3JvbGwiLCIkdmlydHVhbExpc3QiLCJxdWVyeVNlbGVjdG9yIiwidmlydHVhbExpc3QiLCIkaW5wdXQiLCIkZ28iLCJzY3JvbGxUbyIsInZhbHVlIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IjB5QkFBTUEsQ0FBQUEsUSxZQUNGLGtCQUFZQyxRQUFaLENBQXNCQyxLQUF0QixDQUE2QkMsTUFBN0IsQ0FBcUMsZ0VBTzFCLEtBUDBCLEVBQ2pDLEtBQUtGLFFBQUwsQ0FBZ0JBLFFBQWhCLENBQ0EsS0FBS0MsS0FBTCxDQUFhQSxLQUFiLENBQ0EsS0FBS0MsTUFBTCxDQUFjQSxNQUFkLENBQ0EsS0FBS0MsSUFBTCxDQUFZLElBQ2YsQywwQ0FHRCxjQUFjLENBQ1YsTUFBTyxNQUFLQyxRQUNmLEMsS0FDRCxhQUFZQyxHQUFaLENBQWlCLENBQ2IsS0FBS0QsUUFBTCxDQUFnQkMsR0FBaEIsQ0FDQSxHQUFJQSxHQUFHLEVBQUksQ0FBQyxLQUFLRixJQUFqQixDQUF1QixDQUNuQixLQUFLQSxJQUFMLENBQVlHLFFBQVEs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QixDQUZ4RixzQkFHWEEsQ0FIVyxDQUlYLEdBSlcsQ0FNbEIsQ0FFRCxHQUFNYSxDQUFBQSxZQUFZLENBQUdsQyxRQUFRLENBQUNtQyxhQUFULENBQXVCLGVBQXZCLENBQXJCLENBQ0EsR0FBTUMsQ0FBQUEsV0FBVyxDQUFHLEdBQUkvQixDQUFBQSxXQUFKLENBQWdCNkIsWUFBaEIsQ0FBOEIzQixTQUE5QixDQUF5QyxHQUF6QyxDQUFwQixDQUVBLEdBQU04QixDQUFBQSxNQUFNLENBQUdyQyxRQUFRLENBQUNtQyxhQUFULENBQXVCLFFBQXZCLENBQWYsQ0FDQSxHQUFNRyxDQUFBQSxHQUFHLENBQUd0QyxRQUFRLENBQUNtQyxhQUFULENBQXVCLEtBQXZCLENBQVosQ0FDQUcsR0FBRyxDQUFDTixnQkFBSixDQUFxQixPQUFyQixDQUE4QixVQUFZLENBQ3RDSSxXQUFXLENBQUNHLFFBQVosQ0FBcUJGLE1BQU0sQ0FBQ0csS0FBNUIsQ0FDSCxDQUZELEVBR0FILE1BQU0sQ0FBQ0wsZ0JBQVAsQ0FBd0IsT0FBeEIsQ0FBaUMsU0FBVXZCLENBQVYsQ0FBYSxDQUMxQyxHQUFJQSxDQUFDLENBQUNnQyxPQUFGLEdBQWMsRUFBbEIsQ0FBc0IsQ0FDbEJMLFdBQVcsQ0FBQ0csUUFBWixDQUFxQkYsTUFBTSxDQUFDRyxLQUE1QixDQUNILENBQ0osQ0FKRCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExpc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBpbmRleCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLm5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIF92aXNpYmxlID0gZmFsc2U7XHJcbiAgICBnZXQgdmlzaWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWw7XHJcbiAgICAgICAgaWYgKHZhbCAmJiAhdGhpcy5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdHlsZS50b3AgPSB0aGlzLmluZGV4ICogdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFZpcnR1YWxMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW0sIGxpc3RJdGVtcywgaXRlbUhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuJHJvb3QgPSBlbGVtO1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zID0gbGlzdEl0ZW1zO1xyXG4gICAgICAgIHRoaXMuaXRlbUhlaWdodCA9IGl0ZW1IZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuJGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHRoaXMuJGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xyXG4gICAgICAgIHRoaXMuJGxpc3Quc3R5bGUuaGVpZ2h0ID0gdGhpcy5saXN0SXRlbXMubGVuZ3RoICogdGhpcy5pdGVtSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLiRyb290LmFwcGVuZENoaWxkKHRoaXMuJGxpc3QpO1xyXG5cclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuJHJvb3Qub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUNvdW50ID0gTWF0aC5jZWlsKHRoaXMuaGVpZ2h0IC8gdGhpcy5pdGVtSGVpZ2h0KSArIDE7IC8vIOiDveeci+WIsOeahOWIl+ihqOmhueaVsOmHj1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0ID0gTWF0aC5mbG9vcih0aGlzLiRyb290LnNjcm9sbFRvcCAvIHRoaXMuaXRlbUhlaWdodCk7IC8vIOi1t+Wni+mhue+8jOesrOS4gOmhueS4ujBcclxuICAgICAgICB0aGlzLmVuZCA9IE1hdGgubWluKHRoaXMuc3RhcnQgKyB0aGlzLnZpc2libGVDb3VudCwgdGhpcy5saXN0SXRlbXMubGVuZ3RoKSAtIDE7IC8vIOe7k+adn+mhue+8iOWMheWQq++8ie+8jOacgOWkp+S4umxlbmd0aC0xXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YXJ0OyBpIDw9IHRoaXMuZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNbaV0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuJGxpc3QuYXBwZW5kKHRoaXMubGlzdEl0ZW1zW2ldLm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9vbnNjcm9sbCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uc2Nyb2xsID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhcnQgPSBNYXRoLmZsb29yKHRoaXMuJHJvb3Quc2Nyb2xsVG9wIC8gdGhpcy5pdGVtSGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBuZXdFbmQgPSBNYXRoLm1pbihuZXdTdGFydCArIHRoaXMudmlzaWJsZUNvdW50LCB0aGlzLmxpc3RJdGVtcy5sZW5ndGgpIC0gMTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0VuZCA8IHRoaXMuc3RhcnQgfHwgbmV3U3RhcnQgPiB0aGlzLmVuZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydDsgaSA8PSB0aGlzLmVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtc1tpXS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRsaXN0LnJlbW92ZUNoaWxkKHRoaXMubGlzdEl0ZW1zW2ldLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdTdGFydDsgaSA8PSBuZXdFbmQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNbaV0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRsaXN0LmFwcGVuZCh0aGlzLmxpc3RJdGVtc1tpXS5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3RhcnQgPCB0aGlzLnN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdFbmQgKyAxOyBpIDw9IHRoaXMuZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1zW2ldLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGxpc3QucmVtb3ZlQ2hpbGQodGhpcy5saXN0SXRlbXNbaV0ubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5ld1N0YXJ0OyBpIDwgdGhpcy5zdGFydDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtc1tpXS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGxpc3QucHJlcGVuZCh0aGlzLmxpc3RJdGVtc1tpXS5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3RW5kID4gdGhpcy5lbmQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhcnQ7IGkgPCBuZXdTdGFydDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtc1tpXS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRsaXN0LnJlbW92ZUNoaWxkKHRoaXMubGlzdEl0ZW1zW2ldLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmVuZCArIDE7IGkgPD0gbmV3RW5kOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1zW2ldLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbGlzdC5hcHBlbmQodGhpcy5saXN0SXRlbXNbaV0ubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXdTdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IG5ld0VuZDtcclxuICAgIH07XHJcblxyXG4gICAgc2Nyb2xsVG8oaW5kZXgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5saXN0SXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubGlzdEl0ZW1zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJHJvb3Quc2Nyb2xsVG9wID0gaW5kZXggKiB0aGlzLml0ZW1IZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGxpc3RJdGVtcyA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDEwMDAwMDsgaSsrKSB7XHJcbiAgICBsaXN0SXRlbXNbaV0gPSBuZXcgTGlzdEl0ZW0oXHJcbiAgICAgICAgLy8gYDxkaXY+IyR7aX08L2Rpdj5gLFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImltZ1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0ZXh0XCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIke2l9XCIgLz48L2Rpdj48L2Rpdj5gLFxyXG4gICAgICAgIGksXHJcbiAgICAgICAgMTIwXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCAkdmlydHVhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlydHVhbC1saXN0Jyk7XHJcbmNvbnN0IHZpcnR1YWxMaXN0ID0gbmV3IFZpcnR1YWxMaXN0KCR2aXJ0dWFsTGlzdCwgbGlzdEl0ZW1zLCAxMjApO1xyXG5cclxuY29uc3QgJGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZGV4Jyk7XHJcbmNvbnN0ICRnbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbycpO1xyXG4kZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2aXJ0dWFsTGlzdC5zY3JvbGxUbygkaW5wdXQudmFsdWUpO1xyXG59KTtcclxuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgdmlydHVhbExpc3Quc2Nyb2xsVG8oJGlucHV0LnZhbHVlKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==