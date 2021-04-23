import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from 'components'
import { Button, Row, Col, DatePicker, Form, Input } from 'antd'

const { Search } = Input
const { RangePicker } = DatePicker

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

class Filter extends Component {
  formRef = React.createRef()

  handleFields = (fields) => {
    const { createTime } = fields
    if (createTime && createTime.length) {
      fields.createTime = [
        moment(createTime[0]).unix(),
        moment(createTime[1]).unix(),
      ]
    }
    return fields
  }

  handleSubmit = () => {
    const { onFilterChange } = this.props
    const values = this.formRef.current.getFieldsValue()
    const fields = this.handleFields(values)
    onFilterChange(fields)
  }

  handleReset = () => {
    const fields = this.formRef.current.getFieldsValue()
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = []
        } else {
          fields[item] = undefined
        }
      }
    }
    this.formRef.current.setFieldsValue(fields)
    this.handleSubmit()
  }
  handleChange = (key, values) => {
    const { onFilterChange } = this.props
    let fields = this.formRef.current.getFieldsValue()
    fields[key] = values
    fields = this.handleFields(fields)
    onFilterChange(fields)
  }

  render() {
    const { onAdd, filter } = this.props
    const { name, address } = filter

    let initialCreateTime = []
    if (filter.createTime && filter.createTime[0]) {
      initialCreateTime[0] = moment(filter.createTime[0])
    }
    if (filter.createTime && filter.createTime[1]) {
      initialCreateTime[1] = moment(filter.createTime[1])
    }

    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        initialValues={{ name, address, createTime: initialCreateTime }}
      >
        <Row gutter={24}>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
            <Form.Item name="name">
              <Search
                placeholder={`Tìm tên`}
                onSearch={this.handleSubmit}
              />
            </Form.Item>
          </Col>
          <Col
            {...ColProps}
            xl={{ span: 10 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            id="createTimeRangePicker"
          >
            <FilterItem label={`Ngày tạo`}>
              <Form.Item name="createTime">
                <RangePicker style={{ width: '100%' }} />
              </Form.Item>
            </FilterItem>
          </Col>
          <Col
            {...TwoColProps}
            xl={{ span: 10 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Row type="flex" align="middle" justify="space-between">
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="margin-right"
                  onClick={this.handleSubmit}
                >
                  Tìm
                </Button>
                <Button onClick={this.handleReset}>
                  Reset
                </Button>
              </div>
              <Button type="ghost" onClick={onAdd}>
                Thêm
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    )
  }
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Filter
