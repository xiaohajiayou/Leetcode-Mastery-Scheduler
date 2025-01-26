/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
}`, "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB,EAAE,SAAS;IACpC,sBAAsB,EAAE,SAAS;IACjC,cAAc,EAAE,SAAS;IACzB,kCAAkC;IAClC,kBAAkB;AACtB;AACA,UAAU;AACV;IACI,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB,GAAG,WAAW;IACpC,mBAAmB,MAAM,SAAS;IAClC,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB,GAAG,SAAS;IACnC,mBAAmB;IACnB,SAAS,GAAG,UAAU;IACtB,cAAc,GAAG,YAAY;IAC7B,cAAc,GAAG,SAAS;IAC1B,gBAAgB;AACpB;;AAEA,UAAU;AACV;AACA,cAAc;AACd,gBAAgB,GAAG,UAAU;AAC7B,gBAAgB,GAAG,UAAU;AAC7B,yBAAyB,GAAG,UAAU;AACtC,mBAAmB,GAAG,SAAS;AAC/B,2CAA2C,GAAG,WAAW;AACzD,8CAA8C,GAAG,WAAW;AAC5D,eAAe;AACf,iBAAiB,GAAG,UAAU;AAC9B,6DAA6D,GAAG,QAAQ;AACxE,6BAA6B,GAAG,cAAc;AAC9C,oCAAoC,GAAG,eAAe;AACtD,qBAAqB,GAAG,aAAa;AACrC;;AAEA,eAAe;AACf;IACI,SAAS;IACT,UAAU;IACV,cAAc;AAClB;;AAEA,eAAe;AACf;IACI,iBAAiB,GAAG,qBAAqB;AAC7C;;AAEA,YAAY;AACZ;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA,YAAY;AACZ;IACI,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,2BAA2B;IAC3B,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,yBAAyB;IACzB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;;AAGA;IACI,yBAAyB,EAAE,8BAA8B;IACzD,cAAc,EAAE,WAAW;IAC3B,mBAAmB;IACnB,QAAQ;AACZ;AACA;IACI,yBAAyB,EAAE,8BAA8B;IACzD,gBAAgB,EAAE,WAAW;IAC7B,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;;;AAIA;IACI,yBAAyB,EAAE,SAAS;IACpC,mBAAmB;IACnB,yCAAyC;IACzC,aAAa;IACb,cAAc;IACd,0BAA0B;;AAE9B;;QAEQ;IACJ,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;IACtC,gBAAgB;IAChB,cAAc,EAAE,SAAS;AAC7B;;;;AAIA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,+BAA+B;AACnC;;;AAGA;IACI,cAAc;IACd,2BAA2B;IAC3B,wCAAwC;AAC5C;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,+BAA+B;IAC/B,0BAA0B;AAC9B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;IACzB,yCAAyC,GAAG,YAAY;IACxD,2CAA2C,GAAG,YAAY;IAC1D,iDAAiD;IACjD,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,qCAAqC,GAAG,eAAe;IACvD;;8CAE0C,GAAG,aAAa;IAC1D,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB;;;;KAIC;IACD,WAAW;IACX,UAAU;IACV,qDAAqD;AACzD;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,gFAAgF,EAAE,aAAa;IAC/F,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,gCAAgC,EAAE,WAAW;AACjD;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB,EAAE,SAAS;IAC9B,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc,EAAE,WAAW;IAC3B,+BAA+B,EAAE,WAAW;AAChD;;AAEA;IACI,gBAAgB;IAChB,cAAc,EAAE,SAAS;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,cAAc,EAAE,wCAAwC;IACxD,sBAAsB;AAC1B;;AAEA;IACI,cAAc,EAAE,qCAAqC;AACzD;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,cAAc,EAAE,2BAA2B;AAC/C;;AAEA;IACI,cAAc,EAAE,2BAA2B;AAC/C;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB,EAAE,UAAU;IAC/B,cAAc,EAAE,YAAY;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,yBAAyB,EAAE,YAAY;IACvC,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,cAAc,EAAE,WAAW;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,qCAAqC;IACrC,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,cAAc,EAAE,cAAc;IAC9B,mDAAmD;AACvD;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,qCAAqC;IACrC,2CAA2C;AAC/C;;AAEA,SAAS;AACT;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,cAAc,EAAE,SAAS;IACzB,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,2BAA2B;IAC3B,oCAAoC;IACpC,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,6BAA6B;IAC7B,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA,WAAW;AACX;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,cAAc;AAClB;;AAEA,aAAa;AACb;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,0BAA0B;IAC1B,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,eAAe;AACnB;;AAEA,aAAa;AACb;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,8CAA8C;AAClD;;AAEA;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA,WAAW;AACX;IACI,gCAAgC;;AAEpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;;;IAGhB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA,kBAAkB;AAClB;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;;;;;AAMA;IACI,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,oCAAoC;IACpC,wCAAwC;AAC5C;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,6BAA6B;IAC7B,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB,GAAG,0BAA0B;IAChD,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,2CAA2C;AAC/C;;AAEA;IACI,wDAAwD;AAC5D;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,mCAAmC;AACvC;;AAEA,WAAW;AACX;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,6BAA6B;IAC7B,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,cAAc;AAClB;;;;AAIA,uBAAuB;AACvB;IACI,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;;;;;;;AAOA,YAAY;AACZ;IACI,WAAW;IACX,mBAAmB;IACnB,qBAAqB;;;IAGrB,2CAA2C,QAAQ,SAAS;;IAE5D,0CAA0C,SAAS,WAAW;IAC9D,uCAAuC,WAAW,WAAW;IAC7D,uBAAuB,eAAe,YAAY;IAClD,oCAAoC,GAAG,WAAW;AACtD;;;AAGA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA,sBAAsB;AACtB;IACI,WAAW;IACX,kBAAkB;AACtB;;;;AAIA,aAAa;AACb;;IAEI,uBAAuB;IACvB,kEAAkE;AACtE;;AAEA,iBAAiB;AACjB;;IAEI,kCAAkC,KAAK,gBAAgB;IACvD,uBAAuB;IACvB,yBAAyB,aAAa,WAAW;AACrD;;;;;AAKA,cAAc;AACd;IACI,oBAAoB;IACpB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,0CAA0C;IAC1C,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA,QAAQ;AACR,gBAAgB,yBAAyB,EAAE;AAC3C,gBAAgB,yBAAyB,EAAE;AAC3C,eAAe,yBAAyB,EAAE;;;;AAI1C,aAAa;AACb;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,8CAA8C;AAClD;;AAEA;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,WAAW;IACX,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA,WAAW;AACX;IACI,oCAAoC;IACpC,gCAAgC;IAChC,4CAA4C;IAC5C,yBAAyB;IACzB,0BAA0B;IAC1B,+BAA+B;IAC/B,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;IACxB,kBAAkB;IAClB,oEAAqK;AACzK;;AAEA,aAAa;AACb;IACI,oCAAoC;IACpC,gCAAgC;IAChC,4CAA4C;IAC5C,mBAAmB;IACnB,oEAAqK;AACzK;;AAEA,eAAe;AACf;IACI,4CAA4C;AAChD;;AAEA,SAAS;AACT;IACI,oCAAoC,GAAG,eAAe;IACtD,gCAAgC;IAChC,4CAA4C;IAC5C,wBAAwB;AAC5B;;AAEA,YAAY;AACZ;IACI,oCAAoC;AACxC;;;;;;AAMA,sBAAsB;AACtB;IACI,oCAAoC;IACpC,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA,WAAW;AACX;;IAEI,oCAAoC;AACxC;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["body {\n    background-color: #0D1F2D; /* 深色背景 */\n    background-size: cover; /* 背景覆盖 */\n    color: #ffffff; /* 白色字体 */\n    font-family: 'Raleway', sans-serif;\n    position: relative;\n}\n/* 导航栏样式 */\n.nav-bar {\n    background-color: #0D1F2D;\n\n    display: flex;\n    flex-direction: column;  /* 改为纵向排列 */\n    align-items: center;     /* 水平居中 */\n    border-bottom: 1px solid #4a9d9c;\n}\n\n.nav-row {\n    display: flex;\n    justify-content: center;  /* 内容居中 */\n    align-items: center;\n    margin: 0;  /* 移除外边距 */\n    padding: 2px 0;  /* 减小上下内边距 */\n    line-height: 1;  /* 减小行高 */\n    margin-top: -5px;\n}\n\n/* 标题行样式 */\n.nav-title {\ncolor: #FF3D3D;\nfont-weight: 900;  /* 更粗的字体 */\nfont-size: 1.2em;  /* 更大的字号 */\ntext-transform: uppercase;  /* 转换为大写 */\nletter-spacing: 2px;  /* 字母间距 */\ntext-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  /* 添加阴影效果 */\nfont-family: 'Arial Black', Gadget, sans-serif;  /* 更粗重的字体 */\nmargin-top: 5px;\npadding: 5px 10px;  /* 添加内边距 */\nbackground: linear-gradient(180deg, #ff6b6b 0%, #FF3D3D 100%);  /* 渐变色 */\n-webkit-background-clip: text;  /* 使渐变色应用到文字 */\n-webkit-text-fill-color: transparent;  /* 使文字透明以显示背景 */\ndisplay: inline-block;  /* 确保渐变效果生效 */\n}\n\n/* 专门为标题容器添加类 */\n.nav-row.title-row {\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n}\n\n/* 特别处理第二个标题行 */\n.nav-row.title-row + .nav-row.title-row {\n    margin-top: -10px;  /* 调整这个值来控制两行标题间的间距 */\n}\n\n/* 网站信息行样式 */\n.nav-site {\n    color: #4a9d9c;\n    font-size: 0.9em;\n    padding: 2px 8px;\n    border-radius: 4px;\n    background-color: rgba(74, 157, 156, 0.1);\n}\n\n/* 导航按钮行样式 */\n.nav-btn {\n    background: none;\n    border: none;\n    color: #888;\n    padding: 5px 15px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    font-size: 1em;\n    position: relative;\n}\n\n.nav-btn:hover {\n    color: #fff;\n}\n\n.nav-btn.active {\n    color: #fff;\n}\n\n.nav-btn.active::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 20px;\n    height: 2px;\n    background-color: #4a9d9c;\n    border-radius: 2px;\n}\n\n.nav-right {\n    display: flex;\n    gap: 10px;\n}\n\n/* 开关按钮样式 */\n.switch-btn {\n    background-color: #2a2b30;\n    border: 1px solid #3a3b40;\n    color: #888;\n    padding: 5px 15px;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\n.switch-btn:hover {\n    background-color: #3a3b40;\n    color: #fff;\n}\n\n\n.text-date {\n    color: #e0e0e0 !important; /* 更亮的灰色，使用 !important 确保优先级 */\n    font-size: 1em; /* 修改字体大小 */\n    align-items: center;\n    gap: 2px;\n}\n.text-muted {\n    color: #e0e0e0 !important; /* 更亮的灰色，使用 !important 确保优先级 */\n    font-size: 0.8em; /* 修改字体大小 */\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n\n\n.review-card {\n    background-color: #1d2e3d; /* 卡片背景 */\n    border-radius: 15px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n    padding: 10px;\n    margin: 20px 0;\n    transition: transform 0.2s;\n    \n}\n\n        .review-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 16px #4a9d9c;\n}\n\n.problem-title {\n    font-family: 'Press Start 2P', cursive;\n    font-size: 0.9em;\n    color: #ffffff; /* 白色字体 */\n}\n\n\n\n.difficulty-Easy {\n    color: #4a9d9c;\n}\n\n.difficulty-Medium {\n    color: #f0b215;\n}\n\n.difficulty-Hard {\n    color: #FF3D3D;\n}\n\n.progress {\n    height: 8px;\n    margin-top: 10px;\n}\n\n.btn-review {\n\n    border: none;\n    color: #e0e0e0;\n    font-size: 1.5em;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    font-weight: 500;\n    position: relative;\n    z-index: 1;\n    pointer-events: auto !important;\n}\n\n\n.btn-review:hover {\n    color: #afffff;\n    transform: translateY(-1px);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.btn-review:active {\n    transform: translateY(0);\n}\n\n.btn-review:disabled {\n\n    color: white;\n    opacity: 0.8;\n    cursor: not-allowed;\n}\n\n.btn-review.btn-lg {\n    font-size: 1.1em;\n    padding: 10px 24px;\n}\n\n.review-card .btn-review,\n.container .btn-review {\n    pointer-events: auto !important;\n    cursor: pointer !important;\n}\n\n.review-card.reviewed {\n    opacity: 0.6;\n}\n\n.header-section {\n    position: relative;\n    border-radius: 15px;\n    overflow: hidden;\n    background-color: #1d2e3d;\n    border: 1px solid rgba(74, 157, 156, 0.1);  /* 降低边框透明度 */\n    box-shadow: 0 0 8px rgba(74, 157, 156, 0.1);  /* 降低阴影透明度 */\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    padding: 10px;\n    margin: 10px 15px;\n}\n\n.header-section:hover {\n    border-color: rgba(74, 157, 156, 0.2);  /* 降低悬停时边框透明度 */\n    box-shadow: \n        0 0 12px rgba(74, 157, 156, 0.15),  /* 降低外阴影透明度 */\n        inset 0 0 8px rgba(74, 157, 156, 0.05);  /* 降低内阴影透明度 */\n    transform: translateY(-1px);\n}\n\n.header-section::before {\n    content: '';\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border-radius: 15px;\n    background: linear-gradient(45deg, \n        rgba(74, 157, 156, 0.05),  /* 降低渐变透明度 */\n        rgba(74, 157, 156, 0.1),\n        rgba(74, 157, 156, 0.05)\n    );\n    z-index: -1;\n    opacity: 0;\n    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.header-section:hover::before {\n    opacity: 1;\n}\n\n.completion-circle {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    background: conic-gradient(#afffff var(--percentage), #3a3a4d var(--percentage)); /* 使用深色作为背景 */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    transition: background 0.5s ease; /* 背景渐变动画 */\n}\n\n.inner-circle {\n    width: 100px;\n    height: 100px;\n    background: #1d2e3d; /* 内圈背景 */\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5em;\n    font-weight: bold;\n    color: #FF3D3D; /* 内圈字体颜色 */\n    transition: transform 0.5s ease; /* 内圈缩放动画 */\n}\n\n.retrievability {\n    font-size: 1.0em;\n    color: #ffffff; /* 白色字体 */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.retrievability-icon {\n    margin-right: 10px;\n    color: #4a9d9c;\n    animation: pulse 2s infinite;\n}\n\n.retrievability-value {\n    font-weight: bold;\n    margin-left: 10px;\n    color: #4a9d9c; /* Green color for good retrievability */\n    transition: color 0.3s;\n}\n\n.retrievability-value.low {\n    color: #FF3D3D; /* Red color for low retrievability */\n}\n\n.trend-icon {\n    margin-left: 10px;\n    font-size: 1.5em;\n    transition: transform 0.3s;\n}\n\n.trend-up {\n    color: #4a9d9c; /* Green for upward trend */\n}\n\n.trend-down {\n    color: #FF3D3D; /* Red for downward trend */\n}\n\n.low-memory-warning {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    z-index: 0;\n}\n\n.low-memory-warning.active {\n    display: flex;\n}\n\n.card-limit-input input[type=\"number\"]::-webkit-inner-spin-button,\n.card-limit-input input[type=\"number\"]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.card-limit-input input[type=\"number\"] {\n    -moz-appearance: textfield;\n    background: #3a3a4d; /* 输入框背景 */\n    color: #ffffff; /* 输入框字体颜色 */\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    font-size: 1.2em;\n    padding: 5px;\n    border: 2px solid #0D6E6E; /* 输入框边框颜色 */\n    border-radius: 8px;\n    margin: 0 10px;\n}\n\n.gear-button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    padding: 5px;\n    position: relative;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.gear-button .fa-gear {\n    font-size: 1.8em;\n    color: #0D6E6E; /* 齿轮图标颜色 */\n    transition: all 0.3s ease;\n}\n\n.gear-button .direction-icon {\n    position: absolute;\n    font-size: 1em;\n    color: #e2c027;\n    background-color: #fff;\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.3s ease;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n    font-weight: bold;\n}\n\n/* 悬停效果 */\n.gear-button:hover .fa-gear {\n    color: #4a9d9c; /* 悬停时齿轮图标颜色 */\n    filter: drop-shadow(0 0 2px rgba(255, 152, 0, 0.5));\n}\n\n.gear-button:hover .direction-icon {\n    color: #000;\n    background-color: #fff;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.3);\n    transform: translate(-50%, -50%) scale(1.1);\n}\n\n/* 点击动画 */\n.gear-button.left:active {\n    transform: rotate(-45deg);\n}\n\n.gear-button.right:active {\n    transform: rotate(45deg);\n}\n\n.card-limit-input {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    margin-top: 10px;\n}\n\n.card-limit-label {\n    font-size: 1.1em;\n    color: #ffffff; /* 白色字体 */\n    margin-right: 5px;\n}\n\n/* 工具提示 */\n.gear-button::after {\n    content: attr(data-tooltip);\n    position: absolute;\n    bottom: -25px;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    padding: 4px 8px;\n    border-radius: 4px;\n    font-size: 0.8em;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    pointer-events: none;\n    white-space: nowrap;\n}\n\n.gear-button:hover::after {\n    opacity: 1;\n}\n\n/* 视图容器样式 */\n.view {\n    display: none;\n    transition: opacity 0.3s ease;\n}\n\n.view.active {\n    display: block;\n}\n\n/* 题目列表页面样式 */\n.problem-list-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n}\n\n.search-bar {\n    position: relative;\n    width: 300px;\n}\n\n.search-input {\n    width: 100%;\n    padding: 8px 35px 8px 15px;\n    border: none;\n    border-radius: 20px;\n    background: #2a2b30;\n    color: #fff;\n}\n\n.search-icon {\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #888;\n}\n\n.problem-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n    padding: 20px 0;\n}\n\n/* 更多选项页面样式 */\n.options-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 20px;\n    padding: 20px 0;\n}\n\n.option-card {\n    background: #1d2e3d;\n    padding: 20px;\n    border-radius: 15px;\n    text-align: center;\n    transition: all 0.3s ease;\n    cursor: pointer;\n}\n\n.option-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 16px rgba(74, 157, 156, 0.2);\n}\n\n.option-card i {\n    font-size: 2em;\n    color: #4a9d9c;\n    margin-bottom: 15px;\n}\n\n.option-card h4 {\n    color: #fff;\n    margin-bottom: 10px;\n}\n\n.option-card p {\n    color: #888;\n    font-size: 0.9em;\n}\n\n/* 导航标签样式 */\n#problemListView .nav-tabs {\n    border-bottom: 1px solid #4a9d9c;\n\n}\n\n#problemListView .nav-tabs .nav-link {\n    color: #888;\n    border: none;\n    background: none;\n\n\n    transition: all 0.3s ease;\n}\n\n#problemListView .nav-tabs .nav-link:hover {\n    color: #fff;\n}\n\n#problemListView .nav-tabs .nav-link.active {\n    color: #4a9d9c;\n    background: none;\n    border-bottom: 2px solid #4a9d9c;\n}\n\n/* 确保tab内容区域正确显示 */\n#problemListView .tab-content {\n    display: flex;\n}\n\n#problemListView .tab-pane {\n    transition: opacity 0.3s ease;\n}\n\n#problemListView .tab-pane.active {\n    opacity: 1;\n}\n\n\n\n\n\niframe {\n    overflow: hidden;\n    border: 0;\n}\n\n.custom-btn {\n    border-color: #0D6E6E;\n    color: #4a9d9c;\n}\n\n.custom-btn:hover {\n    border-color: rgba(235, 173, 129, 1);\n    background-color: rgba(235, 173, 129, 1);\n}\n\n.custom-btn:disabled {\n    border-color: #e0e0e0;\n    color: #e0e0e0;\n}\n\n.page-input {\n    background-color: transparent;\n    color: #e0e0e0;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n    text-align: center;\n    font-size: 0.875rem;  /* 相当于 Bootstrap 的 sm 大小 */\n    margin-left: 5px !important; \n    margin-right: 5px !important;\n}\n\n.page-input:focus {\n    outline: none;\n    border-color: #afffff;\n    box-shadow: 0 0 5px rgba(74, 157, 156, 0.5);\n}\n\n.multifont {\n    font-family: 'Courier Prime', 'Noto Sans SC', sans-serif;\n}\n\na {\n    color: chocolate;\n}\n\n.custom-tooltip {\n    --bs-tooltip-bg: var(--bd-violet-bg);\n    --bs-tooltip-color: var(--bs-white);\n}\n\n/* 题目列表样式 */\n#problemListView {\n    padding: 5px;\n}\n\n.problem-list-header {\n    margin-bottom: 15px;\n}\n\n.nav-tabs {\n    border-bottom: 1px solid #dee2e6;\n}\n\n.nav-tabs .nav-link {\n    margin-bottom: -1px;\n    color: #495057;\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link.active {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff;\n}\n\n.tab-content {\n    padding: 10px;\n    background-color: #fff;\n    border: 1px solid #dee2e6;\n    border-top: none;\n}\n\n.tab-pane {\n    display: none;\n}\n.tab-pane.active {\n    display: block;\n}\n\n\n\n/* 确保switch容器不会阻挡点击事件 */\n#switch-area {\n    pointer-events: auto;\n    position: relative;\n    z-index: 100;\n}\n\n\n\n\n\n\n/* 自定义表格样式 */\n.table {\n    width: 100%;\n    table-layout: fixed;\n    word-wrap: break-word;\n\n\n    --bs-table-border-color: #afffff !important;       /* 边框颜色 */\n\n    --bs-table-hover-color: #f56464 !important;        /* 悬停文字颜色 */\n    --bs-table-hover-bg: #ebe3e3 !important;          /* 悬停背景颜色 */\n    border: none !important;              /* 移除表格外边框 */\n    border-collapse: collapse !important;  /* 确保边框合并 */\n}\n\n\ntd, th {\n    padding: 4px !important;\n}\n\n.table {\n    margin-bottom: 0;\n    min-width: auto !important;\n}\n\n/* 确保表格容器有正确的宽度和溢出处理 */\n.table-responsive {\n    width: 100%;\n    overflow-x: hidden;\n}\n\n\n\n/* 专门设置表头样式 */\n.table thead,\n.table > thead{\n    border: none !important;              \n    background: linear-gradient(to right, #0D6E6E, #4a9d9c) !important;  \n}\n\n/* 确保表头单元格没有背景色 */\n.table thead tr,\n.table thead th {\n    background: transparent !important;    /* 确保tr和th是透明的 */\n    border: none !important;              \n    color: #ffffff !important;            /* 表头文字颜色 */\n}\n\n\n\n\n/* 记忆概率指示器样式 */\n.memory-indicator {\n    display: inline-flex;\n    align-items: center;\n    padding: 4px 8px;\n    border-radius: 12px;\n    transition: all 0.3s ease;\n}\n\n.memory-indicator:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    transform: scale(1.05);\n}\n\n.memory-indicator i {\n    font-size: 1.1em;\n}\n\n/* 颜色类 */\n.text-success { color: #4caf50 !important; }\n.text-warning { color: #ff9800 !important; }\n.text-danger { color: #f44336 !important; }\n\n\n\n/* 设置卡片样式调整 */\n.option-card {\n    background-color: #1d2e3d;\n    border-radius: 10px;\n    padding: 20px;\n    text-align: center;\n    transition: all 0.3s ease;\n    margin-bottom: 20px;\n}\n\n.option-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 16px rgba(74, 157, 156, 0.2);\n}\n\n.option-card i {\n    font-size: 2em;\n    color: #4a9d9c;\n    margin-bottom: 15px;\n}\n\n.option-card h4 {\n    color: #fff;\n    margin-bottom: 15px;\n}\n\n.option-card p {\n    color: #888;\n    font-size: 0.9em;\n}\n\n/* 表单控件样式 */\n.form-select {\n    background-color: #0D1F2D;\n    color: #fff;\n    border: 1px solid #4a9d9c;\n    margin-top: 10px;\n}\n\n.sync-tips {\n    margin-top: 10px;\n    font-size: 0.8em;\n    color: #888;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.save-section {\n    grid-column: 1 / -1;\n    text-align: center;\n    margin-top: 20px;\n}\n\n/* 开关按钮样式 */\n.form-check-input.custom-switch {\n    background-color: #0D1F2D !important;\n    border-color: #4a9d9c !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    transition: all 0.3s ease;\n    cursor: pointer !important;\n    pointer-events: auto !important;\n    opacity: 1;\n    z-index: 100;\n    position: relative;\n    outline: none !important;\n    /* 自定义滑块圆圈颜色为亮蓝色 */\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2361dafb'/%3e%3c/svg%3e\") !important;\n}\n\n/* 选中状态下的样式 */\n.form-check-input.custom-switch:checked {\n    background-color: #0D6E6E !important;\n    border-color: #0D6E6E !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    /* 选中状态下保持相同的蓝色圆圈 */\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2361dafb'/%3e%3c/svg%3e\") !important;\n}\n\n/* 悬停状态加强发光效果 */\n.form-check-input.custom-switch:hover {\n    box-shadow: 0 0 15px rgba(97, 218, 251, 0.9);\n}\n\n/* 焦点状态 */\n.form-check-input.custom-switch:focus {\n    background-color: inherit !important;  /* 继承当前状态的背景色 */\n    border-color: #4a9d9c !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    outline: none !important;\n}\n\n/* 选中且焦点状态 */\n.form-check-input.custom-switch:checked:focus {\n    background-color: #4a9d9c !important;\n}\n\n\n\n\n\n/* SweetAlert2 自定义样式 */\n.colored-toast.swal2-icon-success {\n    background-color: #1d2e3d !important;\n    border: 1px solid #4a9d9c !important;\n}\n\n.colored-toast .swal2-title {\n    color: #ffffff !important;\n    font-size: 1em !important;\n}\n\n.colored-toast .swal2-close {\n    color: #4a9d9c !important;\n}\n\n.colored-toast .swal2-html-container {\n    color: #888 !important;\n    font-size: 0.9em !important;\n}\n\n/* 成功图标颜色 */\n.colored-toast .swal2-success-line-tip,\n.colored-toast .swal2-success-line-long {\n    background-color: #4a9d9c !important;\n}\n\n.colored-toast .swal2-success-ring {\n    border-color: #4a9d9c !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.15.10
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const swalPrefix = 'swal2-';

  /**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
  const swalClasses = classNames.reduce((acc, className) => {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  const icons = ['success', 'warning', 'info', 'question', 'error'];
  const iconTypes = icons.reduce((acc, icon) => {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  const consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */
  const warnAboutDeprecation = function (deprecatedParam) {
    let useInstead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ''}`);
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`));

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    const otherFocusableElements = popup.querySelectorAll(focusable);
    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      const head = parsed.querySelector('head');
      if (head) {
        Array.from(head.childNodes).forEach(child => {
          elem.appendChild(child);
        });
      }
      const body = parsed.querySelector('body');
      if (body) {
        Array.from(body.childNodes).forEach(child => {
          if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
            elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
          } else {
            elem.appendChild(child);
          }
        });
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (!params.customClass) {
      return;
    }
    const customClass = params.customClass[(/** @type {keyof SweetAlertCustomClass} */className)];
    if (!customClass) {
      return;
    }
    if (typeof customClass !== 'string' && !customClass.forEach) {
      warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
      return;
    }
    addClass(elem, customClass);
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          if (condition) {
            elem.classList.add(className);
          } else {
            elem.classList.remove(className);
          }
        });
      } else {
        if (condition) {
          target.classList.add(className);
        } else {
          target.classList.remove(className);
        }
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(value)}`) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? `${value}px` : value);
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    if (!elem) {
      return;
    }
    elem.style.display = display;
  };

  /**
   * @param {HTMLElement | null} elem
   */
  const hide = elem => {
    if (!elem) {
      return;
    }
    elem.style.display = 'none';
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const showWhenInnerHtmlPresent = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
    if (!elem) {
      return;
    }
    new MutationObserver(() => {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement | null} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    if (condition) {
      show(elem, display);
    } else {
      hide(elem);
    }
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {any} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params[`show${buttonName}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses[`grow-${grow}`]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>


  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(' | ')}, got "${params.input}"`);
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (!inputContainer) {
      return;
    }
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const input = getInput$1(popup, inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    if (!params.input) {
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (inputContainer) {
      applyCustomClass(inputContainer, params, 'input');
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder && params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */
  const getInputContainer = inputType => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    return getDirectChildByClass(popup, swalClasses[(/** @type {SwalClass} */inputType)] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
  (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder || params.inputLabel);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, params.footer, 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    let oldContent = icon.innerHTML;
    let newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  let dragging = false;
  let mousedownX = 0;
  let mousedownY = 0;
  let initialX = 0;
  let initialY = 0;

  /**
   * @param {HTMLElement} popup
   */
  const addDraggableListeners = popup => {
    popup.addEventListener('mousedown', down);
    document.body.addEventListener('mousemove', move);
    popup.addEventListener('mouseup', up);
    popup.addEventListener('touchstart', down);
    document.body.addEventListener('touchmove', move);
    popup.addEventListener('touchend', up);
  };

  /**
   * @param {HTMLElement} popup
   */
  const removeDraggableListeners = popup => {
    popup.removeEventListener('mousedown', down);
    document.body.removeEventListener('mousemove', move);
    popup.removeEventListener('mouseup', up);
    popup.removeEventListener('touchstart', down);
    document.body.removeEventListener('touchmove', move);
    popup.removeEventListener('touchend', up);
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const down = event => {
    const popup = getPopup();
    if (event.target === popup || getIcon().contains(/** @type {HTMLElement} */event.target)) {
      dragging = true;
      const clientXY = getClientXY(event);
      mousedownX = clientXY.clientX;
      mousedownY = clientXY.clientY;
      initialX = parseInt(popup.style.insetInlineStart) || 0;
      initialY = parseInt(popup.style.insetBlockStart) || 0;
      addClass(popup, 'swal2-dragging');
    }
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const move = event => {
    const popup = getPopup();
    if (dragging) {
      let {
        clientX,
        clientY
      } = getClientXY(event);
      popup.style.insetInlineStart = `${initialX + (clientX - mousedownX)}px`;
      popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
    }
  };
  const up = () => {
    const popup = getPopup();
    dragging = false;
    removeClass(popup, 'swal2-dragging');
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   * @returns {{ clientX: number, clientY: number }}
   */
  const getClientXY = event => {
    let clientX = 0,
      clientY = 0;
    if (event.type.startsWith('mouse')) {
      clientX = /** @type {MouseEvent} */event.clientX;
      clientY = /** @type {MouseEvent} */event.clientY;
    } else if (event.type.startsWith('touch')) {
      clientX = /** @type {TouchEvent} */event.touches[0].clientX;
      clientY = /** @type {TouchEvent} */event.touches[0].clientY;
    }
    return {
      clientX,
      clientY
    };
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      const loader = getLoader();
      if (loader) {
        popup.insertBefore(loader, getIcon());
      }
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
    if (params.draggable && !params.toast) {
      addClass(popup, swalClasses.draggable);
      addDraggableListeners(popup);
    } else {
      removeClass(popup, swalClasses.draggable);
      removeDraggableListeners(popup);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    const showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    // TODO: remove in the next major
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    const {
      progressSteps,
      currentProgressStep
    } = params;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    const popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
    globalState.eventEmitter.emit('didRender', popup);
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */
  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  const addKeydownHandler = (globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(innerParams, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  const setFocus = (index, increment) => {
    var _dom$getPopup;
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  const keydownHandler = (innerParams, event, dismissWith) => {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    const input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const actions = getActions();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (let i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const container = getContainer();
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.contains(container)) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  const iOSfix = () => {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    const htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  let previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  const replaceScrollbarWithPadding = initialBodyOverflow => {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoReplaceScrollbarWithPadding = () => {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = `${previousBodyPadding}px`;
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    var _globalState$eventEmi;
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willClose', popup);
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    /**
     * @param {AnimationEvent | TransitionEvent} e
     */
    const swalCloseAnimationFinished = function (e) {
      if (e.target === popup) {
        var _globalState$swalClos;
        (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === void 0 || _globalState$swalClos.call(globalState);
        delete globalState.swalCloseEventFinishedCallback;
        popup.removeEventListener('animationend', swalCloseAnimationFinished);
        popup.removeEventListener('transitionend', swalCloseAnimationFinished);
      }
    };
    popup.addEventListener('animationend', swalCloseAnimationFinished);
    popup.addEventListener('transitionend', swalCloseAnimationFinished);
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      var _globalState$eventEmi2;
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didClose');
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal();
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {Record<string, any>} inputOptions
     */
    const processInputOptions = inputOptions => {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    const select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement('input');
      const radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  const formatInputOptions = inputOptions => {
    /** @type {InputOptionFlattened[]} */
    const result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }
    const input = instance.getInput();
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    const innerParams = privateProps.innerParams.get(this);
    const domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    const popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    draggable: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

  /** @type {Record<string, string | undefined>} */
  const deprecatedParams = {
    allowEnterKey: undefined
  };
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'draggable', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    const isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    globalState.eventEmitter.emit('didDestroy');
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handlePopupClick = (innerParams, domCache, dismissWith) => {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handleToastClick = (innerParams, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  let ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = () => {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = e => {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = () => {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handleModalClick = (innerParams, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = args => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new this(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  const increaseTimer = ms => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  // Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957

  class EventEmitter {
    constructor() {
      /** @type {Events} */
      this.events = {};
    }

    /**
     * @param {string} eventName
     * @returns {EventHandlers}
     */
    _getHandlersByEventName(eventName) {
      if (typeof this.events[eventName] === 'undefined') {
        // not Set because we need to keep the FIFO order
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
        this.events[eventName] = [];
      }
      return this.events[eventName];
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    on(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      if (!currentHandlers.includes(eventHandler)) {
        currentHandlers.push(eventHandler);
      }
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    once(eventName, eventHandler) {
      var _this = this;
      /**
       * @param {Array} args
       */
      const onceFn = function () {
        _this.removeListener(eventName, onceFn);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        eventHandler.apply(_this, args);
      };
      this.on(eventName, onceFn);
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     */
    emit(eventName) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      this._getHandlersByEventName(eventName).forEach(
      /**
       * @param {EventHandler} eventHandler
       */
      eventHandler => {
        try {
          eventHandler.apply(this, args);
        } catch (error) {
          console.error(error);
        }
      });
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    removeListener(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      const index = currentHandlers.indexOf(eventHandler);
      if (index > -1) {
        currentHandlers.splice(index, 1);
      }
    }

    /**
     * @param {string} eventName
     */
    removeAllListeners(eventName) {
      if (this.events[eventName] !== undefined) {
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
        this.events[eventName].length = 0;
      }
    }
    reset() {
      this.events = {};
    }
  }

  globalState.eventEmitter = new EventEmitter();

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const on = (eventName, eventHandler) => {
    globalState.eventEmitter.on(eventName, eventHandler);
  };

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const once = (eventName, eventHandler) => {
    globalState.eventEmitter.once(eventName, eventHandler);
  };

  /**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */
  const off = (eventName, eventHandler) => {
    // Remove all handlers for all events
    if (!eventName) {
      globalState.eventEmitter.reset();
      return;
    }
    if (eventHandler) {
      // Remove a specific handler
      globalState.eventEmitter.removeListener(eventName, eventHandler);
    } else {
      // Remove all handlers for a specific event
      globalState.eventEmitter.removeAllListeners(eventName);
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    off: off,
    on: on,
    once: once,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    stop() {
      if (this.started && this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {boolean}
     */
    isRunning() {
      return this.running;
    }
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? (/** @type {HTMLTemplateElement} */document.querySelector(params.template)) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalParams = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalFunctionParams = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalButtons = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      if (!type || !['confirm', 'cancel', 'deny'].includes(type)) {
        return;
      }
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src') || undefined;
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width') || undefined;
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height') || undefined;
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt') || undefined;
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalInput = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement | null} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        if (!optionValue) {
          return;
        }
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, any>}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    /** @type {Record<string, any>} */
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement | null} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    globalState.eventEmitter.emit('willOpen', popup);
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    globalState.eventEmitter.emit('didOpen', popup);
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener('animationend', swalOpenAnimationFinished);
    popup.removeEventListener('transitionend', swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener('animationend', swalOpenAnimationFinished);
      popup.addEventListener('transitionend', swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(() => {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  let currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  class SweetAlert {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    constructor() {
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, void 0);
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }
    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
        const {
          isAwaitingPromise
        } = globalState.currentInstance;
        globalState.currentInstance._destroy();
        if (!isAwaitingPromise) {
          swalPromiseResolve({
            isDismissed: true
          });
        }
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
      return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
    }
    finally(onFinally) {
      return _classPrivateFieldGet2(_promise, this).finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        instance.close({
          isDismissed: true,
          dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    // TODO: this is dumb, remove `allowEnterKey` param in the next major version
    if (!callIfFunction(innerParams.allowEnterKey)) {
      warnAboutDeprecation('allowEnterKey');
      blurActiveElement();
      return;
    }
    if (focusAutofocus(domCache)) {
      return;
    }
    if (focusButton(domCache, innerParams)) {
      return;
    }
    setFocus(-1, 1);
  };

  /**
   * @param {DomCache} domCache
   * @returns {boolean}
   */
  const focusAutofocus = domCache => {
    const autofocusElements = Array.from(domCache.popup.querySelectorAll('[autofocus]'));
    for (const autofocusElement of autofocusElements) {
      if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
        autofocusElement.focus();
        return true;
      }
    }
    return false;
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Dear russian users visiting russian sites. Let's have fun.
  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    const now = new Date();
    const initiationDate = localStorage.getItem('swal-initiation');
    if (!initiationDate) {
      localStorage.setItem('swal-initiation', `${now}`);
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'none';
        const ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(() => {
          ukrainianAnthem.play().catch(() => {
            // ignore
          });
        }, 2500);
      }, 500);
    }
  }

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance && currentInstance[key]) {
        return currentInstance[key](...arguments);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.15.10';

  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

/***/ }),

/***/ "./src/popup/daily-review.js":
/*!***********************************!*\
  !*** ./src/popup/daily-review.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCardLimit: () => (/* binding */ changeCardLimit),
/* harmony export */   initializeReviewPage: () => (/* binding */ initializeReviewPage),
/* harmony export */   updateCardDisplay: () => (/* binding */ updateCardDisplay),
/* harmony export */   updateCardLimitDisplay: () => (/* binding */ updateCardLimitDisplay)
/* harmony export */ });
/* harmony import */ var _view_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/view.js */ "./src/popup/view/view.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/popup/store.js");
/* harmony import */ var _service_problemService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/problemService.js */ "./src/popup/service/problemService.js");
/* harmony import */ var _util_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/utils.js */ "./src/popup/util/utils.js");
/* harmony import */ var _script_submission_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/submission.js */ "./src/popup/script/submission.js");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _service_configService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/configService */ "./src/popup/service/configService.js");
/* harmony import */ var _util_doms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/doms */ "./src/popup/util/doms.js");
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/sort */ "./src/popup/util/sort.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);










// 在文件顶部导入 SweetAlert2


// 模拟数据
const mockReviewData = {
    totalProblems: 8,
    completedProblems: 3,
    problems: [
        {
            index: "1",
            name: "Two Sum",
            difficulty: "Easy",
            lastReview: "3 days ago",
            nextReview: "in 2 days",
            retrievability: 0.92,
            proficiency: 2,
            maxProficiency: 5
        },
        {
            index: "3",
            name: "Longest Substring Without Repeating Characters",
            difficulty: "Medium",
            lastReview: "7 days ago",
            nextReview: "in 4 days",
            retrievability: 0.88,
            proficiency: 3,
            maxProficiency: 5
        },
        {
            index: "23",
            name: "Merge k Sorted Lists",
            difficulty: "Hard",
            lastReview: "14 days ago",
            nextReview: "in 7 days",
            retrievability: 0.99,
            proficiency: 1,
            maxProficiency: 5
        },
        {
            index: "53",
            name: "Maximum Subarray",
            difficulty: "Medium",
            lastReview: "5 days ago",
            nextReview: "in 3 days",
            retrievability: 0.90,
            proficiency: 2,
            maxProficiency: 5
        },
        {
            index: "70",
            name: "Climbing Stairs",
            difficulty: "Easy",
            lastReview: "4 days ago",
            nextReview: "in 2 days",
            retrievability: 0.95,
            proficiency: 4,
            maxProficiency: 5
        },
        {
            index: "121",
            name: "Best Time to Buy and Sell Stock",
            difficulty: "Easy",
            lastReview: "6 days ago",
            nextReview: "in 3 days",
            retrievability: 0.87,
            proficiency: 3,
            maxProficiency: 5
        },
        {
            index: "200",
            name: "Number of Islands",
            difficulty: "Medium",
            lastReview: "8 days ago",
            nextReview: "in 5 days",
            retrievability: 0.89,
            proficiency: 2,
            maxProficiency: 5
        },
        {
            index: "295",
            name: "Find Median from Data Stream",
            difficulty: "Hard",
            lastReview: "10 days ago",
            nextReview: "in 6 days",
            retrievability: 0.84,
            proficiency: 1,
            maxProficiency: 5
        }
    ]
};

// 判断是否是今天需要复习的题目
function isReviewDueToday(problem) {
    if (!problem.fsrsState?.nextReview) {
        console.log('题目没有下次复习时间:', problem.name);
        return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const nextReview = new Date(problem.fsrsState.nextReview);
    nextReview.setHours(0, 0, 0, 0);
    
    const isDue = nextReview <= today;
    
    console.log('复习时间检查:', {
        problemName: problem.name,
        nextReview: nextReview.toISOString(),
        today: today.toISOString(),
        isDue: isDue
    });
    
    return isDue;
}

function isReviewedToday(problem) {
    if (!problem.fsrsState?.lastReview) return false;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const lastReview = new Date(problem.fsrsState.lastReview);
    lastReview.setHours(0, 0, 0, 0);
    
    return lastReview.getTime() === today.getTime();
}

async function loadDailyReviewData() {
    const problems = Object.values(await (0,_service_problemService_js__WEBPACK_IMPORTED_MODULE_2__.getAllProblems)()).filter(p => p.isDeleted !== true);
    _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.reviewScheduledProblems = problems
    .sort((a, b) => {
        const retrievabilityA = (0,_util_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentRetrievability)(a);
        const retrievabilityB = (0,_util_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentRetrievability)(b);
        return retrievabilityA - retrievabilityB; // 升序排序，最小值在前
    });

    // 获取今天已复习和待复习的题目
    _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.dailyReviewProblems = _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.reviewScheduledProblems
        .filter(problem => isReviewedToday(problem) || isReviewDueToday(problem))
        .sort((a, b) => {
            // 首先按照是否已复习排序（已复习的排在前面）
            const aReviewed = isReviewedToday(a);
            const bReviewed = isReviewedToday(b);
            if (aReviewed !== bReviewed) {
                return bReviewed ? 1 : -1;
            }
            // 如果复习状态相同，则按可检索性排序
            const retrievabilityA = (0,_util_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentRetrievability)(a);
            const retrievabilityB = (0,_util_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentRetrievability)(b);
            return retrievabilityA - retrievabilityB;
        });


    console.log('总题目数:', problems.length);
    console.log('今日待复习题目数:', _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.dailyReviewProblems.length);
    
    // 添加调试日志
    _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.dailyReviewProblems.forEach(problem => {
        const isReviewed = isReviewedToday(problem);
        const isDue = isReviewDueToday(problem);
        console.log('题目状态:', {
            name: problem.name,
            lastReview: problem.fsrsState?.lastReview,
            nextReview: problem.fsrsState?.nextReview,
            isReviewedToday: isReviewed,
            isDueToday: isDue,
            retrievability: (0,_util_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentRetrievability)(problem)
        });
    });
}
// 假设昨天的平均记忆质量
let yesterdayRetrievabilityAverage = 0.00;

// 计算可检索性均值
function calculateRetrievabilityAverage() {
    const problems = _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.reviewScheduledProblems;
    if (!problems || problems.length === 0) return 0;
    
    const totalRetrievability = problems.reduce((sum, problem) => {
        const retrievability = (0,_util_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentRetrievability)(problem);
        return sum + retrievability;
    }, 0);
    
    return (totalRetrievability / problems.length).toFixed(2);
}


// 更新顶部统计信息
function updateStats() {
    console.log('更新统计信息');
    // 计算今日已复习的题目数量
    const completedCount = _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.dailyReviewProblems.filter(problem => 
        isReviewedToday(problem)
    ).length;

    // 获取当前显示的卡片数量
    const cardLimit = parseInt(document.getElementById('cardLimit').value, 10)|| _store__WEBPACK_IMPORTED_MODULE_1__.store.defaultCardLimit || 1;
    console.log('当前卡片限制值:', {
        rawValue: document.getElementById('cardLimit').value,
        parsedCardLimit: cardLimit,
        element: document.getElementById('cardLimit')
    });

    // 更新显示的已复习数量
    document.getElementById('completedCount').textContent = completedCount;
    document.getElementById('totalCount').textContent = cardLimit; // 使用当前的卡片数量

    // 更新进度条
    const completionRate = cardLimit > 0 ? Math.round((completedCount / cardLimit) * 100) : 0;
    updateProgressCircle(completionRate);
    document.getElementById('completionRate').textContent = `${completionRate}%`;
    // document.querySelector('.completion-circle').style.setProperty('--percentage', `${completionRate}%`);
    // 更新可检索性均值
    const retrievabilityAverage = calculateRetrievabilityAverage();
    const retrievabilityElement = document.getElementById('retrievabilityAverage');
    retrievabilityElement.textContent = retrievabilityAverage;

    // 更新趋势图标
    const trendIcon = document.getElementById('trendIcon');
    if (retrievabilityAverage > yesterdayRetrievabilityAverage) {
        trendIcon.className = 'fas fa-arrow-up trend-icon trend-up';
    } else if (retrievabilityAverage < yesterdayRetrievabilityAverage) {
        trendIcon.className = 'fas fa-arrow-down trend-icon trend-down';
    } else {
        trendIcon.className = '';
    }

    // 根据可检索性均值调整颜色和背景提示
    const lowMemoryWarning = document.getElementById('lowMemoryWarning');
    if (retrievabilityAverage < 0.90) {
        retrievabilityElement.classList.add('low');
        lowMemoryWarning.classList.add('active');
    } else {
        retrievabilityElement.classList.remove('low');
        lowMemoryWarning.classList.remove('active');
    }
    updateCardLimitDisplay(); // 这里也添加一次调用
}

function updateProgressCircle(completionRate) {
    const progressCircle = document.querySelector('.completion-circle');
    const radius = 54; // 圆的半径
    const circumference = 2 * Math.PI * radius; // 圆的周长

    // 计算偏移量
    const offset = circumference - (completionRate / 100) * circumference;
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = offset;

    // 更新显示的百分比
    // document.getElementById('completionRate').textContent = `${completionRate}%`;
    document.querySelector('.completion-circle').style.setProperty('--percentage', `${completionRate}%`);

    // 添加动画效果
    const innerCircle = document.querySelector('.inner-circle');
    innerCircle.style.transform = `scale(1.1)`; // 放大内圈
    setTimeout(() => {
        innerCircle.style.transform = `scale(1)`; // 恢复原状
    }, 500); // 动画持续时间
}



// 更新卡片显示
function updateCardDisplay() {
    console.log('更新卡片显示');
    
    // 重置已复习的问题数量
    // mockReviewData.completedProblems = 0; // 重置已复习数量
    updateStats(); // 更新统计信息，传递当前显示的卡片数量

    createReviewCards(); // 创建新的卡片
}

// 更新卡片限制和显示
function updateCardLimitDisplay() {
    const input = document.getElementById('cardLimit');
    const totalDisplay = document.querySelector('.total-problems');
    const totalProblems = _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.dailyReviewProblems?.length || 0;
    
    // 更新最大值和总数显示
    input.max = Math.max(totalProblems, 1);
    totalDisplay.textContent = `/ ${totalProblems}`;
    
    // 使用保存的默认值或回退到3
    let currentValue = _store__WEBPACK_IMPORTED_MODULE_1__.store.defaultCardLimit || 1;
    if (currentValue > totalProblems && totalProblems > 0) {
        currentValue = totalProblems;
    }
    input.value = currentValue;
    
    // 禁用条件
    if (totalProblems === 0) {
        input.value = 0;
        input.disabled = true;
        totalDisplay.textContent = "/ 0";
    } else {
        input.disabled = false;
    }

    console.log('更新卡片限制显示:', {
        currentValue: input.value,
        max: input.max,
        totalProblems
    });
}
// 改变卡片数量
// 所有功能函数
async function changeCardLimit(delta) {
    console.log('执行 changeCardLimit, delta:', delta);
    const input = document.getElementById('cardLimit');
    const currentValue = parseInt(input.value, 10);
    const newValue = currentValue + delta;
    const maxValue = _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.dailyReviewProblems?.length || 0;
    
    if (newValue >= 1 && newValue <= maxValue) {
        input.value = newValue;
        await (0,_service_configService__WEBPACK_IMPORTED_MODULE_6__.setDefaultCardLimit)(newValue);
        _store__WEBPACK_IMPORTED_MODULE_1__.store.defaultCardLimit = newValue;
        updateCardDisplay();
    }
}


// 标记题目为已复习
async function markAsReviewed(button, problem) {
    console.log('执行 markAsReviewed', button, problem);
    
    const card = button.closest('.review-card');
    if (!card) {
        console.log('未找到对应的卡片');
        return;
    }

    console.log('找到卡片，开始更新状态');
    
    // 更换图标并更改样式
    const icon = button.querySelector('i');
    icon.classList.remove('fa-check-circle');
    icon.classList.add('fa-circle-check');
    icon.style.color = '#0D6E6E';
    
    // 禁用按钮
    button.disabled = true;
    card.style.opacity = '0.4';

    // 更新问题状态
    // if (problem && problem.fsrsState) {
    //     problem.fsrsState.lastReview = Date.now();
    //     problem.fsrsState.reviewCount = (problem.fsrsState.reviewCount || 0) + 1;
    //     这里可以添加保存到存储的逻辑
    //     await updateProblem(problem);
    // }

    // 更新统计信息
    updateStats();
    console.log('更新完成');
}

// 标记所有题目为已复习
function markAllAsReviewed() {
    console.log('执行 markAllAsReviewed');
    const buttons = document.querySelectorAll('.review-card .btn-review:not(:disabled)');
    console.log('找到未禁用的按钮数量:', buttons.length);
    buttons.forEach(button => markAsReviewed(button));
}

// 创建题目卡片时的事件绑定
function createReviewCards() {
    console.log('开始创建卡片');
    const reviewList = document.getElementById('reviewList');
    const template = document.getElementById('reviewCardTemplate');
    const cardLimit = parseInt(document.getElementById('cardLimit').value, 10);

    reviewList.innerHTML = '';

    const problems = _store__WEBPACK_IMPORTED_MODULE_1__.daily_store.dailyReviewProblems || [];
    problems.slice(0, cardLimit).forEach((problem, index) => {
        const cardNode = template.content.cloneNode(true);
        const card = cardNode.querySelector('.review-card');
        
        // 安全地访问 fsrsState
        const fsrsState = problem.fsrsState || {};

        
        // 设置题目信息
        const problemName = card.querySelector('.problem-name');
        problemName.textContent = problem.name || 'unknown';
        
        // 设置难度和复习信息
        const difficultySpan = card.querySelector('.difficulty');
        const level = problem.level || 'Unknown';
        difficultySpan.textContent = level;
        // 使用现有的 CSS 类
        difficultySpan.classList.add(`difficulty-${level}`);

        // 设置可检索性
        const retrievability = (0,_util_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentRetrievability)(problem);
        const retrievabilitySpan = card.querySelector('.retrievability');
        retrievabilitySpan.textContent = `${retrievability.toFixed(2)}`;
        retrievabilitySpan.classList.add(retrievability < 0.9 ? 'text-danger' : 'text-success');
        
        
        // 设置下次复习时间
        const nextReviewTips = fsrsState.nextReview 
            ? (() => {
                const daysUntilReview = Math.ceil((new Date(fsrsState.nextReview) - new Date()) / (1000 * 60 * 60 * 24));
                if (daysUntilReview > 0) {
                    return `${daysUntilReview} day${daysUntilReview > 1 ? 's' : ''} Review`;
                } else {
                    const daysOverdue = Math.abs(daysUntilReview);
                    return `  ${daysOverdue} day${daysOverdue > 1 ? 's' : ''} Delay`;
                }
            })()
            : 'Not scheduled';
        card.querySelector('.next-review').textContent = nextReviewTips;

        // 格式化上次复习时间
        const lastReviewText = fsrsState.lastReview 
        ? new Date(fsrsState.lastReview).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        : 'Never reviewed';

        // 格式化上次复习时间
        const nextReviewText = fsrsState.nextReview 
        ? new Date(fsrsState.nextReview).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        : 'Never reviewed';



        // 设置hover提示
        const tooltipContent = [
            `Last Review: ${lastReviewText}`,
            `Next Review: ${nextReviewText}`,
            problem.url ? 'Click to open problem' : ''
        ].filter(Boolean).join('\n');
        
        card.title = tooltipContent;

        // 检查今日是否已复习
        const isReviewedToday = fsrsState.lastReview && 
            new Date(fsrsState.lastReview).toDateString() === new Date().toDateString();

        // 设置按钮状态
        const reviewButton = card.querySelector('.btn-review');
        if (reviewButton) {
            if (isReviewedToday) {
                const icon = reviewButton.querySelector('i');
                icon.classList.remove('fa-check-circle');
                icon.classList.add('fa-circle-check');
                icon.style.color = '#0D6E6E';
                reviewButton.disabled = true;
                card.style.opacity = '0.4';
            }

            reviewButton.onclick = async function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('复习按钮被点击');

                const updatedProblem = await (0,_script_submission_js__WEBPACK_IMPORTED_MODULE_4__.handleFeedbackSubmission)(problem);
                if (updatedProblem) {
                    markAsReviewed(this, updatedProblem);
                }
                // markAsReviewed(this, problem); // 修改这里，传入按钮元素和问题对象
            };
        }

        // 添加题目链接功能
        if (problem.url) {
            card.style.cursor = 'pointer';
            card.onclick = function(e) {
                if (!e.target.closest('.btn-review')) {
                    window.open(problem.url, '_blank');
                }
            };
        }

        reviewList.appendChild(cardNode);
    });
}





// 设置当前日期
function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    document.getElementById('currentDate').textContent = today;
}

// 页面切换功能
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成,开始初始化页面切换功能');
    
    // 检查是否找到导航按钮
    const navButtons = document.querySelectorAll('.nav-btn');
    console.log('找到导航按钮数量:', navButtons.length);
    
    // 检查是否找到视图
    const views = document.querySelectorAll('.view');
    console.log('找到视图数量:', views.length);
    
    // 打印所有视图的ID
    views.forEach(view => console.log('视图ID:', view.id));
    
    navButtons.forEach((button, index) => {
        console.log(`为第 ${index + 1} 个按钮绑定点击事件:`, button.textContent);
        
        button.addEventListener('click', async function(e) {
            e.preventDefault(); // 阻止默认行为
            e.stopPropagation(); // 阻止事件冒泡
            
            console.log('按钮被点击:', this.textContent);
            
            // 移除所有按钮的激活状态
            navButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的激活状态
            this.classList.add('active');
            
            // 获取目标视图
            const targetView = this.textContent.trim();
            console.log('目标视图:', targetView);
            
            let viewId;
            switch(targetView) {
                case '复习':
                    viewId = 'reviewView';
                    await initializeReviewPage();
                    break;
                case '题目列表':
                    viewId = 'problemListView';
                    await loadProblemList(); // 加载题目列表
                    // renderAll();
                    break;
                case '更多':
                    viewId = 'moreView';
                    break;
            }
            
            console.log('切换到视图ID:', viewId);
            
            // 切换视图
            views.forEach(view => {
                console.log('检查视图:', view.id);
                if(view.id === viewId) {
                    view.classList.add('active');
                    view.style.display = 'block';
                    console.log('激活视图:', view.id);
                } else {
                    view.classList.remove('active');
                    view.style.display = 'none';
                    console.log('隐藏视图:', view.id);
                }
            });
        });
    });
});

// 确保在页面完全加载后也执行一次检查
window.onload = function() {
    console.log('页面完全加载完成，检查导航功能是否正常初始化');
    const navButtons = document.querySelectorAll('.nav-btn');
    console.log('页面加载完成后的导航按钮数量:', navButtons.length);
};

// 加载题目列表
// function loadProblemList() {
//     const problemList = document.getElementById('problemList');
//     if(!problemList.children.length) { // 只在第一次加载
//         mockReviewData.problems.forEach(problem => {
//             const problemCard = createProblemCard(problem);
//             problemList.appendChild(problemCard);
//         });
//     }
// }

// 创建题目卡片
function createProblemCard(problem) {
    const card = document.createElement('div');
    card.className = 'problem-card';
    card.innerHTML = `
        <h4>${problem.index}. ${problem.name}</h4>
        <div class="problem-info">
            <span class="difficulty-${problem.difficulty}">${problem.difficulty}</span>
            <span class="last-review">上次复习: ${problem.lastReview}</span>
        </div>
        <div class="problem-stats">
            <div class="stat">
                <i class="fas fa-brain"></i>
                <span>${problem.retrievability.toFixed(2)}</span>
            </div>
            <div class="stat">
                <i class="fas fa-chart-line"></i>
                <span>${problem.proficiency}/${problem.maxProficiency}</span>
            </div>
        </div>
    `;
    return card;
}

async function loadProblemList() {
    await (0,_view_view_js__WEBPACK_IMPORTED_MODULE_0__.renderAll)();
}



// 添加设置相关的初始化函数
async function initializeOptions() {
    await (0,_service_configService__WEBPACK_IMPORTED_MODULE_6__.loadConfigs)();

    const optionsForm = document.getElementById('optionsForm');
    if (!optionsForm) return; // 如果找不到表单元素，直接返回
    
    // 初始化题目排序选择器
    const problemSorterSelect = document.getElementById('problemSorterSelect');
    if (problemSorterSelect) {
        const problemSorterMetaArr = _util_sort__WEBPACK_IMPORTED_MODULE_8__.problemSorterArr.map(sorter => ({
            id: (0,_util_sort__WEBPACK_IMPORTED_MODULE_8__.idOf)(sorter), 
            text: (0,_util_sort__WEBPACK_IMPORTED_MODULE_8__.descriptionOf)(sorter)
        }));

        problemSorterMetaArr.forEach(sorterMeta => {
            const optionElement = document.createElement('option');
            optionElement.value = sorterMeta.id;
            optionElement.textContent = sorterMeta.text;
            problemSorterSelect.append(optionElement);
        });
    }

    // 初始化云同步开关
    const syncToggle = document.getElementById('syncToggle');
    if (syncToggle) {
        syncToggle.checked = _store__WEBPACK_IMPORTED_MODULE_1__.store.isCloudSyncEnabled || false;
    }
    // 初始化默认卡片数量
    // const defaultCardLimitInput = document.getElementById('defaultCardLimit');
    // if (defaultCardLimitInput) {
    //     defaultCardLimitInput.value = store.defaultCardLimit || 1;
    // }

    // 修改保存成功提示
    optionsForm.addEventListener('submit', async e => {
        e.preventDefault();
        const selectedSorterId = problemSorterSelect.value;
        const isCloudSyncEnabled = syncToggle.checked;
        // const defaultCardLimit = parseInt(defaultCardLimitInput.value, 10);

        await (0,_service_configService__WEBPACK_IMPORTED_MODULE_6__.setProblemSorter)(Number(selectedSorterId));
        await (0,_service_configService__WEBPACK_IMPORTED_MODULE_6__.setCloudSyncEnabled)(isCloudSyncEnabled);
        // await setDefaultCardLimit(defaultCardLimit);
        // // 更新当前显示的卡片数量
        // const cardLimitInput = document.getElementById('cardLimit');
        // if (cardLimitInput) {
        //     cardLimitInput.value = defaultCardLimit;
        //     updateCardDisplay(); // 更新卡片显示
        // }
        // 使用 SweetAlert2 显示保存成功提示
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
            icon: 'success',
            title: '设置已保存',
            text: '您的设置已成功更新',
            showConfirmButton: false,
            timer: 1500,
            background: '#1d2e3d',
            color: '#ffffff',
            toast: true,
            position: 'center-end',
            customClass: {
                popup: 'colored-toast'
            }
        });
    });
}



// 初始化函数
async function initializeReviewPage() {
    console.log('初始化复习页面');
    // 首先加载配置
    await (0,_service_configService__WEBPACK_IMPORTED_MODULE_6__.loadConfigs)();
    console.log('加载的默认卡片数量:', _store__WEBPACK_IMPORTED_MODULE_1__.store.defaultCardLimit);
    await loadDailyReviewData(); // 加载真实数据
    const gearButtons = document.querySelectorAll('.gear-button');
    gearButtons.forEach(button => {
        button.replaceWith(button.cloneNode(true));
    });
    
    
    // 绑定齿轮按钮事件
    document.querySelectorAll('.gear-button').forEach(button => {
        button.addEventListener('click', function() {
            console.log('齿轮按钮被点击');
            const delta = this.classList.contains('left') ? -1 : 1;
            changeCardLimit(delta);
        });
    });

    // 绑定卡片数量输入框变化事件
    const cardLimitInput = document.getElementById('cardLimit');
    cardLimitInput.addEventListener('change', function() {
        console.log('卡片数量改变');
        updateCardDisplay();
    });

    // 初始化显示
    setCurrentDate();
    updateStats();
    updateCardLimitDisplay();
    createReviewCards();
}

// 确保在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM加载完成');
    await initializeReviewPage();
    // 添加设置初始化
    await initializeOptions();
});

// 以防万一，也添加 window.onload
window.onload = function() {
    console.log('页面完全加载完成');
    if (!document.querySelector('.review-card')) {
        console.log('卡片未创建，重新初始化');
        setCurrentDate();
        updateStats();
        updateCardLimitDisplay();
        createReviewCards();
    }

};


/***/ }),

/***/ "./src/popup/delegate/cloudStorageDelegate.js":
/*!****************************************************!*\
  !*** ./src/popup/delegate/cloudStorageDelegate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/popup/delegate/leetCodeDelegate.js":
/*!************************************************!*\
  !*** ./src/popup/delegate/leetCodeDelegate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProblemInfo: () => (/* binding */ getProblemInfo),
/* harmony export */   queryProblemInfo: () => (/* binding */ queryProblemInfo)
/* harmony export */ });
const user_agent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36";
const params = {
    operationName: "questionTitle",
    variables: { titleSlug: "" }
};
const headers = {
    'User-Agent': user_agent,
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Referer': "",
};

const queryProblemInfo = async (slug, site) => {
    const baseUrl = `https://leetcode.${site}`;
    params.variables.titleSlug = slug;
    params.query = `query questionTitle($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          questionFrontendId
          ${site === "cn" ? "translatedTitle" : "title"}
          difficulty
        }
      }`
    headers.Referer = `${baseUrl}/problems/${slug}`

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
        timeout: 10000
    };

    const response = await fetch(`${baseUrl}/graphql`, requestOptions);
    const content = await response.json();

    return content.data.question;
}

/*
    Extract basic problem information
*/
const getProblemInfo = async () => {
    let problemUrl = window.location.href;

    const match = problemUrl.match(/(com|cn)(\/|$)/);
    console.log(`current site is ${match[1]}`);
    const site = match ? match[1] : "com";

    const possible_suffix = ["/submissions/", "/description/", "/discussion/", "/solutions/"];
    for (const suffix of possible_suffix) {
        if (problemUrl.includes(suffix)) {
            problemUrl = problemUrl.substring(0, problemUrl.lastIndexOf(suffix) + 1);
            break;
        }
    }

    const problemSlug = problemUrl.split("/").splice(-2)[0];

    const question = await queryProblemInfo(problemSlug, site);

    return {
        problemIndex: question.questionFrontendId,
        problemName: `${question.questionFrontendId}. ${site === "cn" ? question.translatedTitle : question.title}`,
        problemLevel: question.difficulty,
        problemUrl
    };
}


/***/ }),

/***/ "./src/popup/delegate/localStorageDelegate.js":
/*!****************************************************!*\
  !*** ./src/popup/delegate/localStorageDelegate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/popup/entity/operationHistory.js":
/*!**********************************************!*\
  !*** ./src/popup/entity/operationHistory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OPS_TYPE: () => (/* binding */ OPS_TYPE),
/* harmony export */   OperationHistory: () => (/* binding */ OperationHistory)
/* harmony export */ });
class OperationHistory {
    constructor(before, isInCnMode, type, time) {
        this.before = before;
        this.isInCnMode = isInCnMode;
        this.type = type;
        this.time = time;
    }
}

const OPS_TYPE = Object.freeze({
    MASTER: "mark as mastered",
    RESET: "reset progress",
    DELETE: "delete record"
});

/***/ }),

/***/ "./src/popup/entity/problem.js":
/*!*************************************!*\
  !*** ./src/popup/entity/problem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Problem: () => (/* binding */ Problem),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   getDeletedProblem: () => (/* binding */ getDeletedProblem)
/* harmony export */ });
class Problem {
    constructor(index, name, level, url, submissionTime, proficiency, modificationTime) {
        this.index = index;
        this.name = name;
        this.level = level;
        this.url = url;
        this.submissionTime = submissionTime;
        this.proficiency = proficiency;
        this.modificationTime = modificationTime;
        this.isDeleted = false;

        // 更新 FSRS 状态结构
        this.fsrsState = {
            difficulty: null,        // 用户反馈的难度 (1-5)
            quality: null,           // 答题质量 (1-5)
            lastReview: null,        // 上次复习时间
            nextReview: null,        // 下次复习时间
            reviewCount: 0,          // 复习次数
            stability: 0,            // 记忆稳定性
            state: 'New',           // FSRS 状态
            lapses: 0               // 遗忘次数
        };
    }
};

