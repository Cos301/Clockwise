import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProfileDemoComponent } from './profile-demo.component';

export default {
  title: 'ProfileDemoComponent',
  component: ProfileDemoComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ProfileDemoComponent>;

const Template: Story<ProfileDemoComponent> = (args: ProfileDemoComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}