// @flow
import validAttr from '../validAttr'

describe('validAttr', () => {
  it('should allow all the reactProps', () => {
    expect(validAttr('children')).toEqual(true)
    expect(validAttr('dangerouslySetInnerHTML')).toEqual(true)
    expect(validAttr('key')).toEqual(true)
    expect(validAttr('ref')).toEqual(true)
    expect(validAttr('autoFocus')).toEqual(true)
    expect(validAttr('defaultValue')).toEqual(true)
    expect(validAttr('valueLink')).toEqual(true)
    expect(validAttr('defaultChecked')).toEqual(true)
    expect(validAttr('checkedLink')).toEqual(true)
    expect(validAttr('innerHTML')).toEqual(true)
    expect(validAttr('suppressContentEditableWarning')).toEqual(true)
    expect(validAttr('onFocusIn')).toEqual(true)
    expect(validAttr('onFocusOut')).toEqual(true)
    expect(validAttr('className')).toEqual(true)
  })

  it('should allow all the html props', () => {
    expect(validAttr('accept')).toEqual(true)
    expect(validAttr('acceptCharset')).toEqual(true)
    expect(validAttr('accessKey')).toEqual(true)
    expect(validAttr('action')).toEqual(true)
    expect(validAttr('allowFullScreen')).toEqual(true)
    expect(validAttr('allowTransparency')).toEqual(true)
    expect(validAttr('alt')).toEqual(true)
    expect(validAttr('async')).toEqual(true)
    expect(validAttr('autoComplete')).toEqual(true)
    expect(validAttr('autoPlay')).toEqual(true)
    expect(validAttr('capture')).toEqual(true)
    expect(validAttr('cellPadding')).toEqual(true)
    expect(validAttr('cellSpacing')).toEqual(true)
    expect(validAttr('charSet')).toEqual(true)
    expect(validAttr('challenge')).toEqual(true)
    expect(validAttr('checked')).toEqual(true)
    expect(validAttr('cite')).toEqual(true)
    expect(validAttr('classID')).toEqual(true)
    expect(validAttr('className')).toEqual(true)
    expect(validAttr('cols')).toEqual(true)
    expect(validAttr('colSpan')).toEqual(true)
    expect(validAttr('content')).toEqual(true)
    expect(validAttr('contentEditable')).toEqual(true)
    expect(validAttr('contextMenu')).toEqual(true)
    expect(validAttr('controls')).toEqual(true)
    expect(validAttr('controlsList')).toEqual(true)
    expect(validAttr('coords')).toEqual(true)
    expect(validAttr('crossOrigin')).toEqual(true)
    expect(validAttr('data')).toEqual(true)
    expect(validAttr('dateTime')).toEqual(true)
    expect(validAttr('default')).toEqual(true)
    expect(validAttr('defer')).toEqual(true)
    expect(validAttr('dir')).toEqual(true)
    expect(validAttr('disabled')).toEqual(true)
    expect(validAttr('download')).toEqual(true)
    expect(validAttr('draggable')).toEqual(true)
    expect(validAttr('encType')).toEqual(true)
    expect(validAttr('form')).toEqual(true)
    expect(validAttr('formAction')).toEqual(true)
    expect(validAttr('formEncType')).toEqual(true)
    expect(validAttr('formMethod')).toEqual(true)
    expect(validAttr('formNoValidate')).toEqual(true)
    expect(validAttr('formTarget')).toEqual(true)
    expect(validAttr('frameBorder')).toEqual(true)
    expect(validAttr('headers')).toEqual(true)
    expect(validAttr('height')).toEqual(true)
    expect(validAttr('hidden')).toEqual(true)
    expect(validAttr('high')).toEqual(true)
    expect(validAttr('href')).toEqual(true)
    expect(validAttr('hrefLang')).toEqual(true)
    expect(validAttr('htmlFor')).toEqual(true)
    expect(validAttr('httpEquiv')).toEqual(true)
    expect(validAttr('icon')).toEqual(true)
    expect(validAttr('id')).toEqual(true)
    expect(validAttr('inputMode')).toEqual(true)
    expect(validAttr('integrity')).toEqual(true)
    expect(validAttr('is')).toEqual(true)
    expect(validAttr('keyParams')).toEqual(true)
    expect(validAttr('keyType')).toEqual(true)
    expect(validAttr('kind')).toEqual(true)
    expect(validAttr('label')).toEqual(true)
    expect(validAttr('lang')).toEqual(true)
    expect(validAttr('list')).toEqual(true)
    expect(validAttr('loop')).toEqual(true)
    expect(validAttr('low')).toEqual(true)
    expect(validAttr('manifest')).toEqual(true)
    expect(validAttr('marginHeight')).toEqual(true)
    expect(validAttr('marginWidth')).toEqual(true)
    expect(validAttr('max')).toEqual(true)
    expect(validAttr('maxLength')).toEqual(true)
    expect(validAttr('media')).toEqual(true)
    expect(validAttr('mediaGroup')).toEqual(true)
    expect(validAttr('method')).toEqual(true)
    expect(validAttr('min')).toEqual(true)
    expect(validAttr('minLength')).toEqual(true)
    expect(validAttr('multiple')).toEqual(true)
    expect(validAttr('muted')).toEqual(true)
    expect(validAttr('name')).toEqual(true)
    expect(validAttr('nonce')).toEqual(true)
    expect(validAttr('noValidate')).toEqual(true)
    expect(validAttr('open')).toEqual(true)
    expect(validAttr('optimum')).toEqual(true)
    expect(validAttr('pattern')).toEqual(true)
    expect(validAttr('placeholder')).toEqual(true)
    expect(validAttr('poster')).toEqual(true)
    expect(validAttr('preload')).toEqual(true)
    expect(validAttr('profile')).toEqual(true)
    expect(validAttr('radioGroup')).toEqual(true)
    expect(validAttr('readOnly')).toEqual(true)
    expect(validAttr('referrerPolicy')).toEqual(true)
    expect(validAttr('rel')).toEqual(true)
    expect(validAttr('required')).toEqual(true)
    expect(validAttr('reversed')).toEqual(true)
    expect(validAttr('role')).toEqual(true)
    expect(validAttr('rows')).toEqual(true)
    expect(validAttr('rowSpan')).toEqual(true)
    expect(validAttr('sandbox')).toEqual(true)
    expect(validAttr('scope')).toEqual(true)
    expect(validAttr('scoped')).toEqual(true)
    expect(validAttr('scrolling')).toEqual(true)
    expect(validAttr('seamless')).toEqual(true)
    expect(validAttr('selected')).toEqual(true)
    expect(validAttr('shape')).toEqual(true)
    expect(validAttr('size')).toEqual(true)
    expect(validAttr('sizes')).toEqual(true)
    expect(validAttr('span')).toEqual(true)
    expect(validAttr('spellCheck')).toEqual(true)
    expect(validAttr('src')).toEqual(true)
    expect(validAttr('srcDoc')).toEqual(true)
    expect(validAttr('srcLang')).toEqual(true)
    expect(validAttr('srcSet')).toEqual(true)
    expect(validAttr('start')).toEqual(true)
    expect(validAttr('step')).toEqual(true)
    expect(validAttr('style')).toEqual(true)
    expect(validAttr('summary')).toEqual(true)
    expect(validAttr('tabIndex')).toEqual(true)
    expect(validAttr('target')).toEqual(true)
    expect(validAttr('title')).toEqual(true)
    expect(validAttr('type')).toEqual(true)
    expect(validAttr('useMap')).toEqual(true)
    expect(validAttr('value')).toEqual(true)
    expect(validAttr('width')).toEqual(true)
    expect(validAttr('wmode')).toEqual(true)
    expect(validAttr('wrap')).toEqual(true)
    expect(validAttr('about')).toEqual(true)
    expect(validAttr('datatype')).toEqual(true)
    expect(validAttr('inlist')).toEqual(true)
    expect(validAttr('prefix')).toEqual(true)
    expect(validAttr('property')).toEqual(true)
    expect(validAttr('resource')).toEqual(true)
    expect(validAttr('typeof')).toEqual(true)
    expect(validAttr('vocab')).toEqual(true)
    expect(validAttr('autoCapitalize')).toEqual(true)
    expect(validAttr('autoCorrect')).toEqual(true)
    expect(validAttr('autoSave')).toEqual(true)
    expect(validAttr('color')).toEqual(true)
    expect(validAttr('itemProp')).toEqual(true)
    expect(validAttr('itemScope')).toEqual(true)
    expect(validAttr('itemType')).toEqual(true)
    expect(validAttr('itemID')).toEqual(true)
    expect(validAttr('itemRef')).toEqual(true)
    expect(validAttr('results')).toEqual(true)
    expect(validAttr('security')).toEqual(true)
    expect(validAttr('unselectable')).toEqual(true)
  })

  it('should handle all the SVG props', () => {
    expect(validAttr('accentHeight')).toEqual(true)
    expect(validAttr('accumulate')).toEqual(true)
    expect(validAttr('additive')).toEqual(true)
    expect(validAttr('alignmentBaseline')).toEqual(true)
    expect(validAttr('allowReorder')).toEqual(true)
    expect(validAttr('alphabetic')).toEqual(true)
    expect(validAttr('amplitude')).toEqual(true)
    expect(validAttr('arabicForm')).toEqual(true)
    expect(validAttr('ascent')).toEqual(true)
    expect(validAttr('attributeName')).toEqual(true)
    expect(validAttr('attributeType')).toEqual(true)
    expect(validAttr('autoReverse')).toEqual(true)
    expect(validAttr('azimuth')).toEqual(true)
    expect(validAttr('baseFrequency')).toEqual(true)
    expect(validAttr('baseProfile')).toEqual(true)
    expect(validAttr('baselineShift')).toEqual(true)
    expect(validAttr('bbox')).toEqual(true)
    expect(validAttr('begin')).toEqual(true)
    expect(validAttr('bias')).toEqual(true)
    expect(validAttr('by')).toEqual(true)
    expect(validAttr('calcMode')).toEqual(true)
    expect(validAttr('capHeight')).toEqual(true)
    expect(validAttr('clip')).toEqual(true)
    expect(validAttr('clipPath')).toEqual(true)
    expect(validAttr('clipRule')).toEqual(true)
    expect(validAttr('clipPathUnits')).toEqual(true)
    expect(validAttr('colorInterpolation')).toEqual(true)
    expect(validAttr('colorInterpolationFilters')).toEqual(true)
    expect(validAttr('colorProfile')).toEqual(true)
    expect(validAttr('colorRendering')).toEqual(true)
    expect(validAttr('contentScriptType')).toEqual(true)
    expect(validAttr('contentStyleType')).toEqual(true)
    expect(validAttr('cursor')).toEqual(true)
    expect(validAttr('cx')).toEqual(true)
    expect(validAttr('cy')).toEqual(true)
    expect(validAttr('d')).toEqual(true)
    expect(validAttr('decelerate')).toEqual(true)
    expect(validAttr('descent')).toEqual(true)
    expect(validAttr('diffuseConstant')).toEqual(true)
    expect(validAttr('direction')).toEqual(true)
    expect(validAttr('display')).toEqual(true)
    expect(validAttr('divisor')).toEqual(true)
    expect(validAttr('dominantBaseline')).toEqual(true)
    expect(validAttr('dur')).toEqual(true)
    expect(validAttr('dx')).toEqual(true)
    expect(validAttr('dy')).toEqual(true)
    expect(validAttr('edgeMode')).toEqual(true)
    expect(validAttr('elevation')).toEqual(true)
    expect(validAttr('enableBackground')).toEqual(true)
    expect(validAttr('end')).toEqual(true)
    expect(validAttr('exponent')).toEqual(true)
    expect(validAttr('externalResourcesRequired')).toEqual(true)
    expect(validAttr('fill')).toEqual(true)
    expect(validAttr('fillOpacity')).toEqual(true)
    expect(validAttr('fillRule')).toEqual(true)
    expect(validAttr('filter')).toEqual(true)
    expect(validAttr('filterRes')).toEqual(true)
    expect(validAttr('filterUnits')).toEqual(true)
    expect(validAttr('floodColor')).toEqual(true)
    expect(validAttr('floodOpacity')).toEqual(true)
    expect(validAttr('focusable')).toEqual(true)
    expect(validAttr('fontFamily')).toEqual(true)
    expect(validAttr('fontSize')).toEqual(true)
    expect(validAttr('fontSizeAdjust')).toEqual(true)
    expect(validAttr('fontStretch')).toEqual(true)
    expect(validAttr('fontStyle')).toEqual(true)
    expect(validAttr('fontVariant')).toEqual(true)
    expect(validAttr('fontWeight')).toEqual(true)
    expect(validAttr('format')).toEqual(true)
    expect(validAttr('from')).toEqual(true)
    expect(validAttr('fx')).toEqual(true)
    expect(validAttr('fy')).toEqual(true)
    expect(validAttr('g1')).toEqual(true)
    expect(validAttr('g2')).toEqual(true)
    expect(validAttr('glyphName')).toEqual(true)
    expect(validAttr('glyphOrientationHorizontal')).toEqual(true)
    expect(validAttr('glyphOrientationVertical')).toEqual(true)
    expect(validAttr('glyphRef')).toEqual(true)
    expect(validAttr('gradientTransform')).toEqual(true)
    expect(validAttr('gradientUnits')).toEqual(true)
    expect(validAttr('hanging')).toEqual(true)
    expect(validAttr('horizAdvX')).toEqual(true)
    expect(validAttr('horizOriginX')).toEqual(true)
    expect(validAttr('ideographic')).toEqual(true)
    expect(validAttr('imageRendering')).toEqual(true)
    expect(validAttr('in')).toEqual(true)
    expect(validAttr('in2')).toEqual(true)
    expect(validAttr('intercept')).toEqual(true)
    expect(validAttr('k')).toEqual(true)
    expect(validAttr('k1')).toEqual(true)
    expect(validAttr('k2')).toEqual(true)
    expect(validAttr('k3')).toEqual(true)
    expect(validAttr('k4')).toEqual(true)
    expect(validAttr('kernelMatrix')).toEqual(true)
    expect(validAttr('kernelUnitLength')).toEqual(true)
    expect(validAttr('kerning')).toEqual(true)
    expect(validAttr('keyPoints')).toEqual(true)
    expect(validAttr('keySplines')).toEqual(true)
    expect(validAttr('keyTimes')).toEqual(true)
    expect(validAttr('lengthAdjust')).toEqual(true)
    expect(validAttr('letterSpacing')).toEqual(true)
    expect(validAttr('lightingColor')).toEqual(true)
    expect(validAttr('limitingConeAngle')).toEqual(true)
    expect(validAttr('local')).toEqual(true)
    expect(validAttr('markerEnd')).toEqual(true)
    expect(validAttr('markerMid')).toEqual(true)
    expect(validAttr('markerStart')).toEqual(true)
    expect(validAttr('markerHeight')).toEqual(true)
    expect(validAttr('markerUnits')).toEqual(true)
    expect(validAttr('markerWidth')).toEqual(true)
    expect(validAttr('mask')).toEqual(true)
    expect(validAttr('maskContentUnits')).toEqual(true)
    expect(validAttr('maskUnits')).toEqual(true)
    expect(validAttr('mathematical')).toEqual(true)
    expect(validAttr('mode')).toEqual(true)
    expect(validAttr('numOctaves')).toEqual(true)
    expect(validAttr('offset')).toEqual(true)
    expect(validAttr('opacity')).toEqual(true)
    expect(validAttr('operator')).toEqual(true)
    expect(validAttr('order')).toEqual(true)
    expect(validAttr('orient')).toEqual(true)
    expect(validAttr('orientation')).toEqual(true)
    expect(validAttr('origin')).toEqual(true)
    expect(validAttr('overflow')).toEqual(true)
    expect(validAttr('overlinePosition')).toEqual(true)
    expect(validAttr('overlineThickness')).toEqual(true)
    expect(validAttr('paintOrder')).toEqual(true)
    expect(validAttr('panose1')).toEqual(true)
    expect(validAttr('pathLength')).toEqual(true)
    expect(validAttr('patternContentUnits')).toEqual(true)
    expect(validAttr('patternTransform')).toEqual(true)
    expect(validAttr('patternUnits')).toEqual(true)
    expect(validAttr('pointerEvents')).toEqual(true)
    expect(validAttr('points')).toEqual(true)
    expect(validAttr('pointsAtX')).toEqual(true)
    expect(validAttr('pointsAtY')).toEqual(true)
    expect(validAttr('pointsAtZ')).toEqual(true)
    expect(validAttr('preserveAlpha')).toEqual(true)
    expect(validAttr('preserveAspectRatio')).toEqual(true)
    expect(validAttr('primitiveUnits')).toEqual(true)
    expect(validAttr('r')).toEqual(true)
    expect(validAttr('radius')).toEqual(true)
    expect(validAttr('refX')).toEqual(true)
    expect(validAttr('refY')).toEqual(true)
    expect(validAttr('renderingIntent')).toEqual(true)
    expect(validAttr('repeatCount')).toEqual(true)
    expect(validAttr('repeatDur')).toEqual(true)
    expect(validAttr('requiredExtensions')).toEqual(true)
    expect(validAttr('requiredFeatures')).toEqual(true)
    expect(validAttr('restart')).toEqual(true)
    expect(validAttr('result')).toEqual(true)
    expect(validAttr('rotate')).toEqual(true)
    expect(validAttr('rx')).toEqual(true)
    expect(validAttr('ry')).toEqual(true)
    expect(validAttr('scale')).toEqual(true)
    expect(validAttr('seed')).toEqual(true)
    expect(validAttr('shapeRendering')).toEqual(true)
    expect(validAttr('slope')).toEqual(true)
    expect(validAttr('spacing')).toEqual(true)
    expect(validAttr('specularConstant')).toEqual(true)
    expect(validAttr('specularExponent')).toEqual(true)
    expect(validAttr('speed')).toEqual(true)
    expect(validAttr('spreadMethod')).toEqual(true)
    expect(validAttr('startOffset')).toEqual(true)
    expect(validAttr('stdDeviation')).toEqual(true)
    expect(validAttr('stemh')).toEqual(true)
    expect(validAttr('stemv')).toEqual(true)
    expect(validAttr('stitchTiles')).toEqual(true)
    expect(validAttr('stopColor')).toEqual(true)
    expect(validAttr('stopOpacity')).toEqual(true)
    expect(validAttr('strikethroughPosition')).toEqual(true)
    expect(validAttr('strikethroughThickness')).toEqual(true)
    expect(validAttr('string')).toEqual(true)
    expect(validAttr('stroke')).toEqual(true)
    expect(validAttr('strokeDasharray')).toEqual(true)
    expect(validAttr('strokeDashoffset')).toEqual(true)
    expect(validAttr('strokeLinecap')).toEqual(true)
    expect(validAttr('strokeLinejoin')).toEqual(true)
    expect(validAttr('strokeMiterlimit')).toEqual(true)
    expect(validAttr('strokeOpacity')).toEqual(true)
    expect(validAttr('strokeWidth')).toEqual(true)
    expect(validAttr('surfaceScale')).toEqual(true)
    expect(validAttr('systemLanguage')).toEqual(true)
    expect(validAttr('tableValues')).toEqual(true)
    expect(validAttr('targetX')).toEqual(true)
    expect(validAttr('targetY')).toEqual(true)
    expect(validAttr('textAnchor')).toEqual(true)
    expect(validAttr('textDecoration')).toEqual(true)
    expect(validAttr('textRendering')).toEqual(true)
    expect(validAttr('textLength')).toEqual(true)
    expect(validAttr('to')).toEqual(true)
    expect(validAttr('transform')).toEqual(true)
    expect(validAttr('u1')).toEqual(true)
    expect(validAttr('u2')).toEqual(true)
    expect(validAttr('underlinePosition')).toEqual(true)
    expect(validAttr('underlineThickness')).toEqual(true)
    expect(validAttr('unicode')).toEqual(true)
    expect(validAttr('unicodeBidi')).toEqual(true)
    expect(validAttr('unicodeRange')).toEqual(true)
    expect(validAttr('unitsPerEm')).toEqual(true)
    expect(validAttr('vAlphabetic')).toEqual(true)
    expect(validAttr('vHanging')).toEqual(true)
    expect(validAttr('vIdeographic')).toEqual(true)
    expect(validAttr('vMathematical')).toEqual(true)
    expect(validAttr('values')).toEqual(true)
    expect(validAttr('vectorEffect')).toEqual(true)
    expect(validAttr('version')).toEqual(true)
    expect(validAttr('vertAdvY')).toEqual(true)
    expect(validAttr('vertOriginX')).toEqual(true)
    expect(validAttr('vertOriginY')).toEqual(true)
    expect(validAttr('viewBox')).toEqual(true)
    expect(validAttr('viewTarget')).toEqual(true)
    expect(validAttr('visibility')).toEqual(true)
    expect(validAttr('widths')).toEqual(true)
    expect(validAttr('wordSpacing')).toEqual(true)
    expect(validAttr('writingMode')).toEqual(true)
    expect(validAttr('x')).toEqual(true)
    expect(validAttr('xHeight')).toEqual(true)
    expect(validAttr('x1')).toEqual(true)
    expect(validAttr('x2')).toEqual(true)
    expect(validAttr('xChannelSelector')).toEqual(true)
    expect(validAttr('xlinkActuate')).toEqual(true)
    expect(validAttr('xlinkArcrole')).toEqual(true)
    expect(validAttr('xlinkHref')).toEqual(true)
    expect(validAttr('xlinkRole')).toEqual(true)
    expect(validAttr('xlinkShow')).toEqual(true)
    expect(validAttr('xlinkTitle')).toEqual(true)
    expect(validAttr('xlinkType')).toEqual(true)
    expect(validAttr('xmlBase')).toEqual(true)
    expect(validAttr('xmlns')).toEqual(true)
    expect(validAttr('xmlnsXlink')).toEqual(true)
    expect(validAttr('xmlLang')).toEqual(true)
    expect(validAttr('xmlSpace')).toEqual(true)
    expect(validAttr('y')).toEqual(true)
    expect(validAttr('y1')).toEqual(true)
    expect(validAttr('y2')).toEqual(true)
    expect(validAttr('yChannelSelector')).toEqual(true)
    expect(validAttr('z')).toEqual(true)
    expect(validAttr('zoomAndPan')).toEqual(true)
  })

  it('should handle aria and data attributes', () => {
    expect(validAttr('data-xyz')).toEqual(true)
    expect(validAttr('data-omg-this-works')).toEqual(true)
    expect(validAttr('aria-label')).toEqual(true)
    expect(validAttr('aria-labelled-by')).toEqual(true)
  })

  it('should handle uppercase aria and data attributes', () => {
    expect(validAttr('DATA-XYZ')).toEqual(true)
    expect(validAttr('DATA-OMG-THIS-WORKS')).toEqual(true)
    expect(validAttr('ARIA-LABEL')).toEqual(true)
    expect(validAttr('ARIA-LABELLED-BY')).toEqual(true)
  })

  it('should allow all the event handlers', () => {
    expect(validAttr('onCopy')).toEqual(true)
    expect(validAttr('onCopyCapture')).toEqual(true)
    expect(validAttr('onCut')).toEqual(true)
    expect(validAttr('onCutCapture')).toEqual(true)
    expect(validAttr('onPaste')).toEqual(true)
    expect(validAttr('onPasteCapture')).toEqual(true)
    expect(validAttr('onCompositionEnd')).toEqual(true)
    expect(validAttr('onCompositionEndCapture')).toEqual(true)
    expect(validAttr('onCompositionStart')).toEqual(true)
    expect(validAttr('onCompositionStartCapture')).toEqual(true)
    expect(validAttr('onCompositionUpdate')).toEqual(true)
    expect(validAttr('onCompositionUpdateCapture')).toEqual(true)
    expect(validAttr('onKeyDown')).toEqual(true)
    expect(validAttr('onKeyDownCapture')).toEqual(true)
    expect(validAttr('onKeyPress')).toEqual(true)
    expect(validAttr('onKeyPressCapture')).toEqual(true)
    expect(validAttr('onKeyUp')).toEqual(true)
    expect(validAttr('onKeyUpCapture')).toEqual(true)
    expect(validAttr('onFocus')).toEqual(true)
    expect(validAttr('onFocusCapture')).toEqual(true)
    expect(validAttr('onBlur')).toEqual(true)
    expect(validAttr('onInvalid')).toEqual(true)
    expect(validAttr('onBlurCapture')).toEqual(true)
    expect(validAttr('onChange')).toEqual(true)
    expect(validAttr('onChangeCapture')).toEqual(true)
    expect(validAttr('onInput')).toEqual(true)
    expect(validAttr('onInputCapture')).toEqual(true)
    expect(validAttr('onSubmit')).toEqual(true)
    expect(validAttr('onSubmitCapture')).toEqual(true)
    expect(validAttr('onReset')).toEqual(true)
    expect(validAttr('onResetCapture')).toEqual(true)
    expect(validAttr('onClick')).toEqual(true)
    expect(validAttr('onClickCapture')).toEqual(true)
    expect(validAttr('onContextMenu')).toEqual(true)
    expect(validAttr('onContextMenuCapture')).toEqual(true)
    expect(validAttr('onDoubleClick')).toEqual(true)
    expect(validAttr('onDoubleClickCapture')).toEqual(true)
    expect(validAttr('onDrag')).toEqual(true)
    expect(validAttr('onDragCapture')).toEqual(true)
    expect(validAttr('onDragEnd')).toEqual(true)
    expect(validAttr('onDragEndCapture')).toEqual(true)
    expect(validAttr('onDragEnter')).toEqual(true)
    expect(validAttr('onDragEnterCapture')).toEqual(true)
    expect(validAttr('onDragExit')).toEqual(true)
    expect(validAttr('onDragExitCapture')).toEqual(true)
    expect(validAttr('onDragLeave')).toEqual(true)
    expect(validAttr('onDragLeaveCapture')).toEqual(true)
    expect(validAttr('onDragOver')).toEqual(true)
    expect(validAttr('onDragOverCapture')).toEqual(true)
    expect(validAttr('onDragStart')).toEqual(true)
    expect(validAttr('onDragStartCapture')).toEqual(true)
    expect(validAttr('onDrop')).toEqual(true)
    expect(validAttr('onDropCapture')).toEqual(true)
    expect(validAttr('onMouseDown')).toEqual(true)
    expect(validAttr('onMouseDownCapture')).toEqual(true)
    expect(validAttr('onMouseEnter')).toEqual(true)
    expect(validAttr('onMouseEnterCapture')).toEqual(true)
    expect(validAttr('onMouseLeave')).toEqual(true)
    expect(validAttr('onMouseLeaveCapture')).toEqual(true)
    expect(validAttr('onMouseMove')).toEqual(true)
    expect(validAttr('onMouseMoveCapture')).toEqual(true)
    expect(validAttr('onMouseOut')).toEqual(true)
    expect(validAttr('onMouseOutCapture')).toEqual(true)
    expect(validAttr('onMouseOver')).toEqual(true)
    expect(validAttr('onMouseOverCapture')).toEqual(true)
    expect(validAttr('onMouseUp')).toEqual(true)
    expect(validAttr('onMouseUpCapture')).toEqual(true)
    expect(validAttr('onSelect')).toEqual(true)
    expect(validAttr('onSelectCapture')).toEqual(true)
    expect(validAttr('onTouchCancel')).toEqual(true)
    expect(validAttr('onTouchCancelCapture')).toEqual(true)
    expect(validAttr('onTouchEnd')).toEqual(true)
    expect(validAttr('onTouchEndCapture')).toEqual(true)
    expect(validAttr('onTouchMove')).toEqual(true)
    expect(validAttr('onTouchMoveCapture')).toEqual(true)
    expect(validAttr('onTouchStart')).toEqual(true)
    expect(validAttr('onTouchStartCapture')).toEqual(true)
    expect(validAttr('onScroll')).toEqual(true)
    expect(validAttr('onScrollCapture')).toEqual(true)
    expect(validAttr('onWheel')).toEqual(true)
    expect(validAttr('onWheelCapture')).toEqual(true)
    expect(validAttr('onAbort')).toEqual(true)
    expect(validAttr('onAbortCapture')).toEqual(true)
    expect(validAttr('onCanPlay')).toEqual(true)
    expect(validAttr('onCanPlayCapture')).toEqual(true)
    expect(validAttr('onCanPlayThrough')).toEqual(true)
    expect(validAttr('onCanPlayThroughCapture')).toEqual(true)
    expect(validAttr('onDurationChange')).toEqual(true)
    expect(validAttr('onDurationChangeCapture')).toEqual(true)
    expect(validAttr('onEmptied')).toEqual(true)
    expect(validAttr('onEmptiedCapture')).toEqual(true)
    expect(validAttr('onEncrypted')).toEqual(true)
    expect(validAttr('onEncryptedCapture')).toEqual(true)
    expect(validAttr('onEnded')).toEqual(true)
    expect(validAttr('onEndedCapture')).toEqual(true)
    expect(validAttr('onError')).toEqual(true)
    expect(validAttr('onErrorCapture')).toEqual(true)
    expect(validAttr('onLoadedData')).toEqual(true)
    expect(validAttr('onLoadedDataCapture')).toEqual(true)
    expect(validAttr('onLoadedMetadata')).toEqual(true)
    expect(validAttr('onLoadedMetadataCapture')).toEqual(true)
    expect(validAttr('onLoadStart')).toEqual(true)
    expect(validAttr('onLoadStartCapture')).toEqual(true)
    expect(validAttr('onPause')).toEqual(true)
    expect(validAttr('onPauseCapture')).toEqual(true)
    expect(validAttr('onPlay')).toEqual(true)
    expect(validAttr('onPlayCapture')).toEqual(true)
    expect(validAttr('onPlaying')).toEqual(true)
    expect(validAttr('onPlayingCapture')).toEqual(true)
    expect(validAttr('onProgress')).toEqual(true)
    expect(validAttr('onProgressCapture')).toEqual(true)
    expect(validAttr('onRateChange')).toEqual(true)
    expect(validAttr('onRateChangeCapture')).toEqual(true)
    expect(validAttr('onSeeked')).toEqual(true)
    expect(validAttr('onSeekedCapture')).toEqual(true)
    expect(validAttr('onSeeking')).toEqual(true)
    expect(validAttr('onSeekingCapture')).toEqual(true)
    expect(validAttr('onStalled')).toEqual(true)
    expect(validAttr('onStalledCapture')).toEqual(true)
    expect(validAttr('onSuspend')).toEqual(true)
    expect(validAttr('onSuspendCapture')).toEqual(true)
    expect(validAttr('onTimeUpdate')).toEqual(true)
    expect(validAttr('onTimeUpdateCapture')).toEqual(true)
    expect(validAttr('onVolumeChange')).toEqual(true)
    expect(validAttr('onVolumeChangeCapture')).toEqual(true)
    expect(validAttr('onWaiting')).toEqual(true)
    expect(validAttr('onWaitingCapture')).toEqual(true)
    expect(validAttr('onLoad')).toEqual(true)
    expect(validAttr('onLoadCapture')).toEqual(true)
    expect(validAttr('onAnimationStart')).toEqual(true)
    expect(validAttr('onAnimationStartCapture')).toEqual(true)
    expect(validAttr('onAnimationEnd')).toEqual(true)
    expect(validAttr('onAnimationEndCapture')).toEqual(true)
    expect(validAttr('onAnimationIteration')).toEqual(true)
    expect(validAttr('onAnimationIterationCapture')).toEqual(true)
    expect(validAttr('onTransitionEnd')).toEqual(true)
    expect(validAttr('onTransitionEndCapture')).toEqual(true)
    expect(validAttr('onPointerDown')).toEqual(true)
    expect(validAttr('onPointerMove')).toEqual(true)
    expect(validAttr('onPointerUp')).toEqual(true)
    expect(validAttr('onPointerCancel')).toEqual(true)
    expect(validAttr('onGotPointerCapture')).toEqual(true)
    expect(validAttr('onLostPointerCapture')).toEqual(true)
    expect(validAttr('onPointerEnter')).toEqual(true)
    expect(validAttr('onPointerLeave')).toEqual(true)
    expect(validAttr('onPointerOver')).toEqual(true)
    expect(validAttr('onPointerOut')).toEqual(true)
  })

  it('should not allow custom props', () => {
    expect(validAttr('isPrimary')).toEqual(false)
    expect(validAttr('primary')).toEqual(false)
  })

  it('should handle x attributes', () => {
    expect(validAttr('x-error-message')).toEqual(true)
  })

  it('should allow all the preact props', () => {
    expect(validAttr('class')).toEqual(true)
    expect(validAttr('for')).toEqual(true)
    expect(validAttr('autofocus')).toEqual(true)
  })
})