const getDeletedProblem = (problemId) => {
    const deletedProblem = new Problem(problemId, '', '', '', 0, 0, Date.now());
    deletedProblem.isDeleted = true;
    return deletedProblem;
}

const copy = (p) => {
    const newProblem = new Problem(
        p.index, 
        p.name, 
        p.level, 
        p.url, 
        p.submissionTime, 
        p.proficiency, 
        p.modificationTime
    );
    
    // 复制 isDeleted 状态
    newProblem.isDeleted = p.isDeleted;
    
    // 深拷贝 fsrsState 对象
    // 深拷贝 fsrsState 对象，兼容旧版本
    newProblem.fsrsState = {
        difficulty: p.fsrsState ? p.fsrsState.difficulty : null,
        quality: p.fsrsState ? p.fsrsState.quality : null,
        lastReview: p.fsrsState ? p.fsrsState.lastReview : null,
        nextReview: p.fsrsState ? p.fsrsState.nextReview : null,
        reviewCount: p.fsrsState ? p.fsrsState.reviewCount : 0,
        stability: p.fsrsState ? p.fsrsState.stability : 0,
        state: p.fsrsState ? p.fsrsState.state : 'New',
        lapses: p.fsrsState ? p.fsrsState.lapses : 0
    };
    
    return newProblem;
}

