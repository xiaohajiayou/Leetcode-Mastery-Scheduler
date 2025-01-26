/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: #0D1F2D; /* 深色背景 */
    background-size: cover; /* 背景覆盖 */
    color: #ffffff; /* 白色字体 */
    font-family: 'Raleway', sans-serif;
    position: relative;
}
/* 导航栏样式 */
.nav-bar {
    background-color: #0D1F2D;

    display: flex;
    flex-direction: column;  /* 改为纵向排列 */
    align-items: center;     /* 水平居中 */
    border-bottom: 1px solid #4a9d9c;
}

.nav-row {
    display: flex;
    justify-content: center;  /* 内容居中 */
    align-items: center;
    margin: 0;  /* 移除外边距 */
    padding: 2px 0;  /* 减小上下内边距 */
    line-height: 1;  /* 减小行高 */
    margin-top: -5px;
}

/* 标题行样式 */
.nav-title {
color: #FF3D3D;
font-weight: 900;  /* 更粗的字体 */
font-size: 1.2em;  /* 更大的字号 */
text-transform: uppercase;  /* 转换为大写 */
letter-spacing: 2px;  /* 字母间距 */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  /* 添加阴影效果 */
font-family: 'Arial Black', Gadget, sans-serif;  /* 更粗重的字体 */
margin-top: 5px;
padding: 5px 10px;  /* 添加内边距 */
background: linear-gradient(180deg, #ff6b6b 0%, #FF3D3D 100%);  /* 渐变色 */
-webkit-background-clip: text;  /* 使渐变色应用到文字 */
-webkit-text-fill-color: transparent;  /* 使文字透明以显示背景 */
display: inline-block;  /* 确保渐变效果生效 */
}

/* 专门为标题容器添加类 */
.nav-row.title-row {
    margin: 0;
    padding: 0;
    line-height: 1;
}

/* 特别处理第二个标题行 */
.nav-row.title-row + .nav-row.title-row {
    margin-top: -10px;  /* 调整这个值来控制两行标题间的间距 */
}

/* 网站信息行样式 */
.nav-site {
    color: #4a9d9c;
    font-size: 0.9em;
    padding: 2px 8px;
    border-radius: 4px;
    background-color: rgba(74, 157, 156, 0.1);
}

/* 导航按钮行样式 */
.nav-btn {
    background: none;
    border: none;
    color: #888;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1em;
    position: relative;
}

.nav-btn:hover {
    color: #fff;
}

.nav-btn.active {
    color: #fff;
}

.nav-btn.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background-color: #4a9d9c;
    border-radius: 2px;
}

.nav-right {
    display: flex;
    gap: 10px;
}

/* 开关按钮样式 */
.switch-btn {
    background-color: #2a2b30;
    border: 1px solid #3a3b40;
    color: #888;
    padding: 5px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.switch-btn:hover {
    background-color: #3a3b40;
    color: #fff;
}


.text-date {
    color: #e0e0e0 !important; /* 更亮的灰色，使用 !important 确保优先级 */
    font-size: 1em; /* 修改字体大小 */
    align-items: center;
    gap: 2px;
}
.text-muted {
    color: #e0e0e0 !important; /* 更亮的灰色，使用 !important 确保优先级 */
    font-size: 0.8em; /* 修改字体大小 */
    display: flex;
    align-items: center;
    gap: 5px;
}



.review-card {
    background-color: #1d2e3d; /* 卡片背景 */
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    padding: 10px;
    margin: 20px 0;
    transition: transform 0.2s;
    
}

        .review-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px #4a9d9c;
}

.problem-title {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.9em;
    color: #ffffff; /* 白色字体 */
}



.difficulty-Easy {
    color: #4a9d9c;
}

.difficulty-Medium {
    color: #f0b215;
}

.difficulty-Hard {
    color: #FF3D3D;
}

.progress {
    height: 8px;
    margin-top: 10px;
}

.btn-review {

    border: none;
    color: #e0e0e0;
    font-size: 1.5em;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    position: relative;
    z-index: 1;
    pointer-events: auto !important;
}


.btn-review:hover {
    color: #afffff;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn-review:active {
    transform: translateY(0);
}

.btn-review:disabled {

    color: white;
    opacity: 0.8;
    cursor: not-allowed;
}

.btn-review.btn-lg {
    font-size: 1.1em;
    padding: 10px 24px;
}

.review-card .btn-review,
.container .btn-review {
    pointer-events: auto !important;
    cursor: pointer !important;
}

.review-card.reviewed {
    opacity: 0.6;
}

.header-section {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    background-color: #1d2e3d;
    border: 1px solid rgba(74, 157, 156, 0.1);  /* 降低边框透明度 */
    box-shadow: 0 0 8px rgba(74, 157, 156, 0.1);  /* 降低阴影透明度 */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 10px;
    margin: 10px 15px;
}

.header-section:hover {
    border-color: rgba(74, 157, 156, 0.2);  /* 降低悬停时边框透明度 */
    box-shadow: 
        0 0 12px rgba(74, 157, 156, 0.15),  /* 降低外阴影透明度 */
        inset 0 0 8px rgba(74, 157, 156, 0.05);  /* 降低内阴影透明度 */
    transform: translateY(-1px);
}

.header-section::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 15px;
    background: linear-gradient(45deg, 
        rgba(74, 157, 156, 0.05),  /* 降低渐变透明度 */
        rgba(74, 157, 156, 0.1),
        rgba(74, 157, 156, 0.05)
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-section:hover::before {
    opacity: 1;
}

.completion-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: conic-gradient(#afffff var(--percentage), #3a3a4d var(--percentage)); /* 使用深色作为背景 */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: background 0.5s ease; /* 背景渐变动画 */
}

.inner-circle {
    width: 100px;
    height: 100px;
    background: #1d2e3d; /* 内圈背景 */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    color: #FF3D3D; /* 内圈字体颜色 */
    transition: transform 0.5s ease; /* 内圈缩放动画 */
}

.retrievability {
    font-size: 1.0em;
    color: #ffffff; /* 白色字体 */
    display: flex;
    align-items: center;
    justify-content: center;
}

.retrievability-icon {
    margin-right: 10px;
    color: #4a9d9c;
    animation: pulse 2s infinite;
}

.retrievability-value {
    font-weight: bold;
    margin-left: 10px;
    color: #4a9d9c; /* Green color for good retrievability */
    transition: color 0.3s;
}

.retrievability-value.low {
    color: #FF3D3D; /* Red color for low retrievability */
}

.trend-icon {
    margin-left: 10px;
    font-size: 1.5em;
    transition: transform 0.3s;
}

.trend-up {
    color: #4a9d9c; /* Green for upward trend */
}

.trend-down {
    color: #FF3D3D; /* Red for downward trend */
}

.low-memory-warning {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 0;
}

.low-memory-warning.active {
    display: flex;
}

.card-limit-input input[type="number"]::-webkit-inner-spin-button,
.card-limit-input input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.card-limit-input input[type="number"] {
    -moz-appearance: textfield;
    background: #3a3a4d; /* 输入框背景 */
    color: #ffffff; /* 输入框字体颜色 */
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 1.2em;
    padding: 5px;
    border: 2px solid #0D6E6E; /* 输入框边框颜色 */
    border-radius: 8px;
    margin: 0 10px;
}

.gear-button {
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 5px;
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gear-button .fa-gear {
    font-size: 1.8em;
    color: #0D6E6E; /* 齿轮图标颜色 */
    transition: all 0.3s ease;
}

.gear-button .direction-icon {
    position: absolute;
    font-size: 1em;
    color: #e2c027;
    background-color: #fff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    font-weight: bold;
}

/* 悬停效果 */
.gear-button:hover .fa-gear {
    color: #4a9d9c; /* 悬停时齿轮图标颜色 */
    filter: drop-shadow(0 0 2px rgba(255, 152, 0, 0.5));
}

.gear-button:hover .direction-icon {
    color: #000;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    transform: translate(-50%, -50%) scale(1.1);
}

/* 点击动画 */
.gear-button.left:active {
    transform: rotate(-45deg);
}

.gear-button.right:active {
    transform: rotate(45deg);
}

.card-limit-input {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
}

.card-limit-label {
    font-size: 1.1em;
    color: #ffffff; /* 白色字体 */
    margin-right: 5px;
}

/* 工具提示 */
.gear-button::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
}

.gear-button:hover::after {
    opacity: 1;
}

/* 视图容器样式 */
.view {
    display: none;
    transition: opacity 0.3s ease;
}

.view.active {
    display: block;
}

/* 题目列表页面样式 */
.problem-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.search-bar {
    position: relative;
    width: 300px;
}

.search-input {
    width: 100%;
    padding: 8px 35px 8px 15px;
    border: none;
    border-radius: 20px;
    background: #2a2b30;
    color: #fff;
}

.search-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
}

