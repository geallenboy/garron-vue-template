import { defineComponent } from 'vue';
import { Result } from 'ant-design-vue';

export default defineComponent({
  name: 'Error',
  setup() {},
  render() {
    return <Result status="error" title="error" subTitle="错误页面" />;
  }
});
