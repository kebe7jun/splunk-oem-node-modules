function getInitialStyle({ anchorPos, placement, outerContainerEl }) {
    switch (placement) {
        case 'above':
            return {
                top: anchorPos.top - outerContainerEl.offsetHeight,
                left: anchorPos.middle - outerContainerEl.offsetWidth / 2,
            };
        case 'below':
            return {
                top: anchorPos.bottom,
                left: anchorPos.middle - outerContainerEl.offsetWidth / 2,
            };
        case 'left':
            return {
                top: anchorPos.center - outerContainerEl.offsetHeight / 2,
                left: anchorPos.left - outerContainerEl.offsetWidth,
            };
        case 'right':
            return {
                top: anchorPos.center - outerContainerEl.offsetHeight / 2,
                left: anchorPos.right,
            };
        default:
            if (__DEV__) {
                throw new Error(
                    `${placement} is not a valid placement value. Valid options are: 'above', 'below', 'left', or 'right'`
                );
            }
            return {};
    }
}

export default function getPlacement(args) {
    const {
        anchorPos,
        scrollContainerPos,
        canCoverAnchor,
        defaultPlacement,
        outerContainerEl,
        repositionMode,
        windowHeight,
        windowWidth,
    } = args;
    const repositionFlip = repositionMode === 'flip';
    const repositionAny = repositionMode === 'any';
    const canReposition = repositionFlip || repositionAny;
    let placement = args.placement || defaultPlacement;

    // Translate vertical/horizontal to above/below/left/right
    if (defaultPlacement === 'vertical') {
        placement = anchorPos.top > windowHeight - anchorPos.bottom ? 'above' : 'below';
    } else if (defaultPlacement === 'horizontal') {
        placement = anchorPos.left > windowWidth - anchorPos.right ? 'left' : 'right';
    }

    // Initialize the result variables. These will be mutated as needed and returned.
    let { top, left } = getInitialStyle({ anchorPos, outerContainerEl, placement });
    let bottom = 'auto';
    let maxWidth = windowWidth;
    let maxHeight = windowHeight;

    // Boolean convenience variables to simplify positioning logic.
    const canPlaceAbove = anchorPos.top - outerContainerEl.offsetHeight > 0;
    const canPlaceBelow = anchorPos.bottom + outerContainerEl.offsetHeight < windowHeight;
    const canPlaceLeft = anchorPos.left - outerContainerEl.offsetWidth > 0;
    const canPlaceRight = anchorPos.right + outerContainerEl.offsetWidth < windowWidth;
    const offScreenRight = anchorPos.middle + outerContainerEl.offsetWidth / 2 > windowWidth;
    const offScreenLeft = anchorPos.middle - outerContainerEl.offsetWidth / 2 < 0;
    const offScreenTop = anchorPos.top - outerContainerEl.offsetHeight / 2 < 0;
    const offScreenBottom = anchorPos.bottom + outerContainerEl.offsetHeight / 2 > windowHeight;

    // Handle each of the four placement options individually.
    if (placement === 'above') {
        if (!canPlaceAbove && canReposition) {
            if (canPlaceBelow) {
                return getPlacement({ ...args, placement: 'below' });
            } else if (repositionAny && canPlaceRight) {
                return getPlacement({ ...args, placement: 'right' });
            } else if (repositionAny && canPlaceLeft) {
                return getPlacement({ ...args, placement: 'left' });
            } else if (canCoverAnchor) {
                placement = 'misaligned';
                top = 0;
            }
        }

        if (placement !== 'misaligned') {
            bottom = windowHeight - top - outerContainerEl.offsetHeight;
            if (scrollContainerPos) {
                bottom = Math.min(bottom, windowHeight - scrollContainerPos.top);
            }
            top = 'auto';
        }

        if (offScreenRight) {
            left = Math.max(windowWidth - outerContainerEl.offsetWidth, 0);
        } else if (offScreenLeft) {
            left = 0;
        }

        if (!canCoverAnchor) {
            maxHeight = anchorPos.top;
        }
    }

    if (placement === 'below') {
        if (!canPlaceBelow && canReposition) {
            if (canPlaceAbove) {
                return getPlacement({ ...args, placement: 'above' });
            } else if (repositionAny && canPlaceRight) {
                return getPlacement({ ...args, placement: 'right' });
            } else if (repositionAny && canPlaceLeft) {
                return getPlacement({ ...args, placement: 'left' });
            } else if (canCoverAnchor) {
                placement = 'misaligned';
                top = 0;
            }
        }

        if (scrollContainerPos) {
            top = Math.min(top, scrollContainerPos.bottom);
        }

        if (offScreenRight) {
            left = Math.max(windowWidth - outerContainerEl.offsetWidth, 0);
        } else if (offScreenLeft) {
            left = 0;
        }

        if (!canCoverAnchor) {
            maxHeight = windowHeight - anchorPos.bottom;
        }
    }

    if (placement === 'left') {
        if (!canPlaceLeft && canReposition) {
            if (canPlaceRight) {
                return getPlacement({ ...args, placement: 'right' });
            } else if (repositionAny && canPlaceBelow) {
                return getPlacement({ ...args, placement: 'below' });
            } else if (repositionAny && canPlaceAbove) {
                return getPlacement({ ...args, placement: 'above' });
            } else if (canCoverAnchor) {
                placement = 'misaligned';
                top = 0;
            }
        }

        if (offScreenTop) {
            top = 0;
        } else if (offScreenBottom) {
            top = Math.max(windowHeight - outerContainerEl.offsetHeight, 0);
        }

        if (!canCoverAnchor) {
            maxWidth = anchorPos.left;
        }
    }

    if (placement === 'right') {
        if (!canPlaceRight && canReposition) {
            if (canPlaceLeft) {
                return getPlacement({ ...args, placement: 'left' });
            } else if (repositionAny && canPlaceBelow) {
                return getPlacement({ ...args, placement: 'below' });
            } else if (repositionAny && canPlaceAbove) {
                return getPlacement({ ...args, placement: 'above' });
            } else if (canCoverAnchor) {
                placement = 'misaligned';
                top = 0;
            }
        }

        if (offScreenTop) {
            top = 0;
        } else if (offScreenBottom) {
            top = Math.max(windowHeight - outerContainerEl.offsetHeight, 0);
        }

        if (!canCoverAnchor) {
            maxWidth = windowWidth - anchorPos.left;
        }
    }

    return {
        placement,
        maxHeight,
        maxWidth,
        outerContainerStyle: { top, left, bottom },
    };
}
