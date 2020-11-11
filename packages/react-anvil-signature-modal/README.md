# AnvilSignatureModal

A modal component that handles the signing process lifecycle. Compatible with mobile viewports with minimal dependencies.

## Usage:
```js
import AnvilSignatureModal from 'react-anvil-signature-modal'

<AnvilSignatureModal
  signURL={signURL}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoad={() => setLoading(false)}
  onFinish={(redirectURL) => window.location.assign(redirectURL)}
  width={800}
  height={1000}
/>
```
