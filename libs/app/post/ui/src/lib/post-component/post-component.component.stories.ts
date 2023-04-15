import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PostComponentComponent } from './post-component.component';

export default {
  title: 'PostComponentComponent',
  component: PostComponentComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PostComponentComponent>;

const Template: Story<PostComponentComponent> = (args: PostComponentComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}