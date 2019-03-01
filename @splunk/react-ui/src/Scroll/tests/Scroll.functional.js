/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('Scroll', () => {
    const markerSelector = '#scroll-marker';
    const markerInnerSelector = '#scroll-marker-inner';
    const scrollBoxSelector = '#scroll-box';
    const scrollBoxInnerSelector = '#scroll-box-inner';

    function getScrollLocaction(selector) {
        const location = browser.getLocation(selector);
        return location.y;
    }

    function getLocation() {
        return getScrollLocaction(markerSelector);
    }

    function getInnerLocation() {
        return getScrollLocaction(markerInnerSelector);
    }

    // Clicks on selector
    function click(selector) {
        browser.$(selector).click();
    }

    // Waits till scroll box is scrolled 50 pixels down
    function waitForScrollDown(lastLocation, inner = false, less = true) {
        browser.waitUntil(
            () =>
                lastLocation + (less ? -1 : 1) * 50 === (inner ? getInnerLocation() : getLocation())
        );
    }

    // Waits till scroll box is scrolled 50 pixels up
    function waitForScrollUp(lastLocation, inner = false) {
        waitForScrollDown(lastLocation, inner, false);
    }

    // Increase ScrollTop position.
    function scrollDown() {
        click('#scrollDown');
    }

    // Increase ScrollTop position of inner scroll box.
    function scrollDownInner() {
        click('#scrollDownInner', markerInnerSelector);
    }

    // Decrease ScrollTop position.
    function scrollUp() {
        click('#scrollUp');
    }

    // Decrease ScrollTop position of inner scroll box.
    function scrollUpInner() {
        click('#scrollUpInner', markerInnerSelector);
    }

    // Clicks scroll box and presses down key, then waits for it to scroll
    function scrollUsingDownKey(inner = false) {
        const lastLocation = inner ? getInnerLocation() : getLocation();
        click(inner ? scrollBoxInnerSelector : scrollBoxSelector);
        browser.keys('Down Arrow');
        browser.waitUntil(() => lastLocation !== (inner ? getInnerLocation() : getLocation()));
    }

    // Scroll using down arrow key
    function scrollKey() {
        scrollUsingDownKey();
    }

    // Scroll inner using down arrow key
    function scrollKeyInner() {
        scrollUsingDownKey(true);
    }

    // Determine if scroll box has scrolled.
    function assertScrolledHelper(selector, attr, isScrolling = true, inner = false) {
        assert.strictEqual(
            browser.getAttribute(selector, attr),
            isScrolling ? 'true' : 'false',
            `Scroll box${inner ? ' inner' : ''} has ${isScrolling ? '' : 'not '}scrolled`
        );
    }

    // Determine if scroll box has scrolled.
    function assertScrolled(isScrolling) {
        assertScrolledHelper(scrollBoxSelector, 'data-has-scrolled', isScrolling, false);
    }

    // Determine if inner scroll box has scrolled.
    function assertScrolledInner(isScrolling) {
        assertScrolledHelper(scrollBoxInnerSelector, 'data-has-inner-scrolled', isScrolling, true);
    }

    it('Scroll down and up by setting scrollTop', () => {
        assertScrolled(false);

        const initialLocation = getLocation();
        scrollDown();
        waitForScrollDown(initialLocation);
        assert.isTrue(
            getLocation() < initialLocation,
            'Current Location is less than initial location'
        );

        const lastLocation = getLocation();
        scrollUp();
        waitForScrollUp(lastLocation);
        assert.isTrue(
            getLocation() > lastLocation,
            'Current Location is greater than last location'
        );

        assertScrolled(true);
        assertScrolledInner(false);
    });

    it('Scroll inner box down and up by setting scrollTop', () => {
        assertScrolledInner(false);
        assertScrolled(false);

        const initialInnerLocation = getInnerLocation();
        scrollDownInner();
        waitForScrollDown(initialInnerLocation, true);
        assert.isTrue(
            getInnerLocation() < initialInnerLocation,
            'Current inner location is less than initial inner location'
        );

        const lastInnerLocation = getInnerLocation();
        scrollUpInner();
        waitForScrollUp(lastInnerLocation, true);
        assert.isTrue(
            getInnerLocation() > lastInnerLocation,
            'Current inner location is greater than last inner location'
        );

        assertScrolledInner(true);
        assertScrolled(true); // Since scroll box is nested
    });

    it('Scroll by down arrow key', () => {
        assertScrolled(false);
        scrollKey();
        assertScrolled(true);
        assertScrolledInner(false);
    });

    it('Scroll inner box by down arrow key', () => {
        assertScrolledInner(false);
        scrollKeyInner();
        assertScrolledInner(true);
        assertScrolled(true); // Since scroll box is nested
    });
});