.problem-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px 0;
}

/* 更多选项页面样式 */
.options-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px 0;
}

.option-card {
    background: #1d2e3d;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.option-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(74, 157, 156, 0.2);
}

.option-card i {
    font-size: 2em;
    color: #4a9d9c;
    margin-bottom: 15px;
}

.option-card h4 {
    color: #fff;
    margin-bottom: 10px;
}

.option-card p {
    color: #888;
    font-size: 0.9em;
}

/* 导航标签样式 */
#problemListView .nav-tabs {
    border-bottom: 1px solid #4a9d9c;

}

#problemListView .nav-tabs .nav-link {
    color: #888;
    border: none;
    background: none;


    transition: all 0.3s ease;
}

#problemListView .nav-tabs .nav-link:hover {
    color: #fff;
}

#problemListView .nav-tabs .nav-link.active {
    color: #4a9d9c;
    background: none;
    border-bottom: 2px solid #4a9d9c;
}

/* 确保tab内容区域正确显示 */
#problemListView .tab-content {
    display: flex;
}

#problemListView .tab-pane {
    transition: opacity 0.3s ease;
}

#problemListView .tab-pane.active {
    opacity: 1;
}





iframe {
    overflow: hidden;
    border: 0;
}

.custom-btn {
    border-color: #0D6E6E;
    color: #4a9d9c;
}

.custom-btn:hover {
    border-color: rgba(235, 173, 129, 1);
    background-color: rgba(235, 173, 129, 1);
}

.custom-btn:disabled {
    border-color: #e0e0e0;
    color: #e0e0e0;
}

.page-input {
    background-color: transparent;
    color: #e0e0e0;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    text-align: center;
    font-size: 0.875rem;  /* 相当于 Bootstrap 的 sm 大小 */
    margin-left: 5px !important; 
    margin-right: 5px !important;
}

.page-input:focus {
    outline: none;
    border-color: #afffff;
    box-shadow: 0 0 5px rgba(74, 157, 156, 0.5);
}

.multifont {
    font-family: 'Courier Prime', 'Noto Sans SC', sans-serif;
}

a {
    color: chocolate;
}

.custom-tooltip {
    --bs-tooltip-bg: var(--bd-violet-bg);
    --bs-tooltip-color: var(--bs-white);
}

/* 题目列表样式 */
#problemListView {
    padding: 5px;
}

.problem-list-header {
    margin-bottom: 15px;
}

.nav-tabs {
    border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-link {
    margin-bottom: -1px;
    color: #495057;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.nav-tabs .nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}

.tab-content {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-top: none;
}

.tab-pane {
    display: none;
}
.tab-pane.active {
    display: block;
}



/* 确保switch容器不会阻挡点击事件 */
#switch-area {
    pointer-events: auto;
    position: relative;
    z-index: 100;
}






/* 自定义表格样式 */
.table {
    width: 100%;
    table-layout: fixed;
    word-wrap: break-word;


    --bs-table-border-color: #afffff !important;       /* 边框颜色 */

    --bs-table-hover-color: #f56464 !important;        /* 悬停文字颜色 */
    --bs-table-hover-bg: #ebe3e3 !important;          /* 悬停背景颜色 */
    border: none !important;              /* 移除表格外边框 */
    border-collapse: collapse !important;  /* 确保边框合并 */
}


td, th {
    padding: 4px !important;
}

.table {
    margin-bottom: 0;
    min-width: auto !important;
}

/* 确保表格容器有正确的宽度和溢出处理 */
.table-responsive {
    width: 100%;
    overflow-x: hidden;
}



/* 专门设置表头样式 */
.table thead,
.table > thead{
    border: none !important;              
    background: linear-gradient(to right, #0D6E6E, #4a9d9c) !important;  
}

/* 确保表头单元格没有背景色 */
.table thead tr,
.table thead th {
    background: transparent !important;    /* 确保tr和th是透明的 */
    border: none !important;              
    color: #ffffff !important;            /* 表头文字颜色 */
}




/* 记忆概率指示器样式 */
.memory-indicator {
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.memory-indicator:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
}

.memory-indicator i {
    font-size: 1.1em;
}

/* 颜色类 */
.text-success { color: #4caf50 !important; }
.text-warning { color: #ff9800 !important; }
.text-danger { color: #f44336 !important; }



/* 设置卡片样式调整 */
.option-card {
    background-color: #1d2e3d;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    margin-bottom: 20px;
}

.option-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(74, 157, 156, 0.2);
}

.option-card i {
    font-size: 2em;
    color: #4a9d9c;
    margin-bottom: 15px;
}

.option-card h4 {
    color: #fff;
    margin-bottom: 15px;
}

.option-card p {
    color: #888;
    font-size: 0.9em;
}

/* 表单控件样式 */
.form-select {
    background-color: #0D1F2D;
    color: #fff;
    border: 1px solid #4a9d9c;
    margin-top: 10px;
}

.sync-tips {
    margin-top: 10px;
    font-size: 0.8em;
    color: #888;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.save-section {
    grid-column: 1 / -1;
    text-align: center;
    margin-top: 20px;
}

/* 开关按钮样式 */
.form-check-input.custom-switch {
    background-color: #0D1F2D !important;
    border-color: #4a9d9c !important;
    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);
    transition: all 0.3s ease;
    cursor: pointer !important;
    pointer-events: auto !important;
    opacity: 1;
    z-index: 100;
    position: relative;
    outline: none !important;
    /* 自定义滑块圆圈颜色为亮蓝色 */
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) !important;
}

/* 选中状态下的样式 */
.form-check-input.custom-switch:checked {
    background-color: #0D6E6E !important;
    border-color: #0D6E6E !important;
    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);
    /* 选中状态下保持相同的蓝色圆圈 */
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) !important;
}

/* 悬停状态加强发光效果 */
.form-check-input.custom-switch:hover {
    box-shadow: 0 0 15px rgba(97, 218, 251, 0.9);
}

/* 焦点状态 */
.form-check-input.custom-switch:focus {
    background-color: inherit !important;  /* 继承当前状态的背景色 */
    border-color: #4a9d9c !important;
    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);
    outline: none !important;
}

/* 选中且焦点状态 */
.form-check-input.custom-switch:checked:focus {
    background-color: #4a9d9c !important;
}





/* SweetAlert2 自定义样式 */
.colored-toast.swal2-icon-success {
    background-color: #1d2e3d !important;
    border: 1px solid #4a9d9c !important;
}

.colored-toast .swal2-title {
    color: #ffffff !important;
    font-size: 1em !important;
}

.colored-toast .swal2-close {
    color: #4a9d9c !important;
}

.colored-toast .swal2-html-container {
    color: #888 !important;
    font-size: 0.9em !important;
}

/* 成功图标颜色 */
.colored-toast .swal2-success-line-tip,
.colored-toast .swal2-success-line-long {
    background-color: #4a9d9c !important;
}

