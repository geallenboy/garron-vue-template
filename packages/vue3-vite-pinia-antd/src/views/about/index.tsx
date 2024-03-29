import { defineComponent } from 'vue';
import { Descriptions, Card, Tag } from 'ant-design-vue';
import pkg from '../../../package.json';

interface Options {
  [x: string]: string;
}

export default defineComponent({
  name: 'About1',
  setup() {
    console.log(pkg);
    const dependencies: Options = pkg.dependencies;
    const devDependencies: Options = pkg.devDependencies;

    return () => (
      <>
        <Card>
          <Card.Meta
            title="关于"
            description={`${pkg.name}的前端项目是基于Vue3.x、Vite2.x、
            Ant-Design-Vue3.x 、TypeScript4.x开发，
            提供了常用的图表，功能组件，帮助你快速搭建企业级中后台产品原型。`}
          ></Card.Meta>
        </Card>
        <Card class="mt-3">
          <Descriptions column={2} bordered title="项目信息">
            <Descriptions.Item label="版本">
              <Tag color="processing">{pkg.version}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="最后编译时间">
              <Tag color="processing">{'最后编译时间'}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="GitHub">
              <Tag color="processing">{'GitHub'}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="预览地址">
              <Tag color="processing">{'预览地址'}</Tag>
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card class="mt-3">
          <Descriptions column={2} bordered title="生产环境依赖">
            {Object.keys(dependencies).map((k: any) => {
              return <Descriptions.Item label={k}>{pkg.dependencies[k]}</Descriptions.Item>;
            })}
          </Descriptions>
        </Card>
        <Card class="mt-3">
          <Descriptions column={2} bordered title="开发环境依赖">
            {Object.keys(devDependencies).map((k: any) => {
              return <Descriptions.Item label={k}>{pkg.devDependencies[k]}</Descriptions.Item>;
            })}
          </Descriptions>
        </Card>
      </>
    );
  }
});
