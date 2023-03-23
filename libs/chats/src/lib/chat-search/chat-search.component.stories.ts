import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatSearchComponent } from './chat-search.component';

export default {
  title: 'ChatSearchComponent',
  component: ChatSearchComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChatSearchComponent>;

const Template: Story<ChatSearchComponent> = (args: ChatSearchComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}