.colored-toast .swal2-success-ring {
    border-color: #4a9d9c !important;
}`, "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    background-color: #0D1F2D; /* 深色背景 */\n    background-size: cover; /* 背景覆盖 */\n    color: #ffffff; /* 白色字体 */\n    font-family: 'Raleway', sans-serif;\n    position: relative;\n}\n/* 导航栏样式 */\n.nav-bar {\n    background-color: #0D1F2D;\n\n    display: flex;\n    flex-direction: column;  /* 改为纵向排列 */\n    align-items: center;     /* 水平居中 */\n    border-bottom: 1px solid #4a9d9c;\n}\n\n.nav-row {\n    display: flex;\n    justify-content: center;  /* 内容居中 */\n    align-items: center;\n    margin: 0;  /* 移除外边距 */\n    padding: 2px 0;  /* 减小上下内边距 */\n    line-height: 1;  /* 减小行高 */\n    margin-top: -5px;\n}\n\n/* 标题行样式 */\n.nav-title {\ncolor: #FF3D3D;\nfont-weight: 900;  /* 更粗的字体 */\nfont-size: 1.2em;  /* 更大的字号 */\ntext-transform: uppercase;  /* 转换为大写 */\nletter-spacing: 2px;  /* 字母间距 */\ntext-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  /* 添加阴影效果 */\nfont-family: 'Arial Black', Gadget, sans-serif;  /* 更粗重的字体 */\nmargin-top: 5px;\npadding: 5px 10px;  /* 添加内边距 */\nbackground: linear-gradient(180deg, #ff6b6b 0%, #FF3D3D 100%);  /* 渐变色 */\n-webkit-background-clip: text;  /* 使渐变色应用到文字 */\n-webkit-text-fill-color: transparent;  /* 使文字透明以显示背景 */\ndisplay: inline-block;  /* 确保渐变效果生效 */\n}\n\n/* 专门为标题容器添加类 */\n.nav-row.title-row {\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n}\n\n/* 特别处理第二个标题行 */\n.nav-row.title-row + .nav-row.title-row {\n    margin-top: -10px;  /* 调整这个值来控制两行标题间的间距 */\n}\n\n/* 网站信息行样式 */\n.nav-site {\n    color: #4a9d9c;\n    font-size: 0.9em;\n    padding: 2px 8px;\n    border-radius: 4px;\n    background-color: rgba(74, 157, 156, 0.1);\n}\n\n/* 导航按钮行样式 */\n.nav-btn {\n    background: none;\n    border: none;\n    color: #888;\n    padding: 5px 15px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    font-size: 1em;\n    position: relative;\n}\n\n.nav-btn:hover {\n    color: #fff;\n}\n\n.nav-btn.active {\n    color: #fff;\n}\n\n.nav-btn.active::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 20px;\n    height: 2px;\n    background-color: #4a9d9c;\n    border-radius: 2px;\n}\n\n.nav-right {\n    display: flex;\n    gap: 10px;\n}\n\n/* 开关按钮样式 */\n.switch-btn {\n    background-color: #2a2b30;\n    border: 1px solid #3a3b40;\n    color: #888;\n    padding: 5px 15px;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\n.switch-btn:hover {\n    background-color: #3a3b40;\n    color: #fff;\n}\n\n\n.text-date {\n    color: #e0e0e0 !important; /* 更亮的灰色，使用 !important 确保优先级 */\n    font-size: 1em; /* 修改字体大小 */\n    align-items: center;\n    gap: 2px;\n}\n.text-muted {\n    color: #e0e0e0 !important; /* 更亮的灰色，使用 !important 确保优先级 */\n    font-size: 0.8em; /* 修改字体大小 */\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n\n\n.review-card {\n    background-color: #1d2e3d; /* 卡片背景 */\n    border-radius: 15px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n    padding: 10px;\n    margin: 20px 0;\n    transition: transform 0.2s;\n    \n}\n\n        .review-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 16px #4a9d9c;\n}\n\n.problem-title {\n    font-family: 'Press Start 2P', cursive;\n    font-size: 0.9em;\n    color: #ffffff; /* 白色字体 */\n}\n\n\n\n.difficulty-Easy {\n    color: #4a9d9c;\n}\n\n.difficulty-Medium {\n    color: #f0b215;\n}\n\n.difficulty-Hard {\n    color: #FF3D3D;\n}\n\n.progress {\n    height: 8px;\n    margin-top: 10px;\n}\n\n.btn-review {\n\n    border: none;\n    color: #e0e0e0;\n    font-size: 1.5em;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    font-weight: 500;\n    position: relative;\n    z-index: 1;\n    pointer-events: auto !important;\n}\n\n\n.btn-review:hover {\n    color: #afffff;\n    transform: translateY(-1px);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.btn-review:active {\n    transform: translateY(0);\n}\n\n.btn-review:disabled {\n\n    color: white;\n    opacity: 0.8;\n    cursor: not-allowed;\n}\n\n.btn-review.btn-lg {\n    font-size: 1.1em;\n    padding: 10px 24px;\n}\n\n.review-card .btn-review,\n.container .btn-review {\n    pointer-events: auto !important;\n    cursor: pointer !important;\n}\n\n.review-card.reviewed {\n    opacity: 0.6;\n}\n\n.header-section {\n    position: relative;\n    border-radius: 15px;\n    overflow: hidden;\n    background-color: #1d2e3d;\n    border: 1px solid rgba(74, 157, 156, 0.1);  /* 降低边框透明度 */\n    box-shadow: 0 0 8px rgba(74, 157, 156, 0.1);  /* 降低阴影透明度 */\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    padding: 10px;\n    margin: 10px 15px;\n}\n\n.header-section:hover {\n    border-color: rgba(74, 157, 156, 0.2);  /* 降低悬停时边框透明度 */\n    box-shadow: \n        0 0 12px rgba(74, 157, 156, 0.15),  /* 降低外阴影透明度 */\n        inset 0 0 8px rgba(74, 157, 156, 0.05);  /* 降低内阴影透明度 */\n    transform: translateY(-1px);\n}\n\n.header-section::before {\n    content: '';\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border-radius: 15px;\n    background: linear-gradient(45deg, \n        rgba(74, 157, 156, 0.05),  /* 降低渐变透明度 */\n        rgba(74, 157, 156, 0.1),\n        rgba(74, 157, 156, 0.05)\n    );\n    z-index: -1;\n    opacity: 0;\n    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.header-section:hover::before {\n    opacity: 1;\n}\n\n.completion-circle {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    background: conic-gradient(#afffff var(--percentage), #3a3a4d var(--percentage)); /* 使用深色作为背景 */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    transition: background 0.5s ease; /* 背景渐变动画 */\n}\n\n.inner-circle {\n    width: 100px;\n    height: 100px;\n    background: #1d2e3d; /* 内圈背景 */\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5em;\n    font-weight: bold;\n    color: #FF3D3D; /* 内圈字体颜色 */\n    transition: transform 0.5s ease; /* 内圈缩放动画 */\n}\n\n.retrievability {\n    font-size: 1.0em;\n    color: #ffffff; /* 白色字体 */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.retrievability-icon {\n    margin-right: 10px;\n    color: #4a9d9c;\n    animation: pulse 2s infinite;\n}\n\n.retrievability-value {\n    font-weight: bold;\n    margin-left: 10px;\n    color: #4a9d9c; /* Green color for good retrievability */\n    transition: color 0.3s;\n}\n\n.retrievability-value.low {\n    color: #FF3D3D; /* Red color for low retrievability */\n}\n\n.trend-icon {\n    margin-left: 10px;\n    font-size: 1.5em;\n    transition: transform 0.3s;\n}\n\n.trend-up {\n    color: #4a9d9c; /* Green for upward trend */\n}\n\n.trend-down {\n    color: #FF3D3D; /* Red for downward trend */\n}\n\n.low-memory-warning {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    z-index: 0;\n}\n\n.low-memory-warning.active {\n    display: flex;\n}\n\n.card-limit-input input[type=\"number\"]::-webkit-inner-spin-button,\n.card-limit-input input[type=\"number\"]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.card-limit-input input[type=\"number\"] {\n    -moz-appearance: textfield;\n    background: #3a3a4d; /* 输入框背景 */\n    color: #ffffff; /* 输入框字体颜色 */\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    font-size: 1.2em;\n    padding: 5px;\n    border: 2px solid #0D6E6E; /* 输入框边框颜色 */\n    border-radius: 8px;\n    margin: 0 10px;\n}\n\n.gear-button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    padding: 5px;\n    position: relative;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.gear-button .fa-gear {\n    font-size: 1.8em;\n    color: #0D6E6E; /* 齿轮图标颜色 */\n    transition: all 0.3s ease;\n}\n\n.gear-button .direction-icon {\n    position: absolute;\n    font-size: 1em;\n    color: #e2c027;\n    background-color: #fff;\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.3s ease;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n    font-weight: bold;\n}\n\n/* 悬停效果 */\n.gear-button:hover .fa-gear {\n    color: #4a9d9c; /* 悬停时齿轮图标颜色 */\n    filter: drop-shadow(0 0 2px rgba(255, 152, 0, 0.5));\n}\n\n.gear-button:hover .direction-icon {\n    color: #000;\n    background-color: #fff;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.3);\n    transform: translate(-50%, -50%) scale(1.1);\n}\n\n/* 点击动画 */\n.gear-button.left:active {\n    transform: rotate(-45deg);\n}\n\n.gear-button.right:active {\n    transform: rotate(45deg);\n}\n\n.card-limit-input {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    margin-top: 10px;\n}\n\n.card-limit-label {\n    font-size: 1.1em;\n    color: #ffffff; /* 白色字体 */\n    margin-right: 5px;\n}\n\n/* 工具提示 */\n.gear-button::after {\n    content: attr(data-tooltip);\n    position: absolute;\n    bottom: -25px;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    padding: 4px 8px;\n    border-radius: 4px;\n    font-size: 0.8em;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    pointer-events: none;\n    white-space: nowrap;\n}\n\n.gear-button:hover::after {\n    opacity: 1;\n}\n\n/* 视图容器样式 */\n.view {\n    display: none;\n    transition: opacity 0.3s ease;\n}\n\n.view.active {\n    display: block;\n}\n\n/* 题目列表页面样式 */\n.problem-list-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n}\n\n.search-bar {\n    position: relative;\n    width: 300px;\n}\n\n.search-input {\n    width: 100%;\n    padding: 8px 35px 8px 15px;\n    border: none;\n    border-radius: 20px;\n    background: #2a2b30;\n    color: #fff;\n}\n\n.search-icon {\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #888;\n}\n\n.problem-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n    padding: 20px 0;\n}\n\n/* 更多选项页面样式 */\n.options-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 20px;\n    padding: 20px 0;\n}\n\n.option-card {\n    background: #1d2e3d;\n    padding: 20px;\n    border-radius: 15px;\n    text-align: center;\n    transition: all 0.3s ease;\n    cursor: pointer;\n}\n\n.option-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 16px rgba(74, 157, 156, 0.2);\n}\n\n.option-card i {\n    font-size: 2em;\n    color: #4a9d9c;\n    margin-bottom: 15px;\n}\n\n.option-card h4 {\n    color: #fff;\n    margin-bottom: 10px;\n}\n\n.option-card p {\n    color: #888;\n    font-size: 0.9em;\n}\n\n/* 导航标签样式 */\n#problemListView .nav-tabs {\n    border-bottom: 1px solid #4a9d9c;\n\n}\n\n#problemListView .nav-tabs .nav-link {\n    color: #888;\n    border: none;\n    background: none;\n\n\n    transition: all 0.3s ease;\n}\n\n#problemListView .nav-tabs .nav-link:hover {\n    color: #fff;\n}\n\n#problemListView .nav-tabs .nav-link.active {\n    color: #4a9d9c;\n    background: none;\n    border-bottom: 2px solid #4a9d9c;\n}\n\n/* 确保tab内容区域正确显示 */\n#problemListView .tab-content {\n    display: flex;\n}\n\n#problemListView .tab-pane {\n    transition: opacity 0.3s ease;\n}\n\n#problemListView .tab-pane.active {\n    opacity: 1;\n}\n\n\n\n\n\niframe {\n    overflow: hidden;\n    border: 0;\n}\n\n.custom-btn {\n    border-color: #0D6E6E;\n    color: #4a9d9c;\n}\n\n.custom-btn:hover {\n    border-color: rgba(235, 173, 129, 1);\n    background-color: rgba(235, 173, 129, 1);\n}\n\n.custom-btn:disabled {\n    border-color: #e0e0e0;\n    color: #e0e0e0;\n}\n\n.page-input {\n    background-color: transparent;\n    color: #e0e0e0;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n    text-align: center;\n    font-size: 0.875rem;  /* 相当于 Bootstrap 的 sm 大小 */\n    margin-left: 5px !important; \n    margin-right: 5px !important;\n}\n\n.page-input:focus {\n    outline: none;\n    border-color: #afffff;\n    box-shadow: 0 0 5px rgba(74, 157, 156, 0.5);\n}\n\n.multifont {\n    font-family: 'Courier Prime', 'Noto Sans SC', sans-serif;\n}\n\na {\n    color: chocolate;\n}\n\n.custom-tooltip {\n    --bs-tooltip-bg: var(--bd-violet-bg);\n    --bs-tooltip-color: var(--bs-white);\n}\n\n/* 题目列表样式 */\n#problemListView {\n    padding: 5px;\n}\n\n.problem-list-header {\n    margin-bottom: 15px;\n}\n\n.nav-tabs {\n    border-bottom: 1px solid #dee2e6;\n}\n\n.nav-tabs .nav-link {\n    margin-bottom: -1px;\n    color: #495057;\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link.active {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff;\n}\n\n.tab-content {\n    padding: 10px;\n    background-color: #fff;\n    border: 1px solid #dee2e6;\n    border-top: none;\n}\n\n.tab-pane {\n    display: none;\n}\n.tab-pane.active {\n    display: block;\n}\n\n\n\n/* 确保switch容器不会阻挡点击事件 */\n#switch-area {\n    pointer-events: auto;\n    position: relative;\n    z-index: 100;\n}\n\n\n\n\n\n\n/* 自定义表格样式 */\n.table {\n    width: 100%;\n    table-layout: fixed;\n    word-wrap: break-word;\n\n\n    --bs-table-border-color: #afffff !important;       /* 边框颜色 */\n\n    --bs-table-hover-color: #f56464 !important;        /* 悬停文字颜色 */\n    --bs-table-hover-bg: #ebe3e3 !important;          /* 悬停背景颜色 */\n    border: none !important;              /* 移除表格外边框 */\n    border-collapse: collapse !important;  /* 确保边框合并 */\n}\n\n\ntd, th {\n    padding: 4px !important;\n}\n\n.table {\n    margin-bottom: 0;\n    min-width: auto !important;\n}\n\n/* 确保表格容器有正确的宽度和溢出处理 */\n.table-responsive {\n    width: 100%;\n    overflow-x: hidden;\n}\n\n\n\n/* 专门设置表头样式 */\n.table thead,\n.table > thead{\n    border: none !important;              \n    background: linear-gradient(to right, #0D6E6E, #4a9d9c) !important;  \n}\n\n/* 确保表头单元格没有背景色 */\n.table thead tr,\n.table thead th {\n    background: transparent !important;    /* 确保tr和th是透明的 */\n    border: none !important;              \n    color: #ffffff !important;            /* 表头文字颜色 */\n}\n\n\n\n\n/* 记忆概率指示器样式 */\n.memory-indicator {\n    display: inline-flex;\n    align-items: center;\n    padding: 4px 8px;\n    border-radius: 12px;\n    transition: all 0.3s ease;\n}\n\n.memory-indicator:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    transform: scale(1.05);\n}\n\n.memory-indicator i {\n    font-size: 1.1em;\n}\n\n/* 颜色类 */\n.text-success { color: #4caf50 !important; }\n.text-warning { color: #ff9800 !important; }\n.text-danger { color: #f44336 !important; }\n\n\n\n/* 设置卡片样式调整 */\n.option-card {\n    background-color: #1d2e3d;\n    border-radius: 10px;\n    padding: 20px;\n    text-align: center;\n    transition: all 0.3s ease;\n    margin-bottom: 20px;\n}\n\n.option-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 16px rgba(74, 157, 156, 0.2);\n}\n\n.option-card i {\n    font-size: 2em;\n    color: #4a9d9c;\n    margin-bottom: 15px;\n}\n\n.option-card h4 {\n    color: #fff;\n    margin-bottom: 15px;\n}\n\n.option-card p {\n    color: #888;\n    font-size: 0.9em;\n}\n\n/* 表单控件样式 */\n.form-select {\n    background-color: #0D1F2D;\n    color: #fff;\n    border: 1px solid #4a9d9c;\n    margin-top: 10px;\n}\n\n.sync-tips {\n    margin-top: 10px;\n    font-size: 0.8em;\n    color: #888;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.save-section {\n    grid-column: 1 / -1;\n    text-align: center;\n    margin-top: 20px;\n}\n\n/* 开关按钮样式 */\n.form-check-input.custom-switch {\n    background-color: #0D1F2D !important;\n    border-color: #4a9d9c !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    transition: all 0.3s ease;\n    cursor: pointer !important;\n    pointer-events: auto !important;\n    opacity: 1;\n    z-index: 100;\n    position: relative;\n    outline: none !important;\n    /* 自定义滑块圆圈颜色为亮蓝色 */\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2361dafb'/%3e%3c/svg%3e\") !important;\n}\n\n/* 选中状态下的样式 */\n.form-check-input.custom-switch:checked {\n    background-color: #0D6E6E !important;\n    border-color: #0D6E6E !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    /* 选中状态下保持相同的蓝色圆圈 */\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2361dafb'/%3e%3c/svg%3e\") !important;\n}\n\n/* 悬停状态加强发光效果 */\n.form-check-input.custom-switch:hover {\n    box-shadow: 0 0 15px rgba(97, 218, 251, 0.9);\n}\n\n/* 焦点状态 */\n.form-check-input.custom-switch:focus {\n    background-color: inherit !important;  /* 继承当前状态的背景色 */\n    border-color: #4a9d9c !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    outline: none !important;\n}\n\n/* 选中且焦点状态 */\n.form-check-input.custom-switch:checked:focus {\n    background-color: #4a9d9c !important;\n}\n\n\n\n\n\n/* SweetAlert2 自定义样式 */\n.colored-toast.swal2-icon-success {\n    background-color: #1d2e3d !important;\n    border: 1px solid #4a9d9c !important;\n}\n\n.colored-toast .swal2-title {\n    color: #ffffff !important;\n    font-size: 1em !important;\n}\n\n.colored-toast .swal2-close {\n    color: #4a9d9c !important;\n}\n\n.colored-toast .swal2-html-container {\n    color: #888 !important;\n    font-size: 0.9em !important;\n}\n\n/* 成功图标颜色 */\n.colored-toast .swal2-success-line-tip,\n.colored-toast .swal2-success-line-long {\n    background-color: #4a9d9c !important;\n}\n\n.colored-toast .swal2-success-ring {\n    border-color: #4a9d9c !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/popup/delegate/cloudStorageDelegate.js":
/*!****************************************************!*\
  !*** ./src/popup/delegate/cloudStorageDelegate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils */ "./src/popup/util/utils.js");
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageDelegate */ "./src/popup/delegate/storageDelegate.js");




const getCloudStorageData = async (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(key, (result) => {
            if (result === undefined || result[key] === undefined) {
                reject(key);
            } else {
                resolve(result[key]);
            }
        })
    }).catch((key) => {
        console.log(`get sync storage data failed for key = ${key}`);
    });
}

const setCloudStorageData = async (key, val) => {

    console.log("set to cloud");
    console.log([key, val]);

    return new Promise((resolve) => {
        chrome.storage.sync.set({ [key]: val });
        resolve();
    }).catch(e => console.log(e));
}

const batchSetCloudStorageDate = async (object) => {
    return new Promise((resolve) => {
        chrome.storage.sync.set(object);
        resolve();
    }).catch(e => console.log(e));
}

const batchGetCloudStorageDate = async (keyArr) => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(keyArr, (result) => {
            if (result === undefined) {
                reject(key);
            } else {
                resolve(result);
            }
        })
    }).catch(e => {
        console.log(console.log(e));
    });
}

/**
 * sharding
 */

const shardCount = 20;

const hashKeyToShardIdx = (key) => {
    const hash = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.simpleStringHash)(key);
    const shardIndex = (hash % shardCount + shardCount) % shardCount;
    return shardIndex;
}

const isJsonObj = (obj) => {
    return Object.getPrototypeOf(obj) === Object.prototype;
}

const shardedSetCloudStorageData = async (key, val) => {
    // val should be a JSON object
    if (!isJsonObj(val)) {
        throw "shardedSet only supports JSON type val";
    }
    const shardedVal = {};
    const objectKeys = Object.keys(val);
    Array.prototype.forEach.call(objectKeys, (objKey) => {
        const shardedIdx = hashKeyToShardIdx(objKey);
        const shardedKey = `${key}#${shardedIdx}`;
        if (!(shardedKey in shardedVal)) {
            shardedVal[shardedKey] = {};
        }
        shardedVal[shardedKey][objKey] = val[objKey];
    })
    
    console.log("set shareded data to cloud:");
    console.log(shardedVal);

    await batchSetCloudStorageDate(shardedVal);
}

