{
    //Utility Types

    //Pics Types
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    
    type TodoPreview = Pick<Todo, "title" | "completed">;

    //Omit Types
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    
    type TodoWithoutDescription = Omit<Todo, "description">;


    //Require Types
    interface Props {
        a?: number;
        b?: string;
    }
    
    type RequiredProps = Required<Props>;

    //partial Types 
    interface Todo {
        title: string;
        description: string;
    }
    
    type PartialTodo = Partial<Todo>;

    //readOnly Types
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    
    type ReadonlyPoint = Readonly<Point>;


    //Record types
    type Obj = Record<string, string>

    const obj : Obj = {
        a : 'aaa',
        b : 'bbb',
        c : 'ccc'
    }
    
}