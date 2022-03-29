/**
 * External dependencies
 */
import type { Browser, Page, BrowserContext } from '@playwright/test';

/**
 * Internal dependencies
 */
import { getPageError } from './get-page-error';
import { isCurrentURL } from './is-current-url';
import { visitAdminPage } from './visit-admin-page';
import { pressKeyWithModifier } from './press-key-with-modifier';
import { insertBlock } from './insert-block';
import { canvas } from './canvas';
import { wpDataSelect } from './wp-data-select';
import { createNewPost } from './create-new-post';
import { clickBlockAppender } from './click-block-appender';
import { getEditedPostContent } from './get-edited-post-content';

class PageUtils {
	browser: Browser;
	page: Page;
	context: BrowserContext;

	constructor( page: Page ) {
		this.page = page;
		this.context = page.context();
		this.browser = this.context.browser()!;
	}

	getPageError = getPageError;
	isCurrentURL = isCurrentURL;
	visitAdminPage = visitAdminPage;
	pressKeyWithModifier = pressKeyWithModifier;
	insertBlock = insertBlock;
	canvas = canvas;
	wpDataSelect = wpDataSelect;
	createNewPost = createNewPost;
	clickBlockAppender = clickBlockAppender;
	getEditedPostContent = getEditedPostContent;
}

export { PageUtils };
