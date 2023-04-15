import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TimeBarComponent } from './time-bar.component';

export default {
  title: 'TimeBarComponent',
  component: TimeBarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TimeBarComponent>;

const Template: Story<TimeBarComponent> = (args: TimeBarComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    startMinutes:  0,
}