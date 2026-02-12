let person = {
    name : "John",
    age : 30,
    isEmployed : true,
    greet: () => {
        console.log("Hello my name is " + this.name);
        console.log("I am " + this.age + " years old.");
        console.log(this);
        let innerGreet = () => {
            console.log("Inner greet: Hello my name is " + this.name);
            console.log("Inner greet: I am " + this.age + " years old.");
            console.log("Inner greet: " + this);
        }
        innerGreet.call(this);
        return;
    }       
}   
person.greet();




