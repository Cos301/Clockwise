import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MessagesContainerComponent } from './messages-container.component';

export default {
  title: 'MessagesContainerComponent',
  component: MessagesContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MessagesContainerComponent>;

const Template: Story<MessagesContainerComponent> = (args: MessagesContainerComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}