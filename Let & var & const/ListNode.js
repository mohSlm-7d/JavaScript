export default class ListNode{
    constructor(data, next = null, prev = null){
        this._data = data;
        this._next = next;
        this._prev = prev;
    }

   get data(){
    return this.data;
   }
   set data(val){
    this._data=data;
   }
   
   get next(){
    return this._next;
   }
   set next(val){
    this._next = val;
   }

   get prev(){
    return this._prev;
   }
   set prev(val){
    this._prev = val;
   }

}