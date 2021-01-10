`use strict`
arr = [1,2,3,4]

function Myarray(){
  this.length = 0;
  
  this.push = function push(item) {
    this[this.length] = item;
    return ++this.length;
  };

  this.pop = function () {
    if(this.length === 0){
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  
  this.forEach = function forEach(func) {
    for(let i = 0; i < this.length; i++){
      func(this[i], i, this);
    }
  }
  
  this.map = function map(func) {
    for(let i = 0; i < this.length; i++){
      const mapNew = func(this[i], i, this);
      return mapNew;
    }
  }
  
}

const myArr = new Myarray();

console.log(myArr.push(1));