/***/ }),

/***/ "./src/popup/handler/configJumpHandler.js":
/*!************************************************!*\
  !*** ./src/popup/handler/configJumpHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setConfigJumpHandlers: () => (/* binding */ setConfigJumpHandlers)
/* harmony export */ });
/* harmony import */ var _util_doms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/doms */ "./src/popup/util/doms.js");


const setConfigJumpHandlers = () => {
    if (_util_doms__WEBPACK_IMPORTED_MODULE_0__.configButtonDOMs !== undefined) {
        Array.prototype.forEach.call(_util_doms__WEBPACK_IMPORTED_MODULE_0__.configButtonDOMs, (btn) => btn.onclick = async (e) => {
            chrome.runtime.openOptionsPage();
        });
    }
}

/***/ }),

/***/ "./src/popup/handler/handlerRegister.js":
/*!**********************************************!*\
  !*** ./src/popup/handler/handlerRegister.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerAllHandlers: () => (/* binding */ registerAllHandlers)
/* harmony export */ });
/* harmony import */ var _configJumpHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configJumpHandler */ "./src/popup/handler/configJumpHandler.js");
/* harmony import */ var _modeSwitchHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modeSwitchHandler */ "./src/popup/handler/modeSwitchHandler.js");
/* harmony import */ var _pageJumpHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageJumpHandler */ "./src/popup/handler/pageJumpHandler.js");
/* harmony import */ var _popupUnloadHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popupUnloadHandler */ "./src/popup/handler/popupUnloadHandler.js");
/* harmony import */ var _recordOperationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recordOperationHandler */ "./src/popup/handler/recordOperationHandler.js");






