{
    //Encapsulation In OOP

    class Person {
        private id: number;
        public name: string;
      
        constructor(id: number, name: string) {
          this.id = id;
          this.name = name;
        }
      
        displayInfo(): void {
          console.log(`ID: ${this.id}, Name: ${this.name}`);
        }
      }
      
      const person = new Person(5, "Alice");
      console.log(person.name); // Accessible
    //   console.log(person.id); // Error: Property 'id' is private
      
}