import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos,".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (values) => {
    console.log(values);
    // const name = values.target.name.value;
    // console.log(name);
    // const dateInput = values.target.date.value;
    // // Create a date object and adjust for timezone
    // const date = new Date(dateInput);
    // date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    // const id = uuidv4();

    // //const values = { name, date, id };
    // const todo = generateTodo(values);
    // todosList.append(todo); //use addItem method instead

    // addTodoValidator.resetValidation();

    addTodoPopup.close();
  },
});
addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  renderer: (data) => {
    const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
    const todoElement = todo.getView();
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});
section.renderItems();

// const openModal = (modal) => {
//   modal.classList.add("popup_visible");
// };

// const closeModal = (modal) => {
//   modal.classList.remove("popup_visible");
// };

function handleCheck(completed){
  todoCounter.updateCompleted(completed);
}
function handleDelete(completed){
  if(completed){
    todoCounter.updateCompleted(false);
  }
}

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};


addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

// addTodoCloseBtn.addEventListener("click", () => {
//   addTodoPopup.close();
// });

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;
//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();

//   const values = { name, date, id };
//   const todo = generateTodo(values);
//   todosList.append(todo); //use addItem method instead

//   addTodoValidator.resetValidation();

//   addTodoPopup.close();
// });

// initialTodos.forEach((item) => {
//   const todo = generateTodo(item);
//   todosList.append(todo); //use addItem method instead
// });

const addTodoValidator = new FormValidator(validationConfig, addTodoForm);
addTodoValidator.enableValidation();
