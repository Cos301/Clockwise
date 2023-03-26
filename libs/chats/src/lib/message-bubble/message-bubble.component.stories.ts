import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MessageBubbleComponent } from './message-bubble.component';

export default {
  title: 'MessageBubbleComponent',
  component: MessageBubbleComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MessageBubbleComponent>;

const Template: Story<MessageBubbleComponent> = (args: MessageBubbleComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    chatName:  '',
    profilePhotoUrl:  '',
    msgPreview:  '',
    time:  '',
    unreadCount:  0,
}