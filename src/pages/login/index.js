import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Button, Row, Input, Form } from 'antd'
import { GlobalFooter } from 'components'
import { FacebookFilled } from '@ant-design/icons'
import { setLocale } from 'utils'
import config from 'utils/config'

import styles from './index.less'

const FormItem = Form.Item

@connect(({ loading, dispatch }) => ({ loading, dispatch }))
class Login extends PureComponent {
  render() {
    const { dispatch, loading } = this.props

    const handleOk = (values) => {
      dispatch({ type: 'login/login', payload: values })
    }
    let footerLinks = [
      {
        key: 'github',
        title: <FacebookFilled />,
        href: 'https://www.facebook.com/VL-Coder-341825860042670',
        blankTarget: true,
      },
    ]

    if (config.i18n) {
      footerLinks = footerLinks.concat(
        config.i18n.languages.map((item) => ({
          key: item.key,
          title: (
            <span onClick={setLocale.bind(null, item.key)}>{item.title}</span>
          ),
        }))
      )
    }

    return (
      <Fragment>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img alt="logo" src={config.logoPath} />
            <span>{config.siteName}</span>
          </div>
          <Form onFinish={handleOk}>
            <FormItem name="username" rules={[{ required: true }]} hasFeedback>
              <Input placeholder={`Tên đăng nhập`} />
            </FormItem>
            <FormItem name="password" rules={[{ required: true }]} hasFeedback>
              <Input type="password" placeholder={`Mật khẩu`} />
            </FormItem>
            <Row>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading.effects.login}
              >
                Đăng nhập
              </Button>
            </Row>
          </Form>
        </div>
        <div className={styles.footer}>
          <GlobalFooter links={footerLinks} copyright={config.copyright} />
        </div>
      </Fragment>
    )
  }
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default Login
