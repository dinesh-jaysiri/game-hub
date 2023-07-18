import { ListItem, Spinner, UnorderedList } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  title: string;
}

function Test() {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  const { data, error , isLoading} = useQuery<Todo[],Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if(isLoading) return <Spinner />;

  if(error) return <h2>{error.message}</h2>
  return (
    <UnorderedList>
      {data?.map((todo) => (
        <ListItem>{todo.title}</ListItem>
      ))}
    </UnorderedList>
  );
}

export default Test;
