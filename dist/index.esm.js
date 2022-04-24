import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import * as React$1 from 'react';
import { forwardRef, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

var green = {
  100: '#529e66',
  200: '#367b48',
  300: '#276738'
};
var yellow = {
  100: '#e1c542',
  200: '#cab23f',
  300: '#b49e35'
};
var red = {
  100: '#d0454c',
  200: '#b54248',
  300: '#95353a'
};
var neutral = {
  100: '#ffffff',
  200: '#f4f5f7',
  300: '#e1e1e1',
  400: '#737581',
  500: '#4a4b53',
  600: '#000000'
};
var purple = {
  100: '#7453B2',
  200: '#8142AB'
};
var colors = {
  red: red,
  green: green,
  purple: purple,
  neutral: neutral,
  yellow: yellow
};

var theme = {
  primaryColor: colors.purple[200],
  textColorOnPrimary: colors.neutral[100],
  primaryActiveHoverColor: colors.purple[100],
  textColor: colors.neutral[600],
  disabled: colors.neutral[400],
  textOnDisabled: colors.neutral[300],
  formBorderColor: colors.neutral[200],
  status: {
    warningColor: colors.yellow[100],
    warningColorHover: colors.yellow[200],
    warningColorActive: colors.yellow[300],
    errorColor: colors.red[100],
    errorColorHover: colors.red[200],
    errorColorActive: colors.red[300],
    successColor: colors.green[100],
    successColorHover: colors.green[200],
    successColorActive: colors.green[300]
  }
};

var StyledButton = styled.button.withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-nep2zh-0"
})(["cursor:pointer;display:", ";text-align:center;user-select:none;padding:", ";border:", ";border-radius:5px;min-width:", ";background-color:", ";outline:none;border:none;line-height:1.5;color:", ";&:hover{background:", ";transition:all 0.4s ease-out;}&:disabled{color:", ";background-color:", ";cursor:not-allowed;}"], function (props) {
  return props.fullWidth ? 'block' : 'inline-block';
}, function (props) {
  if (props.size === 'large') {
    return "0.7rem 1.2rem";
  } else if (props.size === 'medium') {
    return "0.42rem 0.65rem";
  } else if (props.size === 'small') {
    return "0.25rem 0.45rem";
  }
}, function (props) {
  return props.variant === 'secondary' ? "10px solid ".concat(colors.purple[200]) : '1px solid inherit';
}, function (props) {
  return props.fullWidth ? '100%' : props.size === 'small' ? '60px' : props.size === 'medium' ? '80px' : props.size === 'large' ? '100px' : '80px';
}, function (props) {
  if (props.variant === 'primary') {
    return theme.primaryColor;
  } else if (props.variant === 'secondary') {
    return colors.neutral[100];
  } else if (props.variant === 'danger') {
    return theme.status.errorColor;
  } else if (props.variant === 'success') {
    return theme.status.successColor;
  } else if (props.variant === 'warning') {
    return theme.status.warningColor;
  } else if (props.disabled) {
    return theme.disabled;
  }
}, function (props) {
  return props.disabled ? colors.neutral[600] : props.variant === 'secondary' ? colors.purple[200] : colors.neutral[100];
}, function (props) {
  if (props.variant === 'primary') {
    return theme.primaryActiveHoverColor;
  } else if (props.variant === 'danger') {
    return theme.status.errorColorHover;
  } else if (props.variant === 'success') {
    return theme.status.successColorHover;
  } else if (props.variant === 'warning') {
    return theme.status.warningColorHover;
  }
}, theme.textOnDisabled, theme.disabled);

var _excluded$1 = ["children", "variant", "size", "label", "renderAs", "fullWidth"];
var Button = /*#__PURE__*/React$1.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      variant = _ref.variant,
      size = _ref.size,
      label = _ref.label,
      renderAs = _ref.renderAs,
      fullWidth = _ref.fullWidth,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React$1.createElement(StyledButton, _extends({
    renderAs: renderAs,
    variant: variant,
    size: size,
    fullWidth: fullWidth,
    label: label,
    ref: ref
  }, props), children);
});
Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'primary',
  size: 'medium'
};