const registerAllHandlers = () => {
    (0,_pageJumpHandler__WEBPACK_IMPORTED_MODULE_2__.setPageJumpHandlers)();
    (0,_modeSwitchHandler__WEBPACK_IMPORTED_MODULE_1__.setModeSwitchHandlers)();
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_4__.setRecordOperationHandlers)();
    (0,_configJumpHandler__WEBPACK_IMPORTED_MODULE_0__.setConfigJumpHandlers)();
    (0,_popupUnloadHandler__WEBPACK_IMPORTED_MODULE_3__.setPopupUnloadHandler)();
}

/***/ }),

/***/ "./src/popup/handler/modeSwitchHandler.js":
/*!************************************************!*\
  !*** ./src/popup/handler/modeSwitchHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setModeSwitchHandlers: () => (/* binding */ setModeSwitchHandlers),
/* harmony export */   switchMode: () => (/* binding */ switchMode)
/* harmony export */ });
/* harmony import */ var _service_modeService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/modeService */ "./src/popup/service/modeService.js");
/* harmony import */ var _util_doms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/doms */ "./src/popup/util/doms.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/view */ "./src/popup/view/view.js");
/* harmony import */ var _daily_review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../daily-review */ "./src/popup/daily-review.js");





const switchMode = async () => {
    await (0,_service_modeService__WEBPACK_IMPORTED_MODULE_0__.toggleMode)();
    await (0,_view_view__WEBPACK_IMPORTED_MODULE_2__.renderAll)();
    // 更新每日复习视图
    await (0,_daily_review__WEBPACK_IMPORTED_MODULE_3__.initializeReviewPage)();
}

const setModeSwitchHandlers = () => {
    _util_doms__WEBPACK_IMPORTED_MODULE_1__.switchButtonDOM.onclick = switchMode;
}

/***/ }),

/***/ "./src/popup/handler/pageJumpHandler.js":
/*!**********************************************!*\
  !*** ./src/popup/handler/pageJumpHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPageJumpHandlers: () => (/* binding */ setPageJumpHandlers)
/* harmony export */ });
/* harmony import */ var _util_doms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/doms */ "./src/popup/util/doms.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view */ "./src/popup/view/view.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recordOperationHandler */ "./src/popup/handler/recordOperationHandler.js");





const goToPrevReviewPage = () => {
    (0,_view_view__WEBPACK_IMPORTED_MODULE_1__.renderReviewTableContent)(_store__WEBPACK_IMPORTED_MODULE_2__.store.needReviewProblems, _store__WEBPACK_IMPORTED_MODULE_2__.store.toReviewPage - 1);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}
const goToNextReviewPage = () => {
    ;(0,_view_view__WEBPACK_IMPORTED_MODULE_1__.renderReviewTableContent)(_store__WEBPACK_IMPORTED_MODULE_2__.store.needReviewProblems, _store__WEBPACK_IMPORTED_MODULE_2__.store.toReviewPage + 1);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}
