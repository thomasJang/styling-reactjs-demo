import * as React from 'react';
import { styled, darken, lighten, desaturate } from 'styledComponents';
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

const Component = styled.div`
  width: 100%;
  [data-box] {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px 40px;
    border: 1 solid ${p => p.theme.border_color_base};
    background: linear-gradient(to top, ${p => p.theme.normal_color}, #fff 20%);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
  }

  [data-form-header] {
    text-align: center;
    margin: 20px 0;
    h1 {
      font-family: ${p => p.theme.heading_font_family};
      color: ${p => darken(p.theme.primary_color)};
      margin-bottom: 5px;
      font-size: 36px;
    }
  }

  .ant-form-vertical .ant-form-item {
    margin-bottom: 5px;
  }
  .ant-form-item-label {
    label {
      color: ${p => desaturate(p.theme.primary_color)};
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

class LoginForm extends React.Component<IProps> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      console.log('Received values of form: ', values);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Component>
        <div data-box>
          <Form onSubmit={this.handleSubmit} layout={'vertical'}>
            <div data-form-header>
              <h1>Hello, Hanoi !</h1>
              <p>Developer Master Class Hanoi, Vietnam.</p>
            </div>

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
                  <Select.Option value="red">Red</Select.Option>
                  <Select.Option value="green">Green</Select.Option>
                  <Select.Option value="blue">Blue</Select.Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="Satisfaction">
              {getFieldDecorator('slider', {
                initialValue: 75,
              })(
                <Slider
                  marks={{
                    0: 'F',
                    20: 'E',
                    40: 'D',
                    60: 'C',
                    80: 'B',
                    100: 'A',
                  }}
                />,
              )}
            </Form.Item>

            <div data-btn-wrap>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>

              <Button>Cancel</Button>
            </div>
          </Form>
        </div>
      </Component>
    );
  }
}

export default Form.create()(LoginForm);
