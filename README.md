# 课题组网站模板

## 文件结构

```
.
├── index.html    # 主页面
├── styles.css    # 样式文件
└── script.js     # 交互脚本
```

## 快速开始

直接用浏览器打开 `index.html` 即可预览。

## 部署方式

1. **GitHub Pages**: 上传到 GitHub 仓库，开启 Pages 功能
2. **清华大学站点**: 放到 `public_html` 目录，通过 `https://yourname.tsinghua.edu.cn` 访问
3. **任何 Web 服务器**: Nginx / Apache 指向该目录

## 修改指南

### 基本信息
打开 `index.html`，搜索以下内容进行修改：
- `清华大学 计算机科学与技术系` → 你的院系名称
- `智能感知与自主系统课题组` → 你的课题组名称
- `李 平` → 导师姓名
- `liping@tsinghua.edu.cn` → 邮箱地址

### 研究方向
找到 `<section id="research">` 部分，修改 4 个 `.research-item` 的内容。

### 团队成员
找到 `<section id="people">` 部分，按层级修改 PI / 博士生 / 硕士生 / 实习生信息。

### 论文列表
找到 `<section id="publications">` 部分，按年份分组添加论文条目。

### 项目信息
找到 `<section id="projects">` 部分，修改项目卡片中的编号、名称、经费来源。

### 动态新闻
找到 `<section id="news">` 部分，按时间倒序添加新闻条目。

### 联系方式
找到 `<section id="contact">` 部分，修改地址、邮箱、电话。

### 配色方案
打开 `styles.css`，修改 `:root` 中的 CSS 变量：
- `--maroon: #7B2D3B` → 主色调（当前为暗红色）
- 改为 `#1A5276` 可切换为深蓝色系
- 改为 `#2E4057` 可切换为深灰蓝色系

## 注意事项

- 头像照片：将照片放到 `assets/photos/` 目录，替换 `.person-photo` 的 background 为 `url('assets/photos/xxx.jpg')`
- 地图嵌入：在联系我们区域，将 `.map-placeholder` 替换为百度地图 iframe 代码
- 论文数据：建议后期接入 Google Scholar API 或手动维护

## 浏览器兼容

支持 Chrome / Firefox / Edge / Safari 最近两个大版本。
