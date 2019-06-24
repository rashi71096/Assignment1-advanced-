import React from 'react';
import './App.css';

import { Modal, Form, Input} from 'antd';
//const { Button, Modal, Form, Input, Radio } = antd;

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

      return (
        <Modal
          visible={visible}
          title="Basic Modal"
          okText="OK"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form {...formItemLayout}>
            <Form.Item label="Name:"> 
              {getFieldDecorator('name',{initialValue:this.props.name, 
                rules: [{ required: true, message: 'Please input Name.' }],
              })(<Input type ="textarea"/>)}
            </Form.Item>
            <Form.Item label="Email:">
              {getFieldDecorator('email', {initialValue:this.props.email ,
              rules: [{ required: true, message: 'Please input Email Id.' },{type:'email',message:'this mail is invalid'}],
              })(<Input type="email" />)}
            </Form.Item>
            <Form.Item label="Phone:" > 
              {getFieldDecorator('phone', {initialValue:this.props.phone ,
                rules: [{ required: true, message: 'Please input Phone number.' }],
              })(<Input type ="textarea"/>)}
            </Form.Item>
            <Form.Item label="Website:" > 
              {getFieldDecorator('website', {initialValue:this.props.website ,
                rules: [{ required: true, message: 'Please input Website.' }],
              })(<Input type ="textarea"/>)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

export default CollectionCreateForm;