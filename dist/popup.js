/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(131), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 同步状态指示器样式 */
.sync-indicator {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(255, 255, 255, 0.85);
    padding: 3px 6px;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    z-index: 100;
    font-size: 11px;
    color: #666;
    opacity: 0.8;
    transition: opacity 0.2s;
}

.sync-indicator:hover {
    opacity: 1;
    cursor: pointer;
}

.sync-indicator #syncIcon {
    font-size: 12px;
    color: #4CAF50;
}

.sync-indicator.syncing #syncIcon {
    animation: spin 1s linear infinite;
    color: #2196F3;
}

.sync-indicator.error {
    background: rgba(255, 235, 238, 0.95);
}

.sync-indicator.error #syncIcon {
    color: #f44336;
}

.sync-indicator.success #syncIcon {
    color: #4CAF50;
}

.sync-indicator.warning {
    background: rgba(255, 243, 224, 0.95);
}

.sync-indicator.warning #syncIcon {
    color: #ff9800;
}

.sync-indicator.warning #syncStatus {
    color: #ff9800;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

body {
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


.add-problem-wrapper {
    display: flex;
    justify-content: center;
}

.empty-state {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 5px;
    color: #4a9d9c;
    font-size: 0.9em;
    opacity: 0.8;
    font-style: italic;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.empty-state i {
    font-size: 1em;
    color: #ffd700;  /* 给灯泡图标一个金色 */
}



.add-problem {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px dashed rgba(74, 157, 156, 0.5);
    width: 30px;
    height: 30px;
    border-radius: 8px;
    color: #4a9d9c;
    opacity: 0.8;
}

.add-problem-content {
    display: flex;
    align-items: center;
}

.add-problem i {
    font-size: 0.8em;
}


/* 悬停效果 */
.add-problem:hover {
    background: rgba(74, 157, 156, 0.1);
    border-style: solid;
    opacity: 1;
}

/* 添加虚线分隔 */
.add-problem-wrapper::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
        to right,
        transparent,
        rgba(74, 157, 156, 0.3),
        transparent
    );
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.modal-content {
    background: #1d2e3d;
    border-radius: 8px;
    padding: 16px;          /* 减小内边距 */
    width: 280px;           /* 固定更小的宽度 */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(97, 218, 251, 0.2);
    animation: modalFadeIn 0.3s ease;
}

.modal-content h3 {
    color: #61dafb;
    margin-bottom: 12px;    /* 减小标题下方间距 */
    font-size: 1em;         /* 减小标题字体 */
}

.form-group {
    margin-bottom: 12px;    /* 减小表单组间距 */
}

.form-group label {
    display: block;
    margin-bottom: 4px;     /* 减小标签下方间距 */
    color: #e9ecef;
    font-size: 0.85em;      /* 减小标签字体 */
}

.form-group input {
    width: 100%;
    padding: 6px 8px;       /* 减小输入框内边距 */
    border: 1px solid rgba(97, 218, 251, 0.3);
    border-radius: 4px;
    background: rgba(29, 46, 61, 0.8);
    color: #e9ecef;
    font-size: 0.85em;      /* 减小输入框字体 */
}

.button-group {
    display: flex;
    justify-content: flex-end;
    gap: 8px;               /* 减小按钮间距 */
    margin-top: 12px;       /* 减小按钮组上方间距 */
}

.button-group button {
    padding: 4px 12px;      /* 减小按钮内边距 */
    border-radius: 4px;
    font-size: 0.85em;      /* 减小按钮字体 */
}

/* 自定义按钮样式 */
.custom-btn {
    border: 1px solid;
}

.btn-outline-warning {
    border-color: #ffc107;
    color: #ffc107;
}

.btn-outline-warning:hover {
    background: rgba(255, 193, 7, 0.1);
}

.btn-outline-secondary {
    border-color: #6c757d;
    color: #6c757d;
}

.btn-outline-secondary:hover {
    background: rgba(108, 117, 125, 0.1);
}

/* WebDAV按钮样式 - 统一设计系统 */
.webdav-btn {
    padding: 4px 8px;
    font-size: 0.75em;
    border: 1px solid rgba(74, 157, 156, 0.3);
    background: rgba(29, 46, 61, 0.5);
    color: #4a9d9c;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
    line-height: 1.2;
}

.webdav-btn:hover {
    background: rgba(74, 157, 156, 0.1);
    border-color: rgba(74, 157, 156, 0.5);
    color: #61dafb;
}

.webdav-btn:active {
    transform: scale(0.98);
}

.webdav-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.webdav-btn i {
    margin-right: 3px;
    font-size: 0.85em;
    vertical-align: middle;
}

/* 垂直布局按钮样式 */
.webdav-btn-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 8px;
    gap: 5px;
    position: relative;
}

.webdav-btn-vertical i {
    margin-right: 0;
    font-size: 1.3em;
}

.webdav-btn-vertical span {
    font-size: 0.95em;
    line-height: 1;
    font-weight: 600;
}

/* 退出按钮特殊样式 */
.webdav-btn-logout {
    border-color: rgba(74, 157, 156, 0.2);
    color: rgba(156, 163, 175, 0.8);
}

