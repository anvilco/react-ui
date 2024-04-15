export default AnvilEmbedFrame;
export type Props = {
  iframeURL: string;
  onEvent: Function;
  anvilURL: string;
  enableDefaultStyles: boolean;
  scroll: string;
};
/**
 * @typedef Props
 * @prop {String} iframeURL
 * @prop {Function} onEvent
 * @prop {String} anvilURL
 * @prop {boolean} enableDefaultStyles
 * @prop {String} scroll
 */
/**
 * @extends React.Component<Props>
 */
declare class AnvilEmbedFrame extends React.Component<Props, any, any> {
  constructor(props: any);
  iframeRef: React.RefObject<any>;
  componentDidMount(): void;
  componentWillUnmount(): void;
  /**
   * @param {Object} options
   * @param {String} options.origin
   * @param {Object} options.data
   */
   handleEvent: ({ origin, data }: {
    origin: string;
    data: object;
   }) => void;
   render() : JSX.Element;
}
declare namespace AnvilEmbedFrame {
  namespace defaultProps {
    function onEvent(): void;
    const anvilURL: string;
    const enableDefaultStyles: boolean;
  }
  namespace propTypes {
    export const iframeURL: PropTypes.Requireable<string>;
    const onEvent_1: PropTypes.Validator<(...args: any[]) => any>;
    export { onEvent_1 as onEvent };
    const anvilURL_1: PropTypes.Requireable<string>;
    export { anvilURL_1 as anvilURL };
    const enableDefaultStyles_1: PropTypes.Requireable<boolean>;
    export { enableDefaultStyles_1 as enableDefaultStyles };
    export const scroll: PropTypes.Requireable<string>;
  }
}
import Reacat from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
