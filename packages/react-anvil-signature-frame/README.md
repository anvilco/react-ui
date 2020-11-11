# AnvilSignatureFrame

A very minimal component that handles the signing process lifecycle. 

## Usage:
```js
import AnvilSignatureFrame from 'react-anvil-signature-frame'

<AnvilSignatureFrame
  signURL={signURL}
  scroll="smooth"
  onLoad={() => setLoading(true)}
  onFinish={(redirectURL) => window.location.assign(redirectURL)}
  width={800}
  height={1000}
/>
```