const shardedGetCloudStorageData = async (key) => {
    const shardedKeyArr = [];
    for (let i = 0; i < shardCount; i++) {
        shardedKeyArr.push(`${key}#${i}`);
    }

    const vals = await batchGetCloudStorageDate(shardedKeyArr);    
    const res = {};

    if (vals === undefined) return res;
    for (const shardKey in vals) {
        Object.assign(res, vals[shardKey]);
    } 
    console.log(`get ${key} sharded from cloud`)
    console.log(res);
    return res;
}

class CloudStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_1__.StorageDelegate {
    constructor(){
        super();
        this.get = shardedGetCloudStorageData;
        this.set = shardedSetCloudStorageData;
    }
}

const cloudStorageDelegate = new CloudStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudStorageDelegate);

/***/ }),

/***/ "./src/popup/delegate/localStorageDelegate.js":
/*!****************************************************!*\
  !*** ./src/popup/delegate/localStorageDelegate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getLocalStorageData: () => (/* binding */ getLocalStorageData),
/* harmony export */   setLocalStorageData: () => (/* binding */ setLocalStorageData)
/* harmony export */ });
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageDelegate */ "./src/popup/delegate/storageDelegate.js");


const getLocalStorageData = async (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            if (result === undefined || result[key] === undefined) {
                reject(key);
            } else {
                resolve(result[key]);
            }
        })
    }).catch((key) => {
        console.log(`get local storage data failed for key = ${key}`);
    });
}