.webdav-btn-logout:hover {
    background: rgba(239, 68, 68, 0.05);
    border-color: rgba(239, 68, 68, 0.3);
    color: rgba(239, 68, 68, 0.8);
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


.footer {
    background: linear-gradient(to bottom, rgba(29, 46, 61, 0.8) 0%, #1d2e3d 100%);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;           /* 按钮之间的间距 */
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: auto;
    padding: 8px 0;  /* 添加上下内边距 */
}

#github-star-container {
    display: flex;
    align-items: center;
    height: 30px;
}

/* GitHub Star 按钮样式 */
.github-star-btn {
    font-size: 0.875rem;
    font-family: 'Courier Prime', monospace;
    background: #1d2e3d;
    border: 1px solid rgba(97, 218, 251, 0.3);
    color: #61dafb;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    padding: 0.35rem 0.8rem;
    animation: starPulse 2s infinite;
}

@keyframes starPulse {
    0% {
        box-shadow: 0 0 0 0 rgba(97, 218, 251, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(97, 218, 251, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(97, 218, 251, 0);
    }
}

.github-star-btn i {
    font-size: 0.875rem;
    color: #61dafb;
    transition: all 0.3s ease;
    animation: starTwinkle 2s infinite;
}

@keyframes starTwinkle {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.github-star-btn:hover {
    background: #1a3244;
    border-color: #61dafb;
    box-shadow: 0 0 15px rgba(97, 218, 251, 0.7);
    color: #61dafb;
    animation: none; /* 悬停时停止脉冲动画 */
}

.github-star-btn:hover i {
    animation: none; /* 悬停时停止星星闪烁动画 */
    transform: scale(1.2);
}

.feedback-btn-review {
    padding: 0.35rem 0.8rem !important;  /* 减小按钮内边距 */
    font-size: 0.8rem !important;  /* 稍微减小字体 */
    min-height: 28px;  /* 设置最小高度 */
    padding: 0 12px;     /* 水平内边距 */
}

.feedback-btn-review .btn-content {
    gap: 0.4rem !important;  /* 减小图标和文字间距 */
}

.feedback-btn-review i {
    font-size: 0.8rem !important;  /* 减小图标大小 */
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
    font-size: 1.0em;
    color: #888;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.reminder-tips {
    margin-top: 10px;
    font-size: 1.0em;
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
}

/* 更新概要样式 */
.update-badge {
    background-color: #FF3D3D;
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.8em;
    margin-right: 5px;
    font-weight: bold;
}

.update-summary {
    background-color: rgba(74, 157, 156, 0.1);
    border-radius: 4px;
    padding: 3px 0 !important;
    margin-bottom: 8px !important;
}

.update-summary a {
    color: #4a9d9c;
    text-decoration: none;
    margin-left: 5px;
}

.update-summary a:hover {
    text-decoration: underline;
    color: #afffff;
}

/* 图标按钮样式 */
.btn-icon {
    background: none;
    border: none;
    color: #4a9d9c;
    font-size: 1em;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: transparent;
}

.btn-icon:hover {
    background-color: rgba(74, 157, 156, 0.1);
    color: #61dafb;
    transform: translateY(-1px);
}

.btn-icon:active {
    transform: translateY(0);
}

.btn-icon-sm {
    width: 24px;
    height: 24px;
}

/* 优化参数进度条样式 */
.optimize-progress {
    height: 3px !important;
    background-color: rgba(74, 157, 156, 0.1) !important;
    border-radius: 4px !important;
    margin-top: 12px !important;
    overflow: hidden !important;
}

.optimize-progress .progress-bar {
    background: linear-gradient(90deg, #4a9d9c, #61dafb) !important;
    transition: width 0.3s ease !important;
}

.optimize-progress .progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite !important;
}

.optimize-progress .progress-bar-striped {
    background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
    ) !important;
    background-size: 1rem 1rem !important;
}`, "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA,cAAc;AACd;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,qCAAqC;IACrC,gBAAgB;IAChB,mBAAmB;IACnB,sCAAsC;IACtC,YAAY;IACZ,eAAe;IACf,WAAW;IACX,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,kCAAkC;IAClC,cAAc;AAClB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,OAAO,uBAAuB,EAAE;IAChC,KAAK,yBAAyB,EAAE;AACpC;;AAEA;IACI,yBAAyB,EAAE,SAAS;IACpC,sBAAsB,EAAE,SAAS;IACjC,cAAc,EAAE,SAAS;IACzB,kCAAkC;IAClC,kBAAkB;AACtB;AACA,UAAU;AACV;IACI,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB,GAAG,WAAW;IACpC,mBAAmB,MAAM,SAAS;IAClC,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB,GAAG,SAAS;IACnC,mBAAmB;IACnB,SAAS,GAAG,UAAU;IACtB,cAAc,GAAG,YAAY;IAC7B,cAAc,GAAG,SAAS;IAC1B,gBAAgB;AACpB;;AAEA,UAAU;AACV;AACA,cAAc;AACd,gBAAgB,GAAG,UAAU;AAC7B,gBAAgB,GAAG,UAAU;AAC7B,yBAAyB,GAAG,UAAU;AACtC,mBAAmB,GAAG,SAAS;AAC/B,2CAA2C,GAAG,WAAW;AACzD,8CAA8C,GAAG,WAAW;AAC5D,eAAe;AACf,iBAAiB,GAAG,UAAU;AAC9B,6DAA6D,GAAG,QAAQ;AACxE,6BAA6B,GAAG,cAAc;AAC9C,oCAAoC,GAAG,eAAe;AACtD,qBAAqB,GAAG,aAAa;AACrC;;AAEA,eAAe;AACf;IACI,SAAS;IACT,UAAU;IACV,cAAc;AAClB;;AAEA,eAAe;AACf;IACI,iBAAiB,GAAG,qBAAqB;AAC7C;;AAEA,YAAY;AACZ;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA,YAAY;AACZ;IACI,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,2BAA2B;IAC3B,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,yBAAyB;IACzB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;;AAGA;IACI,yBAAyB,EAAE,8BAA8B;IACzD,cAAc,EAAE,WAAW;IAC3B,mBAAmB;IACnB,QAAQ;AACZ;AACA;IACI,yBAAyB,EAAE,8BAA8B;IACzD,gBAAgB,EAAE,WAAW;IAC7B,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;;;AAIA;IACI,yBAAyB,EAAE,SAAS;IACpC,mBAAmB;IACnB,yCAAyC;IACzC,aAAa;IACb,cAAc;IACd,0BAA0B;;AAE9B;;QAEQ;IACJ,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;IACtC,gBAAgB;IAChB,cAAc,EAAE,SAAS;AAC7B;;;;AAIA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,+BAA+B;AACnC;;;AAGA;IACI,cAAc;IACd,2BAA2B;IAC3B,wCAAwC;AAC5C;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,+BAA+B;IAC/B,0BAA0B;AAC9B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;IACzB,yCAAyC,GAAG,YAAY;IACxD,2CAA2C,GAAG,YAAY;IAC1D,iDAAiD;IACjD,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,qCAAqC,GAAG,eAAe;IACvD;;8CAE0C,GAAG,aAAa;IAC1D,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB;;;;KAIC;IACD,WAAW;IACX,UAAU;IACV,qDAAqD;AACzD;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,gFAAgF,EAAE,aAAa;IAC/F,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,gCAAgC,EAAE,WAAW;AACjD;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB,EAAE,SAAS;IAC9B,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc,EAAE,WAAW;IAC3B,+BAA+B,EAAE,WAAW;AAChD;;AAEA;IACI,gBAAgB;IAChB,cAAc,EAAE,SAAS;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,cAAc,EAAE,wCAAwC;IACxD,sBAAsB;AAC1B;;AAEA;IACI,cAAc,EAAE,qCAAqC;AACzD;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,cAAc,EAAE,2BAA2B;AAC/C;;AAEA;IACI,cAAc,EAAE,2BAA2B;AAC/C;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB,EAAE,UAAU;IAC/B,cAAc,EAAE,YAAY;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,yBAAyB,EAAE,YAAY;IACvC,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,cAAc,EAAE,WAAW;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,qCAAqC;IACrC,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,cAAc,EAAE,cAAc;IAC9B,mDAAmD;AACvD;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,qCAAqC;IACrC,2CAA2C;AAC/C;;AAEA,SAAS;AACT;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,cAAc,EAAE,SAAS;IACzB,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,2BAA2B;IAC3B,oCAAoC;IACpC,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,6BAA6B;IAC7B,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,cAAc;IACd,cAAc,GAAG,cAAc;AACnC;;;;AAIA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,0CAA0C;IAC1C,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA,SAAS;AACT;IACI,mCAAmC;IACnC,mBAAmB;IACnB,UAAU;AACd;;AAEA,WAAW;AACX;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,UAAU;IACV,WAAW;IACX;;;;;KAKC;AACL;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,aAAa,WAAW,UAAU;IAClC,YAAY,YAAY,YAAY;IACpC,yCAAyC;IACzC,yCAAyC;IACzC,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,mBAAmB,KAAK,aAAa;IACrC,cAAc,UAAU,WAAW;AACvC;;AAEA;IACI,mBAAmB,KAAK,YAAY;AACxC;;AAEA;IACI,cAAc;IACd,kBAAkB,MAAM,aAAa;IACrC,cAAc;IACd,iBAAiB,OAAO,WAAW;AACvC;;AAEA;IACI,WAAW;IACX,gBAAgB,QAAQ,aAAa;IACrC,yCAAyC;IACzC,kBAAkB;IAClB,iCAAiC;IACjC,cAAc;IACd,iBAAiB,OAAO,YAAY;AACxC;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,QAAQ,gBAAgB,WAAW;IACnC,gBAAgB,QAAQ,cAAc;AAC1C;;AAEA;IACI,iBAAiB,OAAO,YAAY;IACpC,kBAAkB;IAClB,iBAAiB,OAAO,WAAW;AACvC;;AAEA,YAAY;AACZ;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,oCAAoC;AACxC;;AAEA,wBAAwB;AACxB;IACI,gBAAgB;IAChB,iBAAiB;IACjB,yCAAyC;IACzC,iCAAiC;IACjC,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,mCAAmC;IACnC,qCAAqC;IACrC,cAAc;AAClB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA,aAAa;AACb;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,gBAAgB;AACpB;;AAEA,aAAa;AACb;IACI,qCAAqC;IACrC,+BAA+B;AACnC;;AAEA;IACI,mCAAmC;IACnC,oCAAoC;IACpC,6BAA6B;AACjC;;;;;;;;AAQA,WAAW;AACX;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,cAAc;AAClB;;AAEA,aAAa;AACb;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,0BAA0B;IAC1B,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,eAAe;AACnB;;AAEA,aAAa;AACb;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,eAAe;AACnB;;;;AAIA,WAAW;AACX;IACI,gCAAgC;;AAEpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;;;IAGhB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA,kBAAkB;AAClB;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;;;;;AAMA;IACI,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,oCAAoC;IACpC,wCAAwC;AAC5C;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;;AAGA;IACI,8EAA8E;IAC9E,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS,YAAY,YAAY;IACjC,8CAA8C;IAC9C,gBAAgB;IAChB,cAAc,GAAG,YAAY;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA,qBAAqB;AACrB;IACI,mBAAmB;IACnB,uCAAuC;IACvC,mBAAmB;IACnB,yCAAyC;IACzC,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;IACI;QACI,2CAA2C;IAC/C;IACA;QACI,4CAA4C;IAChD;IACA;QACI,yCAAyC;IAC7C;AACJ;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,yBAAyB;IACzB,kCAAkC;AACtC;;AAEA;IACI;QACI,mBAAmB;QACnB,UAAU;IACd;IACA;QACI,qBAAqB;QACrB,YAAY;IAChB;IACA;QACI,mBAAmB;QACnB,UAAU;IACd;AACJ;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,4CAA4C;IAC5C,cAAc;IACd,eAAe,EAAE,cAAc;AACnC;;AAEA;IACI,eAAe,EAAE,gBAAgB;IACjC,qBAAqB;AACzB;;AAEA;IACI,kCAAkC,GAAG,YAAY;IACjD,4BAA4B,GAAG,WAAW;IAC1C,gBAAgB,GAAG,WAAW;IAC9B,eAAe,MAAM,UAAU;AACnC;;AAEA;IACI,sBAAsB,GAAG,cAAc;AAC3C;;AAEA;IACI,4BAA4B,GAAG,WAAW;AAC9C;;;AAGA;IACI,6BAA6B;IAC7B,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB,GAAG,0BAA0B;IAChD,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,2CAA2C;AAC/C;;AAEA;IACI,wDAAwD;AAC5D;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,mCAAmC;AACvC;;AAEA,WAAW;AACX;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,6BAA6B;IAC7B,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,cAAc;AAClB;;;;AAIA,uBAAuB;AACvB;IACI,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;;;;;;;AAOA,YAAY;AACZ;IACI,WAAW;IACX,mBAAmB;IACnB,qBAAqB;;;IAGrB,2CAA2C,QAAQ,SAAS;;IAE5D,0CAA0C,SAAS,WAAW;IAC9D,uCAAuC,WAAW,WAAW;IAC7D,uBAAuB,eAAe,YAAY;IAClD,oCAAoC,GAAG,WAAW;AACtD;;;AAGA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA,sBAAsB;AACtB;IACI,WAAW;IACX,kBAAkB;AACtB;;;;AAIA,aAAa;AACb;;IAEI,uBAAuB;IACvB,kEAAkE;AACtE;;AAEA,iBAAiB;AACjB;;IAEI,kCAAkC,KAAK,gBAAgB;IACvD,uBAAuB;IACvB,yBAAyB,aAAa,WAAW;AACrD;;;;;AAKA,cAAc;AACd;IACI,oBAAoB;IACpB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,0CAA0C;IAC1C,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA,QAAQ;AACR,gBAAgB,yBAAyB,EAAE;AAC3C,gBAAgB,yBAAyB,EAAE;AAC3C,eAAe,yBAAyB,EAAE;;;;AAI1C,aAAa;AACb;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;IAC3B,8CAA8C;AAClD;;AAEA;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,WAAW;IACX,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA,WAAW;AACX;IACI,oCAAoC;IACpC,gCAAgC;IAChC,4CAA4C;IAC5C,yBAAyB;IACzB,0BAA0B;IAC1B,+BAA+B;IAC/B,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;IACxB,kBAAkB;IAClB,oEAAqK;AACzK;;AAEA,aAAa;AACb;IACI,oCAAoC;IACpC,gCAAgC;IAChC,4CAA4C;IAC5C,mBAAmB;IACnB,oEAAqK;AACzK;;AAEA,eAAe;AACf;IACI,4CAA4C;AAChD;;AAEA,SAAS;AACT;IACI,oCAAoC,GAAG,eAAe;IACtD,gCAAgC;IAChC,4CAA4C;IAC5C,wBAAwB;AAC5B;;AAEA,YAAY;AACZ;IACI,oCAAoC;AACxC;;;;;;AAMA,sBAAsB;AACtB;IACI,oCAAoC;IACpC,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA,WAAW;AACX;;IAEI,oCAAoC;AACxC;;AAEA;IACI,gCAAgC;AACpC;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,cAAc;AAClB;;AAEA,WAAW;AACX;IACI,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;IACI,yCAAyC;IACzC,cAAc;IACd,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,cAAc;AACd;IACI,sBAAsB;IACtB,oDAAoD;IACpD,6BAA6B;IAC7B,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA;IACI,+DAA+D;IAC/D,sCAAsC;AAC1C;;AAEA;IACI,6DAA6D;AACjE;;AAEA;IACI;;;;;;;;;gBASY;IACZ,qCAAqC;AACzC","sourcesContent":["/* 同步状态指示器样式 */\n.sync-indicator {\n    position: fixed;\n    bottom: 10px;\n    right: 10px;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    background: rgba(255, 255, 255, 0.85);\n    padding: 3px 6px;\n    border-radius: 10px;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.15);\n    z-index: 100;\n    font-size: 11px;\n    color: #666;\n    opacity: 0.8;\n    transition: opacity 0.2s;\n}\n\n.sync-indicator:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.sync-indicator #syncIcon {\n    font-size: 12px;\n    color: #4CAF50;\n}\n\n.sync-indicator.syncing #syncIcon {\n    animation: spin 1s linear infinite;\n    color: #2196F3;\n}\n\n.sync-indicator.error {\n    background: rgba(255, 235, 238, 0.95);\n}\n\n.sync-indicator.error #syncIcon {\n    color: #f44336;\n}\n\n.sync-indicator.success #syncIcon {\n    color: #4CAF50;\n}\n\n.sync-indicator.warning {\n    background: rgba(255, 243, 224, 0.95);\n}\n\n.sync-indicator.warning #syncIcon {\n    color: #ff9800;\n}\n\n.sync-indicator.warning #syncStatus {\n    color: #ff9800;\n}\n\n@keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n}\n\nbody {\n    background-color: #0D1F2D; /* 深色背景 */\n    background-size: cover; /* 背景覆盖 */\n    color: #ffffff; /* 白色字体 */\n    font-family: 'Raleway', sans-serif;\n    position: relative;\n}\n/* 导航栏样式 */\n.nav-bar {\n    background-color: #0D1F2D;\n\n    display: flex;\n    flex-direction: column;  /* 改为纵向排列 */\n    align-items: center;     /* 水平居中 */\n    border-bottom: 1px solid #4a9d9c;\n}\n\n.nav-row {\n    display: flex;\n    justify-content: center;  /* 内容居中 */\n    align-items: center;\n    margin: 0;  /* 移除外边距 */\n    padding: 2px 0;  /* 减小上下内边距 */\n    line-height: 1;  /* 减小行高 */\n    margin-top: -5px;\n}\n\n/* 标题行样式 */\n.nav-title {\ncolor: #FF3D3D;\nfont-weight: 900;  /* 更粗的字体 */\nfont-size: 1.2em;  /* 更大的字号 */\ntext-transform: uppercase;  /* 转换为大写 */\nletter-spacing: 2px;  /* 字母间距 */\ntext-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  /* 添加阴影效果 */\nfont-family: 'Arial Black', Gadget, sans-serif;  /* 更粗重的字体 */\nmargin-top: 5px;\npadding: 5px 10px;  /* 添加内边距 */\nbackground: linear-gradient(180deg, #ff6b6b 0%, #FF3D3D 100%);  /* 渐变色 */\n-webkit-background-clip: text;  /* 使渐变色应用到文字 */\n-webkit-text-fill-color: transparent;  /* 使文字透明以显示背景 */\ndisplay: inline-block;  /* 确保渐变效果生效 */\n}\n\n/* 专门为标题容器添加类 */\n.nav-row.title-row {\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n}\n\n/* 特别处理第二个标题行 */\n.nav-row.title-row + .nav-row.title-row {\n    margin-top: -10px;  /* 调整这个值来控制两行标题间的间距 */\n}\n\n/* 网站信息行样式 */\n.nav-site {\n    color: #4a9d9c;\n    font-size: 0.9em;\n    padding: 2px 8px;\n    border-radius: 4px;\n    background-color: rgba(74, 157, 156, 0.1);\n}\n\n/* 导航按钮行样式 */\n.nav-btn {\n    background: none;\n    border: none;\n    color: #888;\n    padding: 5px 15px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    font-size: 1em;\n    position: relative;\n}\n\n.nav-btn:hover {\n    color: #fff;\n}\n\n.nav-btn.active {\n    color: #fff;\n}\n\n.nav-btn.active::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 20px;\n    height: 2px;\n    background-color: #4a9d9c;\n    border-radius: 2px;\n}\n\n.nav-right {\n    display: flex;\n    gap: 10px;\n}\n\n/* 开关按钮样式 */\n.switch-btn {\n    background-color: #2a2b30;\n    border: 1px solid #3a3b40;\n    color: #888;\n    padding: 5px 15px;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\n.switch-btn:hover {\n    background-color: #3a3b40;\n    color: #fff;\n}\n\n\n.text-date {\n    color: #e0e0e0 !important; /* 更亮的灰色，使用 !important 确保优先级 */\n    font-size: 1em; /* 修改字体大小 */\n    align-items: center;\n    gap: 2px;\n}\n.text-muted {\n    color: #e0e0e0 !important; /* 更亮的灰色，使用 !important 确保优先级 */\n    font-size: 0.8em; /* 修改字体大小 */\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n\n\n.review-card {\n    background-color: #1d2e3d; /* 卡片背景 */\n    border-radius: 15px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n    padding: 10px;\n    margin: 20px 0;\n    transition: transform 0.2s;\n    \n}\n\n        .review-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 16px #4a9d9c;\n}\n\n.problem-title {\n    font-family: 'Press Start 2P', cursive;\n    font-size: 0.9em;\n    color: #ffffff; /* 白色字体 */\n}\n\n\n\n.difficulty-Easy {\n    color: #4a9d9c;\n}\n\n.difficulty-Medium {\n    color: #f0b215;\n}\n\n.difficulty-Hard {\n    color: #FF3D3D;\n}\n\n.progress {\n    height: 8px;\n    margin-top: 10px;\n}\n\n.btn-review {\n\n    border: none;\n    color: #e0e0e0;\n    font-size: 1.5em;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    font-weight: 500;\n    position: relative;\n    z-index: 1;\n    pointer-events: auto !important;\n}\n\n\n.btn-review:hover {\n    color: #afffff;\n    transform: translateY(-1px);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.btn-review:active {\n    transform: translateY(0);\n}\n\n.btn-review:disabled {\n\n    color: white;\n    opacity: 0.8;\n    cursor: not-allowed;\n}\n\n.btn-review.btn-lg {\n    font-size: 1.1em;\n    padding: 10px 24px;\n}\n\n.review-card .btn-review,\n.container .btn-review {\n    pointer-events: auto !important;\n    cursor: pointer !important;\n}\n\n.review-card.reviewed {\n    opacity: 0.6;\n}\n\n.header-section {\n    position: relative;\n    border-radius: 15px;\n    overflow: hidden;\n    background-color: #1d2e3d;\n    border: 1px solid rgba(74, 157, 156, 0.1);  /* 降低边框透明度 */\n    box-shadow: 0 0 8px rgba(74, 157, 156, 0.1);  /* 降低阴影透明度 */\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    padding: 10px;\n    margin: 10px 15px;\n}\n\n.header-section:hover {\n    border-color: rgba(74, 157, 156, 0.2);  /* 降低悬停时边框透明度 */\n    box-shadow: \n        0 0 12px rgba(74, 157, 156, 0.15),  /* 降低外阴影透明度 */\n        inset 0 0 8px rgba(74, 157, 156, 0.05);  /* 降低内阴影透明度 */\n    transform: translateY(-1px);\n}\n\n.header-section::before {\n    content: '';\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border-radius: 15px;\n    background: linear-gradient(45deg, \n        rgba(74, 157, 156, 0.05),  /* 降低渐变透明度 */\n        rgba(74, 157, 156, 0.1),\n        rgba(74, 157, 156, 0.05)\n    );\n    z-index: -1;\n    opacity: 0;\n    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.header-section:hover::before {\n    opacity: 1;\n}\n\n.completion-circle {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    background: conic-gradient(#afffff var(--percentage), #3a3a4d var(--percentage)); /* 使用深色作为背景 */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    transition: background 0.5s ease; /* 背景渐变动画 */\n}\n\n.inner-circle {\n    width: 100px;\n    height: 100px;\n    background: #1d2e3d; /* 内圈背景 */\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5em;\n    font-weight: bold;\n    color: #FF3D3D; /* 内圈字体颜色 */\n    transition: transform 0.5s ease; /* 内圈缩放动画 */\n}\n\n.retrievability {\n    font-size: 1.0em;\n    color: #ffffff; /* 白色字体 */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.retrievability-icon {\n    margin-right: 10px;\n    color: #4a9d9c;\n}\n\n.retrievability-value {\n    font-weight: bold;\n    margin-left: 10px;\n    color: #4a9d9c; /* Green color for good retrievability */\n    transition: color 0.3s;\n}\n\n.retrievability-value.low {\n    color: #FF3D3D; /* Red color for low retrievability */\n}\n\n.trend-icon {\n    margin-left: 10px;\n    font-size: 1.5em;\n    transition: transform 0.3s;\n}\n\n.trend-up {\n    color: #4a9d9c; /* Green for upward trend */\n}\n\n.trend-down {\n    color: #FF3D3D; /* Red for downward trend */\n}\n\n.low-memory-warning {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    z-index: 0;\n}\n\n.low-memory-warning.active {\n    display: flex;\n}\n\n.card-limit-input input[type=\"number\"]::-webkit-inner-spin-button,\n.card-limit-input input[type=\"number\"]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.card-limit-input input[type=\"number\"] {\n    -moz-appearance: textfield;\n    background: #3a3a4d; /* 输入框背景 */\n    color: #ffffff; /* 输入框字体颜色 */\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    font-size: 1.2em;\n    padding: 5px;\n    border: 2px solid #0D6E6E; /* 输入框边框颜色 */\n    border-radius: 8px;\n    margin: 0 10px;\n}\n\n.gear-button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    padding: 5px;\n    position: relative;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.gear-button .fa-gear {\n    font-size: 1.8em;\n    color: #0D6E6E; /* 齿轮图标颜色 */\n    transition: all 0.3s ease;\n}\n\n.gear-button .direction-icon {\n    position: absolute;\n    font-size: 1em;\n    color: #e2c027;\n    background-color: #fff;\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.3s ease;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n    font-weight: bold;\n}\n\n/* 悬停效果 */\n.gear-button:hover .fa-gear {\n    color: #4a9d9c; /* 悬停时齿轮图标颜色 */\n    filter: drop-shadow(0 0 2px rgba(255, 152, 0, 0.5));\n}\n\n.gear-button:hover .direction-icon {\n    color: #000;\n    background-color: #fff;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.3);\n    transform: translate(-50%, -50%) scale(1.1);\n}\n\n/* 点击动画 */\n.gear-button.left:active {\n    transform: rotate(-45deg);\n}\n\n.gear-button.right:active {\n    transform: rotate(45deg);\n}\n\n.card-limit-input {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    margin-top: 10px;\n}\n\n.card-limit-label {\n    font-size: 1.1em;\n    color: #ffffff; /* 白色字体 */\n    margin-right: 5px;\n}\n\n/* 工具提示 */\n.gear-button::after {\n    content: attr(data-tooltip);\n    position: absolute;\n    bottom: -25px;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    padding: 4px 8px;\n    border-radius: 4px;\n    font-size: 0.8em;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    pointer-events: none;\n    white-space: nowrap;\n}\n\n.gear-button:hover::after {\n    opacity: 1;\n}\n\n\n.add-problem-wrapper {\n    display: flex;\n    justify-content: center;\n}\n\n.empty-state {\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 5px;\n    color: #4a9d9c;\n    font-size: 0.9em;\n    opacity: 0.8;\n    font-style: italic;\n    margin-bottom: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n}\n\n.empty-state i {\n    font-size: 1em;\n    color: #ffd700;  /* 给灯泡图标一个金色 */\n}\n\n\n\n.add-problem {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    border: 1px dashed rgba(74, 157, 156, 0.5);\n    width: 30px;\n    height: 30px;\n    border-radius: 8px;\n    color: #4a9d9c;\n    opacity: 0.8;\n}\n\n.add-problem-content {\n    display: flex;\n    align-items: center;\n}\n\n.add-problem i {\n    font-size: 0.8em;\n}\n\n\n/* 悬停效果 */\n.add-problem:hover {\n    background: rgba(74, 157, 156, 0.1);\n    border-style: solid;\n    opacity: 1;\n}\n\n/* 添加虚线分隔 */\n.add-problem-wrapper::before {\n    content: '';\n    position: absolute;\n    top: -8px;\n    left: 10%;\n    right: 10%;\n    height: 1px;\n    background: linear-gradient(\n        to right,\n        transparent,\n        rgba(74, 157, 156, 0.3),\n        transparent\n    );\n}\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 1000;\n    backdrop-filter: blur(4px);\n}\n\n.modal-content {\n    background: #1d2e3d;\n    border-radius: 8px;\n    padding: 16px;          /* 减小内边距 */\n    width: 280px;           /* 固定更小的宽度 */\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n    border: 1px solid rgba(97, 218, 251, 0.2);\n    animation: modalFadeIn 0.3s ease;\n}\n\n.modal-content h3 {\n    color: #61dafb;\n    margin-bottom: 12px;    /* 减小标题下方间距 */\n    font-size: 1em;         /* 减小标题字体 */\n}\n\n.form-group {\n    margin-bottom: 12px;    /* 减小表单组间距 */\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: 4px;     /* 减小标签下方间距 */\n    color: #e9ecef;\n    font-size: 0.85em;      /* 减小标签字体 */\n}\n\n.form-group input {\n    width: 100%;\n    padding: 6px 8px;       /* 减小输入框内边距 */\n    border: 1px solid rgba(97, 218, 251, 0.3);\n    border-radius: 4px;\n    background: rgba(29, 46, 61, 0.8);\n    color: #e9ecef;\n    font-size: 0.85em;      /* 减小输入框字体 */\n}\n\n.button-group {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;               /* 减小按钮间距 */\n    margin-top: 12px;       /* 减小按钮组上方间距 */\n}\n\n.button-group button {\n    padding: 4px 12px;      /* 减小按钮内边距 */\n    border-radius: 4px;\n    font-size: 0.85em;      /* 减小按钮字体 */\n}\n\n/* 自定义按钮样式 */\n.custom-btn {\n    border: 1px solid;\n}\n\n.btn-outline-warning {\n    border-color: #ffc107;\n    color: #ffc107;\n}\n\n.btn-outline-warning:hover {\n    background: rgba(255, 193, 7, 0.1);\n}\n\n.btn-outline-secondary {\n    border-color: #6c757d;\n    color: #6c757d;\n}\n\n.btn-outline-secondary:hover {\n    background: rgba(108, 117, 125, 0.1);\n}\n\n/* WebDAV按钮样式 - 统一设计系统 */\n.webdav-btn {\n    padding: 4px 8px;\n    font-size: 0.75em;\n    border: 1px solid rgba(74, 157, 156, 0.3);\n    background: rgba(29, 46, 61, 0.5);\n    color: #4a9d9c;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    font-weight: 500;\n    line-height: 1.2;\n}\n\n.webdav-btn:hover {\n    background: rgba(74, 157, 156, 0.1);\n    border-color: rgba(74, 157, 156, 0.5);\n    color: #61dafb;\n}\n\n.webdav-btn:active {\n    transform: scale(0.98);\n}\n\n.webdav-btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n\n.webdav-btn i {\n    margin-right: 3px;\n    font-size: 0.85em;\n    vertical-align: middle;\n}\n\n/* 垂直布局按钮样式 */\n.webdav-btn-vertical {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 8px;\n    gap: 5px;\n    position: relative;\n}\n\n.webdav-btn-vertical i {\n    margin-right: 0;\n    font-size: 1.3em;\n}\n\n.webdav-btn-vertical span {\n    font-size: 0.95em;\n    line-height: 1;\n    font-weight: 600;\n}\n\n/* 退出按钮特殊样式 */\n.webdav-btn-logout {\n    border-color: rgba(74, 157, 156, 0.2);\n    color: rgba(156, 163, 175, 0.8);\n}\n\n.webdav-btn-logout:hover {\n    background: rgba(239, 68, 68, 0.05);\n    border-color: rgba(239, 68, 68, 0.3);\n    color: rgba(239, 68, 68, 0.8);\n}\n\n\n\n\n\n\n\n/* 视图容器样式 */\n.view {\n    display: none;\n    transition: opacity 0.3s ease;\n}\n\n.view.active {\n    display: block;\n}\n\n/* 题目列表页面样式 */\n.problem-list-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n}\n\n.search-bar {\n    position: relative;\n    width: 300px;\n}\n\n.search-input {\n    width: 100%;\n    padding: 8px 35px 8px 15px;\n    border: none;\n    border-radius: 20px;\n    background: #2a2b30;\n    color: #fff;\n}\n\n.search-icon {\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #888;\n}\n\n.problem-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n    padding: 20px 0;\n}\n\n/* 更多选项页面样式 */\n.options-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 20px;\n    padding: 20px 0;\n}\n\n\n\n/* 导航标签样式 */\n#problemListView .nav-tabs {\n    border-bottom: 1px solid #4a9d9c;\n\n}\n\n#problemListView .nav-tabs .nav-link {\n    color: #888;\n    border: none;\n    background: none;\n\n\n    transition: all 0.3s ease;\n}\n\n#problemListView .nav-tabs .nav-link:hover {\n    color: #fff;\n}\n\n#problemListView .nav-tabs .nav-link.active {\n    color: #4a9d9c;\n    background: none;\n    border-bottom: 2px solid #4a9d9c;\n}\n\n/* 确保tab内容区域正确显示 */\n#problemListView .tab-content {\n    display: flex;\n}\n\n#problemListView .tab-pane {\n    transition: opacity 0.3s ease;\n}\n\n#problemListView .tab-pane.active {\n    opacity: 1;\n}\n\n\n\n\n\niframe {\n    overflow: hidden;\n    border: 0;\n}\n\n.custom-btn {\n    border-color: #0D6E6E;\n    color: #4a9d9c;\n}\n\n.custom-btn:hover {\n    border-color: rgba(235, 173, 129, 1);\n    background-color: rgba(235, 173, 129, 1);\n}\n\n.custom-btn:disabled {\n    border-color: #e0e0e0;\n    color: #e0e0e0;\n}\n\n\n.footer {\n    background: linear-gradient(to bottom, rgba(29, 46, 61, 0.8) 0%, #1d2e3d 100%);\n    backdrop-filter: blur(5px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;           /* 按钮之间的间距 */\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    margin-top: auto;\n    padding: 8px 0;  /* 添加上下内边距 */\n}\n\n#github-star-container {\n    display: flex;\n    align-items: center;\n    height: 30px;\n}\n\n/* GitHub Star 按钮样式 */\n.github-star-btn {\n    font-size: 0.875rem;\n    font-family: 'Courier Prime', monospace;\n    background: #1d2e3d;\n    border: 1px solid rgba(97, 218, 251, 0.3);\n    color: #61dafb;\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    gap: 0.6rem;\n    transition: all 0.3s ease;\n    position: relative;\n    overflow: hidden;\n    padding: 0.35rem 0.8rem;\n    animation: starPulse 2s infinite;\n}\n\n@keyframes starPulse {\n    0% {\n        box-shadow: 0 0 0 0 rgba(97, 218, 251, 0.4);\n    }\n    70% {\n        box-shadow: 0 0 0 10px rgba(97, 218, 251, 0);\n    }\n    100% {\n        box-shadow: 0 0 0 0 rgba(97, 218, 251, 0);\n    }\n}\n\n.github-star-btn i {\n    font-size: 0.875rem;\n    color: #61dafb;\n    transition: all 0.3s ease;\n    animation: starTwinkle 2s infinite;\n}\n\n@keyframes starTwinkle {\n    0% {\n        transform: scale(1);\n        opacity: 1;\n    }\n    50% {\n        transform: scale(1.2);\n        opacity: 0.8;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n.github-star-btn:hover {\n    background: #1a3244;\n    border-color: #61dafb;\n    box-shadow: 0 0 15px rgba(97, 218, 251, 0.7);\n    color: #61dafb;\n    animation: none; /* 悬停时停止脉冲动画 */\n}\n\n.github-star-btn:hover i {\n    animation: none; /* 悬停时停止星星闪烁动画 */\n    transform: scale(1.2);\n}\n\n.feedback-btn-review {\n    padding: 0.35rem 0.8rem !important;  /* 减小按钮内边距 */\n    font-size: 0.8rem !important;  /* 稍微减小字体 */\n    min-height: 28px;  /* 设置最小高度 */\n    padding: 0 12px;     /* 水平内边距 */\n}\n\n.feedback-btn-review .btn-content {\n    gap: 0.4rem !important;  /* 减小图标和文字间距 */\n}\n\n.feedback-btn-review i {\n    font-size: 0.8rem !important;  /* 减小图标大小 */\n}\n\n\n.page-input {\n    background-color: transparent;\n    color: #e0e0e0;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n    text-align: center;\n    font-size: 0.875rem;  /* 相当于 Bootstrap 的 sm 大小 */\n    margin-left: 5px !important; \n    margin-right: 5px !important;\n}\n\n.page-input:focus {\n    outline: none;\n    border-color: #afffff;\n    box-shadow: 0 0 5px rgba(74, 157, 156, 0.5);\n}\n\n.multifont {\n    font-family: 'Courier Prime', 'Noto Sans SC', sans-serif;\n}\n\na {\n    color: chocolate;\n}\n\n.custom-tooltip {\n    --bs-tooltip-bg: var(--bd-violet-bg);\n    --bs-tooltip-color: var(--bs-white);\n}\n\n/* 题目列表样式 */\n#problemListView {\n    padding: 5px;\n}\n\n.problem-list-header {\n    margin-bottom: 15px;\n}\n\n.nav-tabs {\n    border-bottom: 1px solid #dee2e6;\n}\n\n.nav-tabs .nav-link {\n    margin-bottom: -1px;\n    color: #495057;\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link.active {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff;\n}\n\n.tab-content {\n    padding: 10px;\n    background-color: #fff;\n    border: 1px solid #dee2e6;\n    border-top: none;\n}\n\n.tab-pane {\n    display: none;\n}\n.tab-pane.active {\n    display: block;\n}\n\n\n\n/* 确保switch容器不会阻挡点击事件 */\n#switch-area {\n    pointer-events: auto;\n    position: relative;\n    z-index: 100;\n}\n\n\n\n\n\n\n/* 自定义表格样式 */\n.table {\n    width: 100%;\n    table-layout: fixed;\n    word-wrap: break-word;\n\n\n    --bs-table-border-color: #afffff !important;       /* 边框颜色 */\n\n    --bs-table-hover-color: #f56464 !important;        /* 悬停文字颜色 */\n    --bs-table-hover-bg: #ebe3e3 !important;          /* 悬停背景颜色 */\n    border: none !important;              /* 移除表格外边框 */\n    border-collapse: collapse !important;  /* 确保边框合并 */\n}\n\n\ntd, th {\n    padding: 4px !important;\n}\n\n.table {\n    margin-bottom: 0;\n    min-width: auto !important;\n}\n\n/* 确保表格容器有正确的宽度和溢出处理 */\n.table-responsive {\n    width: 100%;\n    overflow-x: hidden;\n}\n\n\n\n/* 专门设置表头样式 */\n.table thead,\n.table > thead{\n    border: none !important;              \n    background: linear-gradient(to right, #0D6E6E, #4a9d9c) !important;  \n}\n\n/* 确保表头单元格没有背景色 */\n.table thead tr,\n.table thead th {\n    background: transparent !important;    /* 确保tr和th是透明的 */\n    border: none !important;              \n    color: #ffffff !important;            /* 表头文字颜色 */\n}\n\n\n\n\n/* 记忆概率指示器样式 */\n.memory-indicator {\n    display: inline-flex;\n    align-items: center;\n    padding: 4px 8px;\n    border-radius: 12px;\n    transition: all 0.3s ease;\n}\n\n.memory-indicator:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    transform: scale(1.05);\n}\n\n.memory-indicator i {\n    font-size: 1.1em;\n}\n\n/* 颜色类 */\n.text-success { color: #4caf50 !important; }\n.text-warning { color: #ff9800 !important; }\n.text-danger { color: #f44336 !important; }\n\n\n\n/* 设置卡片样式调整 */\n.option-card {\n    background-color: #1d2e3d;\n    border-radius: 10px;\n    padding: 20px;\n    text-align: center;\n    transition: all 0.3s ease;\n}\n\n.option-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 16px rgba(74, 157, 156, 0.2);\n}\n\n.option-card i {\n    font-size: 2em;\n    color: #4a9d9c;\n    margin-bottom: 15px;\n}\n\n.option-card h4 {\n    color: #fff;\n    margin-bottom: 15px;\n}\n\n.option-card p {\n    color: #888;\n    font-size: 0.9em;\n}\n\n/* 表单控件样式 */\n.form-select {\n    background-color: #0D1F2D;\n    color: #fff;\n    border: 1px solid #4a9d9c;\n    margin-top: 10px;\n}\n\n.sync-tips {\n    margin-top: 10px;\n    font-size: 1.0em;\n    color: #888;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n.reminder-tips {\n    margin-top: 10px;\n    font-size: 1.0em;\n    color: #888;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n.save-section {\n    grid-column: 1 / -1;\n    text-align: center;\n    margin-top: 20px;\n}\n\n/* 开关按钮样式 */\n.form-check-input.custom-switch {\n    background-color: #0D1F2D !important;\n    border-color: #4a9d9c !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    transition: all 0.3s ease;\n    cursor: pointer !important;\n    pointer-events: auto !important;\n    opacity: 1;\n    z-index: 100;\n    position: relative;\n    outline: none !important;\n    /* 自定义滑块圆圈颜色为亮蓝色 */\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2361dafb'/%3e%3c/svg%3e\") !important;\n}\n\n/* 选中状态下的样式 */\n.form-check-input.custom-switch:checked {\n    background-color: #0D6E6E !important;\n    border-color: #0D6E6E !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    /* 选中状态下保持相同的蓝色圆圈 */\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2361dafb'/%3e%3c/svg%3e\") !important;\n}\n\n/* 悬停状态加强发光效果 */\n.form-check-input.custom-switch:hover {\n    box-shadow: 0 0 15px rgba(97, 218, 251, 0.9);\n}\n\n/* 焦点状态 */\n.form-check-input.custom-switch:focus {\n    background-color: inherit !important;  /* 继承当前状态的背景色 */\n    border-color: #4a9d9c !important;\n    box-shadow: 0 0 12px rgba(74, 157, 156, 0.9);\n    outline: none !important;\n}\n\n/* 选中且焦点状态 */\n.form-check-input.custom-switch:checked:focus {\n    background-color: #4a9d9c !important;\n}\n\n\n\n\n\n/* SweetAlert2 自定义样式 */\n.colored-toast.swal2-icon-success {\n    background-color: #1d2e3d !important;\n    border: 1px solid #4a9d9c !important;\n}\n\n.colored-toast .swal2-title {\n    color: #ffffff !important;\n    font-size: 1em !important;\n}\n\n.colored-toast .swal2-close {\n    color: #4a9d9c !important;\n}\n\n.colored-toast .swal2-html-container {\n    color: #888 !important;\n    font-size: 0.9em !important;\n}\n\n/* 成功图标颜色 */\n.colored-toast .swal2-success-line-tip,\n.colored-toast .swal2-success-line-long {\n    background-color: #4a9d9c !important;\n}\n\n.colored-toast .swal2-success-ring {\n    border-color: #4a9d9c !important;\n}\n\n/* 更新概要样式 */\n.update-badge {\n    background-color: #FF3D3D;\n    color: white;\n    padding: 2px 5px;\n    border-radius: 3px;\n    font-size: 0.8em;\n    margin-right: 5px;\n    font-weight: bold;\n}\n\n.update-summary {\n    background-color: rgba(74, 157, 156, 0.1);\n    border-radius: 4px;\n    padding: 3px 0 !important;\n    margin-bottom: 8px !important;\n}\n\n.update-summary a {\n    color: #4a9d9c;\n    text-decoration: none;\n    margin-left: 5px;\n}\n\n.update-summary a:hover {\n    text-decoration: underline;\n    color: #afffff;\n}\n\n/* 图标按钮样式 */\n.btn-icon {\n    background: none;\n    border: none;\n    color: #4a9d9c;\n    font-size: 1em;\n    width: 28px;\n    height: 28px;\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    background-color: transparent;\n}\n\n.btn-icon:hover {\n    background-color: rgba(74, 157, 156, 0.1);\n    color: #61dafb;\n    transform: translateY(-1px);\n}\n\n.btn-icon:active {\n    transform: translateY(0);\n}\n\n.btn-icon-sm {\n    width: 24px;\n    height: 24px;\n}\n\n/* 优化参数进度条样式 */\n.optimize-progress {\n    height: 3px !important;\n    background-color: rgba(74, 157, 156, 0.1) !important;\n    border-radius: 4px !important;\n    margin-top: 12px !important;\n    overflow: hidden !important;\n}\n\n.optimize-progress .progress-bar {\n    background: linear-gradient(90deg, #4a9d9c, #61dafb) !important;\n    transition: width 0.3s ease !important;\n}\n\n.optimize-progress .progress-bar-animated {\n    animation: progress-bar-stripes 1s linear infinite !important;\n}\n\n.optimize-progress .progress-bar-striped {\n    background-image: linear-gradient(\n        45deg,\n        rgba(255, 255, 255, 0.15) 25%,\n        transparent 25%,\n        transparent 50%,\n        rgba(255, 255, 255, 0.15) 50%,\n        rgba(255, 255, 255, 0.15) 75%,\n        transparent 75%,\n        transparent\n    ) !important;\n    background-size: 1rem 1rem !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
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

/***/ 667:
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

/***/ 537:
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

/***/ 823:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(699);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 379:
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

/***/ 569:
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

/***/ 216:
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

/***/ 565:
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

/***/ 795:
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

/***/ 589:
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

/***/ 455:
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

/***/ 150:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.12.0 - Tue May 14 2024 18:01:29 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
    throw new Error("This script should only be loaded in a browser extension.");
  }
  if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };
      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }
        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }
          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };
      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }
          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }
          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };
      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },
          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }
            if (!(prop in target)) {
              return undefined;
            }
            let value = target[prop];
            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });
              return value;
            }
            cache[prop] = value;
            return value;
          },
          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },
          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },
          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },
        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },
        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });
      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */
        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {} /* wrappers */, {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      });
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }
          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }
              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });
      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };
      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }
        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }
        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };
      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = globalThis.browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ 852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ webdavEnhancedSettings)
/* harmony export */ });
/* harmony import */ var _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _service_syncManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(584);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(867);
/**
 * WebDAV Enhanced Settings Component
 * Handles UI interactions for the enhanced WebDAV service
 */





class WebDAVEnhancedSettings {
    constructor() {
        this.elements = {};
        this.isInitialized = false;
    }

    /**
     * 初始化组件
     */
    async initialize() {
        if (this.isInitialized) return;

        this.cacheElements();
        this.attachEventListeners();
        await this.loadCurrentConfig();

        // 监听认证状态变化
        _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.onAuthStatusChange = (isAuthenticated) => {
            this.updateConnectionStatus(isAuthenticated);
        };

        this.isInitialized = true;
    }

    /**
     * 缓存 DOM 元素
     */
    cacheElements() {
        this.elements = {
            toggle: document.getElementById('webdavToggle'),
            settings: document.getElementById('webdavSettings'),
            username: document.getElementById('webdavUsername'),
            password: document.getElementById('webdavPassword'),

            // 连接模式
            modeRadios: document.querySelectorAll('input[name="webdavMode"]'),

            // 高级设置
            advanced: document.getElementById('webdavAdvanced'),
            disguise: document.getElementById('webdavDisguise'),
            retries: document.getElementById('webdavRetries'),
            timeout: document.getElementById('webdavTimeout'),

            // 按钮
            testBtn: document.getElementById('testWebdav'),
            backupBtn: document.getElementById('backupNow'),
            restoreBtn: document.getElementById('restoreData'),
            logoutBtn: document.getElementById('logoutWebdav'),

            // 状态显示
            status: document.getElementById('webdavStatus'),
            statusText: document.getElementById('webdavStatusText')
        };
    }

    /**
     * 绑定事件监听器
     */
    attachEventListeners() {
        // 开关切换
        this.elements.toggle?.addEventListener('change', () => this.handleToggle());

        // 测试连接按钮
        this.elements.testBtn?.addEventListener('click', () => this.testConnection());

        // 备份按钮
        this.elements.backupBtn?.addEventListener('click', () => this.backupData());

        // 恢复按钮
        this.elements.restoreBtn?.addEventListener('click', () => this.restoreData());

        // 登出按钮
        this.elements.logoutBtn?.addEventListener('click', () => this.logout());

        // 监听输入变化，自动保存
        this.elements.username?.addEventListener('change', () => this.autoSave());
        this.elements.password?.addEventListener('change', () => this.autoSave());

        // 监听配置变化
        this.elements.modeRadios?.forEach(radio => {
            radio.addEventListener('change', () => this.autoSave());
        });

        this.elements.disguise?.addEventListener('change', () => this.autoSave());
        this.elements.retries?.addEventListener('change', () => this.autoSave());
        this.elements.timeout?.addEventListener('change', () => this.autoSave());
    }

    /**
     * 加载当前配置
     */
    async loadCurrentConfig() {
        const hasConfig = await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.loadConfig();

        if (hasConfig) {
            // 设置开关状态
            if (this.elements.toggle) {
                this.elements.toggle.checked = true;
                this.elements.settings.style.display = 'block';
            }

            // 立即显示当前认证状态
            const status = _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.getConnectionStatus();
            this.updateConnectionStatus(status.isAuthenticated);

            // 如果已认证但没有最新状态，后台更新一次
            if (status.isAuthenticated && (!status.strategy || !status.strategy.timestamp ||
                Date.now() - new Date(status.strategy.timestamp).getTime() > 5 * 60 * 1000)) {
                // 超过5分钟或没有状态记录，后台静默测试连接
                _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.testConnection().then(result => {
                    this.updateConnectionStatus(result.success);
                }).catch(() => {
                    // 静默失败，保持当前状态
                });
            }

            // 加载配置值
            const config = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.storage.local.get('webdavEnhancedConfig');
            if (config.webdavEnhancedConfig) {
                const savedConfig = config.webdavEnhancedConfig;

                // 基本信息
                if (this.elements.username) {
                    this.elements.username.value = savedConfig.username || '';
                }
                // 显示密码（像原来的设计一样）
                if (this.elements.password && savedConfig.password) {
                    this.elements.password.value = atob(savedConfig.password);
                }

                // 连接策略
                if (savedConfig.connectionStrategy) {
                    const protocol = savedConfig.connectionStrategy.protocol || 'auto';
                    const methodDisguise = savedConfig.connectionStrategy.method === 'disguised';

                    // 设置协议模式
                    this.elements.modeRadios?.forEach(radio => {
                        if (radio.value === protocol) {
                            radio.checked = true;
                        }
                    });

                    // 设置方法伪装
                    if (this.elements.disguise) {
                        this.elements.disguise.checked = methodDisguise ||
                                                          savedConfig.connectionStrategy.method === 'auto';
                    }
                }

                // 重试配置
                if (savedConfig.retryConfig) {
                    if (this.elements.retries) {
                        this.elements.retries.value = savedConfig.retryConfig.maxRetries || 3;
                    }
                    if (this.elements.timeout) {
                        this.elements.timeout.value = (savedConfig.retryConfig.timeout || 10000) / 1000;
                    }
                }
            }
        }
    }

    /**
     * 处理开关切换
     */
    async handleToggle() {
        const isEnabled = this.elements.toggle.checked;

        if (isEnabled) {
            this.elements.settings.style.display = 'block';
            // 如果有保存的配置，自动连接
            const hasConfig = await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.loadConfig();
            if (hasConfig) {
                await this.testConnection();
            }
        } else {
            this.elements.settings.style.display = 'none';
            await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.clearConfig();
            this.updateConnectionStatus(false);
        }
    }

    /**
     * 自动保存配置（防抖）
     */
    autoSave = (() => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                this.saveConfig();
            }, 1000);
        };
    })();

    /**
     * 尝试使用保存的配置自动连接
     */
    async tryAutoConnect() {
        const savedConfig = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.storage.local.get('webdavEnhancedConfig');
        if (savedConfig.webdavEnhancedConfig && savedConfig.webdavEnhancedConfig.enabled) {
            const config = savedConfig.webdavEnhancedConfig;
            if (config.username && config.password) {
                const actualConfig = {
                    username: config.username,
                    password: atob(config.password),
                    connectionMode: config.connectionStrategy || { protocol: 'auto', method: 'auto' },
                    retryConfig: config.retryConfig || { maxRetries: 3, timeout: 10000 }
                };
                return await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.configure(actualConfig);
            }
        }
        return false;
    }

    /**
     * 保存配置
     */
    async saveConfig() {
        const username = this.elements.username?.value;
        const password = this.elements.password?.value;

        if (!username || !password) {
            return;
        }

        // 获取连接模式
        let protocol = 'auto';
        this.elements.modeRadios?.forEach(radio => {
            if (radio.checked) {
                protocol = radio.value;
            }
        });

        // 获取方法模式
        const methodDisguise = this.elements.disguise?.checked;
        const method = methodDisguise ? 'auto' : 'native';

        // 获取重试配置
        const retries = parseInt(this.elements.retries?.value || 3);
        const timeout = parseInt(this.elements.timeout?.value || 10) * 1000;

        const config = {
            username,
            password,
            connectionMode: {
                protocol,
                method
            },
            retryConfig: {
                maxRetries: retries,
                timeout: timeout
            }
        };

        // 保存配置但不立即连接
        await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.saveConfig(config);
    }

    /**
     * 测试连接
     */
    async testConnection() {
        const username = this.elements.username?.value?.trim();
        const password = this.elements.password?.value?.trim();

        if (!username || !password) {
            this.showMessage('请输入账号和密码', 'error');
            return;
        }

        this.showMessage('正在测试连接...', 'info');
        this.setButtonsDisabled(true);

        // 获取配置
        let protocol = 'auto';
        this.elements.modeRadios?.forEach(radio => {
            if (radio.checked) {
                protocol = radio.value;
            }
        });

        const methodDisguise = this.elements.disguise?.checked;
        const method = methodDisguise ? 'auto' : 'native';

        const retries = parseInt(this.elements.retries?.value || 3);
        const timeout = parseInt(this.elements.timeout?.value || 10) * 1000;

        try {
            const config = {
                username,
                password,
                connectionMode: {
                    protocol,
                    method
                },
                retryConfig: {
                    maxRetries: retries,
                    timeout: timeout
                }
            };

            const success = await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.configure(config);

            if (success) {
                const status = _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.getConnectionStatus();
                let strategyText = '';

                if (status.currentProtocol && status.currentMethod) {
                    const protocolText = status.currentProtocol === 'https' ? 'HTTPS' : 'HTTP';
                    const methodText = status.currentMethod === 'disguised' ? '伪装' : '原生';
                    strategyText = ` (${protocolText} + ${methodText})`;
                }

                this.showMessage(`连接成功${strategyText}`, 'success');
                this.updateConnectionStatus(true);

                // 连接成功后进行一次同步
                try {
                    await _service_syncManager__WEBPACK_IMPORTED_MODULE_1__/* .syncManager */ .D.performSync();
                } catch (e) {
                    console.warn('Sync after connect failed:', e);
                }
            } else {
                this.showMessage('连接失败，请检查账号密码和网络设置', 'error');
                this.updateConnectionStatus(false);
            }
        } catch (error) {
            console.error('Connection test failed:', error);
            this.showMessage(`连接失败: ${error.message}`, 'error');
            this.updateConnectionStatus(false);
        } finally {
            this.setButtonsDisabled(false);
        }
    }

    /**
     * 备份数据
     */
    async backupData() {
        if (!_service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isAuthenticated) {
            // 尝试使用保存的配置自动连接
            const connected = await this.tryAutoConnect();
            if (!connected) {
                this.showMessage('请先连接 WebDAV', 'error');
                return;
            }
        }

        this.showMessage('正在备份...', 'info');
        this.setButtonsDisabled(true);

        try {
            const { getAllProblems } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 820));
            const problems = await getAllProblems();
            // 转换为数组
            const problemsArray = Object.values(problems);
            const filename = await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.backupProblems(problemsArray);
            this.showMessage(`备份成功: ${filename}`, 'success');

            // 备份完成（无全局事件通知）
        } catch (error) {
            console.error('Backup failed:', error);
            this.showMessage(`备份失败: ${error.message}`, 'error');
        } finally {
            this.setButtonsDisabled(false);
        }
    }

    /**
     * 恢复数据
     */
    async restoreData() {
        if (!_service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isAuthenticated) {
            this.showMessage('请先连接 WebDAV', 'error');
            return;
        }

        // 获取备份列表
        this.showMessage('正在获取备份列表...', 'info');
        this.setButtonsDisabled(true);

        try {
            const backups = await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.getBackupList();

            if (backups.length === 0) {
                this.showMessage('没有找到备份文件', 'warning');
                return;
            }

            // 显示备份选择对话框
            const selectedBackup = await this.showBackupSelector(backups);

            if (selectedBackup) {
                this.showMessage('正在恢复数据...', 'info');
                const problemsArray = await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.restoreProblems(selectedBackup);

                // 转换数组为对象格式（以 index 为 key）
                const problemsObj = {};
                problemsArray.forEach(problem => {
                    if (problem.index) {
                        problemsObj[problem.index] = problem;
                    }
                });

                // 使用 setProblems 直接覆盖本地存储（会自动处理当前模式）
                const { setProblems } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 820));
                await setProblems(problemsObj);

                this.showMessage('数据恢复成功', 'success');

                // 恢复完成（无全局事件通知）

                // 刷新页面显示
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        } catch (error) {
            console.error('Restore failed:', error);
            this.showMessage(`恢复失败: ${error.message}`, 'error');
        } finally {
            this.setButtonsDisabled(false);
        }
    }

    /**
     * 显示备份选择对话框
     */
    async showBackupSelector(backups) {
        // 导入 SweetAlert2
        const Swal = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 455, 23))).default;

        // 构建备份列表 HTML
        const backupOptions = backups.slice(0, 5).map(backup => {
            const date = new Date(backup.lastModified).toLocaleString();
            const size = (backup.size / 1024).toFixed(2);
            return `
                <div style="padding: 10px; border: 1px solid #ddd; margin: 5px 0; border-radius: 5px; cursor: pointer;"
                     class="backup-option" data-filename="${backup.name}">
                    <strong>${backup.name}</strong><br>
                    <small>时间: ${date} | 大小: ${size} KB</small>
                </div>
            `;
        }).join('');

        const result = await Swal.fire({
            title: '选择要恢复的备份',
            html: `
                <div style="max-height: 300px; overflow-y: auto;">
                    ${backupOptions}
                </div>
                <p style="margin-top: 10px; color: #ff6b6b;">
                    <strong>⚠️ 警告：恢复将覆盖当前所有数据！</strong>
                </p>
            `,
            showCancelButton: true,
            confirmButtonText: '确认恢复',
            cancelButtonText: '取消',
            confirmButtonColor: '#ff6b6b',
            didOpen: () => {
                // 添加点击选择效果
                const options = Swal.getHtmlContainer().querySelectorAll('.backup-option');
                let selectedFilename = backups[0].name; // 默认选择第一个

                options.forEach(option => {
                    option.addEventListener('click', () => {
                        options.forEach(opt => opt.style.background = '');
                        option.style.background = '#e3f2fd';
                        selectedFilename = option.dataset.filename;
                    });
                });

                // 默认选中第一个
                if (options[0]) {
                    options[0].style.background = '#e3f2fd';
                }

                // 保存选中的文件名
                Swal.selectedFilename = selectedFilename;
            },
            preConfirm: () => {
                const options = Swal.getHtmlContainer().querySelectorAll('.backup-option');
                let selectedFilename = null;
                options.forEach(option => {
                    if (option.style.background) {
                        selectedFilename = option.dataset.filename;
                    }
                });
                return selectedFilename || backups[0].name;
            }
        });

        return result.isConfirmed ? result.value : null;
    }

    /**
     * 登出
     */
    async logout() {
        if (confirm('确定要退出 WebDAV 账号吗？')) {
            await _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.clearConfig();
            this.elements.username.value = '';
            this.elements.password.value = '';
            this.updateConnectionStatus(false);
            this.showMessage('已退出账号', 'info');

            // 已登出（无全局事件通知）
        }
    }

    /**
     * 更新连接状态显示
     */
    updateConnectionStatus(isConnected) {
        if (!this.elements.status) return;

        if (isConnected) {
            const status = _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.getConnectionStatus();
            let statusText = '已连接';

            if (status.currentProtocol && status.currentMethod) {
                const protocolText = status.currentProtocol === 'https' ? 'HTTPS' : 'HTTP';
                const methodText = status.currentMethod === 'disguised' ? '伪装' : '原生';
                statusText = `已连接 (${protocolText} + ${methodText})`;
            }

            this.elements.status.style.display = 'block';
            this.elements.status.style.background = '#d4edda';
            this.elements.status.style.border = '1px solid #c3e6cb';
            this.elements.status.style.padding = '8px';
            this.elements.status.style.borderRadius = '4px';
            this.elements.statusText.textContent = statusText;
            this.elements.statusText.style.color = '#155724';
            this.elements.statusText.style.fontWeight = '500';
        } else {
            // 未连接时也显示状态
            this.elements.status.style.display = 'block';
            this.elements.status.style.background = '#f8d7da';
            this.elements.status.style.border = '1px solid #f5c6cb';
            this.elements.status.style.padding = '8px';
            this.elements.status.style.borderRadius = '4px';
            this.elements.statusText.textContent = '未连接';
            this.elements.statusText.style.color = '#721c24';
            this.elements.statusText.style.fontWeight = '500';
        }
    }

    /**
     * 显示消息
     */
    showMessage(message, type = 'info') {
        // 清除之前的定时器
        if (this.messageTimer) {
            clearTimeout(this.messageTimer);
        }

        // 使用状态区域显示临时消息
        if (this.elements.status && this.elements.statusText) {
            this.elements.status.style.display = 'block';

            // 使用更明显的颜色和更好的对比度
            const colors = {
                success: '#d4edda',  // 浅绿色背景
                error: '#f8d7da',    // 浅红色背景
                warning: '#fff3cd',  // 浅黄色背景
                info: '#d1ecf1'      // 浅蓝色背景
            };

            const textColors = {
                success: '#155724',  // 深绿色文字
                error: '#721c24',    // 深红色文字
                warning: '#856404',  // 深黄色文字
                info: '#0c5460'      // 深蓝色文字
            };

            // 添加边框以增强可见性
            const borderColors = {
                success: '#c3e6cb',
                error: '#f5c6cb',
                warning: '#ffeeba',
                info: '#bee5eb'
            };

            this.elements.status.style.background = colors[type] || colors.info;
            this.elements.status.style.border = `1px solid ${borderColors[type] || borderColors.info}`;
            this.elements.status.style.padding = '8px';
            this.elements.status.style.borderRadius = '4px';
            this.elements.statusText.textContent = message;
            this.elements.statusText.style.color = textColors[type] || textColors.info;
            this.elements.statusText.style.fontWeight = '500';

            // 根据消息类型决定显示时长
            const displayTime = type === 'error' ? 5000 : 3000;

            // 如果是成功连接，不自动隐藏
            if (type === 'success' && message.includes('连接成功')) {
                // 更新为持久的连接状态
                this.messageTimer = setTimeout(() => {
                    this.updateConnectionStatus(true);
                }, displayTime);
            } else {
                // 其他消息过后恢复正常状态
                this.messageTimer = setTimeout(() => {
                    const status = _service_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.getConnectionStatus();
                    this.updateConnectionStatus(status.isAuthenticated);
                }, displayTime);
            }
        }
    }

    /**
     * 设置按钮禁用状态
     */
    setButtonsDisabled(disabled) {
        const buttons = [
            this.elements.testBtn,
            this.elements.backupBtn,
            this.elements.restoreBtn,
            this.elements.logoutBtn
        ];

        buttons.forEach(btn => {
            if (btn) {
                btn.disabled = disabled;
            }
        });
    }
}

// 导出单例
const webdavEnhancedSettings = new WebDAVEnhancedSettings();


/***/ }),

/***/ 326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ initializeReviewPage)
});

// UNUSED EXPORTS: initializeFeedbackButton, updateCardDisplay

// EXTERNAL MODULE: ./src/popup/view/view.js + 8 modules
var view = __webpack_require__(842);
// EXTERNAL MODULE: ./src/popup/service/problemService.js + 1 modules
var problemService = __webpack_require__(820);
// EXTERNAL MODULE: ./src/popup/service/modeService.js
var modeService = __webpack_require__(733);
// EXTERNAL MODULE: ./src/popup/delegate/localStorageDelegate.js
var localStorageDelegate = __webpack_require__(891);
// EXTERNAL MODULE: ./src/popup/util/utils.js
var utils = __webpack_require__(384);
// EXTERNAL MODULE: ./src/popup/entity/problem.js
var entity_problem = __webpack_require__(875);
// EXTERNAL MODULE: ./src/popup/service/fsrsService.js
var fsrsService = __webpack_require__(990);
;// CONCATENATED MODULE: ./src/popup/script/submission.js










const addRecordButton = () => {
    // 添加按钮样式
    const style = document.createElement('style');
    style.textContent = `
        .Leetcode-Mastery-Scheduler-record-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 8px 12px;  /* 减小内边距 */
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 6px;  /* 稍微减小圆角 */
            cursor: pointer;
            font-size: 13px;  /* 减小字体大小 */
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
            transition: background 0.2s ease, box-shadow 0.2s ease;
            z-index: 9999;
            user-select: none;
            display: flex;
            align-items: center;
            line-height: 1;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn:hover {
            box-shadow: 0 3px 10px rgba(37, 99, 235, 0.3);
        }
        
        .Leetcode-Mastery-Scheduler-record-btn.dragging {
            opacity: 0.8;
            cursor: grabbing;
            transition: none;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .drag-handle {
            display: inline-block;
            margin-right: 6px;  /* 减小间距 */
            cursor: grab;
            opacity: 0.7;
            font-size: 12px;  /* 减小拖动手柄大小 */
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .drag-handle:hover {
            opacity: 1;
        }
        
        /* reset-position removed */

        .Leetcode-Mastery-Scheduler-record-btn .separator {
            margin: 0 6px;
            opacity: 0.6;
            user-select: none;
        }

        .Leetcode-Mastery-Scheduler-record-btn .add-today {
            margin-left: 4px;
            opacity: 0.95;
            cursor: pointer;
            font-size: 12px;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid rgba(255,255,255,0.35);
            background: rgba(255,255,255,0.12);
        }
        .Leetcode-Mastery-Scheduler-record-btn .add-today:hover {
            background: rgba(255,255,255,0.22);
            border-color: rgba(255,255,255,0.55);
        }

        .Leetcode-Mastery-Scheduler-record-btn .star-icon {
            margin-right: 4px;
            font-size: 11px;
        }
    `;
    document.head.appendChild(style);

    // 从localStorage获取保存的位置
    const savedPosition = JSON.parse(localStorage.getItem('LMS_rateButtonPosition') || '{"bottom": 20, "right": 20}');
    
    // 创建按钮
    const button = document.createElement('button');
    button.className = 'Leetcode-Mastery-Scheduler-record-btn';
    button.innerHTML = `
        <span class="drag-handle">⋮</span>
        <i class="fas fa-star star-icon"></i>Rate
        <span class="separator">|</span>
        <span class="add-today" title="加入待复习题目队列 | Add to review queue">＋</span>
    `;
    
    // 设置保存的位置
    button.style.bottom = `${savedPosition.bottom}px`;
    button.style.right = `${savedPosition.right}px`;
    
    // 添加点击事件
    button.addEventListener('click', async (e) => {
        // 如果点击的是拖动手柄、分隔符或“加入今日”，不触发评分
        const t = e.target;
        if (t && t.classList && (t.classList.contains('drag-handle') ||
            t.classList.contains('separator') ||
            t.classList.contains('add-today'))) {
            return;
        }
        
        const result = await handleFeedbackSubmission();
        if (result) {
            console.log("Submission successfully tracked!");
            console.log("难度记录成功！");
        }
    });
    
    // reset button removed

    // 加入今日待复习（不触发评分）
    const addTodayBtn = button.querySelector('.add-today');
    if (addTodayBtn) {
        addTodayBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            try {
                const result = await handleAddProblem(window.location.href);
                if (result) {
                    showToast('已加入待复习题目队列\nAdded to review queue.', 'success');
                }
            } catch (error) {
                if (error?.message && error.message.includes('Duplicate')) {
                    showToast('题目已存在，未进行改动\nAlready exists. No changes made.', 'warning');
                } else {
                    showToast(`加入失败：${error?.message || 'Unknown error'}`, 'error');
                }
            }
        });
    }
    
    // 添加拖拽功能
    let isDragging = false;
    let startX, startY, startBottom, startRight;
    
    const dragHandle = button.querySelector('.drag-handle');
    
    // 鼠标按下事件
    const onMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        isDragging = true;
        button.classList.add('dragging');
        
        // 记录初始位置
        startX = e.clientX;
        startY = e.clientY;
        startBottom = parseInt(getComputedStyle(button).bottom);
        startRight = parseInt(getComputedStyle(button).right);
        
        // 添加鼠标移动和松开事件
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    
    // 鼠标移动事件
    const onMouseMove = (e) => {
        if (!isDragging) return;
        
        // 计算新位置
        const deltaX = startX - e.clientX;
        const deltaY = e.clientY - startY;  // 修正垂直方向
        
        const newRight = Math.max(10, startRight + deltaX);
        const newBottom = Math.max(10, startBottom - deltaY);
        
        // 确保按钮不会超出屏幕
        const maxRight = window.innerWidth - button.offsetWidth - 10;
        const maxBottom = window.innerHeight - button.offsetHeight - 10;
        
        button.style.right = `${Math.min(newRight, maxRight)}px`;
        button.style.bottom = `${Math.min(newBottom, maxBottom)}px`;
    };
    
    // 鼠标松开事件
    const onMouseUp = () => {
        if (!isDragging) return;
        
        isDragging = false;
        button.classList.remove('dragging');
        
        // 保存新位置到localStorage
        localStorage.setItem('LMS_rateButtonPosition', JSON.stringify({
            bottom: parseInt(button.style.bottom),
            right: parseInt(button.style.right)
        }));
        
        // 移除事件监听器
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
    
    // 添加事件监听器
    dragHandle.addEventListener('mousedown', onMouseDown);
    
    // 添加到页面
    document.body.appendChild(button);

    // 添加窗口大小变化监听器
    window.addEventListener('resize', () => {
        const buttonRect = button.getBoundingClientRect();
        const maxRight = window.innerWidth - button.offsetWidth - 10;
        const maxBottom = window.innerHeight - button.offsetHeight - 10;
        
        // 如果按钮超出可视区域，调整位置
        if (parseInt(button.style.right) > maxRight) {
            button.style.right = `${maxRight}px`;
        }
        if (parseInt(button.style.bottom) > maxBottom) {
            button.style.bottom = `${maxBottom}px`;
        }
        
        // 保存调整后的位置
        localStorage.setItem('LMS_rateButtonPosition', JSON.stringify({
            bottom: parseInt(button.style.bottom),
            right: parseInt(button.style.right)
        }));
    });
};


// 抽取成通用的处理函数
async function handleFeedbackSubmission(problem = null, fromPopup = false) {
    try {
        // 记录是否为页面提交（在 LeetCode 页面上点击 Rate 按钮）
        // 只有当没有传入 problem 且不是从 popup 调用时，才是页面提交
        const isPageSubmission = !problem && !fromPopup;
        
        // 显示难度反馈弹窗
        const feedback = await showDifficultyFeedbackDialog().catch(error => {
            console.log(error);  // "用户取消评分"
            return null;  // 返回 null 表示用户取消
        });

        // 如果用户取消，直接返回
        if (!feedback) {
            return null;
        }

        // 如果没有传入 problem，说明是页面提交，需要获取题目信息
        if (!problem) {
            await (0,problemService/* syncProblems */.xd)();   // 同步云端数据
            const { problemIndex, problemName, problemLevel, problemUrl } = await (0,problemService/* getCurrentProblemInfoFromLeetCodeByHref */.cp)();
            const problems = await (0,problemService.getAllProblems)();
            problem = problems[problemIndex];
            
            // 如果是新题目，创建新的 problem 对象
            if (!problem || problem.isDeleted == true) {
                problem = new entity_problem/* Problem */.tc(problemIndex, problemName, problemLevel, problemUrl, Date.now(), (0,utils/* getDifficultyBasedSteps */.tL)(problemLevel)[0], Date.now());
                // 新题目标记，跳过今日复习检查
                problem.isNewProblem = true;
            }
        }
        
        // 检查上次复习时间是否是今天，如果是则不允许再次复习（新题目跳过此检查）
        if (!problem.isNewProblem && problem.fsrsState && problem.fsrsState.lastReview) {
            const lastReviewDate = new Date(problem.fsrsState.lastReview);
            const today = new Date();
            
            // 比较年、月、日是否相同（考虑时区影响）
            if (lastReviewDate.getFullYear() === today.getFullYear() &&
                lastReviewDate.getMonth() === today.getMonth() &&
                lastReviewDate.getDate() === today.getDate()) {
                
                // 显示双语警告提示
                showToast("今天已经复习过这道题了，请明天再来！\nYou've already reviewed this problem today. Please come back tomorrow!", "warning");
                return null;
            }
        }
        
        // 清除新题目标记
        delete problem.isNewProblem;
        
        problem = await (0,fsrsService/* updateProblemWithFSRS */.Gq)(problem, feedback);
        await (0,problemService/* createOrUpdateProblem */.qu)(problem);

        // 只有在页面提交时才显示成功提示
        if (isPageSubmission) {
            // 计算下次复习时间与今天的天数差
            const nextReviewDate = new Date(problem.fsrsState.nextReview);
            const today = new Date();
            const diffTime = nextReviewDate.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // 显示复习成功提示，包含下次复习时间
            showToast(`复习成功！下次复习时间：${nextReviewDate.toLocaleDateString()}（${diffDays}天后）\nReview successful! Next review: ${nextReviewDate.toLocaleDateString()} (in ${diffDays} days)`, "success");
        }

        await (0,problemService/* syncProblems */.xd)(); // 同步到云端
        console.log("提交成功！");
        return problem;
    } catch (error) {
        console.error("提交时出错：", error);
        return null;
    }
}

// 添加一个更醒目的提示框函数，支持不同类型的提示
function showToast(message, type = "info", duration = 4000) {
    // 检查是否已存在toast样式
    if (!document.getElementById('lms-toast-style')) {
        const style = document.createElement('style');
        style.id = 'lms-toast-style';
        style.textContent = `
            .lms-toast {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 12px 24px;
                border-radius: 4px;
                z-index: 10000;
                font-size: 14px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                animation: lms-toast-in 0.3s ease;
                max-width: 80%;
                text-align: center;
                white-space: pre-line;
                font-weight: 500;
            }
            
            .lms-toast-info {
                background-color: #1890ff;
                color: white;
                border-left: 4px solid #096dd9;
            }
            
            .lms-toast-success {
                background-color: #52c41a;
                color: white;
                border-left: 4px solid #389e0d;
            }
            
            .lms-toast-warning {
                background-color: #ffd666;
                color: #874d00;
                border-left: 4px solid #faad14;
                font-weight: bold;
            }
            
            .lms-toast-error {
                background-color: #ff4d4f;
                color: white;
                border-left: 4px solid #cf1322;
                font-weight: bold;
            }
            
            @keyframes lms-toast-in {
                from {
                    opacity: 0;
                    transform: translate(-50%, -20px);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, 0);
                }
            }
            
            .lms-toast-icon {
                margin-right: 8px;
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
    }
    
    // 移除可能存在的旧提示
    const existingToast = document.querySelector('.lms-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `lms-toast lms-toast-${type}`;
    
    // 添加图标
    let icon = '';
    switch(type) {
        case 'info': icon = 'ℹ️'; break;
        case 'success': icon = '✅'; break;
        case 'warning': icon = '⚠️'; break;
        case 'error': icon = '❌'; break;
    }
    
    toast.innerHTML = `<span class="lms-toast-icon">${icon}</span>${message}`;
    document.body.appendChild(toast);
    
    // 添加点击关闭功能
    toast.addEventListener('click', () => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    });
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
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
            <h3>How difficult was this problem for you?</h3>
            <div class="quality-buttons">
                <button data-quality="1">Very Hard</button>
                <button data-quality="2">Hard</button>
                <button data-quality="3">Medium</button>
                <button data-quality="4">Easy</button>
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






// 处理新建题目 - 设置为今天待复习
async function handleAddProblem(url) {
    try {
        await (0,problemService/* syncProblems */.xd)();  // 同步云端数据
        const problems = await (0,problemService.getAllProblems)();
        
        // 使用新的API获取题目信息
        const problemInfo = await (0,problemService/* getCurrentProblemInfoFromLeetCodeByUrl */.Oo)(url);
        
        const { problemIndex, problemName, problemLevel, problemUrl } = problemInfo;
        
        // 检查是否已存在
        if (problems[problemIndex] && !problems[problemIndex].isDeleted) {
            throw new Error('Duplicate problem name exists.');
        }
        
        const now = Date.now();
        // 创建新问题
        const problem = new entity_problem/* Problem */.tc(
            problemIndex,
            problemName,
            problemLevel,
            problemUrl,
            now,    // createTime
            0,      // nextStep
            null    // lastReviewTime
        );
        
        // 设置初始状态
        problem.proficiency = 0;
        problem.isDeleted = false;
        problem.modificationTime = now;
        
        // 设置初始 FSRS 状态 - 设置 nextReview 为今天
        problem.fsrsState = {
            difficulty: null,
            stability: null,
            state: 'New',
            lastReview: null,
            nextReview: now,    // 设置为当前时间，使其显示在今天的待复习列表中
            reviewCount: 0,
            lapses: 0,
            quality: null
        };
        
        await (0,problemService/* createOrUpdateProblem */.qu)(problem);
        await (0,problemService/* syncProblems */.xd)();
        
        return problem;
    } catch (error) {
        console.error('Failed to add card:', error);
        throw error;
    }
}

// 处理添加空白卡片
async function handleAddBlankProblem(name, level, customUrl = '') {
    try {
        await (0,problemService/* syncProblems */.xd)();  // 同步云端数据
        const problems = await (0,problemService.getAllProblems)();
        
        // 获取当前自定义题目的数量，用于生成递增的索引
        const customProblems = Object.values(problems).filter(p => 
            p.index && p.index.startsWith('custom_') && !p.isDeleted);
        const customCount = customProblems.length + 1;
        
        // 生成有规律的索引: custom_年月日_序号
        const today = new Date();
        const dateStr = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
        const customIndex = `custom_${dateStr}_${String(customCount).padStart(3, '0')}`;
        
        // 检查名称是否已存在
        const existingProblem = Object.values(problems).find(p => 
            p.name === name && !p.isDeleted);
        
        if (existingProblem) {
            throw new Error('Duplicate problem name exists.');
        }
        
        const now = Date.now();
        // 创建新问题，在名称前添加索引前缀
        const formattedName = `Ext-${customCount}. ${name}`;
        
        const problem = new entity_problem/* Problem */.tc(
            customIndex,
            formattedName,  // 名称前添加索引前缀
            level,
            customUrl,
            now,    // createTime
            0,      // nextStep
            null    // lastReviewTime
        );
        
        // 设置初始状态
        problem.proficiency = 0;
        problem.isDeleted = false;
        problem.modificationTime = now;
        problem.isCustom = true;  // 标记为自定义题目
        
        // 设置初始 FSRS 状态 - 设置 nextReview 为今天
        problem.fsrsState = {
            difficulty: null,
            stability: null,
            state: 'New',
            lastReview: null,
            nextReview: now,    // 设置为当前时间，使其显示在今天的待复习列表中
            reviewCount: 0,
            lapses: 0,
            quality: null
        };
        
        await (0,problemService/* createOrUpdateProblem */.qu)(problem);
        await (0,problemService/* syncProblems */.xd)();
        
        return problem;
    } catch (error) {
        console.error('Failed to add blank card:', error);
        throw error;
    }
}

// EXTERNAL MODULE: ./src/popup/popup.css
var popup = __webpack_require__(823);
// EXTERNAL MODULE: ./src/popup/service/configService.js
var configService = __webpack_require__(970);
// EXTERNAL MODULE: ./src/popup/store.js
var store = __webpack_require__(214);
// EXTERNAL MODULE: ./src/popup/util/sort.js
var sort = __webpack_require__(192);
// EXTERNAL MODULE: ./src/popup/util/fsrs.js
var fsrs = __webpack_require__(878);
// EXTERNAL MODULE: ./src/popup/service/webdavEnhancedService.js
var webdavEnhancedService = __webpack_require__(189);
// EXTERNAL MODULE: ./src/popup/service/syncManager.js
var syncManager = __webpack_require__(584);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(455);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// CONCATENATED MODULE: ./src/popup/component/conflictResolver.js
/**
 * Conflict Resolver Component for handling sync conflicts
 */



class ConflictResolver {
    constructor() {
        this.pendingConflicts = [];
    }

    /**
     * 解决单个冲突
     */
    async resolveConflict(conflict) {
        const localProblem = conflict.versions.find(v => v.source === 'local').problem;
        const cloudProblem = conflict.versions.find(v => v.source !== 'local')?.problem;
        
        if (!cloudProblem) {
            // 没有云端版本，使用本地版本
            return localProblem;
        }
        
        const localTime = new Date(localProblem.modificationTime || 0);
        const cloudTime = new Date(cloudProblem.modificationTime || 0);
        
        const result = await sweetalert2_all_default().fire({
            title: 'Data Conflict Detected',
            html: this.buildConflictHTML(localProblem, cloudProblem, localTime, cloudTime),
            showCancelButton: true,
            confirmButtonText: 'Use Cloud Version',
            cancelButtonText: 'Use Local Version',
            showDenyButton: true,
            denyButtonText: 'Merge Manually',
            customClass: {
                container: 'conflict-resolver-container',
                popup: 'conflict-resolver-popup'
            }
        });
        
        if (result.isConfirmed) {
            return cloudProblem;
        } else if (result.isDenied) {
            return await this.manualMerge(localProblem, cloudProblem);
        } else {
            return localProblem;
        }
    }

    /**
     * 构建冲突显示HTML
     */
    buildConflictHTML(localProblem, cloudProblem, localTime, cloudTime) {
        const formatDate = (date) => {
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        };
        
        return `
            <div class="conflict-details">
                <h4>Problem: ${localProblem.name || localProblem.title || 'Unknown'}</h4>
                <div class="conflict-comparison">
                    <div class="conflict-version">
                        <h5>Local Version</h5>
                        <p>Modified: ${formatDate(localTime)}</p>
                        <p>Proficiency: ${localProblem.proficiency || 0}</p>
                        ${localProblem.note ? `<p>Has notes: Yes</p>` : ''}
                        ${localProblem.fsrsState ? `<p>Next Review: ${new Date(localProblem.fsrsState.nextReview).toLocaleDateString()}</p>` : ''}
                    </div>
                    <div class="conflict-version">
                        <h5>Cloud Version</h5>
                        <p>Modified: ${formatDate(cloudTime)}</p>
                        <p>Proficiency: ${cloudProblem.proficiency || 0}</p>
                        ${cloudProblem.note ? `<p>Has notes: Yes</p>` : ''}
                        ${cloudProblem.fsrsState ? `<p>Next Review: ${new Date(cloudProblem.fsrsState.nextReview).toLocaleDateString()}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * 手动合并冲突
     */
    async manualMerge(localProblem, cloudProblem) {
        const result = await sweetalert2_all_default().fire({
            title: 'Manual Merge',
            html: this.buildManualMergeHTML(localProblem, cloudProblem),
            showCancelButton: true,
            confirmButtonText: 'Save Merged Version',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                return this.collectMergeChoices();
            }
        });
        
        if (result.isConfirmed && result.value) {
            return this.applyMergeChoices(localProblem, cloudProblem, result.value);
        }
        
        // 默认返回本地版本
        return localProblem;
    }

    /**
     * 构建手动合并HTML
     */
    buildManualMergeHTML(localProblem, cloudProblem) {
        return `
            <div class="manual-merge-container">
                <h4>Choose which values to keep:</h4>
                <div class="merge-field">
                    <label>Proficiency Level:</label>
                    <select id="merge-proficiency">
                        <option value="local">Local (${localProblem.proficiency || 0})</option>
                        <option value="cloud">Cloud (${cloudProblem.proficiency || 0})</option>
                        <option value="max">Use Higher Value</option>
                    </select>
                </div>
                <div class="merge-field">
                    <label>Notes:</label>
                    <select id="merge-note">
                        <option value="local">Local${localProblem.note ? ' (has content)' : ' (empty)'}</option>
                        <option value="cloud">Cloud${cloudProblem.note ? ' (has content)' : ' (empty)'}</option>
                        <option value="longest">Use Longer Note</option>
                        <option value="combine">Combine Both</option>
                    </select>
                </div>
                <div class="merge-field">
                    <label>FSRS State:</label>
                    <select id="merge-fsrs">
                        <option value="local">Local${localProblem.fsrsState ? ' (active)' : ' (none)'}</option>
                        <option value="cloud">Cloud${cloudProblem.fsrsState ? ' (active)' : ' (none)'}</option>
                        <option value="latest">Use Most Recent</option>
                    </select>
                </div>
                <div class="merge-field">
                    <label>Reviews:</label>
                    <select id="merge-reviews">
                        <option value="local">Local Only</option>
                        <option value="cloud">Cloud Only</option>
                        <option value="combine">Combine All</option>
                    </select>
                </div>
            </div>
        `;
    }

    /**
     * 收集合并选择
     */
    collectMergeChoices() {
        return {
            proficiency: document.getElementById('merge-proficiency').value,
            note: document.getElementById('merge-note').value,
            fsrs: document.getElementById('merge-fsrs').value,
            reviews: document.getElementById('merge-reviews').value
        };
    }

    /**
     * 应用合并选择
     */
    applyMergeChoices(localProblem, cloudProblem, choices) {
        const merged = { ...localProblem };
        
        // 合并 proficiency
        if (choices.proficiency === 'cloud') {
            merged.proficiency = cloudProblem.proficiency;
        } else if (choices.proficiency === 'max') {
            merged.proficiency = Math.max(
                localProblem.proficiency || 0,
                cloudProblem.proficiency || 0
            );
        }
        
        // 合并 note
        if (choices.note === 'cloud') {
            merged.note = cloudProblem.note;
        } else if (choices.note === 'longest') {
            const localNote = localProblem.note || '';
            const cloudNote = cloudProblem.note || '';
            merged.note = localNote.length > cloudNote.length ? localNote : cloudNote;
        } else if (choices.note === 'combine') {
            const localNote = localProblem.note || '';
            const cloudNote = cloudProblem.note || '';
            if (localNote && cloudNote && localNote !== cloudNote) {
                merged.note = `${localNote}\n\n--- Cloud Version ---\n\n${cloudNote}`;
            } else {
                merged.note = localNote || cloudNote;
            }
        }
        
        // 合并 FSRS state
        if (choices.fsrs === 'cloud') {
            merged.fsrsState = cloudProblem.fsrsState;
        } else if (choices.fsrs === 'latest') {
            const localTime = localProblem.fsrsState?.lastReview || 0;
            const cloudTime = cloudProblem.fsrsState?.lastReview || 0;
            merged.fsrsState = localTime > cloudTime ? localProblem.fsrsState : cloudProblem.fsrsState;
        }
        
        // 合并 reviews
        if (choices.reviews === 'cloud') {
            merged.reviews = cloudProblem.reviews;
        } else if (choices.reviews === 'combine') {
            const allReviews = new Map();
            
            // 添加本地reviews
            if (localProblem.reviews && Array.isArray(localProblem.reviews)) {
                localProblem.reviews.forEach(review => {
                    const key = `${review.date}-${review.rating}`;
                    allReviews.set(key, review);
                });
            }
            
            // 添加云端reviews
            if (cloudProblem.reviews && Array.isArray(cloudProblem.reviews)) {
                cloudProblem.reviews.forEach(review => {
                    const key = `${review.date}-${review.rating}`;
                    allReviews.set(key, review);
                });
            }
            
            merged.reviews = Array.from(allReviews.values());
        }
        
        // 更新修改时间
        merged.modificationTime = Date.now();
        
        return merged;
    }

    /**
     * 批量解决冲突
     */
    async resolveMultipleConflicts(conflicts) {
        const resolved = [];
        
        for (const conflict of conflicts) {
            const resolvedProblem = await this.resolveConflict(conflict);
            resolved.push({
                id: conflict.id,
                problem: resolvedProblem
            });
        }
        
        return resolved;
    }

    /**
     * 自动解决冲突（使用默认策略）
     */
    autoResolveConflict(conflict) {
        const versions = conflict.versions;
        
        // 默认策略：使用最新修改的版本
        let latest = versions[0];
        let latestTime = latest.problem.modificationTime || 0;
        
        for (const version of versions) {
            const time = version.problem.modificationTime || 0;
            if (time > latestTime) {
                latest = version;
                latestTime = time;
            }
        }
        
        return latest.problem;
    }
}

// 添加样式
const style = document.createElement('style');
style.textContent = `
    .conflict-resolver-container {
        z-index: 10000;
    }
    
    .conflict-resolver-popup {
        max-width: 600px;
    }
    
    .conflict-details {
        text-align: left;
    }
    
    .conflict-comparison {
        display: flex;
        gap: 20px;
        margin-top: 15px;
    }
    
    .conflict-version {
        flex: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background: #f9f9f9;
    }
    
    .conflict-version h5 {
        margin-top: 0;
        color: #333;
        font-size: 14px;
        font-weight: bold;
    }
    
    .conflict-version p {
        margin: 5px 0;
        font-size: 12px;
        color: #666;
    }
    
    .manual-merge-container {
        text-align: left;
    }
    
    .merge-field {
        margin: 15px 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .merge-field label {
        flex: 0 0 120px;
        font-weight: bold;
        font-size: 13px;
    }
    
    .merge-field select {
        flex: 1;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 3px;
        font-size: 13px;
    }
`;
document.head.appendChild(style);

// 导出单例
const conflictResolver = new ConflictResolver();
// EXTERNAL MODULE: ./src/shared/browser.js
var browser = __webpack_require__(867);
;// CONCATENATED MODULE: ./src/popup/service/reviewService.js
/**
 * Review Service
 * 管理复习相关的业务逻辑
 */






/**
 * 判断题目是否在今天复习过
 */
function isReviewedToday(problem) {
    if (!problem.fsrsState?.lastReview) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastReview = new Date(problem.fsrsState.lastReview);
    lastReview.setHours(0, 0, 0, 0);

    return lastReview.getTime() === today.getTime();
}

/**
 * 判断题目是否是今天需要复习的
 */
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

/**
 * 加载每日复习数据
 */
async function loadDailyReviewData() {
    const problems = Object.values(await (0,problemService.getAllProblems)()).filter(p => p.isDeleted !== true);

    // 按可检索性排序所有题目
    store/* daily_store */.S.reviewScheduledProblems = problems
        .sort((a, b) => {
            const retrievabilityA = (0,utils/* getCurrentRetrievability */.zV)(a);
            const retrievabilityB = (0,utils/* getCurrentRetrievability */.zV)(b);
            return retrievabilityA - retrievabilityB; // 升序排序，最小值在前
        });

    // 获取今天已复习和待复习的题目
    store/* daily_store */.S.dailyReviewProblems = store/* daily_store */.S.reviewScheduledProblems
        .filter(problem => isReviewedToday(problem) || isReviewDueToday(problem))
        .sort((a, b) => {
            // 首先按照是否已复习排序（已复习的排在前面）
            const aReviewed = isReviewedToday(a);
            const bReviewed = isReviewedToday(b);
            if (aReviewed !== bReviewed) {
                return bReviewed ? 1 : -1;
            }
            // 如果复习状态相同，则按可检索性排序
            const retrievabilityA = (0,utils/* getCurrentRetrievability */.zV)(a);
            const retrievabilityB = (0,utils/* getCurrentRetrievability */.zV)(b);
            return retrievabilityA - retrievabilityB;
        });

    console.log('总题目数:', problems.length);
    console.log('今日待复习题目数:', store/* daily_store */.S.dailyReviewProblems.length);

    // 添加调试日志
    store/* daily_store */.S.dailyReviewProblems.forEach(problem => {
        const isReviewed = isReviewedToday(problem);
        const isDue = isReviewDueToday(problem);
        console.log('题目状态:', {
            name: problem.name,
            lastReview: problem.fsrsState?.lastReview,
            nextReview: problem.fsrsState?.nextReview,
            isReviewedToday: isReviewed,
            isDueToday: isDue,
            retrievability: (0,utils/* getCurrentRetrievability */.zV)(problem)
        });
    });
}

/**
 * 标记题目为已复习
 */
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

    console.log('更新完成');
}

/**
 * 处理复习按钮点击
 */
async function handleReviewButtonClick(button, problem) {
    console.log('复习按钮被点击');
    const updatedProblem = await handleFeedbackSubmission(problem, true);
    if (updatedProblem) {
        await markAsReviewed(button, updatedProblem);
    }
    return updatedProblem;
}

/**
 * 获取下次复习提示文本
 */
function getNextReviewTips(fsrsState) {
    if (!fsrsState?.nextReview) {
        return 'Not scheduled';
    }

    const nextReviewDate = new Date(fsrsState.nextReview);
    const now = new Date();

    // 获取当前日期和下次复习日期（不含时间）
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const reviewDay = new Date(nextReviewDate.getFullYear(), nextReviewDate.getMonth(), nextReviewDate.getDate());

    // 计算日期差（天数）
    const diffTime = reviewDay.getTime() - today.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        // 已经过了计划复习日期
        const daysOverdue = Math.abs(diffDays);
        return `Delay by ${daysOverdue} day${daysOverdue > 1 ? 's' : ''}`;
    } else if (diffDays === 0) {
        // 今天需要复习
        return 'Review today';
    } else if (diffDays === 1) {
        // 明天需要复习
        return 'Review tomorrow';
    } else {
        // x天后复习
        return `Review in ${diffDays} days`;
    }
}
;// CONCATENATED MODULE: ./src/popup/service/statsService.js
/**
 * Statistics Service
 * 管理统计相关的业务逻辑
 */





const LAST_AVERAGE_KEY = 'lastRetrievabilityAverage';
const LAST_UPDATE_TIME_KEY = 'lastUpdateTime';

/**
 * 获取上次存储的平均值和时间
 */
function loadLastAverageData() {
    const lastData = {
        average: parseFloat(localStorage.getItem(LAST_AVERAGE_KEY)) || 0.00,
        timestamp: parseInt(localStorage.getItem(LAST_UPDATE_TIME_KEY)) || 0
    };
    return lastData;
}

/**
 * 存储当前的平均值和时间
 */
function saveCurrentAverageData(average) {
    localStorage.setItem(LAST_AVERAGE_KEY, average.toString());
    localStorage.setItem(LAST_UPDATE_TIME_KEY, Date.now().toString());
}

/**
 * 计算可检索性均值
 */
function calculateRetrievabilityAverage() {
    const problems = store/* daily_store */.S.reviewScheduledProblems;
    if (!problems || problems.length === 0) return 0;

    const totalRetrievability = problems.reduce((sum, problem) => {
        const retrievability = (0,utils/* getCurrentRetrievability */.zV)(problem);
        return sum + retrievability;
    }, 0);

    return Number((totalRetrievability / problems.length).toFixed(2));
}

/**
 * 计算完成统计
 */
function calculateCompletionStats() {
    let completedCount = 0;
    let totalProblems = 0;

    if (!store/* daily_store */.S || !store/* daily_store */.S.dailyReviewProblems) {
        console.log('daily_store 或 dailyReviewProblems 为空:', {
            daily_store: store/* daily_store */.S,
            problems: store/* daily_store */.S?.dailyReviewProblems
        });
        return { completedCount, totalProblems, completionRate: 0 };
    }

    // 获取当前显示的卡片数量
    let cardLimit = parseInt(document.getElementById('cardLimit')?.value, 10) || store/* store */.h.defaultCardLimit || 1;

    // 计算今日已复习的题目数量
    completedCount = store/* daily_store */.S.dailyReviewProblems.filter(problem =>
        isReviewedToday(problem)
    ).length;

    totalProblems = store/* daily_store */.S.dailyReviewProblems?.length || 0;
    if (cardLimit > totalProblems) {
        cardLimit = totalProblems;
    }

    const completionRate = cardLimit > 0 ? Math.round((completedCount / cardLimit) * 100) : 0;

    return {
        completedCount,
        totalProblems,
        cardLimit,
        completionRate
    };
}

/**
 * 更新可检索性趋势
 */
function updateRetrievabilityTrend() {
    // 计算当前的可检索性均值
    const currentRetrievabilityAverage = parseFloat(calculateRetrievabilityAverage()) || 0;

    // 获取上次存储的数据
    const lastData = loadLastAverageData();
    const hoursSinceLastUpdate = (Date.now() - lastData.timestamp) / (1000 * 60 * 60);

    let yesterdayRetrievabilityAverage = lastData.average;

    // 如果超过24小时，更新存储的数据
    if (hoursSinceLastUpdate >= 24) {
        console.log('距离上次更新已超过24小时:', {
            hoursSinceLastUpdate: hoursSinceLastUpdate.toFixed(2) + '小时',
            lastUpdateTime: new Date(lastData.timestamp).toLocaleString(),
            lastAverage: lastData.average.toFixed(2),
            currentAverage: currentRetrievabilityAverage.toFixed(2)
        });

        saveCurrentAverageData(currentRetrievabilityAverage);

        console.log('已更新存储数据:', {
            newYesterdayAverage: yesterdayRetrievabilityAverage.toFixed(2),
            savedCurrentAverage: currentRetrievabilityAverage.toFixed(2),
            saveTime: new Date().toLocaleString()
        });
    } else {
        console.log('距离上次更新未超过24小时:', {
            hoursSinceLastUpdate: hoursSinceLastUpdate.toFixed(2) + '小时',
            lastUpdateTime: new Date(lastData.timestamp).toLocaleString(),
            usingLastAverage: lastData.average.toFixed(2)
        });
    }

    return {
        currentAverage: currentRetrievabilityAverage,
        yesterdayAverage: yesterdayRetrievabilityAverage,
        trend: currentRetrievabilityAverage > yesterdayRetrievabilityAverage ? 'up' :
            currentRetrievabilityAverage < yesterdayRetrievabilityAverage ? 'down' : 'same'
    };
}

/**
 * 设置当前日期
 */
function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    const element = document.getElementById('currentDate');
    if (element) {
        element.textContent = today;
    }
}
;// CONCATENATED MODULE: ./src/popup/service/cardDisplayService.js
/**
 * Card Display Service
 * 管理复习卡片的显示逻辑
 */






/**
 * 更新卡片限制显示
 */
function updateCardLimitDisplay() {
    const input = document.getElementById('cardLimit');
    const totalDisplay = document.querySelector('.total-problems');
    const totalProblems = store/* daily_store */.S.dailyReviewProblems?.length || 0;

    // 更新最大值和总数显示
    input.max = Math.max(totalProblems, 1);
    totalDisplay.textContent = `/ ${totalProblems}`;

    // 使用保存的默认值或回退到3
    let currentValue = store/* store */.h.defaultCardLimit || 1;
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

/**
 * 改变卡片数量
 */
async function changeCardLimit(delta) {
    console.log('执行 changeCardLimit, delta:', delta);
    const input = document.getElementById('cardLimit');
    const currentValue = parseInt(input.value, 10);
    const newValue = currentValue + delta;
    const maxValue = store/* daily_store */.S.dailyReviewProblems?.length || 0;

    if (newValue >= 1 && newValue <= maxValue) {
        input.value = newValue;
        await (0,configService/* setDefaultCardLimit */.FO)(newValue);
        store/* store */.h.defaultCardLimit = newValue;
        // 触发更新
        const event = new Event('cardLimitChanged');
        document.dispatchEvent(event);
    }
}

/**
 * 更新进度圆圈
 */
function updateProgressCircle(completionRate) {
    const progressCircle = document.querySelector('.completion-circle');
    const radius = 54; // 圆的半径
    const circumference = 2 * Math.PI * radius; // 圆的周长

    // 计算偏移量
    const offset = circumference - (completionRate / 100) * circumference;
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = offset;

    // 更新显示的百分比
    document.querySelector('.completion-circle').style.setProperty('--percentage', `${completionRate}%`);

    // 添加动画效果
    const innerCircle = document.querySelector('.inner-circle');
    innerCircle.style.transform = `scale(1.1)`; // 放大内圈
    setTimeout(() => {
        innerCircle.style.transform = `scale(1)`; // 恢复原状
    }, 500); // 动画持续时间
}

/**
 * 创建题目卡片
 */
function createReviewCards() {
    console.log('开始创建卡片');
    const reviewList = document.getElementById('reviewList');
    const template = document.getElementById('reviewCardTemplate');
    const cardLimit = parseInt(document.getElementById('cardLimit').value, 10);

    reviewList.innerHTML = '';

    const problems = store/* daily_store */.S.dailyReviewProblems || [];
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
        const retrievability = (0,utils/* getCurrentRetrievability */.zV)(problem);
        const retrievabilitySpan = card.querySelector('.retrievability');
        retrievabilitySpan.textContent = `${retrievability.toFixed(1)}`;
        retrievabilitySpan.classList.add(retrievability < 0.9 ? 'text-danger' : 'text-success');

        // 设置下次复习时间
        const nextReviewTips = getNextReviewTips(fsrsState);
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

        // 格式化下次复习时间
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
        const isReviewedTodayFlag = fsrsState.lastReview &&
            new Date(fsrsState.lastReview).toDateString() === new Date().toDateString();

        // 设置按钮状态
        const reviewButton = card.querySelector('.btn-review');
        if (reviewButton) {
            if (isReviewedTodayFlag) {
                const icon = reviewButton.querySelector('i');
                icon.classList.remove('fa-check-circle');
                icon.classList.add('fa-circle-check');
                icon.style.color = '#0D6E6E';
                reviewButton.disabled = true;
                card.style.opacity = '0.4';
            }

            reviewButton.onclick = async function (e) {
                e.preventDefault();
                e.stopPropagation();
                const updatedProblem = await handleReviewButtonClick(this, problem);
                if (updatedProblem) {
                    // 触发更新事件
                    const event = new Event('cardReviewed');
                    document.dispatchEvent(event);
                }
            };
        }

        // 添加题目链接功能
        if (problem.url) {
            card.style.cursor = 'pointer';
            card.onclick = function (e) {
                if (!e.target.closest('.btn-review')) {
                    window.open(problem.url, '_blank');
                }
            };
        }

        reviewList.appendChild(cardNode);
    });
}

