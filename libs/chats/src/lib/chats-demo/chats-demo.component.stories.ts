import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatsDemoComponent } from './chats-demo.component';

export default {
  title: 'ChatsDemoComponent',
  component: ChatsDemoComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChatsDemoComponent>;

const Template: Story<ChatsDemoComponent> = (args: ChatsDemoComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}