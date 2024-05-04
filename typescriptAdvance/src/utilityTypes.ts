{
    //Utility Types

    //Pics Types
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    
    type TodoPreview = Pick<Todo, "title" | "completed">;

    
}