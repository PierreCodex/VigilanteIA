import React, { useState, Fragment, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AddNewTask, AddTask, Close } from '../../../Constant';
import { Check, Trash2 } from 'react-feather';
import TodoContext from '../../../_helper/Todo';
import { Btn, H4, LI, UL } from '../../../AbstractElements';

const TodoList = () => {
    const { allTodos, addNewTodo, removeItems, selectedItem } = useContext(TodoContext);
    const [addTask, setAddTask] = useState('');
    const border_danger = useState('');
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('pending');
    useEffect(() => {
    }, [allTodos]);
    const addNewTask = () => {
        if (task === '') {
            document.getElementById('newtask').classList.remove('border-danger');
            document.getElementById('newtask').classList.add('border-danger');
        } else {
            addNewTodo(task);
            setAddTask(' visible');
            setTask('');
            document.getElementById('newtask').value = '';
            document.getElementById('newtask').classList.add('taskmag-hide');
            document.getElementById('newtask').classList.remove('taskmag-show');
            document.getElementById('addTaskBtn').classList.add('hide');
        }
    };
    const handleRemoveTodo = (todoId) => {
        removeItems(todoId);
        toast.success('Deleted Task !');
    };
    const handleMarkedTodo = (itemId, itemStatus) => {
        if (itemStatus === 'completed') {
            setStatus('pending');
            selectedItem(itemId, status);
            toast.success('Task Completed !');
        } else if (itemStatus === 'pending') {
            setStatus('completed');
            selectedItem(itemId, status);
            toast.error(' Task In-completed !');
        }
    };
    const openTaskWrapper = () => {
        setAddTask(' visible');
        document.getElementById('addTaskBtn').classList.add('hide');
    };
    const closeTaskWrapper = () => {
        setAddTask('');
        document.getElementById('addTaskBtn').classList.remove('hide');
    };
    const onTaskChanged = (e) => {
        setTask({
            task: e.currentTarget.value
        });
    };
    return (
        <Fragment>
            <div className="todo-list-body">
                <UL attrUL={{ className: 'simple-list', id: 'todo-list' }}>
                    {allTodos.length > 0 ?
                        allTodos.map((todo, index) =>
                            <LI attrLI={{ className: 'task ' + todo.status }} key={index} >
                                <div className="task-container">
                                    <H4 attrH4={{ className: 'task-label' }}>{todo.title}</H4>
                                    <span className="task-action-btn">
                                        <span className="action-box large delete-btn" title="Delete Task" onClick={() => handleRemoveTodo(todo.id)} ><Trash2 /></span>
                                        <span className="action-box large complete-btn" title="Mark Complete" onClick={() => handleMarkedTodo(todo.id, status)} ><Check />
                                        </span>
                                    </span>
                                </div>
                            </LI>
                        ) : ''}
                </UL>
            </div>
            <div className="todo-list-footer">
                <div className="add-task-btn-wrapper">
                    <span className="add-task-btn" id="addTaskBtn">
                        <Btn attrBtn={{ color: 'primary', onClick: openTaskWrapper }} > {AddNewTask}</Btn></span>
                </div>
                <div className={'new-task-wrapper' + addTask}>
                    <textarea className={'ng-untouched ng-pristine' + border_danger} id="newtask"
                        placeholder="Enter new task here. . ."
                        defaultValue={task} onChange={onTaskChanged} ></textarea>
                    <Btn attrBtn={{ color: 'danger', className: 'cancel-btn', id: 'close-task-panel', onClick: closeTaskWrapper }} >{Close}</Btn>
                    <Btn attrBtn={{ color: 'success', className: 'ms-3 add-new-task-btn', id: 'add-task', onClick: addNewTask }} >{AddTask}</Btn>
                </div>
            </div>
        </Fragment >
    );
};
export default TodoList;