/**
 * 显示空状态提示
 */
function showEmptyState() {
    const addProblemWrapper = document.querySelector('.add-problem-wrapper');
    // 先移除可能存在的空状态提示
    const existingEmptyState = document.querySelector('.empty-state');
    if (existingEmptyState) {
        existingEmptyState.remove();
    }

    const totalProblems = store/* daily_store */.S.dailyReviewProblems?.length || 0;
    const cardLimit = parseInt(document.getElementById('cardLimit')?.value, 10) || 0;

    if (totalProblems === 0 || cardLimit === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            Time to learn something new!
        `;
        addProblemWrapper.insertAdjacentElement('beforebegin', emptyState);
    }
}
;// CONCATENATED MODULE: ./src/popup/service/notificationService.js
/**
 * Notification Service
 * 管理所有通知和弹窗相关功能
 */




/**
 * 显示成功提示
 */
function showSuccess(title, text, options = {}) {
    return sweetalert2_all_default().fire({
        icon: 'success',
        title: title,
        text: text,
        showConfirmButton: false,
        timer: options.timer || 1500,
        background: '#1d2e3d',
        color: '#ffffff',
        toast: options.toast !== false,
        position: options.position || 'center-end',
        customClass: {
            popup: 'colored-toast'
        },
        ...options
    });
}

/**
 * 显示错误提示
 */
function showError(title, text, options = {}) {
    return sweetalert2_all_default().fire({
        icon: 'error',
        title: title,
        text: text,
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        ...options
    });
}

/**
 * 显示警告提示
 */
function showWarning(title, text, options = {}) {
    return Swal.fire({
        icon: 'warning',
        title: title,
        text: text,
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        ...options
    });
}

/**
 * 显示确认对话框
 */
function showConfirm(title, text, options = {}) {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4a9d9c',
        cancelButtonColor: '#d33',
        confirmButtonText: options.confirmButtonText || 'Yes',
        cancelButtonText: options.cancelButtonText || 'Cancel',
        background: '#1d2e3d',
        color: '#ffffff',
        ...options
    });
}

/**
 * 显示信息提示
 */
function showInfo(title, text, options = {}) {
    return Swal.fire({
        icon: 'info',
        title: title,
        text: text,
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        ...options
    });
}

/**
 * 显示自定义HTML内容的弹窗
 */
function showModal(title, content, buttons = null) {
    const modalOptions = {
        title: title,
        html: content,
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        width: '600px'
    };

    // 如果有自定义按钮，则使用自定义按钮
    if (buttons && Array.isArray(buttons)) {
        modalOptions.showConfirmButton = false;
        modalOptions.showCloseButton = true;
        modalOptions.html += `
            <div class="d-flex justify-content-end mt-3">
                ${buttons.map(btn => `
                    <button class="${btn.className} ms-2" id="modal-btn-${btn.text}">
                        ${btn.text}
                    </button>
                `).join('')}
            </div>
        `;

        // 使用SweetAlert2显示模态框
        sweetalert2_all_default().fire(modalOptions);

        // 为每个按钮添加点击事件
        setTimeout(() => {
            buttons.forEach(btn => {
                const btnElement = document.getElementById(`modal-btn-${btn.text}`);
                if (btnElement && btn.onClick) {
                    btnElement.addEventListener('click', async (e) => {
                        e.preventDefault();
                        try {
                            // 执行按钮点击事件处理程序
                            await btn.onClick();
                            // 关闭弹窗
                            sweetalert2_all_default().close();
                        } catch (error) {
                            console.error('按钮点击事件处理程序执行失败:', error);
                        }
                    });
                }
            });
        }, 100); // 添加一个小延迟确保DOM已更新
    } else {
        // 如果没有自定义按钮，则使用默认按钮
        modalOptions.showConfirmButton = true;
        modalOptions.confirmButtonText = '确定';

        // 使用SweetAlert2显示模态框
        return sweetalert2_all_default().fire(modalOptions);
    }
}

/**
 * 显示带进度条的弹窗
 */
function showProgress(title, text, options = {}) {
    return Swal.fire({
        title: title,
        html: text,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        background: '#1d2e3d',
        color: '#ffffff',
        didOpen: () => {
            Swal.showLoading();
        },
        ...options
    });
}

/**
 * 显示输入对话框
 */
function showInput(title, options = {}) {
    return Swal.fire({
        title: title,
        input: options.input || 'text',
        inputLabel: options.inputLabel,
        inputPlaceholder: options.inputPlaceholder,
        inputValue: options.inputValue || '',
        showCancelButton: true,
        confirmButtonText: options.confirmButtonText || 'OK',
        cancelButtonText: options.cancelButtonText || 'Cancel',
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        inputValidator: options.inputValidator,
        ...options
    });
}

/**
 * 显示选择对话框
 */
function showSelect(title, inputOptions, options = {}) {
    return Swal.fire({
        title: title,
        input: 'select',
        inputOptions: inputOptions,
        inputPlaceholder: options.inputPlaceholder || 'Select an option',
        showCancelButton: true,
        confirmButtonText: options.confirmButtonText || 'Select',
        cancelButtonText: options.cancelButtonText || 'Cancel',
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        inputValue: options.inputValue,
        ...options
    });
}

/**
 * 关闭当前弹窗
 */
function closeModal() {
    Swal.close();
}

/**
 * 测试通知功能
 */
async function testNotification() {
    try {
        const response = await browser/* default */.Z.runtime.sendMessage({ action: 'testNotification' });
        if (response && response.success) {
            // 显示成功反馈
            showSuccess('Test Successful', 'Check your desktop for the notification!', {
                timer: 2000,
                position: 'top-end'
            });
        } else {
            // 显示错误
            showError('Test Failed', response?.message || 'Could not send notification', {
                timer: 3000,
                toast: true,
                position: 'top-end'
            });
        }
    } catch (error) {
        console.error('Error sending test notification:', error);
        showError('Error', 'Failed to send test notification', {
            timer: 3000,
            toast: true,
            position: 'top-end'
        });
    }
}
;// CONCATENATED MODULE: ./src/popup/daily-review.js
// 原有导入

















// 新增服务导入











async function loadProblemList() {
    await (0,view/* renderAll */.xy)();
}




// 更新顶部统计信息
function updateStats() {
    console.log('更新统计信息');

    // 计算完成统计
    const stats = calculateCompletionStats();

    if (stats.totalProblems === 0) {
        // 更新显示
        document.getElementById('completedCount').textContent = 0;
        document.getElementById('totalCount').textContent = 0;
        document.getElementById('completionRate').textContent = '0%';
        updateProgressCircle(0);
        showEmptyState();
        return;
    }

    // 显示空状态
    showEmptyState();

    // 更新显示的已复习数量
    document.getElementById('completedCount').textContent = stats.completedCount;
    document.getElementById('totalCount').textContent = stats.cardLimit;

    // 更新进度条
    updateProgressCircle(stats.completionRate);
    document.getElementById('completionRate').textContent = `${stats.completionRate}%`;

    // 更新可检索性趋势
    const trendData = updateRetrievabilityTrend();
    const retrievabilityElement = document.getElementById('retrievabilityAverage');
    retrievabilityElement.textContent = trendData.currentAverage;

    // 更新趋势图标
    const trendIcon = document.getElementById('trendIcon');
    if (trendData.trend === 'up') {
        trendIcon.className = 'fas fa-arrow-up trend-icon trend-up';
    } else if (trendData.trend === 'down') {
        trendIcon.className = 'fas fa-arrow-down trend-icon trend-down';
    } else {
        trendIcon.className = '';
    }

    // 根据可检索性均值调整颜色和背景提示
    const lowMemoryWarning = document.getElementById('lowMemoryWarning');
    if (trendData.currentAverage < 0.90) {
        retrievabilityElement.classList.add('low');
        lowMemoryWarning.classList.add('active');
    } else {
        retrievabilityElement.classList.remove('low');
        lowMemoryWarning.classList.remove('active');
    }

    updateCardLimitDisplay();
}






// 更新卡片显示
function updateCardDisplay() {
    console.log('更新卡片显示');
    updateStats(); // 更新统计信息
    createReviewCards(); // 创建新的卡片
}


















// 显示/隐藏添加题目弹窗
function toggleAddProblemDialog(show) {
    const dialog = document.getElementById('addProblemDialog');
    if (!dialog) return;
    
    if (show) {
        dialog.style.display = 'block';
    } else {
        dialog.style.display = 'none';
        
        // 清除所有输入字段
        const problemUrl = document.getElementById('problemUrl');
        const problemName = document.getElementById('problemName');
        const customUrl = document.getElementById('customUrl');
        
        if (problemUrl) problemUrl.value = '';
        if (problemName) problemName.value = '';
        if (customUrl) customUrl.value = '';
        
        // 重置选项卡到默认状态
        const urlTabButton = document.getElementById('urlTabButton');
        const manualTabButton = document.getElementById('manualTabButton');
        const urlTab = document.getElementById('urlTab');
        const manualTab = document.getElementById('manualTab');
        
        if (urlTabButton && manualTabButton && urlTab && manualTab) {
            urlTabButton.classList.add('active');
            manualTabButton.classList.remove('active');
            urlTab.classList.add('active');
            manualTab.classList.remove('active');
        }
    }
}



// 初始化添加题目功能
function initializeAddProblem() {
    const addButton = document.querySelector('.gear-button.add-problem');
    if (!addButton) return;

    // 添加选项卡切换样式
    const style = document.createElement('style');
    style.textContent = `
        .tab-container {
            margin-bottom: 15px;
        }
        
        .tab-buttons {
            display: flex;
            border-bottom: 1px solid #3a4a5c;
            margin-bottom: 15px;
        }
        
        .tab-button {
            background: none;
            border: none;
            padding: 8px 15px;
            color: #a0aec0;
            cursor: pointer;
            transition: all 0.3s;
            border-bottom: 2px solid transparent;
        }
        
        .tab-button.active {
            color: #4a9d9c;
            border-bottom: 2px solid #4a9d9c;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        /* 修复弹窗背景色 - 使用更强的选择器 */
        #addProblemDialog .modal-content {
            background-color: #1d2e3d !important;
            color: #ffffff !important;
        }
        
        #addProblemDialog .tab-content,
        #addProblemDialog .form-group {
            background-color: #1d2e3d !important;
            color: #ffffff !important;
        }
        
        #addProblemDialog input.form-control, 
        #addProblemDialog select.form-control {
            background-color: #2d3e4d !important;
            color: #ffffff !important;
            border: 1px solid #3a4a5c !important;
        }
        
        #addProblemDialog input.form-control::placeholder {
            color: #8096a8 !important;
        }
        
        #addProblemDialog label {
            color: #a0aec0 !important;
        }
    `;
    document.head.appendChild(style);

    // 点击添加按钮显示弹窗
    addButton.addEventListener('click', () => {
        toggleAddProblemDialog(true);
    });

    // 选项卡切换功能
    const urlTabButton = document.getElementById('urlTabButton');
    const manualTabButton = document.getElementById('manualTabButton');
    const urlTab = document.getElementById('urlTab');
    const manualTab = document.getElementById('manualTab');

    if (urlTabButton && manualTabButton) {
        urlTabButton.addEventListener('click', () => {
            urlTabButton.classList.add('active');
            manualTabButton.classList.remove('active');
            urlTab.classList.add('active');
            manualTab.classList.remove('active');
        });

        manualTabButton.addEventListener('click', () => {
            manualTabButton.classList.add('active');
            urlTabButton.classList.remove('active');
            manualTab.classList.add('active');
            urlTab.classList.remove('active');
        });
    }

    // 取消按钮
    const cancelButton = document.getElementById('cancelAdd');
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            toggleAddProblemDialog(false);
        });
    }

    // 确认添加按钮
    const confirmButton = document.getElementById('confirmAdd');
    if (confirmButton) {
        confirmButton.addEventListener('click', async () => {
            try {
                let result;
                
                // 判断当前激活的是哪个选项卡
                if (urlTab.classList.contains('active')) {
                    // 从URL添加
                    const url = document.getElementById('problemUrl').value.trim();
                    if (!url) {
                        throw new Error('Please enter a valid problem URL.');
                    }
                    result = await handleAddProblem(url);
                } else {
                    // 创建空白卡片
                    const name = document.getElementById('problemName').value.trim();
                    const level = document.getElementById('problemLevel').value;
                    const customUrl = document.getElementById('customUrl').value.trim();
                    
                    if (!name) {
                        throw new Error('Please enter the problem name.');
                    }
                    
                    if (!level) {
                        throw new Error('Please select a difficulty level.');
                    }
                    
                    // 如果提供了URL，检查其格式是否有效
                    if (customUrl && !customUrl.match(/^https?:\/\/.+/)) {
                        throw new Error('Please enter a valid URL starting with http:// or https://');
                    }
                    
                    result = await handleAddBlankProblem(name, level, customUrl);
                }
                
                toggleAddProblemDialog(false);
                await loadDailyReviewData();
                updateCardDisplay();
                
                // 显示成功提示
                showSuccess('SUCCESS', 'Problem added to review list.');
            } catch (error) {
                // 显示错误提示
                showError('ADD FAIL', error.message);
            }
        });
    }

    // 点击弹窗外部关闭弹窗
    const dialog = document.getElementById('addProblemDialog');
    if (dialog) {
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                toggleAddProblemDialog(false);
            }
        });
    }
}


// 初始化同步状态指示器
function initializeSyncStatusIndicator() {
    // 防止重复初始化
    if (syncStatusIndicatorInitialized) {
        console.log('Sync status indicator already initialized, skipping');
        return;
    }
    
    const syncIndicator = document.getElementById('syncIndicator');
    const syncIcon = document.getElementById('syncIcon');
    const syncStatus = document.getElementById('syncStatus');
    
    if (!syncIndicator || !syncIcon || !syncStatus) return;
    
    // 只有在启用了同步功能时才显示
    const showIndicator = webdavEnhancedService/* webdavEnhancedService */.n.isConfigured || store/* store */.h.isCloudSyncEnabled;
    if (showIndicator) {
        syncIndicator.style.display = 'flex';
        
        // 根据认证状态设置初始显示
        if (webdavEnhancedService/* webdavEnhancedService */.n.isConfigured && !webdavEnhancedService/* webdavEnhancedService */.n.isAuthenticated) {
            syncIndicator.className = 'sync-indicator warning';
            syncStatus.textContent = 'Login Required';
        } else {
            syncIndicator.className = 'sync-indicator';
            syncStatus.textContent = 'Synced';
        }
    } else {
        syncIndicator.style.display = 'none';
        return;
    }
    
    // 监听认证状态变化
    webdavEnhancedService/* webdavEnhancedService */.n.onAuthStatusChange = (isAuthenticated) => {
        if (!isAuthenticated) {
            syncIndicator.className = 'sync-indicator warning';
            syncStatus.textContent = 'Login Required';
        } else {
            syncIndicator.className = 'sync-indicator';
            syncStatus.textContent = 'Synced';
            
            // 认证成功后立即触发一次完整同步，确保本地数据上传到云端
            setTimeout(() => {
                syncManager/* syncManager */.D.immediateSync().then(() => {
                    console.log('Initial sync completed after authentication');
                }).catch(error => {
                    console.error('Initial sync failed after authentication:', error);
                });
            }, 500); // 延迟500ms确保认证完全完成
        }
    };
    
    // 添加同步状态监听器
    syncManager/* syncManager */.D.addSyncListener((event) => {
        console.log('Sync event received in daily-review:', event);
        switch (event.status) {
            case 'syncing':
                syncIndicator.className = 'sync-indicator syncing';
                syncStatus.textContent = 'Syncing...';
                console.log('Sync status: syncing');
                break;
            case 'success':
                syncIndicator.className = 'sync-indicator success';
                syncStatus.textContent = 'Synced';
                // 同步成功后自动刷新当前视图
                console.log('Sync success - checking active tab for refresh');
                const activeTab = document.querySelector('.nav-btn.active');
                console.log('Active tab found:', activeTab ? activeTab.textContent : 'none');
                if (activeTab && activeTab.textContent.includes('Review')) {
                    console.log('Refreshing Review page data');
                    // 强制重新初始化整个review页面
                    initializeReviewPage().then(() => {
                        console.log('Review page re-initialized after sync');
                    }).catch(error => {
                        console.error('Failed to re-initialize review page:', error);
                    });
                } else if (activeTab && activeTab.textContent.includes('Problems')) {
                    console.log('Refreshing Problems page data');
                    loadProblemList();
                }
                // 3秒后恢复正常状态
                setTimeout(() => {
                    syncIndicator.className = 'sync-indicator';
                    syncStatus.textContent = 'Synced';
                }, 3000);
                break;
            case 'error':
                syncIndicator.className = 'sync-indicator error';
                syncStatus.textContent = 'Sync Error';
                console.log('Sync error:', event.error);
                // 5秒后恢复正常状态
                setTimeout(() => {
                    syncIndicator.className = 'sync-indicator';
                    syncStatus.textContent = 'Synced';
                }, 5000);
                break;
            default:
                syncIndicator.className = 'sync-indicator';
                syncStatus.textContent = 'Synced';
        }
    });
    
    // 点击同步指示器的行为
    syncIndicator.addEventListener('click', async () => {
        // 如果未认证，跳转到设置页面
        if (webdavEnhancedService/* webdavEnhancedService */.n.isConfigured && !webdavEnhancedService/* webdavEnhancedService */.n.isAuthenticated) {
            const tabs = document.querySelectorAll('.nav-btn');
            const contents = document.querySelectorAll('[id$="View"]');
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            const settingsTab = Array.from(tabs).find(t => t.textContent.includes('Settings'));
            const settingsContent = document.getElementById('settingsView');
            if (settingsTab && settingsContent) {
                settingsTab.classList.add('active');
                settingsContent.classList.add('active');
                
                // 滚动到WebDAV设置部分
                const webdavToggle = document.getElementById('webdavToggle');
                if (webdavToggle) {
                    webdavToggle.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        } else {
            // 已认证，执行同步
            await syncManager/* syncManager */.D.immediateSync();
            // 同步完成后刷新当前视图
            const activeTab = document.querySelector('.nav-btn.active');
            if (activeTab && activeTab.textContent.includes('Review')) {
                console.log('Manual sync completed, re-initializing review page');
                await initializeReviewPage();
            } else if (activeTab && activeTab.textContent.includes('Problems')) {
                await loadProblemList();
            }
        }
    });
    
    // 添加提示
    syncIndicator.title = webdavEnhancedService/* webdavEnhancedService */.n.isAuthenticated ? 'Click to sync now' : 'Click to login';
    
    // 标记已初始化
    syncStatusIndicatorInitialized = true;
    console.log('Sync status indicator initialized');
}

// 初始化FSRS参数优化卡片
async function initializeFSRSOptimization() {
    try {
        // 获取并显示复习记录数量
        const count = await (0,fsrsService/* getRevlogCount */.E_)();
        const revlogCountElement = document.getElementById('revlogCount');
        const revlogCountEnElement = document.getElementById('revlogCount_en');
        if (revlogCountElement) {
            revlogCountElement.textContent = count;
        }
        if (revlogCountEnElement) {
            revlogCountEnElement.textContent = count;
        }
        
        // 添加导出按钮点击事件
        const exportRevlogsBtn = document.getElementById('exportRevlogsBtn');
        if (exportRevlogsBtn) {
            exportRevlogsBtn.addEventListener('click', async () => {
                // 保存原始按钮内容
                const originalContent = exportRevlogsBtn.innerHTML;
                
                try {
                    // 显示加载中提示
                    exportRevlogsBtn.disabled = true;
                    exportRevlogsBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 0.85em;"></i>';
                    
                    // 导出CSV
                    const csvContent = await (0,fsrs/* exportRevlogsToCSV */.Z9)();
                    
                    // 创建下载链接
                    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.setAttribute('href', url);
                    link.setAttribute('download', `fsrs_revlogs_${new Date().toISOString().slice(0, 10)}.csv`);
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    // 显示成功提示
                    showSuccess('Export Success', '', {
                        html: `
                            <div>
                                已成功导出 ${count} 条复习记录
                                <br>
                                <small class="text-muted">
                                    Successfully exported ${count} review records to CSV file
                                </small>
                            </div>
                        `,
                        confirmButtonColor: '#4a9d9c',
                        confirmButtonText: 'OK',
                        showConfirmButton: true,
                        timer: null
                    });
                } catch (error) {
                    console.error('Error exporting revlogs:', error);
                    sweetalert2_all_default().fire({
                        icon: 'error',
                        title: 'Export Failed',
                        html: `
                            <div>
                                导出复习记录时发生错误
                                <br>
                                <small class="text-muted">
                                    Error occurred while exporting review records:
                                </small>
                                <br>
                                <small class="text-danger">
                                    ${error.message}
                                </small>
                            </div>
                        `,
                        background: '#1d2e3d',
                        color: '#ffffff',
                        confirmButtonColor: '#4a9d9c',
                        confirmButtonText: 'OK'
                    });
                } finally {
                    // 恢复按钮状态
                    exportRevlogsBtn.disabled = false;
                    exportRevlogsBtn.innerHTML = originalContent;
                }
            });
        }
        
        // 添加优化按钮点击事件
        const optimizeParamsBtn = document.getElementById('optimizeParamsBtn');
        if (optimizeParamsBtn) {
            optimizeParamsBtn.addEventListener('click', async () => {
                // 保存原始按钮内容
                const originalContent = optimizeParamsBtn.innerHTML;
                
                // 创建进度显示元素
                const progressContainer = document.createElement('div');
                progressContainer.className = 'progress optimize-progress';
                progressContainer.innerHTML = `
                    <div class="progress-bar progress-bar-striped progress-bar-animated" 
                         role="progressbar" 
                         style="width: 10%" 
                         aria-valuenow="10" 
                         aria-valuemin="0" 
                         aria-valuemax="100">
                    </div>
                `;
                optimizeParamsBtn.parentNode.appendChild(progressContainer);

                // 更改按钮状态
                optimizeParamsBtn.disabled = true;
                optimizeParamsBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 0.85em;"></i>';

                try {
                    // 进度回调函数
                    const onProgress = (progress) => {
                        console.log('Progress update:', progress);
                        const percent = Math.round(progress.percent * 100);
                        const progressBar = progressContainer.querySelector('.progress-bar');
                        if (progressBar) {
                            progressBar.style.width = `${percent}%`;
                            progressBar.setAttribute('aria-valuenow', percent);
                            progressBar.textContent = `${percent}%`;
                        }
                    };
                    
                    // 调用优化API
                    const result = await (0,fsrsService/* optimizeParameters */.GY)(onProgress);
                    
                    // 显示结果弹窗
                    if (result && result.type === 'Success' && result.params) {
                        // 生成唯一ID
                        const detailId = `paramsDetail_${Date.now()}`;
                        
                        // 显示优化后的参数，并添加保存按钮
                        const modalResult = await sweetalert2_all_default().fire({
                            title: 'SUCCESS',
                            html: `
                                <div>
                                    <div class="alert alert-success">
                                        <i class="fas fa-check-circle"></i> 参数优化完成！点击确认将自动保存并应用新参数。
                                        <br>
                                        <small >
                                            Optimization done! Click OK to save and use the new settings.
                                        </small>
                                    </div>
                                    <div class="mt-3">
                                        <button class="btn btn-link text-info p-0" 
                                                type="button" 
                                                id="toggleDetail_${detailId}">
                                            <i class="fas fa-chevron-right me-1"></i> 查看详细参数/View all parameters
                                        </button>
                                        <div id="${detailId}" class="mt-2 d-none">
                                            <div class="bg-dark p-2 rounded" style="max-height: 200px; overflow-y: auto;">
                                                <pre class="mb-0" style="color: #61dafb; white-space: pre-wrap; word-break: break-all;">${JSON.stringify(result.params, null, 2)}</pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `,
                            background: '#1d2e3d',
                            color: '#ffffff',
                            confirmButtonColor: '#4a9d9c',
                            confirmButtonText: 'OK',
                            showCloseButton: true,
                            closeButtonHtml: '<i class="fas fa-times"></i>',
                            didRender: () => {
                                // 在弹窗渲染后绑定事件
                                const toggleBtn = document.getElementById(`toggleDetail_${detailId}`);
                                const detailDiv = document.getElementById(detailId);
                                if (toggleBtn && detailDiv) {
                                    toggleBtn.addEventListener('click', () => {
                                        detailDiv.classList.toggle('d-none');
                                        const icon = toggleBtn.querySelector('i');
                                        if (icon) {
                                            icon.classList.toggle('fa-chevron-right');
                                            icon.classList.toggle('fa-chevron-down');
                                        }
                                    });
                                }
                            }
                        });

                        if (modalResult.isConfirmed) {
                            try {
                                // 保存参数到本地存储
                                await (0,fsrs/* saveFSRSParams */._L)(result.params);
                                // 更新FSRS实例
                                await (0,fsrsService/* updateFSRSInstance */.wM)(result.params);
                                // 显示成功提示
                                sweetalert2_all_default().fire({
                                    icon: 'success',
                                    title: 'Save Success',
                                    text: '参数已成功应用 /New settings applied.',
                                    background: '#1d2e3d',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    color: '#ffffff',
                                    toast: true,
                                    position: 'center-end',
                                    customClass: {
                                        popup: 'colored-toast'
                                    }
                                });
                            } catch (error) {
                                console.error('Error saving FSRS parameters:', error);
                                sweetalert2_all_default().fire({
                                    icon: 'error',
                                    title: 'Save Failed',
                                    text: `Error saving parameters: ${error.message}`,
                                    background: '#1d2e3d',
                                    color: '#ffffff',
                                    confirmButtonColor: '#4a9d9c'
                                });
                            }
                        }
                    } else {
                        // 显示其他类型的结果
                        showModal('FSRS参数优化结果', `
                            <div style="max-height: 300px; overflow-y: auto;">
                                <pre style="white-space: pre-wrap; word-break: break-all;">${JSON.stringify(result, null, 2)}</pre>
                            </div>
                        `);
                    }
                } catch (error) {
                    console.error('Error optimizing FSRS parameters:', error);
                    showModal('Error', `Error optimizing parameters: ${error.message}`);
                } finally {
                    // 恢复按钮状态
                    optimizeParamsBtn.disabled = false;
                    optimizeParamsBtn.innerHTML = originalContent;
                    // 移除进度条
                    progressContainer.remove();
                }
            });
        }
    } catch (error) {
        console.error('Error initializing FSRS optimization:', error);
    }
}

// 标记是否已初始化
let webdavInitialized = false;
let syncManagerInitialized = false;
let syncStatusIndicatorInitialized = false;

// 初始化坚果云 WebDAV
async function initializeWebDAV() {
    const webdavToggle = document.getElementById('webdavToggle');
    const webdavSettings = document.getElementById('webdavSettings');
    const webdavUsername = document.getElementById('webdavUsername');
    const webdavPassword = document.getElementById('webdavPassword');
    const testWebdavBtn = document.getElementById('testWebdav');
    const backupNowBtn = document.getElementById('backupNow');
    const restoreDataBtn = document.getElementById('restoreData');
    const logoutWebdavBtn = document.getElementById('logoutWebdav');
    
    if (!webdavToggle) return;
    
    // 如果已经初始化过，直接返回
    if (webdavInitialized) {
        return;
    }
    webdavInitialized = true;
    
    // 只初始化一次同步管理器
    if (!syncManagerInitialized) {
        syncManager/* syncManager */.D.setConflictResolver(async (conflict) => {
            return await conflictResolver.resolveConflict(conflict);
        });
        
        // 设置同步状态监听器
        initializeSyncStatusIndicator();
        
        // 异步初始化同步管理器，不阻塞UI
        setTimeout(() => {
            syncManager/* syncManager */.D.initialize().then(() => {
                console.log('Sync manager initialized');
            });
        }, 100);
        
        syncManagerInitialized = true;
    }
    
    // 快速加载已保存的配置
    const hasConfig = await webdavEnhancedService/* webdavEnhancedService */.n.loadConfig();
    webdavToggle.checked = hasConfig;
    
    if (hasConfig) {
        webdavSettings.style.display = 'block';
        // 显示已配置的用户名和密码
        const config = await browser/* default */.Z.storage.local.get('webdavConfig');
        if (config.webdavConfig) {
            webdavUsername.value = config.webdavConfig.username;
            // 解码并显示密码
            webdavPassword.value = atob(config.webdavConfig.password);
        }
    }
    
    // 切换显示/隐藏
    webdavToggle.addEventListener('change', () => {
        webdavSettings.style.display = webdavToggle.checked ? 'block' : 'none';
        if (!webdavToggle.checked) {
            // 禁用时清除配置
            webdavEnhancedService/* webdavEnhancedService */.n.clearConfig();
            // 更新同步指示器
            const syncIndicator = document.getElementById('syncIndicator');
            if (syncIndicator) {
                syncIndicator.style.display = 'none';
            }
        }
    });
    
    // 自动保存用户名和密码
    let saveTimer = null;
    const autoSaveCredentials = async () => {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(async () => {
            const username = webdavUsername.value.trim();
            const password = webdavPassword.value.trim();
            
            if (username && password) {
                // 自动保存并测试连接
                try {
                    const isValid = await webdavEnhancedService/* webdavEnhancedService */.n.configure({
                        username,
                        password
                    });
                    // 更新同步指示器
                    initializeSyncStatusIndicator();
                    
                    // 如果是首次成功连接，立即同步本地数据
                    if (isValid) {
                        setTimeout(() => {
                            syncManager/* syncManager */.D.immediateSync().then(() => {
                                console.log('Auto-save sync completed');
                            }).catch(error => {
                                console.error('Auto-save sync failed:', error);
                            });
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Auto-save failed:', error);
                }
            }
        }, 1000); // 输入停止1秒后自动保存
    };
    
    if (webdavUsername) {
        webdavUsername.addEventListener('input', autoSaveCredentials);
    }
    
    if (webdavPassword) {
        webdavPassword.addEventListener('input', autoSaveCredentials);
    }
    
    // 测试连接
    if (testWebdavBtn) {
        testWebdavBtn.addEventListener('click', async () => {
            const username = webdavUsername.value.trim();
            const password = webdavPassword.value.trim();
            
            if (!username || !password) {
                sweetalert2_all_default().fire({
                    icon: 'error',
                    title: 'Missing Info',
                    text: 'Please enter username and password',
                    timer: 2000
                });
                return;
            }
            
            testWebdavBtn.disabled = true;
            testWebdavBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Testing...</span>';
            
            try {
                const isValid = await webdavEnhancedService/* webdavEnhancedService */.n.configure({
                    username,
                    password
                });
                
                if (isValid) {
                    // 配置成功后显示同步指示器
                    const syncIndicator = document.getElementById('syncIndicator');
                    if (syncIndicator) {
                        syncIndicator.style.display = 'flex';
                        initializeSyncStatusIndicator();
                    }
                    
                    // 立即触发一次同步，上传本地数据到云端
                    setTimeout(() => {
                        syncManager/* syncManager */.D.immediateSync().then(() => {
                            console.log('Manual test sync completed');
                        }).catch(error => {
                            console.error('Manual test sync failed:', error);
                        });
                    }, 1000); // 延迟1秒确保UI更新完成
                    
                    sweetalert2_all_default().fire({
                        icon: 'success',
                        title: 'Connected!',
                        text: 'Successfully connected to Nutstore. Syncing local data...',
                        timer: 3000
                    });
                } else {
                    throw new Error('Connection failed');
                }
            } catch (error) {
                sweetalert2_all_default().fire({
                    icon: 'error',
                    title: 'Connection Failed',
                    text: 'Please check your credentials',
                    timer: 3000
                });
            } finally {
                testWebdavBtn.disabled = false;
                testWebdavBtn.innerHTML = '<i class="fas fa-check"></i><span>Test</span>';
            }
        });
    }
    
    // 立即备份
    if (backupNowBtn) {
        backupNowBtn.addEventListener('click', async () => {
            if (!webdavEnhancedService/* webdavEnhancedService */.n.isConfigured) {
                sweetalert2_all_default().fire({
                    icon: 'warning',
                    title: 'Not Configured',
                    text: 'Please configure WebDAV first',
                    timer: 2000
                });
                return;
            }
            
            backupNowBtn.disabled = true;
            backupNowBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Backing up...</span>';
            
            try {
                const problems = await (0,problemService.getAllProblems)();
                const filename = await webdavEnhancedService/* webdavEnhancedService */.n.backupProblems(Object.values(problems));
                
                sweetalert2_all_default().fire({
                    icon: 'success',
                    title: 'Backup Complete',
                    text: `Saved ${Object.keys(problems).length} problems to Nutstore`,
                    timer: 2000
                });
            } catch (error) {
                sweetalert2_all_default().fire({
                    icon: 'error',
                    title: 'Backup Failed',
                    text: error.message,
                    timer: 3000
                });
            } finally {
                backupNowBtn.disabled = false;
                backupNowBtn.innerHTML = '<i class="fas fa-upload"></i><span>Backup</span>';
            }
        });
    }
    
    // 恢复数据
    if (restoreDataBtn) {
        restoreDataBtn.addEventListener('click', async () => {
            if (!webdavEnhancedService/* webdavEnhancedService */.n.isConfigured) {
                sweetalert2_all_default().fire({
                    icon: 'warning',
                    title: 'Not Configured',
                    text: 'Please configure WebDAV first',
                    timer: 2000
                });
                return;
            }
            
            try {
                // 获取备份列表
                const backups = await webdavEnhancedService/* webdavEnhancedService */.n.getBackupList();
                
                if (backups.length === 0) {
                    sweetalert2_all_default().fire({
                        icon: 'info',
                        title: 'No Backups',
                        text: 'No backup files found in Nutstore',
                        timer: 2000
                    });
                    return;
                }
                
                // 按时间排序，最新的在前
                backups.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
                
                // 默认选择最新的备份
                const latestBackup = backups[0];
                
                // 显示备份列表，让用户确认或选择其他
                const backupOptions = {};
                backups.forEach((backup, index) => {
                    const date = new Date(backup.lastModified);
                    const isLatest = index === 0;
                    backupOptions[backup.name] = `${date.toLocaleString()}${isLatest ? ' (Latest)' : ''}`;
                });
                
                const { value: selectedBackup } = await sweetalert2_all_default().fire({
                    title: 'Restore from Backup',
                    html: `
                        <div style="text-align: left; margin-bottom: 10px;">
                            <strong>Latest backup:</strong><br>
                            ${new Date(latestBackup.lastModified).toLocaleString()}
                        </div>
                    `,
                    input: 'select',
                    inputOptions: backupOptions,
                    inputValue: latestBackup.name, // 默认选中最新的
                    showCancelButton: true,
                    confirmButtonText: 'Restore',
                    cancelButtonText: 'Cancel'
                });
                
                if (selectedBackup) {
                    // 确认恢复
                    const { isConfirmed } = await sweetalert2_all_default().fire({
                        title: 'Confirm Restore',
                        text: 'This will replace all current data. Continue?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, restore',
                        cancelButtonText: 'Cancel'
                    });
                    
                    if (isConfirmed) {
                        restoreDataBtn.disabled = true;
                        restoreDataBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Restoring...</span>';
                        
                        const problemsArray = await webdavEnhancedService/* webdavEnhancedService */.n.restoreProblems(selectedBackup);
                        
                        // 转换为对象格式并保存
                        const problemsObj = {};
                        problemsArray.forEach(problem => {
                            if (problem.index) {
                                problemsObj[problem.index] = problem;
                            }
                        });
                        
                        // 根据当前模式保存
                        const cnMode = await (0,modeService/* isInCnMode */.B)();
                        const key = cnMode ? 'cnProblems' : 'problems';
                        await (0,localStorageDelegate/* setLocalStorageData */.qy)(key, problemsObj);
                        
                        sweetalert2_all_default().fire({
                            icon: 'success',
                            title: 'Restore Complete',
                            text: `Restored ${Object.keys(problemsObj).length} problems from backup`,
                            timer: 2000
                        }).then(() => {
                            // 刷新页面
                            window.location.reload();
                        });
                    }
                }
            } catch (error) {
                sweetalert2_all_default().fire({
                    icon: 'error',
                    title: 'Restore Failed',
                    text: error.message,
                    timer: 3000
                });
            } finally {
                restoreDataBtn.disabled = false;
                restoreDataBtn.innerHTML = '<i class="fas fa-download"></i><span>Restore</span>';
            }
        });
    }
    
    // 登出按钮
    if (logoutWebdavBtn) {
        logoutWebdavBtn.addEventListener('click', async () => {
            const result = await sweetalert2_all_default().fire({
                title: 'Logout from Nutstore?',
                text: 'Your saved credentials will be removed',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, logout',
                cancelButtonText: 'Cancel'
            });
            
            if (result.isConfirmed) {
                // 清除配置
                await webdavEnhancedService/* webdavEnhancedService */.n.clearConfig();
                
                // 清空输入框
                webdavUsername.value = '';
                webdavPassword.value = '';
                
                // 隐藏同步指示器
                const syncIndicator = document.getElementById('syncIndicator');
                if (syncIndicator) {
                    syncIndicator.style.display = 'none';
                }
                
                // 取消勾选
                webdavToggle.checked = false;
                webdavSettings.style.display = 'none';
                
                sweetalert2_all_default().fire({
                    icon: 'success',
                    title: 'Logged Out',
                    text: 'Successfully logged out from Nutstore',
                    timer: 2000
                });
            }
        });
    }
}

// 标记选项是否已初始化
let optionsInitialized = false;

// 快速更新选项显示
async function updateOptionsDisplay() {
    const problemSorterSelect = document.getElementById('problemSorterSelect');
    if (problemSorterSelect && store/* store */.h.problemSorter) {
        problemSorterSelect.value = store/* store */.h.problemSorter;
    }

    const defaultCardLimitInput = document.getElementById('defaultCardLimit');
    if (defaultCardLimitInput && store/* store */.h.defaultCardLimit) {
        defaultCardLimitInput.value = store/* store */.h.defaultCardLimit;
    }

    // 更新提醒相关设置
    const config = await browser/* default */.Z.storage.local.get([
        'reminderEnabled',
        'reminderInterval',
        'reminderStartTime',
        'reminderEndTime',
        'reminderDays'
    ]);

    const reminderToggle = document.getElementById('reminderToggle');
    if (reminderToggle) {
        reminderToggle.checked = config.reminderEnabled || false;

        // 更新显示状态
        const reminderSettings = document.getElementById('reminderSettings');
        if (reminderSettings) {
            reminderSettings.style.display = reminderToggle.checked ? 'block' : 'none';
        }
    }

    const reminderInterval = document.getElementById('reminderInterval');
    if (reminderInterval) {
        reminderInterval.value = String(config.reminderInterval || 60);
    }

    const reminderStartTime = document.getElementById('reminderStartTime');
    if (reminderStartTime) {
        reminderStartTime.value = config.reminderStartTime || '09:00';
    }

    const reminderEndTime = document.getElementById('reminderEndTime');
    if (reminderEndTime) {
        reminderEndTime.value = config.reminderEndTime || '22:00';
    }

    // 更新星期选择
    const reminderDays = config.reminderDays || [1, 2, 3, 4, 5, 6, 0];
    for (let i = 0; i <= 6; i++) {
        const dayCheckbox = document.getElementById(`day${i}`);
        if (dayCheckbox) {
            dayCheckbox.checked = reminderDays.includes(i);
        }
    }
}

// 添加设置相关的初始化函数
async function initializeOptions() {
    // 如果已经初始化过，只更新显示
    if (optionsInitialized) {
        await updateOptionsDisplay();
        return;
    }
    
    await (0,configService/* loadConfigs */.O1)();

    const optionsForm = document.getElementById('optionsForm');
    if (!optionsForm) return; // 如果找不到表单元素，直接返回
    
    // 初始化题目排序选择器
    const problemSorterSelect = document.getElementById('problemSorterSelect');
    if (problemSorterSelect) {
        const problemSorterMetaArr = sort/* problemSorterArr */.vH.map(sorter => ({
            id: (0,sort/* idOf */.jD)(sorter), 
            text: (0,sort/* descriptionOf */.U9)(sorter)
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
        syncToggle.checked = store/* store */.h.isCloudSyncEnabled || false;
    }


    // 初始化坚果云 WebDAV 设置
    await initializeWebDAV();

    // 初始化提醒开关和配置
    const reminderToggle = document.getElementById('reminderToggle');
    const reminderSettings = document.getElementById('reminderSettings');
    const reminderInterval = document.getElementById('reminderInterval');
    const reminderStartTime = document.getElementById('reminderStartTime');
    const reminderEndTime = document.getElementById('reminderEndTime');
    const testNotificationBtn = document.getElementById('testNotification');
    
    if (reminderToggle) {
        // 加载提醒设置
        browser/* default */.Z.storage.local.get([
            'reminderEnabled',
            'reminderInterval',
            'reminderStartTime',
            'reminderEndTime',
            'reminderDays'
        ]).then(config => {
            reminderToggle.checked = config.reminderEnabled || false;
            // 使用字符串形式以正确显示 0.5
            if (reminderInterval) {
                const intervalValue = config.reminderInterval || 60;
                reminderInterval.value = String(intervalValue);
            }
            if (reminderStartTime) reminderStartTime.value = config.reminderStartTime || '09:00';
            if (reminderEndTime) reminderEndTime.value = config.reminderEndTime || '22:00';
            
            // 加载星期选择
            const reminderDays = config.reminderDays || [1, 2, 3, 4, 5, 6, 0];
            for (let i = 0; i <= 6; i++) {
                const dayCheckbox = document.getElementById(`day${i}`);
                if (dayCheckbox) {
                    dayCheckbox.checked = reminderDays.includes(i);
                }
            }
            
            // 显示/隐藏设置
            if (reminderSettings) {
                reminderSettings.style.display = reminderToggle.checked ? 'block' : 'none';
            }
        });
        
        // 切换显示/隐藏
        reminderToggle.addEventListener('change', () => {
            if (reminderSettings) {
                reminderSettings.style.display = reminderToggle.checked ? 'block' : 'none';
            }
        });
        
        // 测试通知按钮
        if (testNotificationBtn) {
            testNotificationBtn.addEventListener('click', async () => {
                await testNotification();
            });
        }
    }
    
    // 初始化FSRS参数优化卡片
    await initializeFSRSOptimization();
    
    // 修改保存成功提示
    // 标记已初始化
    optionsInitialized = true;
    
    optionsForm.addEventListener('submit', async e => {
        e.preventDefault();
        console.log('Settings form submitted');

        try {
            const selectedSorterId = problemSorterSelect.value;
            const isCloudSyncEnabled = syncToggle.checked;
            const isReminderEnabled = reminderToggle.checked;

            await (0,configService/* setProblemSorter */.Kr)(Number(selectedSorterId));
            await (0,configService/* setCloudSyncEnabled */.sS)(isCloudSyncEnabled);
            await (0,configService/* setReminderEnabled */.EQ)(isReminderEnabled);

            // 保存提醒详细设置（包括提醒开关状态）
            const selectedDays = [];
            for (let i = 0; i <= 6; i++) {
                const dayCheckbox = document.getElementById(`day${i}`);
                if (dayCheckbox && dayCheckbox.checked) {
                    selectedDays.push(i);
                }
            }

            // 获取当前的间隔值
            const intervalValue = parseFloat(reminderInterval?.value || 60);
            console.log('Saving reminder interval:', intervalValue);

            // 始终保存所有提醒相关设置
            await browser/* default */.Z.storage.local.set({
                reminderEnabled: isReminderEnabled,
                reminderInterval: intervalValue,  // 使用 parseFloat 以支持 0.5
                reminderStartTime: reminderStartTime?.value || '09:00',
                reminderEndTime: reminderEndTime?.value || '22:00',
                reminderDays: selectedDays
            });

            console.log('Settings saved successfully');

            // 使用 notificationService 显示保存成功提示
            showSuccess('Settings Saved', 'Your settings have been successfully updated');
        } catch (error) {
            console.error('Error saving settings:', error);
            showError('Save Failed', 'Failed to save settings: ' + error.message);
        }
    });
}



// 初始化函数
async function initializeReviewPage() {
    console.log('初始化复习页面');
    // 首先加载配置
    await (0,configService/* loadConfigs */.O1)();
    console.log('加载的默认卡片数量:', store/* store */.h.defaultCardLimit);
    await loadDailyReviewData(); // 加载真实数据

    // 清理旧的事件监听器
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

    // 监听卡片限制变化事件
    document.addEventListener('cardLimitChanged', updateCardDisplay);

    // 监听卡片复习事件
    document.addEventListener('cardReviewed', updateCardDisplay);

    // 初始化显示
    setCurrentDate();
    updateStats();
    createReviewCards();
    initializeAddProblem();
}

function initializeFeedbackButton() {
    const button = document.querySelector('.feedback-btn');  // 使用新的类名
    if (!button) return;

    button.addEventListener('mouseenter', function() {
        this.style.background = '#1a3244';
        this.style.borderColor = '#61dafb';
        this.style.boxShadow = '0 0 10px rgba(97, 218, 251, 0.5)';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(2px)';
        this.querySelector('i').style.color = '#61dafb';
    });

    button.addEventListener('mouseleave', function() {
        this.style.background = '#1d2e3d';
        this.style.borderColor = 'rgba(97, 218, 251, 0.3)';
        this.style.boxShadow = 'none';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(0)';
        this.querySelector('i').style.color = '#61dafb';
    });
    const buttonReview = document.querySelector('.feedback-btn-review');  // 使用新的类名
    if (!buttonReview) return;

    buttonReview.addEventListener('mouseenter', function() {
        this.style.background = '#1a3244';
        this.style.borderColor = '#61dafb';
        this.style.boxShadow = '0 0 10px rgba(97, 218, 251, 0.5)';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(2px)';
        this.querySelector('i').style.color = '#61dafb';
    });

    buttonReview.addEventListener('mouseleave', function() {
        this.style.background = '#1d2e3d';
        this.style.borderColor = 'rgba(97, 218, 251, 0.3)';
        this.style.boxShadow = 'none';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(0)';
        this.querySelector('i').style.color = '#61dafb';
    });
}



// 页面切换功能
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM加载完成,开始初始化复习页面和切换绑定');
    await initializeReviewPage();
    // 添加设置初始化
    initializeFeedbackButton();
    
    
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
                case 'Review':
                    viewId = 'reviewView';
                    await initializeReviewPage();
                    break;
                case 'Problems':
                    viewId = 'problemListView';
                    await loadProblemList(); // 加载题目列表
                    initializeFeedbackButton();
                    // renderAll();
                    break;
                case 'Settings':
                    viewId = 'moreView';
                    // 并行初始化，不阻塞UI
                    Promise.all([
                        initializeOptions(),
                        initializeWebDAV()
                    ]).catch(error => {
                        console.error('Settings initialization error:', error);
                    });
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

    // 调试 revlogs
    try {
        console.log('===== 开始调试 revlogs =====');
        const allRevlogs = await (0,fsrs/* getAllRevlogs */.c8)();
        console.log('所有复习日志:', allRevlogs);
        
        // 计算总复习次数
        let totalReviews = 0;
        Object.keys(allRevlogs).forEach(cardId => {
            totalReviews += allRevlogs[cardId]?.length || 0;
        });
        console.log(`总复习次数: ${totalReviews}`);
        
        // 导出 CSV 并打印
        const csvContent = await (0,fsrs/* exportRevlogsToCSV */.Z9)();
        console.log('CSV 格式的复习日志:');
        console.log(csvContent);
        console.log('===== 结束调试 revlogs =====');
    } catch (error) {
        console.error('调试 revlogs 时出错:', error);
    }
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

/***/ 188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(867);





const getCloudStorageData = async (key) => {
    try {
        const result = await browser.storage.sync.get(key);
        if (result === undefined || result[key] === undefined) {
            throw new Error(key);
        }
        return result[key];
    } catch (error) {
        console.log(`get sync storage data failed for key = ${key}`);
    }
}

const setCloudStorageData = async (key, val) => {

    console.log("set to cloud");
    console.log([key, val]);

    try {
        await browser.storage.sync.set({ [key]: val });
    } catch (error) {
        console.log(error);
    }
}

const batchSetCloudStorageDate = async (object) => {
    try {
        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.storage.sync.set(object);
    } catch (error) {
        console.log(error);
    }
}

const batchGetCloudStorageDate = async (keyArr) => {
    try {
        const result = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.storage.sync.get(keyArr);
        if (result === undefined) {
            throw new Error(keyArr);
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

/**
 * sharding
 */

const shardCount = 20;

const hashKeyToShardIdx = (key) => {
    const hash = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__/* .simpleStringHash */ .zJ)(key);
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

class CloudStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_2__/* .StorageDelegate */ .i {
    constructor(){
        super();
        this.get = shardedGetCloudStorageData;
        this.set = shardedSetCloudStorageData;
    }
}

const cloudStorageDelegate = new CloudStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudStorageDelegate);

/***/ }),

/***/ 453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ optimizeFSRSParams)
/* harmony export */ });
// FSRS参数优化相关的API请求处理
const optimizeFSRSParams = async (csvContent, onProgress) => {
    try {
        const formData = new FormData();
        const csvBlob = new Blob([csvContent], { type: 'text/csv' });
        // ref: https://github.com/ishiko732/fsrs-online-training/blob/73b3281e4c972bf965083dcfe61f087383b4a083/components/lib/tz.ts#L3-L4
        // Chrome > 24, Edge > 12, Firefox > 29
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
        formData.append('file', csvBlob, 'revlog.csv');
        formData.append('sse', '1');
        formData.append('hour_offset', '4');
        formData.append('enable_short_term', '0');
        formData.append('timezone', timeZone);

        const response = await fetch('https://ishiko732-fsrs-online-training.hf.space/api/train', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 手动解析SSE响应
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = null;
        let lastProgress = null;
        let doneParams = null;
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            
            // 处理SSE响应
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                
                // 处理事件类型
                if (line.startsWith('event: ')) {
                    const eventType = line.substring(7);
                    console.log('事件类型:', eventType);
                    
                    // 查找下一个data行
                    let dataLine = '';
                    for (let j = i + 1; j < lines.length; j++) {
                        if (lines[j].startsWith('data: ')) {
                            dataLine = lines[j];
                            break;
                        }
                    }
                    
                    if (dataLine) {
                        try {
                            const data = JSON.parse(dataLine.substring(6));
                            
                            // 处理进度信息
                            if (eventType === 'progress') {
                                lastProgress = data;
                                // 如果提供了进度回调函数，则调用它
                                if (onProgress) {
                                    onProgress(data);
                                }
                            }
                            
                            // 处理完成事件
                            if (eventType === 'done') {
                                doneParams = data;
                                console.log('捕获到done事件中的参数:', doneParams);
                            }
                            
                            // 处理训练结果
                            if (eventType === 'info' && data.type === 'Train') {
                                result = data;
                            }
                        } catch (e) {
                            console.warn('Error parsing SSE data:', e, dataLine);
                        }
                    }
                }
            }
        }
        
        // 优先返回done标签中的参数
        if (doneParams) {
            return doneParams;
        }
        
        // 如果没有获取到done参数，但有进度信息，则返回进度信息
        if (!result && lastProgress) {
            result = {
                type: 'Progress',
                progress: lastProgress
            };
        }
        
        return result || { type: 'Error', message: 'No result received' };
    } catch (error) {
        console.error('Error optimizing FSRS parameters:', error);
        throw error;
    }
}; 

/***/ }),

/***/ 891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cy: () => (/* binding */ getLocalStorageData),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   qy: () => (/* binding */ setLocalStorageData)
/* harmony export */ });
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(648);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(867);



const getLocalStorageData = async (key) => {
    try {
        const result = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.get(key);
        if (result === undefined || result[key] === undefined) {
            throw new Error(key);
        }
        return result[key];
    } catch (error) {
        console.log(`get local storage data failed for key = ${key}`);
    }
}

const setLocalStorageData = async (key, val) => {
    try {
        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.set({ [key]: val });
    } catch (error) {
        console.log(error);
    }
}

class LocalStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_1__/* .StorageDelegate */ .i {
    constructor(){
        super();
        this.get = getLocalStorageData;
        this.set = setLocalStorageData;
    }
}

const localStorageDelegate = new LocalStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageDelegate);

/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ StorageDelegate)
/* harmony export */ });
class StorageDelegate {
    constructor(){
        this.get = async (key) => null;
        this.set = async (key, val) => {};
    }
}



/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ OperationHistory),
/* harmony export */   Z: () => (/* binding */ OPS_TYPE)
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

/***/ 875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JG: () => (/* binding */ copy),
/* harmony export */   tc: () => (/* binding */ Problem)
/* harmony export */ });
/* unused harmony export getDeletedProblem */
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

/***/ 14:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(823);
/* harmony import */ var _view_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(842);
/* harmony import */ var _service_syncManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(584);
/* harmony import */ var _service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(189);
/* harmony import */ var _component_webdavEnhancedSettings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(852);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(214);







console.log("Hello Leetcode-Mastery-Scheduler!");

// 初始渲染
await (0,_view_view_js__WEBPACK_IMPORTED_MODULE_1__/* .renderAll */ .xy)();

// 初始化同步管理器
await _service_syncManager_js__WEBPACK_IMPORTED_MODULE_2__/* .syncManager */ .D.initialize();

// 初始化增强版 WebDAV 设置
await _component_webdavEnhancedSettings_js__WEBPACK_IMPORTED_MODULE_4__/* .webdavEnhancedSettings */ .t.initialize();

// 初始化同步状态指示器
function initializeSyncStatusIndicator() {
    const syncIndicator = document.getElementById('syncIndicator');

    if (!syncIndicator) return;

    // 检查 WebDAV 或云同步是否启用
    const showIndicator = _service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.isConfigured || _store_js__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled;
    if (showIndicator) {
        syncIndicator.style.display = 'flex';
        
        // 根据认证状态显示不同的内容
        const initialStatus = _service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.isAuthenticated ? 'Synced' : 'Login Required';
        const initialClass = _service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.isAuthenticated ? 'sync-indicator' : 'sync-indicator warning';

        syncIndicator.className = initialClass;
        syncIndicator.innerHTML = `
            <span id="syncIcon">🔄</span>
            <span id="syncStatus">${initialStatus}</span>
        `;
    } else {
        syncIndicator.style.display = 'none';
        return;
    }

    const syncIcon = document.getElementById('syncIcon');
    const syncStatus = document.getElementById('syncStatus');

    // 监听两个服务的认证状态变化
    const updateAuthStatus = (isAuthenticated) => {
        if (!isAuthenticated) {
            syncIndicator.className = 'sync-indicator warning';
            syncStatus.textContent = 'Login Required';
            syncIndicator.title = 'Click to open settings and login';
        } else {
            syncIndicator.className = 'sync-indicator';
            syncStatus.textContent = 'Synced';
            syncIndicator.title = 'Click to sync now';
            
            // 认证成功后立即触发一次完整同步，确保本地数据上传到云端
            setTimeout(() => {
                _service_syncManager_js__WEBPACK_IMPORTED_MODULE_2__/* .syncManager */ .D.immediateSync().then(() => {
                    console.log('Initial sync completed after authentication');
                }).catch(error => {
                    console.error('Initial sync failed after authentication:', error);
                });
            }, 500); // 延迟500ms确保认证完全完成
        }
    };
    
    // 监听认证状态变化
    _service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.onAuthStatusChange = updateAuthStatus;

    // 添加同步状态监听器
    _service_syncManager_js__WEBPACK_IMPORTED_MODULE_2__/* .syncManager */ .D.addSyncListener((event) => {
        // 检查认证状态
        if (!_service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.isAuthenticated && _service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.isConfigured) {
            return;
        }
        
        switch (event.status) {
            case 'syncing':
                syncIndicator.className = 'sync-indicator syncing';
                syncStatus.textContent = 'Syncing...';
                break;
            case 'success':
                syncIndicator.className = 'sync-indicator success';
                syncStatus.textContent = 'Synced';
                // 同步成功后自动刷新视图
                (0,_view_view_js__WEBPACK_IMPORTED_MODULE_1__/* .renderAll */ .xy)().catch(console.error);
                // 3秒后恢复正常状态
                setTimeout(() => {
                    syncIndicator.className = 'sync-indicator';
                    syncStatus.textContent = 'Synced';
                }, 3000);
                break;
            case 'error':
                syncIndicator.className = 'sync-indicator error';
                syncStatus.textContent = 'Sync Error';
                // 5秒后恢复正常状态
                setTimeout(() => {
                    syncIndicator.className = 'sync-indicator';
                    syncStatus.textContent = 'Synced';
                }, 5000);
                break;
            default:
                syncIndicator.className = 'sync-indicator';
                syncStatus.textContent = 'Synced';
        }
    });
    
    // 点击同步指示器的行为
    syncIndicator.addEventListener('click', async () => {
        if (!_service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.isAuthenticated && _service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.isConfigured) {
            // 如果未认证，跳转到设置页面
            const tabs = document.querySelectorAll('.nav-btn');
            const contents = document.querySelectorAll('[id$="View"]');
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            const settingsTab = Array.from(tabs).find(t => t.textContent.includes('Settings'));
            const settingsContent = document.getElementById('settingsView');
            if (settingsTab && settingsContent) {
                settingsTab.classList.add('active');
                settingsContent.classList.add('active');
            }
        } else {
            // 已认证，执行同步
            await _service_syncManager_js__WEBPACK_IMPORTED_MODULE_2__/* .syncManager */ .D.immediateSync();
        }
    });
    
    // 添加提示
    syncIndicator.title = _service_webdavEnhancedService_js__WEBPACK_IMPORTED_MODULE_3__/* .webdavEnhancedService */ .n.isAuthenticated ? 'Click to sync now' : 'Click to open settings and login';
}

// 初始化同步指示器
initializeSyncStatusIndicator();
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EQ: () => (/* binding */ setReminderEnabled),
/* harmony export */   FO: () => (/* binding */ setDefaultCardLimit),
/* harmony export */   Kr: () => (/* binding */ setProblemSorter),
/* harmony export */   O1: () => (/* binding */ loadConfigs),
/* harmony export */   sS: () => (/* binding */ setCloudSyncEnabled)
/* harmony export */ });
/* unused harmony exports getReviewIntervals, setReviewIntervals, loadReviewIntervals, getProblemSorter, loadProblemSorter, isCloudSyncEnabled, switchCloudSyncEnabled, loadCloudSyncConfig, getDefaultCardLimit, loadDefaultCardLimit, isReminderEnabled, loadReminderConfig */
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(214);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(134);
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(867);






// configurable review intervals (to be integrated)

const getReviewIntervals = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .REVIEW_INTV_KEY */ .FB);
}

const setReviewIntervals = async (customIntv) => {
    if (customIntv == null || customIntv == undefined) return;
    const {easyIntv, mediumIntv, hardIntv} = store;
    customIntv.easyIntv = customIntv.easyIntv || easyIntv;
    customIntv.mediumIntv = customIntv.mediumIntv || mediumIntv;
    customIntv.hardIntv = customIntv.hardIntv || hardIntv;
    await setLocalStorageData(REVIEW_INTV_KEY, customIntv);
}

const loadReviewIntervals = async () => {
    const customIntv = await getReviewIntervals();
    if (customIntv !== undefined) {
        Object.assign(_store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h, customIntv);
    }
}


// configurable problem sort by
const getProblemSorter = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .PROBLEM_SORT_BY_KEY */ .ql);
}

const setProblemSorter = async (sorterId) => {
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .PROBLEM_SORT_BY_KEY */ .ql, sorterId);
}

const loadProblemSorter = async () => {
    const sorterId = await getProblemSorter() | (0,_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .idOf */ .jD)(_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .problemSorters */ .SL.sortByReviewTimeAsc);
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.problemSortBy = (0,_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .getSorterById */ .HF)(sorterId);
}



// config cloud sync
const isCloudSyncEnabled = async () => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .CONFIG_KEY */ .fR);
    const isEnabled = configs !== undefined ? configs[_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .CONFIG_INNER_KEY_ENABLE_CLOUD */ .$z] : false;
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    return isEnabled;
}

const switchCloudSyncEnabled = async () => {
    const configs = await getLocalStorageData(CONFIG_KEY);
    const isEnabled = configs[CONFIG_INNER_KEY_ENABLE_CLOUD];
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    configs[CONFIG_INNER_KEY_ENABLE_CLOUD] = !isEnabled;
    await setLocalStorageData(CONFIG_KEY, configs);
}

const setCloudSyncEnabled = async (isEnabled) => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .CONFIG_KEY */ .fR) || {
        CONFIG_INNER_KEY_ENABLE_CLOUD: false
    };
    configs[_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .CONFIG_INNER_KEY_ENABLE_CLOUD */ .$z] = isEnabled;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .CONFIG_KEY */ .fR, configs);
}


const loadCloudSyncConfig = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.isCloudSyncEnabled = await isCloudSyncEnabled();
}

// 获取默认卡片数量
const getDefaultCardLimit = async () => {
    const limit = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_CARD_LIMIT_KEY */ .hr);
    return limit !== undefined ? limit : _util_keys__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_CARD_LIMIT_VALUE */ .pD;
}

// 设置默认卡片数量
const setDefaultCardLimit = async (limit) => {
    if (limit == null || limit == undefined) return;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_CARD_LIMIT_KEY */ .hr, limit);
}

// 加载默认卡片数量到 store
const loadDefaultCardLimit = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.defaultCardLimit = await getDefaultCardLimit();
}

// 添加新的配置项和方法
async function setReminderEnabled(enabled) {
    await _shared_browser_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.storage.local.set({ reminderEnabled: enabled });
}

async function isReminderEnabled() {
    const { reminderEnabled } = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.storage.local.get('reminderEnabled');
    return reminderEnabled || false;
}
// 添加加载提醒设置到 store 的函数
const loadReminderConfig = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.isReminderEnabled = await isReminderEnabled();
}

// 更新 loadConfigs 函数
const loadConfigs = async () => {
    await loadReviewIntervals();
    await loadProblemSorter();
    await loadCloudSyncConfig();
    await loadDefaultCardLimit();
    await loadReminderConfig();  // 添加这一行
}

/***/ }),

/***/ 990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E_: () => (/* binding */ getRevlogCount),
/* harmony export */   GY: () => (/* binding */ optimizeParameters),
/* harmony export */   Gq: () => (/* binding */ updateProblemWithFSRS),
/* harmony export */   wM: () => (/* binding */ updateFSRSInstance)
/* harmony export */ });
/* unused harmony exports getFSRSInstance, calculateNextReview, syncFSRSHistory, syncFSRSParams, syncRevlogs */
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(878);
/* harmony import */ var _delegate_fsrsDelegate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(453);
/* harmony import */ var _util_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(384);
/* harmony import */ var _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(214);










// 创建FSRS实例
let fsrsInstance = null;

// 获取FSRS实例
const getFSRSInstance = async () => {
    if (fsrsInstance) {
        return fsrsInstance;
    }
    
    // 获取本地参数
    const localParams = await (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .getFSRSParams */ .JF)();
    
    // 创建新的FSRS实例
    fsrsInstance = new ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .FSRS */ .Ke(localParams);
    console.log('创建新的FSRS实例，参数:', localParams);
    
    return fsrsInstance;
};

// 更新FSRS实例
const updateFSRSInstance = async (newParams) => {
    // 创建新的FSRS实例
    fsrsInstance = new ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .FSRS */ .Ke(newParams);
    console.log('更新FSRS实例，新参数:', newParams);
    
    return fsrsInstance;
};

// 计算下次复习时间
const calculateNextReview = async (problem, feedback) => {
    try {
        const now = new Date();
        
        // 确保有一个有效的 lastReview 日期
        let lastReview;
        if (problem.fsrsState && problem.fsrsState.lastReview) {
            lastReview = new Date(problem.fsrsState.lastReview);
        } else if (problem.submissionTime) {
            lastReview = new Date(problem.submissionTime);
        } else {
            lastReview = new Date(now.getTime()); // 默认为昨天
        }
        
        // 检查日期是否有效
        if (isNaN(lastReview.getTime())) {
            lastReview = new Date(now.getTime()); // 如果无效，使用昨天
        }

        // 如果没有 fsrsState，创建一个默认的
        if (!problem.fsrsState) {
            problem.fsrsState = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .createEmptyCard */ .tl)(lastReview, (card) => {
                return {
                    nextReview: +card.due,
                    stability: card.stability,
                    difficulty: card.difficulty,
                    state: card.state,
                    reviewCount: card.reps,
                    lapses: card.lapses,
                    lastReview: +lastReview  // 存储为时间戳
                }
            });
        }
        let card = problem.fsrsState;
        
        // 确保 nextReview 有效
        if (!card.nextReview || isNaN(card.nextReview)) {
            card.nextReview = +lastReview; // 默认为一天后
        }

        const rating = (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .qualityToRating */ .uY)(feedback.quality);
        
        // 确保所有参数都有有效值
        const scheduledDays = Math.max(0, Math.floor((card.nextReview - card.lastReview) / (1000 * 60 * 60 * 24)));
        const elapsedDays = Math.max(0, (now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));
        
        // 获取FSRS实例
        const fsrs = await getFSRSInstance();
        
        const result = fsrs.next({
            due: card.nextReview,
            stability: card.stability,
            difficulty: card.difficulty,
            elapsed_days: elapsedDays,
            scheduled_days: scheduledDays,
            reps: card.reviewCount,
            lapse_count: card.lapses,
            state: card.state,
            last_review: lastReview,  // 使用已经转换好的 Date 对象
        }, now, rating);

        return {
            /**长期调度模式，ivl一定大于1d */
            nextReview: +result.card.due,
            stability: result.card.stability,
            difficulty: result.card.difficulty,
            state: result.card.state,
            reviewCount: result.card.reps,
            lapses: result.card.lapses
        };
    } catch (error) {
        console.error('Error in calculateNextReview:', error);
        const now = new Date(); // 在 catch 块中定义 now 变量
        return {
            nextReview: now.getTime() + (24 * 60 * 60 * 1000),
            stability: problem.fsrsState.stability || ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .S_MIN */ .sH,
            /** ref: https://github.com/open-spaced-repetition/ts-fsrs/blob/5eabd189d4740027ce1018cc968e67ca46c048a3/src/fsrs/default.ts#L20-L40 */
            difficulty: problem.fsrsState.difficulty || _util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultParams */ .Tb.w[4],
            /** 长期调度下状态一定是New或Review */
            state: problem.fsrsState.state || ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM.Review,
            reviewCount: (problem.fsrsState.reviewCount || 0) + 1,
            lapses: problem.fsrsState.lapses || 0
        };
    }
};

// 更新问题状态
const updateProblemWithFSRS = async (problem, feedback) => {
    const now = Date.now();
    const fsrsResult = await calculateNextReview(problem, feedback);
    
    // 创建新的复习日志条目，只包含必要字段
    const newRevlog = {
        card_id: problem.index, // 使用问题索引作为卡片ID
        review_time: now, // 复习时间（毫秒时间戳）
        review_rating: (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .qualityToRating */ .uY)(feedback.quality), // 复习评分 (1-4)
        review_state: ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .TypeConvert */ .mc.state(problem.fsrsState ? problem.fsrsState?.state ?? ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM.New : 'New') // 复习状态 (0-3)
    };
    
    // 将复习日志存储到单独的 localStorage 键中
    await (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .saveRevlog */ .Vd)(problem.index, newRevlog);
    
    // 更新问题状态（不修改原有结构）
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

// 获取复习记录数量
const getRevlogCount = async () => {
    try {
        const allRevlogs = await (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .getAllRevlogs */ .c8)();
        let totalCount = 0;
        
        // 计算所有卡片的复习记录总数
        Object.values(allRevlogs).forEach(cardRevlogs => {
            totalCount += cardRevlogs.length;
        });
        
        return totalCount;
    } catch (error) {
        console.error('Error getting revlog count:', error);
        return 0;
    }
};

// 优化FSRS参数
const optimizeParameters = async (onProgress) => {
    try {
        // 获取并导出CSV格式的复习记录
        const csvContent = await (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .exportRevlogsToCSV */ .Z9)();
        
        // 调用API进行参数优化
        const result = await (0,_delegate_fsrsDelegate_js__WEBPACK_IMPORTED_MODULE_5__/* .optimizeFSRSParams */ .N)(csvContent, onProgress);
        
        // 检查结果是否包含params字段（来自done标签）
        if (result && result.params) {
            console.log('获取到优化后的FSRS参数:', result.params);
            
            // 不再自动保存参数，而是返回结果供用户确认
            return {
                type: 'Success',
                params: result.params,
                metrics: result.metrics || {}
            };
        }
        
        // 如果是进度信息
        if (result && result.type === 'Progress') {
            return result;
        }
        
        // 如果是训练结果
        if (result && result.type === 'Train') {
            return {
                type: 'Train',
                message: '训练完成，但未获取到完整参数'
            };
        }
        
        // 其他情况
        return result;
    } catch (error) {
        console.error('Error optimizing parameters:', error);
        throw error;
    }
};

// 同步FSRS历史记录
const syncFSRSHistory = async () => {
    try {
        // 检查是否启用了云同步
        if (!store.isCloudSyncEnabled) {
            console.log('云同步未启用，跳过FSRS历史记录同步');
            return;
        }

        // 同步FSRS参数和复习日志
        await syncFSRSParams();
        await syncRevlogs();
        
        // 更新FSRS实例
        const updatedParams = await getFSRSParams();
        await updateFSRSInstance(updatedParams);
        
        console.log('FSRS历史记录同步完成');
    } catch (error) {
        console.error('同步FSRS历史记录失败:', error);
    }
}; 


const syncFSRSParams = async () => {
    if (!store.isCloudSyncEnabled) return;
    await syncLocalAndCloudStorage('fsrs_params', mergeFSRSParams);
}

const syncRevlogs = async () => {
    if (!store.isCloudSyncEnabled) return;
    await syncLocalAndCloudStorage('fsrs_revlogs', mergeRevlogs);
}

/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ isInCnMode),
/* harmony export */   b: () => (/* binding */ toggleMode)
/* harmony export */ });
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);



const isInCnMode = async () => {
    let cnMode = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_1__/* .CN_MODE */ .dw);
    console.log(`current cnMode is ${cnMode}`);
    if (cnMode === undefined) {
        await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_1__/* .CN_MODE */ .dw, false);
        cnMode = false;
    }
    return cnMode;
}

const toggleMode = async () => {
    const cnMode = await isInCnMode();
    console.log(`got current cnMode before toggle}`);
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_1__/* .CN_MODE */ .dw, !cnMode);
    console.log("cnMode toggled");
}

/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $j: () => (/* binding */ hasOperationHistory),
/* harmony export */   Z_: () => (/* binding */ undoLatestOperation),
/* harmony export */   xH: () => (/* binding */ addNewOperationHistory)
/* harmony export */ });
/* unused harmony export popLatestOperationHistory */
/* harmony import */ var _entity_operationHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(733);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(134);
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891);
/* harmony import */ var _problemService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(820);
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(875);







const CACHE_SIZE = 10;

const addNewOperationHistory = async (before, type, time) => {
    const snapShot = (0,_entity_problem__WEBPACK_IMPORTED_MODULE_4__/* .copy */ .JG)(before);
    snapShot.isDeleted = false;
    const newOperationHistory = new _entity_operationHistory__WEBPACK_IMPORTED_MODULE_0__/* .OperationHistory */ .P(snapShot, await (0,_modeService__WEBPACK_IMPORTED_MODULE_1__/* .isInCnMode */ .B)(), type, time);
    let opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_2__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_5__/* .OPS_HISTORY_KEY */ .I2);
    if (opsHistory === undefined) {
        opsHistory = [];
    }
    if (opsHistory.length === CACHE_SIZE) {
        opsHistory.shift();
    }
    opsHistory.push(newOperationHistory);
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_5__/* .OPS_HISTORY_KEY */ .I2, opsHistory);
}

const popLatestOperationHistory = async () => {
    const opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_2__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_5__/* .OPS_HISTORY_KEY */ .I2);
    if (opsHistory === undefined || opsHistory.length === 0) {
        return undefined;
    }

    const latestOpsHistory = opsHistory.pop();
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_5__/* .OPS_HISTORY_KEY */ .I2, opsHistory);
    return latestOpsHistory;
}

const undoLatestOperation = async () => {
    const operationHistory = await popLatestOperationHistory();
    if (operationHistory === undefined) {
        return;
    }
    const { before: problemBefore, isInCnMode } = operationHistory;
    problemBefore.modificationTime = Date.now();    // need to update the mod time to make this latest change to override cloud data

    const problems = await (0,_problemService__WEBPACK_IMPORTED_MODULE_3__/* .getProblemsByMode */ .JW)(isInCnMode);
    problems[problemBefore.index] = problemBefore;
    await (0,_problemService__WEBPACK_IMPORTED_MODULE_3__/* .setProblemsByMode */ .Ur)(problems, isInCnMode);
}

const hasOperationHistory = async () => {
    const opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_2__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_5__/* .OPS_HISTORY_KEY */ .I2);
    return opsHistory !== undefined && opsHistory.length > 0;
}

/***/ }),

/***/ 820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qu: () => (/* binding */ createOrUpdateProblem),
  aG: () => (/* binding */ deleteProblem),
  getAllProblems: () => (/* binding */ getAllProblems),
  cp: () => (/* binding */ getCurrentProblemInfoFromLeetCodeByHref),
  Oo: () => (/* binding */ getCurrentProblemInfoFromLeetCodeByUrl),
  JW: () => (/* binding */ getProblemsByMode),
  Vv: () => (/* binding */ markProblemAsMastered),
  wB: () => (/* binding */ resetProblem),
  setProblems: () => (/* binding */ setProblems),
  Ur: () => (/* binding */ setProblemsByMode),
  xd: () => (/* binding */ syncProblems)
});

// UNUSED EXPORTS: batchUpdateProblems, getAllProblemsInCloud, setProblemsToCloud

;// CONCATENATED MODULE: ./src/popup/delegate/leetCodeDelegate.js
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

// 从URL获取站点和题目标识
function extractProblemInfo(url) {
    const match = url.match(/(com|cn)(\/|$)/);
    const site = match ? match[1] : "com";
    console.log(`site is ${site}`);

    let cleanUrl = url;
    const possible_suffix = ["/submissions/", "/description/", "/discussion/", "/solutions/"];
    for (const suffix of possible_suffix) {
        if (cleanUrl.includes(suffix)) {
            cleanUrl = cleanUrl.substring(0, cleanUrl.lastIndexOf(suffix) + 1);
            break;
        }
    }

    const problemSlug = cleanUrl.split("/").splice(-2)[0];
    return { site, problemSlug, cleanUrl };
}

// 基础的获取题目信息函数
const getProblemInfo = async (url) => {
    const { site, problemSlug, cleanUrl } = extractProblemInfo(url);
    
    const question = await queryProblemInfo(problemSlug, site);

    return {
        problemIndex: question.questionFrontendId,
        problemName: `${question.questionFrontendId}. ${site === "cn" ? question.translatedTitle : question.title}`,
        problemLevel: question.difficulty,
        problemUrl: cleanUrl
    };
}

// 从当前页面URL获取题目信息
const getProblemInfoByHref = async () => {
    const currentUrl = window.location.href;
    return await getProblemInfo(currentUrl);
}

// 从指定URL获取题目信息
const getProblemInfoByUrl = async (url) => {
    if (!url.includes('leetcode.com/problems/') && !url.includes('leetcode.cn/problems/')) {
        throw new Error('请输入有效的 LeetCode 题目链接');
    }
    return await getProblemInfo(url);
}


// EXTERNAL MODULE: ./src/popup/delegate/localStorageDelegate.js
var localStorageDelegate = __webpack_require__(891);
// EXTERNAL MODULE: ./src/popup/service/operationHistoryService.js
var operationHistoryService = __webpack_require__(809);
// EXTERNAL MODULE: ./src/popup/entity/operationHistory.js
var operationHistory = __webpack_require__(196);
// EXTERNAL MODULE: ./src/popup/util/constants.js
var constants = __webpack_require__(497);
// EXTERNAL MODULE: ./src/popup/util/keys.js
var keys = __webpack_require__(134);
// EXTERNAL MODULE: ./src/popup/service/modeService.js
var modeService = __webpack_require__(733);
// EXTERNAL MODULE: ./src/popup/store.js
var store = __webpack_require__(214);
// EXTERNAL MODULE: ./src/popup/util/utils.js
var utils = __webpack_require__(384);
// EXTERNAL MODULE: ./src/popup/delegate/cloudStorageDelegate.js
var delegate_cloudStorageDelegate = __webpack_require__(188);
// EXTERNAL MODULE: ./src/popup/service/webdavEnhancedService.js
var webdavEnhancedService = __webpack_require__(189);
// EXTERNAL MODULE: ./src/popup/service/syncManager.js
var service_syncManager = __webpack_require__(584);
;// CONCATENATED MODULE: ./src/popup/service/problemService.js














const getAllProblems = async () => {
    let cnMode = await (0,modeService/* isInCnMode */.B)();
    const queryKey = cnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    let problems = await (0,localStorageDelegate/* getLocalStorageData */.Cy)(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getAllProblemsInCloud = async () => {
    let cnMode = await isInCnMode();
    const queryKey = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    let problems = await cloudStorageDelegate.get(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getProblemsByMode = async (useCnMode) => {
    const queryKey = useCnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    let problems = await (0,localStorageDelegate/* getLocalStorageData */.Cy)(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

// 从当前页面获取题目信息
const getCurrentProblemInfoFromLeetCodeByHref = async () => {
    return await getProblemInfoByHref();
}

// 从指定URL获取题目信息
const getCurrentProblemInfoFromLeetCodeByUrl = async (url) => {
    return await getProblemInfoByUrl(url);
}


const setProblems = async (problems) => {
    let cnMode = await (0,modeService/* isInCnMode */.B)();
    const key = cnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    await (0,localStorageDelegate/* setLocalStorageData */.qy)(key, problems);
}

const setProblemsToCloud = async (problems) => {
    let cnMode = await isInCnMode();
    const key = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    await cloudStorageDelegate.set(key, problems);
}

const setProblemsByMode = async (problems, useCnMode) => {
    const key = useCnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    await (0,localStorageDelegate/* setLocalStorageData */.qy)(key, problems);
}

const createOrUpdateProblem = async (problem) => {
    problem.modificationTime = Date.now();
    const problems = await getAllProblems();
    problems[problem.index] = problem;
    await setProblems(problems);
    
    // 触发同步
    service_syncManager/* syncManager */.D.debouncedSync(problem.index);
}

const markProblemAsMastered = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    await (0,operationHistoryService/* addNewOperationHistory */.xH)(problem, operationHistory/* OPS_TYPE */.Z.MASTER, Date.now());

    problem.proficiency = constants/* forggettingCurve */.mq.length;
    problem.modificationTime = Date.now();

    problems[problemId] = problem;

    await setProblems(problems);
    
    // 触发同步
    service_syncManager/* syncManager */.D.debouncedSync(problemId);
};

const deleteProblem = async (problemId) => {

    let problems = await getAllProblems();
    const problem = problems[problemId];
    
    // soft delete
    if (problem) {
        problem.isDeleted = true;
        problem.modificationTime = Date.now();
        await (0,operationHistoryService/* addNewOperationHistory */.xH)(problem, operationHistory/* OPS_TYPE */.Z.DELETE, Date.now());
        problems[problemId] = problem;
        await setProblems(problems);
        
        // 触发同步
        service_syncManager/* syncManager */.D.debouncedSync(problemId);
    }
};

const resetProblem = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    problem.proficiency = 0;
    problem.submissionTime = Date.now() - 24 * 60 * 60 * 1000;
    problem.modificationTime = Date.now();

    await (0,operationHistoryService/* addNewOperationHistory */.xH)(problem, operationHistory/* OPS_TYPE */.Z.RESET, Date.now());

    problems[problemId] = problem;

    await setProblems(problems);
    
    // 触发同步
    service_syncManager/* syncManager */.D.debouncedSync(problemId);
};

const syncProblems = async () => {
    // 使用新的同步管理器
    await service_syncManager/* syncManager */.D.performSync();
}

/**
 * 批量更新问题（用于批量操作）
 */
const batchUpdateProblems = async (updates) => {
    const problems = await getAllProblems();
    
    for (const update of updates) {
        if (problems[update.id]) {
            problems[update.id] = {
                ...problems[update.id],
                ...update.data,
                modificationTime: Date.now()
            };
        }
    }
    
    await setProblems(problems);
    
    // 批量操作立即同步
    await syncManager.immediateSync();
}

/***/ }),

/***/ 584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ syncManager)
/* harmony export */ });
/* harmony import */ var _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _problemService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(820);
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(733);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(134);
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891);
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(214);
/**
 * Sync Manager for coordinating data synchronization between local, Chrome Sync, and WebDAV
 */









class SyncManager {
    constructor() {
        this.syncTimer = null;
        this.syncQueue = new Set();
        this.SYNC_DELAY = 2000; // 2秒防抖
        this.AUTO_SYNC_INTERVAL = 5 * 60 * 1000; // 5分钟自动同步
        this.isSyncing = false;
        this.lastSyncTime = null;
        this.syncStatus = 'idle'; // idle, syncing, success, error
        this.syncListeners = new Set();
        this.conflictResolver = null;
        this.autoSyncTimer = null;
    }

    /**
     * 初始化同步管理器
     */
    async initialize() {
        // 加载 WebDAV 配置
        const webdavLoaded = await _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.loadConfig();
        this.activeWebdavService = _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n;

        // 启动时异步执行一次同步，不阻塞初始化
        if (webdavLoaded || _store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled) {
            setTimeout(() => {
                this.performSync().catch(error => {
                    console.error('Initial sync failed:', error);
                });
            }, 1000); // 延迟1秒执行，让UI先加载完成
        }
        
        // 启动自动同步
        this.startAutoSync();
        
        // 监听窗口关闭事件
        window.addEventListener('beforeunload', async (e) => {
            if (this.hasPendingChanges()) {
                e.preventDefault();
                await this.immediateSync();
            }
        });
    }

    /**
     * 启动自动同步
     */
    startAutoSync() {
        this.stopAutoSync();
        this.autoSyncTimer = setInterval(() => {
            this.performSync();
        }, this.AUTO_SYNC_INTERVAL);
    }

    /**
     * 停止自动同步
     */
    stopAutoSync() {
        if (this.autoSyncTimer) {
            clearInterval(this.autoSyncTimer);
            this.autoSyncTimer = null;
        }
    }

    /**
     * 添加同步状态监听器
     */
    addSyncListener(listener) {
        this.syncListeners.add(listener);
    }

    /**
     * 移除同步状态监听器
     */
    removeSyncListener(listener) {
        this.syncListeners.delete(listener);
    }

    /**
     * 通知同步状态变化
     */
    notifySyncStatusChange(status, data = {}) {
        this.syncStatus = status;
        this.syncListeners.forEach(listener => {
            try {
                listener({ status, ...data });
            } catch (error) {
                console.error('Sync listener error:', error);
            }
        });
    }

    /**
     * 设置冲突解决器
     */
    setConflictResolver(resolver) {
        this.conflictResolver = resolver;
    }

    /**
     * 防抖同步
     */
    debouncedSync(problemId = null) {
        if (problemId) {
            this.syncQueue.add(problemId);
        }
        
        clearTimeout(this.syncTimer);
        this.syncTimer = setTimeout(() => {
            this.performSync();
        }, this.SYNC_DELAY);
    }

    /**
     * 立即同步
     */
    async immediateSync() {
        clearTimeout(this.syncTimer);
        await this.performSync();
    }

    /**
     * 检查是否有待同步的更改
     */
    hasPendingChanges() {
        return this.syncQueue.size > 0 || this.syncTimer !== null;
    }

    /**
     * 执行同步
     */
    async performSync() {
        if (this.isSyncing) return;
        
        // 检查是否有任何同步方式启用
        if (!_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isConfigured && !_store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled) {
            return;
        }
        
        this.isSyncing = true;
        this.notifySyncStatusChange('syncing');
        
        try {
            const cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_2__/* .isInCnMode */ .B)();
            const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_6__/* .CN_PROBLEM_KEY */ .Q$ : _util_keys__WEBPACK_IMPORTED_MODULE_6__/* .PROBLEM_KEY */ .y0;
            
            // 1. 获取本地数据
            const localData = await this.getLocalData(key);
            
            // 2. 获取所有云端数据（Chrome Sync + WebDAV）
            const cloudData = await this.getAllCloudData(key);
            
            // 3. 合并数据
            const mergedData = await this.mergeAllData(localData, cloudData);
            
            // 4. 处理冲突
            if (mergedData.conflicts.length > 0) {
                await this.handleConflicts(mergedData.conflicts);
            }
            
            // 5. 保存合并后的数据到所有位置
            await this.saveDataEverywhere(key, mergedData.problems);
            
            // 6. 清空同步队列
            this.syncQueue.clear();
            this.lastSyncTime = new Date().toISOString();
            
            this.notifySyncStatusChange('success', { 
                syncedCount: Object.keys(mergedData.problems).length 
            });
        } catch (error) {
            console.error('Sync failed:', error);
            this.notifySyncStatusChange('error', { error: error.message });
            this.handleSyncError(error);
        } finally {
            this.isSyncing = false;
        }
    }

    /**
     * 获取本地数据
     */
    async getLocalData(key) {
        const data = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__/* .getLocalStorageData */ .Cy)(key);
        return data || {};
    }

    /**
     * 获取所有云端数据
     */
    async getAllCloudData(key) {
        const cloudData = {
            chromeSync: null,
            webdav: null
        };
        
        // 获取Chrome Sync数据
        if (_store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled) {
            try {
                cloudData.chromeSync = await _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.get(key);
            } catch (error) {
                console.warn('Failed to get Chrome Sync data:', error);
            }
        }
        
        // 获取WebDAV数据
        if (_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isConfigured) {
            try {
                const webdavData = await _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.downloadData('problems_sync.json');
                if (webdavData && webdavData.problems) {
                    cloudData.webdav = webdavData.problems;
                }
            } catch (error) {
                console.warn('Failed to get WebDAV data:', error);
            }
        }
        
        return cloudData;
    }

    /**
     * 合并所有数据源
     */
    async mergeAllData(localData, cloudData) {
        const merged = new Map();
        const conflicts = [];
        const allProblems = {};
        
        // 收集所有数据源
        const dataSources = [
            { name: 'local', data: localData },
            { name: 'chromeSync', data: cloudData.chromeSync },
            { name: 'webdav', data: cloudData.webdav }
        ].filter(source => source.data);
        
        // 收集所有问题ID
        const allIds = new Set();
        dataSources.forEach(source => {
            if (source.data) {
                Object.keys(source.data).forEach(id => allIds.add(id));
            }
        });
        
        // 对每个问题进行合并
        for (const id of allIds) {
            const versions = dataSources
                .filter(source => source.data && source.data[id])
                .map(source => ({
                    source: source.name,
                    problem: source.data[id]
                }));
            
            if (versions.length === 0) continue;
            
            if (versions.length === 1) {
                // 只有一个版本，直接使用
                merged.set(id, versions[0].problem);
            } else {
                // 多个版本，需要合并
                const mergedProblem = this.mergeSingleProblem(versions);
                if (mergedProblem.hasConflict) {
                    conflicts.push({
                        id,
                        versions: versions
                    });
                } else {
                    merged.set(id, mergedProblem.data);
                }
            }
        }
        
        // 转换为对象格式
        merged.forEach((value, key) => {
            allProblems[key] = value;
        });
        
        return {
            problems: allProblems,
            conflicts
        };
    }

    /**
     * 合并单个问题的多个版本
     */
    mergeSingleProblem(versions) {
        // 找出最新修改的版本
        let latestVersion = versions[0];
        let latestTime = this.getModificationTime(versions[0].problem);
        
        for (let i = 1; i < versions.length; i++) {
            const time = this.getModificationTime(versions[i].problem);
            if (time > latestTime) {
                latestTime = time;
                latestVersion = versions[i];
            }
        }
        
        // 检查是否有冲突（相同时间但不同内容）
        const hasConflict = versions.some(v => {
            const time = this.getModificationTime(v.problem);
            return time === latestTime && 
                   JSON.stringify(v.problem) !== JSON.stringify(latestVersion.problem);
        });
        
        // 特殊字段合并
        const mergedProblem = { ...latestVersion.problem };
        
        // 合并笔记（保留最长的）
        versions.forEach(v => {
            if (v.problem.note && v.problem.note.length > (mergedProblem.note || '').length) {
                mergedProblem.note = v.problem.note;
            }
        });
        
        // 合并复习记录（合并所有记录）
        const allReviews = new Set();
        versions.forEach(v => {
            if (v.problem.reviews && Array.isArray(v.problem.reviews)) {
                v.problem.reviews.forEach(review => {
                    allReviews.add(JSON.stringify(review));
                });
            }
        });
        if (allReviews.size > 0) {
            mergedProblem.reviews = Array.from(allReviews).map(r => JSON.parse(r));
        }
        
        return {
            hasConflict,
            data: mergedProblem
        };
    }

    /**
     * 获取问题的修改时间
     */
    getModificationTime(problem) {
        return problem.modificationTime || 
               problem.lastModified || 
               problem.submissionTime || 
               0;
    }

    /**
     * 处理冲突
     */
    async handleConflicts(conflicts) {
        if (!this.conflictResolver) {
            console.warn('No conflict resolver set, using latest version');
            return;
        }
        
        for (const conflict of conflicts) {
            try {
                const resolved = await this.conflictResolver(conflict);
                if (resolved) {
                    // 更新解决后的数据
                    conflict.resolved = resolved;
                }
            } catch (error) {
                console.error('Conflict resolution failed:', error);
            }
        }
    }

    /**
     * 保存数据到所有位置
     */
    async saveDataEverywhere(key, problems) {
        const savePromises = [];
        
        // 保存到本地
        savePromises.push((0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__/* .setLocalStorageData */ .qy)(key, problems));
        
        // 保存到Chrome Sync
        if (_store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled) {
            savePromises.push(_delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.set(key, problems).catch(error => {
                console.warn('Failed to save to Chrome Sync:', error);
            }));
        }
        
        // 保存到WebDAV
        if (_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isConfigured) {
            const syncData = {
                version: '2.0',
                lastSync: new Date().toISOString(),
                deviceId: await this.getDeviceId(),
                problems: problems,
                metadata: {
                    totalProblems: Object.keys(problems).length,
                    lastModified: new Date().toISOString(),
                    syncVersion: 1
                }
            };
            
            savePromises.push(
                _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.uploadData('problems_sync.json', syncData).catch(error => {
                    console.warn('Failed to save to WebDAV:', error);
                })
            );
        }
        
        await Promise.all(savePromises);
    }

    /**
     * 获取设备ID
     */
    async getDeviceId() {
        let deviceId = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__/* .getLocalStorageData */ .Cy)('deviceId');
        if (!deviceId) {
            deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__/* .setLocalStorageData */ .qy)('deviceId', deviceId);
        }
        return deviceId;
    }

    /**
     * 处理同步错误
     */
    handleSyncError(error) {
        // 记录错误
        console.error('Sync error:', error);
        
        // 可以在这里添加错误重试逻辑
        // 或者通知用户同步失败
    }

    /**
     * 增量同步（性能优化）
     */
    async incrementalSync() {
        if (!this.lastSyncTime) {
            // 首次同步，执行完整同步
            return this.performSync();
        }
        
        const cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_2__/* .isInCnMode */ .B)();
        const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_6__/* .CN_PROBLEM_KEY */ .Q$ : _util_keys__WEBPACK_IMPORTED_MODULE_6__/* .PROBLEM_KEY */ .y0;
        
        // 获取自上次同步以来的更改
        const changes = await this.getChangesSince(this.lastSyncTime);
        
        if (changes.length === 0) return;
        
        // 只同步变化的数据
        const syncData = {
            changes: changes,
            lastSyncTime: new Date().toISOString(),
            deviceId: await this.getDeviceId()
        };
        
        if (_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isConfigured) {
            await _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.uploadData('incremental.json', syncData);
        }
    }

    /**
     * 获取指定时间后的更改
     */
    async getChangesSince(timestamp) {
        const problems = await (0,_problemService__WEBPACK_IMPORTED_MODULE_1__.getAllProblems)();
        const changes = [];
        
        Object.entries(problems).forEach(([id, problem]) => {
            const modTime = this.getModificationTime(problem);
            if (modTime > new Date(timestamp).getTime()) {
                changes.push({
                    id,
                    problem,
                    timestamp: modTime
                });
            }
        });
        
        return changes;
    }
}

// 导出单例
const syncManager = new SyncManager();

/***/ }),

/***/ 189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ webdavEnhancedService)
/* harmony export */ });
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(867);
/**
 * Enhanced WebDAV Service with Auto-fallback and Method Disguise
 * Supports automatic HTTPS->HTTP fallback and PROPFIND->POST disguise
 */



class WebDAVEnhancedService {
    constructor() {
        this.baseUrl = null;
        this.username = null;
        this.password = null;
        this.isConfigured = false;
        this.isAuthenticated = false;
        this.folderPath = '/LeetcodeMasteryScheduler/';
        this.onAuthStatusChange = null;

        // 连接策略配置
        this.connectionStrategy = {
            protocol: 'auto', // 'auto', 'https', 'http'
            method: 'auto',    // 'auto', 'native', 'disguised'
            currentProtocol: null,
            currentMethod: null,
            lastSuccessfulStrategy: null
        };

        // 错误检测模式
        this.errorPatterns = {
            encryptionBlocked: ['ECONNRESET', 'ETIMEDOUT', 'CERT', 'SSL', 'TLS'],
            methodBlocked: ['405', '403', 'Method Not Allowed', 'Forbidden'],
            networkError: ['ENOTFOUND', 'ECONNREFUSED', 'Network']
        };

        // 重试配置
        this.retryConfig = {
            maxRetries: 3,
            retryDelay: 1000,
            timeout: 10000
        };
    }

    /**
     * 配置 WebDAV 连接，支持自动降级
     */
    async configure(config) {
        // 保存基础配置
        this.username = config.username;
        this.password = config.password;

        // 设置连接策略
        if (config.connectionMode) {
            this.connectionStrategy.protocol = config.connectionMode.protocol || 'auto';
            this.connectionStrategy.method = config.connectionMode.method || 'auto';
        }

        // 设置重试配置
        if (config.retryConfig) {
            Object.assign(this.retryConfig, config.retryConfig);
        }

        // 构建基础 URL（不含协议）
        const baseHost = config.serverUrl || 'dav.jianguoyun.com/dav';
        this.baseUrl = baseHost.replace(/^https?:\/\//, '');

        // 保存配置
        await this.saveConfig({
            ...config,
            connectionStrategy: this.connectionStrategy
        });
        this.isConfigured = true;

        // 智能连接测试
        const isValid = await this.smartConnect();
        this.isAuthenticated = isValid;

        if (isValid) {
            await this.ensureFolderExists();
            if (this.onAuthStatusChange) {
                this.onAuthStatusChange(true);
            }
            console.log('WebDAV connected successfully with strategy:', this.connectionStrategy.lastSuccessfulStrategy);
        } else {
            if (this.onAuthStatusChange) {
                this.onAuthStatusChange(false);
            }
        }
        return isValid;
    }

    /**
     * 智能连接测试，自动尝试不同策略
     */
    async smartConnect() {
        const strategies = this.generateStrategies();

        for (const strategy of strategies) {
            console.log(`Trying connection strategy: ${strategy.protocol} + ${strategy.method}`);

            try {
                const success = await this.testConnectionWithStrategy(strategy);
                if (success) {
                    // 保存成功的策略
                    this.connectionStrategy.currentProtocol = strategy.protocol;
                    this.connectionStrategy.currentMethod = strategy.method;
                    this.connectionStrategy.lastSuccessfulStrategy = {
                        protocol: strategy.protocol,
                        method: strategy.method,
                        timestamp: new Date().toISOString()
                    };
                    await this.saveStrategy();
                    return true;
                }
            } catch (error) {
                console.log(`Strategy failed: ${error.message}`);
                continue;
            }
        }

        return false;
    }

    /**
     * 生成连接策略列表
     */
    generateStrategies() {
        const strategies = [];

        // 根据配置生成策略
        const protocols = this.connectionStrategy.protocol === 'auto'
            ? ['https', 'http']
            : [this.connectionStrategy.protocol];

        const methods = this.connectionStrategy.method === 'auto'
            ? ['native', 'disguised']
            : [this.connectionStrategy.method];

        // 如果不是自动模式，用户的选择优先
        if (this.connectionStrategy.protocol !== 'auto') {
            // 用户指定了协议，严格按照用户选择
            for (const method of methods) {
                strategies.push({ protocol: protocols[0], method, priority: 0 });
            }
            return strategies; // 直接返回，只使用用户选择的协议
        }

        // 自动模式：如果有上次成功的策略，优先尝试
        if (this.connectionStrategy.lastSuccessfulStrategy) {
            strategies.push({
                protocol: this.connectionStrategy.lastSuccessfulStrategy.protocol,
                method: this.connectionStrategy.lastSuccessfulStrategy.method,
                priority: 0
            });
        }

        // 然后添加其他策略
        for (const protocol of protocols) {
            for (const method of methods) {
                // 跳过已经添加的优先策略
                if (this.connectionStrategy.lastSuccessfulStrategy &&
                    protocol === this.connectionStrategy.lastSuccessfulStrategy.protocol &&
                    method === this.connectionStrategy.lastSuccessfulStrategy.method) {
                    continue;
                }
                strategies.push({ protocol, method, priority: 1 });
            }
        }

        return strategies;
    }

    /**
     * 使用特定策略测试连接
     */
    async testConnectionWithStrategy(strategy) {
        try {
            const response = await this.requestWithStrategy('PROPFIND', '/', {
                headers: { 'Depth': '0' }
            }, strategy);

            return response.ok;
        } catch (error) {
            // 分析错误类型，用于优化后续策略
            this.analyzeError(error);
            return false;
        }
    }

    /**
     * 使用特定策略发送请求
     */
    async requestWithStrategy(method, path, options = {}, strategy = null) {
        // 如果没有指定策略，使用当前策略
        if (!strategy) {
            strategy = {
                protocol: this.connectionStrategy.currentProtocol || 'https',
                method: this.connectionStrategy.currentMethod || 'native'
            };
        }

        // 构建 URL
        const protocol = strategy.protocol;
        const url = `${protocol}://${this.baseUrl}${path}`;

        // 准备请求参数
        let actualMethod = method;
        let headers = this.buildHeaders(options.headers);

        // 如果使用伪装模式
        if (strategy.method === 'disguised' && ['PROPFIND', 'PROPPATCH', 'MKCOL'].includes(method)) {
            actualMethod = 'POST';
            headers['X-HTTP-Method-Override'] = method;
            headers['X-Original-Method'] = method;
            // 添加自定义标记，后端可以识别
            headers['X-WebDAV-Disguised'] = 'true';
        }

        // 通过 background script 发送请求
        const response = await this.sendRequest(actualMethod, url, headers, options.body);
        return response;
    }

    /**
     * 发送实际请求（通过 background script）
     */
    async sendRequest(method, url, headers, body) {
        const response = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.runtime.sendMessage({
            action: 'webdavRequest',
            params: {
                method,
                url,
                headers,
                body,
                timeout: this.retryConfig.timeout
            }
        });

        if (!response.success) {
            const error = new Error(response.error || 'WebDAV request failed');
            error.details = response;
            throw error;
        }

        return this.wrapResponse(response.data);
    }

    /**
     * 包装响应对象
     */
    wrapResponse(data) {
        return {
            ok: data.ok,
            status: data.status,
            statusText: data.statusText,
            data: data.data,
            text: async () => {
                if (typeof data.data === 'object') {
                    return JSON.stringify(data.data);
                }
                return data.data;
            },
            json: async () => {
                if (typeof data.data === 'string') {
                    try {
                        return JSON.parse(data.data);
                    } catch {
                        throw new Error('Invalid JSON response');
                    }
                }
                return data.data;
            }
        };
    }

    /**
     * 构建请求头
     */
    buildHeaders(customHeaders = {}) {
        const auth = btoa(`${this.username}:${this.password}`);

        return {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/xml; charset=utf-8',
            'User-Agent': 'LeetcodeMasteryScheduler/1.0',
            ...customHeaders
        };
    }

    /**
     * 分析错误类型，优化后续策略
     */
    analyzeError(error) {
        const errorMsg = error.message.toLowerCase();

        for (const [type, patterns] of Object.entries(this.errorPatterns)) {
            if (patterns.some(pattern => errorMsg.includes(pattern.toLowerCase()))) {
                console.log(`Detected error type: ${type}`);

                // 根据错误类型调整策略
                if (type === 'encryptionBlocked') {
                    // 加密被阻止，优先使用 HTTP
                    this.connectionStrategy.currentProtocol = 'http';
                } else if (type === 'methodBlocked') {
                    // 方法被阻止，使用伪装模式
                    this.connectionStrategy.currentMethod = 'disguised';
                }
                break;
            }
        }
    }

    /**
     * 智能请求方法 - 带自动重试和降级
     */
    async request(method, path, options = {}) {
        let retries = 0;
        let lastError = null;

        while (retries < this.retryConfig.maxRetries) {
            try {
                // 如果有当前成功的策略，先尝试
                if (this.connectionStrategy.currentProtocol && this.connectionStrategy.currentMethod) {
                    try {
                        return await this.requestWithStrategy(method, path, options);
                    } catch (error) {
                        console.log('Current strategy failed, trying alternatives...');
                        lastError = error;
                    }
                }

                // 尝试所有可能的策略
                const strategies = this.generateStrategies();

                for (const strategy of strategies) {
                    try {
                        const response = await this.requestWithStrategy(method, path, options, strategy);

                        // 如果成功，更新当前策略
                        if (response.ok || response.status < 500) {
                            this.connectionStrategy.currentProtocol = strategy.protocol;
                            this.connectionStrategy.currentMethod = strategy.method;
                            return response;
                        }
                    } catch (error) {
                        lastError = error;
                        continue;
                    }
                }

                retries++;
                if (retries < this.retryConfig.maxRetries) {
                    await this.delay(this.retryConfig.retryDelay * retries);
                }
            } catch (error) {
                lastError = error;
                retries++;
            }
        }

        // 所有策略都失败
        throw lastError || new Error('All connection strategies failed');
    }

    /**
     * 延迟函数
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * 确保文件夹存在
     */
    async ensureFolderExists() {
        try {
            const response = await this.request('PROPFIND', this.folderPath, {
                headers: { 'Depth': '0' }
            });

            if (!response.ok && response.status === 404) {
                await this.request('MKCOL', this.folderPath);
                console.log('Created folder:', this.folderPath);
            }
        } catch (error) {
            console.error('Error ensuring folder exists:', error);
        }
    }

    /**
     * 上传数据
     */
    async uploadData(filename, data) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const path = `${this.folderPath}${filename}`;
        const jsonData = JSON.stringify(data, null, 2);

        const response = await this.request('PUT', path, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        });

        if (response.ok || response.status === 201 || response.status === 204) {
            console.log(`Data uploaded to ${path}`);
            return true;
        } else {
            throw new Error(`Upload failed: ${response.status}`);
        }
    }

    /**
     * 下载数据
     */
    async downloadData(filename) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const path = `${this.folderPath}${filename}`;
        const response = await this.request('GET', path, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            if (response.data !== undefined) {
                if (typeof response.data === 'string') {
                    try {
                        return JSON.parse(response.data);
                    } catch {
                        return response.data;
                    }
                }
                return response.data;
            }
            return await response.json();
        } else if (response.status === 404) {
            return null;
        } else {
            throw new Error(`Download failed: ${response.status}`);
        }
    }

    /**
     * 列出文件
     */
    async listFiles() {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const response = await this.request('PROPFIND', this.folderPath, {
            headers: { 'Depth': '1' }
        });

        if (response.ok) {
            let xmlText;
            if (response.data !== undefined) {
                xmlText = typeof response.data === 'object' ? JSON.stringify(response.data) : response.data;
            } else {
                xmlText = await response.text();
            }
            return this.parseFileList(xmlText);
        } else {
            throw new Error(`List files failed: ${response.status}`);
        }
    }

    /**
     * 解析文件列表
     */
    parseFileList(xmlText) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'text/xml');
        const responses = doc.getElementsByTagNameNS('DAV:', 'response');

        const files = [];
        for (let i = 1; i < responses.length; i++) {
            const response = responses[i];
            const href = response.getElementsByTagNameNS('DAV:', 'href')[0]?.textContent;
            const displayName = response.getElementsByTagNameNS('DAV:', 'displayname')[0]?.textContent;
            const lastModified = response.getElementsByTagNameNS('DAV:', 'getlastmodified')[0]?.textContent;
            const contentLength = response.getElementsByTagNameNS('DAV:', 'getcontentlength')[0]?.textContent;

            if (href && displayName) {
                files.push({
                    name: displayName,
                    path: href,
                    lastModified: lastModified ? new Date(lastModified) : null,
                    size: contentLength ? parseInt(contentLength) : 0
                });
            }
        }

        return files;
    }

    /**
     * 删除文件
     */
    async deleteFile(filename) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const path = `${this.folderPath}${filename}`;
        const response = await this.request('DELETE', path);
        return response.ok || response.status === 204;
    }

    /**
     * 保存配置
     */
    async saveConfig(config) {
        const encryptedConfig = {
            username: config.username,
            password: btoa(config.password),
            serverUrl: config.serverUrl || 'dav.jianguoyun.com/dav',
            connectionStrategy: config.connectionStrategy || this.connectionStrategy,
            retryConfig: config.retryConfig || this.retryConfig,
            enabled: true
        };

        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.set({
            webdavEnhancedConfig: encryptedConfig
        });
    }

    /**
     * 保存连接策略
     */
    async saveStrategy() {
        const result = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.get('webdavEnhancedConfig');
        if (result.webdavEnhancedConfig) {
            result.webdavEnhancedConfig.connectionStrategy = this.connectionStrategy;
            await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.set({
                webdavEnhancedConfig: result.webdavEnhancedConfig
            });
        }
    }

    /**
     * 加载配置
     */
    async loadConfig() {
        try {
            // 优先加载增强版配置
            let result = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.get('webdavEnhancedConfig');
            let config = result.webdavEnhancedConfig;

            // 如果没有增强版配置，尝试迁移旧版配置
            if (!config || !config.enabled) {
                const oldResult = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.get('webdavConfig');
                if (oldResult.webdavConfig && oldResult.webdavConfig.enabled) {
                    console.log('Migrating from old WebDAV config to enhanced config');
                    // 迁移旧配置
                    config = {
                        ...oldResult.webdavConfig,
                        connectionStrategy: this.connectionStrategy,
                        retryConfig: this.retryConfig
                    };
                    // 保存为增强版配置
                    await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.set({ webdavEnhancedConfig: config });
                    // 删除旧配置
                    await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.remove('webdavConfig');
                }
            }

            if (config && config.enabled) {

                this.baseUrl = config.serverUrl || 'dav.jianguoyun.com/dav';
                this.baseUrl = this.baseUrl.replace(/^https?:\/\//, '');
                this.username = config.username;
                this.password = atob(config.password);
                this.isConfigured = true;

                // 恢复连接策略
                if (config.connectionStrategy) {
                    this.connectionStrategy = config.connectionStrategy;
                    // 如果有成功的策略记录，认为已认证
                    if (config.connectionStrategy.lastSuccessfulStrategy) {
                        this.isAuthenticated = true;

                        // 如果策略较老（超过1小时），后台静默验证
                        const strategyTime = new Date(config.connectionStrategy.lastSuccessfulStrategy.timestamp).getTime();
                        if (Date.now() - strategyTime > 60 * 60 * 1000) {
                            // 后台验证，不影响当前状态显示
                            this.smartConnect().then(isValid => {
                                this.isAuthenticated = isValid;
                                if (this.onAuthStatusChange && !isValid) {
                                    // 只在认证失败时通知
                                    this.onAuthStatusChange(false);
                                }
                            }).catch(error => {
                                console.error('WebDAV background connection test error:', error);
                            });
                        }
                    } else {
                        // 没有成功的策略记录，需要测试连接
                        this.isAuthenticated = false;
                    }
                }

                // 恢复重试配置
                if (config.retryConfig) {
                    this.retryConfig = config.retryConfig;
                }

                return true;
            }
        } catch (error) {
            console.error('Error loading WebDAV config:', error);
        }
        return false;
    }

    /**
     * 清除配置
     */
    async clearConfig() {
        this.baseUrl = null;
        this.username = null;
        this.password = null;
        this.isConfigured = false;
        this.connectionStrategy = {
            protocol: 'auto',
            method: 'auto',
            currentProtocol: null,
            currentMethod: null,
            lastSuccessfulStrategy: null
        };

        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.remove('webdavEnhancedConfig');
    }

    /**
     * 获取连接状态信息
     */
    getConnectionStatus() {
        return {
            isConfigured: this.isConfigured,
            isAuthenticated: this.isAuthenticated,
            strategy: this.connectionStrategy.lastSuccessfulStrategy,
            currentProtocol: this.connectionStrategy.currentProtocol,
            currentMethod: this.connectionStrategy.currentMethod
        };
    }

    // 保留原有的备份、恢复、同步等方法...
    async backupProblems(problems) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `problems_backup_${timestamp}.json`;

        const backupData = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            problemCount: problems.length,
            problems: problems
        };

        await this.uploadData(filename, backupData);
        await this.maintainBackupHistory();

        return filename;
    }

    async restoreProblems(filename) {
        const data = await this.downloadData(filename);
        if (data && data.problems) {
            return data.problems;
        }
        throw new Error('Invalid backup file');
    }

    async getBackupList() {
        const files = await this.listFiles();
        return files.filter(file =>
            file.name.startsWith('problems_backup_') &&
            file.name.endsWith('.json')
        ).sort((a, b) => b.lastModified - a.lastModified);
    }

    async maintainBackupHistory() {
        const backups = await this.getBackupList();
        if (backups.length > 10) {
            for (let i = 10; i < backups.length; i++) {
                await this.deleteFile(backups[i].name);
            }
        }
    }

    async syncData(localProblems, lastSyncTime) {
        const syncFilename = 'problems_sync.json';
        const cloudData = await this.downloadData(syncFilename);

        if (!cloudData) {
            await this.uploadData(syncFilename, {
                lastSync: new Date().toISOString(),
                problems: localProblems
            });
            return { problems: localProblems, conflicts: [] };
        }

        const mergedData = this.mergeProblems(localProblems, cloudData.problems);

        await this.uploadData(syncFilename, {
            lastSync: new Date().toISOString(),
            problems: mergedData.problems
        });

        return mergedData;
    }

    mergeProblems(localProblems, cloudProblems) {
        const merged = new Map();
        const conflicts = [];

        cloudProblems.forEach(problem => {
            merged.set(problem.id || problem.name, problem);
        });

        localProblems.forEach(problem => {
            const key = problem.id || problem.name;
            const cloudProblem = merged.get(key);

            if (!cloudProblem) {
                merged.set(key, problem);
            } else {
                const localTime = new Date(problem.lastModified || 0).getTime();
                const cloudTime = new Date(cloudProblem.lastModified || 0).getTime();

                if (localTime > cloudTime) {
                    merged.set(key, problem);
                } else if (localTime < cloudTime) {
                    // Keep cloud version
                } else if (JSON.stringify(problem) !== JSON.stringify(cloudProblem)) {
                    conflicts.push({
                        problemId: key,
                        local: problem,
                        cloud: cloudProblem
                    });
                }
            }
        });

        return {
            problems: Array.from(merged.values()),
            conflicts
        };
    }
}

