#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgMagentaBright.bold("\n\t <<<<<<<<<< Wellcome To Todo List >>>>>>>>>> \n "));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do :",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// This function will add new task in totdo list.
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(` \n ${newTask.task} Task added in todo list successfully`);
};
// this funtion will show  all the tasks added in the todo list.let
let viewTask = async () => {
    console.log(" \n Your Todo List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
};
// Function to delete a task from the list.
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete :",
        }
    ]);
    let deletetedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletetedTask} This task has been deleted successfully from your Todo List`);
};
// Function to update task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update "
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter your new task nane :"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n task at index.no ${update_task_index - 1} updated succesfully.[for updated list check 'view task']`);
};
main();
