import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Row, Col, Card } from 'antd'
import { Color } from 'utils'
import { Page, ScrollBar } from 'components'
import { Quote, Weather } from './components'
import styles from './index.less'


@connect(({ dashboard, loading }) => ({
  dashboard,
  loading,
}))
class Dashboard extends PureComponent {
  render() {
    const { dashboard, loading } = this.props
    const { weather, quote } = dashboard

    return (
      <Page
        // loading={loading.models.dashboard && sales.length === 0}
        className={styles.dashboard}
      >
        <Row gutter={24}>
          <Col lg={6} md={24}>
            <Row gutter={24}>
              <Col lg={24} md={12}>
                <Card
                  bordered={false}
                  className={styles.weather}
                  bodyStyle={{
                    padding: 0,
                    height: 204,
                    background: Color.blue,
                  }}
                >
                  <Weather
                    {...weather}
                    loading={loading.effects['dashboard/queryWeather']}
                  />
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg={18} md={12}>
            <Card
              bordered={false}
              className={styles.quote}
              bodyStyle={{
                padding: 0,
                height: 204,
                background: Color.peach,
              }}
            >
              <ScrollBar>
                <Quote {...quote} />
              </ScrollBar>
            </Card>
          </Col>
        </Row>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default Dashboard