// 导出单例
const webdavEnhancedService = new WebDAVEnhancedService();

/***/ }),

/***/ 214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ daily_store),
/* harmony export */   h: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);


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
    problemSortBy: _util_sort__WEBPACK_IMPORTED_MODULE_0__/* .problemSorters */ .SL.sortByReviewTimeAsc,
    isCloudSyncEnabled: false,
    defaultCardLimit: 1,
    isReminderEnabled: false
}

const daily_store = {
    dailyReviewProblems: null,
    reviewScheduledProblems: null

}

/***/ }),

/***/ 497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hj: () => (/* binding */ GL_LABLE),
/* harmony export */   IV: () => (/* binding */ PAGE_SIZE),
/* harmony export */   e7: () => (/* binding */ months),
/* harmony export */   mq: () => (/* binding */ forggettingCurve),
/* harmony export */   zY: () => (/* binding */ CN_LABLE)
/* harmony export */ });
/* unused harmony exports SUBMIT_BUTTON_ATTRIBUTE_NAME, SUBMIT_BUTTON_ATTRIBUTE_VALUE, SUCCESS_CLASSNAME_CN, WRONG_ANSWER_CLASSNAME_CN, COMPILE_ERROR_AND_TLE_CLASSNAME_CN, SUCCESS_CLASSNAME, WRONG_ANSWER_CLASSNAME, COMPILE_ERROR_AND_TLE_CLASSNAME, SUCCESS_CLASSNAME_NEW, WRONG_ANSWER_CLASSNAME_NEW, COMPILE_ERROR_AND_TLE_CLASSNAME_NEW */
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

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JF: () => (/* binding */ getFSRSParams),
/* harmony export */   Tb: () => (/* binding */ defaultParams),
/* harmony export */   Vd: () => (/* binding */ saveRevlog),
/* harmony export */   Z9: () => (/* binding */ exportRevlogsToCSV),
/* harmony export */   _L: () => (/* binding */ saveFSRSParams),
/* harmony export */   c8: () => (/* binding */ getAllRevlogs),
/* harmony export */   uY: () => (/* binding */ qualityToRating)
/* harmony export */ });
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);
/* harmony import */ var _delegate_cloudStorageDelegate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(188);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(214);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(867);






