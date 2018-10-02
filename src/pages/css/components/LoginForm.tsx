import * as React from 'react';
import { styled } from 'styledComponents';
import {
  Form,
  DatePicker,
  Button,
  Input,
  Switch,
  Select,
  Slider,
  Row,
  Col,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';

const SComponent = styled.div`
  width: 100%;

  border: 1 solid var(--border-color-base);
  background: linear-gradient(to top, var(--normal-color), #fff 20%);
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 6px;

  [data-form-header] {
    text-align: center;
    margin: 20px 0;
    h1 {
      font-family: var(--heading-font-family);
      color: var(--primary-color);
      margin-bottom: 5px;
      font-size: 36px;
    }
  }

  .ant-input {
    &:hover,
    &:active,
    &:focus {
      border-color: var(--primary-color);
    }
  }
  .ant-btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
  .ant-switch-checked {
    background-color: var(--primary-color);
  }
  .ant-slider-track {
    background-color: var(--primary-color);
  }
  .ant-slider-handle,
  .ant-slider-dot-active {
    border-color: var(--primary-color);
  }
  .ant-form-vertical .ant-form-item {
    margin-bottom: 5px;
  }
  .ant-form-item-label {
    label {
      color: var(--primary-color);
      font-weight: bold;
    }
  }

  [data-btn-wrap] {
    text-align: right;
    .ant-btn {
      margin: 5px;
    }
  }
`;

interface IProps extends FormComponentProps {
  className?: string;
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class LoginForm extends React.Component<IProps> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    document.body.style.setProperty(
      '--primary-color',
      colors[getRandomInt(0, 6)],
    );

    this.props.form.validateFields((err: any, values: any) => {
      // console.log('Received values of form: ', values);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <SComponent>
        <div data-form-header>
          <h1>{'Hello, Hanoi !'}</h1>
          <p>{'Developer Master Class Hanoi, Vietnam.'}</p>
        </div>

        <Form onSubmit={this.handleSubmit} layout={'vertical'}>
          <Form.Item label="Name" colon={false}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please select your favourite colors!',
                },
              ],
            })(<Input placeholder="Input your name" />)}
          </Form.Item>

          <Form.Item label="Birth Date" colon={false}>
            {getFieldDecorator('birthDate', {})(<DatePicker />)}
          </Form.Item>

          <Row>
            <Col span={12}>
              <Form.Item label="Use Option 1">
                {getFieldDecorator('switch1', {
                  initialValue: true,
                  valuePropName: 'checked',
                })(<Switch />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Use Option 2">
                {getFieldDecorator('switch2', {
                  initialValue: true,
                  valuePropName: 'checked',
                })(<Switch />)}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Favorite Color">
            {getFieldDecorator('select-multiple', {
              initialValue: ['red', 'blue'],
            })(
              <Select
                showArrow
                mode="multiple"
                placeholder="Please select favourite colors"
              >
                <Select.Option value="red">{'Red'}</Select.Option>
                <Select.Option value="green">{'Green'}</Select.Option>
                <Select.Option value="blue">{'Blue'}</Select.Option>
              </Select>,
            )}
          </Form.Item>

          <div data-btn-wrap>
            <Button type="primary" htmlType="submit">
              {'Submit'}
            </Button>
            <Button>{'Cancel'}</Button>
          </div>
        </Form>
      </SComponent>
    );
  }
}

export default Form.create()(LoginForm);