const setLocalStorageData = async (key, val) => {
    return new Promise((resolve) => {
        chrome.storage.local.set({ [key]: val });
        resolve();
    }).catch(e => console.log(e));
}

class LocalStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_0__.StorageDelegate {
    constructor(){
        super();
        this.get = getLocalStorageData;
        this.set = setLocalStorageData;
    }
}

const localStorageDelegate = new LocalStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageDelegate);

/***/ }),

/***/ "./src/popup/delegate/storageDelegate.js":
/*!***********************************************!*\
  !*** ./src/popup/delegate/storageDelegate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageDelegate: () => (/* binding */ StorageDelegate)
/* harmony export */ });
class StorageDelegate {
    constructor(){
        this.get = async (key) => null;
        this.set = async (key, val) => {};
    }
}



/***/ }),

/***/ "./src/popup/service/configService.js":
/*!********************************************!*\
  !*** ./src/popup/service/configService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultCardLimit: () => (/* binding */ getDefaultCardLimit),
/* harmony export */   getProblemSorter: () => (/* binding */ getProblemSorter),
/* harmony export */   getReviewIntervals: () => (/* binding */ getReviewIntervals),
/* harmony export */   isCloudSyncEnabled: () => (/* binding */ isCloudSyncEnabled),
/* harmony export */   loadCloudSyncConfig: () => (/* binding */ loadCloudSyncConfig),
/* harmony export */   loadConfigs: () => (/* binding */ loadConfigs),
/* harmony export */   loadDefaultCardLimit: () => (/* binding */ loadDefaultCardLimit),
/* harmony export */   loadProblemSorter: () => (/* binding */ loadProblemSorter),
/* harmony export */   loadReviewIntervals: () => (/* binding */ loadReviewIntervals),
/* harmony export */   setCloudSyncEnabled: () => (/* binding */ setCloudSyncEnabled),
/* harmony export */   setDefaultCardLimit: () => (/* binding */ setDefaultCardLimit),
/* harmony export */   setProblemSorter: () => (/* binding */ setProblemSorter),
/* harmony export */   setReviewIntervals: () => (/* binding */ setReviewIntervals),
/* harmony export */   switchCloudSyncEnabled: () => (/* binding */ switchCloudSyncEnabled)
/* harmony export */ });
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/keys */ "./src/popup/util/keys.js");
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/sort */ "./src/popup/util/sort.js");





// configurable review intervals (to be integrated)

const getReviewIntervals = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.REVIEW_INTV_KEY);
}

const setReviewIntervals = async (customIntv) => {
    if (customIntv == null || customIntv == undefined) return;
    const {easyIntv, mediumIntv, hardIntv} = _store__WEBPACK_IMPORTED_MODULE_1__.store;
    customIntv.easyIntv = customIntv.easyIntv || easyIntv;
    customIntv.mediumIntv = customIntv.mediumIntv || mediumIntv;
    customIntv.hardIntv = customIntv.hardIntv || hardIntv;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.REVIEW_INTV_KEY, customIntv);
}

