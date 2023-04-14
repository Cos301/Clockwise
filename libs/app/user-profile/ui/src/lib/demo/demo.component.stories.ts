import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DemoComponent } from './demo.component';

export default {
  title: 'DemoComponent',
  component: DemoComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DemoComponent>;

const Template: Story<DemoComponent> = (args: DemoComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}