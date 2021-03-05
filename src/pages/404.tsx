import React from 'react'
import { Result } from 'antd'

const Error = () => (
  <Result
    status="404"
    title="404"
    subTitle="Xin lỗi, trang bạn đã truy cập không tồn tại."
  />
)

export default Error