const goToPrevSchedulePage = () => {
    ;(0,_view_view__WEBPACK_IMPORTED_MODULE_1__.renderScheduledTableContent)(_store__WEBPACK_IMPORTED_MODULE_2__.store.reviewScheduledProblems, _store__WEBPACK_IMPORTED_MODULE_2__.store.scheduledPage - 1);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}

const goToNextSchedulePage = () => {
    ;(0,_view_view__WEBPACK_IMPORTED_MODULE_1__.renderScheduledTableContent)(_store__WEBPACK_IMPORTED_MODULE_2__.store.reviewScheduledProblems, _store__WEBPACK_IMPORTED_MODULE_2__.store.scheduledPage + 1);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}

const goToPrevCompletedPage = () => {
    ;(0,_view_view__WEBPACK_IMPORTED_MODULE_1__.renderCompletedTableContent)(_store__WEBPACK_IMPORTED_MODULE_2__.store.completedProblems, _store__WEBPACK_IMPORTED_MODULE_2__.store.completedPage - 1);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}

const goToNextCompletedPage = () => {
    ;(0,_view_view__WEBPACK_IMPORTED_MODULE_1__.renderCompletedTableContent)(_store__WEBPACK_IMPORTED_MODULE_2__.store.completedProblems, _store__WEBPACK_IMPORTED_MODULE_2__.store.completedPage + 1);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}

const jumpToReviewPage = (event) => {
    if (event.keyCode !== 13) return;
    let page = parseInt(event.target.value);
    if (isNaN(page) || !Number.isInteger(page)) {
        _util_doms__WEBPACK_IMPORTED_MODULE_0__.input0DOM.classList.add("is-invalid");
        return;
    }
    _util_doms__WEBPACK_IMPORTED_MODULE_0__.input0DOM.classList.remove("is-invalid");
    if (page === _store__WEBPACK_IMPORTED_MODULE_2__.store.toReviewPage) return;
    (0,_view_view__WEBPACK_IMPORTED_MODULE_1__.renderReviewTableContent)(_store__WEBPACK_IMPORTED_MODULE_2__.store.needReviewProblems, page);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}

const jumpToSchedulePage = (event) => {
    if (event.keyCode !== 13) return;
    let page = parseInt(event.target.value);
    if (isNaN(page) || !Number.isInteger(page)) {
        _util_doms__WEBPACK_IMPORTED_MODULE_0__.input1DOM.classList.add("is-invalid");
        return;
    }
    _util_doms__WEBPACK_IMPORTED_MODULE_0__.input1DOM.classList.remove("is-invalid");
    if (page === _store__WEBPACK_IMPORTED_MODULE_2__.store.scheduledPage) return;
    update_schedule_table_content(_store__WEBPACK_IMPORTED_MODULE_2__.store.reviewScheduledProblems, page);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}

const jumpToCompletedPage = (event) => {
    if (event.keyCode !== 13) return;
    let page = parseInt(event.target.value);
    if (isNaN(page) || !Number.isInteger(page)) {
        _util_doms__WEBPACK_IMPORTED_MODULE_0__.input2DOM.classList.add("is-invalid");
        return;
    }
    _util_doms__WEBPACK_IMPORTED_MODULE_0__.input2DOM.classList.remove("is-invalid");
    if (page === _store__WEBPACK_IMPORTED_MODULE_2__.store.completedPage) return;
    (0,_view_view__WEBPACK_IMPORTED_MODULE_1__.renderCompletedTableContent)(_store__WEBPACK_IMPORTED_MODULE_2__.store.needReviewProblems, page);
    (0,_recordOperationHandler__WEBPACK_IMPORTED_MODULE_3__.setRecordOperationHandlers)();
}

const setPageJumpHandlers = () => {
    // prevButton0DOM.onclick = goToPrevReviewPage;
    // nextButton0DOM.onclick = goToNextReviewPage;
    _util_doms__WEBPACK_IMPORTED_MODULE_0__.prevButton1DOM.onclick = goToPrevSchedulePage;
    _util_doms__WEBPACK_IMPORTED_MODULE_0__.nextButton1DOM.onclick = goToNextSchedulePage;
    // prevButton2DOM.onclick = goToPrevCompletedPage;
    // nextButton2DOM.onclick = goToNextCompletedPage;
    
    // input0DOM.onkeydown = jumpToReviewPage;
    _util_doms__WEBPACK_IMPORTED_MODULE_0__.input1DOM.onkeydown = jumpToSchedulePage;
    // input2DOM.onkeydown = jumpToCompletedPage;
}

/***/ }),

/***/ "./src/popup/handler/popupUnloadHandler.js":
/*!*************************************************!*\
  !*** ./src/popup/handler/popupUnloadHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPopupUnloadHandler: () => (/* binding */ setPopupUnloadHandler)
/* harmony export */ });
/* harmony import */ var _service_problemService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/problemService */ "./src/popup/service/problemService.js");
/* harmony import */ var _util_doms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/doms */ "./src/popup/util/doms.js");




const setPopupUnloadHandler = () => {
    if (_util_doms__WEBPACK_IMPORTED_MODULE_1__.popupPageDOM !== undefined) {
        
        _util_doms__WEBPACK_IMPORTED_MODULE_1__.popupPageDOM.addEventListener('unload', async () => {    
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_0__.syncProblems)();
        })
    }
}

/***/ }),

/***/ "./src/popup/handler/recordOperationHandler.js":
/*!*****************************************************!*\
  !*** ./src/popup/handler/recordOperationHandler.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setRecordOperationHandlers: () => (/* binding */ setRecordOperationHandlers)
/* harmony export */ });
/* harmony import */ var _util_doms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/doms */ "./src/popup/util/doms.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _service_problemService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/problemService */ "./src/popup/service/problemService.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/view */ "./src/popup/view/view.js");
/* harmony import */ var _service_operationHistoryService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/operationHistoryService */ "./src/popup/service/operationHistoryService.js");






const initTooltips = () => {
    _store__WEBPACK_IMPORTED_MODULE_1__.store.tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    _store__WEBPACK_IMPORTED_MODULE_1__.store.tooltipList = [..._store__WEBPACK_IMPORTED_MODULE_1__.store.tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

const hide_all_tooltips = () => {
    _store__WEBPACK_IMPORTED_MODULE_1__.store.tooltipList.forEach(tooltip => tooltip._hideModalHandler());
}

const setRecordOperationHandlers = () => {

    initTooltips();

    if (_util_doms__WEBPACK_IMPORTED_MODULE_0__.checkButtonDOMs !== undefined) {
        Array.prototype.forEach.call(_util_doms__WEBPACK_IMPORTED_MODULE_0__.checkButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_2__.markProblemAsMastered)(event.target.dataset.id);
            await (0,_view_view__WEBPACK_IMPORTED_MODULE_3__.renderAll)();
        });
    }

    if (_util_doms__WEBPACK_IMPORTED_MODULE_0__.deleteButtonDOMs !== undefined) {
        Array.prototype.forEach.call(_util_doms__WEBPACK_IMPORTED_MODULE_0__.deleteButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_2__.deleteProblem)(event.target.dataset.id);
            await (0,_view_view__WEBPACK_IMPORTED_MODULE_3__.renderAll)();
        });
    }

    if (_util_doms__WEBPACK_IMPORTED_MODULE_0__.resetButtonDOMs !== undefined) {
        Array.prototype.forEach.call(_util_doms__WEBPACK_IMPORTED_MODULE_0__.resetButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_2__.resetProblem)(event.target.dataset.id);
            await (0,_view_view__WEBPACK_IMPORTED_MODULE_3__.renderAll)();
        });
    }

    if (_util_doms__WEBPACK_IMPORTED_MODULE_0__.undoButtonDOMs !== undefined) {
        Array.prototype.forEach.call(_util_doms__WEBPACK_IMPORTED_MODULE_0__.undoButtonDOMs, (btn) => btn.onclick = async () => {
            hide_all_tooltips();
            await (0,_service_operationHistoryService__WEBPACK_IMPORTED_MODULE_4__.undoLatestOperation)();
            await (0,_view_view__WEBPACK_IMPORTED_MODULE_3__.renderAll)();
        });
    }
}

/***/ }),

/***/ "./src/popup/popup.js":
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _view_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/view.js */ "./src/popup/view/view.js");



console.log("Hello Leetcode-Mastery-Scheduler!");
await (0,_view_view_js__WEBPACK_IMPORTED_MODULE_1__.renderAll)();
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/popup/script/submission.js":
/*!****************************************!*\
  !*** ./src/popup/script/submission.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRecordButton: () => (/* binding */ addRecordButton),
/* harmony export */   handleFeedbackSubmission: () => (/* binding */ handleFeedbackSubmission),
/* harmony export */   submissionListener: () => (/* binding */ submissionListener)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils */ "./src/popup/util/utils.js");
/* harmony import */ var _service_problemService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/problemService */ "./src/popup/service/problemService.js");
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/problem */ "./src/popup/entity/problem.js");
/* harmony import */ var _util_fsrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/fsrs */ "./src/popup/util/fsrs.js");




/* 
    monitorSubmissionResult will repeateadly check for the submission result.
*/
const monitorSubmissionResult = () => {

    let submissionResult;
    let maxRetry = 10;
    const retryInterval = 1000;

    const functionId = setInterval(async () => {

        if (maxRetry <= 0) {
            clearInterval(functionId);
            return;
        }

        submissionResult = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.getSubmissionResult)();

        if (submissionResult === undefined || submissionResult.length === 0) {
            maxRetry--;
            return;
        }

        clearInterval(functionId);
        let isSuccess = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isSubmissionSuccess)(submissionResult);

        if (!isSuccess) return;

        const { problemIndex, problemName, problemLevel, problemUrl } = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getCurrentProblemInfoFromLeetCode)();
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.syncProblems)();   // prior to fetch local problem data, sync local problem data with cloud
        const problems = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getAllProblems)();
        let problem = problems[problemIndex];
        
        if (problem && problem.isDeleted !== true) {
            const reviewNeeded = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.needReview)(problem);
            if (reviewNeeded) {
                await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)((0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.updateProblemUponSuccessSubmission)(problem));
            }
        } else {
            problem = new _entity_problem__WEBPACK_IMPORTED_MODULE_2__.Problem(problemIndex, problemName, problemLevel, problemUrl, Date.now(), (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.getDifficultyBasedSteps)(problemLevel)[0], Date.now());
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)(problem);
        }
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.syncProblems)(); // after problem updated, sync to cloud

        console.log("Submission successfully tracked!");

    }, retryInterval)
};

const submissionListener = (event) => {

    const element = event.target;
    
    const filterConditions = [
        (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isSubmitButton)(element),
        element.parentElement && (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isSubmitButton)(element.parentElement),
        element.parentElement && element.parentElement.parentElement && (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isSubmitButton)(element.parentElement.parentElement),
    ]

    const isSubmission = filterConditions.reduce((prev, curr) => prev || curr);

    if (isSubmission) {
        monitorSubmissionResult();
    }

};



const addRecordButton = () => {
    // 添加按钮样式
    const style = document.createElement('style');
    style.textContent = `
        .Leetcode-Mastery-Scheduler-record-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(37, 99, 235, 0.2);
            transition: all 0.2s ease;
            z-index: 9999;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
    `;
    document.head.appendChild(style);

    // 创建按钮
    const button = document.createElement('button');
    button.className = 'Leetcode-Mastery-Scheduler-record-btn';
    button.textContent = '记录难度';
    
    // 添加点击事件
    button.addEventListener('click', async () => {
        const result = await handleFeedbackSubmission();
        if (result) {
            console.log("Submission successfully tracked!");
            console.log("难度记录成功！");
        }
    });

    // 添加到页面
    document.body.appendChild(button);
};


// 抽取成通用的处理函数
async function handleFeedbackSubmission(problem = null) {
    try {
        // 显示难度反馈弹窗
        const feedback = await showDifficultyFeedbackDialog().catch(error => {
            console.log(error);  // "用户取消评分"
            return null;  // 返回 null 表示用户取消
        });

        // 如果用户取消，直接返回
        if (!feedback) {
            return null;
        }

        // 如果没有传入 problem，说明是新提交，需要获取题目信息
        if (!problem) {
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.syncProblems)();   // 同步云端数据
            const { problemIndex, problemName, problemLevel, problemUrl } = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getCurrentProblemInfoFromLeetCode)();
            const problems = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getAllProblems)();
            problem = problems[problemIndex];
            
            if (problem && problem.isDeleted !== true) {
                problem = (0,_util_fsrs__WEBPACK_IMPORTED_MODULE_3__.updateProblemWithFSRS)(problem, feedback);
                await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)((0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.updateProblemUponSuccessSubmission)(problem));
            } else {
                problem = new _entity_problem__WEBPACK_IMPORTED_MODULE_2__.Problem(problemIndex, problemName, problemLevel, problemUrl, Date.now(), (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.getDifficultyBasedSteps)(problemLevel)[0], Date.now());
                problem = (0,_util_fsrs__WEBPACK_IMPORTED_MODULE_3__.updateProblemWithFSRS)(problem, feedback);
                await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)(problem);
            }
        } else {
            // 如果传入了 problem，说明是复习
            problem = (0,_util_fsrs__WEBPACK_IMPORTED_MODULE_3__.updateProblemWithFSRS)(problem, feedback);
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)(problem);
        }

        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.syncProblems)(); // 同步到云端
        console.log("提交成功！");
        return problem;
    } catch (error) {
        console.error("提交时出错：", error);
        return null;
    }
}



// 6. 显示评分对话框
const showDifficultyFeedbackDialog = () => {
    return new Promise((resolve) => {
        addDialogStyles();

        const overlay = document.createElement('div');
        overlay.className = 'fsrs-modal-overlay';

        const dialog = document.createElement('div');
        dialog.className = 'feedback-dialog';
        dialog.innerHTML = `
            <button class="close-button">&times;</button>
            <h3>这道题对你来说难度如何？</h3>
            <div class="quality-buttons">
                <button data-quality="1">完全不会</button>
                <button data-quality="2">有点难</button>
                <button data-quality="3">正常</button>
                <button data-quality="4">简单</button>
            </div>
        `;
        // 点击遮罩层关闭
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
                resolve(null);
            }
        });

        // 单独设置关闭按钮的事件
        const closeButton = dialog.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            overlay.remove();
            resolve(null);
        });

        // 只为难度按钮设置事件
        dialog.querySelectorAll('.quality-buttons button').forEach(button => {
            button.addEventListener('click', () => {
                const quality = parseInt(button.dataset.quality);
                resolve({ quality });
                overlay.remove();
            });
        });

        

        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
    });
};

