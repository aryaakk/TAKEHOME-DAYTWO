import React from "react";
import "./../assets/style.css";

import { Input, Form, Button, message } from "antd";
const { TextArea } = Input;

const TodoForm = (props) => {
  return (
    <>
      <div className="wrapperForm">
        {props.textHold}
        <Form
          form={props.formVal}
          onFinish={props.finishFunc}
          layout="horizontal"
          className="formInp"
        >
          <Form.Item className="itemForm inp">
            <Input
              onChange={props.changeFuncT}
              placeholder="Input Your Todo Today"
              className="textInp"
            />
            <TextArea rows={10} onChange={props.changeFuncDesc} />
          </Form.Item>
          <Form.Item className="itemForm">
            <Button className="submit" htmlType="submit">Add</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default TodoForm;

//   const [form] = Form.useForm();
//   const [messageApi, contextHolder] = message.useMessage();
//   const finishFunc = () => {
//     messageApi.open({
//       type: "success",
//       content: "This is a prompt message with custom className and style",
//       className: "custom-class",
//       duration : 1
//     });
//   };
