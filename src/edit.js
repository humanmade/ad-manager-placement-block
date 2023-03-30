import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { placement } = attributes;

	return (
		<div { ...useBlockProps() }>
			<TextControl
				className="regular-text code"
				label={ __( 'Google Ad Manager Placement ID', 'ad-manager-block' ) }
				placeholder={ __( 'e.g. div-gpt-ad-1234567890-1', 'ad-manager-block' ) }
				value={ placement }
				onChange={ ( value ) => setAttributes( { placement: value.replace( /[^\da-z_-]+/g, '' ) } ) }
			/>
		</div>
	);
}
