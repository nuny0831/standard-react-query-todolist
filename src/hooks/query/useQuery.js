import { useQuery, useMutation, useQueryClient } from 'react-query';
import { addTodo, getTodos, removeTodo, switchTodo } from '../../api/todos';

const useReactQuery = (queryKeys) => {
    const queryClient = useQueryClient();

    const { data, isLoading, isError } = useQuery(queryKeys, getTodos);

    const { mutate: addMutation } = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKeys);
        },
    });
    const { mutate: switchMutation } = useMutation(switchTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKeys);
        },
    });
    const { mutate: deleteMutation } = useMutation(removeTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKeys);
        },
    });

    return { data, isLoading, isError, addMutation, switchMutation, deleteMutation };
};

export default useReactQuery;
