import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatHeaderComponent } from './chat-header.component';

export default {
  title: 'ChatHeaderComponent',
  component: ChatHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChatHeaderComponent>;

const Template: Story<ChatHeaderComponent> = (args: ChatHeaderComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}