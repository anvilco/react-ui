# AnvilSignatureFrame
A minimal component that handles the [Anvil Etch](https://www.useanvil.com/etch-free-e-signatures) signing lifecycle.

## Usage
```
yarn add @anvilco/react-signature-frame
```
```
npm install @anvilco/react-signature-frame
```

```js
import AnvilSignatureFrame from '@anvilco/react-signature-frame'
import '@anvilco/react-signature-frame/lib/styles.css'

<AnvilSignatureFrame
  signURL={signURL}
  scroll="smooth"
  onLoad={() => setLoading(true)}
  onFinish={(redirectURL) => window.location.assign(redirectURL)}
  width={800}
  height={1000}
/>
```

### Props

#### signURL
##### string (required)
A URL to the Anvil signature page generated from the `generateEtchSignURL` GraphQL mutation. The signature frame will be displaying the signing page through this URL.

Example:
```js
signURL={`https://app.useanvil.com/etch/8iJDbq8dkEmjrsNw7Dnb/sign?token=dsa...`}
```

#### scroll
##### string
* `auto` - scrolls the window to the signing frame when rendered
* `smooth` - smoothly scrolls the window to the signing frame when rendered

#### onLoad
##### function
This function is called when the signing page has finished loading.

Example:
```js
onLoad={() => setLoading(false)}
```

#### onFinish
##### function
This function takes the `redirectURL` as a parameter; called when a user has finished signing.

Example:
This is called by default if not defined otherwise.
```js
onFinish={(redirectURL) => window.location.assign(redirectURL)}
```

#### width | height
##### number | string
The width/height of the iframe in CSS pixels. Default is 900w by 1100h.


## Styling

Styles are not embedded into the React component to support customization. The default styles are provided within the modules under `lib/styles.css`.


## Anvil Etch E-Sign Docs

[Read the Docs](https://www.useanvil.com/docs/api/e-signatures)


## Notes

* The `allowFormEmbed` config must be set to `true` under your [Anvil organization](https://useanvil.com) for embedded signing. Please reach us at [support@useanvil.com](mailto:hello@useanvil.com).
* React ^v16.8.0 is required.


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [hello@useanvil.com](mailto:hello@useanvil.com).
