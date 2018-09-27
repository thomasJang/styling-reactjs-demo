import * as React from 'react';
import { styled } from 'styledComponents';
import { Form, DatePicker, TimePicker, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

const Component = styled.div`
  width: 100%;
  [data-box] {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 40px;

    //background-color: rgba(255, 255, 255, 0.7);
    background-color: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 6px;

    h1 {
      color: var(--primary-color);
    }
  }

  .ant-btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;

interface IProps extends FormComponentProps {
  className?: string;
}

class LoginForm extends React.Component<IProps> {
  render() {
    const { getFieldDecorator } = this.props.form;
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
      <Component>
        <div data-box>
          <Form>
            <h1>Hello, Hanoi !</h1>
            <Form.Item label="DatePicker" colon={false}>
              {getFieldDecorator('date-picker', {})(<DatePicker />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Component>
    );
  }
}

export default Form.create()(LoginForm);
