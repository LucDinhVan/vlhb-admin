import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import { DropOption } from 'components'
import { Link } from 'umi'
import styles from './List.less'
import moment from 'moment';

const { confirm } = Modal

class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: `Bạn có chắc chắn xóa bản ghi này không??`,
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, ...tableProps } = this.props

    const columns = [
      {
        title: 'Tên người dùng',
        dataIndex: 'name',
        key: 'name',
        width: '25%',
        fixed: 'left',
      },
      {
        title: 'Key',
        dataIndex: 'key',
        key: 'key',
        width: '25%',
        render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        width: '7%',
        render: text => <span>{text ? '✅' : '❌'}</span>,
      },
      {
        title: 'SĐT',
        dataIndex: 'phone',
        key: 'phone',
        width: '7%',
      },
      {
        title: 'Ngày hết hạn',
        dataIndex: 'expiredTime',
        key: 'expiredTime',
        render: text => <span>{moment.unix(text).format("DD-MM-YYYY HH:mm:ss")}</span>,
      },
      {
        title: 'Thời gian tạo',
        dataIndex: 'createTime',
        key: 'createTime',
        render: text => <span>{moment.unix(text).format("DD-MM-YYYY HH:mm:ss")}</span>,
      },
      {
        title: 'Hành động',
        key: 'operation',
        fixed: 'right',
        width: '8%',
        render: (text, record) => {
          return (
            <DropOption
              onMenuClick={e => this.handleMenuClick(record, e)}
              menuOptions={[
                { key: '1', name: `Cập nhật` },
                { key: '2', name: `Xoá` },
              ]}
            />
          )
        },
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => `Tổng ${total} mục`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