// 1. 创建自定义参数
const defaultParams = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .generatorParameters */ .EI)({
    request_retention: 0.9,          // 期望记忆保持率 90%
    maximum_interval: 365,           // 最大间隔天数
    enable_fuzz: false,              // 禁用时间模糊化
    enable_short_term: false          // 启用短期记忆影响
});

// 2. 评分映射（4个等级）
const qualityToRating = (quality) => {
    switch(quality) {
        case 1: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Again;  // 完全不会
        case 2: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Hard;   // 有点难
        case 3: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Good;   // 正常
        case 4: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Easy;   // 简单
        default: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Good;
    }
};

// 3. 获取本地FSRS参数
const getFSRSParams = async () => {
    try {
        const result = await _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.get('fsrs_params');
        console.log('找到本地FSRS参数:', result);
        if (!result) {
            console.log('未找到本地FSRS参数，使用默认参数');
            return defaultParams;
        }
        
        // 如果结果是字符串，尝试解析它
        if (typeof result === 'string') {
            try {
                const localParams = JSON.parse(result);
                console.log('获取到本地FSRS参数:', localParams);
                return localParams;
            } catch (e) {
                console.error('解析本地FSRS参数失败:', e);
                return defaultParams;
            }
        }
        
        // 如果结果已经是对象，直接返回
        return result;
    } catch (error) {
        console.error('获取本地FSRS参数失败:', error);
        return defaultParams;
    }
};

