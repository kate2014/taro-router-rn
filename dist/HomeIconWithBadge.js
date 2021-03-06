"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const config_1 = require("./config");
const utils_1 = require("./utils");
class HomeIconWithBadge extends react_1.default.Component {
    render() {
        const { index, focused, selectedIcon, icon, text, color, selectedColor } = this.props;
        // 红点与badge的显示优先跟其调用的顺序有关系，后面调用的会覆盖前面，红点与badge只能显示其一
        const badgeValue = config_1._globalTabBarBadgeConfig[`${index}`];
        const redDotValue = config_1._globalTabBarRedDotConfig[`${index}`];
        const shouldBadge = badgeValue && (redDotValue ? badgeValue._stackIndex > redDotValue._stackIndex : true);
        const shouldRedDot = redDotValue && (badgeValue ? redDotValue._stackIndex > badgeValue._stackIndex : true);
        const { _tabBarBadgeText = '' } = badgeValue || {};
        const badgeText = _tabBarBadgeText.length > 4 ? '...' : _tabBarBadgeText;
        // 动态设置 tabBar 某一项的内容
        const tabBarItemValue = config_1._globalTabBarItemConfig[`${index}`];
        const dynamicText = tabBarItemValue && tabBarItemValue._tabBarItemText;
        const dynamicIconPath = tabBarItemValue && tabBarItemValue._tabBarItemIconPath;
        const dynamicSelectedIconPath = tabBarItemValue && tabBarItemValue._tabBarItemSelectedIconPath;
        let iconPath = icon;
        if (dynamicIconPath) {
            iconPath = utils_1.isUrl(dynamicIconPath) ? { uri: dynamicIconPath } : dynamicIconPath;
        }
        let selectIconPath = selectedIcon;
        if (dynamicSelectedIconPath) {
            selectIconPath = utils_1.isUrl(dynamicSelectedIconPath) ? { uri: dynamicSelectedIconPath } : dynamicSelectedIconPath;
        }
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.body },
                react_1.default.createElement(react_native_1.Image, { style: styles.img, source: focused ? selectIconPath : iconPath }),
                react_1.default.createElement(react_native_1.Text, { style: [styles.text, { color: focused ? selectedColor : color }] }, dynamicText ? dynamicText : text)),
            shouldBadge && (react_1.default.createElement(react_native_1.View, { style: styles.badge },
                react_1.default.createElement(react_native_1.Text, { style: styles.badgeText }, badgeText))),
            shouldRedDot && react_1.default.createElement(react_native_1.View, { style: styles.reddot })));
    }
}
HomeIconWithBadge.defaultProps = {
    text: '',
};
exports.default = HomeIconWithBadge;
const styles = react_native_1.StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        position: 'relative',
    },
    body: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 26,
        height: 26,
    },
    text: {
        fontSize: 10,
        marginTop: 1,
    },
    badge: {
        minHeight: 18,
        minWidth: 18,
        maxWidth: 25,
        backgroundColor: '#e1473c',
        position: 'absolute',
        top: -5,
        right: -6,
        borderRadius: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: 2,
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
    },
    reddot: {
        position: 'absolute',
        top: -5,
        right: 2,
        height: 10,
        width: 10,
        backgroundColor: '#e1473c',
        borderRadius: 18,
    },
});
