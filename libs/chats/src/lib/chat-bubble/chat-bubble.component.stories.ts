import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatBubbleComponent } from './chat-bubble.component';

export default {
  title: 'ChatBubbleComponent',
  component: ChatBubbleComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChatBubbleComponent>;

const Template: Story<ChatBubbleComponent> = (args: ChatBubbleComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}