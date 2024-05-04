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


    
}