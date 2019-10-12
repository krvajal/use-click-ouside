# use-click-outside
Simple React hook to detect when a click happens outside a component.
Useful for implementing modal dialogs and popups.

## Installation

```bash
yarn add @sweepbright/use-click-ouside
```

```
npm install @sweepbright/use-click-ouside
```

### Usage

```javascript
import  {useClickOutside} from '@sweepbright/use-click-outside'


function Popup() {
    const ref= React.useRef(null)
    const onClickOutside = React.useCallback(() => {
        alert('clicked outside element')
    })

    useClickOuside(ref, {
        onClickOutside
    })

    return <div ref={ref}> Hello </div>

}
```


### API

```javascript
useClickOutside(ref, config, deps)
```

### Params
#### `ref`

| Param   | Type         | Description                                                                      |
| ------- | ------------ | -------------------------------------------------------------------------------  |
| `ref`   | RefObject    | A  mutable ref object whose `current` property points target element DOM node    |

#### `config`

| Param   | Type         | Description                                                                      |
| ------- | ------------ | -------------------------------------------------------------------------------  |
| `config`   | Object    |  A configuration object for the behavior of the hook          |

#### Config options
The following options are supported
* `onClickOutside: (evt: MouseEvent) => void`
    * Required
    * Must be *memoized*
    * Will be called every time a click outside the target element is detected
    * It is passed the click event object
* `skip: boolean`
    * Optional
    * Defaults to `false`
    * Useful when you want to skip the listener. It can be used as a perf improvement when you know the element target element is not in the DOM.

#### `deps`

| Param   | Type         | Description                                                                      |
| ------- | ------------ | -------------------------------------------------------------------------------  |
| `deps`   | Array    | Optional dependency array |

### Contributing
TODO



### License
MIT