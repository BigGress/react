import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
    console.log(filter)
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(e => e.completed);
        case "SHOW_ACTIVE":
            return todos.filter(e => !e.completed);
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;