const loadReviewIntervals = async () => {
    const customIntv = await getReviewIntervals();
    if (customIntv !== undefined) {
        Object.assign(_store__WEBPACK_IMPORTED_MODULE_1__.store, customIntv);
    }
}


// configurable problem sort by
const getProblemSorter = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.PROBLEM_SORT_BY_KEY);
}

const setProblemSorter = async (sorterId) => {
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.PROBLEM_SORT_BY_KEY, sorterId);
}

const loadProblemSorter = async () => {
    const sorterId = await getProblemSorter() | (0,_util_sort__WEBPACK_IMPORTED_MODULE_3__.idOf)(_util_sort__WEBPACK_IMPORTED_MODULE_3__.problemSorters.sortByReviewTimeAsc);
    _store__WEBPACK_IMPORTED_MODULE_1__.store.problemSortBy = (0,_util_sort__WEBPACK_IMPORTED_MODULE_3__.getSorterById)(sorterId);
}



// config cloud sync
const isCloudSyncEnabled = async () => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY);
    const isEnabled = configs !== undefined ? configs[_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_INNER_KEY_ENABLE_CLOUD] : false;
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    return isEnabled;
}

const switchCloudSyncEnabled = async () => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY);
    const isEnabled = configs[_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_INNER_KEY_ENABLE_CLOUD];
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    configs[_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_INNER_KEY_ENABLE_CLOUD] = !isEnabled;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY, configs);
}

const setCloudSyncEnabled = async (isEnabled) => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY) || {
        CONFIG_INNER_KEY_ENABLE_CLOUD: false
    };
    configs[_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_INNER_KEY_ENABLE_CLOUD] = isEnabled;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY, configs);
}


const loadCloudSyncConfig = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__.store.isCloudSyncEnabled = await isCloudSyncEnabled();
}

// 获取默认卡片数量
const getDefaultCardLimit = async () => {
    const limit = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CARD_LIMIT_KEY);
    return limit !== undefined ? limit : _util_keys__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CARD_LIMIT_VALUE;
}

// 设置默认卡片数量
const setDefaultCardLimit = async (limit) => {
    if (limit == null || limit == undefined) return;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CARD_LIMIT_KEY, limit);
}

// 加载默认卡片数量到 store
const loadDefaultCardLimit = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__.store.defaultCardLimit = await getDefaultCardLimit();
}


const loadConfigs = async () => {
    await loadReviewIntervals();
    await loadProblemSorter();
    await loadCloudSyncConfig();
    await loadDefaultCardLimit();  // 添加这一行
}

/***/ }),

/***/ "./src/popup/store.js":
/*!****************************!*\
  !*** ./src/popup/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daily_store: () => (/* binding */ daily_store),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/sort */ "./src/popup/util/sort.js");


const store = {
    needReviewProblems: null,
    reviewScheduledProblems: null,
    completedProblems: null,
    toReviewPage: 1,
    scheduledPage: 1,
    completedPage: 1,
    toReviewMaxPage: null,
    scheduledMaxPage: null,
    completedMaxPage: null,
    tooltipTriggerList: null,
    tooltipList: null,
    easyIntv: [1, 3],
    mediumIntv: [1, 3, 4],
    hardIntv: [0, 1, 2, 3, 4],
    problemSortBy: _util_sort__WEBPACK_IMPORTED_MODULE_0__.problemSorters.sortByReviewTimeAsc,
    isCloudSyncEnabled: false,
    defaultCardLimit: 3
}

const daily_store = {
    dailyReviewProblems: null,
    reviewScheduledProblems: null

}

/***/ }),

/***/ "./src/popup/util/constants.js":
/*!*************************************!*\
  !*** ./src/popup/util/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN_LABLE: () => (/* binding */ CN_LABLE),
/* harmony export */   COMPILE_ERROR_AND_TLE_CLASSNAME: () => (/* binding */ COMPILE_ERROR_AND_TLE_CLASSNAME),
/* harmony export */   COMPILE_ERROR_AND_TLE_CLASSNAME_CN: () => (/* binding */ COMPILE_ERROR_AND_TLE_CLASSNAME_CN),
/* harmony export */   COMPILE_ERROR_AND_TLE_CLASSNAME_NEW: () => (/* binding */ COMPILE_ERROR_AND_TLE_CLASSNAME_NEW),
/* harmony export */   GL_LABLE: () => (/* binding */ GL_LABLE),
/* harmony export */   PAGE_SIZE: () => (/* binding */ PAGE_SIZE),
/* harmony export */   SUBMIT_BUTTON_ATTRIBUTE_NAME: () => (/* binding */ SUBMIT_BUTTON_ATTRIBUTE_NAME),
/* harmony export */   SUBMIT_BUTTON_ATTRIBUTE_VALUE: () => (/* binding */ SUBMIT_BUTTON_ATTRIBUTE_VALUE),
/* harmony export */   SUCCESS_CLASSNAME: () => (/* binding */ SUCCESS_CLASSNAME),
/* harmony export */   SUCCESS_CLASSNAME_CN: () => (/* binding */ SUCCESS_CLASSNAME_CN),
/* harmony export */   SUCCESS_CLASSNAME_NEW: () => (/* binding */ SUCCESS_CLASSNAME_NEW),
/* harmony export */   WRONG_ANSWER_CLASSNAME: () => (/* binding */ WRONG_ANSWER_CLASSNAME),
/* harmony export */   WRONG_ANSWER_CLASSNAME_CN: () => (/* binding */ WRONG_ANSWER_CLASSNAME_CN),
/* harmony export */   WRONG_ANSWER_CLASSNAME_NEW: () => (/* binding */ WRONG_ANSWER_CLASSNAME_NEW),
/* harmony export */   forggettingCurve: () => (/* binding */ forggettingCurve),
/* harmony export */   months: () => (/* binding */ months)
/* harmony export */ });
const forggettingCurve = [
    1 * 24 * 60,    // 1 day
    2 * 24 * 60,    // 2 day
    4 * 24 * 60,    // 4 day
    7 * 24 * 60,    // 7 day
    15 * 24 * 60    // 15 day
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const PAGE_SIZE = 5;

const CN_LABLE = 'LeetCode - China ';
const GL_LABLE = 'LeetCode - Global';

const SUBMIT_BUTTON_ATTRIBUTE_NAME = "data-e2e-locator";
const SUBMIT_BUTTON_ATTRIBUTE_VALUE = "console-submit-button";

// leetcode UI classnames

// cn
const SUCCESS_CLASSNAME_CN = "text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6";
const WRONG_ANSWER_CLASSNAME_CN = "whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";
const COMPILE_ERROR_AND_TLE_CLASSNAME_CN = "mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";

// global
// old UI
const SUCCESS_CLASSNAME = "success__3Ai7";
const WRONG_ANSWER_CLASSNAME = "error__2Ft1";
const COMPILE_ERROR_AND_TLE_CLASSNAME = "error__10k9";

// new UI
const SUCCESS_CLASSNAME_NEW = "text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6";
const WRONG_ANSWER_CLASSNAME_NEW = "whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";
const COMPILE_ERROR_AND_TLE_CLASSNAME_NEW = "mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";

/***/ }),

/***/ "./src/popup/util/doms.js":
/*!********************************!*\
  !*** ./src/popup/util/doms.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkButtonDOMs: () => (/* binding */ checkButtonDOMs),
