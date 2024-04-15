import PropTypes from 'prop-types';

export default AnvilEmbedFrame;
export type Props = {
  iframeURL: string;
  onEvent: (event: any) => void;
  anvilURL: string;
  iframeRef: React.RefObject<any>;
  enableDefaultStyles: boolean;
  style: any;
  scroll: string;
};

declare function AnvilEmbedFrame(props: Props): JSX.Element;

declare namespace AnvilEmbedFrame {
  namespace defaultProps {
    function onEvent(): void;
    const anvilURL: string;
    const enableDefaultStyles: boolean;
  }

  namespace propTypes {
    const iframeURL: PropTypes.Requireable<string>;
    const onEvent: PropTypes.Requireable<(...args: any[]) => any>;
    const anvilURL: PropTypes.Requireable<string>;
    const iframeRef: PropTypes.Requireable<any>;
    const style: PropTypes.Requireable<any>;
    const enableDefaultStyles: PropTypes.Requireable<boolean>;
    const scroll: PropTypes.Requireable<string>;
  }
}
