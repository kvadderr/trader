import MetricData from "./components/Home/MetricData/MetricData"
import Main from "./pages/Main/Main"
import { ConfigProvider, FloatButton } from "antd"
import { QuestionCircleOutlined } from '@ant-design/icons';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: '#fff'
        },
        components: {
          Tabs: {
            itemColor: "#fff",
            itemHoverColor: "#fff",
            itemSelectedColor: "#fff",
            inkBarColor: "#fff",
            itemActiveColor: "#fff"
          },
        },
      }}

    >
      <div className="wrapper">
        <Main />
        <MetricData />
      </div>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 20, bottom: 20 }} />
    </ConfigProvider>
  )
}

export default App