/* harmony export */   completedTableDOM: () => (/* binding */ completedTableDOM),
/* harmony export */   configButtonDOMs: () => (/* binding */ configButtonDOMs),
/* harmony export */   deleteButtonDOMs: () => (/* binding */ deleteButtonDOMs),
/* harmony export */   input0DOM: () => (/* binding */ input0DOM),
/* harmony export */   input1DOM: () => (/* binding */ input1DOM),
/* harmony export */   input2DOM: () => (/* binding */ input2DOM),
/* harmony export */   inputLabel0DOM: () => (/* binding */ inputLabel0DOM),
/* harmony export */   inputLabel1DOM: () => (/* binding */ inputLabel1DOM),
/* harmony export */   inputLabel2DOM: () => (/* binding */ inputLabel2DOM),
/* harmony export */   needReviewTableDOM: () => (/* binding */ needReviewTableDOM),
/* harmony export */   nextButton0DOM: () => (/* binding */ nextButton0DOM),
/* harmony export */   nextButton1DOM: () => (/* binding */ nextButton1DOM),
/* harmony export */   nextButton2DOM: () => (/* binding */ nextButton2DOM),
/* harmony export */   noReviewTableDOM: () => (/* binding */ noReviewTableDOM),
/* harmony export */   optionPageFeedbackMsgDOM: () => (/* binding */ optionPageFeedbackMsgDOM),
/* harmony export */   popupPageDOM: () => (/* binding */ popupPageDOM),
/* harmony export */   prevButton0DOM: () => (/* binding */ prevButton0DOM),
/* harmony export */   prevButton1DOM: () => (/* binding */ prevButton1DOM),
/* harmony export */   prevButton2DOM: () => (/* binding */ prevButton2DOM),
/* harmony export */   resetButtonDOMs: () => (/* binding */ resetButtonDOMs),
/* harmony export */   siteLabelDOM: () => (/* binding */ siteLabelDOM),
/* harmony export */   switchButtonDOM: () => (/* binding */ switchButtonDOM),
/* harmony export */   undoButtonDOMs: () => (/* binding */ undoButtonDOMs)
/* harmony export */ });
const input0DOM = document.getElementById("pageInput0");
const inputLabel0DOM = document.getElementById("pageInputLabel0");
const prevButton0DOM = document.getElementById("prevButton0");
const nextButton0DOM = document.getElementById("nextButton0");

const input1DOM = document.getElementById("pageInput1");
const inputLabel1DOM = document.getElementById("pageInputLabel1");
const prevButton1DOM = document.getElementById("prevButton1");
const nextButton1DOM = document.getElementById("nextButton1");

const input2DOM = document.getElementById("pageInput2");
const inputLabel2DOM = document.getElementById("pageInputLabel2");
const prevButton2DOM = document.getElementById("prevButton2");
const nextButton2DOM = document.getElementById("nextButton2");

const needReviewTableDOM = document.getElementById("need-review-table");
const noReviewTableDOM = document.getElementById("no-review-table");
const completedTableDOM = document.getElementById("completed-table");

const checkButtonDOMs = document.getElementsByClassName("check-btn-mark");
const deleteButtonDOMs = document.getElementsByClassName("delete-btn-mark");
const resetButtonDOMs = document.getElementsByClassName("reset-btn-mark");
const undoButtonDOMs = document.getElementsByClassName("undo-ops-btn");
const configButtonDOMs = document.getElementsByClassName("config-btn");

const siteLabelDOM = document.getElementById("siteLabel");
const switchButtonDOM = document.getElementById('switchButton');

const optionPageFeedbackMsgDOM = document.getElementById('feedbackMessage');

const popupPageDOM = document.defaultView;

/***/ }),

/***/ "./src/popup/util/keys.js":
/*!********************************!*\
  !*** ./src/popup/util/keys.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN_MODE: () => (/* binding */ CN_MODE),
/* harmony export */   CN_PROBLEM_KEY: () => (/* binding */ CN_PROBLEM_KEY),
/* harmony export */   CONFIG_INNER_KEY_ENABLE_CLOUD: () => (/* binding */ CONFIG_INNER_KEY_ENABLE_CLOUD),
/* harmony export */   CONFIG_KEY: () => (/* binding */ CONFIG_KEY),
/* harmony export */   DEFAULT_CARD_LIMIT_KEY: () => (/* binding */ DEFAULT_CARD_LIMIT_KEY),
/* harmony export */   DEFAULT_CARD_LIMIT_VALUE: () => (/* binding */ DEFAULT_CARD_LIMIT_VALUE),
/* harmony export */   OPS_HISTORY_KEY: () => (/* binding */ OPS_HISTORY_KEY),
/* harmony export */   PROBLEM_KEY: () => (/* binding */ PROBLEM_KEY),
/* harmony export */   PROBLEM_SORT_BY_KEY: () => (/* binding */ PROBLEM_SORT_BY_KEY),
/* harmony export */   REVIEW_INTV_KEY: () => (/* binding */ REVIEW_INTV_KEY)
/* harmony export */ });
const CN_MODE = 'cn_mode';
const CN_PROBLEM_KEY = 'cn_records';
const PROBLEM_KEY = 'records';
const REVIEW_INTV_KEY = 'review_intervals';
const OPS_HISTORY_KEY = 'operation_history';
const PROBLEM_SORT_BY_KEY = 'problem_sort_by';
const CONFIG_KEY = 'configs';
const CONFIG_INNER_KEY_ENABLE_CLOUD = 'enable_cloud';
// 添加新的常量
const DEFAULT_CARD_LIMIT_KEY = 'defaultCardLimit';
const DEFAULT_CARD_LIMIT_VALUE = 3;

/***/ }),

/***/ "./src/popup/util/sort.js":
/*!********************************!*\
  !*** ./src/popup/util/sort.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   descriptionOf: () => (/* binding */ descriptionOf),
/* harmony export */   getSorterById: () => (/* binding */ getSorterById),
/* harmony export */   idOf: () => (/* binding */ idOf),
/* harmony export */   problemSorterArr: () => (/* binding */ problemSorterArr),
/* harmony export */   problemSorters: () => (/* binding */ problemSorters)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/popup/util/utils.js");


const reverse = (sorter) => {
    return (p1, p2) => -sorter(p1, p2)
}

const problemReviewTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNextReviewTime)(p1).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNextReviewTime)(p2).valueOf();
}

const problemDelayTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDelayedHours)(p2).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDelayedHours)(p1).valueOf();
}

// functions used to sort problems
const problemSorters = {
    // reviewTimeSorter:
    sortByReviewTimeDesc:   reverse(problemReviewTimeComparator),
    sortByReviewTimeAsc:    problemReviewTimeComparator,
    sortByDelayHoursDesc:   problemDelayTimeComparator,
    sortByDelayHoursAsc:    reverse(problemDelayTimeComparator)
}

const problemSorterArr = [
    problemSorters.sortByReviewTimeAsc, 
    problemSorters.sortByReviewTimeDesc,
    problemSorters.sortByDelayHoursAsc,
    problemSorters.sortByDelayHoursDesc
];

const idOf = (sorter) => {
    return problemSorterArr.indexOf(sorter);
}

const getSorterById = (id) => {
    return problemSorterArr[id];
}

const descriptionOf = (sorter) => {
    let description;
    switch (sorter) {
        case problemSorters.sortByDelayHoursAsc:
            description = "Sort By Review Delayed Hours (ASC)";
            break;
        case problemSorters.sortByDelayHoursDesc:
            description = "Sort By Review Delayed Hours (DESC)";
            break;
        case problemSorters.sortByReviewTimeAsc:
            description = "Sort By Next Scheduled Review Time (ASC)";
            break;
        case problemSorters.sortByReviewTimeDesc:
            description = "Sort By Next Scheduled Review Time (DESC)";
            break;
        default:
            description = "";
    }
    return description;
} 

/***/ }),

/***/ "./src/popup/util/utils.js":
/*!*********************************!*\
  !*** ./src/popup/util/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculatePageNum: () => (/* binding */ calculatePageNum),
/* harmony export */   getCurrentRetrievability: () => (/* binding */ getCurrentRetrievability),
/* harmony export */   getDelayedHours: () => (/* binding */ getDelayedHours),
/* harmony export */   getDifficultyBasedSteps: () => (/* binding */ getDifficultyBasedSteps),
/* harmony export */   getLevelColor: () => (/* binding */ getLevelColor),
/* harmony export */   getNextReviewTime: () => (/* binding */ getNextReviewTime),
/* harmony export */   getSubmissionResult: () => (/* binding */ getSubmissionResult),
/* harmony export */   isCompleted: () => (/* binding */ isCompleted),
/* harmony export */   isSubmissionSuccess: () => (/* binding */ isSubmissionSuccess),
/* harmony export */   isSubmitButton: () => (/* binding */ isSubmitButton),
/* harmony export */   mergeProblem: () => (/* binding */ mergeProblem),
/* harmony export */   mergeProblems: () => (/* binding */ mergeProblems),
/* harmony export */   needReview: () => (/* binding */ needReview),
/* harmony export */   scheduledReview: () => (/* binding */ scheduledReview),
/* harmony export */   simpleStringHash: () => (/* binding */ simpleStringHash),
/* harmony export */   syncLocalAndCloudStorage: () => (/* binding */ syncLocalAndCloudStorage),
/* harmony export */   syncStorage: () => (/* binding */ syncStorage),
/* harmony export */   updateProblemUponSuccessSubmission: () => (/* binding */ updateProblemUponSuccessSubmission)
/* harmony export */ });
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delegate/cloudStorageDelegate */ "./src/popup/delegate/cloudStorageDelegate.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/popup/util/constants.js");





