import React, { useState } from "react";
import TodoForm from "../component/TodoForm";
import { Form, message, Button } from "antd";

import { v4 as uuid } from "uuid";
import Item from "antd/es/list/Item";

const TodoPages = () => {
  const unique_id = uuid().slice(0, 2);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [todo, setTodo] = useState([]);

  const setterTitle = (e) => {
    setTitle(e.target.value);
  };

  const setterDesc = (e) => {
    setDesc(e.target.value);
  };

  const onFinish = () => {
    messageApi.open({
      type: "success",
      content: "SUCCES ADD TO TODO LIST",
      className: "custom-class",
      duration: 1,
    });
    setTodo((prev) => [
      ...prev,
      {
        id: unique_id,
        title: title,
        description: desc,
        complete: false,
      },
    ]);
    console.log(todo);
  };

  const deleteTodoList = (itemTodo) => {
    messageApi.open({
      type: "success",
      content: "SUCCES DELETE TODO",
      className: "custom-class",
      duration: 1,
    });
    setTodo(todo.filter((t) => t.id  !== itemTodo.id ))
  };
  const detailClick = () => {};
  return (
    <>
      <div className="wrapperTodo">
        <>
          <div className="content form">
            <TodoForm
              textHold={contextHolder}
              formVal={form}
              finishFunc={onFinish}
              changeFuncT={setterTitle}
              changeFuncDesc={setterDesc}
            />
          </div>
          <div className="content cont">
            <div className="wrapperList">
                <div className="header">
                    <h1>LIST TODO ADDED</h1>
                </div>
                {todo == null ??
                    <div className="contNotList">
                        <span>NO TODO LIST ADDED</span>
                    </div>
                }
              {todo.map((item, index) => {
                return (
                  <>
                    <div
                      key={index.to}
                      className="list"
                      onClick={() => detailClick(item)}
                    >
                      <span key={index}>{item.title}</span>
                      <button onClick={() => deleteTodoList(item)}>
                        HAPUS
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default TodoPages;