// 4. 保存FSRS参数到本地存储
const saveFSRSParams = async (newParams) => {
    try {
        // 为参数添加时间戳
        const paramsWithTimestamp = {
            ...newParams,
            timestamp: Date.now()
        };
        
        // 保存到本地存储（字符串格式）
        await _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.set('fsrs_params', JSON.stringify(paramsWithTimestamp));
        console.log('FSRS参数已保存到本地存储');
        
        // 保存到云端存储（对象格式）
        if (_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h.isCloudSyncEnabled) {
            await _delegate_cloudStorageDelegate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.set('fsrs_params', paramsWithTimestamp);
            console.log('FSRS参数已保存到云端存储');
        }
        
        return true;
    } catch (error) {
        console.error('保存FSRS参数失败:', error);
        return false;
    }
};

// 5. 保存单个复习日志
const saveRevlog = async (cardId, revlog) => {
    try {
        // 从 localStorage 获取现有的复习日志
        const { fsrs_revlogs: existingRevlogsStr = '{}' } = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.storage.local.get('fsrs_revlogs');

        
        let existingRevlogs;
        try {
            existingRevlogs = JSON.parse(existingRevlogsStr);
        } catch (e) {
            console.error('Error parsing revlogs:', e);
            existingRevlogs = {};
        }
        
        // 确保该卡片的日志数组存在
        if (!existingRevlogs[cardId]) {
            existingRevlogs[cardId] = [];
        }
        
        // 添加新的复习日志
        existingRevlogs[cardId].push(revlog);
        
        // 保存到本地存储
        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.storage.local.set({ 'fsrs_revlogs': JSON.stringify(existingRevlogs) });

        
        // 如果启用了云同步，同时保存到云端
        if (_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h.isCloudSyncEnabled) {
            await _delegate_cloudStorageDelegate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.set('fsrs_revlogs', existingRevlogs);
        }
        
        return true;
    } catch (error) {
        console.error('Error saving revlog:', error);
        return false;
    }
};

