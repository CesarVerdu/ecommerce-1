/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module image/imageinsert
 */

import { Plugin } from 'ckeditor5/src/core';
import ImageUpload from './imageupload';
import ImageInsertUI from './imageinsert/imageinsertui';

/**
 * The image insert plugin.
 *
 * For a detailed overview, check the {@glink features/images/image-upload/image-upload Image upload feature}
 * and {@glink features/images/image-upload/images-inserting#inserting-images-via-source-url Insert images via source URL} documentation.
 *
 * This plugin does not do anything directly, but it loads a set of specific plugins
 * to enable image uploading or inserting via implemented integrations:
 *
 * * {@link module:image/imageupload~ImageUpload}
 * * {@link module:image/imageinsert/imageinsertui~ImageInsertUI},
 *
 * @extends module:core/plugin~Plugin
 */
export default class ImageInsert extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ImageInsert';
	}

	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ImageUpload, ImageInsertUI ];
	}
}

/**
 * The image insert configuration.
 *
 * @member {module:image/imageinsert~ImageInsertConfig} module:image/image~ImageConfig#insert
 */

/**
 * The configuration of the image insert dropdown panel view. Used by the image insert feature in the `ckeditor/ckeditor5-image` package.
 *
 *		ClassicEditor
 *			.create( editorElement, {
 * 				image: {
 * 					insert: {
 *						... // settings for "insertImage" view goes here
 * 					}
 * 				}
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * See {@link module:core/editor/editorconfig~EditorConfig all editor options}.
 *
 * @interface module:image/imageinsert~ImageInsertConfig
 */

/**
 * The image insert panel view configuration contains a list of {@link module:image/imageinsert~ImageInsert} integrations.
 *
 * The option accepts string tokens.
 * * for predefined integrations, we have two special strings: `insertImageViaUrl` and `openCKFinder`.
 * The former adds the **Insert image via URL** feature, while the latter adds the built-in **CKFinder** integration.
 * * for custom integrations, each string should be a name of the component registered in the
 * {@link module:ui/componentfactory~ComponentFactory component factory}.
 * If you have a plugin `PluginX` that registers `pluginXButton` component, then the integration token
 * in that case should be `pluginXButton`.
 *
 *		// Add `insertImageViaUrl`, `openCKFinder` and custom `pluginXButton` integrations.
 *		const imageInsertConfig = {
 *			insert: {
 *				integrations: [
 *					'insertImageViaUrl',
 *					'openCKFinder',
 *					'pluginXButton'
 *				]
 *			}
 *		};
 *
 * @protected
 * @member {Array.<String>} module:image/imageinsert~ImageInsertConfig#integrations
 * @default [ 'insertImageViaUrl' ]
 */

/**
 * This options allows to override the image type used by the {@link module:image/image/insertimagecommand~InsertImageCommand} when the user
 * inserts new images into the editor content. By default, this option is unset which means the editor will choose the optimal image type
 * based on the context of the insertion (e.g. the current selection and availability of plugins)
 *
 * Available options are:
 *
 * * `'block'` – all images inserted into the editor will be block (requires the {@link module:image/imageblock~ImageBlock} plugin),
 * * `'inline'` – all images inserted into the editor will be inline (requires the {@link module:image/imageinline~ImageInline} plugin).
 *
 * @member {'inline'|'block'|undefined} module:image/imageinsert~ImageInsertConfig#type
 */
