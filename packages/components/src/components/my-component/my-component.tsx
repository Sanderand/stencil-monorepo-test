import { Component, h } from '@stencil/core';
import { someValue } from 'utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    console.log(someValue);

    return <div>G'day</div>;
  }
}