// 6. 获取所有复习日志
const getAllRevlogs = async () => {
    try {
        let result;
        
        // 如果启用了云同步，优先从云端获取
        if (_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h.isCloudSyncEnabled) {
            result = await _delegate_cloudStorageDelegate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get('fsrs_revlogs');
            if (result && Object.keys(result).length > 0) {
                console.log('从云端获取复习日志:', result);
                return result;
            }
        }
        
        // 如果云端没有数据或未启用云同步，从本地获取
        const { fsrs_revlogs: localRevlogs = '{}' } = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.storage.local.get('fsrs_revlogs');
        result = localRevlogs;

        
        // 如果结果是字符串，尝试解析它
        if (typeof result === 'string') {
            try {
                return JSON.parse(result);
            } catch (e) {
                console.error('Error parsing revlogs:', e);
                return {};
            }
        }
        
        // 如果结果已经是对象，直接返回
        return result || {};
    } catch (error) {
        console.error('Error getting revlogs:', error);
        return {};
    }
};

// 7. 导出复习日志为CSV格式
const exportRevlogsToCSV = async () => {
    try {
        // 获取所有复习日志
        const allRevlogs = await getAllRevlogs();
        
        // CSV 头部 - 只包含必要字段
        const csvHeader = 'card_id,review_time,review_rating,review_state\n';
        
        // 收集所有卡片的复习日志
        let csvContent = csvHeader;
        
        Object.keys(allRevlogs).forEach(cardId => {
            const cardRevlogs = allRevlogs[cardId] || [];
            cardRevlogs.forEach(log => {
                // 只导出必要字段
                csvContent += `${log.card_id},${log.review_time},${log.review_rating},${log.review_state}\n`;
            });
        });
        
        return csvContent;
    } catch (error) {
        console.error('Error exporting revlogs to CSV:', error);
        return '';
    }
};


/***/ }),

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $z: () => (/* binding */ CONFIG_INNER_KEY_ENABLE_CLOUD),
/* harmony export */   FB: () => (/* binding */ REVIEW_INTV_KEY),
/* harmony export */   I2: () => (/* binding */ OPS_HISTORY_KEY),
/* harmony export */   Q$: () => (/* binding */ CN_PROBLEM_KEY),
/* harmony export */   dw: () => (/* binding */ CN_MODE),
/* harmony export */   fR: () => (/* binding */ CONFIG_KEY),
/* harmony export */   hr: () => (/* binding */ DEFAULT_CARD_LIMIT_KEY),
/* harmony export */   pD: () => (/* binding */ DEFAULT_CARD_LIMIT_VALUE),
/* harmony export */   ql: () => (/* binding */ PROBLEM_SORT_BY_KEY),
/* harmony export */   y0: () => (/* binding */ PROBLEM_KEY)
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

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HF: () => (/* binding */ getSorterById),
/* harmony export */   SL: () => (/* binding */ problemSorters),
/* harmony export */   U9: () => (/* binding */ descriptionOf),
/* harmony export */   jD: () => (/* binding */ idOf),
/* harmony export */   vH: () => (/* binding */ problemSorterArr)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);


const reverse = (sorter) => {
    return (p1, p2) => -sorter(p1, p2)
}

const problemReviewTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getNextReviewTime */ .xt)(p1).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getNextReviewTime */ .xt)(p2).valueOf();
}

const problemDelayTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getDelayedHours */ .J1)(p2).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getDelayedHours */ .J1)(p1).valueOf();
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

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hj: () => (/* binding */ needReview),
/* harmony export */   J1: () => (/* binding */ getDelayedHours),
/* harmony export */   PN: () => (/* binding */ isCompleted),
/* harmony export */   PO: () => (/* binding */ scheduledReview),
/* harmony export */   qB: () => (/* binding */ getLevelColor),
/* harmony export */   tL: () => (/* binding */ getDifficultyBasedSteps),
/* harmony export */   vV: () => (/* binding */ calculatePageNum),
/* harmony export */   xt: () => (/* binding */ getNextReviewTime),
/* harmony export */   zJ: () => (/* binding */ simpleStringHash),
/* harmony export */   zV: () => (/* binding */ getCurrentRetrievability)
/* harmony export */ });
/* unused harmony exports isSubmitButton, getSubmissionResult, isSubmissionSuccess, updateProblemUponSuccessSubmission, mergeProblem, mergeProblems, syncStorage, syncLocalAndCloudStorage, mergeFSRSParams, mergeRevlogs */
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(188);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(497);
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);






const needReview = (problem) => {
    if (problem.proficiency >= _constants__WEBPACK_IMPORTED_MODULE_4__/* .forggettingCurve */ .mq.length) {
        return false;
    }

    const currentTime = Date.now();
    const timeDiffInMinute = (currentTime - problem.submissionTime) / (1000 * 60);
    return timeDiffInMinute >= _constants__WEBPACK_IMPORTED_MODULE_4__/* .forggettingCurve */ .mq[problem.proficiency];
};

const scheduledReview = (problem) => {
    // return !needReview(problem) && problem.proficiency < 5;
    return true;
};

const isCompleted = (problem) => {
    return problem.proficiency === 5;
};

const calculatePageNum = (problems) => {
    return Math.max(Math.ceil(problems.length / _constants__WEBPACK_IMPORTED_MODULE_4__/* .PAGE_SIZE */ .IV), 1);;
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
        date = new Date(problem.submissionTime + _constants__WEBPACK_IMPORTED_MODULE_4__/* .forggettingCurve */ .mq[problem.proficiency] * 60 * 1000);
    }
    
    return date;
}


const getDelayedHours = (problem) => {
    const nextReviewDate = getNextReviewTime(problem);
    return Math.round((Date.now() - nextReviewDate) / (60 * 60 * 1000));
}

const getDifficultyBasedSteps = (diffculty) => {
    if (diffculty === "Easy") {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.easyIntv;
    } else if (diffculty === "Medium") {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.mediumIntv;
    } else {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.hardIntv;
    }
}

const isSubmitButton = (element) => {
    return element.getAttribute(SUBMIT_BUTTON_ATTRIBUTE_NAME) === SUBMIT_BUTTON_ATTRIBUTE_VALUE;
}

const getSubmissionResult = () => {
    return document.getElementsByClassName(SUCCESS_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(SUCCESS_CLASSNAME)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME)[0] ||
    document.getElementsByClassName(SUCCESS_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME_NEW)[0];
}

const isSubmissionSuccess = (submissionResult) => {
    return submissionResult.className.includes(SUCCESS_CLASSNAME_CN) ||
    submissionResult.className.includes(SUCCESS_CLASSNAME_NEW) ||
    submissionResult.className.includes(SUCCESS_CLASSNAME);
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
        problem.proficiency = forggettingCurve.length;
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
    if (!store.isCloudSyncEnabled) return;
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
    await syncStorage(localStorageDelegate, cloudStorageDelegate, key, merger);
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
    
    const elapsedDays = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_3__/* .dateDiffInDays */ .LG)(new Date(problem.fsrsState.lastReview), new Date());
    return (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_3__/* .forgetting_curve */ .Un)(elapsedDays, problem.fsrsState.stability);
};

const mergeFSRSParams = (params1, params2) => {
    if (params2 === undefined || params2 === null) return params1;
    if (params1 === undefined || params1 === null) return params2;
    
    // 如果云端数据比本地数据新，使用云端数据
    const timestamp1 = params1.timestamp || 0;
    const timestamp2 = params2.timestamp || 0;
    
    // 返回较新的数据
    const mergedParams = timestamp1 > timestamp2 ? params1 : params2;
    
    // 确保返回的数据包含最新的时间戳
    mergedParams.timestamp = Date.now();
    
    return mergedParams;
}

const mergeRevlogs = (revlogs1, revlogs2) => {
    if (revlogs2 === undefined || revlogs2 === null) return revlogs1 || {};
    if (revlogs1 === undefined || revlogs1 === null) return revlogs2 || {};
    
    // 确保 revlogs1 和 revlogs2 是对象
    revlogs1 = typeof revlogs1 === 'object' ? revlogs1 : {};
    revlogs2 = typeof revlogs2 === 'object' ? revlogs2 : {};
    
    // 合并复习日志
    const mergedRevlogs = { ...revlogs1 };
    
    // 遍历第二个复习日志集合
    Object.keys(revlogs2).forEach(cardId => {
        if (!mergedRevlogs[cardId]) {
            // 如果第一个集合没有该卡片的复习日志，直接使用第二个集合的
            mergedRevlogs[cardId] = Array.isArray(revlogs2[cardId]) ? revlogs2[cardId] : [];
        } else {
            // 如果两个集合都有该卡片的复习日志，合并两边的日志
            const logs2 = Array.isArray(revlogs2[cardId]) ? revlogs2[cardId] : [];
            const logs1 = Array.isArray(mergedRevlogs[cardId]) ? mergedRevlogs[cardId] : [];
            
            // 创建一个Map来存储唯一的复习日志
            const uniqueLogsMap = new Map();
            
            // 添加第一个集合的日志
            logs1.forEach(log => {
                if (log && typeof log === 'object') {
                    const key = `${log.card_id}_${log.review_time}_${log.review_rating}`;
                    uniqueLogsMap.set(key, log);
                }
            });
            
            // 添加第二个集合的日志
            logs2.forEach(log => {
                if (log && typeof log === 'object') {
                    const key = `${log.card_id}_${log.review_time}_${log.review_rating}`;
                    uniqueLogsMap.set(key, log);
                }
            });
            
            // 转换回数组并按时间排序
            mergedRevlogs[cardId] = Array.from(uniqueLogsMap.values())
                .sort((a, b) => b.review_time - a.review_time);
        }
    });
    
    return mergedRevlogs;
}




/***/ }),

/***/ 842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xy: () => (/* binding */ renderAll),
  pX: () => (/* binding */ renderScheduledTableContent)
});

// UNUSED EXPORTS: renderCompletedTableContent, renderReviewTableContent, renderSiteMode, renderUndoButton

// EXTERNAL MODULE: ./src/popup/store.js
var popup_store = __webpack_require__(214);
// EXTERNAL MODULE: ./src/popup/service/modeService.js
var modeService = __webpack_require__(733);
// EXTERNAL MODULE: ./src/popup/service/problemService.js + 1 modules
var problemService = __webpack_require__(820);
// EXTERNAL MODULE: ./src/popup/util/constants.js
var constants = __webpack_require__(497);
;// CONCATENATED MODULE: ./src/popup/util/doms.js
const doms_input0DOM = document.getElementById("pageInput0");
const doms_inputLabel0DOM = document.getElementById("pageInputLabel0");
const doms_prevButton0DOM = document.getElementById("prevButton0");
const doms_nextButton0DOM = document.getElementById("nextButton0");

const input1DOM = document.getElementById("pageInput1");
const inputLabel1DOM = document.getElementById("pageInputLabel1");
const prevButton1DOM = document.getElementById("prevButton1");
const nextButton1DOM = document.getElementById("nextButton1");

const doms_input2DOM = document.getElementById("pageInput2");
const doms_inputLabel2DOM = document.getElementById("pageInputLabel2");
const doms_prevButton2DOM = document.getElementById("prevButton2");
const doms_nextButton2DOM = document.getElementById("nextButton2");

const doms_needReviewTableDOM = document.getElementById("need-review-table");
const noReviewTableDOM = document.getElementById("no-review-table");
const doms_completedTableDOM = document.getElementById("completed-table");

const checkButtonDOMs = document.getElementsByClassName("check-btn-mark");
const deleteButtonDOMs = document.getElementsByClassName("delete-btn-mark");
const resetButtonDOMs = document.getElementsByClassName("reset-btn-mark");
const undoButtonDOMs = document.getElementsByClassName("undo-ops-btn");
const configButtonDOMs = document.getElementsByClassName("config-btn");

const siteLabelDOM = document.getElementById("siteLabel");
const switchButtonDOM = document.getElementById('switchButton');

const optionPageFeedbackMsgDOM = document.getElementById('feedbackMessage');

const popupPageDOM = document.defaultView;
// EXTERNAL MODULE: ./src/popup/util/utils.js
var utils = __webpack_require__(384);
// EXTERNAL MODULE: ./src/shared/browser.js
var browser = __webpack_require__(867);
;// CONCATENATED MODULE: ./src/popup/handler/configJumpHandler.js



const setConfigJumpHandlers = () => {
    if (configButtonDOMs !== undefined) {
        Array.prototype.forEach.call(configButtonDOMs, (btn) => btn.onclick = async (e) => {
            browser/* default */.Z.runtime.openOptionsPage();
        });
    }
}
// EXTERNAL MODULE: ./src/popup/daily-review.js + 6 modules
var daily_review = __webpack_require__(326);
;// CONCATENATED MODULE: ./src/popup/handler/modeSwitchHandler.js





const switchMode = async () => {
    await (0,modeService/* toggleMode */.b)();
    await renderAll();
    // 更新每日复习视图
    await (0,daily_review/* initializeReviewPage */.M)();
}

const setModeSwitchHandlers = () => {
    switchButtonDOM.onclick = switchMode;
}
// EXTERNAL MODULE: ./src/popup/service/operationHistoryService.js
var operationHistoryService = __webpack_require__(809);
;// CONCATENATED MODULE: ./src/popup/handler/recordOperationHandler.js






const initTooltips = () => {
    popup_store/* store */.h.tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    popup_store/* store */.h.tooltipList = [...popup_store/* store */.h.tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

const hide_all_tooltips = () => {
    popup_store/* store */.h.tooltipList.forEach(tooltip => tooltip._hideModalHandler());
}

const recordOperationHandler_setRecordOperationHandlers = () => {

    initTooltips();

    if (checkButtonDOMs !== undefined) {
        Array.prototype.forEach.call(checkButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await (0,problemService/* markProblemAsMastered */.Vv)(event.target.dataset.id);
            await renderAll();
        });
    }

    if (deleteButtonDOMs !== undefined) {
        Array.prototype.forEach.call(deleteButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await (0,problemService/* deleteProblem */.aG)(event.target.dataset.id);
            await renderAll();
        });
    }

    if (resetButtonDOMs !== undefined) {
        Array.prototype.forEach.call(resetButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await (0,problemService/* resetProblem */.wB)(event.target.dataset.id);
            await renderAll();
        });
    }

    if (undoButtonDOMs !== undefined) {
        Array.prototype.forEach.call(undoButtonDOMs, (btn) => btn.onclick = async () => {
            hide_all_tooltips();
            await (0,operationHistoryService/* undoLatestOperation */.Z_)();
            await renderAll();
        });
    }
}
// EXTERNAL MODULE: ./src/popup/delegate/localStorageDelegate.js
var localStorageDelegate = __webpack_require__(891);
;// CONCATENATED MODULE: ./src/popup/handler/noteHandler.js





// 获取所有笔记
const getAllNotes = async () => {
    try {
        const notes = await (0,localStorageDelegate/* getLocalStorageData */.Cy)("notes");
        return notes || {};
    } catch (e) {
        console.error("获取笔记数据失败", e);
        return {}; // 返回空对象而不是抛出错误
    }
};

// 同步笔记到存储
const syncNotes = async (notes) => {
    if (!notes) {
        notes = await getAllNotes();
    }
    await (0,localStorageDelegate/* setLocalStorageData */.qy)("notes", notes);
    return notes;
};

// 注册笔记相关事件处理
const noteHandler_setNoteHandlers = () => {
    console.log("注册笔记处理程序");
    
    // 使用事件委托来处理笔记按钮点击
    document.removeEventListener('click', handleNoteButtonClick); // 先移除之前的监听器，避免重复
    document.addEventListener('click', handleNoteButtonClick);
    
    // 注册保存笔记按钮事件
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    if (saveNoteBtn) {
        console.log("找到保存按钮");
        saveNoteBtn.addEventListener('click', saveNote);
    } else {
        console.error("找不到保存按钮");
    }
    
    // 注册取消按钮事件
    const cancelBtns = document.querySelectorAll('[data-bs-dismiss="modal"]');
    if (cancelBtns.length > 0) {
        console.log("找到取消按钮");
        cancelBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 关闭模态框
                const noteModal = document.getElementById('noteModal');
                if (noteModal) {
                    noteModal.style.display = 'none';
                    noteModal.classList.remove('show');
                }
            });
        });
    } else {
        console.error("找不到取消按钮");
    }
    
    // 注册导出笔记按钮事件
    const exportNotesBtn = document.getElementById('exportNotesBtn');
    if (exportNotesBtn) {
        console.log("找到导出按钮");
        exportNotesBtn.addEventListener('click', exportAllNotes);
    } else {
        console.error("找不到导出按钮");
    }
    
    // 初始化工具提示
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// 单独定义处理函数，便于移除
const handleNoteButtonClick = (e) => {
    const noteButton = e.target.closest('.note-btn-mark');
    if (noteButton) {
        console.log("点击了笔记按钮", noteButton);
        console.log("按钮元素:", noteButton);
        console.log("data-id属性:", noteButton.getAttribute('data-id'));
        
        const problemIndex = noteButton.getAttribute('data-id');
        if (problemIndex) {
            openNoteModal(problemIndex);
        } else {
            console.error("笔记按钮没有 data-id 属性");
        }
    }
};

// 打开笔记模态框
const openNoteModal = async (problemIndex) => {
    try {
        console.log("打开笔记模态框，问题索引:", problemIndex);
        
        // 使用 getAllProblems 获取问题数据
        const problems = await (0,problemService.getAllProblems)();
        const problem = problems[problemIndex];
        
        // 如果没有找到问题数据
        if (!problem) {
            console.error("找不到问题数据:", problemIndex);
            return;
        }
        
        // 获取笔记数据
        const notes = await getAllNotes();
        const noteData = notes[problemIndex];
        
        console.log("问题数据:", problem);
        
        // 使用自定义方式打开模态框
        const noteModal = document.getElementById('noteModal');
        if (!noteModal) {
            console.error("找不到模态框元素");
            return;
        }
        
        // 显示模态框
        noteModal.style.display = 'block';
        noteModal.classList.add('show');
        
        // 设置问题索引到隐藏字段
        const problemIndexInput = document.getElementById('problemIndex');
        if (problemIndexInput) {
            problemIndexInput.value = problemIndex;
        } else {
            console.error("找不到问题索引输入框");
        }
        
        // 设置问题名称 - 使用 innerHTML 直接设置
        const problemNameContainer = document.querySelector('.modal-body .mb-3:first-of-type');
        if (problemNameContainer) {
            // 如果有自定义名称，优先使用自定义名称
            const customName = noteData && typeof noteData === 'object' ? noteData.customName : undefined;
            const problemName = customName || problem.name || "未知问题";
            
            problemNameContainer.innerHTML = `
                <label for="noteProblemName" class="form-label">问题名称 (Problem Name)</label>
                <input type="text" class="form-control" id="noteProblemName" value="${problemName}" placeholder="${problem.name || '未知问题'}" style="color: #000 !important; background-color: #fff !important;">
            `;
            console.log("重新创建了问题名称输入框，值为:", problemName);
        } else {
            console.error("找不到问题名称容器");
        }
        
        // 设置笔记内容
        const noteContentTextarea = document.getElementById('noteContent');
        if (noteContentTextarea) {
            noteContentTextarea.value = noteData ? (typeof noteData === 'object' ? noteData.content : noteData) : '';
        } else {
            console.error("找不到笔记内容文本框");
        }
        
        // 设置焦点到文本区域
        setTimeout(() => {
            if (document.getElementById('noteContent')) {
                document.getElementById('noteContent').focus();
            }
        }, 100);
    } catch (e) {
        console.error("打开笔记模态框失败", e);
        alert("打开笔记失败，请查看控制台获取详细错误信息");
    }
}

// 保存笔记
const saveNote = async () => {
    try {
        const problemIndex = document.getElementById('problemIndex').value;
        const problemNameInput = document.getElementById('noteProblemName');
        const noteContent = document.getElementById('noteContent').value;
        
        // 获取用户输入的问题名称，如果输入框为空则使用占位符
        let problemName = "";
        if (problemNameInput) {
            problemName = problemNameInput.value.trim() || problemNameInput.getAttribute('placeholder') || "";
        }
        
        console.log("保存笔记，问题索引:", problemIndex);
        console.log("保存笔记，问题名称:", problemName);
        
        const notes = await getAllNotes();
        
        // 使用 getAllProblems 获取问题数据
        const problems = await (0,problemService.getAllProblems)();
        const problem = problems[problemIndex];
        
        if (!problem) {
            console.error("找不到问题数据:", problemIndex);
            return;
        }
        
        console.log("原问题名称:", problem.name);
        
        // 如果笔记为空，则删除该条目
        if (noteContent.trim() === '') {
            delete notes[problemIndex];
        } else {
            // 保存笔记内容和用户输入的问题名称
            notes[problemIndex] = {
                content: noteContent,
                customName: problemName !== problem.name ? problemName : undefined
            };
        }
        
        // 保存到本地存储
        await syncNotes(notes);
        
        // 清除焦点
        document.activeElement?.blur();
        
        // 关闭模态框
        const noteModal = document.getElementById('noteModal');
        noteModal.style.display = 'none';
        noteModal.classList.remove('show');
        
        // 获取最新的问题数据
        const allProblems = await (0,problemService.getAllProblems)();
        
        // 先销毁所有现有的工具提示
        const existingTooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        existingTooltips.forEach(el => {
            const tooltip = bootstrap.Tooltip.getInstance(el);
            if (tooltip) {
                tooltip.dispose();
            }
        });
        
        // 刷新表格以更新笔记图标和问题名称
        await renderScheduledTableContent(popup_store/* store */.h.reviewScheduledProblems, popup_store/* store */.h.scheduledPage);

        // 重新初始化工具提示
        setTimeout(() => {
            // 确保先销毁所有可能存在的工具提示实例
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
            tooltipTriggerList.forEach(el => {
                // 创建新的工具提示实例
                new bootstrap.Tooltip(el, {
                    trigger: 'hover',  // 只在悬停时显示
                    container: 'body', // 将工具提示附加到 body
                    boundary: 'window' // 确保工具提示不会超出窗口边界
                });
            });
            
            // 重新注册事件监听器
            noteHandler_setNoteHandlers();
        }, 200); // 增加延迟时间确保 DOM 完全更新
        
        console.log("笔记已保存");
    } catch (e) {
        console.error("保存笔记失败", e);
        alert("保存笔记失败，请查看控制台获取详细错误信息");
    }
}