// 7. 添加样式
const addDialogStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .fsrs-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            backdrop-filter: blur(2px);
        }

        .feedback-dialog {
            background: #ffffff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            min-width: 320px;
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .close-button {
            float: right;           /* 使用浮动靠右 */
            margin: -12px -12px 0 0;  /* 调整位置，抵消父元素的 padding */
            background: none;
            border: none;
            font-size: 24px;
            color: #666;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s;
        }

        .close-button:hover {
            background: #f3f4f6;
            color: #1f2937;
        }

        .feedback-dialog h3 {
            color: #2c3e50;
            font-size: 18px;
            margin: 0 0 20px 0;  /* 添加底部间距 */
            text-align: center;
            font-weight: 600;
            clear: both;           /* 清除浮动 */
        }

        .quality-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .quality-buttons button {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            background: #f8f9fa;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 15px;
            color: #495057;
            border: 1px solid #e9ecef;
        }

        .quality-buttons button:hover {
            background: #2563eb;
            color: white;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
        }

        .quality-buttons button:nth-child(1) { border-left: 4px solid #dc2626; }
        .quality-buttons button:nth-child(2) { border-left: 4px solid #ea580c; }
        .quality-buttons button:nth-child(3) { border-left: 4px solid #16a34a; }
        .quality-buttons button:nth-child(4) { border-left: 4px solid #2563eb; }

        .quality-buttons button:nth-child(1):hover { background: #dc2626; }
        .quality-buttons button:nth-child(2):hover { background: #ea580c; }
        .quality-buttons button:nth-child(3):hover { background: #16a34a; }
        .quality-buttons button:nth-child(4):hover { background: #2563eb; }
    `;
    document.head.appendChild(style);
};

/***/ }),

/***/ "./src/popup/service/configService.js":
/*!********************************************!*\
  !*** ./src/popup/service/configService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/popup/service/modeService.js":
/*!******************************************!*\
  !*** ./src/popup/service/modeService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInCnMode: () => (/* binding */ isInCnMode),
/* harmony export */   toggleMode: () => (/* binding */ toggleMode)
/* harmony export */ });
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/keys */ "./src/popup/util/keys.js");



const isInCnMode = async () => {
    let cnMode = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_1__.CN_MODE);
    console.log(`current cnMode is ${cnMode}`);
    if (cnMode === undefined) {
        await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_1__.CN_MODE, false);
        cnMode = false;
    }
    return cnMode;
}

const toggleMode = async () => {
    const cnMode = await isInCnMode();
    console.log(`got current cnMode before toggle}`);
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_1__.CN_MODE, !cnMode);
    console.log("cnMode toggled");
}

/***/ }),

/***/ "./src/popup/service/operationHistoryService.js":
/*!******************************************************!*\
  !*** ./src/popup/service/operationHistoryService.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewOperationHistory: () => (/* binding */ addNewOperationHistory),
/* harmony export */   hasOperationHistory: () => (/* binding */ hasOperationHistory),
/* harmony export */   popLatestOperationHistory: () => (/* binding */ popLatestOperationHistory),
/* harmony export */   undoLatestOperation: () => (/* binding */ undoLatestOperation)
/* harmony export */ });
/* harmony import */ var _entity_operationHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/operationHistory */ "./src/popup/entity/operationHistory.js");
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modeService */ "./src/popup/service/modeService.js");
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/keys */ "./src/popup/util/keys.js");
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _problemService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./problemService */ "./src/popup/service/problemService.js");
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entity/problem */ "./src/popup/entity/problem.js");







const CACHE_SIZE = 10;

const addNewOperationHistory = async (before, type, time) => {
    const snapShot = (0,_entity_problem__WEBPACK_IMPORTED_MODULE_5__.copy)(before);
    snapShot.isDeleted = false;
    const newOperationHistory = new _entity_operationHistory__WEBPACK_IMPORTED_MODULE_0__.OperationHistory(snapShot, await (0,_modeService__WEBPACK_IMPORTED_MODULE_1__.isInCnMode)(), type, time);
    let opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY);
    if (opsHistory === undefined) {
        opsHistory = [];
    }
    if (opsHistory.length === CACHE_SIZE) {
        opsHistory.shift();
    }
    opsHistory.push(newOperationHistory);
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY, opsHistory);
}

const popLatestOperationHistory = async () => {
    const opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY);
    if (opsHistory === undefined || opsHistory.length === 0) {
        return undefined;
    }

    const latestOpsHistory = opsHistory.pop();
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY, opsHistory);
    return latestOpsHistory;
}

const undoLatestOperation = async () => {
    const operationHistory = await popLatestOperationHistory();
    if (operationHistory === undefined) {
        return;
    }
    const { before: problemBefore, isInCnMode } = operationHistory;
    problemBefore.modificationTime = Date.now();    // need to update the mod time to make this latest change to override cloud data

    const problems = await (0,_problemService__WEBPACK_IMPORTED_MODULE_4__.getProblemsByMode)(isInCnMode);
    problems[problemBefore.index] = problemBefore;
    await (0,_problemService__WEBPACK_IMPORTED_MODULE_4__.setProblemsByMode)(problems, isInCnMode);
}

const hasOperationHistory = async () => {
    const opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY);
    return opsHistory !== undefined && opsHistory.length > 0;
}

/***/ }),

/***/ "./src/popup/service/problemService.js":
/*!*********************************************!*\
  !*** ./src/popup/service/problemService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOrUpdateProblem: () => (/* binding */ createOrUpdateProblem),
/* harmony export */   deleteProblem: () => (/* binding */ deleteProblem),
/* harmony export */   getAllProblems: () => (/* binding */ getAllProblems),
/* harmony export */   getAllProblemsInCloud: () => (/* binding */ getAllProblemsInCloud),
/* harmony export */   getCurrentProblemInfoFromLeetCode: () => (/* binding */ getCurrentProblemInfoFromLeetCode),
/* harmony export */   getProblemsByMode: () => (/* binding */ getProblemsByMode),
/* harmony export */   markProblemAsMastered: () => (/* binding */ markProblemAsMastered),
/* harmony export */   resetProblem: () => (/* binding */ resetProblem),
/* harmony export */   setProblems: () => (/* binding */ setProblems),
/* harmony export */   setProblemsByMode: () => (/* binding */ setProblemsByMode),
/* harmony export */   setProblemsToCloud: () => (/* binding */ setProblemsToCloud),
/* harmony export */   syncProblems: () => (/* binding */ syncProblems)
/* harmony export */ });
/* harmony import */ var _delegate_leetCodeDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegate/leetCodeDelegate */ "./src/popup/delegate/leetCodeDelegate.js");
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _operationHistoryService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operationHistoryService */ "./src/popup/service/operationHistoryService.js");
/* harmony import */ var _entity_operationHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/operationHistory */ "./src/popup/entity/operationHistory.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/constants */ "./src/popup/util/constants.js");
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/keys */ "./src/popup/util/keys.js");
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modeService */ "./src/popup/service/modeService.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/utils */ "./src/popup/util/utils.js");
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../delegate/cloudStorageDelegate */ "./src/popup/delegate/cloudStorageDelegate.js");
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entity/problem */ "./src/popup/entity/problem.js");












const getAllProblems = async () => {
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const queryKey = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    let problems = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageData)(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getAllProblemsInCloud = async () => {
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const queryKey = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    let problems = await _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_9__["default"].get(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getProblemsByMode = async (useCnMode) => {
    const queryKey = useCnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    let problems = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageData)(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getCurrentProblemInfoFromLeetCode = async () => {
    return await (0,_delegate_leetCodeDelegate__WEBPACK_IMPORTED_MODULE_0__.getProblemInfo)();
}

const setProblems = async (problems) => {
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__.setLocalStorageData)(key, problems);
}

const setProblemsToCloud = async (problems) => {
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    await _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_9__["default"].set(key, problems);
}

const setProblemsByMode = async (problems, useCnMode) => {
    const key = useCnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__.setLocalStorageData)(key, problems);
}

const createOrUpdateProblem = async (problem) => {
    problem.modificationTime = Date.now();
    const problems = await getAllProblems();
    problems[problem.index] = problem;
    await setProblems(problems);
}

const markProblemAsMastered = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    await (0,_operationHistoryService__WEBPACK_IMPORTED_MODULE_2__.addNewOperationHistory)(problem, _entity_operationHistory__WEBPACK_IMPORTED_MODULE_3__.OPS_TYPE.MASTER, Date.now());

    problem.proficiency = _util_constants__WEBPACK_IMPORTED_MODULE_4__.forggettingCurve.length;
    problem.modificationTime = Date.now();

    problems[problemId] = problem;

    await setProblems(problems);
};

const deleteProblem = async (problemId) => {

    let problems = await getAllProblems();
    const problem = problems[problemId];
    
    // soft delete
    if (problem) {
        problem.isDeleted = true;
        problem.modificationTime = Date.now();
        await (0,_operationHistoryService__WEBPACK_IMPORTED_MODULE_2__.addNewOperationHistory)(problem, _entity_operationHistory__WEBPACK_IMPORTED_MODULE_3__.OPS_TYPE.DELETE, Date.now());
        problems[problemId] = problem;
        await setProblems(problems);
    }
};

const resetProblem = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    problem.proficiency = 0;
    problem.submissionTime = Date.now() - 24 * 60 * 60 * 1000;
    problem.modificationTime = Date.now();

    await (0,_operationHistoryService__WEBPACK_IMPORTED_MODULE_2__.addNewOperationHistory)(problem, _entity_operationHistory__WEBPACK_IMPORTED_MODULE_3__.OPS_TYPE.RESET, Date.now());

    problems[problemId] = problem;

    await setProblems(problems);
};

const syncProblems = async () => {
    if (!_store__WEBPACK_IMPORTED_MODULE_7__.store.isCloudSyncEnabled) return;
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    await (0,_util_utils__WEBPACK_IMPORTED_MODULE_8__.syncLocalAndCloudStorage)(key, _util_utils__WEBPACK_IMPORTED_MODULE_8__.mergeProblems); 
}

/***/ }),

/***/ "./src/popup/store.js":
/*!****************************!*\
  !*** ./src/popup/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/popup/util/fsrs.js":
/*!********************************!*\
  !*** ./src/popup/util/fsrs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateNextReview: () => (/* binding */ calculateNextReview),
/* harmony export */   updateProblemWithFSRS: () => (/* binding */ updateProblemWithFSRS)
/* harmony export */ });
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-fsrs */ "./node_modules/ts-fsrs/dist/index.mjs");


// 1. 创建自定义参数
const params = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.generatorParameters)({
    request_retention: 0.9,          // 期望记忆保持率 90%
    maximum_interval: 365,           // 最大间隔天数
    enable_fuzz: false,              // 禁用时间模糊化
    enable_short_term: false          // 启用短期记忆影响
});

// 2. 创建 FSRS 实例
const fsrs = new ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.FSRS(params);

// 3. 评分映射（4个等级）
const qualityToRating = (quality) => {
    switch(quality) {
        case 1: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Again;  // 完全不会
        case 2: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Hard;   // 有点难
        case 3: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Good;   // 正常
        case 4: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Easy;   // 简单
        default: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Good;
    }
};

// 4. 计算下次复习时间
const calculateNextReview = (problem, feedback) => {
    try {
        const now = new Date();

        // 如果没有 fsrsState，创建一个默认的
        if (!problem.fsrsState) {
            problem.fsrsState = {
                difficulty: null,
                quality: null,
                lastReview: problem.submissionTime || now.getTime(),
                nextReview: null,
                reviewCount: 0,
                stability: 0,
                state: 'New',
                lapses: 0
            };
        }

        const lastReview = problem.fsrsState.lastReview 
            ? new Date(problem.fsrsState.lastReview)
            : new Date(problem.submissionTime || now.getTime());

        let card = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.createEmptyCard)(lastReview);
        
        if (problem.fsrsState.state !== 'New') {
            card = {
                ...card,
                state: problem.fsrsState.state,
                stability: problem.fsrsState.stability || 0,
                difficulty: problem.fsrsState.difficulty || 0,
                reps: problem.fsrsState.reviewCount || 0,
                lapses: problem.fsrsState.lapses || 0,
                // 添加时间相关字段
                elapsed_days: problem.fsrsState.lastReview 
                    ? (now - new Date(problem.fsrsState.lastReview)) / (24 * 60 * 60 * 1000)
                    : 0,
                scheduled_days: problem.fsrsState.nextReview 
                    ? (new Date(problem.fsrsState.nextReview) - new Date(problem.fsrsState.lastReview)) / (24 * 60 * 60 * 1000)
                    : 0
            };
        }
        
        const rating = qualityToRating(feedback.quality);
        const scheduling_cards = fsrs.repeat(card, now);
        const result = scheduling_cards[rating];

        if (!result || !result.card) {
            console.error('FSRS calculation failed:', result);
            // 默认间隔
            const defaultDays = {
                [ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Again]: 1,
                [ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Hard]: 3,
                [ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Good]: 7,
                [ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Easy]: 14
            }[rating] || 1;

            return {
                nextReview: now.getTime() + (defaultDays * 24 * 60 * 60 * 1000),
                stability: card.stability,
                difficulty: card.difficulty,
                state: card.state,
                reps: card.reps + 1,
                lapses: card.lapses
            };
        }

        // 确保间隔至少为1天
        const nextReviewTime = Math.max(
            result.card.due.getTime(),
            now.getTime() + (24 * 60 * 60 * 1000)
        );

        return {
            nextReview: nextReviewTime,
            stability: result.card.stability,
            difficulty: result.card.difficulty,
            state: result.card.state,
            reps: result.card.reps,
            lapses: result.card.lapses
        };
    } catch (error) {
        console.error('Error in calculateNextReview:', error);
        return {
            nextReview: now.getTime() + (24 * 60 * 60 * 1000),
            stability: problem.fsrsState.stability || 0,
            difficulty: problem.fsrsState.difficulty || 0,
            state: problem.fsrsState.state || 'New',
            reps: (problem.fsrsState.reviewCount || 0) + 1,
            lapses: problem.fsrsState.lapses || 0
        };
    }
};

// 5. 更新问题状态
const updateProblemWithFSRS = (problem, feedback) => {
    const now = Date.now();
    const fsrsResult = calculateNextReview(problem, feedback);

    problem.fsrsState = {
        ...problem.fsrsState,
        difficulty: fsrsResult.difficulty,
        stability: fsrsResult.stability,
        state: fsrsResult.state,
        lastReview: now,
        nextReview: fsrsResult.nextReview,
        reviewCount: fsrsResult.reps,
        lapses: fsrsResult.lapses,
        quality: feedback.quality
    };

    problem.modificationTime = now;
    return problem;
};


/***/ }),

/***/ "./src/popup/util/keys.js":
/*!********************************!*\
  !*** ./src/popup/util/keys.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/popup/view/view.js":
/*!********************************!*\
  !*** ./src/popup/view/view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAll: () => (/* binding */ renderAll),
/* harmony export */   renderCompletedTableContent: () => (/* binding */ renderCompletedTableContent),
/* harmony export */   renderReviewTableContent: () => (/* binding */ renderReviewTableContent),
/* harmony export */   renderScheduledTableContent: () => (/* binding */ renderScheduledTableContent),
/* harmony export */   renderSiteMode: () => (/* binding */ renderSiteMode),
/* harmony export */   renderUndoButton: () => (/* binding */ renderUndoButton)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _service_modeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/modeService */ "./src/popup/service/modeService.js");
/* harmony import */ var _service_problemService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/problemService */ "./src/popup/service/problemService.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/constants */ "./src/popup/util/constants.js");
/* harmony import */ var _util_doms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/doms */ "./src/popup/util/doms.js");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/utils */ "./src/popup/util/utils.js");
/* harmony import */ var _handler_handlerRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../handler/handlerRegister */ "./src/popup/handler/handlerRegister.js");
/* harmony import */ var _service_operationHistoryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/operationHistoryService */ "./src/popup/service/operationHistoryService.js");
/* harmony import */ var _service_configService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/configService */ "./src/popup/service/configService.js");










/*
    Tag for problem records
*/
const getProblemUrlCell = (problem, width) => {
    const levelColor = (0,_util_utils__WEBPACK_IMPORTED_MODULE_5__.getLevelColor)(problem.level);
    return `<td style="width: ${width || 45}%;  min-width: 60px; max-width: 0;">
        <a target="_blank" 
           href=${problem.url}
           data-bs-toggle="tooltip" 
           data-bs-placement="top" 
           title="${problem.name} (${problem.level})"
           style="text-decoration: none; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            <small style="color: ${levelColor}; font-size: 0.95em;">${problem.name}</small>
        </a>
    </td>`;
};

// const getProblemLevelCell = (problem, width) => `<td style="width: ${width | 12}%;"><small>${decorateProblemLevel(problem.level)}</small></td>`;

// 新增：生成可检索性单元格的函数
const getRetrievabilityCell = (problem) => {
    const retrievability = (0,_util_utils__WEBPACK_IMPORTED_MODULE_5__.getCurrentRetrievability)(problem);
    const probability = (retrievability * 100).toFixed(1); // 保留一位小数
    const exactValue = retrievability.toFixed(5);  // 保留五位小数
    
    // 根据概率设置不同的样式
    let style;
    if (retrievability >= 0.8) {
        style = 'text-success';  // 绿色
    } else if (retrievability >= 0.5) {
        style = 'text-warning';  // 橙色
    } else {
        style = 'text-danger';   // 红色
    }

    return `\
    <td style="width: 10%; vertical-align: middle; text-align: center;">\
        <div class="memory-indicator d-flex justify-content-center align-items-center" 
             data-bs-toggle="tooltip" 
             data-bs-placement="top" 
             title="Recall Probability: ${exactValue}">\
            <small class="${style}">${probability}%</small>\
        </div>\
    </td>\
    `;
}

const getCheckButtonTag = (problem) => `<small class="fa-regular fa-square-check fa-2xs mt-2 mb-0 check-btn-mark"\ 
                                            data-bs-toggle="tooltip" data-bs-title="✅ Mark as mastered" data-bs-placement="left"\
                                            style="color: #d2691e;" data-id=${problem.index}> </small>`;

const getDeleteButtonTag = (problem) => `<small class="fa-regular fa-square-minus fa-2xs mt-2 mb-0 delete-btn-mark"\ 
                                            data-bs-toggle="tooltip" data-bs-title="⛔ Delete this record" data-bs-placement="left"\
                                            style="color: red;" data-id=${problem.index}> </small>`;

const getResetButtonTag = (problem) => `<small class="fa-solid fa-arrows-rotate fa-2xs mt-2 mb-0 reset-btn-mark" \
                                            data-bs-toggle="tooltip" data-bs-title="🔄 Reset progress" data-bs-placement="left"\
                                            style="color: #d2691e;" data-id=${problem.index}> </small>`;

const createReviewProblemRecord = (problem) => {
    const htmlTag =
        `\
    <tr>\
        ${getProblemUrlCell(problem)}\
        <td><small>${(0,_util_utils__WEBPACK_IMPORTED_MODULE_5__.getDelayedHours)(problem)} hour(s)</small></td>\
        ${getRetrievabilityCell(problem)}\
        <td style="text-align: center; vertical-align:middle">\
            ${getCheckButtonTag(problem)}\
            ${getResetButtonTag(problem)}\
            ${getDeleteButtonTag(problem)}\
        </td>\
    </tr>\
    `;
    return htmlTag;
    ;
}

const createScheduleProblemRecord = (problem) => {
    const nextReviewDate = (0,_util_utils__WEBPACK_IMPORTED_MODULE_5__.getNextReviewTime)(problem);
    const htmlTag =
        `\
    <tr style="vertical-align:middle">\
        ${getProblemUrlCell(problem)}\
        <td style="text-align: center; width: 25%; padding: 0;"><small data-bs-toggle="tooltip" data-bs-placement="top" title="${formatFullDate(nextReviewDate)}">${formatDateTime(nextReviewDate)}</small></td>\
        ${getRetrievabilityCell(problem)}\
        <td style="width: 15%; text-align: center; vertical-align:middle">\
            ${getDeleteButtonTag(problem)}\
        </td>\
    </tr>\
    `;
    return htmlTag;
}

// 添加一个日期格式化辅助函数
const formatDateTime = (date) => {
    const pad = (n) => n < 10 ? `0${n}` : n;
    return `${_util_constants__WEBPACK_IMPORTED_MODULE_3__.months[date.getMonth()]} ${date.getDate()}`;
}
// 添加一个完整日期格式化函数
const formatFullDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;  // getMonth() 返回 0-11
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // 补零函数
    const pad = (n) => n < 10 ? `0${n}` : n;
    
    return `${year}/${pad(month)}/${pad(day)} ${pad(hours)}:${pad(minutes)}`;
}

const createCompletedProblemRecord = (problem) => {
    const htmlTag =
        `\
    <tr>\
        ${getProblemUrlCell(problem, 35)}\
        ${getProblemLevelCell(problem)}\
        <td style="text-align: center; vertical-align:middle">\
            ${getResetButtonTag(problem)}\
            ${getDeleteButtonTag(problem)}\
        </td>\
    </tr>\
    `;
    return htmlTag;
    ;
}

const renderReviewTableContent = (problems, page) => {
    /* validation */
    console.log(_store__WEBPACK_IMPORTED_MODULE_0__.store.toReviewMaxPage);
    if (page > _store__WEBPACK_IMPORTED_MODULE_0__.store.toReviewMaxPage || page < 1) {
        _util_doms__WEBPACK_IMPORTED_MODULE_4__.input0DOM.classList.add("is-invalid");
        return;
    }
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.input0DOM.classList.remove("is-invalid");

    _store__WEBPACK_IMPORTED_MODULE_0__.store.toReviewPage = page;

    /* update pagination elements */
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.input0DOM.value = page;
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.inputLabel0DOM.innerText = `/${_store__WEBPACK_IMPORTED_MODULE_0__.store.toReviewMaxPage}`;

    if (page === 1) _util_doms__WEBPACK_IMPORTED_MODULE_4__.prevButton0DOM.setAttribute("disabled", "disabled");
    if (page !== 1) _util_doms__WEBPACK_IMPORTED_MODULE_4__.prevButton0DOM.removeAttribute("disabled");
    if (page === _store__WEBPACK_IMPORTED_MODULE_0__.store.toReviewMaxPage) _util_doms__WEBPACK_IMPORTED_MODULE_4__.nextButton0DOM.setAttribute("disabled", "disabled");
    if (page !== _store__WEBPACK_IMPORTED_MODULE_0__.store.toReviewMaxPage) _util_doms__WEBPACK_IMPORTED_MODULE_4__.nextButton0DOM.removeAttribute("disabled");

    let content_html =
        '\
    <thead>\
        <tr style="font-size: smaller">\
            <th class="text-center">Problem</th>\
            <th class="text-center">Delay</th>\
            <th class="text-center">Recall</th>\
            <th class="text-center">Operation</th>\
        </tr>\
    </thead>\
    <tbody>\
    ';

    problems = problems.slice((page - 1) * _util_constants__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE, page * _util_constants__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE);

    let keys = Object.keys(problems);
    for (const i of keys) {
        content_html += createReviewProblemRecord(problems[i]) + '\n';
    }
    content_html += `</tbody>`

    _util_doms__WEBPACK_IMPORTED_MODULE_4__.needReviewTableDOM.innerHTML = content_html;
}

const renderScheduledTableContent = (problems, page) => {
    /* validation */
    if (page > _store__WEBPACK_IMPORTED_MODULE_0__.store.scheduledMaxPage || page < 1) {
        _util_doms__WEBPACK_IMPORTED_MODULE_4__.input1DOM.classList.add("is-invalid");
        return;
    }
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.input1DOM.classList.remove("is-invalid");

    _store__WEBPACK_IMPORTED_MODULE_0__.store.scheduledPage = page;

    /* update pagination elements */
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.input1DOM.value = page;
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.inputLabel1DOM.innerText = `/${_store__WEBPACK_IMPORTED_MODULE_0__.store.scheduledMaxPage}`;

    if (page === 1) _util_doms__WEBPACK_IMPORTED_MODULE_4__.prevButton1DOM.setAttribute("disabled", "disabled");
    if (page !== 1) _util_doms__WEBPACK_IMPORTED_MODULE_4__.prevButton1DOM.removeAttribute("disabled");
    if (page === _store__WEBPACK_IMPORTED_MODULE_0__.store.scheduledMaxPage) _util_doms__WEBPACK_IMPORTED_MODULE_4__.nextButton1DOM.setAttribute("disabled", "disabled");
    if (page !== _store__WEBPACK_IMPORTED_MODULE_0__.store.scheduledMaxPage) _util_doms__WEBPACK_IMPORTED_MODULE_4__.nextButton1DOM.removeAttribute("disabled");


    let content_html =
        '\
    <thead>\
        <tr style="font-size: smaller">\
            <th class="text-center" style="width: 40%">Problem</th>\
            <th class="text-center" style="width: 25%">Review</th>\
            <th class="text-center" style="width: 25%">Recall</th>\
            <th class="text-center" style="width: 10%"></th>\
        </tr>\
    </thead>\
    <tbody>\
    ';

    problems = problems.slice((page - 1) * _util_constants__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE, page * _util_constants__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE);

    let keys = Object.keys(problems);

    for (const i of keys) {
        content_html += createScheduleProblemRecord(problems[i]) + '\n';
    }

    content_html += `</tbody>`

    _util_doms__WEBPACK_IMPORTED_MODULE_4__.noReviewTableDOM.innerHTML = content_html;
}

const renderCompletedTableContent = (problems, page) => {

    /* validation */
    if (page > _store__WEBPACK_IMPORTED_MODULE_0__.store.completedMaxPage || page < 1) {
        _util_doms__WEBPACK_IMPORTED_MODULE_4__.input2DOM.classList.add("is-invalid");
        return;
    }
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.input2DOM.classList.remove("is-invalid");

    _store__WEBPACK_IMPORTED_MODULE_0__.store.completedPage = page;

    /* update pagination elements */
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.input2DOM.value = page;
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.inputLabel2DOM.innerText = `/${_store__WEBPACK_IMPORTED_MODULE_0__.store.completedMaxPage}`;

    if (page === 1) _util_doms__WEBPACK_IMPORTED_MODULE_4__.prevButton2DOM.setAttribute("disabled", "disabled");
    if (page !== 1) _util_doms__WEBPACK_IMPORTED_MODULE_4__.prevButton2DOM.removeAttribute("disabled");
    if (page === _store__WEBPACK_IMPORTED_MODULE_0__.store.completedMaxPage) _util_doms__WEBPACK_IMPORTED_MODULE_4__.nextButton2DOM.setAttribute("disabled", "disabled");
    if (page !== _store__WEBPACK_IMPORTED_MODULE_0__.store.completedMaxPage) _util_doms__WEBPACK_IMPORTED_MODULE_4__.nextButton2DOM.removeAttribute("disabled");

    let content_html =
        '\
    <thead>\
        <tr style="font-size: smaller">\
            <th>Problem</th>\
            <th>Level</th>\
            <th>Operation</th>\
        </tr>\
    </thead>\
    <tbody>\
    ';

    problems = problems.slice((page - 1) * _util_constants__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE, page * _util_constants__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE);

    let keys = Object.keys(problems);
    for (const i of keys) {
        content_html += createCompletedProblemRecord(problems[i]) + '\n';
    }

    content_html += `</tbody>`
    _util_doms__WEBPACK_IMPORTED_MODULE_4__.completedTableDOM.innerHTML = content_html;
}

const renderSiteMode = async () => {
    let cnMode = await (0,_service_modeService__WEBPACK_IMPORTED_MODULE_1__.isInCnMode)();
    if (cnMode) {
        _util_doms__WEBPACK_IMPORTED_MODULE_4__.switchButtonDOM.setAttribute("checked", "checked");
        _util_doms__WEBPACK_IMPORTED_MODULE_4__.siteLabelDOM.innerHTML = _util_constants__WEBPACK_IMPORTED_MODULE_3__.CN_LABLE;
    } else {
        _util_doms__WEBPACK_IMPORTED_MODULE_4__.switchButtonDOM.removeAttribute("checked");
        _util_doms__WEBPACK_IMPORTED_MODULE_4__.siteLabelDOM.innerHTML = _util_constants__WEBPACK_IMPORTED_MODULE_3__.GL_LABLE;
    }
}

const renderUndoButton = async () => {
    if (await (0,_service_operationHistoryService__WEBPACK_IMPORTED_MODULE_7__.hasOperationHistory)()) {
        Array.prototype.forEach.call(_util_doms__WEBPACK_IMPORTED_MODULE_4__.undoButtonDOMs, btn => btn.removeAttribute("disabled"));
    } else {
        Array.prototype.forEach.call(_util_doms__WEBPACK_IMPORTED_MODULE_4__.undoButtonDOMs, btn => btn.setAttribute("disabled", "disabled"));
    }
} 

const renderAll = async () => {
    await (0,_service_configService__WEBPACK_IMPORTED_MODULE_8__.loadConfigs)();
    await renderSiteMode();
    await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_2__.syncProblems)();

    const problems = Object.values(await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_2__.getAllProblems)()).filter(p => p.isDeleted !== true);
    console.log('Filtering and sorting problems...');
    
    // 过滤不同类型的问题
    _store__WEBPACK_IMPORTED_MODULE_0__.store.needReviewProblems = problems.filter(_util_utils__WEBPACK_IMPORTED_MODULE_5__.needReview);
    console.log('Need Review Problems:', {
        count: _store__WEBPACK_IMPORTED_MODULE_0__.store.needReviewProblems.length,
        problems: _store__WEBPACK_IMPORTED_MODULE_0__.store.needReviewProblems
    });

    _store__WEBPACK_IMPORTED_MODULE_0__.store.reviewScheduledProblems = problems.filter(_util_utils__WEBPACK_IMPORTED_MODULE_5__.scheduledReview);
    console.log('Scheduled Review Problems:', {
        count: _store__WEBPACK_IMPORTED_MODULE_0__.store.reviewScheduledProblems.length,
        problems: _store__WEBPACK_IMPORTED_MODULE_0__.store.reviewScheduledProblems
    });

    _store__WEBPACK_IMPORTED_MODULE_0__.store.completedProblems = problems.filter(_util_utils__WEBPACK_IMPORTED_MODULE_5__.isCompleted);
    console.log('Completed Problems:', {
        count: _store__WEBPACK_IMPORTED_MODULE_0__.store.completedProblems.length,
        problems: _store__WEBPACK_IMPORTED_MODULE_0__.store.completedProblems
    });

    // 计算页数
    _store__WEBPACK_IMPORTED_MODULE_0__.store.toReviewMaxPage = (0,_util_utils__WEBPACK_IMPORTED_MODULE_5__.calculatePageNum)(_store__WEBPACK_IMPORTED_MODULE_0__.store.needReviewProblems);
    _store__WEBPACK_IMPORTED_MODULE_0__.store.scheduledMaxPage = (0,_util_utils__WEBPACK_IMPORTED_MODULE_5__.calculatePageNum)(_store__WEBPACK_IMPORTED_MODULE_0__.store.reviewScheduledProblems);
    _store__WEBPACK_IMPORTED_MODULE_0__.store.completedMaxPage = (0,_util_utils__WEBPACK_IMPORTED_MODULE_5__.calculatePageNum)(_store__WEBPACK_IMPORTED_MODULE_0__.store.completedProblems);
    console.log('Page Counts:', {
        toReview: _store__WEBPACK_IMPORTED_MODULE_0__.store.toReviewMaxPage,
        scheduled: _store__WEBPACK_IMPORTED_MODULE_0__.store.scheduledMaxPage,
        completed: _store__WEBPACK_IMPORTED_MODULE_0__.store.completedMaxPage
    });

    // 排序
    console.log('Sorting by:', _store__WEBPACK_IMPORTED_MODULE_0__.store.problemSortBy);
    _store__WEBPACK_IMPORTED_MODULE_0__.store.needReviewProblems.sort(_store__WEBPACK_IMPORTED_MODULE_0__.store.problemSortBy);
    _store__WEBPACK_IMPORTED_MODULE_0__.store.reviewScheduledProblems.sort(_store__WEBPACK_IMPORTED_MODULE_0__.store.problemSortBy);
    _store__WEBPACK_IMPORTED_MODULE_0__.store.completedProblems.sort(_store__WEBPACK_IMPORTED_MODULE_0__.store.problemSortBy);
    
    console.log('Filtering and sorting completed.');

    // renderReviewTableContent(store.needReviewProblems, 1);
    renderScheduledTableContent(_store__WEBPACK_IMPORTED_MODULE_0__.store.reviewScheduledProblems, 1);
    // renderCompletedTableContent(store.completedProblems, 1);
    await renderUndoButton();

    (0,_handler_handlerRegister__WEBPACK_IMPORTED_MODULE_6__.registerAllHandlers)();
}


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e";

/***/ }),

/***/ "./node_modules/ts-fsrs/dist/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/ts-fsrs/dist/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractScheduler: () => (/* binding */ H),
/* harmony export */   DECAY: () => (/* binding */ R),
/* harmony export */   DefaultInitSeedStrategy: () => (/* binding */ D),
/* harmony export */   FACTOR: () => (/* binding */ $),
/* harmony export */   FSRS: () => (/* binding */ V),
/* harmony export */   FSRSAlgorithm: () => (/* binding */ Y),
/* harmony export */   FSRSVersion: () => (/* binding */ j),
/* harmony export */   GenSeedStrategyWithCardId: () => (/* binding */ Z),
/* harmony export */   Grades: () => (/* binding */ T),
/* harmony export */   Rating: () => (/* binding */ d),
/* harmony export */   State: () => (/* binding */ u),
/* harmony export */   StrategyMode: () => (/* binding */ x),
/* harmony export */   TypeConvert: () => (/* binding */ h),
/* harmony export */   clamp: () => (/* binding */ p),
/* harmony export */   createEmptyCard: () => (/* binding */ v),
/* harmony export */   dateDiffInDays: () => (/* binding */ q),
/* harmony export */   date_diff: () => (/* binding */ N),
/* harmony export */   date_scheduler: () => (/* binding */ I),
/* harmony export */   default_enable_fuzz: () => (/* binding */ G),
/* harmony export */   default_enable_short_term: () => (/* binding */ k),
/* harmony export */   default_maximum_interval: () => (/* binding */ A),
/* harmony export */   default_request_retention: () => (/* binding */ F),
/* harmony export */   default_w: () => (/* binding */ L),
/* harmony export */   fixDate: () => (/* binding */ y),
/* harmony export */   fixRating: () => (/* binding */ W),
/* harmony export */   fixState: () => (/* binding */ B),
/* harmony export */   formatDate: () => (/* binding */ C),
/* harmony export */   fsrs: () => (/* binding */ et),
/* harmony export */   generatorParameters: () => (/* binding */ M),
/* harmony export */   get_fuzz_range: () => (/* binding */ U),
/* harmony export */   show_diff_message: () => (/* binding */ z)
/* harmony export */ });
var u=(r=>(r[r.New=0]="New",r[r.Learning=1]="Learning",r[r.Review=2]="Review",r[r.Relearning=3]="Relearning",r))(u||{}),d=(r=>(r[r.Manual=0]="Manual",r[r.Again=1]="Again",r[r.Hard=2]="Hard",r[r.Good=3]="Good",r[r.Easy=4]="Easy",r))(d||{});class h{static card(t){return{...t,state:h.state(t.state),due:h.time(t.due),last_review:t.last_review?h.time(t.last_review):void 0}}static rating(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=d[`${e}${i}`];if(a===void 0)throw new Error(`Invalid rating:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid rating:[${t}]`)}static state(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=u[`${e}${i}`];if(a===void 0)throw new Error(`Invalid state:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid state:[${t}]`)}static time(t){if(typeof t=="object"&&t instanceof Date)return t;if(typeof t=="string"){const e=Date.parse(t);if(isNaN(e))throw new Error(`Invalid date:[${t}]`);return new Date(e)}else if(typeof t=="number")return new Date(t);throw new Error(`Invalid date:[${t}]`)}static review_log(t){return{...t,due:h.time(t.due),rating:h.rating(t.rating),state:h.state(t.state),review:h.time(t.review)}}}const F=.9,A=36500,L=[.40255,1.18385,3.173,15.69105,7.1949,.5345,1.4604,.0046,1.54575,.1192,1.01925,1.9395,.11,.29605,2.2698,.2315,2.9898,.51655,.6621],G=!1,k=!0,j="v4.6.0 using FSRS-5.0",M=r=>{let t=L;return r?.w&&(r.w.length===19?t=r?.w:r.w.length===17&&(t=r?.w.concat([0,0]),t[4]=+(t[5]*2+t[4]).toFixed(8),t[5]=+(Math.log(t[5]*3+1)/3).toFixed(8),t[6]=+(t[6]+.5).toFixed(8),console.debug("[FSRS V5]auto fill w to 19 length"))),{request_retention:r?.request_retention||F,maximum_interval:r?.maximum_interval||A,w:t,enable_fuzz:r?.enable_fuzz??G,enable_short_term:r?.enable_short_term??k}};function v(r,t){const e={due:r?h.time(r):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,state:u.New,last_review:void 0};return t&&typeof t=="function"?t(e):e}Date.prototype.scheduler=function(r,t){return I(this,r,t)},Date.prototype.diff=function(r,t){return N(this,r,t)},Date.prototype.format=function(){return C(this)},Date.prototype.dueFormat=function(r,t,e){return z(this,r,t,e)};function I(r,t,e){return new Date(e?y(r).getTime()+t*24*60*60*1e3:y(r).getTime()+t*60*1e3)}function N(r,t,e){if(!r||!t)throw new Error("Invalid date");const i=y(r).getTime()-y(t).getTime();let a=0;switch(e){case"days":a=Math.floor(i/(24*60*60*1e3));break;case"minutes":a=Math.floor(i/(60*1e3));break}return a}function C(r){const t=y(r),e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),s=t.getHours(),n=t.getMinutes(),l=t.getSeconds();return`${e}-${w(i)}-${w(a)} ${w(s)}:${w(n)}:${w(l)}`}function w(r){return r<10?`0${r}`:`${r}`}const S=[60,60,24,31,12],E=["second","min","hour","day","month","year"];function z(r,t,e,i=E){r=y(r),t=y(t),i.length!==E.length&&(i=E);let a=r.getTime()-t.getTime(),s;for(a/=1e3,s=0;s<S.length&&!(a<S[s]);s++)a/=S[s];return`${Math.floor(a)}${e?i[s]:""}`}function y(r){return h.time(r)}function B(r){return h.state(r)}function W(r){return h.rating(r)}const T=[d.Again,d.Hard,d.Good,d.Easy],J=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function U(r,t,e){let i=1;for(const n of J)i+=n.factor*Math.max(Math.min(r,n.end)-n.start,0);r=Math.min(r,e);let a=Math.max(2,Math.round(r-i));const s=Math.min(Math.round(r+i),e);return r>t&&(a=Math.max(a,t+1)),a=Math.min(a,s),{min_ivl:a,max_ivl:s}}function p(r,t,e){return Math.min(Math.max(r,t),e)}function q(r,t){const e=Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),i=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());return Math.floor((i-e)/864e5)}class K{c;s0;s1;s2;constructor(t){const e=Q();this.c=1,this.s0=e(" "),this.s1=e(" "),this.s2=e(" "),t==null&&(t=+new Date),this.s0-=e(t),this.s0<0&&(this.s0+=1),this.s1-=e(t),this.s1<0&&(this.s1+=1),this.s2-=e(t),this.s2<0&&(this.s2+=1)}next(){const t=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.s2=t-(this.c=t|0),this.s2}set state(t){this.c=t.c,this.s0=t.s0,this.s1=t.s1,this.s2=t.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function Q(){let r=4022871197;return function(t){t=String(t);for(let e=0;e<t.length;e++){r+=t.charCodeAt(e);let i=.02519603282416938*r;r=i>>>0,i-=r,i*=r,r=i>>>0,i-=r,r+=i*4294967296}return(r>>>0)*23283064365386963e-26}}function X(r){const t=new K(r),e=()=>t.next();return e.int32=()=>t.next()*4294967296|0,e.double=()=>e()+(e()*2097152|0)*11102230246251565e-32,e.state=()=>t.state,e.importState=i=>(t.state=i,e),e}const R=-.5,$=19/81;class Y{param;intervalModifier;_seed;constructor(t){this.param=new Proxy(M(t),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention)}get interval_modifier(){return this.intervalModifier}set seed(t){this._seed=t}calculate_interval_modifier(t){if(t<=0||t>1)throw new Error("Requested retention rate should be in the range (0,1]");return+((Math.pow(t,1/R)-1)/$).toFixed(8)}get parameters(){return this.param}set parameters(t){this.update_parameters(t)}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)&&(t.intervalModifier=t.calculate_interval_modifier(Number(a))),Reflect.set(e,i,a),!0}}}update_parameters(t){const e=M(t);for(const i in e)if(i in this.param){const a=i;this.param[a]=e[a]}}init_stability(t){return Math.max(this.param.w[t-1],.1)}init_difficulty(t){return this.constrain_difficulty(this.param.w[4]-Math.exp((t-1)*this.param.w[5])+1)}apply_fuzz(t,e){if(!this.param.enable_fuzz||t<2.5)return Math.round(t);const i=X(this._seed)(),{min_ivl:a,max_ivl:s}=U(t,e,this.param.maximum_interval);return Math.floor(i*(s-a+1)+a)}next_interval(t,e){const i=Math.min(Math.max(1,Math.round(t*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(i,e)}linear_damping(t,e){return+(t*(10-e)/9).toFixed(8)}next_difficulty(t,e){const i=-this.param.w[6]*(e-3),a=t+this.linear_damping(i,t);return this.constrain_difficulty(this.mean_reversion(this.init_difficulty(d.Easy),a))}constrain_difficulty(t){return Math.min(Math.max(+t.toFixed(8),1),10)}mean_reversion(t,e){return+(this.param.w[7]*t+(1-this.param.w[7])*e).toFixed(8)}next_recall_stability(t,e,i,a){const s=d.Hard===a?this.param.w[15]:1,n=d.Easy===a?this.param.w[16]:1;return+p(e*(1+Math.exp(this.param.w[8])*(11-t)*Math.pow(e,-this.param.w[9])*(Math.exp((1-i)*this.param.w[10])-1)*s*n),.01,36500).toFixed(8)}next_forget_stability(t,e,i){return+p(this.param.w[11]*Math.pow(t,-this.param.w[12])*(Math.pow(e+1,this.param.w[13])-1)*Math.exp((1-i)*this.param.w[14]),.01,36500).toFixed(8)}next_short_term_stability(t,e){return+p(t*Math.exp(this.param.w[17]*(e-3+this.param.w[18])),.01,36500).toFixed(8)}forgetting_curve(t,e){return+Math.pow(1+$*t/e,R).toFixed(8)}next_state(t,e,i){const{difficulty:a,stability:s}=t??{difficulty:0,stability:0};if(e<0)throw new Error(`Invalid delta_t "${e}"`);if(i<0||i>4)throw new Error(`Invalid grade "${i}"`);if(a===0&&s===0)return{difficulty:this.init_difficulty(i),stability:this.init_stability(i)};if(i===0)return{difficulty:a,stability:s};if(a<1||s<.01)throw new Error(`Invalid memory state { difficulty: ${a}, stability: ${s} }`);const n=this.forgetting_curve(e,s),l=this.next_recall_stability(a,s,n,i),o=this.next_forget_stability(a,s,n),c=this.next_short_term_stability(s,i);let f=l;if(i===1){let[_,g]=[0,0];this.param.enable_short_term&&(_=this.param.w[17],g=this.param.w[18]);const m=s/Math.exp(_*g);f=p(m,.01,o)}return e===0&&this.param.enable_short_term&&(f=c),{difficulty:this.next_difficulty(a,i),stability:f}}}function D(){const r=this.review_time.getTime(),t=this.current.reps,e=this.current.difficulty*this.current.stability;return`${r}_${t}_${e}`}function Z(r){return function(){const t=Reflect.get(this.current,r)??0,e=this.current.reps;return String(t+e||0)}}var x=(r=>(r.SCHEDULER="Scheduler",r.SEED="Seed",r))(x||{});class H{last;current;review_time;next=new Map;algorithm;initSeedStrategy;constructor(t,e,i,a={seed:D}){this.algorithm=i,this.initSeedStrategy=a.seed.bind(this),this.last=h.card(t),this.current=h.card(t),this.review_time=h.time(e),this.init()}init(){const{state:t,last_review:e}=this.current;let i=0;t!==u.New&&e&&(i=q(e,this.review_time)),this.current.last_review=this.review_time,this.current.elapsed_days=i,this.current.reps+=1,this.algorithm.seed=this.initSeedStrategy()}preview(){return{[d.Again]:this.review(d.Again),[d.Hard]:this.review(d.Hard),[d.Good]:this.review(d.Good),[d.Easy]:this.review(d.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const t of T)yield this.review(t)}review(t){const{state:e}=this.last;let i;switch(e){case u.New:i=this.newState(t);break;case u.Learning:case u.Relearning:i=this.learningState(t);break;case u.Review:i=this.reviewState(t);break}if(i)return i;throw new Error("Invalid grade")}buildLog(t){const{last_review:e,due:i,elapsed_days:a}=this.last;return{rating:t,state:this.current.state,due:e||i,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.current.elapsed_days,last_elapsed_days:a,scheduled_days:this.current.scheduled_days,review:this.review_time}}}class O extends H{newState(t){const e=this.next.get(t);if(e)return e;const i=h.card(this.current);switch(i.difficulty=this.algorithm.init_difficulty(t),i.stability=this.algorithm.init_stability(t),t){case d.Again:i.scheduled_days=0,i.due=this.review_time.scheduler(1),i.state=u.Learning;break;case d.Hard:i.scheduled_days=0,i.due=this.review_time.scheduler(5),i.state=u.Learning;break;case d.Good:i.scheduled_days=0,i.due=this.review_time.scheduler(10),i.state=u.Learning;break;case d.Easy:{const s=this.algorithm.next_interval(i.stability,this.current.elapsed_days);i.scheduled_days=s,i.due=this.review_time.scheduler(s,!0),i.state=u.Review;break}default:throw new Error("Invalid grade")}const a={card:i,log:this.buildLog(t)};return this.next.set(t,a),a}learningState(t){const e=this.next.get(t);if(e)return e;const{state:i,difficulty:a,stability:s}=this.last,n=h.card(this.current),l=this.current.elapsed_days;switch(n.difficulty=this.algorithm.next_difficulty(a,t),n.stability=this.algorithm.next_short_term_stability(s,t),t){case d.Again:{n.scheduled_days=0,n.due=this.review_time.scheduler(5,!1),n.state=i;break}case d.Hard:{n.scheduled_days=0,n.due=this.review_time.scheduler(10),n.state=i;break}case d.Good:{const c=this.algorithm.next_interval(n.stability,l);n.scheduled_days=c,n.due=this.review_time.scheduler(c,!0),n.state=u.Review;break}case d.Easy:{const c=this.algorithm.next_short_term_stability(s,d.Good),f=this.algorithm.next_interval(c,l),_=Math.max(this.algorithm.next_interval(n.stability,l),f+1);n.scheduled_days=_,n.due=this.review_time.scheduler(_,!0),n.state=u.Review;break}default:throw new Error("Invalid grade")}const o={card:n,log:this.buildLog(t)};return this.next.set(t,o),o}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:s}=this.last,n=this.algorithm.forgetting_curve(i,s),l=h.card(this.current),o=h.card(this.current),c=h.card(this.current),f=h.card(this.current);this.next_ds(l,o,c,f,a,s,n),this.next_interval(l,o,c,f,i),this.next_state(l,o,c,f),l.lapses+=1;const _={card:l,log:this.buildLog(d.Again)},g={card:o,log:super.buildLog(d.Hard)},m={card:c,log:super.buildLog(d.Good)},b={card:f,log:super.buildLog(d.Easy)};return this.next.set(d.Again,_),this.next.set(d.Hard,g),this.next.set(d.Good,m),this.next.set(d.Easy,b),this.next.get(t)}next_ds(t,e,i,a,s,n,l){t.difficulty=this.algorithm.next_difficulty(s,d.Again);const o=n/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]);t.stability=Math.min(+o.toFixed(8),this.algorithm.next_forget_stability(s,n,l)),e.difficulty=this.algorithm.next_difficulty(s,d.Hard),e.stability=this.algorithm.next_recall_stability(s,n,l,d.Hard),i.difficulty=this.algorithm.next_difficulty(s,d.Good),i.stability=this.algorithm.next_recall_stability(s,n,l,d.Good),a.difficulty=this.algorithm.next_difficulty(s,d.Easy),a.stability=this.algorithm.next_recall_stability(s,n,l,d.Easy)}next_interval(t,e,i,a,s){let n,l;n=this.algorithm.next_interval(e.stability,s),l=this.algorithm.next_interval(i.stability,s),n=Math.min(n,l),l=Math.max(l,n+1);const o=Math.max(this.algorithm.next_interval(a.stability,s),l+1);t.scheduled_days=0,t.due=this.review_time.scheduler(5),e.scheduled_days=n,e.due=this.review_time.scheduler(n,!0),i.scheduled_days=l,i.due=this.review_time.scheduler(l,!0),a.scheduled_days=o,a.due=this.review_time.scheduler(o,!0)}next_state(t,e,i,a){t.state=u.Relearning,e.state=u.Review,i.state=u.Review,a.state=u.Review}}class P extends H{newState(t){const e=this.next.get(t);if(e)return e;this.current.scheduled_days=0,this.current.elapsed_days=0;const i=h.card(this.current),a=h.card(this.current),s=h.card(this.current),n=h.card(this.current);this.init_ds(i,a,s,n);const l=0;return this.next_interval(i,a,s,n,l),this.next_state(i,a,s,n),this.update_next(i,a,s,n),this.next.get(t)}init_ds(t,e,i,a){t.difficulty=this.algorithm.init_difficulty(d.Again),t.stability=this.algorithm.init_stability(d.Again),e.difficulty=this.algorithm.init_difficulty(d.Hard),e.stability=this.algorithm.init_stability(d.Hard),i.difficulty=this.algorithm.init_difficulty(d.Good),i.stability=this.algorithm.init_stability(d.Good),a.difficulty=this.algorithm.init_difficulty(d.Easy),a.stability=this.algorithm.init_stability(d.Easy)}learningState(t){return this.reviewState(t)}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:s}=this.last,n=this.algorithm.forgetting_curve(i,s),l=h.card(this.current),o=h.card(this.current),c=h.card(this.current),f=h.card(this.current);return this.next_ds(l,o,c,f,a,s,n),this.next_interval(l,o,c,f,i),this.next_state(l,o,c,f),l.lapses+=1,this.update_next(l,o,c,f),this.next.get(t)}next_ds(t,e,i,a,s,n,l){t.difficulty=this.algorithm.next_difficulty(s,d.Again),t.stability=Math.min(n,this.algorithm.next_forget_stability(s,n,l)),e.difficulty=this.algorithm.next_difficulty(s,d.Hard),e.stability=this.algorithm.next_recall_stability(s,n,l,d.Hard),i.difficulty=this.algorithm.next_difficulty(s,d.Good),i.stability=this.algorithm.next_recall_stability(s,n,l,d.Good),a.difficulty=this.algorithm.next_difficulty(s,d.Easy),a.stability=this.algorithm.next_recall_stability(s,n,l,d.Easy)}next_interval(t,e,i,a,s){let n,l,o,c;n=this.algorithm.next_interval(t.stability,s),l=this.algorithm.next_interval(e.stability,s),o=this.algorithm.next_interval(i.stability,s),c=this.algorithm.next_interval(a.stability,s),n=Math.min(n,l),l=Math.max(l,n+1),o=Math.max(o,l+1),c=Math.max(c,o+1),t.scheduled_days=n,t.due=this.review_time.scheduler(n,!0),e.scheduled_days=l,e.due=this.review_time.scheduler(l,!0),i.scheduled_days=o,i.due=this.review_time.scheduler(o,!0),a.scheduled_days=c,a.due=this.review_time.scheduler(c,!0)}next_state(t,e,i,a){t.state=u.Review,e.state=u.Review,i.state=u.Review,a.state=u.Review}update_next(t,e,i,a){const s={card:t,log:this.buildLog(d.Again)},n={card:e,log:super.buildLog(d.Hard)},l={card:i,log:super.buildLog(d.Good)},o={card:a,log:super.buildLog(d.Easy)};this.next.set(d.Again,s),this.next.set(d.Hard,n),this.next.set(d.Good,l),this.next.set(d.Easy,o)}}class tt{fsrs;constructor(t){this.fsrs=t}replay(t,e,i){return this.fsrs.next(t,e,i)}handleManualRating(t,e,i,a,s,n,l){if(typeof e>"u")throw new Error("reschedule: state is required for manual rating");let o,c;if(e===u.New)o={rating:d.Manual,state:e,due:l??i,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},c=v(i),c.last_review=i;else{if(typeof l>"u")throw new Error("reschedule: due is required for manual rating");const f=l.diff(i,"days");o={rating:d.Manual,state:t.state,due:t.last_review||t.due,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},c={...t,state:e,due:l,last_review:i,stability:s||t.stability,difficulty:n||t.difficulty,elapsed_days:a,scheduled_days:f,reps:t.reps+1}}return{card:c,log:o}}reschedule(t,e){const i=[];let a=v(t.due);for(const s of e){let n;if(s.review=h.time(s.review),s.rating===d.Manual){let l=0;a.state!==u.New&&a.last_review&&(l=s.review.diff(a.last_review,"days")),n=this.handleManualRating(a,s.state,s.review,l,s.stability,s.difficulty,s.due?h.time(s.due):void 0)}else n=this.replay(a,s.review,s.rating);i.push(n),a=n.card}return i}calculateManualRecord(t,e,i,a){if(!i)return null;const{card:s,log:n}=i,l=h.card(t);return l.due.getTime()===s.due.getTime()?null:(l.scheduled_days=s.due.diff(l.due,"days"),this.handleManualRating(l,s.state,h.time(e),n.elapsed_days,a?s.stability:void 0,a?s.difficulty:void 0,s.due))}}class V extends Y{strategyHandler=new Map;Scheduler;constructor(t){super(t);const{enable_short_term:e}=this.parameters;this.Scheduler=e?O:P}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)?t.intervalModifier=t.calculate_interval_modifier(Number(a)):i==="enable_short_term"&&(t.Scheduler=a===!0?O:P),Reflect.set(e,i,a),!0}}}useStrategy(t,e){return this.strategyHandler.set(t,e),this}clearStrategy(t){return t?this.strategyHandler.delete(t):this.strategyHandler.clear(),this}getScheduler(t,e){const i=this.strategyHandler.get(x.SEED),a=this.strategyHandler.get(x.SCHEDULER)||this.Scheduler,s=i||D;return new a(t,e,this,{seed:s})}repeat(t,e,i){const a=this.getScheduler(t,e).preview();return i&&typeof i=="function"?i(a):a}next(t,e,i,a){const s=this.getScheduler(t,e),n=h.rating(i);if(n===d.Manual)throw new Error("Cannot review a manual rating");const l=s.review(n);return a&&typeof a=="function"?a(l):l}get_retrievability(t,e,i=!0){const a=h.card(t);e=e?h.time(e):new Date;const s=a.state!==u.New?Math.max(e.diff(a.last_review,"days"),0):0,n=a.state!==u.New?this.forgetting_curve(s,+a.stability.toFixed(8)):0;return i?`${(n*100).toFixed(2)}%`:n}rollback(t,e,i){const a=h.card(t),s=h.review_log(e);if(s.rating===d.Manual)throw new Error("Cannot rollback a manual rating");let n,l,o;switch(s.state){case u.New:n=s.due,l=void 0,o=0;break;case u.Learning:case u.Relearning:case u.Review:n=s.review,l=s.due,o=a.lapses-(s.rating===d.Again&&s.state===u.Review?1:0);break}const c={...a,due:n,stability:s.stability,difficulty:s.difficulty,elapsed_days:s.last_elapsed_days,scheduled_days:s.scheduled_days,reps:Math.max(0,a.reps-1),lapses:Math.max(0,o),state:s.state,last_review:l};return i&&typeof i=="function"?i(c):c}forget(t,e,i=!1,a){const s=h.card(t);e=h.time(e);const n=s.state===u.New?0:e.diff(s.last_review,"days"),l={rating:d.Manual,state:s.state,due:s.due,stability:s.stability,difficulty:s.difficulty,elapsed_days:0,last_elapsed_days:s.elapsed_days,scheduled_days:n,review:e},o={card:{...s,due:e,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:i?0:s.reps,lapses:i?0:s.lapses,state:u.New,last_review:s.last_review},log:l};return a&&typeof a=="function"?a(o):o}reschedule(t,e=[],i={}){const{recordLogHandler:a,reviewsOrderBy:s,skipManual:n=!0,now:l=new Date,update_memory_state:o=!1}=i;s&&typeof s=="function"&&e.sort(s),n&&(e=e.filter(b=>b.rating!==d.Manual));const c=new tt(this),f=c.reschedule(i.first_card||v(),e),_=f.length,g=h.card(t),m=c.calculateManualRecord(g,l,_?f[_-1]:void 0,o);return a&&typeof a=="function"?{collections:f.map(a),reschedule_item:m?a(m):null}:{collections:f,reschedule_item:m}}}const et=r=>new V(r||{});
//# sourceMappingURL=index.mjs.map


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			"popup": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("./src/popup/popup.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/popup/daily-review.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map