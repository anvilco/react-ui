# AnvilSignatureFrame
A minimal component that handles the [Anvil Etch](https://www.useanvil.com/etch-free-e-signatures) signing lifecycle.

![image](https://user-images.githubusercontent.com/26425671/101393358-d7590380-387b-11eb-827c-5041709a612a.png)

## Usage
```
yarn add @anvilco/react-signature-frame
```
```
npm install @anvilco/react-signature-frame
```

```js
import AnvilSignatureFrame from '@anvilco/react-signature-frame'

<AnvilSignatureFrame
  signURL={signURL}
  scroll="smooth"
  onLoad={() => setLoading(true)}
  onFinishSigning={(payload) => console.log(payload)}
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
##### string | null
* `auto` - scrolls the window to the signing frame when mounted
* `smooth` - smoothly scrolls the window to the signing frame when mounted
* `null` - disables scrolling

#### onLoad
##### function
This function is called when the signing page has finished loading.

Example:
```js
onLoad={() => setLoading(false)}
```

#### onFinishSigning
##### function
This function takes the `payload` as a parameter; called when a user has finished signing.

Example:
```js
onFinishSigning={(payload) => console.log(payload)}

/*
{
  action: "signerComplete"
  documentGroupEid: "9fQnvfy51p7oKrEYajMh"
  documentGroupStatus: "partial"
  etchPacketEid: "J1phQTO6WQH6gZcMJAG5"
  nextSignerEid: "HRLhx4khticpfxsUFSpj"
  signerEid: "kJzR6mcIWKoZs6KOxV4w"
  signerStatus: "completed"
  weldDataEid: undefined
}
*/
```


#### onFinish (deprecated)

##### function
This function takes the `redirectURL` as a parameter; called when a user has finished signing.

Example:
```js
onFinish={(redirectURL) => console.log(redirectURL)}
```


#### enableDefaultStyles
##### boolean (default: true)
Set to false to disable the default inline styles of the component.


#### iframeWarningProps
##### object
Pass in custom props into the paragraph tag displayed if the user's browser does not support iframes.

Example:
```js
iframeWarningProps={{ className: 'warning-text' }}
```


#### Styling

Customize the component by disabling `enableDefaultStyles` and importing CSS or passing in inline styles. Override IDs or classNames by passing them in as props.


## Anvil Etch E-Sign Docs

[Read the Docs](https://www.useanvil.com/docs/api/e-signatures)


## Links 🔗
* [@anvilco/react-signature-frame](https://www.npmjs.com/package/@anvilco/react-signature-frame)
* [Get started with Anvil](https://www.useanvil.com/)


## Notes

* Please contact us at [support@useanvil.com](mailto:support@useanvil.com) to enable iframe embedded signing for production signature packets.
* React >= v16.0 required.


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [hello@useanvil.com](mailto:hello@useanvil.com).
