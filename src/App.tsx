import MetricData from "./components/Home/MetricData/MetricData"
import Main from "./pages/Main/Main"
import { ConfigProvider, FloatButton, theme} from "antd"
import { QuestionCircleOutlined } from '@ant-design/icons';
import Header from "./components/Header/Header";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Button: {
            textHoverBg: "#111319"
          }
        }
      }}

    >
      <Header />
      <MetricData />
      <div className="wrapper">
        <Main />
      </div>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 20, bottom: 20 }} />
    </ConfigProvider>
  )
}

export default App
