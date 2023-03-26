import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PostsContainerComponent } from './posts-container.component';

export default {
  title: 'PostsContainerComponent',
  component: PostsContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PostsContainerComponent>;

const Template: Story<PostsContainerComponent> = (args: PostsContainerComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}