var StyledInputContainer = styled.div.withConfig({
  displayName: "styled__StyledInputContainer",
  componentId: "sc-xhwu83-0"
})(["display:flex;flex-direction:column;"]);
var StyledInput = styled.input.withConfig({
  displayName: "styled__StyledInput",
  componentId: "sc-xhwu83-1"
})(["outline:none;border:", ";padding:0.8rem 0.7rem;border-radius:5px;font-family:inherit;background-color:", ";&:hover{border:2px solid ", ";transition:border 0.5s ease-in-out;}"], function (_ref) {
  var variant = _ref.variant,
      validationError = _ref.validationError;
  return variant === 'default' ? 'none' : variant === 'outlined' ? "1px solid ".concat(colors.neutral[400]) : validationError ? "2px solid ".concat(colors.red[100]) : '';
}, function (_ref2) {
  var variant = _ref2.variant;
  return variant === 'default' ? "".concat(colors.neutral[200]) : colors.neutral[100];
}, colors.purple[100]);
var StyledLabel = styled.label.withConfig({
  displayName: "styled__StyledLabel",
  componentId: "sc-xhwu83-2"
})(["display:inline-block;margin-bottom:0.3rem;color:", ";"], function (_ref3) {
  var validationError = _ref3.validationError;
  return validationError ? "".concat(colors.red[100]) : "".concat(colors.neutral[500]);
});

var _excluded = ["label", "variant", "validationError"];
var TextField = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var label = _ref.label,
      variant = _ref.variant,
      validationError = _ref.validationError,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledInputContainer, null, /*#__PURE__*/React.createElement(StyledLabel, {
    label: label,
    variant: variant,
    validationError: validationError
  }, label), /*#__PURE__*/React.createElement(StyledInput, _extends({
    "data-testid": "input-field",
    label: label,
    variant: variant,
    validationError: validationError,
    ref: ref
  }, props)));
});
TextField.displayName = 'TextField';
TextField.defaultProps = {
  variant: 'outlined'
};

var SelectLabelButton = styled.button.withConfig({
  displayName: "styled__SelectLabelButton",
  componentId: "sc-1fjur6q-0"
})(["display:flex;align-items:center;justify-content:space-between;background:white;outline:none;padding:0.45rem 0.5rem;border:1px solid ", ";font-family:inherit;border-radius:5px;cursor:pointer;"], theme.formBorderColor);
var SelectOverlay = styled.ul.withConfig({
  displayName: "styled__SelectOverlay",
  componentId: "sc-1fjur6q-1"
})(["padding:0;margin:0;z-index:999;position:absolute;width:100%;box-shadow:0px 4px 11px rgba(157,157,157,0.5);border-radius:5px;li{list-style:none;display:flex;justify-content:space-between;align-items:center;cursor:pointer;padding:10px 8px;&:hover{background:", ";color:", ";}}"], colors.purple[100], colors.neutral[400]);
var SelectContainer = styled.div.withConfig({
  displayName: "styled__SelectContainer",
  componentId: "sc-1fjur6q-2"
})(["display:flex;flex-direction:column;position:relative;"]);

var Select = function Select(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Please select an option' : _ref$label,
      handler = _ref.onOptionSelect;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      overlayTop = _useState4[0],
      setOverlayTop = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedIndex = _useState6[0],
      setSelectedIndex = _useState6[1];

  var labelRef = useRef(null);

  var handleLabelClick = function handleLabelClick() {
    setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  };

  var handleOptionClick = function handleOptionClick(option, optionIndex) {
    if (handler) {
      handler(option, optionIndex);
      setSelectedIndex(optionIndex);
    }

    setIsOpen(false);
  };

  useEffect(function () {
    var _labelRef$current;

    setOverlayTop((((_labelRef$current = labelRef.current) === null || _labelRef$current === void 0 ? void 0 : _labelRef$current.offsetHeight) || 0) + 10);
  }, []);
  return /*#__PURE__*/React.createElement(SelectContainer, null, /*#__PURE__*/React.createElement(SelectLabelButton, {
    ref: labelRef,
    onClick: handleLabelClick
  }, selectedIndex !== null || 0 ? options[selectedIndex].label : label, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    }
  }, "^")), /*#__PURE__*/React.createElement(SelectOverlay, {
    style: {
      top: overlayTop
    }
  }, isOpen ? options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return handleOptionClick(option, index);
      },
      key: option.value
    }, option.label);
  }) : null));
};

export { Button, Select, TextField };
