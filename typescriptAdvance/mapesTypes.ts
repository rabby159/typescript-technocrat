{
    //maps types

    type MyMappedType<T> = {
        [P in keyof T]: T[P];
    };
    
    
    //-------------------------
    
    type User = {
        id: number;
        name: string;
    };
    
    type OptionalUser = {
        [P in keyof User]?: User[P];
    };
    
    const optionalUser: OptionalUser = {}; // OK
    optionalUser.id = 1; // OK
    optionalUser.name = "John"; // OK
    
}