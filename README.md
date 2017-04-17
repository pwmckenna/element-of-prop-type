# element-of-prop-type

Checks if the prop is a React element of a specific type

## usage

```es6
import elementOf from 'element-of-prop-type';

class MyComponent extends Component {
  static propTypes = {
    children: elementOf(MyChildComponent).isRequired
  };
  ...
}
```
