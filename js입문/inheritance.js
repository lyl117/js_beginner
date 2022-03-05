class person{
  constructor(name, first,second){
  this.name = name;
  this.first = first;
  this.second = second;;
}
sum(){
  return this.first+this.second;
}
}
class PersonPlus extends Person {
  // person 부모 클래스의 기능을 실행하도록 함 
  constructor(name, first,second, third){
    super(name, first, second)
    // 부모 클래스 기능이 먼저 실행되도록 함.
      this.third=third;
    }
  sum(){
    return super.sum()+this.third;
} 
  avg(){
    return(this.first+this.second+this.third)/3;
  }
  }

  var kim = new PersonPlus("kim",10,20,30);
  console.log("kim.sum()",kim.sum());
  console.log("kim.avg()",kim.avg());