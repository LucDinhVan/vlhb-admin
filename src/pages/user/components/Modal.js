import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Radio, Modal, DatePicker } from 'antd'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

class UserModal extends PureComponent {
  formRef = React.createRef()

  handleOk = () => {
    const { item = {}, onOk } = this.props

    this.formRef.current
      .validateFields()
      .then((values) => {
        const data = {
          ...values,
          expiredTime: moment(values.expiredTime.expiredTime).format('X'),
        }
        onOk(data)
      })
      .catch((errorInfo) => {
        console.log(errorInfo)
      })
  }

  render() {
    const { item = {}, onOk, form, ...modalProps } = this.props
    return (
      <Modal {...modalProps} onOk={this.handleOk}>
        <Form
          ref={this.formRef}
          name="control-ref"
          initialValues={{
            ...item,
            key: item.key ? item.key : uuidv4(),
            status: item.status !== undefined? item.status: true,
            expiredTime: item.expiredTime
              ? moment.unix(item.expiredTime)
              : moment().add(30, 'days'),
          }}
          layout="horizontal"
        >
          <FormItem
            name="name"
            rules={[
              {
                required: true,
                message: `Vui lòng nhập tên người dùng!`,
              },
            ]}
            label={`Tên người dùng`}
            hasFeedback
            {...formItemLayout}
          >
            <Input />
          </FormItem>
          <FormItem
            name="key"
            rules={[
              {
                required: true,
                message: `Vui lòng nhập 1 key không trùng lặp!`,
              },
            ]}
            label={`Key`}
            hasFeedback
            {...formItemLayout}
          >
            <Input disabled/>
          </FormItem>
          <FormItem
            name="status"
            rules={[
              {
                required: true,
                message: `Vui lòng chọn trạng thái key!`,
              },
            ]}
            label={`Trạng thái`}
            hasFeedback
            {...formItemLayout}
          >
            <Radio.Group>
              <Radio value>
                <span role="img" aria-label="Activate">
                  ✅
                </span>
              </Radio>
              <Radio value={false}>
                <span role="img" aria-label="Deactivate">
                  ❌
                </span>
              </Radio>
            </Radio.Group>
          </FormItem>
          <FormItem
            name="phone"
            rules={[
              {
                required: true,
                pattern: /^0\d{9}$/,
                message: `Đầu vào không phải là số điện thoại hợp lệ!`,
              },
            ]}
            label={`SĐT`}
            hasFeedback
            {...formItemLayout}
          >
            <Input />
          </FormItem>
          <FormItem
            name="expiredTime"
            rules={[
              {
                required: true,
                message: `Đầu vào không phải là thời gian hợp lệ!`,
              },
            ]}
            label={`Ngày hết hạn`}
            hasFeedback
            {...formItemLayout}
          >
            <DatePicker />
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

UserModal.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default UserModal