// 导出所有笔记
const exportAllNotes = async () => {
    try {
        // 使用 getAllProblems 获取问题数据
        const problems = await (0,problemService.getAllProblems)();
        const notes = await getAllNotes();
        let notesContent = "# LeetCode Mastery Scheduler notes\n\n";
        notesContent += "开源仓库链接/repo url: https://github.com/xiaohajiayou/Leetcode-Mastery-Scheduler" + "\n\n";

        // 筛选有笔记的问题
        const problemIndicesWithNotes = Object.keys(notes).filter(index => 
            problems[index] && !problems[index].isDeleted && 
            (typeof notes[index] === 'string' ? notes[index].trim().length > 0 : 
             (notes[index].content && notes[index].content.trim().length > 0))
        );
        
        if (problemIndicesWithNotes.length === 0) {
            alert("没有找到任何笔记！");
            return;
        }
        
        // 按问题名称排序
        problemIndicesWithNotes.sort((a, b) => 
            (problems[a].name || "").localeCompare(problems[b].name || "")
        );
        
        // 生成markdown格式的笔记内容
        problemIndicesWithNotes.forEach(index => {
            const problem = problems[index];
            const noteData = notes[index];
            const noteContent = typeof noteData === 'string' ? noteData : noteData.content;
            const problemName = (typeof noteData === 'object' && noteData.customName) || problem.name || "未命名问题";
            
            notesContent += `## ${problemName}\n\n`;
            notesContent += `- 难度: ${problem.level || '未知'}\n`;
            notesContent += `- 链接: ${problem.url || '#'}\n\n`;
            notesContent += `### 笔记\n\n${noteContent}\n\n---\n\n`;
        });
        
        // 创建下载链接
        const blob = new Blob([notesContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `leetcode_notes_${new Date().toISOString().slice(0, 10)}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log("笔记已导出");
    } catch (e) {
        console.error("导出笔记失败", e);
        alert("导出笔记失败，请查看控制台获取详细错误信息");
    }
} 
;// CONCATENATED MODULE: ./src/popup/handler/pageJumpHandler.js






const goToPrevReviewPage = () => {
    renderReviewTableContent(store.needReviewProblems, store.toReviewPage - 1);
    setRecordOperationHandlers();
    setNoteHandlers();
}
const goToNextReviewPage = () => {
    renderReviewTableContent(store.needReviewProblems, store.toReviewPage + 1);
    setRecordOperationHandlers();
    setNoteHandlers();
}
const goToPrevSchedulePage = async () => {
    await renderScheduledTableContent(popup_store/* store */.h.reviewScheduledProblems, popup_store/* store */.h.scheduledPage - 1);
    recordOperationHandler_setRecordOperationHandlers();
    noteHandler_setNoteHandlers();
}

const goToNextSchedulePage = async () => {
    await renderScheduledTableContent(popup_store/* store */.h.reviewScheduledProblems, popup_store/* store */.h.scheduledPage + 1);
    recordOperationHandler_setRecordOperationHandlers();
    noteHandler_setNoteHandlers();
}

const goToPrevCompletedPage = () => {
    renderCompletedTableContent(store.completedProblems, store.completedPage - 1);
    setRecordOperationHandlers();
    setNoteHandlers();
}

const goToNextCompletedPage = () => {
    renderCompletedTableContent(store.completedProblems, store.completedPage + 1);
    setRecordOperationHandlers();
    setNoteHandlers();
}

const jumpToReviewPage = (event) => {
    if (event.keyCode !== 13) return;
    let page = parseInt(event.target.value);
    if (isNaN(page) || !Number.isInteger(page)) {
        input0DOM.classList.add("is-invalid");
        return;
    }
    input0DOM.classList.remove("is-invalid");
    if (page === store.toReviewPage) return;
    renderReviewTableContent(store.needReviewProblems, page);
    setRecordOperationHandlers();
}

const jumpToSchedulePage = (event) => {
    if (event.keyCode !== 13) return;
    let page = parseInt(event.target.value);
    if (isNaN(page) || !Number.isInteger(page)) {
        input1DOM.classList.add("is-invalid");
        return;
    }
    input1DOM.classList.remove("is-invalid");
    if (page === popup_store/* store */.h.scheduledPage) return;
    renderScheduledTableContent(popup_store/* store */.h.reviewScheduledProblems, page);
    recordOperationHandler_setRecordOperationHandlers();
}

const jumpToCompletedPage = (event) => {
    if (event.keyCode !== 13) return;
    let page = parseInt(event.target.value);
    if (isNaN(page) || !Number.isInteger(page)) {
        input2DOM.classList.add("is-invalid");
        return;
    }
    input2DOM.classList.remove("is-invalid");
    if (page === store.completedPage) return;
    renderCompletedTableContent(store.needReviewProblems, page);
    setRecordOperationHandlers();
}

const setPageJumpHandlers = () => {
    // prevButton0DOM.onclick = goToPrevReviewPage;
    // nextButton0DOM.onclick = goToNextReviewPage;
    prevButton1DOM.onclick = goToPrevSchedulePage;
    nextButton1DOM.onclick = goToNextSchedulePage;
    // prevButton2DOM.onclick = goToPrevCompletedPage;
    // nextButton2DOM.onclick = goToNextCompletedPage;
    
    // input0DOM.onkeydown = jumpToReviewPage;
    input1DOM.onkeydown = jumpToSchedulePage;
    // input2DOM.onkeydown = jumpToCompletedPage;
}
;// CONCATENATED MODULE: ./src/popup/handler/popupUnloadHandler.js




const setPopupUnloadHandler = () => {
    if (popupPageDOM !== undefined) {
        
        popupPageDOM.addEventListener('unload', async () => {    
            await (0,problemService/* syncProblems */.xd)();
        })
    }
}
;// CONCATENATED MODULE: ./src/popup/handler/handlerRegister.js







const registerAllHandlers = () => {
    setPageJumpHandlers();
    setModeSwitchHandlers();
    recordOperationHandler_setRecordOperationHandlers();
    setConfigJumpHandlers();
    setPopupUnloadHandler();
    noteHandler_setNoteHandlers();
}
// EXTERNAL MODULE: ./src/popup/service/configService.js
var configService = __webpack_require__(970);
// EXTERNAL MODULE: ./src/popup/service/fsrsService.js
var fsrsService = __webpack_require__(990);
;// CONCATENATED MODULE: ./src/popup/view/view.js












/*
    Tag for problem records
*/
const getProblemUrlCell = (problem, width) => {
    const levelColor = (0,utils/* getLevelColor */.qB)(problem.level);
    return `<td style="width: ${width || 45}%;  min-width: 60px; max-width: 0; overflow: hidden;">\
        <a target="_blank" 
           href=${problem.url}
           data-bs-toggle="tooltip" 
           data-bs-placement="top" 
           title="${problem.name} (${problem.level})"
           style="text-decoration: none; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">\
            <small style="color: ${levelColor}; font-size: 0.95em;">${problem.name}</small>\
        </a>\
    </td>`;
};

// const getProblemLevelCell = (problem, width) => `<td style="width: ${width | 12}%;"><small>${decorateProblemLevel(problem.level)}</small></td>`;

// 新增：生成可检索性单元格的函数
const getRetrievabilityCell = (problem) => {
    const retrievability = (0,utils/* getCurrentRetrievability */.zV)(problem);
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
    <td style="width: 15%; vertical-align: middle; text-align: center;">\
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

const getNoteButtonTag = (problem, notes) => {
    const hasNote = notes[problem.index] && notes[problem.index].content.trim().length > 0;
    return `<small class="fa-regular ${hasNote ? 'fa-file-lines' : 'fa-file'} fa-2xs mt-2 mb-0 note-btn-mark"\ 
                data-bs-toggle="tooltip" data-bs-title="${hasNote ? '📝 查看/编辑笔记 (View/Edit Note)' : '📝 添加笔记 (Add Note)'}" data-bs-placement="left"\
                style="color: ${hasNote ? '#4682b4' : '#808080'}; margin-left: 8px; cursor: pointer;" data-id="${problem.index}"> </small>`;
}

const createReviewProblemRecord = (problem) => {
    const htmlTag =
        `\
    <tr>\
        ${getProblemUrlCell(problem)}\
        <td><small>${getDelayedHours(problem)} hour(s)</small></td>\
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

const createScheduleProblemRecord = async (problem) => {
    const nextReviewDate = (0,utils/* getNextReviewTime */.xt)(problem);
    
    // 获取笔记数据
    let notes = {};
    try {
        notes = await (0,localStorageDelegate/* getLocalStorageData */.Cy)("notes") || {};
    } catch (e) {
        console.error("获取笔记数据失败", e);
    }
    
    const htmlTag =
        `\
    <tr style="vertical-align:middle">\
        ${getProblemUrlCell(problem, 45)}\
        <td style="text-align: center; width: 20%; padding: 0;"><small data-bs-toggle="tooltip" data-bs-placement="top" title="${formatFullDate(nextReviewDate)}">${formatDateTime(nextReviewDate)}</small></td>\
        ${getRetrievabilityCell(problem)}\
        <td style="width: 20%; text-align: center; vertical-align:middle">\
            ${getDeleteButtonTag(problem)}\
            ${getNoteButtonTag(problem, notes)}\
        </td>\
    </tr>\
    `;
    return htmlTag;
}

// 添加一个日期格式化辅助函数
const formatDateTime = (date) => {
    const pad = (n) => n < 10 ? `0${n}` : n;
    return `${constants/* months */.e7[date.getMonth()]} ${date.getDate()}`;
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

// 添加笔记模态框HTML
const renderNoteModal = () => {
    // 检查是否已经存在模态框
    if (document.getElementById('noteModal')) {
        console.log("笔记模态框已存在，不再创建");
        return; // 如果已存在，不再创建
    }
    
    console.log("开始创建笔记模态框");
    
    const modalHTML = `
    <div class="modal" id="noteModal" tabindex="-1" role="dialog" style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="noteModalLabel">Problem Note</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="problemIndex">
                    <div class="mb-3">
                        <label for="problemName" class="form-label">问题名称 (Problem Name)</label>
                        <input type="text" class="form-control" id="problemName" placeholder="">
                    </div>
                    <div class="mb-3">
                        <label for="noteContent" class="form-label">笔记内容 (Note Content)</label>
                        <textarea class="form-control" id="noteContent" rows="6" placeholder="在这里输入笔记内容... (Enter your notes here...)"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="saveNoteBtn">Save</button>
                </div>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .modal.show {
            display: block !important;
            background-color: rgba(0, 0, 0, 0.5);
        }
        #problemName, #noteContent {
            color: #000 !important;
            background-color: #fff !important;
        }
        #problemName::placeholder {
            color: #555 !important;
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(style);
    
    console.log("笔记模态框已创建，检查元素:");
    console.log("问题名称输入框:", document.getElementById('problemName'));
    console.log("笔记内容文本框:", document.getElementById('noteContent'));
}



// 添加一个全局函数用于初始化所有 tooltip
const initializeTooltips = () => {
    // 先移除所有现有的 tooltip 元素
    document.querySelectorAll('.tooltip').forEach(el => {
        el.remove();
    });
    
    // 销毁所有现有的 tooltip 实例
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        const tooltip = bootstrap.Tooltip.getInstance(el);
        if (tooltip) {
            tooltip.dispose();
        }
    });
    
    // 初始化新的 tooltip
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        new bootstrap.Tooltip(el, {
            trigger: 'hover focus', // 只在悬停或获取焦点时显示
            container: 'body',      // 将 tooltip 附加到 body
            boundary: 'window'      // 确保 tooltip 不超出窗口
        });
    });
};

const view_renderReviewTableContent = (problems, page) => {
    /* validation */
    console.log(store.toReviewMaxPage);
    if (page > store.toReviewMaxPage || page < 1) {
        input0DOM.classList.add("is-invalid");
        return;
    }
    input0DOM.classList.remove("is-invalid");

    store.toReviewPage = page;

    /* update pagination elements */
    input0DOM.value = page;
    inputLabel0DOM.innerText = `/${store.toReviewMaxPage}`;

    if (page === 1) prevButton0DOM.setAttribute("disabled", "disabled");
    if (page !== 1) prevButton0DOM.removeAttribute("disabled");
    if (page === store.toReviewMaxPage) nextButton0DOM.setAttribute("disabled", "disabled");
    if (page !== store.toReviewMaxPage) nextButton0DOM.removeAttribute("disabled");

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

    problems = problems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    let keys = Object.keys(problems);
    for (const i of keys) {
        content_html += createReviewProblemRecord(problems[i]) + '\n';
    }
    content_html += `</tbody>`

    needReviewTableDOM.innerHTML = content_html;
}

const renderScheduledTableContent = async (problems, page) => {
    /* validation */
    if (page > popup_store/* store */.h.scheduledMaxPage || page < 1) {
        input1DOM.classList.add("is-invalid");
        return;
    }
    input1DOM.classList.remove("is-invalid");

    popup_store/* store */.h.scheduledPage = page;

    /* update pagination elements */
    input1DOM.value = page;
    inputLabel1DOM.innerText = `/${popup_store/* store */.h.scheduledMaxPage}`;

    if (page === 1) prevButton1DOM.setAttribute("disabled", "disabled");
    if (page !== 1) prevButton1DOM.removeAttribute("disabled");
    if (page === popup_store/* store */.h.scheduledMaxPage) nextButton1DOM.setAttribute("disabled", "disabled");
    if (page !== popup_store/* store */.h.scheduledMaxPage) nextButton1DOM.removeAttribute("disabled");

    let content_html =
        '\
    <thead>\
        <tr style="font-size: smaller">\
            <th class="text-center" style="width: 35%">Problem</th>\
            <th class="text-center" style="width: 25%">Review</th>\
            <th class="text-center" style="width: 20%">Recall</th>\
            <th class="text-center" style="width: 20%">Action</th>\
        </tr>\
    </thead>\
    <tbody>\
    ';

    // if (!Array.isArray(problems)) {
    //     problems = Object.values(problems);
    // }
    // problems为store.reviewScheduledProblems,即滤除了delete的题目
    problems = problems.slice((page - 1) * constants/* PAGE_SIZE */.IV, page * constants/* PAGE_SIZE */.IV);

    let keys = Object.keys(problems);
    
    // 获取笔记数据
    let notes = {};
    try {
        notes = await (0,localStorageDelegate/* getLocalStorageData */.Cy)("notes") || {};
    } catch (e) {
        console.error("获取笔记数据失败", e);
    }

    for (const i of keys) {
        const problem = problems[i];
        // 使用 createScheduleProblemRecord 函数创建问题记录
        content_html += await createScheduleProblemRecord(problem);
    }

    content_html += `</tbody>`

    noReviewTableDOM.innerHTML = content_html;
    
    // 初始化 tooltip
    setTimeout(() => {
        initializeTooltips();
    }, 100);
}

const view_renderCompletedTableContent = (problems, page) => {

    /* validation */
    if (page > store.completedMaxPage || page < 1) {
        input2DOM.classList.add("is-invalid");
        return;
    }
    input2DOM.classList.remove("is-invalid");

    store.completedPage = page;

    /* update pagination elements */
    input2DOM.value = page;
    inputLabel2DOM.innerText = `/${store.completedMaxPage}`;

    if (page === 1) prevButton2DOM.setAttribute("disabled", "disabled");
    if (page !== 1) prevButton2DOM.removeAttribute("disabled");
    if (page === store.completedMaxPage) nextButton2DOM.setAttribute("disabled", "disabled");
    if (page !== store.completedMaxPage) nextButton2DOM.removeAttribute("disabled");

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

    problems = problems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    let keys = Object.keys(problems);
    for (const i of keys) {
        content_html += createCompletedProblemRecord(problems[i]) + '\n';
    }

    content_html += `</tbody>`
    completedTableDOM.innerHTML = content_html;
    
    // 初始化 tooltip
    setTimeout(() => {
        initializeTooltips();
    }, 100);
}

const renderSiteMode = async () => {
    let cnMode = await (0,modeService/* isInCnMode */.B)();
    if (cnMode) {
        switchButtonDOM.setAttribute("checked", "checked");
        siteLabelDOM.innerHTML = constants/* CN_LABLE */.zY;
    } else {
        switchButtonDOM.removeAttribute("checked");
        siteLabelDOM.innerHTML = constants/* GL_LABLE */.Hj;
    }
}

const renderUndoButton = async () => {
    if (await (0,operationHistoryService/* hasOperationHistory */.$j)()) {
        Array.prototype.forEach.call(undoButtonDOMs, btn => btn.removeAttribute("disabled"));
    } else {
        Array.prototype.forEach.call(undoButtonDOMs, btn => btn.setAttribute("disabled", "disabled"));
    }
} 

const renderAll = async () => {
    await (0,configService/* loadConfigs */.O1)();
    await renderSiteMode();
    // 不要在每次 renderAll 时都同步，这会干扰防抖同步
    // await syncProblems();
    // await syncFSRSHistory();

    // 创建笔记模态框

    


    const problems = Object.values(await (0,problemService.getAllProblems)()).filter(p => p.isDeleted !== true);
    console.log('Filtering and sorting problems...');
    
    // 过滤不同类型的问题
    popup_store/* store */.h.needReviewProblems = problems.filter(utils/* needReview */.Hj);
    console.log('Need Review Problems:', {
        count: popup_store/* store */.h.needReviewProblems.length,
        problems: popup_store/* store */.h.needReviewProblems
    });

    popup_store/* store */.h.reviewScheduledProblems = problems.filter(utils/* scheduledReview */.PO);
    console.log('Scheduled Review Problems:', {
        count: popup_store/* store */.h.reviewScheduledProblems.length,
        problems: popup_store/* store */.h.reviewScheduledProblems
    });

    popup_store/* store */.h.completedProblems = problems.filter(utils/* isCompleted */.PN);
    console.log('Completed Problems:', {
        count: popup_store/* store */.h.completedProblems.length,
        problems: popup_store/* store */.h.completedProblems
    });

    // 计算页数
    popup_store/* store */.h.toReviewMaxPage = (0,utils/* calculatePageNum */.vV)(popup_store/* store */.h.needReviewProblems);
    popup_store/* store */.h.scheduledMaxPage = (0,utils/* calculatePageNum */.vV)(popup_store/* store */.h.reviewScheduledProblems);
    popup_store/* store */.h.completedMaxPage = (0,utils/* calculatePageNum */.vV)(popup_store/* store */.h.completedProblems);
    console.log('Page Counts:', {
        toReview: popup_store/* store */.h.toReviewMaxPage,
        scheduled: popup_store/* store */.h.scheduledMaxPage,
        completed: popup_store/* store */.h.completedMaxPage
    });

    // 排序
    console.log('Sorting by:', popup_store/* store */.h.problemSortBy);
    popup_store/* store */.h.needReviewProblems.sort(popup_store/* store */.h.problemSortBy);
    popup_store/* store */.h.reviewScheduledProblems.sort(popup_store/* store */.h.problemSortBy);
    popup_store/* store */.h.completedProblems.sort(popup_store/* store */.h.problemSortBy);
    
    console.log('Filtering and sorting completed.');

    // renderReviewTableContent(store.needReviewProblems, 1);
    await renderScheduledTableContent(popup_store/* store */.h.reviewScheduledProblems, 1);
    // renderCompletedTableContent(store.completedProblems, 1);
    await renderUndoButton();
    renderNoteModal();

    registerAllHandlers();
    
    // 初始化所有 tooltip
    setTimeout(() => {
        initializeTooltips();
    }, 200);
    
    // 添加全局点击事件监听器，点击页面任何地方时隐藏所有 tooltip
    document.addEventListener('click', (e) => {
        // 如果点击的不是 tooltip 触发元素，则隐藏所有 tooltip
        if (!e.target.hasAttribute('data-bs-toggle') || e.target.getAttribute('data-bs-toggle') !== 'tooltip') {
            document.querySelectorAll('.tooltip').forEach(el => {
                el.remove();
            });
        }
    });
}


/***/ }),

/***/ 867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 131:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2361dafb%27/%3e%3c/svg%3e";

/***/ }),

/***/ 61:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EI: () => (/* binding */ $),
/* harmony export */   Ke: () => (/* binding */ W),
/* harmony export */   LG: () => (/* binding */ z),
/* harmony export */   Un: () => (/* binding */ O),
/* harmony export */   ZM: () => (/* binding */ c),
/* harmony export */   iG: () => (/* binding */ l),
/* harmony export */   mc: () => (/* binding */ h),
/* harmony export */   sH: () => (/* binding */ _),
/* harmony export */   tl: () => (/* binding */ x)
/* harmony export */ });
/* unused harmony exports AbstractScheduler, CLAMP_PARAMETERS, DECAY, DefaultInitSeedStrategy, FACTOR, FSRSAlgorithm, FSRSVersion, GenSeedStrategyWithCardId, Grades, INIT_S_MAX, StrategyMode, clamp, date_diff, date_scheduler, default_enable_fuzz, default_enable_short_term, default_maximum_interval, default_request_retention, default_w, fixDate, fixRating, fixState, formatDate, fsrs, get_fuzz_range, show_diff_message */
var c=(s=>(s[s.New=0]="New",s[s.Learning=1]="Learning",s[s.Review=2]="Review",s[s.Relearning=3]="Relearning",s))(c||{}),l=(s=>(s[s.Manual=0]="Manual",s[s.Again=1]="Again",s[s.Hard=2]="Hard",s[s.Good=3]="Good",s[s.Easy=4]="Easy",s))(l||{});class h{static card(t){return{...t,state:h.state(t.state),due:h.time(t.due),last_review:t.last_review?h.time(t.last_review):void 0}}static rating(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=l[`${e}${i}`];if(a===void 0)throw new Error(`Invalid rating:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid rating:[${t}]`)}static state(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=c[`${e}${i}`];if(a===void 0)throw new Error(`Invalid state:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid state:[${t}]`)}static time(t){if(typeof t=="object"&&t instanceof Date)return t;if(typeof t=="string"){const e=Date.parse(t);if(isNaN(e))throw new Error(`Invalid date:[${t}]`);return new Date(e)}else if(typeof t=="number")return new Date(t);throw new Error(`Invalid date:[${t}]`)}static review_log(t){return{...t,due:h.time(t.due),rating:h.rating(t.rating),state:h.state(t.state),review:h.time(t.review)}}}const X="4.7.0";Date.prototype.scheduler=function(s,t){return L(this,s,t)},Date.prototype.diff=function(s,t){return I(this,s,t)},Date.prototype.format=function(){return G(this)},Date.prototype.dueFormat=function(s,t,e){return N(this,s,t,e)};function L(s,t,e){return new Date(e?h.time(s).getTime()+t*24*60*60*1e3:h.time(s).getTime()+t*60*1e3)}function I(s,t,e){if(!s||!t)throw new Error("Invalid date");const i=h.time(s).getTime()-h.time(t).getTime();let a=0;switch(e){case"days":a=Math.floor(i/(24*60*60*1e3));break;case"minutes":a=Math.floor(i/(60*1e3));break}return a}function G(s){const t=h.time(s),e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),r=t.getHours(),n=t.getMinutes(),d=t.getSeconds();return`${e}-${p(i)}-${p(a)} ${p(r)}:${p(n)}:${p(d)}`}function p(s){return s<10?`0${s}`:`${s}`}const S=[60,60,24,31,12],E=["second","min","hour","day","month","year"];function N(s,t,e,i=E){s=h.time(s),t=h.time(t),i.length!==E.length&&(i=E);let a=s.getTime()-t.getTime(),r;for(a/=1e3,r=0;r<S.length&&!(a<S[r]);r++)a/=S[r];return`${Math.floor(a)}${e?i[r]:""}`}function J(s){return h.time(s)}function K(s){return h.state(s)}function Q(s){return h.rating(s)}const k=[l.Again,l.Hard,l.Good,l.Easy],Z=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function C(s,t,e){let i=1;for(const n of Z)i+=n.factor*Math.max(Math.min(s,n.end)-n.start,0);s=Math.min(s,e);let a=Math.max(2,Math.round(s-i));const r=Math.min(Math.round(s+i),e);return s>t&&(a=Math.max(a,t+1)),a=Math.min(a,r),{min_ivl:a,max_ivl:r}}function m(s,t,e){return Math.min(Math.max(s,t),e)}function z(s,t){const e=Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),i=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());return Math.floor((i-e)/864e5)}const T=.9,U=36500,q=[.40255,1.18385,3.173,15.69105,7.1949,.5345,1.4604,.0046,1.54575,.1192,1.01925,1.9395,.11,.29605,2.2698,.2315,2.9898,.51655,.6621],P=!1,Y=!0,tt=(/* unused pure expression or super */ null && (`v${X} using FSRS-5.0`)),_=.01,v=100,R=[[_,v],[_,v],[_,v],[_,v],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,2],[0,2]],$=s=>{let t=q;return s?.w&&(s.w.length===19?t=s?.w:s.w.length===17&&(t=s?.w.concat([0,0]),t[4]=+(t[5]*2+t[4]).toFixed(8),t[5]=+(Math.log(t[5]*3+1)/3).toFixed(8),t[6]=+(t[6]+.5).toFixed(8),console.debug("[FSRS V5]auto fill w to 19 length"))),t=t.map((e,i)=>m(e,R[i][0],R[i][1])),{request_retention:s?.request_retention||T,maximum_interval:s?.maximum_interval||U,w:t,enable_fuzz:s?.enable_fuzz??P,enable_short_term:s?.enable_short_term??Y}};function x(s,t){const e={due:s?h.time(s):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,state:c.New,last_review:void 0};return t&&typeof t=="function"?t(e):e}class et{c;s0;s1;s2;constructor(t){const e=it();this.c=1,this.s0=e(" "),this.s1=e(" "),this.s2=e(" "),t==null&&(t=+new Date),this.s0-=e(t),this.s0<0&&(this.s0+=1),this.s1-=e(t),this.s1<0&&(this.s1+=1),this.s2-=e(t),this.s2<0&&(this.s2+=1)}next(){const t=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.s2=t-(this.c=t|0),this.s2}set state(t){this.c=t.c,this.s0=t.s0,this.s1=t.s1,this.s2=t.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function it(){let s=4022871197;return function(t){t=String(t);for(let e=0;e<t.length;e++){s+=t.charCodeAt(e);let i=.02519603282416938*s;s=i>>>0,i-=s,i*=s,s=i>>>0,i-=s,s+=i*4294967296}return(s>>>0)*23283064365386963e-26}}function at(s){const t=new et(s),e=()=>t.next();return e.int32=()=>t.next()*4294967296|0,e.double=()=>e()+(e()*2097152|0)*11102230246251565e-32,e.state=()=>t.state,e.importState=i=>(t.state=i,e),e}const D=-.5,H=19/81;function O(s,t){return+Math.pow(1+H*s/t,D).toFixed(8)}class V{param;intervalModifier;_seed;constructor(t){this.param=new Proxy($(t),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention)}get interval_modifier(){return this.intervalModifier}set seed(t){this._seed=t}calculate_interval_modifier(t){if(t<=0||t>1)throw new Error("Requested retention rate should be in the range (0,1]");return+((Math.pow(t,1/D)-1)/H).toFixed(8)}get parameters(){return this.param}set parameters(t){this.update_parameters(t)}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)&&(t.intervalModifier=t.calculate_interval_modifier(Number(a))),Reflect.set(e,i,a),!0}}}update_parameters(t){const e=$(t);for(const i in e)if(i in this.param){const a=i;this.param[a]=e[a]}}init_stability(t){return Math.max(this.param.w[t-1],.1)}init_difficulty(t){return this.constrain_difficulty(this.param.w[4]-Math.exp((t-1)*this.param.w[5])+1)}apply_fuzz(t,e){if(!this.param.enable_fuzz||t<2.5)return Math.round(t);const i=at(this._seed)(),{min_ivl:a,max_ivl:r}=C(t,e,this.param.maximum_interval);return Math.floor(i*(r-a+1)+a)}next_interval(t,e){const i=Math.min(Math.max(1,Math.round(t*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(i,e)}linear_damping(t,e){return+(t*(10-e)/9).toFixed(8)}next_difficulty(t,e){const i=-this.param.w[6]*(e-3),a=t+this.linear_damping(i,t);return this.constrain_difficulty(this.mean_reversion(this.init_difficulty(l.Easy),a))}constrain_difficulty(t){return Math.min(Math.max(+t.toFixed(8),1),10)}mean_reversion(t,e){return+(this.param.w[7]*t+(1-this.param.w[7])*e).toFixed(8)}next_recall_stability(t,e,i,a){const r=l.Hard===a?this.param.w[15]:1,n=l.Easy===a?this.param.w[16]:1;return+m(e*(1+Math.exp(this.param.w[8])*(11-t)*Math.pow(e,-this.param.w[9])*(Math.exp((1-i)*this.param.w[10])-1)*r*n),_,36500).toFixed(8)}next_forget_stability(t,e,i){return+m(this.param.w[11]*Math.pow(t,-this.param.w[12])*(Math.pow(e+1,this.param.w[13])-1)*Math.exp((1-i)*this.param.w[14]),_,36500).toFixed(8)}next_short_term_stability(t,e){return+m(t*Math.exp(this.param.w[17]*(e-3+this.param.w[18])),_,36500).toFixed(8)}forgetting_curve=O;next_state(t,e,i){const{difficulty:a,stability:r}=t??{difficulty:0,stability:0};if(e<0)throw new Error(`Invalid delta_t "${e}"`);if(i<0||i>4)throw new Error(`Invalid grade "${i}"`);if(a===0&&r===0)return{difficulty:this.init_difficulty(i),stability:this.init_stability(i)};if(i===0)return{difficulty:a,stability:r};if(a<1||r<_)throw new Error(`Invalid memory state { difficulty: ${a}, stability: ${r} }`);const n=this.forgetting_curve(e,r),d=this.next_recall_stability(a,r,n,i),u=this.next_forget_stability(a,r,n),o=this.next_short_term_stability(r,i);let f=d;if(i===1){let[y,w]=[0,0];this.param.enable_short_term&&(y=this.param.w[17],w=this.param.w[18]);const g=r/Math.exp(y*w);f=m(+g.toFixed(8),_,u)}return e===0&&this.param.enable_short_term&&(f=o),{difficulty:this.next_difficulty(a,i),stability:f}}}function A(){const s=this.review_time.getTime(),t=this.current.reps,e=this.current.difficulty*this.current.stability;return`${s}_${t}_${e}`}function rt(s){return function(){const t=Reflect.get(this.current,s)??0,e=this.current.reps;return String(t+e||0)}}var b=(s=>(s.SCHEDULER="Scheduler",s.SEED="Seed",s))(b||{});class F{last;current;review_time;next=new Map;algorithm;initSeedStrategy;constructor(t,e,i,a={seed:A}){this.algorithm=i,this.initSeedStrategy=a.seed.bind(this),this.last=h.card(t),this.current=h.card(t),this.review_time=h.time(e),this.init()}init(){const{state:t,last_review:e}=this.current;let i=0;t!==c.New&&e&&(i=z(e,this.review_time)),this.current.last_review=this.review_time,this.current.elapsed_days=i,this.current.reps+=1,this.algorithm.seed=this.initSeedStrategy()}preview(){return{[l.Again]:this.review(l.Again),[l.Hard]:this.review(l.Hard),[l.Good]:this.review(l.Good),[l.Easy]:this.review(l.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const t of k)yield this.review(t)}review(t){const{state:e}=this.last;let i;switch(e){case c.New:i=this.newState(t);break;case c.Learning:case c.Relearning:i=this.learningState(t);break;case c.Review:i=this.reviewState(t);break}if(i)return i;throw new Error("Invalid grade")}buildLog(t){const{last_review:e,due:i,elapsed_days:a}=this.last;return{rating:t,state:this.current.state,due:e||i,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.current.elapsed_days,last_elapsed_days:a,scheduled_days:this.current.scheduled_days,review:this.review_time}}}class j extends F{newState(t){const e=this.next.get(t);if(e)return e;const i=h.card(this.current);switch(i.difficulty=this.algorithm.init_difficulty(t),i.stability=this.algorithm.init_stability(t),t){case l.Again:i.scheduled_days=0,i.due=this.review_time.scheduler(1),i.state=c.Learning;break;case l.Hard:i.scheduled_days=0,i.due=this.review_time.scheduler(5),i.state=c.Learning;break;case l.Good:i.scheduled_days=0,i.due=this.review_time.scheduler(10),i.state=c.Learning;break;case l.Easy:{const r=this.algorithm.next_interval(i.stability,this.current.elapsed_days);i.scheduled_days=r,i.due=this.review_time.scheduler(r,!0),i.state=c.Review;break}default:throw new Error("Invalid grade")}const a={card:i,log:this.buildLog(t)};return this.next.set(t,a),a}learningState(t){const e=this.next.get(t);if(e)return e;const{state:i,difficulty:a,stability:r}=this.last,n=h.card(this.current),d=this.current.elapsed_days;switch(n.difficulty=this.algorithm.next_difficulty(a,t),n.stability=this.algorithm.next_short_term_stability(r,t),t){case l.Again:{n.scheduled_days=0,n.due=this.review_time.scheduler(5,!1),n.state=i;break}case l.Hard:{n.scheduled_days=0,n.due=this.review_time.scheduler(10),n.state=i;break}case l.Good:{const o=this.algorithm.next_interval(n.stability,d);n.scheduled_days=o,n.due=this.review_time.scheduler(o,!0),n.state=c.Review;break}case l.Easy:{const o=this.algorithm.next_short_term_stability(r,l.Good),f=this.algorithm.next_interval(o,d),y=Math.max(this.algorithm.next_interval(n.stability,d),f+1);n.scheduled_days=y,n.due=this.review_time.scheduler(y,!0),n.state=c.Review;break}default:throw new Error("Invalid grade")}const u={card:n,log:this.buildLog(t)};return this.next.set(t,u),u}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:r}=this.last,n=this.algorithm.forgetting_curve(i,r),d=h.card(this.current),u=h.card(this.current),o=h.card(this.current),f=h.card(this.current);this.next_ds(d,u,o,f,a,r,n),this.next_interval(d,u,o,f,i),this.next_state(d,u,o,f),d.lapses+=1;const y={card:d,log:this.buildLog(l.Again)},w={card:u,log:super.buildLog(l.Hard)},g={card:o,log:super.buildLog(l.Good)},M={card:f,log:super.buildLog(l.Easy)};return this.next.set(l.Again,y),this.next.set(l.Hard,w),this.next.set(l.Good,g),this.next.set(l.Easy,M),this.next.get(t)}next_ds(t,e,i,a,r,n,d){t.difficulty=this.algorithm.next_difficulty(r,l.Again);const u=n/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]),o=this.algorithm.next_forget_stability(r,n,d);t.stability=m(+u.toFixed(8),_,o),e.difficulty=this.algorithm.next_difficulty(r,l.Hard),e.stability=this.algorithm.next_recall_stability(r,n,d,l.Hard),i.difficulty=this.algorithm.next_difficulty(r,l.Good),i.stability=this.algorithm.next_recall_stability(r,n,d,l.Good),a.difficulty=this.algorithm.next_difficulty(r,l.Easy),a.stability=this.algorithm.next_recall_stability(r,n,d,l.Easy)}next_interval(t,e,i,a,r){let n,d;n=this.algorithm.next_interval(e.stability,r),d=this.algorithm.next_interval(i.stability,r),n=Math.min(n,d),d=Math.max(d,n+1);const u=Math.max(this.algorithm.next_interval(a.stability,r),d+1);t.scheduled_days=0,t.due=this.review_time.scheduler(5),e.scheduled_days=n,e.due=this.review_time.scheduler(n,!0),i.scheduled_days=d,i.due=this.review_time.scheduler(d,!0),a.scheduled_days=u,a.due=this.review_time.scheduler(u,!0)}next_state(t,e,i,a){t.state=c.Relearning,e.state=c.Review,i.state=c.Review,a.state=c.Review}}class B extends F{newState(t){const e=this.next.get(t);if(e)return e;this.current.scheduled_days=0,this.current.elapsed_days=0;const i=h.card(this.current),a=h.card(this.current),r=h.card(this.current),n=h.card(this.current);return this.init_ds(i,a,r,n),this.next_interval(i,a,r,n,0),this.next_state(i,a,r,n),this.update_next(i,a,r,n),this.next.get(t)}init_ds(t,e,i,a){t.difficulty=this.algorithm.init_difficulty(l.Again),t.stability=this.algorithm.init_stability(l.Again),e.difficulty=this.algorithm.init_difficulty(l.Hard),e.stability=this.algorithm.init_stability(l.Hard),i.difficulty=this.algorithm.init_difficulty(l.Good),i.stability=this.algorithm.init_stability(l.Good),a.difficulty=this.algorithm.init_difficulty(l.Easy),a.stability=this.algorithm.init_stability(l.Easy)}learningState(t){return this.reviewState(t)}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:r}=this.last,n=this.algorithm.forgetting_curve(i,r),d=h.card(this.current),u=h.card(this.current),o=h.card(this.current),f=h.card(this.current);return this.next_ds(d,u,o,f,a,r,n),this.next_interval(d,u,o,f,i),this.next_state(d,u,o,f),d.lapses+=1,this.update_next(d,u,o,f),this.next.get(t)}next_ds(t,e,i,a,r,n,d){t.difficulty=this.algorithm.next_difficulty(r,l.Again);const u=this.algorithm.next_forget_stability(r,n,d);t.stability=m(n,_,u),e.difficulty=this.algorithm.next_difficulty(r,l.Hard),e.stability=this.algorithm.next_recall_stability(r,n,d,l.Hard),i.difficulty=this.algorithm.next_difficulty(r,l.Good),i.stability=this.algorithm.next_recall_stability(r,n,d,l.Good),a.difficulty=this.algorithm.next_difficulty(r,l.Easy),a.stability=this.algorithm.next_recall_stability(r,n,d,l.Easy)}next_interval(t,e,i,a,r){let n,d,u,o;n=this.algorithm.next_interval(t.stability,r),d=this.algorithm.next_interval(e.stability,r),u=this.algorithm.next_interval(i.stability,r),o=this.algorithm.next_interval(a.stability,r),n=Math.min(n,d),d=Math.max(d,n+1),u=Math.max(u,d+1),o=Math.max(o,u+1),t.scheduled_days=n,t.due=this.review_time.scheduler(n,!0),e.scheduled_days=d,e.due=this.review_time.scheduler(d,!0),i.scheduled_days=u,i.due=this.review_time.scheduler(u,!0),a.scheduled_days=o,a.due=this.review_time.scheduler(o,!0)}next_state(t,e,i,a){t.state=c.Review,e.state=c.Review,i.state=c.Review,a.state=c.Review}update_next(t,e,i,a){const r={card:t,log:this.buildLog(l.Again)},n={card:e,log:super.buildLog(l.Hard)},d={card:i,log:super.buildLog(l.Good)},u={card:a,log:super.buildLog(l.Easy)};this.next.set(l.Again,r),this.next.set(l.Hard,n),this.next.set(l.Good,d),this.next.set(l.Easy,u)}}class st{fsrs;constructor(t){this.fsrs=t}replay(t,e,i){return this.fsrs.next(t,e,i)}handleManualRating(t,e,i,a,r,n,d){if(typeof e>"u")throw new Error("reschedule: state is required for manual rating");let u,o;if(e===c.New)u={rating:l.Manual,state:e,due:d??i,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},o=x(i),o.last_review=i;else{if(typeof d>"u")throw new Error("reschedule: due is required for manual rating");const f=d.diff(i,"days");u={rating:l.Manual,state:t.state,due:t.last_review||t.due,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},o={...t,state:e,due:d,last_review:i,stability:r||t.stability,difficulty:n||t.difficulty,elapsed_days:a,scheduled_days:f,reps:t.reps+1}}return{card:o,log:u}}reschedule(t,e){const i=[];let a=x(t.due);for(const r of e){let n;if(r.review=h.time(r.review),r.rating===l.Manual){let d=0;a.state!==c.New&&a.last_review&&(d=r.review.diff(a.last_review,"days")),n=this.handleManualRating(a,r.state,r.review,d,r.stability,r.difficulty,r.due?h.time(r.due):void 0)}else n=this.replay(a,r.review,r.rating);i.push(n),a=n.card}return i}calculateManualRecord(t,e,i,a){if(!i)return null;const{card:r,log:n}=i,d=h.card(t);return d.due.getTime()===r.due.getTime()?null:(d.scheduled_days=r.due.diff(d.due,"days"),this.handleManualRating(d,r.state,h.time(e),n.elapsed_days,a?r.stability:void 0,a?r.difficulty:void 0,r.due))}}class W extends V{strategyHandler=new Map;Scheduler;constructor(t){super(t);const{enable_short_term:e}=this.parameters;this.Scheduler=e?j:B}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)?t.intervalModifier=t.calculate_interval_modifier(Number(a)):i==="enable_short_term"&&(t.Scheduler=a===!0?j:B),Reflect.set(e,i,a),!0}}}useStrategy(t,e){return this.strategyHandler.set(t,e),this}clearStrategy(t){return t?this.strategyHandler.delete(t):this.strategyHandler.clear(),this}getScheduler(t,e){const i=this.strategyHandler.get(b.SEED),a=this.strategyHandler.get(b.SCHEDULER)||this.Scheduler,r=i||A;return new a(t,e,this,{seed:r})}repeat(t,e,i){const a=this.getScheduler(t,e).preview();return i&&typeof i=="function"?i(a):a}next(t,e,i,a){const r=this.getScheduler(t,e),n=h.rating(i);if(n===l.Manual)throw new Error("Cannot review a manual rating");const d=r.review(n);return a&&typeof a=="function"?a(d):d}get_retrievability(t,e,i=!0){const a=h.card(t);e=e?h.time(e):new Date;const r=a.state!==c.New?Math.max(e.diff(a.last_review,"days"),0):0,n=a.state!==c.New?this.forgetting_curve(r,+a.stability.toFixed(8)):0;return i?`${(n*100).toFixed(2)}%`:n}rollback(t,e,i){const a=h.card(t),r=h.review_log(e);if(r.rating===l.Manual)throw new Error("Cannot rollback a manual rating");let n,d,u;switch(r.state){case c.New:n=r.due,d=void 0,u=0;break;case c.Learning:case c.Relearning:case c.Review:n=r.review,d=r.due,u=a.lapses-(r.rating===l.Again&&r.state===c.Review?1:0);break}const o={...a,due:n,stability:r.stability,difficulty:r.difficulty,elapsed_days:r.last_elapsed_days,scheduled_days:r.scheduled_days,reps:Math.max(0,a.reps-1),lapses:Math.max(0,u),state:r.state,last_review:d};return i&&typeof i=="function"?i(o):o}forget(t,e,i=!1,a){const r=h.card(t);e=h.time(e);const n=r.state===c.New?0:e.diff(r.last_review,"days"),d={rating:l.Manual,state:r.state,due:r.due,stability:r.stability,difficulty:r.difficulty,elapsed_days:0,last_elapsed_days:r.elapsed_days,scheduled_days:n,review:e},u={card:{...r,due:e,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:i?0:r.reps,lapses:i?0:r.lapses,state:c.New,last_review:r.last_review},log:d};return a&&typeof a=="function"?a(u):u}reschedule(t,e=[],i={}){const{recordLogHandler:a,reviewsOrderBy:r,skipManual:n=!0,now:d=new Date,update_memory_state:u=!1}=i;r&&typeof r=="function"&&e.sort(r),n&&(e=e.filter(M=>M.rating!==l.Manual));const o=new st(this),f=o.reschedule(i.first_card||x(),e),y=f.length,w=h.card(t),g=o.calculateManualRecord(w,d,y?f[y-1]:void 0,u);return a&&typeof a=="function"?{collections:f.map(a),reschedule_item:g?a(g):null}:{collections:f,reschedule_item:g}}}const nt=s=>new W(s||{});
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 			42: 0
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
/******/ 	__webpack_require__(14);
/******/ 	var __webpack_exports__ = __webpack_require__(326);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map