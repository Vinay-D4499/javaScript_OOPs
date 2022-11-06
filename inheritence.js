class student{
    sid =123
   display(){
    console.log(this.sid)
   }

}
class studentB extends student{
    sname = "vivek"
    show(){
        console.log(this.sname)
    }
}
studentObj = new studentB()
studentObj.show();
studentObj.display();