const needReview = (problem) => {
    if (problem.proficiency >= _constants__WEBPACK_IMPORTED_MODULE_3__.forggettingCurve.length) {
        return false;
    }

    const currentTime = Date.now();
    const timeDiffInMinute = (currentTime - problem.submissionTime) / (1000 * 60);
    return timeDiffInMinute >= _constants__WEBPACK_IMPORTED_MODULE_3__.forggettingCurve[problem.proficiency];
};

const scheduledReview = (problem) => {
    // return !needReview(problem) && problem.proficiency < 5;
    return true;
};

const isCompleted = (problem) => {
    return problem.proficiency === 5;
};

const calculatePageNum = (problems) => {
    return Math.max(Math.ceil(problems.length / _constants__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE), 1);;
}

const getLevelColor = (level) => {
    switch (level) {
        case "Easy":
            return "rgb(67, 1 71)";  // 绿色
        case "Medium":
            return "#ff9800";  // 橙色
        case "Hard":
            return "rgb(233, 30, 99)";  // 红色
        default:
            return "inherit";
    }
};


const getNextReviewTime = (problem) => {
    // 如果有 FSRS 的 nextReview，优先使用它
    let date;
    if (problem.fsrsState && problem.fsrsState.nextReview) {
        date = new Date(problem.fsrsState.nextReview);
    } else {
        // 否则使用旧的计算方式（向后兼容）
        date = new Date(problem.submissionTime + _constants__WEBPACK_IMPORTED_MODULE_3__.forggettingCurve[problem.proficiency] * 60 * 1000);
    }
    
    return date;
}


const getDelayedHours = (problem) => {
    const nextReviewDate = getNextReviewTime(problem);
    return Math.round((Date.now() - nextReviewDate) / (60 * 60 * 1000));
}

const getDifficultyBasedSteps = (diffculty) => {
    if (diffculty === "Easy") {
        return _store__WEBPACK_IMPORTED_MODULE_2__.store.easyIntv;
    } else if (diffculty === "Medium") {
        return _store__WEBPACK_IMPORTED_MODULE_2__.store.mediumIntv;
    } else {
        return _store__WEBPACK_IMPORTED_MODULE_2__.store.hardIntv;
    }
}

const isSubmitButton = (element) => {
    return element.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__.SUBMIT_BUTTON_ATTRIBUTE_NAME) === _constants__WEBPACK_IMPORTED_MODULE_3__.SUBMIT_BUTTON_ATTRIBUTE_VALUE;
}

const getSubmissionResult = () => {
    return document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.WRONG_ANSWER_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.COMPILE_ERROR_AND_TLE_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.WRONG_ANSWER_CLASSNAME)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.COMPILE_ERROR_AND_TLE_CLASSNAME)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.WRONG_ANSWER_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.COMPILE_ERROR_AND_TLE_CLASSNAME_NEW)[0];
}

const isSubmissionSuccess = (submissionResult) => {
    return submissionResult.className.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME_CN) ||
    submissionResult.className.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME_NEW) ||
    submissionResult.className.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME);
}

const updateProblemUponSuccessSubmission = (problem) => {
    const steps = getDifficultyBasedSteps(problem.problemLevel);
    let nextProficiencyIndex;
    for (const i of steps) {
        if (i > problem.proficiency) {
            nextProficiencyIndex = i;
            break;
        }
    }

    // further review needed
    if (nextProficiencyIndex !== undefined) {
        problem.proficiency = nextProficiencyIndex;
        // already completed all review
    } else {
        problem.proficiency = _constants__WEBPACK_IMPORTED_MODULE_3__.forggettingCurve.length;
    }
    problem.submissionTime = Date.now();
    problem.modificationTime = Date.now();
    return problem;
}

// for sync data over cloud & local
const mergeProblem = (p1, p2) => {
    if (p2 === undefined || p2 === null) return p1;
    if (p1 === undefined || p1 === null) return p2;
    if (p2.modificationTime === undefined || p2.modificationTime === null) return p1;
    if (p1.modificationTime === undefined || p1.modificationTime === null) return p2;

    return p1.modificationTime > p2.modificationTime ? p1 : p2;
}

const mergeProblems = (ps1, ps2) => {
    const problemIdSet = new Set([...Object.keys(ps1), ...Object.keys(ps2)]);
    const ps = {}
    problemIdSet.forEach(id => {
        const p1 = ps1[id], p2 = ps2[id];
        const p = mergeProblem(p1, p2);
        ps[id] = p;
    })

    return ps;
}

const syncStorage = async (sd1, sd2, key, merger) => {
    if (!_store__WEBPACK_IMPORTED_MODULE_2__.store.isCloudSyncEnabled) return;
    const data1 = await sd1.get(key) || {};
    const data2 = await sd2.get(key) || {};
    const merged = merger(data1, data2);

    console.log("merging data from local and from cloud. local:")
    console.log(data1);
    console.log("merging data from local and from cloud. cloud:")
    console.log(data2);
    await sd1.set(key, merged);
    await sd2.set(key, merged);
}

const syncLocalAndCloudStorage = async (key, merger) => {
    await syncStorage(_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__["default"], _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_1__["default"], key, merger);
}

const simpleStringHash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        const char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
}

// 获取当前可检索性的辅助函数
const getCurrentRetrievability = (problem) => {
    if (!problem.fsrsState?.stability || !problem.fsrsState?.lastReview) {
        return 1;
    }
    
    const now = Date.now();
    const elapsedDays = (now - problem.fsrsState.lastReview) / (24 * 60 * 60 * 1000);
    return calculateRetrievability(problem.fsrsState.stability, elapsedDays);
};

// 计算可检索性的辅助函数
const calculateRetrievability = (stability, elapsedDays) => {
    return Math.exp(Math.log(0.9) * elapsedDays / stability);
};


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"options": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/popup/options.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _service_configService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/configService */ "./src/popup/service/configService.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/popup/store.js");
/* harmony import */ var _util_doms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/doms */ "./src/popup/util/doms.js");
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/sort */ "./src/popup/util/sort.js");






document.addEventListener('DOMContentLoaded', async () => {

    await (0,_service_configService__WEBPACK_IMPORTED_MODULE_1__.loadConfigs)();

    const optionsForm = document.getElementById('optionsForm');
    
    // problem sorted setting
    const problemSorterSelect = document.getElementById('problemSorterSelect');
    const problemSorterMetaArr = _util_sort__WEBPACK_IMPORTED_MODULE_4__.problemSorterArr.map(sorter => {
        return {id: (0,_util_sort__WEBPACK_IMPORTED_MODULE_4__.idOf)(sorter), text: (0,_util_sort__WEBPACK_IMPORTED_MODULE_4__.descriptionOf)(sorter)};
    });

    problemSorterMetaArr.forEach(sorterMeta => {
        const optionElement = document.createElement('option');
        optionElement.value = sorterMeta.id;
        optionElement.textContent = sorterMeta.text;
        problemSorterSelect.append(optionElement);
    })

    // cloud sync setting
    const syncToggle = document.getElementById('syncToggle');
    syncToggle.checked = _store__WEBPACK_IMPORTED_MODULE_2__.store.isCloudSyncEnabled || false;

    optionsForm.addEventListener('submit', async e => {
        e.preventDefault();
        const selectedSorterId = problemSorterSelect.value;
        const isCloudSyncEnabled = syncToggle.checked;
        await (0,_service_configService__WEBPACK_IMPORTED_MODULE_1__.setProblemSorter)(Number(selectedSorterId));
        await (0,_service_configService__WEBPACK_IMPORTED_MODULE_1__.setCloudSyncEnabled)(isCloudSyncEnabled);
        _util_doms__WEBPACK_IMPORTED_MODULE_3__.optionPageFeedbackMsgDOM.style.display = 'block';
        setTimeout(() => _util_doms__WEBPACK_IMPORTED_MODULE_3__.optionPageFeedbackMsgDOM.style.display = 'none', 1000);
    })
});
})();

/******/ })()
;
//# sourceMappingURL=options.js.map