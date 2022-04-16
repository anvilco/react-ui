export default AnvilSignatureModal;
export type Props = {
    signURL: string;
    isOpen: boolean;
    onClose: Function;
    onLoad: Function;
    onError: Function;
    onFinish: Function;
    onFinishSigning: Function;
    modalAppElement: string | Element;
    anvilURL: string;
    showIconClose: boolean;
    anvilFrameProps: any;
    iconCloseProps: any;
};
/**
 * @typedef Props
 * @prop {String} signURL
 * @prop {boolean} isOpen
 * @prop {Function} onClose
 * @prop {Function} onLoad
 * @prop {Function} onError
 * @prop {Function} onFinish
 * @prop {Function} onFinishSigning
 * @prop {String|Element} modalAppElement
 * @prop {String} anvilURL
 * @prop {boolean} showIconClose
 * @prop {Object} anvilFrameProps
 * @prop {Object} iconCloseProps
 */
/**
 * @extends React.Component<Props>
 */
declare class AnvilSignatureModal extends React.Component<Props, any, any> {
    constructor(props: any);
    render(): JSX.Element;
}
declare namespace AnvilSignatureModal {
    namespace defaultProps {
        const isOpen: boolean;
        const modalAppElement: HTMLElement;
        const showIconClose: boolean;
        namespace anvilFrameProps {
            const id: string;
        }
        const iconCloseProps: {};
    }
    namespace propTypes {
        export const signURL: PropTypes.Requireable<string>;
        const isOpen_1: PropTypes.Requireable<boolean>;
        export { isOpen_1 as isOpen };
        export const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        export const onLoad: PropTypes.Requireable<(...args: any[]) => any>;
        export const onError: PropTypes.Requireable<(...args: any[]) => any>;
        export const onFinish: PropTypes.Requireable<(...args: any[]) => any>;
        export const onFinishSigning: PropTypes.Requireable<(...args: any[]) => any>;
        const modalAppElement_1: PropTypes.Requireable<string | Element>;
        export { modalAppElement_1 as modalAppElement };
        export const anvilURL: PropTypes.Requireable<string>;
        const showIconClose_1: PropTypes.Requireable<boolean>;
        export { showIconClose_1 as showIconClose };
        const anvilFrameProps_1: PropTypes.Requireable<object>;
        export { anvilFrameProps_1 as anvilFrameProps };
        const iconCloseProps_1: PropTypes.Requireable<object>;
        export { iconCloseProps_1 as iconCloseProps };
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map