```javascript
import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Accessing myRef.current after the component has mounted
    if (myRef.current) {
      console.log('Ref is available:', myRef.current);
    }
  }, [myRef]);

  return (
    <View>
      <Text ref={myRef}>Hello, world!</Text>
    </View>
  );
};

export default MyComponent;
```